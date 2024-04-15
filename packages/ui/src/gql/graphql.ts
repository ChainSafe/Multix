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
  address: Scalars['String']['output'];
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
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  MultisigAddressAsc = 'multisig_address_ASC',
  MultisigAddressAscNullsFirst = 'multisig_address_ASC_NULLS_FIRST',
  MultisigAddressDesc = 'multisig_address_DESC',
  MultisigAddressDescNullsLast = 'multisig_address_DESC_NULLS_LAST',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdAscNullsFirst = 'multisig_id_ASC_NULLS_FIRST',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigIdDescNullsLast = 'multisig_id_DESC_NULLS_LAST',
  MultisigIsMultisigAsc = 'multisig_isMultisig_ASC',
  MultisigIsMultisigAscNullsFirst = 'multisig_isMultisig_ASC_NULLS_FIRST',
  MultisigIsMultisigDesc = 'multisig_isMultisig_DESC',
  MultisigIsMultisigDescNullsLast = 'multisig_isMultisig_DESC_NULLS_LAST',
  MultisigIsPureProxyAsc = 'multisig_isPureProxy_ASC',
  MultisigIsPureProxyAscNullsFirst = 'multisig_isPureProxy_ASC_NULLS_FIRST',
  MultisigIsPureProxyDesc = 'multisig_isPureProxy_DESC',
  MultisigIsPureProxyDescNullsLast = 'multisig_isPureProxy_DESC_NULLS_LAST',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdAscNullsFirst = 'multisig_threshold_ASC_NULLS_FIRST',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  MultisigThresholdDescNullsLast = 'multisig_threshold_DESC_NULLS_LAST',
  SignatoryAddressAsc = 'signatory_address_ASC',
  SignatoryAddressAscNullsFirst = 'signatory_address_ASC_NULLS_FIRST',
  SignatoryAddressDesc = 'signatory_address_DESC',
  SignatoryAddressDescNullsLast = 'signatory_address_DESC_NULLS_LAST',
  SignatoryIdAsc = 'signatory_id_ASC',
  SignatoryIdAscNullsFirst = 'signatory_id_ASC_NULLS_FIRST',
  SignatoryIdDesc = 'signatory_id_DESC',
  SignatoryIdDescNullsLast = 'signatory_id_DESC_NULLS_LAST',
  SignatoryIsMultisigAsc = 'signatory_isMultisig_ASC',
  SignatoryIsMultisigAscNullsFirst = 'signatory_isMultisig_ASC_NULLS_FIRST',
  SignatoryIsMultisigDesc = 'signatory_isMultisig_DESC',
  SignatoryIsMultisigDescNullsLast = 'signatory_isMultisig_DESC_NULLS_LAST',
  SignatoryIsPureProxyAsc = 'signatory_isPureProxy_ASC',
  SignatoryIsPureProxyAscNullsFirst = 'signatory_isPureProxy_ASC_NULLS_FIRST',
  SignatoryIsPureProxyDesc = 'signatory_isPureProxy_DESC',
  SignatoryIsPureProxyDescNullsLast = 'signatory_isPureProxy_DESC_NULLS_LAST',
  SignatoryThresholdAsc = 'signatory_threshold_ASC',
  SignatoryThresholdAscNullsFirst = 'signatory_threshold_ASC_NULLS_FIRST',
  SignatoryThresholdDesc = 'signatory_threshold_DESC',
  SignatoryThresholdDescNullsLast = 'signatory_threshold_DESC_NULLS_LAST'
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
  AddressAsc = 'address_ASC',
  AddressAscNullsFirst = 'address_ASC_NULLS_FIRST',
  AddressDesc = 'address_DESC',
  AddressDescNullsLast = 'address_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  IsMultisigAsc = 'isMultisig_ASC',
  IsMultisigAscNullsFirst = 'isMultisig_ASC_NULLS_FIRST',
  IsMultisigDesc = 'isMultisig_DESC',
  IsMultisigDescNullsLast = 'isMultisig_DESC_NULLS_LAST',
  IsPureProxyAsc = 'isPureProxy_ASC',
  IsPureProxyAscNullsFirst = 'isPureProxy_ASC_NULLS_FIRST',
  IsPureProxyDesc = 'isPureProxy_DESC',
  IsPureProxyDescNullsLast = 'isPureProxy_DESC_NULLS_LAST',
  ThresholdAsc = 'threshold_ASC',
  ThresholdAscNullsFirst = 'threshold_ASC_NULLS_FIRST',
  ThresholdDesc = 'threshold_DESC',
  ThresholdDescNullsLast = 'threshold_DESC_NULLS_LAST'
}

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_eq?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  address_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  address_not_eq?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  address_startsWith?: InputMaybe<Scalars['String']['input']>;
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
  BlockHashAscNullsFirst = 'blockHash_ASC_NULLS_FIRST',
  BlockHashDesc = 'blockHash_DESC',
  BlockHashDescNullsLast = 'blockHash_DESC_NULLS_LAST',
  CallIndexAsc = 'callIndex_ASC',
  CallIndexAscNullsFirst = 'callIndex_ASC_NULLS_FIRST',
  CallIndexDesc = 'callIndex_DESC',
  CallIndexDescNullsLast = 'callIndex_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  MultisigAddressAsc = 'multisig_address_ASC',
  MultisigAddressAscNullsFirst = 'multisig_address_ASC_NULLS_FIRST',
  MultisigAddressDesc = 'multisig_address_DESC',
  MultisigAddressDescNullsLast = 'multisig_address_DESC_NULLS_LAST',
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdAscNullsFirst = 'multisig_id_ASC_NULLS_FIRST',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigIdDescNullsLast = 'multisig_id_DESC_NULLS_LAST',
  MultisigIsMultisigAsc = 'multisig_isMultisig_ASC',
  MultisigIsMultisigAscNullsFirst = 'multisig_isMultisig_ASC_NULLS_FIRST',
  MultisigIsMultisigDesc = 'multisig_isMultisig_DESC',
  MultisigIsMultisigDescNullsLast = 'multisig_isMultisig_DESC_NULLS_LAST',
  MultisigIsPureProxyAsc = 'multisig_isPureProxy_ASC',
  MultisigIsPureProxyAscNullsFirst = 'multisig_isPureProxy_ASC_NULLS_FIRST',
  MultisigIsPureProxyDesc = 'multisig_isPureProxy_DESC',
  MultisigIsPureProxyDescNullsLast = 'multisig_isPureProxy_DESC_NULLS_LAST',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdAscNullsFirst = 'multisig_threshold_ASC_NULLS_FIRST',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  MultisigThresholdDescNullsLast = 'multisig_threshold_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST'
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
  creationBlockNumber?: Maybe<Scalars['Int']['output']>;
  delay: Scalars['Int']['output'];
  delegatee: Account;
  delegator: Account;
  extrinsicIndex?: Maybe<Scalars['Int']['output']>;
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
  CreatedAtAscNullsFirst = 'createdAt_ASC_NULLS_FIRST',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedAtDescNullsLast = 'createdAt_DESC_NULLS_LAST',
  CreationBlockNumberAsc = 'creationBlockNumber_ASC',
  CreationBlockNumberAscNullsFirst = 'creationBlockNumber_ASC_NULLS_FIRST',
  CreationBlockNumberDesc = 'creationBlockNumber_DESC',
  CreationBlockNumberDescNullsLast = 'creationBlockNumber_DESC_NULLS_LAST',
  DelayAsc = 'delay_ASC',
  DelayAscNullsFirst = 'delay_ASC_NULLS_FIRST',
  DelayDesc = 'delay_DESC',
  DelayDescNullsLast = 'delay_DESC_NULLS_LAST',
  DelegateeAddressAsc = 'delegatee_address_ASC',
  DelegateeAddressAscNullsFirst = 'delegatee_address_ASC_NULLS_FIRST',
  DelegateeAddressDesc = 'delegatee_address_DESC',
  DelegateeAddressDescNullsLast = 'delegatee_address_DESC_NULLS_LAST',
  DelegateeIdAsc = 'delegatee_id_ASC',
  DelegateeIdAscNullsFirst = 'delegatee_id_ASC_NULLS_FIRST',
  DelegateeIdDesc = 'delegatee_id_DESC',
  DelegateeIdDescNullsLast = 'delegatee_id_DESC_NULLS_LAST',
  DelegateeIsMultisigAsc = 'delegatee_isMultisig_ASC',
  DelegateeIsMultisigAscNullsFirst = 'delegatee_isMultisig_ASC_NULLS_FIRST',
  DelegateeIsMultisigDesc = 'delegatee_isMultisig_DESC',
  DelegateeIsMultisigDescNullsLast = 'delegatee_isMultisig_DESC_NULLS_LAST',
  DelegateeIsPureProxyAsc = 'delegatee_isPureProxy_ASC',
  DelegateeIsPureProxyAscNullsFirst = 'delegatee_isPureProxy_ASC_NULLS_FIRST',
  DelegateeIsPureProxyDesc = 'delegatee_isPureProxy_DESC',
  DelegateeIsPureProxyDescNullsLast = 'delegatee_isPureProxy_DESC_NULLS_LAST',
  DelegateeThresholdAsc = 'delegatee_threshold_ASC',
  DelegateeThresholdAscNullsFirst = 'delegatee_threshold_ASC_NULLS_FIRST',
  DelegateeThresholdDesc = 'delegatee_threshold_DESC',
  DelegateeThresholdDescNullsLast = 'delegatee_threshold_DESC_NULLS_LAST',
  DelegatorAddressAsc = 'delegator_address_ASC',
  DelegatorAddressAscNullsFirst = 'delegator_address_ASC_NULLS_FIRST',
  DelegatorAddressDesc = 'delegator_address_DESC',
  DelegatorAddressDescNullsLast = 'delegator_address_DESC_NULLS_LAST',
  DelegatorIdAsc = 'delegator_id_ASC',
  DelegatorIdAscNullsFirst = 'delegator_id_ASC_NULLS_FIRST',
  DelegatorIdDesc = 'delegator_id_DESC',
  DelegatorIdDescNullsLast = 'delegator_id_DESC_NULLS_LAST',
  DelegatorIsMultisigAsc = 'delegator_isMultisig_ASC',
  DelegatorIsMultisigAscNullsFirst = 'delegator_isMultisig_ASC_NULLS_FIRST',
  DelegatorIsMultisigDesc = 'delegator_isMultisig_DESC',
  DelegatorIsMultisigDescNullsLast = 'delegator_isMultisig_DESC_NULLS_LAST',
  DelegatorIsPureProxyAsc = 'delegator_isPureProxy_ASC',
  DelegatorIsPureProxyAscNullsFirst = 'delegator_isPureProxy_ASC_NULLS_FIRST',
  DelegatorIsPureProxyDesc = 'delegator_isPureProxy_DESC',
  DelegatorIsPureProxyDescNullsLast = 'delegator_isPureProxy_DESC_NULLS_LAST',
  DelegatorThresholdAsc = 'delegator_threshold_ASC',
  DelegatorThresholdAscNullsFirst = 'delegator_threshold_ASC_NULLS_FIRST',
  DelegatorThresholdDesc = 'delegator_threshold_DESC',
  DelegatorThresholdDescNullsLast = 'delegator_threshold_DESC_NULLS_LAST',
  ExtrinsicIndexAsc = 'extrinsicIndex_ASC',
  ExtrinsicIndexAscNullsFirst = 'extrinsicIndex_ASC_NULLS_FIRST',
  ExtrinsicIndexDesc = 'extrinsicIndex_DESC',
  ExtrinsicIndexDescNullsLast = 'extrinsicIndex_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdDesc = 'id_DESC',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  TypeAsc = 'type_ASC',
  TypeAscNullsFirst = 'type_ASC_NULLS_FIRST',
  TypeDesc = 'type_DESC',
  TypeDescNullsLast = 'type_DESC_NULLS_LAST'
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
  creationBlockNumber_eq?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  creationBlockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  creationBlockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_not_eq?: InputMaybe<Scalars['Int']['input']>;
  creationBlockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  extrinsicIndex_eq?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  extrinsicIndex_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  extrinsicIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_not_eq?: InputMaybe<Scalars['Int']['input']>;
  extrinsicIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  Unknown = 'Unknown'
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

