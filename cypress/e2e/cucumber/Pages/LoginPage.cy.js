class LoginPage {
    enterURL() {
     cy.visit(
       "https://assure-demo-tessi.owliance.net/#/auth/login"
     );
   }
    enterUserNamePassword(username, password) {
     cy.get('[id="email"]').type(username);
     cy.get('[id="password"]').type(password);
   }
    clickSubmitButton() {
     cy.get('[type="button"]').first().click();
   }
    verifyPageTitle() {
     return cy.title().should("eq", "Assuré");
   }
   verifyLoggedUserAndMenuSidebar() {
    cy.get('.profile-name').should('exist','be.visible').contains('Assure DEMO');
    cy.get('.layout-sidebar').should('exist');
    cy.get('span').contains('Informations').should('exist');
   }
 }
 const login = new LoginPage();
 export default login;