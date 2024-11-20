describe('API Testing with Cypress - POST Request', () => {
    it('Creates a new user', () => {
      cy.request('POST', 'https://jsonplaceholder.typicode.com/users', {
        name: 'Ahmet Demir',
        username: 'ahmet.1',
        email: 'ahmet@example.com'
      }).then((response) => {
        expect(response.status).to.eq(201); // Created status
        expect(response.body).to.have.property('name', 'Ahmet Demir');
      });
    });
  });
  