import 'cypress-xpath';
class LiaisonNoemiePage {
    
   visiterGestionAdh(){
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click();
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[10]/a').click();
}


accederGestionFamille(){
    cy.get(':nth-child(2) > :nth-child(1) > .menu-item-parent').click()
    cy.get('[style="display: block;"] > :nth-child(3) > a').click()
}

rechercherFamille(){
    cy.get('#searchFamily > fieldset > :nth-child(1) > :nth-child(3) > .input > .form-control').click().type('pfe')
    cy.get(':nth-child(4) > .input > .form-control').click().type('test')
    cy.get('#searchFamily > .search-family-footer > .row > .col-md-4 > .btn-primary').click()

}
selectionnerLigneResponsable(){
    cy.get(':nth-child(1) > .noVis').click()

}

cliquerModifierFamille(){
    cy.get('[aria-label="Utilisateur non autorisé à la modification"]').click()
        cy.wait(2000) 
}

affichagePageModificationFamille(){
    cy.get('.active > .ng-binding').should('contain.text', "Informations générales")
}



cliquerOngletNoemie(){
    cy.get('div.ng-scope > .nav > [ng-class="{active : activeTab == 4}"] > .ng-binding').click()
    
}

selectionnerAyantDroit(){
    cy.get('.odd > .expand').click()

}
verificationColonnes() {
    
       
        cy.get('#listAyantDroit').should('exist');

        cy.get('#listAyantDroit tbody tr').find('td').eq(0).should('contain', 'RESP'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(1).should('contain', 'F'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(2).should('contain', 'PFE'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(3).should('contain', 'TEST'); 

        cy.get('#listAyantDroit_info').should('contain.text', "Affichage de l'élement 1 à 2 sur 2 éléments");
       
        
    
}

accederAuMémo(){
    
    cy.get('[ng-class="{active : activeTab == 6}"] > .ng-binding').click()

}

ajouterMémo(){
    cy.get('[aria-label="Ajouter"] > .btn > .glyphicon').click()
    
}


saisirNote(){
    cy.get('#note')
        .invoke('css', 'font-weight', 'bold')
        .invoke('css', 'font-size', '25px')
        .click()
        .type("CouCou, C'est ma note pour le 3ème spec");
}

ciquerValider(){
   
    cy.xpath('//*[@id="memosform"]/footer/span[1]/input').click()
}


ajoutAvecSucces(){
    cy.contains('Ajout effectué avec succès')
}

verifAfficheNoteAvecDate(){

const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const formattedDate = day + '/' + month + '/' + year;
cy.get('#listMemos tbody tr').first().find('td').eq(0).should('contain', formattedDate);

cy.get('.odd > :nth-child(3)').should('contain.text', "CouCou, C'est ma note pour le 3ème spec")


}

verifAffichageNote360() {
    cy.get('#slideVision360').click()
    cy.wait(4000)
    cy.get(':nth-child(1) > .my-tooltip > .ligneMemoRelPj').click()
    cy.get('.panel-body > .table > tbody > tr.ng-scope > .my-tooltip').should('contain.text', "06/03/2024 par AUTO : CouCou, C'est ma note pour le 3ème spec")
    cy.get('div.ng-scope > footer > span > .btn').click()
    cy.get('#slideVision360').click()
  }
  





}


const noemie = new LiaisonNoemiePage();
export default noemie;