export const multisigPage = {
  accountHeader: (timeout = 4000) => cy.get('[data-cy=header-account]', { timeout }),
  seeOverviewButton: () => cy.get('[data-cy=button-see-overview]'),
  newTransactionButton: () => cy.get('[data-cy=button-new-transaction]'),
  optionsMenuButton: () => cy.get('[data-cy=button-options-menu]'),
  editNamesMenuOption: () => cy.get('[data-cy=menu-option-edit-names]'),
  subscanMenuOption: () => cy.get('[data-cy=menu-option-subscan]'),
  transactionList: () => cy.get('[data-cy=container-transaction-list]', { timeout: 20000 }),
  pendingTransactionItem: () => cy.get('[data-cy=container-pending-tx-item]'),
  reviewButton: () => cy.get('[data-cy=button-review-tx]'),
  setIdentityMenuOption: () => cy.get('[data-cy=menu-option-set-identity]')
}
