export const sendTxModal = {
  sendTxTitle: () => cy.get('[data-cy="title-send-tx"]'),
  fieldTo: () => cy.get('[data-cy="field-to"]'),
  fieldAmount: () => cy.get('[data-cy="field-amount"]'),
  buttonSend: () => cy.get('[data-cy="button-send"]')
}
