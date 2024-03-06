import { should } from 'chai'
import 'cypress-xpath'
class AdhesionPage {
	formattedDate = '01/01/2023'
	currentDate = new Date()
	formattedDateSaisie = `${this.currentDate.getDate().toString().padStart(2, '0')}/${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}/${this.currentDate.getFullYear()}`
	goToAdhesionMenu() {
		cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click()
		cy.xpath(
			'//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[10]/a',
		).click()
	}
	clickValider() {
		cy.get('input[value=Valider]').should('exist').click()
		cy.get('[class=modal-content]').should('exist')
		cy.get('#modalYesBtn').should('exist').click()
	}
	visitCreationFamilleInfoG() {
		cy.get('.main-header h2')
			.should('be.visible')
			.should('have.text', "Création d'une famille")
		cy.xpath(
			'//*[@id="wid-id-0"]/span/div/div[2]/div/div[1]/ul/li[1]',
		).should('have.class', 'active')
	}

	visitCreationFamilleAyantD() {
		cy.get('.main-header h2')
			.should('be.visible')
			.should('have.text', "Création d'une famille")
		cy.xpath(
			'//*[@id="wid-id-0"]/span/div/div[2]/div/div[1]/ul/li[2]',
		).should('have.class', 'active')
	}

	visitCreationFamilleProduitOPT() {
		cy.get('.main-header h2')
			.should('be.visible')
			.should('have.text', "Création d'une famille")
		cy.xpath(
			'//*[@id="wid-id-0"]/span/div/div[2]/div/div[1]/ul/li[3]',
		).should('have.class', 'active')

		cy.get('[class=odd] td').contains('Aucun élément à afficher')
		cy.get('#listProduitFamille_info').contains(
			"Affichage de l'élement 0 à 0 sur 0 éléments",
		)
	}
	EnterInputOblig() {
		cy.get('[name=dateN]').type('01/01/1970')
		cy.get('[name=nom]').type('CYPRESFAMSECON')
		cy.get('[name=prenom]').type('CYPRESFAMSECON')
		cy.get('#range').should('have.value', '1')
		cy.get('#cp').type('31000')
		cy.get('#ville').type('TOULOUSE')
		cy.get('#pays').contains('FRANCE')
		cy.get('.input-group').eq(15).click().contains('4 NON').click()
		cy.get('.input-group')
			.eq(16)
			.click()
			.contains('01 REGIME GENERAL')
			.click()
		cy.get('.input-group').eq(17).type('75')
		cy.wait(1000)
		cy.contains('751000-01 - PARIS').click()
	}
	EnterInputObligSecond() {
		cy.xpath(
			'//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[2]/section[1]/div',
		)
			.click()
			.contains('ENFT ENFANT')
			.click()
		cy.get('[name=civilite]').select('Madame')
		cy.get('[name=dateN]').type('01/01/2020')

		cy.get('[name=nom]').type('Ayant droit 22')
		cy.get('[name=prenom]').type('Ayant droit 22')
		cy.get('#range').should('have.value', '1')
		cy.get('#cp').type('31000')
		cy.get('#ville').type('TOULOUSE')
		cy.get('#pays').contains('FRANCE')
		cy.get('.input-group').eq(15).click().contains('4 NON').click()
		cy.get('.input-group')
			.eq(16)
			.click()
			.contains('01 REGIME GENERAL')
			.click()
		cy.get('.input-group').eq(17).type('75')
		cy.contains('751000-01 - PARIS').click({ force: true })
	}

	BtnSuivant() {
		cy.get('#suivant').should('exist').click({ force: true })
	}
	AddOrganisme() {
		cy.xpath(
			'//*[@id="infoGeneral"]/div/div/div/div/div/div[1]/section[3]/label[2]/div/div/input[1]',
		).should('exist')
	}
	AddAdhesionDate() {
		cy.get('[name=dateAdhesion]')
			.should('exist')
			.type(this.formattedDate, { force: true })
	}

