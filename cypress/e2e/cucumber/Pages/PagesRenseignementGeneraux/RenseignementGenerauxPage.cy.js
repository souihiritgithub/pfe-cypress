class RenseignementGeneraux {
	// Générer un numéro de téléphone aléatoire qui commence par "07" et a 10 chiffres
	generateRandomPhoneNumber = () => {
		const prefix = '+3307'
		const remainingDigits = Math.random().toString().slice(2, 10) // Génère 10 chiffres aléatoires

		return prefix + remainingDigits
	}
	nouveauNumero = this.generateRandomPhoneNumber()
	currentDate = new Date()
	formattedDate = `${this.currentDate.getDate().toString().padStart(2, '0')}/${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}/${this.currentDate.getFullYear()}`

	accesMenuGestionFamille() {
		cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click()
		cy.xpath(
			'//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[3]/a',
		).click()
		cy.get('[name=a_ynom]').type('ONETESTCY')
		cy.xpath(
			'//*[@id="searchFamily"]/footer[1]/div/div[2]/input[1]',
		).click()
		cy.get('tbody').eq(2).find('tr').eq(1).click()
		cy.get('#bouton-gestion-famille-modifier').click()
	}

	affichageModificationFamille() {
		cy.xpath('//*[@id="changingTitle"]/h1').contains('Modification famille')
		cy.wait(1000)
	}
	clickOngletAyantsDroit() {
		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[2]').click()
		cy.wait(1000)
		cy.get('tbody').first().find('tr').first().click()
		cy.xpath(
			'//*[@id="list-ayant-droits-widgets"]/div/div/div[1]/div[1]/div/div/ul/li[17]',
		).click()
	}
	affichageListeCoordonneesAyantDroit() {
		cy.get('tbody').eq(1).find('tr').should('have.length.gte', 1)
		cy.get('.odd > .noVis').should('not.have.value')
	}
	clickLigneCoordonneesSansDateFin() {
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		cy.get('#annulerUpdateCoor').click()
	}
	verificationPavageAnnulation() {
		cy.get('#ayant-droit-coordonnees-widgets').should('exist')
	}
	saisieNouveauNumero() {
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		//saisir un numero de telephone auto generé
		cy.get('#tel1').clear().type(this.nouveauNumero)
		cy.get('.ng-scope > #mettreAJour').click()
	}
	verificationMessageModification() {
		cy.get(
			'div[style="top: 10px; left: 960px;"] > .owlink-alerting > .notice',
		).should('exist')
		cy.contains('Modification effectuée avec succès')
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		cy.xpath(
			'//*[@id="coordAYForm"]/div/div/div/div[2]/div/div[3]/div/div/header',
		).should('exist')
		cy.xpath(
			'//*[@id="coordAYForm"]/div/div/div/div[2]/div/div[3]/div/div/div/div/section[3]/div/label[3]/input',
		).should('have.attr', 'checked', 'checked')
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Consulter"] > .btn',
		).click()
		cy.get('#tel1').should('have.value', this.nouveauNumero)
		cy.get(
			'[ng-class="{active : (!activeTab) ||  activeTab == 1}"]',
		).click()
		cy.get('[name=phone2]').should(($input) => {
			const inputValue = $input.val()
			const lastThreeDigits = this.nouveauNumero.slice(-3) // Récupère les trois derniers chiffres de this.nouveauNumero

			expect(inputValue).to.include(lastThreeDigits)
		})

		cy.get('#slideVision360').click()
		cy.xpath('//*[@id="bodyCoordonnees"]/div[2]/span[4]/p').should('exist')
		cy.get('#slideVision360').click()
	}
	saisieDateFinVierge() {
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		cy.get('#tel1').clear().type('+3225741269')
		cy.get('.ng-scope > #mettreAJour').click()
	}
	VerifModifactionNouveauMessage() {
		cy.get(
			'div[style="top: 10px; left: 960px;"] > .owlink-alerting > .notice',
		).should('exist')
		cy.contains('Modification effectuée avec succès')
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		cy.xpath(
			'//*[@id="coordAYForm"]/div/div/div/div[2]/div/div[3]/div/div/header',
		).should('exist')
		cy.xpath(
			'//*[@id="coordAYForm"]/div/div/div/div[2]/div/div[3]/div/div/div/div/section[3]/div/label[3]/input',
		).should('have.attr', 'checked', 'checked')
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Consulter"] > .btn',
		).click()
		cy.get('#tel1').should('have.value', '+3225741269')
		cy.get(
			'[ng-class="{active : (!activeTab) ||  activeTab == 1}"]',
		).click()
		cy.get('[name=phone2]').should('have.value', '+3225741269')
	}
	saisieDateDepuisLe() {
		cy.get('[name=dateNPAI]').clear().type('01/01/2015')
		cy.get('.col-md-12 > .btn-primary').click()
		cy.contains('Modification effectuée avec succès')
		cy.wait(1000)
		cy.get('[name=dateNPAI]').should('have.value', '01/01/2015')
		cy.get('[name=email]').should('be.be.empty')
	}

	clickVision360() {
		cy.get('#slideVision360').click()
		cy.get(':nth-child(3) > .my-tooltip')
			.trigger('mouseover')
			.should('be.visible') // Wait for the element to be visible
			.invoke('text')
			.should('contain', 'PND depuis le : 1 janvier 2015')
		cy.get(':nth-child(3) > .my-tooltip > :nth-child(2)').should(
			'have.css',
			'color',
			'rgb(255, 0, 0)',
		)
	}
	clickPictogrammeMaison() {
		cy.get(':nth-child(3) > .my-tooltip > .fa').click()
	}
	redirectionCoordonnees() {
		cy.get('#ayant-droit-coordonnees-widgets > [role="content"]')
			.should('exist')
			.and('be.visible')
	}

	dupliquerCoordonnees() {
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get('[aria-label="Dupliquer"] > .btn').click()
		cy.get('#dateDebut').clear().type('01/01/2011')
		cy.get('#cp2').clear().type('75001')
		cy.get('#valider').click()
	}
	verificationMessageAjout() {
		cy.contains('Ajout effectué avec succès')
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Consulter"] > .btn',
		).click()
		cy.get('#dateDebut').should('have.value', '01/01/2011')
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Consulter"] > .btn',
		).click()
		cy.get(
			'.col-md-4 > .well > [style="padding: 25px 2% 5px;!important"] > .row > :nth-child(2) > .input > .form-control',
		).should('have.value', '03/03/2024')
	}

	accesInformationsGenerales() {
		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[1]').click()
		cy.get(
			':nth-child(2) > .well > :nth-child(2) > :nth-child(1) > .input > .form-control',
		).should('have.value', '')
	}
	clickVision360AndVerif() {
		cy.get('#slideVision360').click()
		/* 	cy.get(':nth-child(3) > .my-tooltip')
		.trigger('mouseover')
		.should('be.visible') // Wait for the element to be visible
		.invoke('text')
		.should('contain', '') 
	 cy.get(':nth-child(3) > .my-tooltip > :nth-child(2)').should(
		'have.css',
		'color',
		'rgb(0, 0, 0)', 
	) */
	}
	clickOngletAyantsDroitModif() {
		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[2]').click()
		cy.wait(1000)
		cy.get('tbody').first().find('tr').first().click()

		cy.get('[aria-label="Modifier"]').find('a').click()
		cy.xpath(
			'//*[@id="management-ayants-droits-widgets"]/header/div/h2[3]',
		).should('exist')
	}
	modifierAnneeNaissance() {
		cy.get('[name=dateNaissance]').clear().type('01/01/1995')
		cy.get('#mettreAJour').click()
		cy.contains('Modification effectuée avec succès')
	}

	modifierNomFamille() {
		cy.get('#nom').clear().type('MODIFOCATIONNAME')
		cy.get('#mettreAJour').click()
		cy.contains('Modification effectuée avec succès')
	}
	testChamps() {
		//modifprenom
		cy.get('#prenom').clear().type('MODIFOCATIONNAME')
		cy.get('#mettreAJour').click()
		cy.contains('Modification effectuée avec succès')
		cy.get('tbody').first().find('tr').first().click()

		cy.get('[aria-label="Modifier"]').find('a').click()
		cy.get('#prenom').should('have.value', 'MODIFOCATIONNAME')
		//modif civilité
		cy.get('#civilite').select('Madame')
		cy.get('#mettreAJour').click()
		cy.contains('Modification effectuée avec succès')
		cy.get('tbody').first().find('tr').first().click()

		cy.get('[aria-label="Modifier"]').find('a').click()
		cy.get('#civilite').should('have.value', 'string:MME')
	}
	accesOngletAyantsDroitAjout() {
		cy.xpath('//*[@id="content"]/div/div/div[1]/ul/li[2]').click()
		cy.wait(1000)
		cy.xpath(
			'//*[@id="list-ayant-droits-widgets"]/div/div/div[1]/div[1]/div/div/ul/li[21]',
		).click()
		cy.get('#dateAdhesion').type('04/08/2024')
		cy.get('#nom').type('NEWNAME')
		cy.get('#prenom').type('NEWPRENOM')
		cy.get('#qualite > .ui-select-match > .btn-default').click()
		cy.get(
			'#ui-select-choices-row-17-2 > .ui-select-choices-row-inner',
		).click()
		cy.get('[name=civilite]').select('Madame')
		cy.get('[name=dateNaissance]').type('01/01/2020')

		cy.get('#liaisonNoemie').select('ACTIF (Télétrans)')
		cy.get('#numeroSS').type('220010101010101')
		cy.get('#cless').type('60')
		cy.get(
			':nth-child(4) > :nth-child(1) > .input-group > .ui-select-container > .ui-select-match > .btn-default',
		).click()
		cy.get(
			'#ui-select-choices-row-25-0 > .ui-select-choices-row-inner',
		).click()
		cy.get('#centre-ro-id > .ui-select-match > .btn-default').type('75')
		cy.contains('751000-01 - PARIS').click({ force: true })
		cy.get('[name=dateDebutRegime]').type('01/01/2020')
		cy.xpath('//*[@id="ay-form"]/footer/span[1]/input').click()
	}
	verificationAjoutAyantDroit() {
		cy.contains('Ajout effectué avec succès')
		cy.get('tbody').first().find('tr').should('have.length.gte', 2)
	}
	consulterAyantDroit() {
		cy.get('#read-ayant-droit').click()
		cy.get('.management-ayants-droits-header > [role="menu"]').should(
			'exist',
		)
		cy.get('#nom').should('have.value', 'NEWNAME')
		cy.get('#prenom').should('have.value', 'NEWPRENOM')
		cy.get('.col-left > .input > .form-control').should(
			'have.value',
			'01/01/2020',
		)
	}
	clickOngletAyantsDroitModifNouveau() {
		cy.get('.button-icon-ay').click()
		cy.wait(1000)
		cy.get('#update-ayant-droit').click()
	}
	verificationPavageModif() {
		cy.get('#nom').should('have.value', 'NEWNAME')
		cy.get('#prenom').should('have.value', 'NEWPRENOM')
		cy.get('#dateDebutRegime').should('have.value', '01/01/2020')
	}
	clickOngletAyantsResponsable() {
		cy.get('tbody').first().find('tr').first().click()
		cy.get('#update-ayant-droit').click()
		cy.get('.well.ng-scope > .radiation-container').should('exist')
	}
	accesOngletProduits() {
		cy.get('.nav-wizard > [ng-class="{active : activeTab == 3}"]').click()
		cy.wait(1000)
		cy.get('[index="0"] > .nav-link').click()
		cy.xpath(
			'//*[@id="option-produit-list"]/div[2]/div/div/div[1]/div/ul/li[9]',
		).click()
		cy.get(
			'.table-responsive > .table > tbody > :nth-child(3) > :nth-child(1)',
		).click()
		cy.get('#option > .ui-select-match > .btn-default').click()
		cy.get('.ui-select-choices-row-inner').click()
		cy.get('footer > .btn-primary').click()
	}
	verificationAjoutAyantDroitOption() {
		cy.contains('Ajout effectué avec succès')
		cy.get('tbody').eq(1).find('tr').should('have.length.gte', 1)
		cy.get('tbody').eq(1).find('tr').last().should('exist')
	}
	accesOngletInformationsGenerales() {
		cy.get(
			'[ng-class="{active : (!activeTab) ||  activeTab == 1}"]',
		).click()
		cy.get(
			'div.ng-scope > .nav > [ng-class="{active : activeTab == 4}"] > .ng-binding',
		).click()
		cy.get('tbody').eq(1).find('tr').first().click()
		cy.get('.demo-btns > .ng-scope > .btn').click()
	}

	autoScroll() {
		cy.get('#informationsBox').should('exist')
		cy.get(':nth-child(2) > .well > fieldset > .row > :nth-child(1) > .input > .form-control').should('have.value','01/01/2023')
		cy.get('footer > .btn-primary').click()
		cy.contains('Période RO créée')
		cy.get('tbody').eq(2).find('tr').should('have.length.gte', 1)
		cy.get('#listLiasonNoe > tbody > .odd > .expand').should('have.have',`Prévu pour envoi le : ${this.formattedDate}`);
		cy.get('#listLiasonNoe > tbody > .odd > :nth-child(8)').should('have.have','Création')
		cy.get('#listLiasonNoe > tbody > .odd > :nth-child(10)').contains('01/01/2023')
	}
	accesOngletInformationsGeneralesTP () {
		cy.get(
			'[ng-class="{active : (!activeTab) ||  activeTab == 1}"]',
		).click()	
	cy.xpath('//*[@id="fam-widgets"]/div/nav/nav/div/div/ul/li[7]').click()
	cy.get('.open > .dropdown-menu > :nth-child(2) > .btn').click()
	cy.get('#modalConfirm > .modal-dialog > .modal-content > .modal-body').contains('Voulez vous mettre à jour les droits TP ?')
	cy.get('#modalYesBtn').click()
	cy.contains('Mise à jour droits effectuée avec succès')
	}
	clickOngletMiseAJourCarte () {
		cy.get(
			'[ng-class="{active : (!activeTab) ||  activeTab == 1}"]',
		).click()	
	cy.xpath('//*[@id="fam-widgets"]/div/nav/nav/div/div/ul/li[7]').click()
	cy.get('.open > .dropdown-menu > :nth-child(1) > .btn').click()
	cy.xpath('//*[@id="modalConfirm"]/div/div/div[2]/div').contains('Voulez vous refaire la carte TP ?')
	cy.get('#modalYesBtn').click()
	cy.contains('Mise à jour carte effectuée avec succès')


	}
}
export default new RenseignementGeneraux()
