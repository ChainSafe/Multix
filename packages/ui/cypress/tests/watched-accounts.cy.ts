import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import {
  landingPageUrl,
  settingsPageUrl,
  settingsPageWatchAccountUrl
} from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { settingsPage } from '../support/page-objects/settingsPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { watchMultisigs } from '../fixtures/watchAccounts/watchMultisigs'
import { multisigPage } from '../support/page-objects/multisigPage'
import { editNamesModal } from '../support/page-objects/modals/editNamesModal'
import { testAccounts } from '../fixtures/testAccounts'
import { signatoryOfMultipleMultisigs } from '../fixtures/watchAccounts/watchSignatories'

const addWatchAccount = (address: string, name?: string) => {
  settingsPage.accountAddressInput().type(`${address}{enter}`, { delay: 20 })

  if (name) {
    settingsPage.accountNameInput().type(name)
  }

  settingsPage.addButton().click()
}

const { name: testAccountName, address: testAccountAddress } =
  testAccounts['Multisig Member Account 1']

describe('Watched Accounts', () => {
  it('can add an account to the watch list', () => {
    cy.visit(landingPageUrl)
    landingPage.watchAccountButton().click()
    addWatchAccount(testAccountAddress, testAccountName)
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
    addWatchAccount(testAccountAddress)
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
    addWatchAccount(testAccountAddress)
    settingsPage.accountContainer().should('have.length', 1)
    // attempt to add the same account again
    addWatchAccount(testAccountAddress)
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
    const { name: multisigName, publicKey: multisigPublicKey } =
      watchMultisigs['multisig-without-pure']

    cy.setupAndVisit({
      url: settingsPageWatchAccountUrl,
      accountNames: {
        [multisigPublicKey]: multisigName
      },
      watchedAccounts: [multisigPublicKey]
    })
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('be.visible').should('have.text', multisigName)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelectorDesktop().should('be.visible').click()
    topMenuItems.multiproxySelectorOptionDesktop().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', multisigName)
    })
    // ensure the name is displayed in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.multisigBadge().should('be.visible')
      accountDisplay.pureBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', multisigName)
    })
  })

  it('can see the expected account details displayed for a watched pure', () => {
    const { name: pureName, purePublicKey } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: settingsPageWatchAccountUrl,
      accountNames: {
        [purePublicKey]: pureName
      },
      watchedAccounts: [purePublicKey]
    })
    // ensure the multisig name is displayed in the settings account container
    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('be.visible').should('have.text', pureName)
    })
    // ensure the name is included in the selectable drop-down option
    topMenuItems.multiproxySelectorDesktop().should('be.visible').click()
    topMenuItems.multiproxySelectorOptionDesktop().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', pureName)
    })
    // navigate to the multisig page and ensure the name is included in the home page header
    topMenuItems.homeButton().click()
    multisigPage.accountHeader().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.pureBadge().should('be.visible')
      accountDisplay.multisigBadge().should('not.exist')
      accountDisplay.nameLabel().should('have.text', pureName)
    })
  })

  it('can edit the name of a watched pure', () => {
    const { name: pureName, purePublicKey } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: landingPageUrl,
      accountNames: {
        [purePublicKey]: pureName
      },
      watchedAccounts: [purePublicKey]
    })
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
    topMenuItems.settingsButton().click()
    settingsPage.watchedAccountsAccordion().click()
    settingsPage.accountContainer().within(() => {
      accountDisplay.nameLabel().should('have.text', 'Edited Name Test')
    })
  })

  it('can open the correct subscan link for a watched pure', () => {
    const { purePublicKey, name: pureName, pureAddress } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: landingPageUrl,
      accountNames: {
        [purePublicKey]: pureName
      },
      watchedAccounts: [purePublicKey]
    })
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
      `https://rococo.subscan.io/account/${pureAddress}`
    )
  })

  it('can not see the "New Transaction" button when in watched account mode', () => {
    const { purePublicKey } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [purePublicKey]
    })
    multisigPage.accountHeader().should('be.visible')
    multisigPage.newTransactionButton().should('not.exist')
  })

  it('can not utilize wallet connect when in watched account mode', () => {
    const { purePublicKey } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: settingsPageUrl,
      watchedAccounts: [purePublicKey]
    })
    settingsPage.wallectConnectAccordion().click()
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
    const { purePublicKey } = watchMultisigs['multisig-with-pure']

    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [purePublicKey]
    })
    multisigPage.accountHeader().should('be.visible')
    multisigPage
      .transactionList()
      .should('be.visible')
      .within(() => {
        multisigPage.pendingTransactionItem().should('have.length', 1)
        multisigPage.reviewButton().should('not.exist')
      })
  })

  it('can see the same details displayed when watching a pure or its multisig address', () => {
    const {
      purePublicKey,
      pureAddress,
      publicKey: multisigPublicKey,
      address: multisigAddress
    } = watchMultisigs['multisig-with-pure']

    const pureCheck = () => {
      multisigPage
        .accountHeader(6000)
        .should('be.visible')
        .within(() => {
          accountDisplay
            .addressLabel()
            .should('be.visible')
            .and('contain.text', pureAddress.slice(0, 6))
        })
      multisigPage.multisigDetailsContainer().within(() => {
        multisigPage.multisigAccountSummary().within(() => {
          accountDisplay
            .addressLabel()
            .should('be.visible')
            .and('contain.text', multisigAddress.slice(0, 6))
        })
      })
      topMenuItems.multiproxySelectorDesktop().should('be.visible').click()
      topMenuItems
        .multiproxySelectorOptionDesktop()
        .should('have.length', 1)
        .within(() => {
          accountDisplay.pureBadge().should('be.visible')
          accountDisplay
            .addressLabel()
            .should('be.visible')
            .and('contain.text', pureAddress.slice(0, 6))
        })
    }

    // watch the pure public key
    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [purePublicKey]
    })
    // ensure expected display when watching via the public key
    pureCheck()

    // now watch via the multisig public key and ensure that we see the same details displayed
    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [multisigPublicKey]
    })
    // ensure the pure address is still displayed in the account header
    pureCheck()
  })

  it('can see all multisigs that a watched signatory is a member of', () => {
    const { publicKey: signatoryPublicKey } = signatoryOfMultipleMultisigs
    const expectedAddresses = [
      signatoryOfMultipleMultisigs.multisigWithPureAddress3,
      signatoryOfMultipleMultisigs.multisigWithPureAddress1,
      signatoryOfMultipleMultisigs.multisigWithPureAddress2,
      signatoryOfMultipleMultisigs.multisigWithoutPureAddress1,
      signatoryOfMultipleMultisigs.multisigWithoutPureAddress2
    ]

    cy.setupAndVisit({
      url: landingPageUrl,
      watchedAccounts: [signatoryPublicKey]
    })
    topMenuItems.multiproxySelectorDesktop().should('be.visible').click()
    // ensure all multisigs are displayed in the multiproxy selector
    topMenuItems
      .multiproxySelectorOptionDesktop()
      .should('have.length', 5)
      .each(($el, index) => {
        cy.wrap($el).within(() => {
          accountDisplay.addressLabel().should('contain.text', expectedAddresses[index].slice(0, 6))
          if (index < 3) {
            accountDisplay.pureBadge().should('exist')
          } else {
            accountDisplay.multisigBadge().should('exist')
          }
        })
      })
    // ensure each multisig that the signatory is a member of can be viewed
    expectedAddresses.forEach((address, index) => {
      topMenuItems.multiproxySelectorDesktop().click()
      topMenuItems.multiproxySelectorOptionDesktop().eq(index).click()
      multisigPage
        .accountHeader()
        .should('be.visible')
        .within(() => {
          accountDisplay.addressLabel().should('contain.text', address.slice(0, 6))
        })
    })
  })
})
