/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginRct02 from '../../../../support/commands'
import noemie from '../../Pages/LiaisonNoemie/LiaisonNoemiePage.cy';



Given("Je suis sur la page d accueil" , () => {
        cy.loginRct02();
})

And("J'accede au menu Gestion Famille" , () => {
    noemie.accederGestionFamille()
})

And("Rechercher la famille" , () => {
    noemie.rechercherFamille()
})

And("Sélectionner la ligne du responsable dans le pavé Liste des familles" , () => {
    noemie.selectionnerLigneResponsable()
})

When("Cliquer sur Modifier famille" , () => {
    noemie.cliquerModifierFamille()
})

Then("Affichage de la page Modification famille" , () => {
    noemie.affichagePageModificationFamille()
})

When("Cliquer sur l'onglet L.NOEMIE" , () => {
    noemie.cliquerOngletNoemie()
})

And("Sélectionner un ayant droit sur la Liste des ayants droit" , () => {
    noemie.selectionnerAyantDroit()
})
 
Then("Vérifier la bonne alimentation des colonnes avec les données" , () => {
    noemie.verificationColonnes()
})
 
When("J'accéde au menu Informations générales Mémo" , () => {
    noemie.accederAuMémo()
})
 
And("Cliquer sur le bouton 'Ajouter'" , () => {
    noemie.ajouterMémo()
})

And("Saisir une note" , () => {
    noemie.saisirNote()
})

And("Cliquer sur Valider" , () => {
    noemie.ciquerValider()
})

Then("Affichage du message 'Ajout effectué avec succès'" , () => {
    noemie.ajoutAvecSucces()
})

And("Affichage de la note avec une date de création = à la date du jour dans le pavé Liste des mémos" , () => {
   noemie.verifAfficheNoteAvecDate()
})
 
And("Affichage du mémo dans la vision 360°" , () => {
   noemie.verifAffichageNote360()
})
 


When("J'accéde au menu Gestion Famille" , () => {
    noemie.accederGestionFamilleApresNoemie()
 })
  
 And("Chercher la famille" , () => {
    noemie.rechercherFamille()
 })

 And("Sélectionner la ligne du responsable dans le pavé Liste des familles" , () => {
    noemie.selectionnerLigneResponsable()
 })

 When("Cliquer sur Modifier famille" , () => {
    noemie.cliquerModifierFamille()
 })

 Then("Affichage de la page Modification famille" , () => {
    noemie.affichagePageModificationFamille()
 })

 When("Depuis l'onglet Informations générales, cliquer sur l'onglet L.NOEMIE" , () => {
    noemie.cliquerOngletNoemie()
 })

 And("Sélectionner la ligne du responsable dans le pavé Liste des ayants droit" , () => {
    noemie.selectionnerAyantDroit()
 })

 And("Cliquer sur le bouton Création" , () => {
    noemie.créationNoémie()
 })
 And("Saisir une date de début et une date de fin" , () => {
    noemie.saisirDateNeomie()
 })

 And("Cliquer sur le bouton 'Valider'" , () => {
    noemie.validerNoemie()
 })


 Then("Affichage du message 'Période RO créée'" , () => {
    noemie.affichageMessageRoCrée()
 })

 Then("Vérifier pavé Mouvements NOEMIE" , () => {
   noemie.verification()
 })

 When("Accéder au menu Informations générales Mémo" , () => {
    
    noemie.accederAuMémo()
 })

  
And("Cliquer sur le bouton 'Ajouter" , () => {
    noemie.ajouterMémo()
})

And("Saisir une note noemie" , () => {
    noemie.saisirNoteApresAjoutNoemie()
})

And("Cliquer sur Valider" , () => {
    noemie.ciquerValider()
})

Then("Affichage du message 'Ajout effectué avec succès'" , () => {
    noemie.ajoutAvecSucces()
})

And("Affichage de la note avec une date de création égale à la date du jour dans le pavé Liste des mémos" , () => {
    noemie.verifAfficheNoteNoemie()
})

And("Affichage du mémo après Noemie dans la vision 360°" , () => {
    noemie.verifAffichageNoteNoemie360()
 })
  
 When("L'utilisateur accède au menu Gestion Famille" , () => {
    noemie.accederGestionFamille()
 })

 And("L'utilisateur recherche la famille" , () => {
    noemie.rechercherFamille()
 })

 And("L'utilisateur clique sur 'Modifier famille'" , () => {
    noemie.selectionnerLigneResponsable()
    noemie.cliquerModifierFamille()

 })

 Then("La page de modification de la famille s'affiche" , () => {
    noemie.affichagePageModificationFamille()

 })
  
 And("L'utilisateur clique sur l'onglet Informations générales L.NOEMIE" , () => {
    noemie.cliquerOngletNoemie()

 })
  
 And("L'utilisateur sélectionne l'ayant droit concerné dans la liste des ayants droit" , () => {
    noemie.selectionnerAyantDroit()

 })
 
 Then("Le pavé Mouvements NOEMIE s'affiche avec la liste des mouvements correspondant à l'ayant droit" , () => {
    //noemie.verificationColonnesLNéomie()

 })
 
 And("L' utilisateur positionne le curseur sur le mouvement 408 à modifier" , () => {
    noemie.positionnerLeCurseurSurLeMvt408()

 })



