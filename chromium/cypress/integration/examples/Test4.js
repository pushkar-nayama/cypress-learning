describe("My Test Suite", function () {
  //Test Cases
  it("Static Dropdown test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //you can pass either value attribute or visible text
    cy.get("#dropdown-class-example")
      .select("Option2")
      .should("have.value", "option2");
  });
});
