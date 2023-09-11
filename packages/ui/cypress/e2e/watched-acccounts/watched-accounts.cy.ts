import { addresses } from '../../fixtures/accounts'
import { localHost } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landing'
import { settingsPage } from '../../support/page-objects/settings'

describe('watched-accounts', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(localHost)
  })

  it('Allows watching accounts', () => {
    cy.initExtension()
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    // landingPage.watchAccountButton().click()
    cy.get('[data-cy="button-menu-connect"]').click()
    cy.getAuthRequests().then((re) => {
      const request = Object.values(re)[0]
      cy.wrap(request.origin).should('eq', 'Multix')
      console.log('reqqq', origin)
    })
  })
})
