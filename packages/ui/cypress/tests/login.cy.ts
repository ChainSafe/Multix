import { injectedAccounts } from '../fixtures/injectedAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { multisigPage } from '../support/page-objects/multisigPage'
import { sendTxModal } from '../support/page-objects/sendTxModal'
import { topMenuItems } from '../support/page-objects/topMenuItems'

describe('Connect Account', () => {
  beforeEach(() => {
    cy.visit(landingPageUrl)
    cy.initExtension(injectedAccounts)
    topMenuItems.connectButton().click()
    landingPage.accountsOrRpcLoader().should('contain', 'Loading accounts')
  })

  it('Reject connection', () => {
    cy.getAuthRequests().then((authRequests) => {
      const requests = Object.values(authRequests)
      // we should have 1 connection request to the extension
      cy.wrap(requests.length).should('eq', 1)
      // this request should be from the application Multix
      cy.wrap(requests[0].origin).should('eq', 'Multix')
      // let's allow it for Alice
      cy.rejectAuth(requests[0].id, 'Cancelled')
      // the ui should then move on to connecting to the rpcs
      landingPage.noAccountFoundError().should('be.visible')
    })
  })

  it.only('Connects with Alice', () => {
    const AliceAddress = Object.values(injectedAccounts)[0].address
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
      multisigPage.newTransactionButton().click()
      sendTxModal.sendTxTitle().should('be.visible')
      sendTxModal.fieldTo().click().type(`${AliceAddress}{enter}`)
      sendTxModal.fieldAmount().click().type('0.001')
      sendTxModal.buttonSend().should('be.enabled').click()
    })
  })
})
