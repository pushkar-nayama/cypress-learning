class ProductsPage {
  getCardNames() {
    return cy.get(".card-title a");
  }

  getBuyNow() {
    return cy.get(".card-footer button");
  }

  getCheckout() {
    return cy.contains(" Checkout (");
  }
}

export default ProductsPage;
