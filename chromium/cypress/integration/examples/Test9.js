describe("My Test Suite", function () {
  //Test Cases
  it("Handle Web Tables", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("table[name='courses'] tr td:nth-child(2)").each(
      (ele, index, list) => {
        if (
          ele.text() == "Master Selenium Automation in simple Python Language"
        ) {
          //go to next sibling of the element
          cy.get("table[name='courses'] tr td:nth-child(2)")
            .eq(index)
            .next()
            .then((price) => {
              let actualPrice = price.text();
              expect(actualPrice).to.equal("25");
            });
        }
      }
    );
  });
});
