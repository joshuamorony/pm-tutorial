it('contains hello message', () => {
  cy.visit('/');
  cy.contains('Hello');
});

it('contains goodbye message', () => {
  cy.visit('/');
  cy.contains('Goodbye');
});
