/// <reference types="cypress" />

context('Colophon page', () => {
  beforeEach(() => {
    cy.visit('/colophon');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
