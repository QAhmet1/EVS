import { URLS,SELECTORS } from "../support/contsants";

class LoginPage {
  visitLoginPage() {
    cy.visit(URLS.LOGIN_PAGE);
    cy.get('#onetrust-reject-all-handler').click({force:true})
    cy.get('#edit-openid-connect-client-generic-login').click()
  }
  fillUsername(username) {
    cy.get(SELECTORS.USERNAME_FIELD).click().clear().type(username);
  }

  fillPassword(password) {
    cy.get(SELECTORS.PASSWORD_FIELD).click().clear().type(password);
  }

  clickSubmit() {
    cy.get(SELECTORS.SUBMIT_BUTTON).click();
  }

  verifyErrorMessageForInvalidUsername() {
    cy.get('div[class=error]').first().should('be.visible');
  }
  verifyErrorMessageForInvalidPassword() {
    cy.get('div[class=error]').last().should('be.visible');
  }
  verifyErrorMessageForInvalidCredentials() {
    cy.get('div[class=error]').first().should('be.visible');
    cy.get('div[class=error]').last().should('be.visible');
  }
}

export default new LoginPage();