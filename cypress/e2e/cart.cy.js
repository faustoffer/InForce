describe('Cart functionality', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Should add items to the cart using custom command', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.addToCart('Sauce Labs Bolt T-Shirt');
      cy.get('.shopping_cart_badge').should('contain', '2');
    });
  
    it('Should proceed to checkout and verify items in the cart', () => {
      cy.addToCart('Sauce Labs Backpack'); 
      cy.addToCart('Sauce Labs Bolt T-Shirt');
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 2);
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
    });
  
    it('Should fill out Checkout: Your Information form', () => {
      cy.addToCart('Sauce Labs Backpack'); 
      cy.addToCart('Sauce Labs Bolt T-Shirt');
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.url().should('include', '/checkout-step-one.html');
      cy.get('[data-test="firstName"]').type('Wolodymyr');
      cy.get('[data-test="lastName"]').type('SHMG.');
      cy.get('[data-test="postalCode"]').type('01001');
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
    });
  
    it('Should verify total price with tax', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.addToCart('Sauce Labs Bolt T-Shirt');
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('Wolodymyr');
      cy.get('[data-test="lastName"]').type('SHMG.');
      cy.get('[data-test="postalCode"]').type('01001');
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
      cy.get('.summary_subtotal_label').should('contain', 'Item total: $45.98');
      cy.get('.summary_tax_label').should('contain', 'Tax: $3.68');
      cy.get('.summary_total_label').should('contain', 'Total: $49.66');
    });
  
    it('Should complete the checkout process', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.addToCart('Sauce Labs Bolt T-Shirt');
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('Wolodymyr');
      cy.get('[data-test="lastName"]').type('SHMG.');
      cy.get('[data-test="postalCode"]').type('01001');
      cy.get('[data-test="continue"]').click();
      cy.url().should('include', '/checkout-step-two.html');
      cy.get('.summary_subtotal_label').should('contain', 'Item total: $45.98');
      cy.get('.summary_tax_label').should('contain', 'Tax: $3.68');
      cy.get('.summary_total_label').should('contain', 'Total: $49.66');
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
    });
  });
  