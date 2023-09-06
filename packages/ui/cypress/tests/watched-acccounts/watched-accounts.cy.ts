import { addresses } from '../../fixtures/accounts'
import { localHost } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landingPage'
import { settingsPage } from '../../support/page-objects/settingsPage'

describe('Watched Accounts', () => {
  beforeEach(() => {
    cy.visit(localHost)
  })

  it('can add an account to watch', () => {
    landingPage.watchAccountButton().click()
    settingsPage.watchAccountAccountInput().type(`${addresses.Alice}{enter}`)
    //cy.wait(1000)
    settingsPage.addButton().click()
    settingsPage.accountContainer()
    .should("be.visible")
    .should("contain.text", `${addresses.Alice.substring(0,6)}`)
    })
})