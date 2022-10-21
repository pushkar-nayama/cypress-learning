describe("My Test Suite", function () {
  //Test Cases
  it("UI Controls Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //check and assert
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");

    //uncheck and assert
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");

    //check all 3 checkboxes
    cy.get("input[id*='checkBoxOption']").check();
    //uncheck all 3 checkboxes
    cy.get("input[id*='checkBoxOption']").uncheck();

    //Check specific checkbox among more than one checkbox
    cy.get("input[id*='checkBoxOption']").check(["option2"]); //option2 is value attribute of the second checkbox element
  });
});
