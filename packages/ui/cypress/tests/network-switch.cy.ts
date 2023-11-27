import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { settingsPageWatchAccountUrl } from '../fixtures/landingData'
import { settingsPage } from '../support/page-objects/settingsPage'
import { testAccounts } from '../fixtures/testAccounts'
import { topMenuItems } from '../support/page-objects/topMenuItems'

const {
  name: testAccountName,
  address: testAccountAddress,
  kusamaAddress
} = testAccounts['Multisig Member Account 1']

describe('Network can be switched', () => {
  it('should switch account using menu', () => {
    cy.visitWithLocalStorage({
      url: settingsPageWatchAccountUrl,
      accountNames: { [testAccountAddress]: testAccountName as string },
      watchedAccounts: [testAccountAddress]
    })

    cy.url().should('contain', 'network=rococo')

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

    cy.url().should('contain', 'network=kusama')

    settingsPage.accountContainer().within(() => {
      accountDisplay.identicon().should('be.visible')
      accountDisplay.nameLabel().should('contain', testAccountName)

      if (kusamaAddress) accountDisplay.addressLabel().contains(kusamaAddress.slice(0, 5))
    })
  })
})
