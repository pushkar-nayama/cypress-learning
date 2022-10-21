describe("My Test Suite", function () {
  //runs once before all tests
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  //Test Cases
  it("Hook Test 1", function () {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    cy.get("form input.form-control").eq(0).type(this.data.name);
    cy.get("#exampleFormControlSelect1").select(this.data.gender);

    //Check the value attribute of the element
    cy.get("input[name='name']:nth-child(1)").should(
      "have.value",
      this.data.name
    );
    //validate attribute of the element
    cy.get("form input.form-control").eq(0).should("have.attr", "minlength", 2);

    //validate if checkbox is disabled
    cy.get("#inlineRadio3").should("be.disabled");
  });
});
