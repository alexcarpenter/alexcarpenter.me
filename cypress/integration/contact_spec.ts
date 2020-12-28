/// <reference types="cypress" />

context('Contact page', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });
});
