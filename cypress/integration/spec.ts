it('contains hello message', () => {
  cy.visit('/');
  cy.contains('Hello');
});
