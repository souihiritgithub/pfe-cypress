import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import AdhesionPage from '../../Pages/PageAdhesion/ContexteAdhesionPage.cy'
import loginRct02 from '../../../../support/commands'

Given(`L'utilisateur est connecté`, () => {
	cy.loginRct02();
})

When(`L'utilisateur accède au menu Gestion Adhésions`, () => {
	AdhesionPage.goToAdhesionMenu()
})
Then(
	`la page "Création d'une famille" s'affiche avec l'onglet "Informations générales"`,
	() => {
		AdhesionPage.visitCreationFamilleInfoG()
	},
)

When(`L'utilisateur sélectionne un Organisme`, () => {
	AdhesionPage.AddOrganisme()
})
And(`Saisit la date d'adhésion`, () => {
	AdhesionPage.AddAdhesionDate()
})
And(`Sélectionne une agence`, () => {
	AdhesionPage.AddAgence()
})
And(`Sélectionne un conseiller`, () => {
	AdhesionPage.AddConseiller()
})

And(`Sélectionne une région`, () => {
	AdhesionPage.AddRegion()
})

And(`Sélectionne une origine si paramétrage présent`, () => {
	AdhesionPage.AddOrigin()
})

And(`Clique sur le bouton "Suivant"`, () => {
	AdhesionPage.BtnSuivant()
})
Then(
	`La page Création d'une famille, onglet Ajout des ayants droits est affichée`,
	() => {
		AdhesionPage.visitCreationFamilleAyantD()
	},
)
And(`Le pavé Liste des ayants droits est vierge`, () => {
	AdhesionPage.VerifPaveVierge()
})
And(
	`Le pavé Ajout d'un ayant droit est ouvert par défaut avec la qualité [RESP] non modifiable`,
	() => {
		AdhesionPage.QualitiNonModifiable()
	},
)

When(`L'utilisateur sélectionne la Civilité`, () => {
	AdhesionPage.SelectCivilite()
})
And(`Renseigne les champs obligatoires`, () => {
	AdhesionPage.EnterInputOblig()
})

And(`Clique sur le bouton "Valider"`, () => {
	AdhesionPage.clickValider()
})

Then(`Affichage du message "[Famille] Ajout effectué avec succès"`, () => {
	AdhesionPage.MsgFamilleSuccess()
})
And(`Le responsable est affiché dans le pavé Liste des ayants droits`, () => {
	AdhesionPage.VerifResponsable()
})
When(`L'utilisateur Renseigne de nouveau les champs obligatoires`, () => {
	AdhesionPage.EnterInputObligSecond()
})
Then(
	`Vérification de l'affichage du message "[Ayant droit] Ajout effectué avec succès"`,
	() => {
		AdhesionPage.MsgAyantDroitSuccess()
	},
)
And(
	`Deux lignes apparaissent avec les bonnes valeurs dans la liste des ayants droits`,
	() => {
		AdhesionPage.Verif2LinesExist()
	},
)
When(`L'utilisateur sélectionne un ayant droit dans la liste`, () => {
	AdhesionPage.SelectAyantDroit()
})
And(`Clique sur le bouton Modifier`, () => {
	AdhesionPage.BtnModifier()
})

And(`Modifie des valeurs`, () => {
	AdhesionPage.ModifInputs()
})
And(`Clique sur Mettre à jour`, () => {
	AdhesionPage.ClickUpdate()
})
Then(
	`Vérification que la mise à jour est effective dans le détail de l'ayant droit concerné`,
	() => {
		AdhesionPage.VerifUpdateDetailSuccess()
	},
)
And(
	`La mise à jour est effective dans la liste des ayants droits en fonction des modifications effectuées`,
	() => {
		AdhesionPage.VerifUpdateSuccessEnFonctionModif()
	},
)
When(`L'utilisateur Clique sur le bouton "Suivant"`, () => {
	

	AdhesionPage.BtnSuivant()
})

Then(
	`Affichage de la page Création d'une famille, onglet Affectation produit et option avec un pavé Liste des produits vide`,
	() => {
		AdhesionPage.visitCreationFamilleProduitOPT()
	},
)
And(
	`Dans l'onglet Produit, vérification des champs automatiquement alimentés Date adhésion Échéance d'entrée`,
	() => {
	AdhesionPage.VerifDateProduit()
	},
)
When(`L'utilisateur ajout un produit et valide le formulaire`, () => {
			AdhesionPage.AddProduct()
});

Then(`Affichage d'un message : "Ajout effectué avec succès" et vérification de produit`, () => {
	AdhesionPage.VerifProductSucces()
})
When(`L'utilisateur clique sur Option`, () => {
	AdhesionPage.ClickOption()
})
Then(`Affichage du pavé Liste des options vierge et vérification des champs`, () => {
	AdhesionPage.VerifChampsOption()
})
When(`L'utilisateur sélectionne et valide des options`, () => {
	AdhesionPage.SelectAyantDroitAndOption()
})
Then(`Confirmation de l'ajout, vérification de l'option dans la liste`, () => {
	AdhesionPage.VerifAjoutOption()
})

When(`L'utilisateur clique sur le bouton consulter, modifier, supprimer sans sélectionner de ligne`, () => {
	
    AdhesionPage.MessageError()
})
When(`L'utilisateur clique sur le bouton Risques couverts avec selection d'une ligne`, () => {
	AdhesionPage.BtnRisqueCouvert()
})
When(`L'utilisateur clique sur l'onglet "Règlement et périodicité des cotisations"`, () => {
	AdhesionPage.BtnReglement()
})
Then(`Vérification que les champs sont alimentés automatiquement`, () => {
	AdhesionPage.VerifChampsReglement()
})
When(`L'utilisateur Ajout et valide une référence bancaire`, () => {
AdhesionPage.AjoutRefBancaire() 
})
Then(`Si la référence bancaire existe déjà , Affichage du message Référence bancaire déjà existante`, () => {
	AdhesionPage.VerifRefBancaireExistante()
})
