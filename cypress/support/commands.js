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
Cypress.Commands.add('loginRct01', () => {
    cy.viewport(1920,1080);
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit('https://rct01-developpement.owliance.net/owlinkbytessi/#!/');
    cy.get('[id="form-username"]').should('be.visible').type('AUTO');
    cy.get('[id="form-password"]').should('be.visible').type('AUTO654321');
    cy.contains('Connexion').click();
    cy.get('#user-id').should('exist','be.visible').contains('AUTO');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
    cy.title().should("eq", "Owlink by Tessi");
})
 
Cypress.Commands.add('loginRct02', () => {
    cy.viewport(1920,1080);
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit('https://rct02-developpement.owliance.net/owlinkbytessi/#!/');
    cy.get('[id="form-username"]').should('be.visible').type('AUTO');
    cy.get('[id="form-password"]').should('be.visible').type('AUTO654321');
    cy.contains('Connexion').click();
    cy.get('#user-id').should('exist','be.visible').contains('AUTO');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
    cy.title().should("eq", "Owlink by Tessi");
})
Cypress.Commands.add('loginRct03', () => {
    cy.viewport(1920,1080);
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.visit('https://rct03-developpement.owliance.net/owlinkbytessi/#!/');
    cy.get('[id="form-username"]').should('be.visible').type('AUTO');
    cy.get('[id="form-password"]').should('be.visible').type('AUTO654321');
    cy.contains('Connexion').click();
    cy.get('#user-id').should('exist','be.visible').contains('AUTO');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
    cy.title().should("eq", "Owlink by Tessi");
})
Cypress.Commands.add('url01', (url) => {
    cy.visit('https://rct01-developpement.owliance.net/owlinkbytessi/' + url)
  });
Cypress.Commands.add('url02', (url) => {
      cy.visit('https://rct02-developpement.owliance.net/owlinkbytessi/' + url)
    });
Cypress.Commands.add('url03', (url) => {
      cy.visit('https://rct03-developpement.owliance.net/owlinkbytessi/' + url)
    });
 
 
 
Cypress.Commands.add('logout', () => {
    cy.get('#logout').should('exist', 'be.visible').click();
    cy.get('#Msg1').should('exist', 'be.visible');
    cy.get('.pText')
        .should('exist', 'be.visible')
        .should('have.text', 'Souhaitez-vous fermer votre page de navigation ?');
 
    cy.get('#bot2-Msg1').should('exist', 'be.visible').click();
    cy.url().should('include', '/#!/login');
})
 
