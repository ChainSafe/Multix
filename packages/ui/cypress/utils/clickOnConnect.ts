import { landingPage } from '../support/page-objects/landingPage'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { waitForAuthRequest } from './waitForAuthRequests'

export const clickOnConnect = () => {
  topMenuItems.connectButton().click()
  landingPage.accountsLoader().should('contain', 'Loading accounts')
  waitForAuthRequest()
}
