export const sendTxModal = {
  sendTxTitle: () => cy.get('[data-cy=title-send-tx]'),
  sendTokensFieldTo: () => cy.get('[data-cy=send-tokens-field-to]'),
  sendTokensFieldAmount: () => cy.get('[data-cy=send-tokens-field-amount]'),
  buttonSend: () => cy.get('[data-cy=button-send]'),
  setIdentitySection: () => cy.get('[data-cy=section-set-identity]'),
  setIdentityField: (field: string) => cy.get(`[data-cy=set-identity-field-${field}]`),
  setIdentityFieldInput: (field: string) => cy.get(`[data-cy=input-set-identity-field-${field}]`),
  setIdentityFieldElement: (field: string, element = 'label') =>
    cy.get(`[data-cy=set-identity-field-${field}] > ${element}`),
  sendTxError: () => cy.get('[data-cy=error-send-tx]'),
  selectEasySetup: () => cy.get('[data-cy=select-easy-setup]'),
  selectionEasySetupSetIdentity: () => cy.get('[data-cy=select-option-easy-setup-set-identity]')
}
