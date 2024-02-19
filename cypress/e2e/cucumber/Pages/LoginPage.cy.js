import 'cypress-xpath';
class LoginPage {
    enterURL() {
     cy.visit(
       "https://rct02-developpement.owliance.net/owlinkbytessi/#!/login?UnauthorizedError=Unauthorized"
     );
   }
    enterUserNamePassword(username, password) {
      cy.get('[id="form-username"]').should('be.visible').type(username);
      cy.get('[id="form-password"]').should('be.visible').type(password);
   }
    clickSubmitButton() {
     cy.contains('Connexion').click();
   }
    verifyPageTitle() {
     return cy.title().should("eq", "Owlink by Tessi");
   }
   verifyLoggedUserAndMenuSidebar() {
    cy.get('#user-id').should('exist','be.visible').contains('ANE');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
    // this is an example of how to implement xpath solution : it's an alternative for getting elements when there is no id !!!
    cy.xpath('//*[@id="wid-id-0"]/header/h2').should('be.visible').contains('Rapport de travail');
   }
 }
 const login = new LoginPage();
 export default login;