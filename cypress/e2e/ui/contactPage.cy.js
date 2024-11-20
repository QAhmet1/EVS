// cypress/e2e/contactForm.cy.js

import ContactPage from '../../pages/ContactPage';

describe('Contact Form Tests', () => {
  beforeEach(() => {
    ContactPage.visit();
    cy.clickIfVisible('#onetrust-reject-all-handler')
  });

  it('should the contact page load successfully', () => {
    ContactPage.verifyContactPageLoad()
    
  });
});
