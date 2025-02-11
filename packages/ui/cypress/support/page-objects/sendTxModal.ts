export const sendTxModal = {
  sendTxTitle: () => cy.get('[data-cy=title-send-tx]'),
  sendTxContent: () => cy.get('[data-cy=modal-send-tx]'),
  sendTokensFieldTo: () => cy.get(`[data-cy=send-tokens-field-to]`),
  sendTokensFieldAmount: () => cy.get('[data-cy=send-tokens-field-amount]'),
  sendTokensFieldAssetSelection: () => cy.get(`[data-cy=select-ah-assets]`),
  buttonSend: () => cy.get('[data-cy=button-send]'),
  buttonSending: () => cy.get('[data-cy=button-sending]'),
  setIdentitySection: () => cy.get('[data-cy=section-set-identity]'),
  setIdentityField: (field: string) => cy.get(`[data-cy=set-identity-field-${field}]`),
  setIdentityFieldInput: (field: string) => cy.get(`[data-cy=input-set-identity-field-${field}]`),
  setIdentityFieldElement: (field: string, element = 'label') =>
    cy.get(`[data-cy=set-identity-field-${field}] > ${element}`),
  sendTxError: () => cy.get('[data-cy=error-send-tx]'),
  selectEasySetup: () => cy.get('[data-cy=select-easy-setup]'),
  selectionEasySetupSetIdentity: () => cy.get('[data-cy=select-option-easy-setup-set-identity]'),
  selectionEasySetupSetupManualExtrinsic: () =>
    cy.get('[data-cy=select-option-easy-setup-manual-extrinsic]'),
  selectionEasySetupSetupFromCallData: () =>
    cy.get('[data-cy=select-option-easy-setup-from-call-data]'),
  manualPalletSelection: () => cy.get('[data-cy=select-manual-pallet]'),
  manualMethodSelection: () => cy.get('[data-cy=select-manual-method]'),
  optionPallet: (pallet: string) => cy.get(`[data-cy=option-pallet-${pallet}]`),
  optionMethod: (method: string) => cy.get(`[data-cy=option-method-${method}]`),
  paramField: (param: string) => cy.get(`[data-cy=param-field-${param}]`),
  paramInput: (param: string) => cy.get(`[data-cy=param-input-${param}]`),
  callDataInput: () => cy.get('[data-cy=input-from-call-data]'),
  selectAsset: (symbol: string) => cy.get(`[data-cy=select-option-ah-assets-${symbol}]`),
  buttonAddRecipient: () => cy.get('[data-cy=add-recipient-button]'),
  wrapperAssetTransfer: (index = 0) => cy.get(`[data-cy=transfer-asset-${index}]`),
  deleteFieldButton: () => cy.get('[data-cy=delete-field-button]'),
  inputSendtokenAmount: () => cy.get('[data-cy=input-send-tokens-amount]')
}
