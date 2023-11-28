import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { settingsPageWatchAccountUrl } from '../fixtures/landingData'
import { settingsPage } from '../support/page-objects/settingsPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { watchMultisigs } from '../fixtures/watchAccounts/watchMultisigs'
import convertRococoAddressToKusama from '../utils/convertRococoAddressToKusama'

const {
  publicKey: multisigPublicKey,
  address: multisigAddress,
  pureAddress: multisigPureAddress,
  name: multisigName
} = watchMultisigs['multisig-with-pure']

describe('Network can be switched', () => {
  it('should switch account using menu', () => {
    cy.visitWithLocalStorage({
      url: settingsPageWatchAccountUrl,
      accountNames: { [multisigPublicKey]: multisigName as string },
      watchedAccounts: [multisigPublicKey]
    })

    cy.url().should('contain', `network=rococo&address=${multisigPureAddress}`)

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', multisigName)
      accountDisplay.addressLabel().contains(multisigAddress.slice(0, 5))
    })

    topMenuItems.desktopMenu().within(() =>
      topMenuItems
        .multiproxySelector()
        .click()
        .type(`${multisigPureAddress.slice(0, 5)}{downArrow}{enter}`)
    )
    topMenuItems.multiproxySelectorInput().should('have.value', multisigPureAddress)

    topMenuItems.desktopMenu().within(() => topMenuItems.networkSelector().click())
    topMenuItems.networkSelectorOption('kusama').click()
    topMenuItems
      .desktopMenu()
      .within(() => cy.waitUntil(() => topMenuItems.multiproxyLoader().should('not.be.visible')))

    cy.url().should('contain', 'network=kusama')
    cy.url().should('not.contain', 'address=')

    topMenuItems.desktopMenu().within(() => topMenuItems.multiproxySelector().should('not.exist'))
    topMenuItems.desktopMenu().within(() => topMenuItems.connectButton().should('exist'))
    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', multisigName)
      accountDisplay
        .addressLabel()
        .contains(convertRococoAddressToKusama(multisigAddress).slice(0, 5))
    })
  })
})
