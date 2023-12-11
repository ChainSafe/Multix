import { landingPageNetwork } from '../fixtures/landingData'
import { testAccounts } from '../fixtures/testAccounts'
import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { multisigPage } from '../support/page-objects/multisigPage'
import { newMultisigPage } from '../support/page-objects/newMultisigPage'
import { notifications } from '../support/page-objects/notifications'
import { topMenuItems } from '../support/page-objects/topMenuItems'

const fundedAccount1 = testAccounts['Funded Account 1 Chopsticks Kusama']
const fundedAccount2 = testAccounts['Funded Account 2 Chopsticks Kusama']
const fundedAccount3 = testAccounts['Funded Account 3 Chopsticks Kusama']
const { address: address1 } = fundedAccount1
const { address: address2 } = fundedAccount2
const { address: address3 } = fundedAccount3

const typeAndAdd = (address: string) => {
  newMultisigPage.addressSelector().click().type(`${address}{downArrow}{enter}`)
  newMultisigPage.addButton().click()
}
describe('Multisig creation', () => {
  beforeEach(() => {
    cy.setupAndVisit({
      url: landingPageNetwork('local'),
      extensionConnectionAllowed: true,
      injectExtensionWithAccounts: [fundedAccount1, fundedAccount2, fundedAccount3]
    })
  })

  it('Create a multisig tx with proxy', () => {
    topMenuItems.newMultisigButton().click()
    typeAndAdd(address1)
    typeAndAdd(address2)
    typeAndAdd(address3)
    newMultisigPage.nextButton().should('contain', 'Next').click()
    newMultisigPage.thresholdInput().type('2')
    newMultisigPage.nameInput().type('Some Name')
    newMultisigPage.nextButton().should('contain', 'Next').click()
    newMultisigPage.nextButton().should('contain', 'Create').click()
    cy.getTxRequests().then((req) => {
      const txRequests = Object.values(req)
      cy.wrap(txRequests.length).should('eq', 1)
      cy.wrap(txRequests[0].payload.address).should('eq', address1)
      newMultisigPage.nextButton().should('not.exist')
      newMultisigPage.creatingLoader().should('exist')
      cy.approveTx(txRequests[0].id)
      notifications.notificationWrapper(10000).should('have.length', 1)
      notifications.loadingNotificationIcon().should('be.visible')
      notifications.notificationWrapper().should('contain', 'broadcast')

      notifications.successNotificationIcon(40000).should('be.visible')
      notifications.notificationWrapper().should('contain', 'Tx in block')
      const expectedMultisigAddress = 'D9b1mkwhCwyRMUQZLyyKPdVkiJfFCuyVuWr3EmYAV6ETXkX'
      multisigPage.accountHeader(10000).within(() => {
        accountDisplay.addressLabel().should('contain.text', expectedMultisigAddress.slice(0, 6))
      })
    })
  })
})
