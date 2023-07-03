/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string in simplified extended ISO 8601 format (YYYY-MM-DDTHH:mm:ss.sssZ) */
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  delegateeFor: Array<ProxyAccount>;
  delegatorFor: Array<ProxyAccount>;
  id: Scalars['String']['output'];
  isMultisig?: Maybe<Scalars['Boolean']['output']>;
  isPureProxy?: Maybe<Scalars['Boolean']['output']>;
  multisigs: Array<AccountMultisig>;
  multisigsCalls: Array<MultisigCall>;
  signatories: Array<AccountMultisig>;
  threshold?: Maybe<Scalars['Int']['output']>;
};


export type AccountDelegateeForArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};


export type AccountDelegatorForArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};


export type AccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type AccountMultisigsCallsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type AccountSignatoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String']['output'];
  node: Account;
};

export type AccountMultisig = {
  __typename?: 'AccountMultisig';
  id: Scalars['String']['output'];
  multisig: Account;
  signatory: Account;
};

export type AccountMultisigEdge = {
  __typename?: 'AccountMultisigEdge';
  cursor: Scalars['String']['output'];
  node: AccountMultisig;
};

export enum AccountMultisigOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigIsMultisigAsc = 'multisig_isMultisig_ASC',
  MultisigIsMultisigDesc = 'multisig_isMultisig_DESC',
  MultisigIsPureProxyAsc = 'multisig_isPureProxy_ASC',
  MultisigIsPureProxyDesc = 'multisig_isPureProxy_DESC',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  SignatoryIdAsc = 'signatory_id_ASC',
  SignatoryIdDesc = 'signatory_id_DESC',
  SignatoryIsMultisigAsc = 'signatory_isMultisig_ASC',
  SignatoryIsMultisigDesc = 'signatory_isMultisig_DESC',
  SignatoryIsPureProxyAsc = 'signatory_isPureProxy_ASC',
  SignatoryIsPureProxyDesc = 'signatory_isPureProxy_DESC',
  SignatoryThresholdAsc = 'signatory_threshold_ASC',
  SignatoryThresholdDesc = 'signatory_threshold_DESC'
}

