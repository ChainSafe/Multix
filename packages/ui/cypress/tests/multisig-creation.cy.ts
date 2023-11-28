import { landingPageNetwork } from '../fixtures/landingData'
import { testAccounts } from '../fixtures/testAccounts'
import { landingPage } from '../support/page-objects/landingPage'
import { newMultisigPage } from '../support/page-objects/newMultisigPage'
import { notifications } from '../support/page-objects/notifications'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { clickOnConnect } from '../utils/clickOnConnect'

const { address: address1 } = testAccounts['Funded Account 1 Chopsticks Kusama']
const { address: address2 } = testAccounts['Funded Account 2 Chopsticks Kusama']
const { address: address3 } = testAccounts['Funded Account 3 Chopsticks Kusama']

const typeAndAdd = (address: string) => {
  newMultisigPage.addressSelector().click().type(`${address}{downArrow}{enter}`)
  newMultisigPage.addButton().click()
}
describe('Multisig creation', () => {
  beforeEach(() => {
    cy.visit(landingPageNetwork('local'))
    cy.initExtension(Object.values(testAccounts))
    clickOnConnect()
    cy.connectAccounts([address1, address2, address3])
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
      console.log(txRequests)
      cy.approveTx(txRequests[0].id)
      notifications.notificationWrapper().should('have.length', 1)
      notifications.successNotificationIcon().should('be.visible')
      notifications.notificationWrapper().should('contain', 'Tx in block')
      landingPage.firstMultisigCreationText().should('have.text', 'Multisig creation in progress')
    })
  })

  // Todo, check that:
  // that we can't continue with less than 2 sig
  // threshold too high or low
  // name is optional
  // error message if no own account
  // not enough funds for signer error
  // without pure
})
