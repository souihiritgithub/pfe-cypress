/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import loginRct02 from '../../../../support/commands'
import adhesion from '../../Pages/GestionAdhesion/GestionAdhesionPage.cy'

Given("Je suis sur la page d accueil" , () => {
        cy.loginRct02();
})


When("J'accede au menu Gestion Adhesions" , () => {
    adhesion.visiterGestionAdh()
})

And("Je saisis une date d'adhésion en cours de mois" , () => {
    adhesion.remplirInfoFamille()
})

Then("Je devrais voir la page de création d'une famille avec l'onglet 'Ajout des ayants droits'" , () => {
    adhesion.accederPageCreationF()
})

And("Je vérifie que le pavé 'Liste des ayants droits' est vide" , () => {
    adhesion.verifierListeAyantDroitVide()
})
And("Je vérifie que le pavé 'Ajout d un ayant droit' affiche la qualité [RESP] non modifiable" , () => {
    adhesion.verifierAjoutAyantDroitRESPnonModifiable()
    
})
When("Je sélectionne la Civilité" , () => {
    adhesion.selectionnerCiviliteMadame()
})
And("Je renseigne les champs obligatoires" , () => {
    adhesion.remplirChampsObligatoiresAjoutAyantDroit()
})

And("Je clique sur le bouton 'Valider'" , () => {
adhesion.cliquerValider()
})
And("Le responsable devrait apparaître dans la pavé 'Liste des ayants droits'" , () => {
    adhesion.VerifExistenceResp()
})
When("Je renseigne de nouveau les champs obligatoires" , () => {
    adhesion.RenseignerDeNouveauChampsOblogatoires()
})
And("Je clique sur Valider" , () => {
    //adhesion.cliquerValider()
})
Then("Je devrais voir le message '[Ayant droit] Ajout effectué avec succès'" , () => {
    adhesion.cliquerValiderCNJT()
})
And("Deux lignes avec les bonnes valeurs devraient apparaître dans la liste des ayants droit" , () => {
    adhesion.VerifDeuxLigne()
})

When("Je rempli champs obligatoires pour ajouter produit" , () => {
    adhesion.remplirFormulaireAjoutProduit()
    
})

Then("Je devrais voir le message 'Ajout effectué avec succès'" , () => {
    cy.contains('Ajout effectué avec succès')
   
    
})

And("Je devrais voir le produit créé dans le pavé Liste des produits" , () => {
    adhesion.verifProduitAjouteeDansLaListe()
     
})

When("Je clique sur l'onglet 'Option'" , () => {
    adhesion.cliquerBoutonOption()
     
})

Then("Le pavé Liste des options devrait être affiché vide" , () => {
    adhesion.verifListeOptionVide()
     
})

And("Vérifier que les champs dans le pavé Ajout option doivent être automatiquement remplis" , () => {
    adhesion.verifChapmsRempliAjoutOption()
     
})

When("Je coche la case permettant de tout sélectionner dans: Choix de l'ayant droit Sélectionner une Option ou une Combinaison" , () => {
    adhesion.cocherCases()
     
})

And("Je vérifie que les risques sont alimentés en cliquant sur le bouton 'Risques couverts'" , () => {
    adhesion.verifRisquesCouverts()
     
})


When("Je clique sur l'onglet 'Règlement et périodicité des cotisations'" , () => {
    adhesion.cliquerOngletReglementEtPériodicite()
     
})

Then("Je vérifie que les champs sont automatiquement alimentés dans le pavé 'ajout règlement et périodicité de cotisation'" , () => {
    adhesion.verifChampsRéglemetEtPeriodicité()
     
})


When("Je clique sur 'Suivant'" , () => {
    adhesion.cliquerSuivantDansCompteCotisant()
     
})


Then("Dans le Compte cotisant vérifier l'affichge" , () => {
    adhesion.verifierAffichage()
})


When("je supprime la famille" , () => {
    adhesion.supprimerFamille()

})




















