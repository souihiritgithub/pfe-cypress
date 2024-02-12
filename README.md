# RECETTE_CYPRESS



## Getting started

Welcome to RECETTE_CYPRESS ! This project utilizes Cypress, a powerful end-to-end testing framework, to ensure the reliability and functionality of our application. To get started, follow the steps below:


## Prerequisites

Before you begin, make sure you have [node js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed on your machine.

## Installation

Clone this repository to your local machine:

 git clone https://gitlab.owliance.net/amannai/cypress_recette.git

 Navigate to the project directory:

 cd your-repo

Install the project dependencies:

npm install


## Running Tests

This will open the Cypress Test Runner, allowing you to interact with your tests in a browser or in terminal mode.


### Debug Mode

To run Cypress tests in debug mode, use the following command:

npm run cy:open OR npx cypress open

### Headless Mode

To run Cypress tests in headless mode, use the following command:

npm run cy:headless 

This mode facilitates the creation of a 'results' folder in your workspace. It generates an HTML page report corresponding to your test suite. Additionally, it generates a 'screenshots' folder, capturing screenshots for each failed test case and organizing them accordingly.


## Name

PORTAIL CYPRESS

## Description
The project provides a comprehensive set of end-to-end tests that can be executed both interactively and in headless mode for seamless integration into your CI/CD pipelines.

### Key Features

- **End-to-End Testing**: Comprehensive test suite covering key features and functionalities.
- **Debug Mode**: Interactive testing using the Cypress Test Runner for debugging and troubleshooting.
- **Headless Mode**: Automated testing suitable for integration into continuous integration and deployment pipelines.
- **Detailed Reporting**: Generates HTML page reports in the 'results' folder for clear and detailed insights.
- **Screenshot Capture**: Automatically captures screenshots for failed test cases, organizing them in the 'screenshots' folder.


## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.