export type AccountMultisigWhereInput = {
  AND?: InputMaybe<Array<AccountMultisigWhereInput>>;
  OR?: InputMaybe<Array<AccountMultisigWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  multisig?: InputMaybe<AccountWhereInput>;
  multisig_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  signatory?: InputMaybe<AccountWhereInput>;
  signatory_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountMultisigsConnection = {
  __typename?: 'AccountMultisigsConnection';
  edges: Array<AccountMultisigEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsMultisigAsc = 'isMultisig_ASC',
  IsMultisigDesc = 'isMultisig_DESC',
  IsPureProxyAsc = 'isPureProxy_ASC',
  IsPureProxyDesc = 'isPureProxy_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  delegateeFor_every?: InputMaybe<ProxyAccountWhereInput>;
  delegateeFor_none?: InputMaybe<ProxyAccountWhereInput>;
  delegateeFor_some?: InputMaybe<ProxyAccountWhereInput>;
  delegatorFor_every?: InputMaybe<ProxyAccountWhereInput>;
  delegatorFor_none?: InputMaybe<ProxyAccountWhereInput>;
  delegatorFor_some?: InputMaybe<ProxyAccountWhereInput>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  isMultisig_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isMultisig_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isMultisig_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPureProxy_eq?: InputMaybe<Scalars['Boolean']['input']>;
  isPureProxy_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  isPureProxy_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  multisigsCalls_every?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_none?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_some?: InputMaybe<MultisigCallWhereInput>;
  multisigs_every?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_none?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_some?: InputMaybe<AccountMultisigWhereInput>;
  signatories_every?: InputMaybe<AccountMultisigWhereInput>;
  signatories_none?: InputMaybe<AccountMultisigWhereInput>;
  signatories_some?: InputMaybe<AccountMultisigWhereInput>;
  threshold_eq?: InputMaybe<Scalars['Int']['input']>;
  threshold_gt?: InputMaybe<Scalars['Int']['input']>;
  threshold_gte?: InputMaybe<Scalars['Int']['input']>;
  threshold_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  threshold_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  threshold_lt?: InputMaybe<Scalars['Int']['input']>;
  threshold_lte?: InputMaybe<Scalars['Int']['input']>;
  threshold_not_eq?: InputMaybe<Scalars['Int']['input']>;
  threshold_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MultisigCall = {
  __typename?: 'MultisigCall';
  blockHash: Scalars['String']['output'];
  callIndex: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  multisig?: Maybe<Account>;
  timestamp: Scalars['DateTime']['output'];
};

export type MultisigCallEdge = {
  __typename?: 'MultisigCallEdge';
  cursor: Scalars['String']['output'];
  node: MultisigCall;
};

export enum MultisigCallOrderByInput {
  BlockHashAsc = 'blockHash_ASC',
  BlockHashDesc = 'blockHash_DESC',
  CallIndexAsc = 'callIndex_ASC',
  CallIndexDesc = 'callIndex_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigIsMultisigAsc = 'multisig_isMultisig_ASC',
  MultisigIsMultisigDesc = 'multisig_isMultisig_DESC',
  MultisigIsPureProxyAsc = 'multisig_isPureProxy_ASC',
  MultisigIsPureProxyDesc = 'multisig_isPureProxy_DESC',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type MultisigCallWhereInput = {
  AND?: InputMaybe<Array<MultisigCallWhereInput>>;
  OR?: InputMaybe<Array<MultisigCallWhereInput>>;
  blockHash_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  blockHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_eq?: InputMaybe<Scalars['String']['input']>;
  blockHash_gt?: InputMaybe<Scalars['String']['input']>;
  blockHash_gte?: InputMaybe<Scalars['String']['input']>;
  blockHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  blockHash_lt?: InputMaybe<Scalars['String']['input']>;
  blockHash_lte?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  blockHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  blockHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  blockHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  callIndex_eq?: InputMaybe<Scalars['Int']['input']>;
  callIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  callIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  callIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  callIndex_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  callIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  callIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  callIndex_not_eq?: InputMaybe<Scalars['Int']['input']>;
  callIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  multisig?: InputMaybe<AccountWhereInput>;
  multisig_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_gte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type MultisigCallsConnection = {
  __typename?: 'MultisigCallsConnection';
  edges: Array<MultisigCallEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type ProxyAccount = {
  __typename?: 'ProxyAccount';
  createdAt: Scalars['DateTime']['output'];
  delay: Scalars['Int']['output'];
  delegatee: Account;
  delegator: Account;
  id: Scalars['String']['output'];
  type: ProxyType;
};

export type ProxyAccountEdge = {
  __typename?: 'ProxyAccountEdge';
  cursor: Scalars['String']['output'];
  node: ProxyAccount;
};

export enum ProxyAccountOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DelayAsc = 'delay_ASC',
  DelayDesc = 'delay_DESC',
  DelegateeIdAsc = 'delegatee_id_ASC',
  DelegateeIdDesc = 'delegatee_id_DESC',
  DelegateeIsMultisigAsc = 'delegatee_isMultisig_ASC',
  DelegateeIsMultisigDesc = 'delegatee_isMultisig_DESC',
  DelegateeIsPureProxyAsc = 'delegatee_isPureProxy_ASC',
  DelegateeIsPureProxyDesc = 'delegatee_isPureProxy_DESC',
  DelegateeThresholdAsc = 'delegatee_threshold_ASC',
  DelegateeThresholdDesc = 'delegatee_threshold_DESC',
  DelegatorIdAsc = 'delegator_id_ASC',
  DelegatorIdDesc = 'delegator_id_DESC',
  DelegatorIsMultisigAsc = 'delegator_isMultisig_ASC',
  DelegatorIsMultisigDesc = 'delegator_isMultisig_DESC',
  DelegatorIsPureProxyAsc = 'delegator_isPureProxy_ASC',
  DelegatorIsPureProxyDesc = 'delegator_isPureProxy_DESC',
  DelegatorThresholdAsc = 'delegator_threshold_ASC',
  DelegatorThresholdDesc = 'delegator_threshold_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type ProxyAccountWhereInput = {
  AND?: InputMaybe<Array<ProxyAccountWhereInput>>;
  OR?: InputMaybe<Array<ProxyAccountWhereInput>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  delay_eq?: InputMaybe<Scalars['Int']['input']>;
  delay_gt?: InputMaybe<Scalars['Int']['input']>;
  delay_gte?: InputMaybe<Scalars['Int']['input']>;
  delay_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delay_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delay_lt?: InputMaybe<Scalars['Int']['input']>;
  delay_lte?: InputMaybe<Scalars['Int']['input']>;
  delay_not_eq?: InputMaybe<Scalars['Int']['input']>;
  delay_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  delegatee?: InputMaybe<AccountWhereInput>;
  delegatee_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  delegator?: InputMaybe<AccountWhereInput>;
  delegator_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<ProxyType>;
  type_in?: InputMaybe<Array<ProxyType>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_not_eq?: InputMaybe<ProxyType>;
  type_not_in?: InputMaybe<Array<ProxyType>>;
};

export type ProxyAccountsConnection = {
  __typename?: 'ProxyAccountsConnection';
  edges: Array<ProxyAccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum ProxyType {
  Any = 'Any',
  Auction = 'Auction',
  CancelProxy = 'CancelProxy',
  Governance = 'Governance',
  IdentityJudgement = 'IdentityJudgement',
  NominationPools = 'NominationPools',
  NonTransfer = 'NonTransfer',
  Society = 'Society',
  Staking = 'Staking',
  SudoBalances = 'SudoBalances',
  Unkown = 'Unkown'
}

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
  multisigCallById?: Maybe<MultisigCall>;
  /** @deprecated Use multisigCallById */
  multisigCallByUniqueInput?: Maybe<MultisigCall>;
  multisigCalls: Array<MultisigCall>;
  multisigCallsConnection: MultisigCallsConnection;
  proxyAccountById?: Maybe<ProxyAccount>;
  /** @deprecated Use proxyAccountById */
  proxyAccountByUniqueInput?: Maybe<ProxyAccount>;
  proxyAccounts: Array<ProxyAccount>;
  proxyAccountsConnection: ProxyAccountsConnection;
  squidStatus?: Maybe<SquidStatus>;
};


export type QueryAccountByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountMultisigByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryAccountMultisigByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryAccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type QueryAccountMultisigsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountMultisigOrderByInput>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type QueryAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<AccountOrderByInput>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryMultisigCallByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryMultisigCallByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMultisigCallsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type QueryMultisigCallsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MultisigCallOrderByInput>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type QueryProxyAccountByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryProxyAccountByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryProxyAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};


export type QueryProxyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<ProxyAccountOrderByInput>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  accountById?: Maybe<Account>;
  accountMultisigById?: Maybe<AccountMultisig>;
  accountMultisigs: Array<AccountMultisig>;
  accounts: Array<Account>;
  multisigCallById?: Maybe<MultisigCall>;
  multisigCalls: Array<MultisigCall>;
  proxyAccountById?: Maybe<ProxyAccount>;
  proxyAccounts: Array<ProxyAccount>;
};


export type SubscriptionAccountByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAccountMultisigByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionAccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type SubscriptionAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderByInput>>;
  where?: InputMaybe<AccountWhereInput>;
};


export type SubscriptionMultisigCallByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionMultisigCallsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};


