// cypress/e2e/navigation.cy.js

import Navigation from '../../pages/Navigation';

describe('Navigation Tests', () => {

  beforeEach(() => {
    Navigation.visit();
    cy.viewport('macbook-16')
    cy.clickIfVisible('#onetrust-reject-all-handler')
  });

  it('should navigate to the Products page', () => {
    Navigation.navigateToProducts();
    cy.url().should('include', '/products');
    cy.get('h1').should('contain', 'Products');
  });

  it('should navigate to the Solutions page', () => {
    Navigation.navigateToSolutions();
    cy.url().should('include', '/solutions');
    cy.get('h1').should('contain', 'Solutions');
  });

  it('Should navigate to all menu links', () => {
    const menuLinks = ['Products & Solutions', 'Market Applications', 'Services', 'Resources','Company','Partners'];
    
    menuLinks.forEach(link => {
      cy.contains(link).click({force:true});
      cy.url().should('include', link.toLowerCase().replace(/\s+/g, '-'));
      cy.go('back');
    });
  });

});
