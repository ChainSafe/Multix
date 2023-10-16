export const multisigPage = {
  // header elements
  accountHeader: () => cy.get('[data-cy=header-account]'),
  seeOverviewButton: () => cy.get('[data-cy=button-see-overview]'),
  newTransactionButton: () => cy.get('[data-cy=button-new-transaction]'),
  optionsMenuButton: () => cy.get('[data-cy=button-options-menu]'),
  editNamesMenuOption: () => cy.get('[data-cy=menu-option-edit-names]'),
  subscanMenuOption: () => cy.get('[data-cy=menu-option-subscan]')
}
