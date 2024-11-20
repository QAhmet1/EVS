// cypress/pages/Navigation.js

class Navigation {
    visit() {
      cy.visit('/');
    }
  
    navigateToProducts() {
      cy.contains('Products & Solutions').click({force: true})
      cy.xpath('(//a[@href="/products"])[2]').click({force:true});
    }
  
    navigateToSolutions() {
      cy.get('#onetrust-reject-all-handler').click()
      cy.contains('Products & Solutions').click({force:true})
      cy.xpath('(//a[@href="/solutions"])[1]').click();
    }
  }
  
  export default new Navigation();
  