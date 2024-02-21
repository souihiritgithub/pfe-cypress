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
Cypress.Commands.add("loginRct01", () => {
      cy.visit("https://rct01-developpement.owliance.net/owlinkbytessi/#!/login?UnauthorizedError=Unauthorized");
      cy.get('[id="form-username"]').should('be.visible').type('AUTO');
      cy.get('[id="form-password"]').should('be.visible').type('AUTO654321');
      cy.contains('Connexion').click();
  })

  Cypress.Commands.add("loginRct02", () => {
    cy.visit("https://rct02-developpement.owliance.net/owlinkbytessi/#!/login?UnauthorizedError=Unauthorized");
    cy.get('[id="form-username"]').should('be.visible').type('AUTO');
    cy.get('[id="form-password"]').should('be.visible').type('AUTO654321');
    cy.contains('Connexion').click();
})