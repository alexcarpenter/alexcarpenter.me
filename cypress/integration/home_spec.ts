/// <reference types="cypress" />

context("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });

  it("should render header", () => {
    cy.get("h1").should('be.visible');
  });
});
