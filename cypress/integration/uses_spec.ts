/// <reference types="cypress" />

context('Uses page', () => {
  beforeEach(() => {
    cy.visit('/uses');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
