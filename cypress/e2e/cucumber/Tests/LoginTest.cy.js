/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../Pages/LoginPage.cy";
Given("I navigate to the application", () => {
login.enterURL();
});
When("I entered valid credentials", (datatable) => {
datatable.hashes().forEach((element) => {
login.enterUserNamePassword(element.identifiant, element.mdp);
login.clickSubmitButton()
});
});
And("User click on sign in button", () => {
login.clickSubmitButton();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});
And("Validate existing elements in the redirected page", () => {
login.verifyLoggedUserAndMenuSidebar();
});
