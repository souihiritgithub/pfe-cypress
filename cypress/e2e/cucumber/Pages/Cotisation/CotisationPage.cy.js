import 'cypress-xpath';
class cotisationPage {
   visiterGestionAdh(){
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click();
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[10]/a').click();
}

chercherFamille(){
    cy.wait(2000)
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[3]/a').click({force:true})
    cy.get('#searchFamily > fieldset > :nth-child(1) > :nth-child(3) > .input > .form-control').click().type('pfe')
    cy.get(':nth-child(4) > .input > .form-control').click().type('test')
    cy.get('#searchFamily > .search-family-footer > .row > .col-md-4 > .btn-primary').click()


 }

 selectionnerLigneResponsable(){
    cy.get(':nth-child(1) > .noVis').click()

 }

 cliquerModifierFamille(){
    cy.get('[aria-label="Utilisateur non autorisé à la modification"]').click()
    cy.wait(3000)
    cy.get('.active > .ng-binding > .fa').click()

 }

 verifPageModifFamille(){
   cy.xpath('//*[@id="changingTitle"]/h1').should('contain.text', "Modification famille") 
    
 }

 accerderMenuIngoGeneRefBancaire(){
   cy.get('[ng-class="{active : activeTab == 8}"] > .ng-binding').click()

 }

 cliquerBoutonAjouter(){
   cy.get('[aria-label="Ajouter"] > .btn > .glyphicon').click()

 }

 selectionnerPuceRIB(){
   
   cy.get('#radioRib').click();

 }
 saisiChampsObligatoires(){
   cy.get('#codePays').click().type("FR")
   cy.get('#codeBank').click().type("17499")
   cy.get('#codeGichet').click().type("00001")
   cy.get('#numCompte').click().type("55552723347")
   cy.get('#cleRIB').click().type("70")
   cy.get('#titulaire').click().type("11111")

 }

 cliquerValider(){
   cy.xpath('//*[@id="referenceBancaireWidget"]/div/div/div/form/div/footer/button[1]').click();
   cy.wait(2000)
   cy.get('#modalYesBtn').as('btn').should('exist').should('be.visible').click({force:true})
  
 }

 ajoutEffectueAvecSucces(){
   cy.wait(1000)
   //cy.contains('Ajout effectué avec succès')
 }

 verifAjoutRefBancaireRIB(){
  
   cy.get('#listRefBancaire_info')
     .should('exist', 'be.visible')
     .and('have.text', "Affichage de l'élement 1 à 1 sur 1 éléments") 
 }

supprimerRIB(){
 
   cy.reload();
   cy.wait(2000)
   cy.get('[ng-class="{active : activeTab == 8}"] > .ng-binding').click()
   cy.get('.odd > .expand').click()
   cy.get('[aria-label="Supprimer"] > .btn').click()
   cy.wait(2000)
   cy.get('#modalYesBtn').click({force:true});
   cy.wait(2000)

}
 selectionnerPuceIBAN(){
   cy.get('[aria-label="Ajouter"] > .btn > .glyphicon').click()
   cy.wait(2000)
   cy.get('#radioIban').click()
 }

   saisieChampsIBAN() {
      cy.wait(2000);
      cy.get('#iban').click().type("FR7615906000132255544444453");
      cy.get('#titulaire').click().type("55555");
      cy.wait(2000);
    }
    

    cliquerValiderIBAN(){
      cy.xpath('//*[@id="referenceBancaireWidget"]/div/div/div/form/div/footer/button[1]').click()
      cy.get('#modalYesBtn').click()

    }
 
   verifAjoutIBAN(){
    cy.get('#listRefBancaire_info')
    .should('exist', 'be.visible')
   
    }

    accederMémo(){
    cy.get('[ng-class="{active : activeTab == 6}"] > .ng-binding').click()
    }


   cliquerAjouterMémo(){
   cy.get('[aria-label="Ajouter"] > .btn > .glyphicon').click()
   }


   saisieNote(){
      cy.get('#note').click().type("Ma Note pour le spec Cotisation quie est le 2 eme spec")

   }

   cliquerValiderNote(){
      cy.xpath('//*[@id="memosform"]/footer/span[1]/input').click()

   }

   verifAffichageNote360(){

      cy.get('#listMemos_info')
      .should('exist', 'be.visible') 
      cy.get('#slideVision360').click()
      cy.wait(2000)

      const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const formattedDate = day + '/' + month + '/' + year;

cy.wait(2000)

cy.xpath('//*[@id="resaslid"]/div/div[1]/div/div/div[2]/span/div[2]/table/tbody/tr/td/div').click()

cy.get('.panel-body > .table > tbody > tr.ng-scope > .my-tooltip > .ng-binding')
.should('contain.text', `${formattedDate} par AUTO : Ma Note pour le spec Cotisation quie est le 2 eme spec`);
cy.wait(2000);

cy.get('div.ng-scope > footer > span > .btn').click()
 cy.get('#slideVision360').click()


   }



}


const cotisation = new cotisationPage();
export default cotisation;