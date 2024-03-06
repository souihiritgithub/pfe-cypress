import 'cypress-xpath';
class AdhesionPage {
   visiterGestionAdh(){
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click();
    cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[10]/a').click();
}


remplirInfoFamille(){
    cy.xpath('//*[@id="infoGeneral"]/div/div/div/div/div/div[1]/section[4]/label[2]/input').click().type('01/01/2023');
    cy.get('#suivant').click()
    //cy.contains('Suivant').click({force: true})
}


accederPageCreationF(){
    cy.xpath('//*[@id="ayant-droit-list-widget"]/header/h2').click()
}


verifierListeAyantDroitVide(){
    cy.get('#listAyantsDroit_info').should('contain.text', "Affichage de l'élement 0 à 0 sur 0 éléments")
    //cy.get('tbody tr').find('td').should('contain.text', 'Aucun élément à afficher')
}


verifierAjoutAyantDroitRESPnonModifiable() {
    cy.xpath('//*[@id="add-ayant-droit-widget"]/header/h2[1]').click({force: true})
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[2]/section[1]').click()
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[2]/section[1]/div/div[1]').should('have.attr', 'disabled','disabled')
   
}


selectionnerCiviliteMadame() {
   cy.get('#civilite').select('string:MME'); // Sélectionne l'option avec la valeur 'string:MME' (Madame)
   //cy.xpath('//*[@id="civilite"]').select('string:MME');
}


remplirChampsObligatoiresAjoutAyantDroit(){
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[3]/section[1]/label[2]/input').click().type('10/02/1985');
    cy.xpath('//*[@id="nom"]').click().type('pfe');
    cy.xpath('//*[@id="prenom"]').click().type('test');
    cy.xpath('//*[@id="cp"]').click().type('75001');
    cy.xpath('//*[@id="ville"]').click().type('Paris');
    //cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/section[2]/label[2]/div/div/div[1]/span/span[2]').click()
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/section[2]/label[2]/div/div/div[1]/span').click()
    cy.get('.ui-select-choices').contains('NON').click()

    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/section[3]/label[2]/div/div/div[1]/span').click()
    cy.get('.ui-select-choices-row-inner').contains('REGIME GENERAL').click()

    cy.xpath('//*[@id="centre-ro-id"]/div[1]/span').type('12')
    cy.contains('121000-01 - CPAM RODEZ').click()
}


cliquerValider(){
    cy.xpath('//*[@id="adhesionFam"]/footer/span[1]/input').click()
    cy.get('#modalYesBtn').should('exist', 'be.visible').click()
    cy.wait(2000);
    cy.contains('[Famille] Ajout effectué avec succès')
}


VerifExistenceResp(){
    cy.get('tbody').first().find('tr').should('have.length', 1)
    cy.get('#listAyantsDroit_info')
      .should('exist', 'be.visible')
      .and('have.text', "Affichage de l'élement 1 à 1 sur 1 éléments")   
}


RenseignerDeNouveauChampsOblogatoires(){
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[2]/section[1]/div').click().contains('CNJT').click()
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[3]/section[1]/label[2]/input').click().type('20/02/1994');
    cy.get('#civilite').select('string:M');
    cy.xpath('//*[@id="nom"]').click().type('pfe');
    cy.xpath('//*[@id="prenom"]').click().type('pfe');
    cy.xpath('//*[@id="cp"]').click().type('75001');
    cy.xpath('//*[@id="ville"]').click().type('Paris');
    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/section[2]/label[2]/div/div/div[1]/span').click()
    cy.get('.ui-select-choices').contains('NON').click()

    cy.xpath('//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[2]/div/div/div/div[1]/section[3]/label[2]/div/div/div[1]/span').click()
    cy.get('.ui-select-choices-row-inner').contains('REGIME GENERAL').click()
}


cliquerValiderCNJT(){
    cy.xpath('//*[@id="adhesionFam"]/footer/span[1]/input').click()
    cy.get('#modalYesBtn').as('btn').should('exist').should('be.visible').click()
    cy.contains('[Ayant droit] Ajout effectué avec succès')
}


VerifDeuxLigne(){
    cy.get('tbody').first().find('tr').should('have.length', 2)
    .should('exist', 'be.visible')
     //.and('have.text', "Affichage de l'élement 1 à 2 sur 2 éléments")   
     //cy.visit('https://rct02-developpement.owliance.net/owlinkbytessi/#!/familleContainer/produit?famille=1056262&organisme=1&codeFamille=5555555&libelleOrganisme=ORG%20DEMONSTRATION%201')
     cy.wait(3000)
     cy.get('#suivant').click({force:true});
    }


remplirFormulaireAjoutProduit() {
      cy.contains('Saisir un groupe').click().type('140224')
      cy.wait(2000);
      cy.get('small.ng-binding').click();
      
      cy.get('.input-group').eq(14).click().type('ENTSAN A45{enter}');
      cy.wait(3000);

      cy.get('.input-group').eq(19).click().type('Reçu et accepté{enter}');
      cy.wait(3000);


cy.xpath('//*[@id="addProductform"]/fieldset/div/div[1]/div/div[1]/section[3]/label/label[2]/div/div/div[1]/span').click();
cy.get('#ui-select-choices-row-35-1 > .ui-select-choices-row-inner').click();
cy.get('#option-product-widgets > .no-padding > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .tab-content > .active > #addProductform > footer > :nth-child(1) > .btn').click();
cy.wait(2000);


cy.get('.without-border > input.btn').click();
cy.xpath('//*[@id="modalYesBtn"]').click();
    }


