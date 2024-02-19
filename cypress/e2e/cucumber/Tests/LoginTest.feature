Feature: I want to login into the recette application with valid data

  Background: Navigate to the recette application
    Given I navigate to the application

  Scenario: Login as a user
    When I entered valid credentials
      | identifiant  |mdp|
      | ANE      |OwlPWD01|
    And User click on sign in button
    Then Validate the title after login
    And  Validate existing elements in the redirected page