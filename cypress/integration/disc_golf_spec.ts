/// <reference types="cypress" />

import data from '../../data/disc-golf';

const keys = Object.keys(data);
const resources = keys.map((k) => data[k]);

context('Disc golf page', () => {
  beforeEach(() => {
    cy.visit('/disc-golf');
  });

  it('should render header', () => {
    cy.get('h1').should('be.visible');
  });

  it('should render sections', () => {
    resources.map((resource) => {
      cy.contains(resource.title)
    });
  });
});
