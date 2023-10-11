export const accountDisplay = {
  identicon: () => cy.get('[data-cy=icon-identicon]'),
  pureBadge: () => cy.get('[data-cy=badge-pure]'),
  multisigBadge: () => cy.get('[data-cy=badge-multisig]'),
  nameLabel: () => cy.get('[data-cy=label-account-name]'),
  addressLabel: () => cy.get('[data-cy=label-account-address]')
}
