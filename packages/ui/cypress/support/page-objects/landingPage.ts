export const landingPage = {
  watchAccountButton: () => cy.get('[data-cy=button-watch-address]'),
  accountsLoader: () => cy.get('[data-cy="loader-accounts-connection"]'),
  noAccountFoundError: () => cy.get('[data-cy="text-no-account-found"]')
}
