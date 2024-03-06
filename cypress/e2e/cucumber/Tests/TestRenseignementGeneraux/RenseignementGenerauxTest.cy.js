import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import loginRct02 from '../../../../support/commands'
import RenseignementGeneraux from '../../Pages/PagesRenseignementGeneraux/RenseignementGenerauxPage.cy'
Given(`L'utilisateur est connecté`, () => {
	cy.loginRct02()
})
When(
	`L'utilisateur accède au menu Gestion Famille, recherche et clique pour modifier`,
	() => {
		RenseignementGeneraux.accesMenuGestionFamille()
	},
)
Then(`Affichage de la page Modification famille`, () => {
	RenseignementGeneraux.affichageModificationFamille()
})
When(
	`L'utilisateur clique sur l'onglet Ayants droit,selectionne le responsable et clique sur coordonnées`,
	() => {
		RenseignementGeneraux.clickOngletAyantsDroit()
	},
)
Then(
	`Affichage de la Liste des coordonnées ayant droit avec au moins une ligne sans date de fin`,
	() => {
		RenseignementGeneraux.affichageListeCoordonneesAyantDroit()
	},
)
When(
	`L'utilisateur sélectionne la ligne de coordonnées sans date de fin, Clique sur Modifier,et Clique sur Annuler sans faire de modification`,
	() => {
		RenseignementGeneraux.clickLigneCoordonneesSansDateFin()
	},
)
Then(
	`Vérification que le pavé se ferme sans affichage d'un message de confirmation d'annulation`,
	() => {
		RenseignementGeneraux.verificationPavageAnnulation()
	},
)
When(
	`L'utilisateur sélectionne de nouveau la ligne,clique sur "Modifier", Saisit un nouveau numéro de téléphone à 10 chiffres commençant par 07, Clique sur "Enregistrer"`,
	() => {
		RenseignementGeneraux.saisieNouveauNumero()
	},
)
Then(
	`Affichage du message "Modification effectuée avec succès" et vérification des champs`,
	() => {
		RenseignementGeneraux.verificationMessageModification()
	},
)
