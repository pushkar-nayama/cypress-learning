class HomePage {
  getEditBox() {
    return cy.get("form input.form-control");
  }

  getDataBindingBox() {
    return cy.get("input[name='name']:nth-child(1)");
  }

  getGender() {
    return cy.get("#exampleFormControlSelect1");
  }

  getNameBox() {
    return cy.get("input[name='name']:nth-child(1)");
  }

  getRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopLink() {
    return cy.contains("Shop");
  }
}

export default HomePage;
