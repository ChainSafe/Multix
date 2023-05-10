import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchData } from './src/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Account = {
  __typename?: 'Account';
  delegateeFor: Array<ProxyAccount>;
  delegatorFor: Array<ProxyAccount>;
  id: Scalars['String'];
  isMultisig?: Maybe<Scalars['Boolean']>;
  isPureProxy?: Maybe<Scalars['Boolean']>;
  multisigs: Array<AccountMultisig>;
  multisigsCalls: Array<MultisigCall>;
  signatories: Array<AccountMultisig>;
  threshold?: Maybe<Scalars['Int']>;
};

export type AccountDelegateeForArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type AccountDelegatorForArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type AccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};

export type AccountMultisigsCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};

export type AccountSignatoriesArgs = {
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
  multisig: Account;
  signatory: Account;
};

export type AccountMultisigEdge = {
  __typename?: 'AccountMultisigEdge';
  cursor: Scalars['String'];
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
  SignatoryThresholdDesc = 'signatory_threshold_DESC',
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
  multisig?: InputMaybe<AccountWhereInput>;
  multisig_isNull?: InputMaybe<Scalars['Boolean']>;
  signatory?: InputMaybe<AccountWhereInput>;
  signatory_isNull?: InputMaybe<Scalars['Boolean']>;
};

