import { accountDisplay } from '../support/page-objects/components/accountDisplay'
import { landingPageNetwork } from '../fixtures/landingData'
import { topMenuItems } from '../support/page-objects/topMenuItems'
import { multisigPage } from '../support/page-objects/multisigPage'

const lolmcshizPubKey = '0x8aee4e164d5d70ac67308f303c7e063e9156903e42c1087bbc530447487fa47f'
// const polkadotFirstMultiproxy = '138zn7kQePVm4P1GuCzPLNtcyyAErZzxLiQkT9KhqrVAmF6s' // EB currator pp
// const alternativeFirstMultiproxy = '14SY6tYF5499yJvCFD4LZ26LG4vWtFEPZLkafUUtGR4RsB3'
const polkadotSelectedMultiproxy = '13EyMuuDHwtq5RD6w3psCJ9WvJFZzDDion6Fd2FVAqxz1g7K' // CD OpenGov

// const kusamaFirstMultiproxy = 'DCZyhphXsRLcW84G9WmWEXtAA8DKGtVGSFZLJYty8Ajjyfa' // CD ref commision
const kusamaSelectedMultiproxy = 'J7UBNJqKHkRi3NkxMV6Y43cMk1ZjEJWzq4z4XmqmNCcFTfM'

describe('default Multisigs', () => {
  it('can switch to a new multiproxy and remember it', () => {
    cy.setupAndVisit({
      url: landingPageNetwork('polkadot'),
      watchedAccounts: [lolmcshizPubKey]
    })

    multisigPage.accountHeader().within(() => {
      accountDisplay
        .addressLabel()
        .invoke('text')
        .as('defaultPolkadotAddress')
        .should('not.contain', polkadotSelectedMultiproxy.slice(0, 6))
    })

    cy.log('@defaultPolkadotAddress', cy.get('@defaultPolkadotAddress'))

    // select another one
    topMenuItems.desktopMenu().within(() =>
      topMenuItems
        .multiproxySelectorDesktop()
        .wait(1000)
        .click()
        .type(`${polkadotSelectedMultiproxy.slice(0, 6)}{downArrow}{enter}`)
    )

    // verify that it's displayed
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', polkadotSelectedMultiproxy.slice(0, 6))
    })

    // go on Kusama and do the same
    // check the default multiproxy
    cy.visit(landingPageNetwork('kusama'))

    multisigPage.accountHeader().within(() => {
      accountDisplay
        .addressLabel()
        .invoke('text')
        .as('defaultKusamaAddress')
        .should('not.contain', kusamaSelectedMultiproxy.slice(0, 6))
    })

    cy.log('@defaultKusamaAddress', cy.get('@defaultKusamaAddress'))

    // select another one
    topMenuItems.desktopMenu().within(() =>
      topMenuItems
        .multiproxySelectorDesktop()
        .wait(1000)
        .click()
        .type(`${kusamaSelectedMultiproxy.slice(0, 6)}{downArrow}{enter}`)
    )

    // verify that it's displayed
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', kusamaSelectedMultiproxy.slice(0, 6))
    })

    // go back on Polkadot and verify the last used one is selected
    cy.visit(landingPageNetwork('polkadot'))

    // verify that it's displayed
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', polkadotSelectedMultiproxy.slice(0, 6))
    })

    cy.url().should('include', polkadotSelectedMultiproxy)

    // go back on Kusama and verify the last used one is selected
    cy.visit(landingPageNetwork('kusama'))

    // verify that it's displayed
    multisigPage.accountHeader().within(() => {
      accountDisplay.addressLabel().should('contain.text', kusamaSelectedMultiproxy.slice(0, 6))
    })

    cy.url().should('include', kusamaSelectedMultiproxy)
  })
})
