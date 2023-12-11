import {
  expectedMultisigAddress,
  extrinsicsDisplayAccounts
} from '../fixtures/extrinsicsDisplayAccounts'
import { landingPageNetwork } from '../fixtures/landingData'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { multisigPage } from '../support/page-objects/multisigPage'
import { sendTxModal } from '../support/page-objects/sendTxModal'

describe('Verify extrinsics display', () => {
  beforeEach(() => {
    cy.setupAndVisit({
      url: landingPageNetwork('hydradx'),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [extrinsicsDisplayAccounts['Alice']]
    })
  })

  it('The omnipool.sell extrinsic is displayed in plank', () => {
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', expectedMultisigAddress.slice(0, 6))
    })

    multisigPage
      .transactionList()
      .should('be.visible')
      .within(() => {
        multisigPage.pendingTransactionItem().should('have.length', 1)
        multisigPage.pendingTransactionItem().within(() => {
          multisigPage.pendingTransactionCallName().should('contain.text', 'omnipool.sell')
          multisigPage.unknownCallIcon().should('not.exist')
          multisigPage.unknownCallAlert().should('not.exist')
          multisigPage.paramExpander().click()
          multisigPage.contentExpander().should('contain', 'amount: 10,000,000,000,000')
          multisigPage.contentExpander().should('contain', 'min_buy_amount: 59,509')
        })
      })
  })

  it('A manual omnipool.sell extrinsic has input in plank', () => {
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', expectedMultisigAddress.slice(0, 6))
    })

    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    sendTxModal.selectEasySetup().click()
    sendTxModal.selectionEasySetupSetupManualExtrinsic().click()
    sendTxModal.manualPalletSelection().click()
    sendTxModal.optionPallet('omnipool').click()

    sendTxModal.manualMethodSelection().click()
    sendTxModal.optionMethod('sell').click()
    sendTxModal.paramField('amount').should('be.visible')
    sendTxModal.paramField('amount').should('not.contain', 'HDX')
  })

  it('A manual balances.transferKeepAlive extrinsic has input in HDX', () => {
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', expectedMultisigAddress.slice(0, 6))
    })

    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    sendTxModal.selectEasySetup().click()
    sendTxModal.selectionEasySetupSetupManualExtrinsic().click()
    sendTxModal.manualPalletSelection().click()
    sendTxModal.optionPallet('balances').click()

    sendTxModal.manualMethodSelection().click()
    sendTxModal.optionMethod('transferKeepAlive').click()
    sendTxModal.paramField('value').should('be.visible')
    sendTxModal.paramField('value').should('contain', 'HDX')
  })
})
