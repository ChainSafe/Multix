export const topMenuItems = {
  desktopMenu: () => cy.get('[data-cy=menu-desktop]'),
  homeButton: () => cy.get('[data-cy=button-navigate-home]'),
  newMultisigButton: () => cy.get('[data-cy=button-navigate-new-multisig]'),
  settingsButton: () => cy.get('[data-cy=button-navigate-settings]'),
  overviewButton: () => cy.get('[data-cy=button-navigate-overview]'),
  aboutButton: () => cy.get('[data-cy=button-navigate-about]'),
  connectButton: () => cy.get('[data-cy=button-menu-connect]'),
  multiproxySelector: () => cy.get('[data-cy=select-multiproxy]', { timeout: 20000 }),
  multiproxySelectorInput: () => cy.get('[data-cy=input-select-multiproxy]'),
  multiproxySelectorOption: () => cy.get('[data-cy=select-multiproxy-option]'),
  networkSelector: () => cy.get('[data-cy=select-networks]'),
  networkSelectorOption: (networkName: string) =>
    cy.get(`[data-cy=select-network-option-${networkName}]`)
}
