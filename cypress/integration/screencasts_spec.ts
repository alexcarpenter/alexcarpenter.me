/// <reference types="cypress" />

context('Screencasts page', () => {
  beforeEach(() => {
    cy.visit('/screencasts');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });

  it('should filter screencasts', () => {
    cy.get("[data-cy='filter']").contains('CSS').click();
  });
});
