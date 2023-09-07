export const settingsPage = {
  watchAccountAccountInput: () => cy.findByLabelText('Address'),
  addButton: () => cy.findByRole('button', { name: /add/i }),
  multisigIcon: () => cy.get('.identicon'),
  multisigNameLabel: () => cy.get('.multisigName'),
  multisigAddressLabel: () => cy.get('.multisigAddress')
}