export type SubscriptionProxyAccountByIdArgs = {
  id: Scalars['String']['input'];
};


export type SubscriptionProxyAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type MultisigByIdQueryVariables = Exact<{
  account: Scalars['String']['input'];
}>;


export type MultisigByIdQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', threshold?: number | null, id: string, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', id: string } }> }> };

export type MultisigCallsByMultisigIdSubscriptionVariables = Exact<{
  multisigs?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type MultisigCallsByMultisigIdSubscription = { __typename?: 'Subscription', multisigCalls: Array<{ __typename?: 'MultisigCall', blockHash: string, callIndex: number, id: string, timestamp: any }> };

export type MultisigsByAccountsSubscriptionVariables = Exact<{
  accounts?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  watchedAccounts?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type MultisigsByAccountsSubscription = { __typename?: 'Subscription', accounts: Array<{ __typename?: 'Account', id: string, isMultisig?: boolean | null, isPureProxy?: boolean | null, threshold?: number | null, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', id: string } }>, delegateeFor: Array<{ __typename?: 'ProxyAccount', id: string, type: ProxyType, delegator: { __typename?: 'Account', id: string, isPureProxy?: boolean | null }, delegatee: { __typename?: 'Account', id: string, isPureProxy?: boolean | null } }>, delegatorFor: Array<{ __typename?: 'ProxyAccount', id: string, type: ProxyType, delegatee: { __typename?: 'Account', id: string, isMultisig?: boolean | null, threshold?: number | null, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', id: string } }> } }> }> };


export const MultisigByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"account"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"account"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isMultisig_eq"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MultisigByIdQuery, MultisigByIdQueryVariables>;
export const MultisigCallsByMultisigIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MultisigCallsByMultisigId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"multisigs"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisigCalls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"timestamp_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"multisig"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"multisigs"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHash"}},{"kind":"Field","name":{"kind":"Name","value":"callIndex"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<MultisigCallsByMultisigIdSubscription, MultisigCallsByMultisigIdSubscriptionVariables>;
export const MultisigsByAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"MultisigsByAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"watchedAccounts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"watchedAccounts"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"AND"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isMultisig_eq"},"value":{"kind":"BooleanValue","value":true}},{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPureProxy_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signatories_some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signatory"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isMultisig"}},{"kind":"Field","name":{"kind":"Name","value":"isPureProxy"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"signatories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegateeFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"delegator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPureProxy"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegatee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPureProxy"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegatorFor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"delegatee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isMultisig"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"signatories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MultisigsByAccountsSubscription, MultisigsByAccountsSubscriptionVariables>;