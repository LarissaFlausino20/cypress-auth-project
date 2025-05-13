🧪 Automação de Testes de API com Cypress

Este projeto é voltado para a automação de testes de API utilizando o Cypress. Apesar de ser amplamente conhecido por testes E2E em interfaces web, o Cypress também oferece uma API poderosa para testar endpoints HTTP de forma simples e eficiente.

📁 Estrutura do Projeto

cypress/e2e/: Onde ficam os arquivos de teste das APIs.

cypress.config.js: Arquivo de configuração principal do Cypress.

package.json: Contém as dependências e scripts do projeto.



⚙️ Como executar os testes

Modo interativo (útil para desenvolvimento)

npx cypress open

Modo headless (execução em linha de comando, ideal para CI/CD)

npx cypress run

🔍 Exemplos de Testes
Os testes estão organizados no diretório cypress/e2e/ e utilizam comandos como:


cy.request('GET', '/api/endpoint').then((response) => {
  expect(response.status).to.eq(200);
});

✅ Requisitos

Node.js (v18 ou superior recomendado)

npm (v9 ou superior)

Cypress (v13.x)

📄 Scripts úteis

npm test: Executa os testes no modo headless.

npx cypress open: Abre a interface gráfica do Cypress.

npx cypress run: Executa todos os testes em linha de comando.
