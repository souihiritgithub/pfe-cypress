/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import login from '../Pages/LoginPage.cy'
import loginRct02 from '../../../support/commands'
import logout from '../../../support/commands'

beforeEach(() => {
	cy.loginRct02()
})

Then('Validate the title after login', () => {
	login.verifyPageTitle()
})

And('Validate existing elements in the redirected page', () => {
	login.verifyLoggedUserAndMenuSidebar()
})
afterEach(() => {
	cy.logout()
    cy.clearAllLocalStorage()
})
