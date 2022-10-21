describe("My First Test Suite", function () {
  //Test Cases
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get("input.search-keyword").type("ca");
    cy.wait(2000).then(() => {
      console.log("Wassup");
    });
    //cy.get("div.product:visible").should("have.length", 4);

    //Parent child
    cy.get(".products").as("products");

    cy.get("@products").find(".product").should("have.length", 4);
    cy.get("@products")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click()
      .then(() => {});

    //grab the text of the element
    cy.get("@products")
      .find(".product")
      .each((ele, index, list) => {
        const name = ele.find(".product-name").text();
        if (name.includes("Cashews")) {
          cy.wrap(ele).find("button").click();
        }
      });

    cy.get(".brand").then((ele) => {
      cy.log(ele.text());
    });
    //cy.log(cy.get(".brand").text);
  });
});
