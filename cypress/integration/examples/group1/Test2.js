describe("My First Test Suite", function () {
  //Test Cases
  it("My First Test Case", function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

    cy.get("input.search-keyword").type("ca");
    cy.wait(2000);

    //Parent child
    cy.get(".products").as("products");

    cy.get("@products").find(".product").eq(2).contains("ADD TO CART").click();

    //grab the text of the element
    cy.get("@products")
      .find(".product")
      .each((ele) => {
        const name = ele.find(".product-name").text();
        if (name.includes("Cashews")) {
          cy.wrap(ele).find("button").click();
        }
      });

    cy.get(".cart-icon").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.contains("Place Order").click();
  });
});
