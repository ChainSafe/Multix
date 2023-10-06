import { addresses } from '../fixtures/accounts'
import { landingPageUrl, settingsPageWatchAccountUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { settingsPage } from '../support/page-objects/settingsPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { watchMultisigs } from '../fixtures/watchAccounts/watchMultisigs'

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
    cy.visit(settingsPageWatchAccountUrl)
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
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(addresses.Alice, 'Alice')
    settingsPage.accountContainer().should('have.length', 1)
    // attempt to add the same account again
    addWatchAccount(addresses.Alice)
    settingsPage.errorLabel().should('be.visible').should('have.text', 'Account already added')
    settingsPage.accountContainer().should('have.length', 1)
    settingsPage.addButton().should('be.disabled')
  })

  it('can see error when attempting to add an invalid address', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount('123')
    settingsPage.errorLabel().should('be.visible').should('have.text', 'Invalid address')
    settingsPage.accountContainer().should('have.length', 0)
    settingsPage.addButton().should('be.disabled')
  })

  it.only('can see the provided multisig name displayed', () => {
    cy.visit(settingsPageWatchAccountUrl)
    // watch a multisig that has no pure
    addWatchAccount(
      watchMultisigs['watch-multisig-without-pure'].address,
      watchMultisigs['watch-multisig-without-pure'].name)
    // ensure the name is displayed in the account container
    settingsPage.accountContainer().within(() => {
      settingsPage.accountNameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['watch-multisig-without-pure'].name)
    })
    // ensure the name is included in the selectable option
    topMenuItems.multiproxySelector()
      .should('be.visible')
      .first().click()
    topMenuItems.multiproxySelectorOption()
      .should('contain.text', watchMultisigs['watch-multisig-without-pure'].name)
  })

  it.only('can see the provided pure name displayed', () => {
    cy.visit(settingsPageWatchAccountUrl)
    // watch a multisig by it's pure address
    addWatchAccount(
      watchMultisigs['watch-multisig-with-pure'].pureAddress,
      watchMultisigs['watch-multisig-with-pure'].name)
    // ensure the name is displayed in the account container
    settingsPage.accountContainer().within(() => {
      settingsPage.accountNameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['watch-multisig-with-pure'].name)
    })
    // ensure the name is included in the selectable option
    topMenuItems.multiproxySelector()
      .should('be.visible')
      .first().click()
    topMenuItems.multiproxySelectorOption()
      .should('contain.text', watchMultisigs['watch-multisig-with-pure'].name)
  })
})
