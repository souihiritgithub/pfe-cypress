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
When(
	`L'utilisateur sélectionne la ligne où la date de fin est vierge dans la Liste des coordonnées ayant droit,Clique sur "Modifier", Saisit et Valide`,
	() => {
		RenseignementGeneraux.clickOngletAyantsDroit()
		RenseignementGeneraux.affichageListeCoordonneesAyantDroit()
		RenseignementGeneraux.saisieDateFinVierge()
	},
)
Then(
	`Affichage du message "Modification effectuée avec succès" et vérification`,
	() => {
		RenseignementGeneraux.VerifModifactionNouveauMessage()
	},
)

When(
	`L'utilisateur saisit une date dans le pavé Informations générales champs "PND depuis le" et Clique sur "Mettre à jour"`,
	() => {
		RenseignementGeneraux.saisieDateDepuisLe()
	},
)
When(`L'utilisateur clique sur la vision 360° et Passe le curseur sur l'adresse et verifier`, () => {
	RenseignementGeneraux.clickVision360()
})
When(`L'utilisateur clique sur le pictogramme "maison" à gauche de l'adresse`, () => {
	RenseignementGeneraux.clickPictogrammeMaison()
})
Then(`Redirection vers l'écran Ayants droit, pavé Coordonnées`, () => {
	RenseignementGeneraux.redirectionCoordonnees()
})
When(`L'utilisateur sélectionne la ligne de coordonnées active,dupliquer,faire des modifications et valider`, () => {
	RenseignementGeneraux.dupliquerCoordonnees()
})
Then(`Affichage du message "Ajout effectué avec succès" et faire des vérifications`, () => {
	RenseignementGeneraux.verificationMessageAjout()
})	
When(`L'utilisateur accède à l'onglet Informations générales et vérifier PND`, () => {
	RenseignementGeneraux.accesInformationsGenerales()
})
When(`L'utilisateur clique sur la vision 360° et Passe le curseur sur l'adresse et verifier l'adresse`, () => {
	RenseignementGeneraux.clickVision360AndVerif()
})
When(`L'utilisateur accède au menu Gestion Famille,Recherche, Sélectionne une ligne,Modifier,Affichage de la page Modification famille`, () => {
	RenseignementGeneraux.accesMenuGestionFamille()
    RenseignementGeneraux.affichageModificationFamille()
})
When(`L'utilisateur clique sur l'onglet Ayants droit,Sélectionne la ligne du responsable,modifier,Affichage du pavé Mise à jour Ayant droit avec les données relatives au responsab`, () => {
	RenseignementGeneraux.clickOngletAyantsDroitModif()
	
})
When(`L'utilisateur modifie l'année de naissance et mis à jour`, () => {
	RenseignementGeneraux.modifierAnneeNaissance()
})
When(`L'utilisateur sélectionne un ayant droit, Clique sur le bouton Modifier,Affichage du pavé Mise à jour Ayant droit avec les données relatives à l'ayant droit sélectionné`, () => {
	RenseignementGeneraux.clickOngletAyantsDroitModif()
})
When(`L'utilisateur modifie le nom de famille, Clique sur le bouton Mettre à jour,et Affichage d'un message confirmant la bonne prise en compte de la mise à jour`, () => {
	RenseignementGeneraux.modifierNomFamille()
})
When(`L'utilisateur teste chaque champ en effectuant des modifications,modification des champs et faire la vérification`, () => {
	RenseignementGeneraux.testChamps()
})
When(`L'utilisateur accède au menu Gestion Famille,Recherche la famille,Sélectionne la ligne,modifer etcAffichage de la page Modification famille`, () => {
	RenseignementGeneraux.accesMenuGestionFamille()
    RenseignementGeneraux.affichageModificationFamille()
})
When(`L'utilisateur accède à l'onglet Ayants droit,Clique sur le bouton "Ajouter",Saisit les champs obligatoires,Clique sur Valider`, () => {
	RenseignementGeneraux.accesOngletAyantsDroitAjout()
})
Then(`Affichage du message "Ajout effectué avec succès",Affichage de l'ayant droit rajouté dans le pavé Liste des ayants droit,Consultation de la fiche ayant droit`, () => {
	RenseignementGeneraux.verificationAjoutAyantDroit()
})
When(`L'utilisateur sélectionne la ligne de l'ayant droit créé,Clique sur le bouton consulter,Vérification`, () => {
	RenseignementGeneraux.consulterAyantDroit()
})
When(`L'utilisateur ferme le pavé,Sélectionne de nouveau la ligne de l'ayant droit créé,Clique sur le bouton Modifier`, () => {
	RenseignementGeneraux.clickOngletAyantsDroitModifNouveau()
})
Then(`Vérification de l'affichage du pavé Modification ayant droit affichant les données relatives à l'ayant droit créé et permettant la modification de certaines données`, () => {
	RenseignementGeneraux.verificationPavageModif()
})
When(`L'utilisateur sélectionne la ligne du responsable,Clique sur Modifier,Vérification de la présence du pavé Radiation`, () => {

	RenseignementGeneraux.clickOngletAyantsResponsable()
})
When(`L'utilisateur accède à l'onglet Produits et options, ajout option pour le nouveau ayant droit`, () => {
	RenseignementGeneraux.accesOngletProduits()
})
Then(`Vérification de l'affichage du message "Ajout effectué avec succès" et vérification des options`, () => {
	RenseignementGeneraux.verificationAjoutAyantDroitOption()
})
When(`L'utilisateur accède à l'onglet Informations générales L.NOEMIE,Sélectionne l'ayant droit créé dans la Liste des ayants droit,Clique sur le bouton "Création"`, () => {
	RenseignementGeneraux.accesOngletInformationsGenerales()
})
Then(`Auto-scroll pour affichage du pavé Détails Liaison Noemie,Vérification que la date début = date d'adhésion,Vérification`, () => {
	RenseignementGeneraux.autoScroll()
})
When(`L'utilisateur accède à l'onglet Informations générales TP Externe,Clique sur "Mise à jour droits",Affichage d'un message de confirmation et confirmer`, () => {
	RenseignementGeneraux.accesOngletInformationsGeneralesTP()
})
When(`L'utilisateur clique sur "Mise à jour carte" dans le menu TP Externe,Affichage d'un message de confirmation et confirmer`, () => {
	RenseignementGeneraux.clickOngletMiseAJourCarte()
})