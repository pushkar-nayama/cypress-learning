describe("My Test Suite", function () {
  //Test Cases
  it("Visible and Invisible Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //verifu if textbox is visible or not
    cy.get("#displayed-text").should("be.visible");

    //Click Hide button to hide the textbox and verify
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");

    //Click Show button to display the textbox and verify its presence
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });
});
