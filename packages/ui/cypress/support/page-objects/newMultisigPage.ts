export const newMultisigPage = {
  addressSelector: () => cy.get('[data-cy=input-account-address]'),
  addButton: () => cy.get('[data-cy=button-add-account]'),
  nextButton: () => cy.get('[data-cy=button-next]'),
  thresholdInput: () => cy.get('[data-cy=input-threshold-creation'),
  nameInput: () => cy.get('[data-cy=input-name-creation'),
  creatingLoader: () => cy.get('[data-cy=button-creating-loader')
}
