/// <reference types="cypress"/>

describe('Update Booking', () => {

    var token = ''
    var bookingid = ''

    before('Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                "username": "admin",
                "password": "password123"
            }
        })
            .then((response) => {
                expect(response.status).to.eql(200)
                token = response.body.token
            })
    })

    beforeEach('Create Booking', () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                "firstname": "Eduardo",
                "lastname": "Finotti",
                "totalprice": 2000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-10-01",
                    "checkout": "2024-10-15"
                },
                "additionalneeds": "Breakfast"
            }
        })
            .then((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.bookingid).to.be.a('number')
                expect(response.body.booking.totalprice).to.eql(2000)
                bookingid = response.body.bookingid
            })
    })

    it('Update Booking', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
            body: {
                "firstname": "Nome Alterado",
                "lastname": "Sobrenome Finotti",
                "totalprice": 5000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-10-01",
                    "checkout": "2024-10-15"
                },
                "additionalneeds": "Breakfast"
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
                // 'Cookie': 'token=' + token
            }
        })
            .then((response) => {
                expect(response.status).to.eql(200)
                expect(response.body.totalprice).to.eql(5000)
            })
    })

    it('Update Booking without token', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
            failOnStatusCode: false,
            body: {
                "firstname": "Nome Alterado",
                "lastname": "Sobrenome Finotti",
                "totalprice": 5000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-10-01",
                    "checkout": "2024-10-15"
                },
                "additionalneeds": "Breakfast"
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
    })

    it('Update Booking with invalid token', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingid}`,
            failOnStatusCode: false,
            body: {
                "firstname": "Nome Alterado",
                "lastname": "Sobrenome Finotti",
                "totalprice": 5000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-10-01",
                    "checkout": "2024-10-15"
                },
                "additionalneeds": "Breakfast"
            },
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': 'token=12333eduardo'
            }
        })
    })
})