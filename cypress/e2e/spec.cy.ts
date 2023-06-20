describe("visit baseUrl spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.get("body").should("include.text", "长风几万里");
  });
});
