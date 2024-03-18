const shoppingCart = require('./ShoppingCart');

// Step 1
describe('Shopping Cart Test 1', () => {
  it('adding products', () => {
    // Adds 5 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 5);

    // Total Price of the Cart
    expect(shoppingCart.getTotalPrice()).to.equal('199.95');
  });
});


// Step 2
describe('Shopping Cart Test 2', () => {
  it('adding additional products', () => {
    // Adds 3 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 3);

    // Total Price of the Cart
    expect(shoppingCart.getTotalPrice()).to.equal('319.92');
  });
});


// Step 3
describe('Shopping Cart Test 3', () => {
  it('calculating the tax rate of the cart with multiple items', () => {
    // Clears the shopping cart by removing all items
    shoppingCart.clearCart();
    // Sets the tax rate to 12.5%
    const taxRate = 12.5;

    // Adds 2 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 2);
    // Adds 2 Axe Deo products to the shopping cart
    shoppingCart.addToCart({ name: 'Axe Deo', price: 99.99 }, 2);

    // Calculates Total Price in the Cart
    expect(shoppingCart.getTotalPrice()).to.equal('279.96');
    // Calculates Sales Tax
    expect(shoppingCart.calculateSalesTax(taxRate)).to.equal('34.99');
    // Total Price with Sales Tax
    expect(shoppingCart.getTotalPriceWithTax(taxRate)).to.equal('314.95');
  });
});


// Step 4
describe('Shopping Cart Test 4', () => {
  it('Add products to the shopping cart, which have "Buy X, Get Y free" offer.', () => {
    // Clears the shopping cart by removing all items
    shoppingCart.clearCart();
    // Sets the tax rate to 12.5%
    const taxRate = 12.5;

    // Adds 3 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 3);
    // Adds 2 Axe Deo products to the shopping cart
    shoppingCart.addToCart({ name: 'Axe Deo', price: 89.99 }, 2);

    // Calculates Total Price in the Cart
    expect(shoppingCart.getTotalPrice()).to.equal('299.95');
    // Calculates Discount (Buy 2 Get 1 Free)
    expect(shoppingCart.calculateDiscount()).to.equal('39.99');
    // Calculates Sales Tax
    expect(shoppingCart.calculateSalesTax(taxRate)).to.equal('37.49');
    // Total Price with Sales Tax
    expect(shoppingCart.getTotalPriceWithTax(taxRate)).to.equal('297.45');
  });
});


// Step 5
describe('Shopping Cart Test 5', () => {
  it('Add products to the Shopping Cart, which have “Buy 1, Get 50% discount on next one” offer.', () => {
    // Clears the shopping cart by removing all items
    shoppingCart.clearCart();
    // Sets the tax rate to 12.5%
    const taxRate = 12.5;

    // Adds 2 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 2);

    // Calculates Total Price in the Cart
    expect(shoppingCart.getTotalPrice()).to.equal('79.98');
    // Calculates the Buy 1, Get 50% discount on next one
    expect(shoppingCart.calculateOffer()).to.equal('20.00');
    // Calculates sales tax after discount is calculated
    expect(shoppingCart.calculateSalesTaxAfterDiscount(taxRate)).to.equal('7.50'); 
    // Total Price With Discount Offer
    expect(shoppingCart.getTotalPriceWithDiscount(taxRate)).to.equal('67.48');
  });
});


// Step 6
describe('Shopping Cart Test 6', () => {
  it('Apply 20% discount on ALL items in the Shopping Cart if the total cost of your purchase is greater than or equal to 500.', () => {
    // Clears the shopping cart by removing all items
    shoppingCart.clearCart();
    // Sets the tax rate to 12.5%
    const taxRate = 12.5;

    // Adds 5 Dove Soap products to the shopping cart
    shoppingCart.addToCart({ name: 'Dove Soap', price: 39.99 }, 5);
    // Adds 4 Axe Deo products to the shopping cart
    shoppingCart.addToCart({ name: 'Axe Deo', price: 89.99 }, 4);

    // The total price of the items in the cart 
    expect(shoppingCart.getTotalPrice()).to.equal('559.91');
    // The calculated sales tax at the given tax rate
    expect(shoppingCart.calculateSalesTax2(taxRate)).to.equal('55.99');
    // The total price after applying the discount 
    expect(shoppingCart.totalPriceAfterDiscount(taxRate)).to.equal('503.92');
  });
});