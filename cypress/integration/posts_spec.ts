/// <reference types="cypress" />

context('Posts page', () => {
  beforeEach(() => {
    cy.visit('/posts');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });

  // cy.get('a').contains('CSS').click();
});
