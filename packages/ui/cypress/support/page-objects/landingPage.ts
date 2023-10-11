export const landingPage = {
  watchAccountButton: () => cy.get('[data-cy=button-watch-address]'),
  accountsOrRpcLoader: () => cy.get('[data-cy=loader-accounts-rpc-connection]'),
  noAccountFoundError: () => cy.get('[data-cy=text-no-account-found]')
}
