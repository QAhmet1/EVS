// import LoginPage from '../../pages/LoginPage'
// import { CREDENTIALS } from '../../support/contsants';

// describe('Negative Login Tests', () => {
//   beforeEach(() => {
//     LoginPage.visitLoginPage();
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//   });

//   it('Should show an error for invalid credentials', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername(CREDENTIALS.INVALID_USER.USERNAME);
//     LoginPage.fillPassword(CREDENTIALS.INVALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Invalid username or password');
//   });

//   it('Should show an error for empty username', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername('');
//     LoginPage.fillPassword(CREDENTIALS.VALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Username cannot be empty');
//   });

//   it('Should show an error for empty password', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername(CREDENTIALS.VALID_USER.USERNAME);
//     LoginPage.fillPassword('');
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Password cannot be empty');
//   });

//   it('Should show an error for empty username and password', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername('');
//     LoginPage.fillPassword('');
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Username and password cannot be empty');
//   });

//   it('Should show an error for valid username but incorrect password', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername(CREDENTIALS.VALID_USER.USERNAME);
//     LoginPage.fillPassword(CREDENTIALS.INVALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Invalid username or password');
//   });

//   it('Should show an error for valid password but incorrect username', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername(CREDENTIALS.INVALID_USER.USERNAME);
//     LoginPage.fillPassword(CREDENTIALS.VALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Invalid username or password');
//   });

//   it('Should show an error for invalid email format in username', () => {
//     cy.get('#onetrust-reject-all-handler').click({force:true})
//     LoginPage.fillUsername('not-an-email');
//     LoginPage.fillPassword(CREDENTIALS.VALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Enter a valid email address');
//   });

//   it('Should show an error for username exceeding max length', () => {
//     const longUsername = 'a'.repeat(256); // Assuming 255 characters is the max limit
//     LoginPage.fillUsername(longUsername);
//     LoginPage.fillPassword(CREDENTIALS.VALID_USER.PASSWORD);
//     LoginPage.clickSubmit();
//     LoginPage.verifyErrorMessage('Username exceeds maximum length');
//   });
// });
