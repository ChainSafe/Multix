export const settingsPage = {
  accountAddressInput: () => cy.get('[data-cy=input-account-address]'),
  accountNameInput: () => cy.get('[data-cy=input-account-name]'),
  addButton: () => cy.get('[data-cy=button-add-watched-account]'),
  accountContainer: () => cy.get('[data-cy=container-account-details]', { timeout: 20000 }),
  accountDeleteButton: () => cy.get('[data-cy=button-delete-watched-account]'),
  errorLabel: () => cy.get('[data-cy=label-watch-account-error]')
}
