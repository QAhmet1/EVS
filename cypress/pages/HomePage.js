// cypress/pages/Homepage.js
import { SELECTORS, URLS } from '../support/contsants'

class Homepage {
    visit() {
      cy.visit('/');
    }
  
    getTitle() {
      return cy.title();
    }
  
    getMainMenu() {
      return cy.get('nav');
    }
    verifySearchFunc(keyword){
      cy.get('#onetrust-reject-all-handler').click()
      cy.contains('Search').click()
      cy.get('#search-input').type(`${keyword},{enter}`);
      cy.contains('Search results').should('be.visible')
      cy.url().should('include', keyword);
      cy.contains('Solutions').should('exist');

    }

  }
  
  export default new Homepage();
  