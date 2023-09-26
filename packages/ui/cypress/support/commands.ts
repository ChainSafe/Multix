/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />

import '@testing-library/cypress/add-commands'
import { AuthRequests, Extension } from './Extension'
import { InjectedAccount } from '@polkadot/extension-inject/types'
import { InjectedAccountWitMnemonic } from '../fixtures/injectedAccounts'

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

Cypress.Commands.add('initExtension', (accounts: InjectedAccountWitMnemonic[]) => {
  cy.log('Initializing extension')
  cy.wrap(extension.init(accounts))

  return cy.window().then((win) => {
    Object.defineProperty(win, 'injectedWeb3', {
      get: () => extension.getInjectedEnable()
    })
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

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Initialized the Polkadot extension.
       * @param {InjectedAccount[]} accounts - Accounts to load into the extension.
       * @example cy.initExtension([{ address: '7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba', name: 'Alice', type: 'sr25519'}])
       */
      initExtension: (accounts: InjectedAccount[]) => Chainable<AUTWindow>
      /**
       * Read the authentication request queue.
       * @example cy.getAuthRequests().then((authQueue) => { cy.wrap(Object.values(authQueue).length).should("eq", 1) })
       */
      getAuthRequests: () => Chainable<AuthRequests>
      /**
       * Authorize a specific request
       * @param {number} id - the id of the request to authorize. This is part of the getAuthRequests object response.
       * @param {string[]} accountAddresses - the account addresses to share with the applications. These addresses must be part of the ones shared in the `initExtension`
       * @example cy.enableAuth(1694443839903, ["7NPoMQbiA6trJKkjB35uk96MeJD4PGWkLQLH7k7hXEkZpiba"])
       */
      enableAuth: (id: number, accountAddresses: string[]) => void
      /**
       * Reject a specific request
       * @param {number} id - the id of the request to authorize. This is part of the getAuthRequests object response.
       * @param {reason} reason - the reason for the rejection
       * @example cy.rejectAuth(1694443839903, "Cancelled")
       */
      rejectAuth: (id: number, reason: string) => void
    }
  }
}
