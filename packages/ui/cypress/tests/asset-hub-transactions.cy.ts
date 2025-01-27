import { multisigPage } from '../support/page-objects/multisigPage'
import { sendTxModal } from '../support/page-objects/sendTxModal'
import { waitForTxRequest } from '../utils/waitForTxRequests'
import { kusamaAHMemberAccount } from '../fixtures/kusamaAssetHub'
import { landingPageNetwork } from '../fixtures/landingData'
import { SignerPayloadJSON } from '@polkadot-api/tx-utils'

const testAccount1Address = kusamaAHMemberAccount.Nikos.address

const fillAndSubmitTransactionForm = (assetSymbol = '') => {
  sendTxModal.sendTokensFieldTo().click().type(`${testAccount1Address}{enter}`)
  sendTxModal.sendTokensFieldAssetSelection().should('exist')
  if (assetSymbol) {
    sendTxModal.sendTokensFieldAssetSelection().click()
    sendTxModal.selectAsset(assetSymbol).click()
  }
  sendTxModal.sendTokensFieldAmount().click().type('0.001')
  sendTxModal.buttonSend().should('be.enabled').click()
}

describe('Crafts the correct extrinsics for asset hub foreign and native assets', () => {
  beforeEach(() => {
    cy.setupAndVisit({
      url: landingPageNetwork('asset-hub-polkadot'),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [kusamaAHMemberAccount.Nikos]
    })
  })

  it('Makes a balances.transferKeepAlive for native assets', () => {
    multisigPage.accountHeader(6000).should('be.visible')
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm()
    waitForTxRequest()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      cy.wrap(txRequests.length).should('eq', 1)
      cy.wrap(txRequests[0].payload.address).should('eq', testAccount1Address)
      console.log('txRequests', txRequests)
      // this is a balances.transferKeepAlive
      cy.wrap((txRequests[0].payload as SignerPayloadJSON).method).should(
        'eq',
        '0x2901020004145d6c503d0cf97f4c7725ca773741bd02e1760bfb52e021af5a9f2de283012c000a0300ba3ecfd7483cdcdad1132af7d1e8067816009cbd77fc0bc30eafe8d2218a1971025a62020000'
      )
    })
  })

  it('Makes an assets.transferKeepAlive for non native assets', () => {
    multisigPage.accountHeader(6000).should('be.visible')
    multisigPage.newTransactionButton().click()
    sendTxModal.sendTxTitle().should('be.visible')
    fillAndSubmitTransactionForm('usdt')
    waitForTxRequest()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      cy.wrap(txRequests.length).should('eq', 1)
      cy.wrap(txRequests[0].payload.address).should('eq', testAccount1Address)
      // console.log('txRequests', txRequests)
      // this is a assets.transferKeepAlive
      cy.wrap((txRequests[0].payload as SignerPayloadJSON).method).should(
        'eq',
        '0x2901020004145d6c503d0cf97f4c7725ca773741bd02e1760bfb52e021af5a9f2de283012c003209011f00ba3ecfd7483cdcdad1132af7d1e8067816009cbd77fc0bc30eafe8d2218a1971a10f0000'
      )
    })
  })
})
