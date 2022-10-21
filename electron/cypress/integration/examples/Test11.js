import "cypress-iframe";

describe("My Test Suite", function () {
  //Test Cases
  it("Handling Frames", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //Loading the frame
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href='mentorship']").eq(0).click();
  });
});
