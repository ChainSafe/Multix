export const landingPage = {
  multixIntroHeader: () => cy.get('[data-cy=header-multix-introduction]', { timeout: 10000 }),
  interactionPromptLabel: () => cy.get('[data-cy=label-interaction-prompt]'),
  noMultisigFoundError: () => cy.get('[data-cy=label-no-multisig-found]', { timeout: 10000 }),
  createOneButton: () => cy.get('[data-cy=button-create-one]'),
  connectWalletButton: () => cy.get('[data-cy=button-connect-wallet]'),
  watchAccountButton: () => cy.get('[data-cy=button-watch-account]'),
  accountsLoader: () => cy.get('[data-cy=loader-accounts-connection]'),
  multisigLoader: () => cy.get('[data-cy=loader-multisig]'),
  initializationLoader: () => cy.get('[data-cy=loader-initialization]'),
  rpcLoader: () => cy.get('[data-cy=loader-rpc-connection]'),
  polkadotWikiLink: () => cy.get('[data-cy=link-polkadot-wiki]'),
  noAccountFoundError: () => cy.get('[data-cy=label-no-account-found]', { timeout: 10000 }),
  linkedAddressNotFound: () => cy.get('[data-cy=label-linked-address-not-found]'),
  resetLinkedAddressButton: () => cy.get('[data-cy=button-reset-linked-address]'),
  firstMultisigCreationLabel: () =>
    cy.get('[data-cy=label-first-multisig-creation', { timeout: 30000 }),
  infoMultisigCreated: () => cy.get('[data-cy=container-multisig-creation-info]'),

  // page specific assertion
  shouldHaveNoAccountErrorAndWikiLink() {
    this.noAccountFoundError().should(
      'contain.text',
      'No account found. Please connect at least one in a wallet extension. More info at'
    )
    this.polkadotWikiLink().should('be.visible')
  }
}
