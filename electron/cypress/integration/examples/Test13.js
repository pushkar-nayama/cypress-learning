describe("My Test Suite", function () {
  //runs once before all tests
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  //Test Cases
  it("Custom Command", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");

    cy.contains("Shop").click().debug();
    cy.pause();
    this.data.productName.forEach((element) => {
      cy.addProduct(element);
    });
  });
});