export type WhereIdInput = {
  id: Scalars['String']['input'];
};

export type MultisigByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type MultisigByIdQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', threshold?: number | null, id: string, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', id: string, address: string } }> }> };

export type MultisigCallsByMultisigIdQueryVariables = Exact<{
  multisigs?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type MultisigCallsByMultisigIdQuery = { __typename?: 'Query', multisigCalls: Array<{ __typename?: 'MultisigCall', blockHash: string, callIndex: number, id: string, timestamp: any }> };

export type MultisigsByMultisigOrPureSignatoriesQueryVariables = Exact<{
  accountIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type MultisigsByMultisigOrPureSignatoriesQuery = { __typename?: 'Query', accountMultisigs: Array<{ __typename?: 'AccountMultisig', multisig: { __typename?: 'Account', address: string, threshold?: number | null, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', address: string } }> } }> };

export type MultisigsBySignatoriesOrWatchedQueryVariables = Exact<{
  accountIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  watchedAccountIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type MultisigsBySignatoriesOrWatchedQuery = { __typename?: 'Query', accountMultisigs: Array<{ __typename?: 'AccountMultisig', multisig: { __typename?: 'Account', address: string, threshold?: number | null, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', address: string } }>, delegateeFor: Array<{ __typename?: 'ProxyAccount', type: ProxyType, delegator: { __typename?: 'Account', address: string, isPureProxy?: boolean | null } }> } }> };

export type PureByIdsQueryQueryVariables = Exact<{
  pureIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type PureByIdsQueryQuery = { __typename?: 'Query', accounts: Array<{ __typename?: 'Account', address: string, delegatorFor: Array<{ __typename?: 'ProxyAccount', id: string, type: ProxyType, delegatee: { __typename?: 'Account', address: string, isMultisig?: boolean | null, threshold?: number | null, signatories: Array<{ __typename?: 'AccountMultisig', signatory: { __typename?: 'Account', address: string } }> } }> }> };


export const MultisigByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"isMultisig_eq"},"value":{"kind":"BooleanValue","value":true}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<MultisigByIdQuery, MultisigByIdQueryVariables>;
export const MultisigCallsByMultisigIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigCallsByMultisigId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"multisigs"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisigCalls"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"timestamp_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"multisig"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"multisigs"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blockHash"}},{"kind":"Field","name":{"kind":"Name","value":"callIndex"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}}]} as unknown as DocumentNode<MultisigCallsByMultisigIdQuery, MultisigCallsByMultisigIdQueryVariables>;
export const MultisigsByMultisigOrPureSignatoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"multisigsByMultisigOrPureSignatories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountMultisigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signatory"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountIds"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"signatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MultisigsByMultisigOrPureSignatoriesQuery, MultisigsByMultisigOrPureSignatoriesQueryVariables>;
export const MultisigsBySignatoriesOrWatchedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigsBySignatoriesOrWatched"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"watchedAccountIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accountMultisigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"multisig"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"watchedAccountIds"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signatory"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountIds"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signatory"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"watchedAccountIds"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"500"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"signatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"delegateeFor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"delegator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isPureProxy"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<MultisigsBySignatoriesOrWatchedQuery, MultisigsBySignatoriesOrWatchedQueryVariables>;
export const PureByIdsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PureByIdsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pureIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"AND"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pureIds"}}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isPureProxy_eq"},"value":{"kind":"BooleanValue","value":true}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"delegatorFor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"delegatee"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"isMultisig"}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}},{"kind":"Field","name":{"kind":"Name","value":"signatories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signatory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<PureByIdsQueryQuery, PureByIdsQueryQueryVariables>;