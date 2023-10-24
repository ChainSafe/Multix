import { testAccounts } from '../fixtures/testAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { clickOnConnect } from '../utils/clickOnConnect'

describe('Landing Page Messaging', () => {
  it('can see the correct default state on the landing page', () => {
    cy.visit(landingPageUrl)
    landingPage
      .multixIntroHeader()
      .should('contain.text', 'Multix is an interface to easily manage complex multisigs.')
    landingPage
      .interactionPromptLabel()
      .should('contain.text', 'Connect a wallet to interact with Multix or watch an account.')
    landingPage.connectWalletButton().should('be.visible').should('be.enabled')
    landingPage.watchAccountButton().should('be.visible').should('be.enabled')
  })

  it('can see an error when attempting to connect without an extension', () => {
    cy.visit(landingPageUrl)
    // click on connect without an extension installed
    topMenuItems.connectButton().click()
    landingPage
      .noAccountFoundError()
      .should(
        'contain.text',
        'No account found. Please connect at least one in a wallet extension.'
      )
    landingPage.polkadotWikiLink().should('be.visible')
  })

  it('can see an error when extension is connected but no account is shared', () => {
    cy.visit(landingPageUrl)
    cy.initExtension([testAccounts['Test Account 1']])
    clickOnConnect()
    // don't connect any of the initialized accounts
    cy.connectAccounts(['0'], false)
    landingPage
      .noAccountFoundError()
      .should(
        'contain.text',
        'No account found. Please connect at least one in a wallet extension.'
      )
  })

  it('can see an error when account is shared but not part of a multisig', () => {
    cy.visit(landingPageUrl)
    cy.initExtension([testAccounts['Non Multisig Member']])
    clickOnConnect()
    // share the account that is not part of any multisig
    cy.connectAccounts([testAccounts['Non Multisig Member'].address], false)
    landingPage
      .noMultisigFoundError()
      .should('contain.text', 'No multisig found for your accounts or watched accounts.')
    landingPage.createOneButton().should('be.visible').should('be.enabled')
    landingPage.watchAccountButton().should('be.visible').should('be.enabled')
  })

  it('can see error message if watching an account that is not part of a multisig', () => {
    // stub watched account
    const nonMemberPublicKey = testAccounts['Non Multisig Member'].publicKey!
    cy.visitWithLocalStorage({
      url: landingPageUrl,
      watchedAccounts: [nonMemberPublicKey]
    })
    topMenuItems.connectButton().click()
    landingPage
      .noMultisigFoundError()
      .should('contain.text', 'No multisig found for your accounts or watched accounts.')
    landingPage.createOneButton().should('be.visible').should('be.enabled')
    landingPage.watchAccountButton().should('be.visible').should('be.enabled')
  })

  it('can see an error when account is shared and watched but not part of a multisig', () => {
    // stub watched account
    const nonMemberPublicKey = testAccounts['Non Multisig Member'].publicKey!
    cy.visitWithLocalStorage({
      url: landingPageUrl,
      watchedAccounts: [nonMemberPublicKey]
    })
    // connect the same account being watched
    cy.initExtension([testAccounts['Non Multisig Member']])
    clickOnConnect()
    // share the account that is not part of any multisig
    cy.connectAccounts([testAccounts['Non Multisig Member'].address], false)
    landingPage
      .noMultisigFoundError()
      .should('contain.text', 'No multisig found for your accounts or watched accounts.')
    landingPage.createOneButton().should('be.visible').should('be.enabled')
    landingPage.watchAccountButton().should('be.visible').should('be.enabled')
  })
})
