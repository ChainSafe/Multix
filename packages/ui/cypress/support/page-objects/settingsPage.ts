export const settingsPage = {
  watchAccountAccountInput: () => cy.findByLabelText('Address'),
  addButton: () => cy.findByRole('button', { name: /add/i }),
  accountContainer: () => cy.findByTestId("container-account-details"),
  accountIcon: () => cy.findByText("identityIcon"),
  accountgNameLabel: () => cy.findByText("multisigName"),
  accountAddressLabel: () => cy.findByText("multisigAddress"),
  accountRemoveButton: () => cy.findByRole("button", { name: /delete/i })
}
