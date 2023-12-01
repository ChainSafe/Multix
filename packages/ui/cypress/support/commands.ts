/// <reference types="cypress" />

import { AuthRequests, Extension, TxRequests } from './Extension'
import { MultisigInfo, rejectCurrentMultisigTxs } from '../utils/rejectCurrentMultisigTxs'
import { testAccounts, InjectedAccountWitMnemonic } from '../fixtures/testAccounts'
import 'cypress-wait-until'

const LOCALSTORAGE_ACCOUNT_NAMES_KEY = 'multix.accountNames'
const LOCALSTORAGE_WATCHED_ACCOUNTS_KEY = 'multix.watchedAccount'
const LOCALSTORAGE_EXTENSION_CONNECTION_KEY = 'multix.canConnectToExtension'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

const extension = new Extension()
const Account1 = testAccounts['Multisig Member Account 1'].address

const injectExtension = (win: Cypress.AUTWindow, extension: Extension) => {
  Object.defineProperty(win, 'injectedWeb3', {
    get: () => extension.getInjectedEnable(),
    set: () => {}
  })
}

Cypress.Commands.add('initExtension', (accounts: InjectedAccountWitMnemonic[], origin?: string) => {
  cy.log('Initializing extension')
  cy.wrap(extension.init(accounts, origin))

  return cy.window().then((win) => {
    injectExtension(win, extension)
  })
})

Cypress.Commands.add('getAuthRequests', () => {
  return cy.wrap(extension.getAuthRequests())
})

Cypress.Commands.add('enableAuth', (id: number, accountAddresses: string[]) => {
  return extension.enableAuth(id, accountAddresses)
})

Cypress.Commands.add('rejectAuth', (id: number, reason: string) => {
  return extension.rejectAuth(id, reason)
})

Cypress.Commands.add('getTxRequests', () => {
  return cy.wrap(extension.getTxRequests())
})

Cypress.Commands.add('approveTx', (id: number) => {
  return extension.approveTx(id)
})

Cypress.Commands.add('rejectTx', (id: number, reason: string) => {
  return extension.rejectTx(id, reason)
})

Cypress.Commands.add('rejectCurrentMultisigTx', rejectCurrentMultisigTxs)

Cypress.Commands.add('connectAccounts', (accountAddresses = [Account1] as string[]) => {
  cy.getAuthRequests().then((authRequests) => {
    const requests = Object.values(authRequests)
    // we should have 1 connection request to the extension
    cy.wrap(requests.length).should('eq', 1)
    // this request should be from the application Multix
    cy.wrap(requests[0].origin).should('eq', 'Multix')
    // let's allow Accounts to connect
    cy.enableAuth(requests[0].id, accountAddresses)
  })
})

interface IsetupAndVisit {
  url: string
  watchedAccounts?: string[]
  accountNames?: Record<string, string>
  extensionConnectionAllowed?: boolean
  injectExtensionWithAccounts?: InjectedAccountWitMnemonic[]
}

