import { addresses } from '../fixtures/accounts'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { landingPageUrl, settingsPageWatchAccountUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { settingsPage } from '../support/page-objects/settingsPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { watchMultisigs } from '../fixtures/watchAccounts/watchMultisigs'
import { multisigPage } from '../support/page-objects/multisigPage'
import { editNamesModal } from '../support/page-objects/modals/editNamesModal'

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

  it('can see the provided name displayed for a watched multisig', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-without-pure'].address,
      watchMultisigs['multisig-without-pure'].name
    )
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay
        .nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
    // ensure the name is displayed in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
  })

  it('can see the provided name displayed for a watched pure', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay
        .nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['multisig-with-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-with-pure'].name)
    })
    // navigate to the multisig page and ensure the name is included in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-with-pure'].name)
    })
  })

  it('can see the identicon and badge displayed for a watched multisig', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-without-pure'].address,
      watchMultisigs['multisig-without-pure'].name
    )
    // ensure the multisig badge is displayed in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
    })
    // navigate to the home page and ensure the multisig badge is included in the header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
    })
  })

  it('can see the identicon and badge displayed for a watched pure proxy', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    // ensure the pure badge is displayed in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
    })
    // navigate to the home page and ensure the pure badge is included in the header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
    })
  })

  it('can edit the name of a watched pure', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    // navigate to the home page and edit the name
    topMenuItems.homeButton().click()
    multisigPage.optionsMenuButton().click()
    multisigPage.editNamesMenuOption().click()
    editNamesModal.body().should('be.visible')
    editNamesModal.inputEditPureName().type(`{selectall}{del}${`Edited Name Test`}`)
    cy.wait(500)
    editNamesModal.saveButton().should('be.enabled').click()
    // ensure the edited name is now displayed in the home page header
    multisigPage.accountHeader().within(() => {
      accountDisplay.nameLabel().should('have.text', 'Edited Name Test')
    })
    // navigate to settings and ensure the edited name is displayed
    cy.visit(settingsPageWatchAccountUrl)
    settingsPage.accountContainer().within(() => {
      accountDisplay.nameLabel().should('have.text', 'Edited Name Test')
    })
  })

  it('can see a subscan link for a watched pure', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    // navigate to the home page and edit the name
    topMenuItems.homeButton().click()
    multisigPage.optionsMenuButton().click()
    multisigPage.subscanMenuOption().should('be.visible')
  })

  it('can not see the "New Transaction" button when only a watched account', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().should('be.visible')
    multisigPage.newTransactionButton().should('not.exist')
  })
})
