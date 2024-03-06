class RenseignementGeneraux {
	// Générer un numéro de téléphone aléatoire qui commence par "07" et a 10 chiffres
	generateRandomPhoneNumber = () => {
		const prefix = '07'
		const remainingDigits = Math.random().toString().slice(2, 10) // Génère 10 chiffres aléatoires

		return prefix + remainingDigits
	}
	nouveauNumero = this.generateRandomPhoneNumber()

	accesMenuGestionFamille() {
		cy.xpath('//*[@id="left-panel"]/ng-include/nav/ul/li[2]/a').click()
		cy.xpath(
			'//*[@id="left-panel"]/ng-include/nav/ul/li[2]/ul/li[3]/a',
		).click()
		cy.get('[name=a_ynom]').type('AUTOCYPP')
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
		cy.get('tbody').eq(1).find('tr').click()
		cy.get(
			'.row.ng-scope > .col-sm-3 > .demo-btns > [aria-label="Modifier"] > .btn',
		).click()
		cy.get('#annulerUpdateCoor').click()
	}
	verificationPavageAnnulation() {
		cy.get('#ayant-droit-coordonnees-widgets').should('exist')
	}
	saisieNouveauNumero() {
		cy.get('tbody').eq(1).find('tr').click()
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
		cy.get('tbody').eq(1).find('tr').click()
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
	//	cy.get('[name=phone2]').should('exist').invoke('text').contains(this.nouveauNumero);

	//	cy.get('#slideVision360').click()
	}
}
export default new RenseignementGeneraux()
