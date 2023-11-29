export const multisigPage = {
  // header elements
  accountHeader: () => cy.get('[data-cy=header-account]'),
  seeOverviewButton: () => cy.get('[data-cy=button-see-overview]'),
  newTransactionButton: () => cy.get('[data-cy=button-new-transaction]'),
  optionsMenuButton: () => cy.get('[data-cy=button-options-menu]'),
  editNamesMenuOption: () => cy.get('[data-cy=menu-option-edit-names]'),
  subscanMenuOption: () => cy.get('[data-cy=menu-option-subscan]'),
  transactionList: () => cy.get('[data-cy=container-transaction-list]', { timeout: 20000 }),
  pendingTransactionItem: () => cy.get('[data-cy=container-pending-tx-item]'),
  reviewButton: () => cy.get('[data-cy=button-review-tx]'),
  setIdentityMenuOption: () => cy.get('[data-cy=menu-option-set-identity]'),

  // multisig details elements
  multisigDetailsContainer: () => cy.get('[data-cy=container-multisig-details]'),
  multisigAccountSummary: () => cy.get('[data-cy=container-multisig-account-summary]'),
  thresholdListItem: () => cy.get('[data-cy=list-item-threshold]'),
  balanceListItem: () => cy.get('[data-cy=list-item-balance]'),
  signatoriesAccordion: () => cy.get('[data-cy=accordion-signatories]'),
  expandSignatoriesIcon: () => cy.get('[data-cy=icon-expand-signatories-summary]'),
}
