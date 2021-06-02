/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render intro', () => {
    cy.contains("hey, i'm alex.", { matchCase: false })
  });
});
