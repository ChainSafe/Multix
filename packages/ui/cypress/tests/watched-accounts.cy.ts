import { addresses } from '../fixtures/accounts'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'
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
      accountDisplay.identicon().should('be.visible')
      accountDisplay.addressLabel().should('be.visible')
      accountDisplay.nameLabel().should('be.visible')
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
      accountDisplay.identicon().should('not.exist')
      accountDisplay.addressLabel().should('not.exist')
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
    addWatchAccount(
      watchMultisigs['watch-multisig-without-pure'].address,
      watchMultisigs['watch-multisig-without-pure'].name)
    // ensure the multisig name is displayed in the account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['watch-multisig-without-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector()
      .should('be.visible')
      .first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.nameLabel()
        .should('contain.text', watchMultisigs['watch-multisig-without-pure'].name);
    })
    topMenuItems.homeButton().click()
  })

  it.only('can see the provided pure name displayed', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['watch-multisig-with-pure'].pureAddress,
      watchMultisigs['watch-multisig-with-pure'].name)
    // ensure the name is displayed in the account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['watch-multisig-with-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector()
      .should('be.visible')
      .first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.nameLabel()
        .should('contain.text', watchMultisigs['watch-multisig-with-pure'].name)
    })
    // navigate to the multisig page and ensure the name is included
    topMenuItems.homeButton().click()
  })
})

// two new tests to check the right type of badge
// expand the two tests above to check the name on home screen