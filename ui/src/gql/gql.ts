/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "subscription AllMultisigCalls {\n  multisigCalls(limit: 10, orderBy: timestamp_DESC) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}": types.AllMultisigCallsDocument,
    "query MultisigsByAccounts($accounts: [String!]) {\n  accounts(\n    where: {AND: {isMultisig_eq: true, signatories_some: {signatory: {id_in: $accounts}}}}\n  ) {\n    id\n    createdAt\n    isMultisig\n    isPureProxy\n    threshold\n    multisigsCalls {\n      id\n      blockHash\n      timestamp\n      callIndex\n    }\n    signatories {\n      signatory {\n        id\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        isPureProxy\n      }\n      delegatee {\n        id\n        isPureProxy\n      }\n    }\n  }\n}": types.MultisigsByAccountsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "subscription AllMultisigCalls {\n  multisigCalls(limit: 10, orderBy: timestamp_DESC) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}"): (typeof documents)["subscription AllMultisigCalls {\n  multisigCalls(limit: 10, orderBy: timestamp_DESC) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigsByAccounts($accounts: [String!]) {\n  accounts(\n    where: {AND: {isMultisig_eq: true, signatories_some: {signatory: {id_in: $accounts}}}}\n  ) {\n    id\n    createdAt\n    isMultisig\n    isPureProxy\n    threshold\n    multisigsCalls {\n      id\n      blockHash\n      timestamp\n      callIndex\n    }\n    signatories {\n      signatory {\n        id\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        isPureProxy\n      }\n      delegatee {\n        id\n        isPureProxy\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigsByAccounts($accounts: [String!]) {\n  accounts(\n    where: {AND: {isMultisig_eq: true, signatories_some: {signatory: {id_in: $accounts}}}}\n  ) {\n    id\n    createdAt\n    isMultisig\n    isPureProxy\n    threshold\n    multisigsCalls {\n      id\n      blockHash\n      timestamp\n      callIndex\n    }\n    signatories {\n      signatory {\n        id\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        isPureProxy\n      }\n      delegatee {\n        id\n        isPureProxy\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;