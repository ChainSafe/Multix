import { injectedAccounts } from '../fixtures/injectedAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { clickOnConnect } from '../utils/clickOnConnect'
import { newMultisigPage } from '../support/page-objects/newMultisigPage'

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
          'have.text',
          'No account found. Please connect at least one in a wallet extension. More info at wiki.polkadot.network'
        )
    })
  })

  it('Connect Accounts', () => {
    const { address: account1 } = Object.values(injectedAccounts)[0]
    const { address: account2 } = Object.values(injectedAccounts)[1]

    cy.connectAccounts([account1, account2])

    topMenuItems.headerNavbar().within(() => {
      cy.get('[href="/create"]').click()
    })

    // Click on the account address selector
    newMultisigPage.addressSelector().click()

    const accountLabels = cy.get('[data-cy="label-account-name"]')
    accountLabels.each((el, index) => {
      const expectedName = Object.values(injectedAccounts)[index].name
      cy.wrap(el).should('have.text', expectedName)
    })
  })
})