	AddAgence() {
		cy.get('.input-group')
			.eq(1)
			.click()
			.contains('TEST AGENCE DEMO TEST ')
			.click()
	}
	AddConseiller() {
		cy.get('.input-group').eq(2).click().contains('13 R7 130422 ').click()
	}
	AddRegion() {
		cy.get('.input-group').eq(3).click().contains('01 TEST').click()
	}
	AddOrigin() {
		cy.get('.input-group')
			.eq(4)
			.click()
			.contains('DSN TRAITEMENT DSN ')
			.click()
	}
	VerifPaveVierge() {
		cy.get('[class=odd] td').contains('Aucun élément à afficher')
	}

	QualitiNonModifiable() {
		cy.xpath(
			'//*[@id="add-ayant-droit-widget"]/div/div/div[3]/div/div/div[1]/div[1]/div/div[2]/section[1]/div/div[1]/span',
		).should('have.attr', 'disabled', 'disabled')
	}

	SelectCivilite() {
		cy.get('[name=civilite]').select('Madame')
	}
	MsgFamilleSuccess() {
		cy.contains('[Famille] Ajout effectué avec succès')
	}
	VerifResponsable() {
		cy.get('tbody').first().find('tr').should('have.length', 1)
		cy.get('#listAyantsDroit_info')
			.should('exist', 'be.visible')
			.and('have.text', "Affichage de l'élement 1 à 1 sur 1 éléments")
	}
	MsgAyantDroitSuccess() {
		cy.contains('[Ayant droit] Ajout effectué avec succès')
	}
	Verif2LinesExist() {
		cy.get('tbody').first().find('tr').should('have.length', 2)
		cy.get('#listAyantsDroit_info')
			.should('exist', 'be.visible')
			.and('have.text', "Affichage de l'élement 1 à 2 sur 2 éléments")
	}
	SelectAyantDroit() {
		cy.get('tbody').first().find('tr').first().click()
	}

	BtnModifier() {
		cy.get('[aria-label="Modifier"]').find('a').click()
	}
	ModifInputs() {
		cy.get('#nom').clear()
		cy.get('#nom').type('CYPRESFAMSECONModif')
	}

	ClickUpdate() {
		cy.get('[value="Mettre à jour"]').click()
	}
	VerifUpdateDetailSuccess() {
		cy.get('tbody').first().find('tr').first().click()

		cy.get('#nom').should('have.value', 'CYPRESFAMSECONMODIF')
	}
	VerifUpdateSuccessEnFonctionModif() {
		cy.get('tbody')
			.first()
			.find('tr')
			.first()
			.find('td')
			.eq(2)
			.should('have.text', 'CYPRESFAMSECONMODIF')
	}
	VerifDateProduit() {
		cy.get('[name=dateAdhesion]').should('have.value', this.formattedDate)
		cy.get('[name=dateAdhesionLimite]').should(
			'have.value',
			this.formattedDate,
		)

		cy.get('[name=dateSaisieAdhesion]').should(
			'have.value',
			this.formattedDateSaisie,
		)
		cy.get('[name=dateEcheance]').should('have.value', this.formattedDate)
	}

	AddProduct() {
		cy.get('.input-group').eq(13).click().type('12AMENI{enter}')

		cy.get('small.ng-binding').click()

		cy.get('.input-group').eq(14).click().type('ENTSAN A45{enter}')
		cy.get('.input-group').eq(19).click().type('Reçu et accepté{enter}')

		cy.get('.input-group').eq(15).click()
		cy.get(
			'#ui-select-choices-row-35-1 > .ui-select-choices-row-inner',
		).click()
		cy.wait(1000)
		cy.get(
			'#option-product-widgets > .no-padding > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .tab-content > .active > #addProductform > footer > :nth-child(1) > .btn',
		).click()

		cy.get('#cons-rgpd > .col-xs-12').should('exist')
		cy.get('.without-border > input.btn').click()
		cy.get(
			'#modalConfirm > .modal-dialog > .modal-content > .modal-header',
		).should('exist')
		cy.get('#modalYesBtn').click()
	}

