export const landingPage = {
  watchAccountButton: () => cy.get('[data-cy=button-watch-account]'),
  accountsLoader: () => cy.get('[data-cy=loader-accounts-connection]'),
  noAccountFoundError: () => cy.get('[data-cy=text-no-account-found]')
}
