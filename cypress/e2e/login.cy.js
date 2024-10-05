describe('Login Page', () => {
    it('Should load the login page successfully', () => {
      cy.visit('https://www.saucedemo.com');
      cy.get('.login-box').should('be.visible');
    });

    it('Should login with valid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
      });
      
      it('Should show an error for invalid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('invalid_user');
        cy.get('#password').type('wrong_password');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain', 'Epic sadface');
      });
    });    