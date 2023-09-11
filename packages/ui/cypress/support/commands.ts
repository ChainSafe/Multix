/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />

import '@testing-library/cypress/add-commands'
import { AuthRequests, Extension } from './Extension'
import { Injected } from '@polkadot/extension-inject/types'
import { injectedAccounts } from '../fixtures/injectedAccounts'
// import { enable, handleResponse, redirectIfPhishing } from '@polkadot/extension-base/page'

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

const extension = new Extension(injectedAccounts)

Cypress.Commands.add('initExtension', () => {
  cy.log('initExtension called')
  cy.window().then((win) => {
    // const extension = new Extension(injectedAccounts)
    Object.defineProperty(win, 'injectedWeb3', {
      get: () => extension.get()
    })

    console.log('win', win)
  })
  //   cy.on('window:before:load', (win) => {
  //     const extension = new Extension()
  //     // inject polkadot object in the global window
  //     // Object.defineProperty(win, 'injectedWeb3', {
  //     //   get: () => extension.get()
  //     // })

  //     Object.defineProperty(win, 'bla', {
  //       get: () => {
  //         return console.log('bla')
  //       }
  //     })
  //   })
})

Cypress.Commands.add('getAuthRequests', () => {
  return cy.wrap(extension.getAuthRequests())
})

Cypress.Commands.add('enableAuth', (timestamp: number) => {
  return cy.wrap(extension.enableAuth(timestamp))
})

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Login using Metamask to an instance of Files.
       * @param {String} options.url - (default: "http://localhost:3000") - what url to visit.
       * @example cy.web3Login()
       */
      initExtension: () => void
      getAuthRequests: () => Chainable<AuthRequests>
      enableAuth: (timestamp: number) => void
    }
  }
}
