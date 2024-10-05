# InForce AQA Cypress

This project aims to create end-to-end (E2E) tests for the e-commerce website [SauceDemo](https://www.saucedemo.com) using Cypress. The tests cover various functionalities, including adding items to the cart, checking out, verifying inventory status, and handling errors during checkout. 

Author: Wolodymyr SHMG.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Additional Tests](#additional-tests)
- [Contributing](#contributing)

## Features

- Login functionality.
- Adding items to the cart.
- Proceeding to checkout and filling out information.
- Verifying total prices with tax.
- Error handling for incomplete checkout information.
- Checking inventory status after checkout.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (comes with Node.js).
- An internet connection for accessing the SauceDemo website.

## Installation

To install the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/faustoffer/InForce.git
   cd inForce

2. Install the dependencies:
   ```bash
    npm install

## Running Tests

To run the Cypress tests, use the following command:

    npx cypress open

This will open the Cypress Test Runner, allowing you to run tests interactively.

Alternatively, you can run all tests in headless mode (without GUI) using:
    bash
    npx cypress run

## Test Structure

The tests are organized as follows:

- cart.cy.js: Contains tests related to basic cart functionality, including adding items and proceeding to checkout.
- checkoutError.cy.js: Contains tests for error handling during checkout when required fields are not filled.
- inventoryStatus.cy.js: Contains tests for verifying the inventory status after completing a checkout.
- login.cy.js: Contains tests for load the login page with valid and ivalid credentials.
- logout.cy.js: Contains tests for log out from the website.

## Additional Tests

In addition to the basic tests, the following scenarios have been covered:

- Handling errors during checkout.
- Verifying the inventory status after checkout.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request.
