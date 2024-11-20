describe('API Testing with Cypress - PATCH Request', () => {
    it('Partially updates a user', () => {
      cy.request('PATCH', 'https://jsonplaceholder.typicode.com/users/1', {
        email: 'newemail@example.com'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('email', 'newemail@example.com');
      });
    });
  });
  