export const settingsPage = {
  // watch account section
  watchedAccountsAccordion: () => cy.get('[data-cy=accordion-title-watched-accounts]'),
  accountAddressInput: () => cy.get('[data-cy=input-account-address]'),
  accountNameInput: () => cy.get('[data-cy=input-account-name]'),
  addButton: () => cy.get('[data-cy=button-add-watched-account]'),
  accountContainer: () => cy.get('[data-cy=container-account-details]', { timeout: 20000 }),
  accountDeleteButton: () => cy.get('[data-cy=button-delete-watched-account]'),
  errorLabel: () => cy.get('[data-cy=label-watch-account-error]'),
  // wallet connect section
  wallectConnectAccordion: () => cy.get('[data-cy=accordion-title-wallet-connect]'),
  walletConnectAlert: () => cy.get('[data-cy=alert-wallet-connect-warning]'),
  connectDappButton: () => cy.get('[data-cy=button-connect-dapp]'),
  walletConnectKeyInput: () => cy.get('[data-cy=input-wallet-connect-key]'),
  tooltipInfoIcon: () => cy.get('[data-cy=tooltip-wallet-connect-info]')
}
