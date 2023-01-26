/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  multisigs: Array<AccountMultisig>;
};


export type AccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String'];
  node: Account;
};

export type AccountMultisig = {
  __typename?: 'AccountMultisig';
  id: Scalars['String'];
  multisig: Multisig;
  signer: Account;
};

export type AccountMultisigEdge = {
  __typename?: 'AccountMultisigEdge';
  cursor: Scalars['String'];
  node: AccountMultisig;
};

export enum AccountMultisigOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MultisigCreatedAtAsc = 'multisig_createdAt_ASC',
  MultisigCreatedAtDesc = 'multisig_createdAt_DESC',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  SignerIdAsc = 'signer_id_ASC',
  SignerIdDesc = 'signer_id_DESC'
}

export type AccountMultisigWhereInput = {
  AND?: InputMaybe<Array<AccountMultisigWhereInput>>;
  OR?: InputMaybe<Array<AccountMultisigWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  multisig?: InputMaybe<MultisigWhereInput>;
  multisig_isNull?: InputMaybe<Scalars['Boolean']>;
  signer?: InputMaybe<AccountWhereInput>;
  signer_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type AccountMultisigsConnection = {
  __typename?: 'AccountMultisigsConnection';
  edges: Array<AccountMultisigEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  multisigs_every?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_none?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_some?: InputMaybe<AccountMultisigWhereInput>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Multisig = {
  __typename?: 'Multisig';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  multisigsCalls: Array<MultisigCall>;
  proxy?: Maybe<Account>;
  signers: Array<AccountMultisig>;
  threshold: Scalars['Int'];
};


export type MultisigMultisigsCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type MultisigSignersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};

export type MultisigCall = {
  __typename?: 'MultisigCall';
  blockHash: Scalars['String'];
  callIndex: Scalars['Int'];
  id: Scalars['String'];
  multisig?: Maybe<Multisig>;
  timestamp: Scalars['DateTime'];
};

export type MultisigCallEdge = {
  __typename?: 'MultisigCallEdge';
  cursor: Scalars['String'];
  node: MultisigCall;
};

export enum MultisigCallOrderByInput {
  BlockHashAsc = 'blockHash_ASC',
  BlockHashDesc = 'blockHash_DESC',
  CallIndexAsc = 'callIndex_ASC',
  CallIndexDesc = 'callIndex_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MultisigCreatedAtAsc = 'multisig_createdAt_ASC',
  MultisigCreatedAtDesc = 'multisig_createdAt_DESC',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type MultisigCallWhereInput = {
  AND?: InputMaybe<Array<MultisigCallWhereInput>>;
  OR?: InputMaybe<Array<MultisigCallWhereInput>>;
  blockHash_contains?: InputMaybe<Scalars['String']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_eq?: InputMaybe<Scalars['String']>;
  blockHash_gt?: InputMaybe<Scalars['String']>;
  blockHash_gte?: InputMaybe<Scalars['String']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_isNull?: InputMaybe<Scalars['Boolean']>;
  blockHash_lt?: InputMaybe<Scalars['String']>;
  blockHash_lte?: InputMaybe<Scalars['String']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']>;
  callIndex_eq?: InputMaybe<Scalars['Int']>;
  callIndex_gt?: InputMaybe<Scalars['Int']>;
  callIndex_gte?: InputMaybe<Scalars['Int']>;
  callIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  callIndex_isNull?: InputMaybe<Scalars['Boolean']>;
  callIndex_lt?: InputMaybe<Scalars['Int']>;
  callIndex_lte?: InputMaybe<Scalars['Int']>;
  callIndex_not_eq?: InputMaybe<Scalars['Int']>;
  callIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  multisig?: InputMaybe<MultisigWhereInput>;
  multisig_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type MultisigCallsConnection = {
  __typename?: 'MultisigCallsConnection';
  edges: Array<MultisigCallEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MultisigEdge = {
  __typename?: 'MultisigEdge';
  cursor: Scalars['String'];
  node: Multisig;
};

export enum MultisigOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ProxyIdAsc = 'proxy_id_ASC',
  ProxyIdDesc = 'proxy_id_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC'
}

export type MultisigWhereInput = {
  AND?: InputMaybe<Array<MultisigWhereInput>>;
  OR?: InputMaybe<Array<MultisigWhereInput>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  multisigsCalls_every?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_none?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_some?: InputMaybe<MultisigCallWhereInput>;
  proxy?: InputMaybe<AccountWhereInput>;
  proxy_isNull?: InputMaybe<Scalars['Boolean']>;
  signers_every?: InputMaybe<AccountMultisigWhereInput>;
  signers_none?: InputMaybe<AccountMultisigWhereInput>;
  signers_some?: InputMaybe<AccountMultisigWhereInput>;
  threshold_eq?: InputMaybe<Scalars['Int']>;
  threshold_gt?: InputMaybe<Scalars['Int']>;
  threshold_gte?: InputMaybe<Scalars['Int']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']>>;
  threshold_isNull?: InputMaybe<Scalars['Boolean']>;
  threshold_lt?: InputMaybe<Scalars['Int']>;
  threshold_lte?: InputMaybe<Scalars['Int']>;
  threshold_not_eq?: InputMaybe<Scalars['Int']>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type MultisigsConnection = {
  __typename?: 'MultisigsConnection';
  edges: Array<MultisigEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  accountById?: Maybe<Account>;
  /** @deprecated Use accountById */
  accountByUniqueInput?: Maybe<Account>;
  accountMultisigById?: Maybe<AccountMultisig>;
  /** @deprecated Use accountMultisigById */
  accountMultisigByUniqueInput?: Maybe<AccountMultisig>;
  accountMultisigs: Array<AccountMultisig>;
  accountMultisigsConnection: AccountMultisigsConnection;
  accounts: Array<Account>;
  accountsConnection: AccountsConnection;
  multisigById?: Maybe<Multisig>;
  /** @deprecated Use multisigById */
  multisigByUniqueInput?: Maybe<Multisig>;
  multisigCallById?: Maybe<MultisigCall>;
  /** @deprecated Use multisigCallById */
  multisigCallByUniqueInput?: Maybe<MultisigCall>;
  multisigCalls: Array<MultisigCall>;
  multisigCallsConnection: MultisigCallsConnection;
  multisigs: Array<Multisig>;
  multisigsConnection: MultisigsConnection;
  squidStatus?: Maybe<SquidStatus>;
};


export type QueryAccountByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountMultisigByIdArgs = {
  id: Scalars['String'];
};


export type QueryAccountMultisigByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type QueryAccountMultisigsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountMultisigOrderByInput>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryMultisigByIdArgs = {
  id: Scalars['String'];
};


export type QueryMultisigByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMultisigCallByIdArgs = {
  id: Scalars['String'];
};


export type QueryMultisigCallByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMultisigCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type QueryMultisigCallsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<MultisigCallOrderByInput>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type QueryMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigOrderByInput>>;
  where?: InputMaybe<MultisigWhereInput>;
};


export type QueryMultisigsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<MultisigOrderByInput>;
  where?: InputMaybe<MultisigWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  accountById?: Maybe<Account>;
  accountMultisigById?: Maybe<AccountMultisig>;
  accountMultisigs: Array<AccountMultisig>;
  accounts: Array<Account>;
  multisigById?: Maybe<Multisig>;
  multisigCallById?: Maybe<MultisigCall>;
  multisigCalls: Array<MultisigCall>;
  multisigs: Array<Multisig>;
};


export type SubscriptionAccountByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionAccountMultisigByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionAccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type SubscriptionAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type SubscriptionMultisigByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionMultisigCallByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionMultisigCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type SubscriptionMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigOrderByInput>>;
  where?: InputMaybe<MultisigWhereInput>;
};

export type WhereIdInput = {
  id: Scalars['String'];
};

export type AllMultisigCallsSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type AllMultisigCallsSubscription = { __typename?: 'Subscription', multisigCalls: Array<{ __typename?: 'MultisigCall', blockHash: string, callIndex: number, id: string, timestamp: any }> };

export type MultisigsByAccountsQueryVariables = Exact<{
  accounts?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MultisigsByAccountsQuery = { __typename?: 'Query', multisigs: Array<{ __typename?: 'Multisig', id: string, createdAt: any, threshold: number, proxy?: { __typename?: 'Account', id: string } | null, signers: Array<{ __typename?: 'AccountMultisig', signer: { __typename?: 'Account', id: string } }>, multisigsCalls: Array<{ __typename?: 'MultisigCall', id: string, blockHash: string, timestamp: any, callIndex: number }> }> };


export const AllMultisigCallsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"AllMultisigCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisigCalls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"timestamp_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHash"}},{"kind":"Field","name":{"kind":"Name","value":"callIndex"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<AllMultisigCallsSubscription, AllMultisigCallsSubscriptionVariables>;
export const MultisigsByAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigsByAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signers_some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"proxy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"multisigsCalls"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"blockHash"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"callIndex"}}]}}]}}]}}]} as unknown as DocumentNode<MultisigsByAccountsQuery, MultisigsByAccountsQueryVariables>;