import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { landingPageUrl } from '../fixtures/landingData'
import { landingPage } from '../support/page-objects/landingPage'
import { settingsPage } from '../support/page-objects/settingsPage'
import { testAccounts } from '../fixtures/testAccounts'
import { topMenuItems } from '../support/page-objects/topMenuItems'

const { name: testAccountName, address: testAccountAddress } =
  testAccounts['Multisig Member Account 1']

describe('Network can be switched', () => {
  it('should switch account using menu', () => {
    cy.visit(landingPageUrl)

    landingPage.watchAccountButton().click()

    cy.url().should('contain', 'settings?network=rococo')
    cy.addWatchAccount(testAccountAddress, testAccountName)

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', testAccountName)
      accountDisplay.addressLabel().contains(testAccountAddress.slice(0, 5))
    })

    topMenuItems.desktopMenu().within(() => topMenuItems.networkSelector().click())
    topMenuItems.networkSelectorOption('kusama').click()
    topMenuItems
      .desktopMenu()
      .within(() => cy.waitUntil(() => topMenuItems.multiproxyLoader().should('not.be.visible')))

    cy.url().should('contain', 'settings?network=kusama')

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', testAccountName)
      accountDisplay.addressLabel().contains('Hbiow')
    })
  })
})
