class RenseignementGeneraux {
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
		cy.xpath('//*[@id="list-ayant-droits-widgets"]/div/div/div[1]/div[1]/div/div/ul/li[17]').click()

	}
	affichageListeCoordonneesAyantDroit() {
		cy.get('tbody').eq(1).find('tr').should('have.length.gte', 1)
		cy.get('.odd > .noVis').should('not.have.value')
	}
}
export default new RenseignementGeneraux()
