import { multisigPage } from '../support/page-objects/multisigPage'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { kusamaAHMemberAccount, expectedKusamaAHMultisigAddress } from '../fixtures/kusamaAssetHub'
import { landingPageNetwork, landingPageNetworkAddress } from '../fixtures/landingData'
import {
  expectedPolkadotMultisigAddress,
  polkadotMemberAccount
} from '../fixtures/polkadotAccounts'

describe('Shows the right assets depending on the network', () => {
  it('Shows the right assets balance on the Asset hub landing page', () => {
    cy.setupAndVisit({
      url: landingPageNetwork('asset-hub-polkadot'),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [kusamaAHMemberAccount.Nikos]
    })

    multisigPage
      .accountHeader(6000)
      .should('be.visible')
      .within(() => {
        accountDisplay
          .addressLabel()
          .should('be.visible')
          .and('contain.text', expectedKusamaAHMultisigAddress.slice(0, 6))
        multisigPage.assetHubBalance('1337').should('be.visible')
        multisigPage.assetHubBalance('1337').should('contain.text', '1 USDC')
        multisigPage.assetHubBalance('1984').should('be.visible')
        multisigPage.assetHubBalance('1984').should('contain.text', '0 USDt')
        multisigPage.nativeBalance().should('be.visible')
        multisigPage.nativeBalance().should('contain.text', '1 DOT')
      })
  })

  it('Shows only the native balance on a non asset hub landing page', () => {
    cy.setupAndVisit({
      url: landingPageNetworkAddress({
        network: 'polkadot',
        address: expectedPolkadotMultisigAddress
      }),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [polkadotMemberAccount.Clow]
    })

    multisigPage
      .accountHeader(6000)
      .should('be.visible')
      .within(() => {
        accountDisplay
          .addressLabel()
          .should('be.visible')
          .and('contain.text', expectedPolkadotMultisigAddress.slice(0, 6))
        multisigPage.assetHubBalance('1337').should('not.exist')
        multisigPage.assetHubBalance('1984').should('not.exist')
        multisigPage.nativeBalance().should('be.visible')
        multisigPage.nativeBalance().should('contain.text', 'DOT')
      })
  })
})
