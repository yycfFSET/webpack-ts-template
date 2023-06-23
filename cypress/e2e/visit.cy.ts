describe("visit baseUrl spec", () => {
  before(() => {
    cy.fixture("visit").as("visit");
  });
  it("get head title correct", () => {
    cy.get("@visit").then((visit: Record<string, any>) => {
      cy.visit("/");
      cy.get("head title").should("contain", visit.name);
    });
  });
});
