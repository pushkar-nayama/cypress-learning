describe("My Test Suite", function () {
  //Test Cases
  it("New Child Tab Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //clicking on opentab button, a new tab will be opened. Hence remove target attribute.
    //After removing target attribute, clicking on it, link will be opened in same tab
    cy.get("#opentab").invoke("removeAttr", "target").click();

    //get url and validate
    cy.url().should("include", "rahulshettyacademy");
    //go forward
    cy.go("forward");
    //go backward
    cy.go("back");
  });
});
