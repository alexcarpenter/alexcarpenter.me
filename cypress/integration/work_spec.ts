/// <reference types="cypress" />

context("Work page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001/work");
  });

  it("should render header", () => {
    cy.get("h1").should('be.visible');
  });
});
