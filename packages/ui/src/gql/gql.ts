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
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    id\n    threshold\n    signatories(limit: 50) {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n  }\n}": types.MultisigByIdDocument,
    "query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    id\n    blockHash\n    callIndex\n    timestamp\n  }\n}": types.MultisigCallsByMultisigIdDocument,
    "query MultisigsAndPureByAccount($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accounts(\n    where: {AND: [{OR: [{id_in: $watchedAccountIds}, {signatories_some: {signatory: {id_in: $accountIds}}}, {signatories_some: {signatory: {id_in: $watchedAccountIds}}}]}, {OR: [{isMultisig_eq: true}, {isPureProxy_eq: true}]}]}\n  ) {\n    id\n    address\n    isMultisig\n    isPureProxy\n    threshold\n    signatories {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        address\n        isPureProxy\n      }\n      delegatee {\n        id\n        address\n        isPureProxy\n      }\n    }\n    delegatorFor {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}": types.MultisigsAndPureByAccountDocument,
    "query MultisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 10) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n    }\n  }\n}": types.MultisigsByMultisigOrPureSignatoriesDocument,
    "query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 100) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        id\n        type\n        delegator {\n          id\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}": types.MultisigsBySignatoriesOrWatchedDocument,
    "query PureByIds($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    id\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}": types.PureByIdsDocument,
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
export function graphql(source: "query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    id\n    threshold\n    signatories(limit: 50) {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigById($id: String!) {\n  accounts(where: {id_eq: $id, isMultisig_eq: true}) {\n    id\n    threshold\n    signatories(limit: 50) {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    id\n    blockHash\n    callIndex\n    timestamp\n  }\n}"): (typeof documents)["query MultisigCallsByMultisigId($multisigs: [String!]) {\n  multisigCalls(\n    limit: 10\n    orderBy: timestamp_DESC\n    where: {multisig: {id_in: $multisigs}}\n  ) {\n    id\n    blockHash\n    callIndex\n    timestamp\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigsAndPureByAccount($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accounts(\n    where: {AND: [{OR: [{id_in: $watchedAccountIds}, {signatories_some: {signatory: {id_in: $accountIds}}}, {signatories_some: {signatory: {id_in: $watchedAccountIds}}}]}, {OR: [{isMultisig_eq: true}, {isPureProxy_eq: true}]}]}\n  ) {\n    id\n    address\n    isMultisig\n    isPureProxy\n    threshold\n    signatories {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        address\n        isPureProxy\n      }\n      delegatee {\n        id\n        address\n        isPureProxy\n      }\n    }\n    delegatorFor {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigsAndPureByAccount($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accounts(\n    where: {AND: [{OR: [{id_in: $watchedAccountIds}, {signatories_some: {signatory: {id_in: $accountIds}}}, {signatories_some: {signatory: {id_in: $watchedAccountIds}}}]}, {OR: [{isMultisig_eq: true}, {isPureProxy_eq: true}]}]}\n  ) {\n    id\n    address\n    isMultisig\n    isPureProxy\n    threshold\n    signatories {\n      id\n      signatory {\n        id\n        address\n      }\n    }\n    delegateeFor {\n      id\n      type\n      delegator {\n        id\n        address\n        isPureProxy\n      }\n      delegatee {\n        id\n        address\n        isPureProxy\n      }\n    }\n    delegatorFor {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 10) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigsByMultisigOrPureSignatories($accountIds: [String!]) {\n  accountMultisigs(where: {signatory: {id_in: $accountIds}}, limit: 10) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 10) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 100) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        id\n        type\n        delegator {\n          id\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query MultisigsBySignatoriesOrWatched($accountIds: [String!], $watchedAccountIds: [String!]) {\n  accountMultisigs(\n    where: {OR: [{multisig: {id_in: $watchedAccountIds}}, {signatory: {id_in: $accountIds}}, {signatory: {id_in: $watchedAccountIds}}]}\n    limit: 500\n  ) {\n    id\n    multisig {\n      id\n      address\n      threshold\n      signatories(limit: 100) {\n        id\n        signatory {\n          id\n          address\n        }\n      }\n      delegateeFor(limit: 100) {\n        id\n        type\n        delegator {\n          id\n          address\n          isPureProxy\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query PureByIds($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    id\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query PureByIds($pureIds: [String!]) {\n  accounts(where: {AND: [{id_in: $pureIds}, {isPureProxy_eq: true}]}, limit: 50) {\n    id\n    address\n    delegatorFor(limit: 50) {\n      id\n      type\n      delegatee {\n        id\n        address\n        isMultisig\n        threshold\n        signatories(limit: 50) {\n          id\n          signatory {\n            id\n            address\n          }\n        }\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;