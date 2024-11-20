
import HomePage from '../../pages/HomePage';

describe('Login Test with invalid credentials', () => {
  beforeEach(() => {
    // Visit the main page
    HomePage.visit();

    // Handle cookies banner on the initial page
    cy.get('#onetrust-reject-all-handler').click({ force: true });
  });

  it('Should handle login flow across multiple origins', () => {
    // Click the Login button, assuming it redirects to another origin
    cy.contains('Login').click({ force: true });

    // Navigate to the login page (redirects to a new origin)
    cy.get('#edit-openid-connect-client-generic-login').click();

    // Handle the new origin with cy.origin
    cy.origin('https://account.my-evs.com', () => {
      // Handle cookies banner on the new origin
      cy.get('#onetrust-reject-all-handler').click({ force: true });

      // Use selectors for the login process
      cy.get('#username').type('test@test.com');
      cy.get('#password').type('invalid123');

      // Submit the login form
      cy.get('#kc-login').click();

      // Assert invalid credentials message is displayed
      cy.get('div[class="error"]').first().should('be.visible');
      cy.get('div[class="error"]').last().should('be.visible');
    });
  });
});
