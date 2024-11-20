describe('API Testing with Cypress - PUT Request', () => {
    it('Updates a user', () => {
      cy.request('PUT', 'https://jsonplaceholder.typicode.com/users/1', {
        name: 'QA Tester',
        username: 'tester1',
        email: 'new@example.com'
      }).then((response) => {
        expect(response.status).to.eq(200); // Success
        expect(response.body).to.have.property('name', 'QA Tester');
      });
    });
  });
  