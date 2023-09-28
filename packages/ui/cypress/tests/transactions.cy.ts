import { injectedAccounts } from '../fixtures/injectedAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { multisigPage } from '../support/page-objects/multisigPage'
import { notifications } from '../support/page-objects/notifications'
import { sendTxModal } from '../support/page-objects/sendTxModal'
import { topMenuItems } from '../support/page-objects/topMenuItems'

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
    topMenuItems.connectButton().click()
    landingPage.accountsOrRpcLoader().should('contain', 'Loading accounts')
    cy.getAuthRequests().then((authRequests) => {
      const requests = Object.values(authRequests)
      // we should have 1 connection request to the extension
      cy.wrap(requests.length).should('eq', 1)
      // this request should be from the application Multix
      cy.wrap(requests[0].origin).should('eq', 'Multix')
      // let's allow it for Alice
      cy.enableAuth(requests[0].id, [AliceAddress])
      // the ui should then move on to connecting to the rpcs
      topMenuItems.multiproxySelector().should('be.visible')
    })
  })

  it('Abort a tx with Alice', () => {
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      console.log('txRequests', JSON.stringify(txRequests))
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

  it.skip('Makes a balance transfer with Alice', () => {
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm()
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
