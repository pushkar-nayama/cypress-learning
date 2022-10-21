describe("First API Test Suite", () => {
  it("Get API Test Case", () => {
    cy.request({
      url: "https://reqres.in/api/users?page=2",
      method: "GET",
    }).then((response) => {
      expect(response.status).to.equal(200);
      cy.log(response.status);
      cy.log(response.body.data[0].id);
    });
  });

  it("POST API Test", () => {
    cy.request({
      url: "https://reqres.in/api/users",
      method: "POST",
      body: {
        name: "morpheus",
        job: "leader",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});
