class Checkout {
  getCheckoutButton() {
    return cy.get("button.btn.btn-success");
  }

  getCountryBox() {
    return cy.get("#country");
  }

  getDropdownValue() {
    return cy.get("li a");
  }

  getCheckbox() {
    return cy.get("#checkbox2");
  }

  getPurchaseButton() {
    return cy.get("input[value='Purchase']");
  }

  getSuccessMessage() {
    return cy.get(".alert.alert-success");
  }

  getPriceList() {
    return cy.get("td[class*='col-sm']:nth-child(4) strong");
  }

  getTotalPrice() {
    return cy.get("h3 strong");
  }
}

export default Checkout;
