export const settingsPage = {
  watchAccountAccountInput: () => cy.findByLabelText('Address'),
  addButton: () => cy.findByRole('button', { name: /add/i }),
  multisigContainer: () => cy.findByRole('list'),
  multisigIcon: () => cy.get('.identicon'),
  multisigNameLabel: () => cy.findByText('.multisigName'),
  multisigAddressLabel: () => cy.findByText('.multisigAddress'),
  multisigRemoveButton: () => cy.findByRole('button', { name: /close/i })
}