    verifProduitAjouteeDansLaListe(){
        cy.get('tbody tr').contains('ENTSAN').should('exist');
    }


    cliquerBoutonOption(){
        cy.get('#option-product-widgets > .form-group.col-md-12 > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .nav > [index="0"] > .nav-link').click()
    }

    verifListeOptionVide(){
        cy.get('#optionsProduittable_info').should('contain.text', "Affichage de l'élement 0 à 0 sur 0 éléments")   
    }


    verifChapmsRempliAjoutOption(){
  cy.get('input[name="dateDebut"]').should('have.value', '01/01/2023');
  cy.get('input[name="dateEffetCotisation"]').should('have.value', '01/01/2023');
    }


    cocherCases(){
        cy.get('#checkbox').click()
        cy.get('#option > .ui-select-match > .btn-default').click()
        cy.get('.ui-select-choices-row-inner').click();
        
        cy.wait(3000)
        cy.get(':nth-child(3) > footer > .btn-primary').click({force:true})

        cy.contains('Ajout effectué avec succès')
    }


    verifRisquesCouverts(){
        cy.get('.odd > [title="TRANSPORT SANITAIRE Maladie Chirurgie niveau 02"]').click()

        cy.xpath ('//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[3]/a').click();
    }


    cliquerOngletReglementEtPériodicite(){
        cy.get('#option-product-widgets > .form-group.col-md-12 > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .nav > [index="2"] > .nav-link').click();

    }

    verifChampsRéglemetEtPeriodicité(){
       cy.get('.input-group > .ui-select-container > .ui-select-match > .btn-default > .ui-select-match-text')
       .should('contain.text', "CHQ Chèque") 

       cy.get('.well > fieldset > :nth-child(2) > .col-lg-2 > :nth-child(1) > .input > .input-group > .ui-select-container > .ui-select-match > .btn-default > .ui-select-match-text')  
       .should('contain.text', " Trimestrielle ")

       cy.get('.well > fieldset > :nth-child(2) > :nth-child(3) > .input > .ng-isolate-scope')  
       .should('have.value', '01/01/2023');
       
       cy.get('.tab-pane.active > #reglementPeriodicite > #createformReglementPeriodicite > .panel > footer > [data-ng-click="addReglement();formReglementPeriodicite.$setPristine()"]').click();
       
       cy.contains('Ajout effectué avec succès')

       cy.get('#tableCotisation tbody tr').should('have.length', 1)
       cy.wait(3000)

        }

        cliquerSuivantDansCompteCotisant(){
           
            cy.get('#suivant').click({force:true});

        }

        verifierAffichage(){
            cy.get('input[name="dateAdhesion"]')
            .should('have.value', '01/01/2023')
          
        }

     supprimerFamille(){
        cy.wait(1000)
        cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[3]/a').click()
        cy.get('#searchFamily > fieldset > :nth-child(1) > :nth-child(3) > .input > .form-control').click().type('pfe')
        cy.get(':nth-child(4) > .input > .form-control').click().type('test')
        cy.get('#searchFamily > .search-family-footer > .row > .col-md-4 > .btn-primary').click()
        cy.get(':nth-child(1) > .noVis').click()
        cy.get('[aria-label="Utilisateur non autorisé à la modification"]').click()
        cy.wait(3000)
        cy.get('.active > .ng-binding > .fa').click()
        cy.get('.nav-wizard > [ng-class="{active : activeTab == 3}"]').click()
        cy.get('[index="2"] > .nav-link').click()
        cy.get('.col-sm-3 > .demo-btns > [aria-label="Supprimer"] > .btn').click()
        cy.wait(3000)
        cy.get('#modalYesBtn').click()
        cy.wait(2000)
        cy.reload();
        cy.wait(3000)


        cy.xpath('//*[@id="ProduitGestion"]/div/ul/li[2]/a').click()
        cy.wait(2000)
        cy.get('.odd > [title="TRANSPORT SANITAIRE Maladie Chirurgie niveau 02"]').click()*
        cy.wait(2000)
        cy.get('.col-sm-12 > .demo-btns > [aria-label="Supprimer"] > .btn').click()
        cy.get('#modalYesBtn').click()
        cy.wait(2000)
        cy.get('[title="TRANSPORT SANITAIRE Maladie Chirurgie niveau 02"]').click()
        cy.get('.col-sm-12 > .demo-btns > [aria-label="Supprimer"] > .btn').click()
        cy.get('#modalYesBtn').click()

        cy.wait(2000)
        cy.get(':nth-child(3) > .demo-btns > [aria-label="Supprimer"] > .btn').click()
        cy.get('#modalYesBtn').click()
        
        cy.get('.nav-wizard > li.ng-scope').click()
        cy.get('#modalYesBtn').click()

        cy.get('.odd > .expand').click()
        cy.get('#delete-ayant-droit').click()
        cy.wait(2000)
        cy.xpath('//*[@id="modalYesBtn"]').click()

        
     }

   






}


 const adhesion = new AdhesionPage();
 export default adhesion;