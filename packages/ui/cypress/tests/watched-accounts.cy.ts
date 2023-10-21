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

  it('can see error when attempting to add same address more than once', () => {
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

  it('can see the expected account details displayed for a watched multisig', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-without-pure'].address,
      watchMultisigs['multisig-without-pure'].name
    )
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay
        .nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
    // ensure the name is displayed in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-without-pure'].name)
    })
  })

  it('can see the expected account details displayed for a watched pure', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay
        .nameLabel()
        .should('be.visible')
        .should('have.text', watchMultisigs['multisig-with-pure'].name)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelector().should('be.visible').first().click()
    topMenuItems.multiproxySelectorOption().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-with-pure'].name)
    })
    // navigate to the multisig page and ensure the name is included in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', watchMultisigs['multisig-with-pure'].name)
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
    cy.clock()
    editNamesModal.inputEditPureName().type(`{selectall}{del}${`Edited Name Test`}`)
    // name edition is debounced by 300ms
    cy.tick(300)
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

  it('can open the correct subscan link for a watched pure', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    topMenuItems.homeButton().click()
    multisigPage.optionsMenuButton().click()
    multisigPage.subscanMenuOption().should('be.visible')
    // stub window.open to prevent opening a new tab
    cy.window().then((win) => {
      cy.stub(win, 'open').as('open')
    })
    multisigPage.subscanMenuOption().click()
    // ensure the correct subscan url is opened
    cy.get('@open').should(
      'have.been.calledOnceWith',
      `https://rococo.subscan.io/account/${watchMultisigs['multisig-with-pure'].pureAddress}`
    )
  })

  it('can not see the "New Transaction" button when in watched account mode', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().should('be.visible')
    multisigPage.newTransactionButton().should('not.exist')
  })

  it('can not utilize wallet connect when in watched account mode', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    settingsPage.wallectConnectAccordion().should('be.visible').click()
    settingsPage
      .walletConnectAlert()
      .should('be.visible')
      .should(
        'contain.text',
        'Please first select a Pure or Multisig that you are part of, to be able to use it with WalletConnect'
      )
    settingsPage.walletConnectKeyInput().should('be.disabled')
    settingsPage.connectDappButton().should('be.disabled')
  })

  it('can see but not interact with txs when in watched account mode', () => {
    cy.visit(settingsPageWatchAccountUrl)
    addWatchAccount(
      watchMultisigs['multisig-with-pure'].pureAddress,
      watchMultisigs['multisig-with-pure'].name
    )
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().should('be.visible')
    multisigPage
      .transactionList()
      .should('be.visible')
      .within(() => {
        multisigPage.pendingTransactionItem().should('have.length', 1)
        multisigPage.reviewButton().should('not.exist')
      })
  })
})