export type AccountMultisigsConnection = {
  __typename?: 'AccountMultisigsConnection';
  edges: Array<AccountMultisigEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum AccountOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsMultisigAsc = 'isMultisig_ASC',
  IsMultisigDesc = 'isMultisig_DESC',
  IsPureProxyAsc = 'isPureProxy_ASC',
  IsPureProxyDesc = 'isPureProxy_DESC',
  ThresholdAsc = 'threshold_ASC',
  ThresholdDesc = 'threshold_DESC',
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
  isMultisig_eq?: InputMaybe<Scalars['Boolean']>;
  isMultisig_isNull?: InputMaybe<Scalars['Boolean']>;
  isMultisig_not_eq?: InputMaybe<Scalars['Boolean']>;
  isPureProxy_eq?: InputMaybe<Scalars['Boolean']>;
  isPureProxy_isNull?: InputMaybe<Scalars['Boolean']>;
  isPureProxy_not_eq?: InputMaybe<Scalars['Boolean']>;
  multisigsCalls_every?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_none?: InputMaybe<MultisigCallWhereInput>;
  multisigsCalls_some?: InputMaybe<MultisigCallWhereInput>;
  multisigs_every?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_none?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_some?: InputMaybe<AccountMultisigWhereInput>;
  signatories_every?: InputMaybe<AccountMultisigWhereInput>;
  signatories_none?: InputMaybe<AccountMultisigWhereInput>;
  signatories_some?: InputMaybe<AccountMultisigWhereInput>;
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

export type AccountsConnection = {
  __typename?: 'AccountsConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type MultisigCall = {
  __typename?: 'MultisigCall';
  blockHash: Scalars['String'];
  callIndex: Scalars['Int'];
  id: Scalars['String'];
  multisig?: Maybe<Account>;
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
  MultisigIdAsc = 'multisig_id_ASC',
  MultisigIdDesc = 'multisig_id_DESC',
  MultisigIsMultisigAsc = 'multisig_isMultisig_ASC',
  MultisigIsMultisigDesc = 'multisig_isMultisig_DESC',
  MultisigIsPureProxyAsc = 'multisig_isPureProxy_ASC',
  MultisigIsPureProxyDesc = 'multisig_isPureProxy_DESC',
  MultisigThresholdAsc = 'multisig_threshold_ASC',
  MultisigThresholdDesc = 'multisig_threshold_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
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
  multisig?: InputMaybe<AccountWhereInput>;
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

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type ProxyAccount = {
  __typename?: 'ProxyAccount';
  createdAt: Scalars['DateTime'];
  delay: Scalars['Int'];
  delegatee: Account;
  delegator: Account;
  id: Scalars['String'];
  type: ProxyType;
};

export type ProxyAccountEdge = {
  __typename?: 'ProxyAccountEdge';
  cursor: Scalars['String'];
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
  TypeDesc = 'type_DESC',
}

export type ProxyAccountWhereInput = {
  AND?: InputMaybe<Array<ProxyAccountWhereInput>>;
  OR?: InputMaybe<Array<ProxyAccountWhereInput>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_isNull?: InputMaybe<Scalars['Boolean']>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  delay_eq?: InputMaybe<Scalars['Int']>;
  delay_gt?: InputMaybe<Scalars['Int']>;
  delay_gte?: InputMaybe<Scalars['Int']>;
  delay_in?: InputMaybe<Array<Scalars['Int']>>;
  delay_isNull?: InputMaybe<Scalars['Boolean']>;
  delay_lt?: InputMaybe<Scalars['Int']>;
  delay_lte?: InputMaybe<Scalars['Int']>;
  delay_not_eq?: InputMaybe<Scalars['Int']>;
  delay_not_in?: InputMaybe<Array<Scalars['Int']>>;
  delegatee?: InputMaybe<AccountWhereInput>;
  delegatee_isNull?: InputMaybe<Scalars['Boolean']>;
  delegator?: InputMaybe<AccountWhereInput>;
  delegator_isNull?: InputMaybe<Scalars['Boolean']>;
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
  type_eq?: InputMaybe<ProxyType>;
  type_in?: InputMaybe<Array<ProxyType>>;
  type_isNull?: InputMaybe<Scalars['Boolean']>;
  type_not_eq?: InputMaybe<ProxyType>;
  type_not_in?: InputMaybe<Array<ProxyType>>;
};

export type ProxyAccountsConnection = {
  __typename?: 'ProxyAccountsConnection';
  edges: Array<ProxyAccountEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum ProxyType {
  Any = 'Any',
  Auction = 'Auction',
  CancelProxy = 'CancelProxy',
  Governance = 'Governance',
  IdentityJudgement = 'IdentityJudgement',
  NominationPools = 'NominationPools',
  NonTransfer = 'NonTransfer',
  Staking = 'Staking',
  SudoBalances = 'SudoBalances',
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

export type QueryProxyAccountByIdArgs = {
  id: Scalars['String'];
};

export type QueryProxyAccountByUniqueInputArgs = {
  where: WhereIdInput;
};

export type QueryProxyAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type QueryProxyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<ProxyAccountOrderByInput>;
  where?: InputMaybe<ProxyAccountWhereInput>;
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
  multisigCallById?: Maybe<MultisigCall>;
  multisigCalls: Array<MultisigCall>;
  proxyAccountById?: Maybe<ProxyAccount>;
  proxyAccounts: Array<ProxyAccount>;
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

export type SubscriptionMultisigCallByIdArgs = {
  id: Scalars['String'];
};

export type SubscriptionMultisigCallsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigCallOrderByInput>>;
  where?: InputMaybe<MultisigCallWhereInput>;
};

export type SubscriptionProxyAccountByIdArgs = {
  id: Scalars['String'];
};

export type SubscriptionProxyAccountsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ProxyAccountOrderByInput>>;
  where?: InputMaybe<ProxyAccountWhereInput>;
};

export type WhereIdInput = {
  id: Scalars['String'];
};

export type MultisigByIdQueryVariables = Exact<{
  account: Scalars['String'];
}>;

export type MultisigByIdQuery = {
  __typename?: 'Query';
  accounts: Array<{
    __typename?: 'Account';
    threshold?: number | null;
    id: string;
    signatories: Array<{
      __typename?: 'AccountMultisig';
      signatory: { __typename?: 'Account'; id: string };
    }>;
  }>;
};

export type MultisigCallsByMultisigIdSubscriptionVariables = Exact<{
  multisigs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type MultisigCallsByMultisigIdSubscription = {
  __typename?: 'Subscription';
  multisigCalls: Array<{
    __typename?: 'MultisigCall';
    blockHash: string;
    callIndex: number;
    id: string;
    timestamp: any;
  }>;
};

export type MultisigsByAccountsSubscriptionVariables = Exact<{
  accounts?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;

export type MultisigsByAccountsSubscription = {
  __typename?: 'Subscription';
  accounts: Array<{
    __typename?: 'Account';
    id: string;
    isMultisig?: boolean | null;
    isPureProxy?: boolean | null;
    threshold?: number | null;
    signatories: Array<{
      __typename?: 'AccountMultisig';
      signatory: { __typename?: 'Account'; id: string };
    }>;
    delegateeFor: Array<{
      __typename?: 'ProxyAccount';
      id: string;
      type: ProxyType;
      delegator: {
        __typename?: 'Account';
        id: string;
        isPureProxy?: boolean | null;
      };
      delegatee: {
        __typename?: 'Account';
        id: string;
        isPureProxy?: boolean | null;
      };
    }>;
  }>;
};

export const MultisigByIdDocument = `
    query MultisigById($account: String!) {
  accounts(where: {id_eq: $account, isMultisig_eq: true}) {
    signatories {
      signatory {
        id
      }
    }
    threshold
    id
  }
}
    `;
export const useMultisigByIdQuery = <
  TData = MultisigByIdQuery,
  TError = unknown
>(
  variables: MultisigByIdQueryVariables,
  options?: UseQueryOptions<MultisigByIdQuery, TError, TData>
) =>
  useQuery<MultisigByIdQuery, TError, TData>(
    ['MultisigById', variables],
    fetchData<MultisigByIdQuery, MultisigByIdQueryVariables>(
      MultisigByIdDocument,
      variables
    ),
    options
  );
export const MultisigCallsByMultisigIdDocument = `
    subscription MultisigCallsByMultisigId($multisigs: [String!]) {
  multisigCalls(
    limit: 10
    orderBy: timestamp_DESC
    where: {multisig: {id_in: $multisigs}}
  ) {
    blockHash
    callIndex
    id
    timestamp
  }
}
    `;
export const MultisigsByAccountsDocument = `
    subscription MultisigsByAccounts($accounts: [String!]) {
  accounts(
    where: {AND: {isMultisig_eq: true, signatories_some: {signatory: {id_in: $accounts}}}}
  ) {
    id
    isMultisig
    isPureProxy
    threshold
    signatories {
      signatory {
        id
      }
    }
    delegateeFor {
      id
      type
      delegator {
        id
        isPureProxy
      }
      delegatee {
        id
        isPureProxy
      }
    }
  }
}
    `;
