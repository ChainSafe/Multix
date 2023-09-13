import { addresses } from '../../fixtures/accounts'
import { landingPageUrl, settingsPageUrl } from '../../fixtures/landingData'
import { landingPage } from '../../support/page-objects/landingPage'
import { settingsPage } from '../../support/page-objects/settingsPage'

const addWatchAccount = (address: string, name?: string) => {
  settingsPage.accountAddressInput().type(`${address}{enter}`, { delay: 20 })

  if (name) {
    settingsPage.accountNameInput().type(name)
  }

  settingsPage.addButton().click()
}

describe('Watched Accounts', () => {
  it('can add an account to the watch list', () => {
    cy.visit(landingPageUrl)
    landingPage.watchAccountButton().click()
    addWatchAccount(addresses.Alice, 'Alice')
    settingsPage.accountContainer().within(() => {
      settingsPage.accountIcon().should('be.visible')
      settingsPage.accountAddressLabel().should('be.visible')
      settingsPage.accountNameLabel().should('be.visible')
      settingsPage.accountDeleteButton().should('be.visible')
    })
  })

  it('can remove an account from the watch list', () => {
    // add an account first
    cy.visit(settingsPageUrl)
    addWatchAccount(addresses.Alice, 'Alice')
    // now remove it
    settingsPage.accountContainer().within(() => {
      settingsPage.accountDeleteButton().click()
      settingsPage.accountIcon().should('not.exist')
      settingsPage.accountAddressLabel().should('not.exist')
    })
    settingsPage.accountContainer().should('have.length', 0)
  })

  it('can see error when attemping to add same address more than once', () => {
    // add an account first
    cy.visit(settingsPageUrl)
    addWatchAccount(addresses.Alice, 'Alice')
    settingsPage.accountContainer().should('have.length', 1)
    // attempt to add the same account again
    addWatchAccount(addresses.Alice)
    settingsPage.errorLabel().should('be.visible').should('have.text', 'Account already added')
    settingsPage.accountContainer().should('have.length', 1)
    settingsPage.addButton().should('be.disabled')
  })

  it('can see error when attempting to add an invalid address', () => {
    cy.visit(settingsPageUrl)
    addWatchAccount('123')
    settingsPage.errorLabel().should('be.visible').should('have.text', 'Invalid address')
    settingsPage.accountContainer().should('have.length', 0)
    settingsPage.addButton().should('be.disabled')
  })
})
