export const settingsPage = {
  watchAccountAccountInput: () => cy.findByLabelText('Address'),
  addButton: () => cy.get("[data-cy=button-add-watched-account]"),
  accountContainer: () => cy.get("[data-cy=container-account-details]"),
  accountIcon: () => cy.get("[data-cy=icon-identity]"),
  accountgNameLabel: () => cy.get("[data-cy=label-account-name]"),
  accountAddressLabel: () => cy.get("[data-cy=label-account-address]"),
  accountDeleteButton: () => cy.get("[data-cy=button-delete-watched-account]"),
}
