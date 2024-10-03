// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('ApplicationLogin', (email, password) => {
//     cy.visit('https://careglp-staging.carevalidate.com/login')
//     cy.get('[data-testid="login-with-password"]').click()
//     cy.get('input[name="email"]').should('be.visible').type(email, { log: false })
//     cy.get('input[name="password"]').should('be.visible').type(password, { log: false })
//    cy.get('[data-testid="continue"]',{ timeout: 20000 }).click({ force: true })
//     cy.wait(5000)
cy.visit('https://careglp-staging.carevalidate.com/login')
cy.get('[data-testid="login-with-password"]',{ timeout: 10000 }).click()
cy.get('input[name="email"]').type('qa+employee@carevalidate.com')
cy.get('input[name="password"]').type('bLPgk5tr7D3ZqpXvV@aNKz')
cy.get('button[type=submit]').click()
//cy.wait(5000)
})


Cypress.Commands.add('LogOut', () => {
    cy.get('.block').click({force:true})
    cy.get('[data-testid="logout"] > .q-item__section').contains('Log out').click({ force: true })
})
   


