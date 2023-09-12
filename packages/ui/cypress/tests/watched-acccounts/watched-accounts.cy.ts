import { addresses } from '../../fixtures/accounts'
import { localHost } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landingPage'
import { settingsPage } from '../../support/page-objects/settingsPage'

describe('Watched Accounts', () => {
  it('can add an account to the watch list', () => {
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountAddressInput().type(`${addresses.Alice}{enter}`)
    settingsPage.accountNameInput().type('Alice')
    settingsPage.addButton().click()
    settingsPage.accountContainer().within(() => {
      settingsPage.accountIcon().should('be.visible')
      settingsPage.accountAddressLabel().should('be.visible')
      settingsPage.accountNameLabel().should('be.visible')
      settingsPage.accountDeleteButton().should('be.visible')
    })
  })

  it('can remove an account from the watch list', () => {
    cy.window().then((win) => {
      win.localStorage.setItem('multix.watchedAccount', `["${addresses.AliceSS58}"]`)
    })
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountContainer().within(() => {
      settingsPage.accountDeleteButton().click()
      settingsPage.accountIcon().should('not.exist')
      settingsPage.accountAddressLabel().should('not.exist')
    })
    settingsPage.accountContainer().should('have.length', 0)
  })

  it('can see error when attemping to add same address more than once', () => {
    // stub existing watched account
    cy.window().then((win) => {
      win.localStorage.setItem('multix.watchedAccount', `["${addresses.AliceSS58}"]`)
    })
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    // attempt to add the same account again
    settingsPage.accountAddressInput().type(`${addresses.Alice}{enter}`)
    settingsPage.accountNameInput().type('{selectall}{del}Alice')
    settingsPage.addButton().click()
    settingsPage.errorLabel().should('be.visible')
    settingsPage.accountContainer().should('have.length', 1)
  })

  it('can see error when attempting to add an invalid address', () => {
    cy.visit(localHost)
    landingPage.watchAccountButton().click()
    settingsPage.accountAddressInput().type('123{enter}')
    settingsPage.addButton().click()
    settingsPage.errorLabel().should('be.visible')
    settingsPage.accountContainer().should('have.length', 0)
  })
})
