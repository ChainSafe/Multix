import { injectedAccounts } from '../fixtures/injectedAccounts'
import { localHost } from '../fixtures/landingData'

describe('login-accounts', () => {
  beforeEach(() => {
    cy.visit(localHost)
  })

  it('Connects with Alice', () => {
    cy.initExtension(injectedAccounts)
    cy.get('[data-cy="button-menu-connect"]').click()
    cy.getAuthRequests().then((re) => {
      const requests = Object.values(re)
      // we should have 1 connection request to the extension
      cy.wrap(requests.length).should('eq', 1)
      // this request should be from the application Multix
      cy.wrap(requests[0].origin).should('eq', 'Multix')

      // let's allow it
      cy.enableAuth(
        requests[0].id,
        injectedAccounts.map(({ address }) => address)
      )

      // the ui should then move on to connecting to the rpcs
      cy.get('[data-cy="loader-rpc-connection"]').should('contain', 'Connecting to the node at')
    })
  })
})
