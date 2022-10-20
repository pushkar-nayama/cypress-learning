describe("My Test Suite", function () {
  //Test Cases
  it("Dynamic Dropdown test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#autocomplete").type("ind");
    //grab the India option from the dynamic list
    cy.get(".ui-menu-item div").each((ele) => {
      if (ele.text() === "India") {
        cy.wrap(ele).click();
      }
    });
  });
});
