/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
