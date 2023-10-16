import { injectedAccounts } from '../fixtures/injectedAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { clickOnConnect } from '../utils/clickOnConnect'
import { newMultisigPage } from '../support/page-objects/newMultisigPage'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'

describe('Connect Account', () => {
  beforeEach(() => {
    cy.visit(landingPageUrl)
    cy.initExtension(injectedAccounts)
    clickOnConnect()
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
      landingPage
        .noAccountFoundError()
        .should(
          'contain.text',
          'No account found. Please connect at least one in a wallet extension. More info at wiki.polkadot.network'
        )
    })
  })

  it('Connect Accounts', () => {
    const { address: address1 } = Object.values(injectedAccounts)[0]
    const { address: address2 } = Object.values(injectedAccounts)[1]

    cy.connectAccounts([address1, address2])

    topMenuItems.newMultisigButton().click()
    // Click on the account address selector
    newMultisigPage.addressSelector().click()

    accountDisplay.nameLabel().each((el, index) => {
      const expectedName = Object.values(injectedAccounts)[index].name
      cy.wrap(el).should('have.text', expectedName)
    })
  })
})
