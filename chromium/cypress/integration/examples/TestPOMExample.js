import HomePage from "../../support/pages/HomePage";
import ProductsPage from "../../support/pages/ProductsPage";
import CheckoutPage from "../../support/pages/CheckoutPage";

describe("My Test Suite", function () {
  //runs once before all tests
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  //Test Cases
  it("Page Object Model", function () {
    const homePage = new HomePage();
    const productPage = new ProductsPage();
    const checkouPage = new CheckoutPage();
    cy.visit(Cypress.env("url"));
    homePage.getEditBox().eq(0).type(this.data.name);
    homePage.getGender().select(this.data.gender);

    //Check the value attribute of the element
    homePage.getNameBox().should("have.value", this.data.name);

    //validate attribute of the element
    homePage.getEditBox().eq(0).should("have.attr", "minlength", 2);

    //validate if checkbox is disabled
    homePage.getRadioButton().should("be.disabled");

    homePage.getShopLink().click();

    this.data.productName.forEach((element) => {
      cy.addProduct(element);
    });

    productPage.getCheckout().click();

    //Verify total price
    let sum = 0;
    checkouPage.getPriceList().each((ele) => {
      let price = Number(ele.text().split(" ")[1].trim());
      sum += price;
    });

    checkouPage.getTotalPrice().then((element) => {
      const actualTotal = Number(element.text().split(" ")[1].trim());
      expect(actualTotal).to.equal(sum);
    });

    checkouPage.getCheckoutButton().click();

    //This will be applicable to this spec only
    Cypress.config("defaultCommandTimeout", 20000);
    checkouPage.getCountryBox().type("India");

    checkouPage.getDropdownValue().then(() => {
      cy.contains("India").click();
    });
    checkouPage.getCheckbox().check({ force: true });
    checkouPage.getPurchaseButton().click();
    checkouPage
      .getSuccessMessage()
      .should(
        "contain.text",
        "Success! Thank you! Your order will be delivered in next few weeks :-)."
      );
  });
});
