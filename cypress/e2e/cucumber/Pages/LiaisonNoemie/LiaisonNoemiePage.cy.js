import 'cypress-xpath';



class LiaisonNoemiePage {



        getFormattedDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();
        return day + '/' + month + '/' + year;
    }
    



    
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
        cy.wait(2000);
}

affichagePageModificationFamille(){
    cy.get('.active > .ng-binding').should('contain.text', "Informations générales")
}



cliquerOngletNoemie(){
    cy.wait(2000)
    cy.get('div.ng-scope > .nav > [ng-class="{active : activeTab == 4}"] > .ng-binding').click()
    
}

selectionnerAyantDroit(){
    cy.get('.odd > .expand').click()

}
verificationColonnes() {
    
       cy.wait(2000)
        cy.get('#listAyantDroit').should('exist');

        cy.get('#listAyantDroit tbody tr').find('td').eq(0).should('contain', 'RESP'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(1).should('contain', 'F'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(2).should('contain', 'PFE'); 
        cy.get('#listAyantDroit tbody tr').find('td').eq(3).should('contain', 'TEST'); 

        cy.get('#listAyantDroit_info').should('contain.text', "Affichage de l'élement 1 à 2 sur 2 éléments");
        cy.wait(2000);
       
        
    
}

accederAuMémo(){
    cy.reload()
    cy.get('[ng-class="{active : activeTab == 6}"] > .ng-binding').click()

}

ajouterMémo(){
    cy.wait(2000)
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



verifAfficheNoteAvecDate() {
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

    cy.get('#listMemos tbody tr').first().find('td').eq(0).should('contain', formattedDate);
    cy.get('.odd > :nth-child(3)').should('contain.text', "CouCou, C'est ma note pour le 3ème spec");
}


verifAffichageNote360() {
    cy.wait(3000)
    const formattedDate = this.getFormattedDate();

    cy.get('#slideVision360').click();
    cy.wait(2000); 
    
    cy.get(':nth-child(1) > .my-tooltip > .ligneMemoRelPj').click(); 
    
    cy.get('.panel-body > .table > tbody > tr.ng-scope > .my-tooltip')
      .should('contain.text', `${formattedDate} par AUTO : CouCou, C'est ma note pour le 3ème spec`); 
    
    cy.get('div.ng-scope > footer > span > .btn').click(); 
    
    cy.get('#slideVision360').click(); 
}


  accederGestionFamilleApresNoemie(){
    cy.reload()
    cy.get(':nth-child(2) > :nth-child(1) > .menu-item-parent').click()
    cy.get('[style="display: block;"] > :nth-child(3) > a').click()
  }

  créationNoémie(){
    cy.get('.demo-btns > .ng-scope > .btn').click()
  }

  saisirDateNeomie(){
    
    cy.wait(2000)
    cy.get(':nth-child(2) > .well > fieldset > .row > :nth-child(1) > .input > .form-control').click().type("01/01/2023");
    cy.get(':nth-child(2) > .well > fieldset > .row > :nth-child(2) > .input > .form-control').click().type("31/01/2099");

  }
validerNoemie(){
    cy.wait(2000)
    cy.get('footer > .btn-primary').click()
}
affichageMessageRoCrée(){
    cy.contains('Période RO créée')
}



verification() {
    cy.wait(2000)
    cy.get('#listLiasonNoe tbody tr').should('contain', 'C');

    const formattedDate = this.getFormattedDate();
    cy.get('#listLiasonNoe tbody tr').should('contain', `Prévu pour envoi le : ${formattedDate}`);

    const dateDebut = '01/01/2023';
    cy.get('#listLiasonNoe tbody tr').should('contain', dateDebut);
    cy.wait(1000)
   
}

saisirNoteApresAjoutNoemie(){
    cy.wait(2000)
    cy.get('#note')
    .invoke('css', 'font-weight', 'bold')
    .invoke('css', 'font-size', '25px')
    .click()
    .type("Salut, Ma note après Ajout Noemie");

}
verifAfficheNoteNoemie(){
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

    cy.get('#listMemos tbody tr').first().find('td').eq(0).should('contain', formattedDate);
    cy.get('.odd > :nth-child(3)').should('contain.text', "Salut, Ma note après Ajout Noemie");

}

verifAffichageNoteNoemie360(){
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

    cy.get('#slideVision360').click();
    cy.wait(2000); 
    
    cy.get(':nth-child(1) > .my-tooltip > .ligneMemoRelPj').click(); 
    
    cy.get('.panel-body > .table > tbody > tr.ng-scope > .my-tooltip')
      .should('contain.text', `${formattedDate} par AUTO : Salut, Ma note après Ajout Noemie`); 
    cy.get('div.ng-scope > footer > span > .btn').click(); 
    
    cy.get('#slideVision360').click(); 

}

verificationColonnesLNéomie(){
    cy.wait(2000)

         const formattedDate = this.getFormattedDate();
       
        cy.contains('Prévu pour envoi le :').should('exist');
      
       
        //cy.get('#listLiasonNoe tbody tr').first().find('td').eq(0).should('contain', formattedDate);
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(1).should('contain', '408');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(2).should('contain', '121000-01');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(3).should('contain', 'PFE TEST');
        //cy.get('#listLiasonNoe tbody tr').first().find('td').eq(4).should('contain', '2990222478478');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(5).should('contain', '10/02/1985');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(6).should('contain', '1');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(7).should('contain', 'Création');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(8).should('contain', '');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(9).should('contain', '01/01/2023');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(10).should('contain', '31/12/2099');
        cy.get('#listLiasonNoe tbody tr').first().find('td').eq(11).should('contain', '1');
}


positionnerLeCurseurSurLeMvt408(){

cy.get('#listLiasonNoe > tbody > .odd > :nth-child(2)').click()
}


cliquerBoutonCreationPourModifier(){
    cy.wait(2000)
    cy.get('button.btn-success')
      .should('be.visible')
      .should('not.be.disabled')
      .contains('Création') 
      .click(); 

}

selectionnerModifer(){

      cy.get('[aria-label="Cette action vous permet de modifier le mouvement avant son envoi et de le différer"] > .btn').click()
}

saisirDateFinNoemi(){
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

   cy.xpath('//*[@id="detailsLaison"]/div[2]/div[1]/div/div[2]/div/fieldset/div/section[2]/label[2]/input')
    .should('be.visible')
    .should('not.be.disabled')
    .clear() 
    .type('31/12/2058');


    cy.xpath('//*[@id="detailsLaison"]/div[2]/div[2]/div[1]/section[3]/label[2]/input')
    .should('be.visible')
    .should('not.be.disabled')
    .clear()
    .type(formattedDate);

 
}

validerModifNoemie(){
  cy.wait(2000)
    cy.get('footer > .btn-primary').click()
    
}


verifModif(){
   cy.wait(2000)
    const formattedDate = this.getFormattedDate();
    
    cy.contains('Prévu pour envoi le :').should('exist');
  
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(1).should('contain', '408');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(2).should('contain', '121000-01');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(3).should('contain', 'PFE TEST');
   // cy.get('#listLiasonNoe tbody tr').first().find('td').eq(4).should('contain', '2990222478478');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(5).should('contain', '10/02/1985');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(6).should('contain', '1');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(7).should('contain', 'Modification');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(8).should('contain', '');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(9).should('contain', '01/01/2023');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(10).should('contain', '31/12/2058');
    cy.get('#listLiasonNoe tbody tr').first().find('td').eq(11).should('contain', '1');
    cy.wait(2000)
}

selectAyantDroit(){
    cy.get('.odd > .expand').click()
}

clicModif(){
    cy.get('#update-ayant-droit > .glyphicon').click()
    cy.get('#cless').click().type('64')
}

saisieNumSecuritéSociale(){
  
cy.wait(2000)
  cy.get('#numeroSS')
  .should('be.visible')
  .should('not.be.disabled')
  .clear()
  .type('1459875462145');

  cy.get('#cless')
  .should('be.visible')
  .should('not.be.disabled')
  .clear()
  .type('64');

}

saisirMettreajour(){
   

    cy.get('#mettreAJour').click()
    cy.wait(2000)
}

msgModfiSucces(){
    cy.contains('Modification effectuée avec succès')
}

verifAfficheNumSecuSociale(){
    cy.get('.odd > :nth-child(8)').should('contain', '1459875462145');

 }

 verifAfficheNumSecuSocialeDansConsultation(){
    cy.wait(2000)
    cy.get('#read-ayant-droit').click()

    cy.get('#numeroSS')
    .should('have.value', '1459875462145');



 }

 verifAfficheNumSecuSocialeDans360(){
    cy.wait(2000)
    cy.get('#slideVision360').click()
    cy.wait(2000)
    cy.get('.paddingbottom14').click()
    cy.wait(3000)
    cy.contains('button', 'Ayants droit').click();
    cy.wait(3000)
   
    cy.get('td.ng-binding').should('contain', '1459875462145');
    cy.get('#slideVision360').click()
    cy.wait(3000)
 }
 cliquerInfoGénéraleOngletNoemie(){
    cy.reload()
    cy.wait(1000)
    cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[1]').click()
    cy.wait(2000)
    cy.get('div.ng-scope > .nav > [ng-class="{active : activeTab == 4}"] > .ng-binding').click()

 }
 
 selectionAyantDroitConcerné(){
    cy.get('.odd > .expand').click()

 }

 cliquercréationNoémie(){
    cy.get('[ng-if="((is408NonEnvoye || is408Envoye || listMouvement.length === 0) && AssureSelectedLigne.cleSecuriteSociale) && !readMode"] > .btn').click()

 }
 saisirDateDebutSpécifique(){
   
    cy.wait(2000)
    cy.xpath('//*[@id="detailsLaison"]/div[2]/div[1]/div/div[2]/div/fieldset/div/section[2]/label[2]/input')
    .should('be.visible')
    .should('not.be.disabled')
    .clear() 
    .type('01/01/2059');

 }


 saisirDateenvoyerSpécifique(){
    cy.wait(2000)
    cy.xpath('//*[@id="detailsLaison"]/div[2]/div[2]/div[1]/section[3]/label[2]/input')
    .should('be.visible')
    .should('not.be.disabled')
    .clear() 
    .type('01/01/2025')
 }


 verifLigneLiaisonMemo(){
    cy.wait(2000)
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(1).should('contain', '408');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(2).should('contain', '121000-01');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(3).should('contain', 'PFE TEST');
   //cy.get('#listLiasonNoe tbody tr').first().find('td').eq(4).should('contain', '2990222478478');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(5).should('contain', '10/02/1985');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(6).should('contain', '1');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(7).should('contain', 'Création');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(8).should('contain', '');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(9).should('contain', '01/01/2023');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(10).should('contain', '01/01/2059');
   cy.get('#listLiasonNoe tbody tr').first().find('td').eq(11).should('contain', '1');
   cy.wait(2000)
}

rechercherFamillePoulet(){
    cy.get('#searchFamily > fieldset > :nth-child(1) > :nth-child(3) > .input > .form-control').click().type('poulet')
    cy.get(':nth-child(4) > .input > .form-control').click().type('ABCHIROU')
    cy.get('#searchFamily > .search-family-footer > .row > .col-md-4 > .btn-primary').click()

}

selectionnerLigneResponsablePoulet(){
    cy.get(':nth-child(1) > .noVis').click()

}

cliquerModifierFamille(){
    cy.get('[aria-label="Utilisateur non autorisé à la modification"]').click()
        cy.wait(2000);
}

cliquerTPE(){
  
    cy.xpath('//*[@id="fam-widgets"]/div/nav/nav/div/div/ul/li[7]/a') 
    .should('be.visible')
    .should('not.be.disabled') 
    .click(); 
    cy.wait(2000)
}


mettreAjourDroit(){
    cy.get('.open > .dropdown-menu > :nth-child(2) > .btn').click()

}

msgCofirmatonMiseajour(){
    cy.wait(1000)
    cy.get('#modalYesBtn').click()
    cy.wait(2000)
    
}

verifHistoriqueMouvement(){
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

    cy.xpath('//*[@id="fam-widgets"]/div/nav/nav/div/div/ul/li[7]/a') 
    .should('be.visible')
    .should('not.be.disabled') 
    .click(); 
    cy.get('.open > .dropdown-menu > :nth-child(5) > .ng-binding').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > :nth-child(5)').should('contain', formattedDate)

}

saisirNoteapresTPE(){

    cy.get('#note')
    .invoke('css', 'font-weight', 'bold')
    .invoke('css', 'font-size', '25px')
    .click()
    .type("CouCou, C'est ma note pour le 3ème spec apres TPE");


}

ciquerValidernoteApreTPE(){
   
    cy.get('input[value="Valider"]').click();

}

accederMémo(){
    cy.wait(2000)
    cy.get('[ng-class="{active : activeTab == 6}"] > .ng-binding').click()

}



verifAfficheNoteNoemieapresTPE(){
    cy.wait(2000)
    const formattedDate = this.getFormattedDate();

    cy.get('#listMemos tbody tr').first().find('td').eq(0).should('contain', formattedDate);
    cy.get('.odd > :nth-child(3)').should('contain.text', "CouCou, C'est ma note pour le 3ème spec apres TPE");
    cy.wait(1000)

}

verifAffichageNote360apresTPE(){
    cy.wait(4000)
    const formattedDate = this.getFormattedDate();

    cy.get('#slideVision360').click();
    cy.wait(3000); 
    
    cy.get(':nth-child(1) > .my-tooltip > .ligneMemoRelPj').click(); 
    cy.wait(2000)
    cy.get('.panel-body > .table > tbody > tr.ng-scope > .my-tooltip')
      .should('contain.text', `${formattedDate} par AUTO : CouCou, C'est ma note pour le 3ème spec apres TPE`); 
      cy.wait(2000)
    cy.get('div.ng-scope > footer > span > .btn').click(); 
    cy.wait(2000)
    cy.get('#slideVision360').click(); 

}









}


const noemie = new LiaisonNoemiePage();
export default noemie;