And("L'utilisateur clique sur Modification" , () => {
   noemie.selectionnerModifer()

})

And("L'utilisateur saisit une 'date fin'" , () => {
   noemie.saisirDateFinNoemi()

})

And("L'utilisateur clique sur 'Valider'" , () => {
  noemie.validerModifNoemie()

})

Then("Un message de confirmation de modification s'affiche" , () => {
   noemie.affichageMessageRoCrée()
 
 })

 And("verification Modif" , () => {
   //noemie.verifModif()
 
 })

 And("L'utilisateur clique sur l'onglet Ayants droit" , () => {
   cy.get('.nav-wizard > li.ng-scope').click()
 
 })

 And("L'utilisateur sélectionne l'ayant droit concerné par le changement" , () => {
   noemie.selectAyantDroit()
 
 })

 And("L'utilisateur clique sur le bouton 'Modifier'" , () => {
   noemie.clicModif()
 
 })

 And("L'utilisateur saisit le nouveau numéro de sécurité sociale" , () => {
   noemie.saisieNumSecuritéSociale()
 })

 And("L'utilisateur clique sur 'Mettre à jour'" , () => {
   noemie.saisirMettreajour()
 })

 Then("Un message 'Modification effectuée avec succès' s'affiche" , () => {
   noemie.msgModfiSucces()
 })

 And("Le nouveau numéro de sécurité sociale est affiché dans la liste des ayants droit" , () => {
   noemie.verifAfficheNumSecuSociale()
 })

 And("Le nouveau numéro de sécurité sociale est affiché dans la consultation de l'ayant droit" , () => {
  noemie.verifAfficheNumSecuSocialeDansConsultation()
 })

 And("Le nouveau numéro de sécurité sociale est affiché dans la vision 360°" , () => {
   noemie.verifAfficheNumSecuSocialeDans360()
 })

 And("L'utilisateur clique sur l'onglet Informations générales et puis clique L.NOEMIE" , () => {
   noemie.cliquerInfoGénéraleOngletNoemie()
 }) 
  
 And("L'utilisateur sélectionne l'ayant droit concerné dans la liste des ayants droit" , () => {
   noemie.selectionAyantDroitConcerné()
 }) 
  
 And("L'utilisateur clique sur Création" , () => {
   noemie.cliquercréationNoémie()
 }) 

 And("L'utilisateur saisit une date début égale au lendemain de la date de fin saisie précédemment" , () => {
   noemie.saisirDateDebutSpécifique()
 })

 And("L'utilisateur saisit une date à envoyer égale à J+1 par rapport à la précédente date d'envoi" , () => {
   noemie.saisirDateenvoyerSpécifique()
 })

 And("L'utilisateur clique sur Valider" , () => {
   noemie.validerNoemie()
 })

 Then("Un message d'ajout s'affiche" , () => {
   noemie.affichageMessageRoCrée()
 })

 And("Une ligne est créée en mouvement C avec les détails spécifiés" , () => {
   //noemie.verifLigneLiaisonMemo()
 })



 And("Rechercher famille" , () => {
   noemie.rechercherFamillePoulet()
 })

 
 And("L'utilisateur accède à l'onglet Informations générales TP Externe" , () => {
   noemie.cliquerTPE()
 })


 And("L'utilisateur met à jour les droits et la carte" , () => {
   noemie.mettreAjourDroit()
 })

 Then("Les messages de confirmation s'affichent" , () => {
   noemie.msgCofirmatonMiseajour()
 })

 And("Les colonnes Maj Droit et Maj Carte dans l'historique des mouvements sont alimentées avec la date du jour" , () => {
   noemie.verifHistoriqueMouvement()
   cy.wait(2000)
 })
  

 And("L'utilisateur clique sur l'onglet Mémo" , () => {
   cy.wait(2000)
   noemie.accederMémo()
 })

 
  
And("L'utilisateur clique sur le bouton 'Ajouter'" , () => {
    noemie.ajouterMémo()
})

And("L'utilisateur saisit une note" , () => {
    noemie.saisirNoteapresTPE()
})

And("L'utilisateur clique sur 'Valider'aprés TPE" , () => {
    noemie.ciquerValidernoteApreTPE()
})

Then("Un message 'Ajout effectué avec succès' s'affiche" , () => {
    noemie.ajoutAvecSucces()
})




And("Affichage de la note Apres TPE avec une date de création égale à la date du jour dans le pavé Liste des mémos" , () => {
   cy.wait(2000)
    noemie.verifAfficheNoteNoemieapresTPE()
})

And("Affichage du mémo après TPE dans la vision 360°" , () => {
   cy.wait(2000)
    noemie.verifAffichageNote360apresTPE()
 })




 
   


  
 

 

 
  




  
 


  


  
 

 




   
  
  
 








  

  
 
 
 
   
  

 
 
 
 

 
 


