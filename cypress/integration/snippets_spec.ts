/// <reference types="cypress" />

context("Snippets page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/snippets");
  });

  it("should render header", () => {
    cy.get("h1").should('be.visible');
  });
});
