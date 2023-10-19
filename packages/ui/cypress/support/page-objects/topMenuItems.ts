export const topMenuItems = {
  homeButton: () => cy.get('[data-cy=button-navigate-home]'),
  newMultisigButton: () => cy.get('[data-cy=button-navigate-new-multisig]'),
  settingsButton: () => cy.get('[data-cy=button-navigate-settings]'),
  overviewButton: () => cy.get('[data-cy=button-navigate-overview]'),
  aboutButton: () => cy.get('[data-cy=button-navigate-about]'),
  connectButton: () => cy.get('[data-cy=button-menu-connect]'),
  multiproxySelector: () => cy.get('[data-cy=select-multiproxy]', { timeout: 20000 }),
  multiproxySelectorOption: () => cy.get('[data-cy=select-multiproxy-option]')
}