	VerifProductSucces() {
		cy.contains('Ajout effectué avec succès')
		cy.get('[name="numContrat"]').invoke('val').should('not.be.empty')

		cy.get('tbody').first().find('tr').should('have.length', 1)
		cy.get('#listProduitFamille_info')
			.should('exist', 'be.visible')
			.and('have.text', "Affichage de l'élement 1 à 1 sur 1 éléments")
	}

	ClickOption() {
		cy.get(
			'#option-product-widgets > .form-group.col-md-12 > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .nav > [index="0"] > .nav-link',
		).click()
		cy.get('#option-produit-list > .panel-heading')
			.contains('Liste des options')
			.should('exist', 'be.visible')
	}

	VerifChampsOption() {
		cy.get('[class=odd] td').contains('Aucun élément à afficher')
		cy.get('#optionsProduittable_info').contains(
			"Affichage de l'élement 0 à 0 sur 0 éléments",
		)
		cy.wait(1000)
		cy.get('tbody').eq(3).find('tr').should('have.length.gt', 2)
		cy.get('[name=dateDebut]').should('have.value', this.formattedDate)
		cy.get('[name=dateEffetCotisation]').should(
			'have.value',
			this.formattedDate,
		)
	}

	SelectAyantDroitAndOption() {
		cy.get('#checkbox').click()
		cy.get('#option > .ui-select-match > .btn-default').click()
		cy.get('.ui-select-choices-row-inner > .ng-binding').click()
		cy.xpath('//*[@id="optionProduitForm"]/div[2]/footer/button[1]').click()
	}

	VerifAjoutOption() {
		cy.contains('Ajout effectué avec succès')
		cy.get('#optionsProduittable')
			.find('tbody')
			.find('tr')
			.should('have.length.gt', 1)
	}

	MessageError() {
		cy.xpath(
			'//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[10]',
		).click()
		cy.xpath(
			'//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[11]',
		).click()
		cy.xpath(
			'//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[8]',
		).click()
		cy.contains('Veuillez sélectionner un élément de la liste')
	}

	BtnRisqueCouvert() {
		cy.get('#optionsProduittable').find('tbody').find('tr').first().click()

		cy.xpath(
			'//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[3]/a',
		).click()
		cy.xpath('//*[@id="risques-couverts-widgets"]/header/h2').contains(
			'Risques couverts ',
		)
		cy.get('#risques-couverts-widgets > [role="content"]').should('exist')
	}
	BtnReglement() {
		cy.get(
			'#option-product-widgets > .form-group.col-md-12 > #familleProduitSection > .col-xs-12 > #ProduitGestion > div.ng-isolate-scope > .nav > [index="2"] > .nav-link',
		).click()
	}

	VerifChampsReglement() {
		//cy.get('[name=dateeffet]').should('have.value', this.formattedDate)
		cy.get('.input-group').eq(27).contains('CHQ Chèque')
		cy.get('.input-group').eq(28).contains('3 Trimestrielle')
	}

