import { testAccounts } from '../fixtures/testAccounts'
import { landingPageNetwork, landingPageUrl } from '../fixtures/landingData'
import { multisigPage } from '../support/page-objects/multisigPage'
import { txSigningModal } from '../support/page-objects/modals/txSigningModal'
import { knownMultisigs } from '../fixtures/knownMultisigs'
import { polkadotAHMemberAccount } from '../fixtures/polkadotAssetHub'
import { expander } from '../support/page-objects/components/expander'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'

describe('Unknown Transaction', () => {
  beforeEach(() => {
    cy.setupAndVisit({
      url: landingPageUrl,
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [
        testAccounts['Multisig Member Account 4'],
        testAccounts['Multisig Member Account 5']
      ]
    })
  })

  it('can see an unknown transaction displayed in the transaction list', () => {
    multisigPage
      .transactionList()
      .should('be.visible')
      .within(() => {
        multisigPage.pendingTransactionItem().should('have.length', 3)
        multisigPage.dateLabel().should('have.length', 2)
        multisigPage.dateLabel().eq(0).contains('January 6, 2025')
        multisigPage.dateLabel().eq(1).contains('September 12, 2024')
        multisigPage
          .pendingTransactionItem()
          .eq(2)
          .within(() => {
            multisigPage.pendingTransactionCallName().should('contain.text', 'Unknown call')
            multisigPage.unknownCallIcon().should('be.visible')
            multisigPage.unknownCallAlert().should('be.visible')

            multisigPage.reviewButton().click()
          })
      })

    const { hashOfUknownCall: expectedCallHash, callData } =
      knownMultisigs['multisigs-unique-users']
    const testAccount2Address = testAccounts['Multisig Member Account 5'].address

    txSigningModal
      .body()
      .should('be.visible')
      .within(() => {
        txSigningModal.callHashLabel().should('contain.text', expectedCallHash)

        // we are with the proposer here
        txSigningModal.executeButton().should('not.exist')
        txSigningModal.approveButton().should('not.exist')
        txSigningModal.rejectButton().should('be.enabled')

        // switching to the other signatory
        txSigningModal
          .signerInput()
          .type(`{selectall}{del}${testAccount2Address.slice(0, 4)}{downArrow}{enter}`)

        txSigningModal.executeButton().should('not.exist')
        txSigningModal.approveButton().should('be.disabled')
        txSigningModal.rejectButton().should('not.exist')
        // now provide call data and ensure we see the call info and approve button enabled
        txSigningModal.callDataInput().type(callData)
        txSigningModal
          .callInfoContainer()
          .should('be.visible')
          .should('contain.text', `remark: 'multix ftw'`)
        txSigningModal.approveButton().should('be.enabled')
      })
  })

  it('can see the expected buttons on an unknown tx without call data', () => {
    const callData = '0x000010736f6d65'
    multisigPage
      .pendingTransactionItem(8000)
      .eq(1)
      .within(() => {
        multisigPage.pendingTransactionCallName().should('contain.text', 'Unknown call')
        multisigPage.unknownCallIcon().should('be.visible')
        multisigPage.unknownCallAlert().should('be.visible')

        multisigPage.reviewButton().click()
      })

    txSigningModal
      .body()
      .should('be.visible')
      .within(() => {
        // txSigningModal.callHashLabel().should('contain.text', expectedCallHash)
        txSigningModal.approveButton().should('not.exist')
        txSigningModal.executeButton().should('be.disabled')
        txSigningModal.rejectButton().should('be.enabled')
        // now provide call data and ensure we see the call info and approve button enabled
        txSigningModal.callDataInput().should('be.visible')
        txSigningModal.callDataInput().type(callData)
        txSigningModal.executeButton().should('be.enabled')
        txSigningModal.rejectButton().should('be.enabled')
      })
  })

  it('can display correctly a tx without params', () => {
    multisigPage
      .pendingTransactionItem(8000)
      .eq(0)
      .within(() => {
        multisigPage.pendingTransactionCallName().should('contain.text', 'Session.purge_keys')
        txSigningModal.callInfoContainer().should('not.contain.text', 'Params')
        multisigPage.unknownCallIcon().should('not.exist')
        multisigPage.unknownCallAlert().should('not.exist')
      })
  })
})

describe('Asset hub transactions', () => {
  it('can display a simple asset hub transactions with the right decimal and symbol', () => {
    cy.setupAndVisit({
      url: landingPageNetwork('asset-hub-polkadot'),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [polkadotAHMemberAccount.Nikos]
    })

    multisigPage
      .pendingTransactionItem(8000)
      .eq(1)
      .within(() => {
        multisigPage
          .pendingTransactionCallName()
          .should('contain.text', 'Assets.transfer_keep_alive')

        expander.paramExpander().click()
        accountDisplay.identicon().should('be.visible')
        expander.contentExpander().should('contain', 'id: 1337 (USD Coin)')
        expander.contentExpander().should('contain', 'amount: 0.01 USDC')
        expander.contentExpander().should('contain', '1ThiBx..hDvvjg')
      })

    multisigPage
      .pendingTransactionItem(8000)
      .eq(0)
      .within(() => {
        multisigPage.pendingTransactionCallName().should('contain.text', 'Utility.batch_all')

        expander.paramExpander().click()
        multisigPage.batchItem().should('have.length', 3)
        multisigPage
          .batchItem()
          .eq(0)
          .within((el) => {
            accountDisplay.identicon().should('be.visible')
            cy.wrap(el).should('contain', 'id: 1337 (USD Coin)')
            cy.wrap(el).should('contain', 'amount: 2 USDC')
            cy.wrap(el).should('contain', 'Nikos')
          })

        multisigPage
          .batchItem()
          .eq(1)
          .within((el) => {
            accountDisplay.identicon().should('be.visible')
            cy.wrap(el).should('contain', 'id: 1984 (Tether USD)')
            cy.wrap(el).should('contain', 'amount: 0.001 USDT')
            cy.wrap(el).should('contain', 'Thibaut')
          })

        multisigPage
          .batchItem()
          .eq(2)
          .within((el) => {
            accountDisplay.identicon().should('be.visible')
            cy.wrap(el).should('contain', 'id: 420')
            cy.wrap(el).should('contain', `amount: '1'`)
            cy.wrap(el).should('contain', 'Thibaut')
          })
      })
  })
})
