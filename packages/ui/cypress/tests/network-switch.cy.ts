import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { settingsPageWatchAccountUrl } from '../fixtures/landingData'
import { settingsPage } from '../support/page-objects/settingsPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { watchMultisigs } from '../fixtures/watchAccounts/watchMultisigs'
import { encodeAddress } from '@polkadot/util-crypto'

const {
  publicKey: multisigPublicKey,
  address: multisigAddress,
  pureAddress: multisigPureAddress,
  name: multisigName
} = watchMultisigs['multisig-with-pure']

const KUSAMA_S58_PREFIX = 2
const kusamaAddress = encodeAddress(multisigAddress, KUSAMA_S58_PREFIX)

describe('Network can be switched', () => {
  it('should switch network using selector', () => {
    cy.setupAndVisit({
      url: settingsPageWatchAccountUrl,
      accountNames: { [multisigPublicKey]: multisigName },
      watchedAccounts: [multisigPublicKey]
    })

    cy.url().should('contain', 'network=rococo')
    cy.url().should('contain', `address=${multisigPureAddress}`)

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', multisigName)
      accountDisplay.addressLabel().contains(multisigAddress.slice(0, 5))
    })

    topMenuItems
      .desktopMenu()
      .within(() => topMenuItems.multiproxySelectorDesktop().should('exist'))
    topMenuItems.desktopMenu().within(() => topMenuItems.networkSelector().click())
    topMenuItems.networkSelectorOption('kusama').click()

    cy.url().should('contain', 'network=kusama')
    cy.url().should('not.contain', 'address=')

    topMenuItems
      .desktopMenu()
      .within(() => topMenuItems.multiproxySelectorDesktop().should('not.exist'))

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', multisigName)
      accountDisplay.addressLabel().contains(kusamaAddress.slice(0, 5))
    })
  })
})
