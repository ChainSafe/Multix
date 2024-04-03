export const accountDisplay = {
  identicon: () => cy.get('[data-cy=icon-identicon]'),
  pureBadge: () => cy.get('[data-cy=badge-pure]'),
  multisigBadge: () => cy.get('[data-cy=badge-multi]'),
  nameLabel: () => cy.get('[data-cy=label-account-name]'),
  noNameLabel: () => cy.get('[data-cy=label-no-name]'),
  addressLabel: () => cy.get('[data-cy=label-account-address]'),
  watchedIcon: () => cy.get('[data-cy=icon-watched]'),
  nameEditButton: () => cy.get('[data-cy=button-name-edit]'),
  validateEditButton: () => cy.get('[data-cy=button-edition-submit]'),
  cancelEditButton: () => cy.get('[data-cy=button-edition-cancel]'),
  nameEditionInput: () => cy.get('[data-cy=input-name-edition]'),
  identityIcon: () => cy.get('[data-cy=icon-identity]'),
  subIdentityLabel: () => cy.get('[data-cy=label-sub-identity]')
}
