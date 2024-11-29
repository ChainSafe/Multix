import { testAccounts } from '../fixtures/testAccounts'
import { landingPageUrl } from '../fixtures/landingData'
import { multisigPage } from '../support/page-objects/multisigPage'
import { txSigningModal } from '../support/page-objects/modals/txSigningModal'
import { knownMultisigs } from '../fixtures/knownMultisigs'

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
        multisigPage.pendingTransactionItem().should('have.length', 2)
        multisigPage
          .pendingTransactionItem()
          .eq(1)
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
      .eq(0)
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
})
