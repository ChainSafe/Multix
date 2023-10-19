import { injectedAccounts } from '../fixtures/injectedAccounts'
import { knownMultisigs } from '../fixtures/knownMultisigs'
import { landingPageUrl } from '../fixtures/landingData'
import { multisigPage } from '../support/page-objects/multisigPage'
import { notifications } from '../support/page-objects/notifications'
import { sendTxModal } from '../support/page-objects/sendTxModal'
import { clickOnConnect } from '../utils/clickOnConnect'
import { waitForTxRequest } from '../utils/waitForTxRequests'

const AliceAddress = Object.values(injectedAccounts)[0].address

const fillAndSubmitTransactionForm = () => {
  sendTxModal.fieldTo().click().type(`${AliceAddress}{enter}`)
  sendTxModal.fieldAmount().click().type('0.001')
  sendTxModal.buttonSend().should('be.enabled').click()
}

describe('Perform transactions', () => {
  beforeEach(() => {
    cy.visit(landingPageUrl)
    cy.initExtension(injectedAccounts)
    clickOnConnect()
    cy.connectAccounts([AliceAddress])
  })

  it('Abort a tx with Alice', () => {
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm()
    waitForTxRequest()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      cy.wrap(txRequests.length).should('eq', 1)
      cy.wrap(txRequests[0].payload.address).should('eq', AliceAddress)
      sendTxModal.buttonSend().should('be.disabled')
      const errorMessage = 'Whuuuut'
      cy.rejectTx(txRequests[0].id, errorMessage)
      notifications.errorNotificationIcon().should('be.visible')
      notifications.notificationWrapper().should('have.length', 1)
      notifications.notificationWrapper().should('contain', errorMessage)
    })
  })

  it('Makes a balance transfer with Alice', () => {
    cy.rejectCurrentMultisigTx({
      account: injectedAccounts[0],
      multisigInfo: {
        address: knownMultisigs['test-multisig-1'].address,
        threshold: knownMultisigs['test-multisig-1'].threshold,
        otherSignatories: knownMultisigs['test-multisig-1'].signatories.filter(
          (address) => address !== injectedAccounts[0].address
        )
      },
      WSendpoint: 'wss://rococo-rpc.polkadot.io'
    })
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm()
    waitForTxRequest()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      cy.wrap(txRequests.length).should('eq', 1)
      cy.wrap(txRequests[0].payload.address).should('eq', AliceAddress)
      sendTxModal.buttonSend().should('be.disabled')
      cy.approveTx(txRequests[0].id)
      notifications.loadingNotificationIcon().should('be.visible')
      notifications.notificationWrapper().should('have.length', 1)
      notifications.notificationWrapper().should('contain', 'broadcast')
    })
  })
})
