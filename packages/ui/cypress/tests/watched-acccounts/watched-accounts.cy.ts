import { addresses } from '../../fixtures/accounts'
import { localHost } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landingPage'
import { settingsPage } from '../../support/page-objects/settingsPage'

describe('Watched Accounts', () => {

  it.only('can add an account to the watch list', () => {
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.watchAccountAccountInput().type(`${addresses.Alice}{enter}`)
    // autocomplete on the input seems to affect reliability so we wait a bit
    cy.wait(1000)
    settingsPage.addButton().click()
    settingsPage.accountContainer().within(() => {
      settingsPage.accountIcon().should("be.visible")
      settingsPage.accountAddressLabel().should("be.visible")
      settingsPage.accountRemoveButton().should("be.visible")
    })
  })

  it('can remove an account from the watch list', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('multix.watchedAccount',
        '["0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"]')
    })
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountContainer().within(() => {
      settingsPage.accountRemoveButton().click()
      settingsPage.accountIcon().should("not.exist")
      settingsPage.accountAddressLabel().should("not.exist")
    })
  })
})
