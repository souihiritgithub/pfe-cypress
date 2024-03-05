import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import loginRct02 from '../../../../support/commands'
import RenseignementGeneraux from '../../Pages/PagesRenseignementGeneraux/RenseignementGenerauxPage.cy'
Given(`L'utilisateur est connecté`, () => {
	cy.loginRct02()
})
When(`L'utilisateur accède au menu Gestion Famille, recherche et clique pour modifier`, () => {	
    RenseignementGeneraux.accesMenuGestionFamille()
})
Then(`Affichage de la page Modification famille`, () => {
    RenseignementGeneraux.affichageModificationFamille()
})
When(`L'utilisateur clique sur l'onglet Ayants droit,selectionne le responsable et clique sur coordonnées`, () => {	
    RenseignementGeneraux.clickOngletAyantsDroit()
})
Then(`Affichage de la Liste des coordonnées ayant droit avec au moins une ligne sans date de fin`, () => {
    RenseignementGeneraux.affichageListeCoordonneesAyantDroit()
})