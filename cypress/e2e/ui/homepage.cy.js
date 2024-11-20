// cypress/e2e/homepage.cy.js

import Homepage from '../../pages/HopePage'

describe('Homepage Tests', () => {
  beforeEach(() => {
    Homepage.visit(); 
    cy.clickIfVisible('#onetrust-reject-all-handler')
  });

  it('should load the homepage and display the title', () => {
    Homepage.getTitle().should('include', 'EVS');
    cy.url().should('eq', 'https://evs.com/eu');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
    cy.contains('Solutions').should('exist');
    cy.get('nav').should('exist');
  });


});
