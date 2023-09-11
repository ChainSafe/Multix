import { addresses } from '../../fixtures/accounts'
import { localHost } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landingPage'
import { settingsPage } from '../../support/page-objects/settingsPage'

describe('Watched Accounts', () => {

  it('can add an account to the watch list', () => {
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountAddressInput().type(`${addresses.Alice}{enter}`)
    // autocomplete on the input seems to affect reliability so we wait a bit
    cy.wait(1000)
    settingsPage.accountNameInput().type("{selectall}{del}Alice")
    settingsPage.addButton().click()
    settingsPage.accountContainer().within(() => {
      settingsPage.accountIcon().should("be.visible")
      settingsPage.accountAddressLabel().should("be.visible")
      settingsPage.accountNameLabel().should("be.visible")
      settingsPage.accountDeleteButton().should("be.visible")
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
      settingsPage.accountDeleteButton().click()
      settingsPage.accountIcon().should("not.exist")
      settingsPage.accountAddressLabel().should("not.exist")
    })
  })

  it('can see error when attemping to add same address more than once', () => {
    // stub existing watched account
    cy.window().then((win) => {
      win.localStorage.setItem('multix.watchedAccount',
        '["0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"]')
    })
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    // attempt to add the same account again
    settingsPage.accountAddressInput().type(`${addresses.Alice}{enter}`)
    cy.wait(1000)
    settingsPage.accountNameInput().type("{selectall}{del}Alice")
    settingsPage.addButton().click()
    settingsPage.errorLabel().should("be.visible")
  })

  it('can see error when attempting to add an invalid address', () => {
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountAddressInput().type("123{enter}")
    cy.wait(1000)
    settingsPage.addButton().click()
    settingsPage.errorLabel().should("be.visible")
  })
})
