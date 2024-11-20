describe('API Testing with Cypress - DELETE Request', () => {
    it('Deletes a user', () => {
      cy.request('DELETE', 'https://jsonplaceholder.typicode.com/users/1').then((response) => {
        expect(response.status).to.eq(200); // Deletion successful
      });
    });
  });
  