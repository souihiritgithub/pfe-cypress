/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginRct02 from '../../../../support/commands'
import cotisation from '../../Pages/Cotisation/CotisationPage.cy';


Given("Je suis sur la page d accueil" , () => {
        cy.loginRct02();
})
When("Je recherche la famille" , () => {
cotisation.chercherFamille()

})

And("Je sélectionne la ligne du responsable dans la Liste des familles" , () => {
    cotisation.selectionnerLigneResponsable()

})

And("Je clique sur 'Modifier famille'" , () => {
    cotisation.cliquerModifierFamille()

})

Then("Je devrais voir la page 'Modification famille'" , () => {
    cotisation.verifPageModifFamille()

})

When("J accède au menu Informations générales Références bancaires" , () => {
    cotisation.accerderMenuIngoGeneRefBancaire()

})

And("Je clique sur le bouton 'Ajouter'" , () => {
    cotisation.cliquerBoutonAjouter()

})

And("Je sélectionne la puce RIB" , () => {
    cotisation.selectionnerPuceRIB()

})

And("Je saisis les champs obligatoires" , () => {
    cotisation.saisiChampsObligatoires()

})

And("Je clique sur 'Valider'" , () => {
    cotisation.cliquerValider()

})

Then("Je devrais voir le message 'Ajout effectué avec succès'" , () => {
    cotisation.ajoutEffectueAvecSucces()

})

Then("Je devrais voir les nouvelles références bancaires dans le pavé Liste des références bancaires" , () => {
    cotisation.verifAjoutRefBancaireRIB()
  

})

When("Je clique de nouveau sur le bouton Ajouter" , () => {
    cotisation.cliquerBoutonAjouter()

})

And("Je sélectionne la puce IBAN" , () => {
    cotisation.selectionnerPuceIBAN()

})

And("Je renseigne les champs obligatoires avec une lettre dans l'IBAN" , () => {
cotisation.saisieChampsIBAN()

})

And("Je clique sur Valider" , () => {
   cotisation.cliquerValiderIBAN()

})

Then("Je devrais voir le message 'Ajout effectué avec succès'" , () => {
    cotisation.ajoutEffectueAvecSucces()
})


And("Je vérifie l'ajout d'une nouvelle ligne dans le pavé Liste des références bancaires avec les données saisies" , () => {
   cotisation.verifAjoutIBAN()
})

When("J'accède au menu Informations générales Mémo" , () => {
    cotisation.accederMémo()
 })

 And("Je clique sur le bouton 'Ajouter'" , () => {
    cotisation.cliquerAjouterMémo()
 })

 And("Je saisis une note" , () => {
    cotisation.saisieNote()
 })

 And("Je clique sur le bouton 'Valider'" , () => {
    cotisation.cliquerValiderNote()
 })

 Then("Je devrais voir le message 'Ajout effectué avec succès'" , () => {
    cotisation.ajoutEffectueAvecSucces()
 })

 And("La note devrait être affichée dans ,le pavé Liste des mémos avec une date de création à la date du jour, la visio 360°" , () => {
    cotisation.verifAffichageNote360()
 })

 


 
  



 



















 







