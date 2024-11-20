// cypress/pages/ContactPage.js

class ContactPage {
    visit() {
      cy.visit('https://evs.com/contact');
    }
  
    verifyContactPageLoad() {
      cy.get('#onetrust-reject-all-handler').click();
      cy.get('ol > :nth-child(2) > span').should('have.text', 'How To Contact EVS?');
      cy.get('.header__description > p').should('have.text', 'Check this page in order to know how to contact our support team, ask questions about our solutions and how to request a demo for specific EVS products. This is also the contact hub for our different services and departments.');
      cy.get('.style-image_left > :nth-child(1) > .rich-text > .wrapper > .h2').should('have.text', 'Need support?');
    }
  
    submitForm() {
      cy.get('form').submit();
    }
  
    getConfirmationMessage() {
      return cy.get('.confirmation-message');
    }
  }
  
  export default new ContactPage();
  