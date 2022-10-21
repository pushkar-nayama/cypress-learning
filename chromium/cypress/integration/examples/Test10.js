describe("My Test Suite", function () {
  //Test Cases
  it("Mouse Hover", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //cy.get(".mouse-hover-content").invoke("show");
    //if you want to click on hidden element then use { force: true }
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
