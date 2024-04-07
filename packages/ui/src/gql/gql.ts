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
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    signatories(limit: 50) {\n      signatory {\n        id\n        address\n      }\n    }\n    threshold\n    id\n  }\n}": types.MultisigByIdDocument,
    "query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}": types.MultisigCallsByMultisigIdDocument,
    "query multisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 10) {\n        signatory {\n          address\n        }\n      }\n    }\n  }\n}": types.MultisigsByMultisigOrPureSignatoriesDocument,
    "query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 100) {\n        signatory {\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        type\n        delegator {\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}": types.MultisigsBySignatoriesOrWatchedDocument,
    "query PureByIdsQuery($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          signatory {\n            address\n          }\n        }\n      }\n    }\n  }\n}": types.PureByIdsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    signatories(limit: 50) {\n      signatory {\n        id\n        address\n      }\n    }\n    threshold\n    id\n  }\n}"): (typeof documents)["query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    signatories(limit: 50) {\n      signatory {\n        id\n        address\n      }\n    }\n    threshold\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}"): (typeof documents)["query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    blockHash\n    callIndex\n    id\n    timestamp\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query multisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 10) {\n        signatory {\n          address\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query multisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 10) {\n        signatory {\n          address\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 100) {\n        signatory {\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        type\n        delegator {\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    multisig {\n      address\n      threshold\n      signatories(limit: 100) {\n        signatory {\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        type\n        delegator {\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PureByIdsQuery($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          signatory {\n            address\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query PureByIdsQuery($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          signatory {\n            address\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;