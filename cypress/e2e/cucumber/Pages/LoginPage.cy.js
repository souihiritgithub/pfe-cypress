class LoginPage {
    enterURL() {
     cy.visit(
       "https://rct02-developpement.owliance.net/owlinkbytessi/#!/login?UnauthorizedError=Unauthorized"
     );
   }
    enterUserNamePassword(username, password) {
     cy.get('[id="form-username"]').type(username);
     cy.get('[id="form-password"]').type(password);
   }
    clickSubmitButton() {
     cy.contains('Connexion').click();
   }
    verifyPageTitle() {
     return cy.title().should("eq", "Owlink by Tessi");
   }
   verifyLoggedUserAndMenuSidebar() {
    cy.get('#user-id').should('exist','be.visible').contains('amannai');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
   }
 }
 const login = new LoginPage();
 export default login;