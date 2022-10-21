describe("My Test Suite", function () {
  //Test Cases
  it("Visible and Invisible Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    //click alert windows
    cy.get("#alertbtn").click();

    //verify the text present on window alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //click confirm alert window
    cy.get("#confirmbtn").click();

    //verify confirm window text. If you can to click on OK then return true else false
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
