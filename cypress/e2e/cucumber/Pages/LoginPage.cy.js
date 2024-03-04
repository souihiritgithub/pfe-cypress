import 'cypress-xpath';
class LoginPage {
    
    verifyPageTitle() {
     return cy.title().should("eq", "Owlink by Tessi");
   }
   verifyLoggedUserAndMenuSidebar() {
    cy.get('#user-id').should('exist','be.visible').contains('AUTO');
    cy.get('#left-panel').should('exist');
    cy.get('#logout').should('exist','be.visible');
    // this is an example of how to implement xpath solution : it's an alternative for getting elements when there is no id !!!
    //cy.xpath('//*[@id="wid-id-0"]/header/h2').should('be.visible').contains('Rapport de travail');
   }
 }
 const login = new LoginPage();
 export default login;