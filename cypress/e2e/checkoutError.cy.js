describe('Checkout Error Handling', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Should show error if checkout information is incomplete', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      
      // Введення часткових даних
      cy.get('[data-test="firstName"]').type('Wolodymyr');
      cy.get('[data-test="lastName"]').type('SHMG.');
  
      // Не вводимо postalCode та натискаємо Continue
      cy.get('[data-test="continue"]').click();
  
      // Перевірка наявності помилки
      cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required');
    });
  });
  