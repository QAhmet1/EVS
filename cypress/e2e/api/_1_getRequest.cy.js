describe('API Testing with Cypress - GET Request', () => {
    it('Fetches a list of users', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(10); // Expecting 10 users
        expect(response.body[0]).to.have.property('name'); // Check if 'name' property exists
      });
    });
  });
  