	AjoutRefBancaire() {
		cy.get('.input-group').eq(27).click()
		cy.get(
			'#ui-select-choices-row-19-1 > .ui-select-choices-row-inner',
		).click()
		cy.get('.input-group').eq(29).click()
		cy.get(
			'#ui-select-choices-row-21-1 > .ui-select-choices-row-inner',
		).click()
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[1]/section[6]/reference-bancaire-owlink/div/section/a',
		).click({ multiple: true, force: true })
		cy.get('#radio_41 > .md-container > .md-off').click()
		cy.get('#codePays').type('FR')
		cy.get('#codeBank').type('17499')
		cy.get('#codeGichet').type('00010')
		cy.get('#numCompte').type('51984498515')
		cy.get('#cleRIB').type('35')
		cy.get('#titulaire').type('CYPRESFAMSECON')
		cy.get(
			'[role="content"] > :nth-child(1) > .smart-form > footer > .btn-primary',
		).click()
	}
	VerifRefBancaireExistante() {
		cy.get('#modalYesBtn').click()
		cy.contains('Ajout effectué avec succès')
		cy.get('.input-group').eq(30).contains('[ CYPRESFAMSECON ]- - 17499')
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[2]/section[1]/label[2]/input',
		).should('have.value', 'FR7617499000105198449851535')
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[2]/section[2]/label[2]/input',
		).should('have.value', 'BCADNCNNXXX')
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[2]/section[3]/label[2]/input',
		).should('have.value', 'CYPRESFAMSECON')
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[2]/section[4]/label[2]/input',
		).should('have.value', 'BCI NOUMEA VICTOIre')
		cy.wait(2000)
		cy.get(
			'.tab-pane.active > #reglementPeriodicite > #createformReglementPeriodicite > .panel > :nth-child(5) > [data-ng-click="addReglement();formReglementPeriodicite.$setPristine()"]',
		).click()
		cy.get('#modalYesBtn').click()
	}
	BtnSupprimerAndVerif() {
		cy.intercept('**/api/cotisationStatus/calculCotisation').as(
			'calculCotisation',
		)
		cy.wait('@calculCotisation')
		cy.get(
			'.tab-pane.active > #reglement-cotisation-list > .panel-body > .box-body > .row > [dw-loading="reglementList"] > .col-sm-3 > .demo-btns > [aria-label="Supprimer"] > .btn',
		).click()
		cy.wait(1000)
		cy.get('#modalYesBtn').click()
		cy.wait(1000)
		cy.get('#modalYesBtn').click()
		cy.contains('Attention ! Il manque des codes de règlement')
		cy.get('.input-group')
			.eq(30)
			.should('not.have.value', '[ CYPRESFAMSECON ]- - 17499')
	}
	RefaireRefBancaire() {
		cy.get('.input-group').eq(27).click()
		cy.get(
			'#ui-select-choices-row-46-1 > .ui-select-choices-row-inner',
		).click()
		cy.get('.input-group').eq(29).click()
		cy.get(
			'#ui-select-choices-row-48-1 > .ui-select-choices-row-inner',
		).click()
		cy.xpath(
			'//*[@id="createformReglementPeriodicite"]/div/fieldset/div[1]/div/div/fieldset/div[1]/section[6]/reference-bancaire-owlink/div/section/a',
		).click({ multiple: true, force: true })
		cy.get('#radio_45 > .md-container > .md-off').click()
		cy.wait(1000)
		cy.get('#codePays').type('FR')
		cy.get('#codeBank').type('17499')
		cy.get('#codeGichet').type('00010')
		cy.get('#numCompte').type('51984498515')
		cy.get('#cleRIB').type('35')
		cy.get('#titulaire').type('CYPRESFAMSECON')

		cy.wait(1000)

		cy.get(
			':nth-child(2) > :nth-child(1) > .smart-form > footer > .btn-primary',
		).click()
		cy.get('#modalYesBtn').click()
		//ajout mandat et verif des champs
		cy.get(
			'.tab-pane.active > #reglementPeriodicite > #createformReglementPeriodicite > .panel > :nth-child(4) > :nth-child(2) > div.col-4 > .well > fieldset > .row > .mandat-owlink-padding > .mandat-owlink > .btn > .btn-label',
		).click()
		cy.get('.popover').should('exist')
		cy.get(
			'.col-md-12 > .input > .input-group > .ui-select-container > .ui-select-match > .btn-default > .ui-select-match-text',
		).contains('CYPRESFAMSECON FR7617499000105198449851535')
		cy.get(
			':nth-child(3) > .well > fieldset > :nth-child(1) > :nth-child(1) > .input > .form-control',
		).should('have.value', 'FR7617499000105198449851535')
		cy.get('#bic').should('have.value', 'BCADNCNNXXX')
		cy.get(
			':nth-child(2) > :nth-child(1) > :nth-child(3) > .well > fieldset > :nth-child(2) > :nth-child(1) > .input > .form-control',
		).should('have.value', '17499')
		cy.get('#codeGichet').should('have.value', '00010')
		cy.get('#numCompte').should('have.value', '51984498515')
		cy.get(
			':nth-child(3) > .well > fieldset > :nth-child(3) > :nth-child(1) > .input > .form-control',
		).should('have.value', 'CYPRESFAMSECON')
		cy.get(
			':nth-child(3) > .well > fieldset > :nth-child(3) > :nth-child(2) > .input > .form-control',
		).should('have.value', 'BCI NOUMEA VICTOIre')
		//ajout produit preleve
		cy.get(
			'.input > .input-group > .ui-select-container > :nth-child(1) > .ui-select-search',
		)
			.click()
			.type('ENTSAN{enter}')
		cy.get('[name=singneLe]').type(this.formattedDate)

		cy.wait(1000)
		cy.get('#mandatPrelevementform > footer > .btn-primary').click()
		cy.contains('Ajout effectué avec succès')
		cy.get('#rum').should('not.have.value', '')
		cy.get('[name=dateSign]').should('have.value', this.formattedDate)

		//valider l'ajoout du ref bancaire
		cy.get(
			'.tab-pane.active > #reglementPeriodicite > #createformReglementPeriodicite > .panel > :nth-child(5) > [data-ng-click="addReglement();formReglementPeriodicite.$setPristine()"]',
		).click()
		cy.get('#suivant').should('exist').click({ force: true })
cy.xpath('//*[@id="compte-cotisant2"]/header/h2').contains('Liste des cotisations')
cy.get('.pager > :nth-child(5) > .btn').click()
cy.get('#modalYesBtn').click()
	}

	SupprimerFamille() {
		cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]').click()
		cy.xpath(
			'//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[3]',
		).click()
		cy.get('[name=a_ynom]').type('CYPRESFAMSECON')
		cy.xpath(
			'//*[@id="searchFamily"]/footer[1]/div/div[2]/input[1]',
		).click()
		cy.get('tbody').eq(2).find('tr').eq(1).click()
		cy.get('#bouton-gestion-famille-modifier').click()

		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[3]').click()
		cy.wait(1000)
		//sup option
		cy.xpath('//*[@id="ProduitGestion"]/div/ul/li[2]').click()
		cy.wait(1000)
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.col-sm-12 > .demo-btns > [aria-label="Supprimer"] > .btn',
		).click()
		cy.wait(1000)

		cy.get('#modalYesBtn').click()
		cy.wait(1000)

		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.col-sm-12 > .demo-btns > [aria-label="Supprimer"] > .btn',
		).click()
		cy.get('#modalYesBtn').click()
		//supp reglement
		cy.xpath('//*[@id="ProduitGestion"]/div/ul/li[3]').click()
		cy.get(
			'.col-sm-3 > .demo-btns > [aria-label="Supprimer"] > .btn',
		).click()
		cy.wait(1000)

		cy.get('#modalYesBtn').click()
		cy.wait(1000)

		cy.get('#modalYesBtn').click()

		//supp produit
		cy.get(
			':nth-child(3) > .demo-btns > [aria-label="Supprimer"] > .btn',
		).click()
		cy.wait(1000)

		cy.get('#modalYesBtn').click()

		//sup ayant droit
		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[2]').click()
		cy.get('#modalYesBtn').click()
		cy.wait(1000)
		cy.get('tbody').first().find('tr').first().click()
		cy.get('#delete-ayant-droit').click()
		cy.get('#modalYesBtn').click()
	}
}
export default new AdhesionPage()
