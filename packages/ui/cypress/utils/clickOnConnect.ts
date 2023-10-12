import { landingPage } from '../support/page-objects/landingPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'

export const clickOnConnect = () => {
  cy.clock()
  topMenuItems.connectButton().click()
  landingPage.accountsLoader().should('contain', 'Loading accounts')
  cy.tick(500)
  // restore the clock to prevent WS errors
  cy.clock().invoke('restore')
}
