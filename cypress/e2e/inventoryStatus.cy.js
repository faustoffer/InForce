describe('Inventory Status After Checkout', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
    });
  
    it('Should verify the inventory status after checkout', () => {
      cy.addToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      
      // Заповнення чекаут форми
      cy.get('[data-test="firstName"]').type('Wolodymyr');
      cy.get('[data-test="lastName"]').type('SHMG.');
      cy.get('[data-test="postalCode"]').type('01001');
      cy.get('[data-test="continue"]').click();
  
      // Завершення чекауту
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
  
      // Повертаємося на головну сторінку через меню
      cy.get('.bm-burger-button').click(); // Відкриваємо меню
      cy.get('#inventory_sidebar_link').click(); // Повертаємося до інвентарю
  
      // Перевіряємо, що товар доступний до покупки знову
      cy.get('.inventory_item_name').contains('Sauce Labs Backpack')
        .parents('.inventory_item')
        .find('.btn_inventory')
        .should('contain', 'Add to cart');
    });
  });
  