Cypress.Commands.add(
  'setupAndVisit',
  ({
    url,
    watchedAccounts,
    accountNames,
    extensionConnectionAllowed,
    injectExtensionWithAccounts
  }: IsetupAndVisit) => {
    return cy.visit(url, {
      onBeforeLoad(win) {
        !!watchedAccounts?.length &&
          win.localStorage.setItem(
            LOCALSTORAGE_WATCHED_ACCOUNTS_KEY,
            JSON.stringify(watchedAccounts)
          )
        !!accountNames &&
          win.localStorage.setItem(LOCALSTORAGE_ACCOUNT_NAMES_KEY, JSON.stringify(accountNames))

        !!extensionConnectionAllowed &&
          win.localStorage.setItem(LOCALSTORAGE_EXTENSION_CONNECTION_KEY, 'true')

        if (injectExtensionWithAccounts) {
          extension.init(injectExtensionWithAccounts, 'Multix')
          injectExtension(win, extension)
        }
      }
    })
  }
)

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Initialized the Polkadot extension. If an origin is passed there is no need to authorize the first connection for Dapps of this origin
       * @param {InjectedAccount[]} accounts - Accounts to load into the extension.
       * @param {string | undefined} origin - Dapp name to automatically share accounts without needing to authorize
       * @param {string} origin - Dapp name to allow the accounts for automatically
       * @example cy.initExtension([{ address: '7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba', name: 'Alice', type: 'sr25519'}], 'Multix')
       */
      initExtension: (
        accounts: InjectedAccountWitMnemonic[],
        origin?: string
      ) => Chainable<AUTWindow>

      /**
       * Read the authentication request queue.
       * @example cy.getAuthRequests().then((authQueue) => { cy.wrap(Object.values(authQueue).length).should("eq", 1) })
       */
      getAuthRequests: () => Chainable<AuthRequests>

      /**
       * Authorize a specific request
       * @param {number} id - the id of the request to authorize. This id is part of the getAuthRequests object response.
       * @param {string[]} accountAddresses - the account addresses to share with the applications. These addresses must be part of the ones shared in the `initExtension`
       * @example cy.enableAuth(1694443839903, ["7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba"])
       */
      enableAuth: (id: number, accountAddresses: string[]) => void

      /**
       * Reject a specific request
       * @param {number} id - the id of the request to reject. This id is part of the getAuthRequests object response.
       * @param {reason} reason - the reason for the rejection
       * @example cy.rejectAuth(1694443839903, "Cancelled")
       */
      rejectAuth: (id: number, reason: string) => void

      /**
       * Read the tx request queue.
       * @example cy.getTxRequests().then((txQueue) => { cy.wrap(Object.values(txQueue).length).should("eq", 1) })
       */
      getTxRequests: () => Chainable<TxRequests>

      /**
       * Authorize a specific request
       * @param {number} id - the id of the request to approve. This id is part of the getTxRequests object response.
       * @example cy.approveTx(1694443839903)
       */
      approveTx: (id: number) => void

      /**
       * Reject a specific request
       * @param {number} id - the id of the tx request to reject. This id is part of the getTxRequests object response.
       * @param {reason} reason - the reason for the rejection
       * @example cy.rejectAuth(1694443839903, "Cancelled")
       */
      rejectTx: (id: number, reason: string) => void

      // =============== Multix specific commands ===============

      /**
       * Reject all pending multisig requests with a specific account
       * @param {InjectedAccountWitMnemonic} opt.account - The account to reject pending transactions with. It should be the proposer
       * @param {multisigInfo} opt.multisigInfo - The information about the multisig to remove pending transactions from
       * @param {WSendpoint} opt.WSendpoint - The RPC endpoint to connect to to submit the rejection batch transaction
       */
      rejectCurrentMultisigTx: (opt: {
        account: InjectedAccountWitMnemonic
        multisigInfo: MultisigInfo
        WSendpoint: string
      }) => void

      /**
       * Connect accounts to Multix and wait until it's ready
       * @param {string[]} accountAddresses - The addresses expected to be shared to the Dapp. These accounts must be passed to initExtension before
       * @example cy.connectAccounts([7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba])
       */
      connectAccounts: (accountAddresses?: string[]) => void

      /**
       * Visit a websit by setting certain localStorage item
       * @param {Object} params - The parameters to pass
       * @param {string} params.url - Url to visit
       * @param {string[]} params.watchedAccounts - List of public keys of accounts to watch
       * @param {{[publicKey: string]: string}} params.accountNames - Object of addresses associated to names
       * @param {boolean} params.extensionConnectionAllowed - whether the extension was previously allowed to connect to the website
       * @param {InjectedAccountWitMnemonic} params.injectExtensionWithAccounts - Init and inject these account
       * @example cy.setupAndVisit({
       *            injectExtensionWithAccounts: [],
       *            extensionConnectionAllowed: false,
       *            url: http://localhost:3333,
       *            watchedAccounts: ['0x0c691601793de060491dab143dfae19f5f6413d4ce4c363637e5ceacb2836a4e'],
       *            watchedAccounts: {"0x0c691601793de060491dab143dfae19f5f6413d4ce4c363637e5ceacb2836a4e":"my custom name"}
       *          })
       */
      setupAndVisit: (params: IsetupAndVisit) => void
    }
  }
}
