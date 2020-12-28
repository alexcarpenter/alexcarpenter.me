/// <reference types="cypress" />

context('Snippets page', () => {
  beforeEach(() => {
    cy.visit('/snippets');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
