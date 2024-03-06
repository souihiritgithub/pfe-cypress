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
 



 
 

 

 
 


