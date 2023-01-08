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
  multisigsEvents: Array<MultisigEvent>;
  rmrkNfts: Array<RmrkNft>;
};


export type AccountMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};


export type AccountMultisigsEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigEventOrderByInput>>;
  where?: InputMaybe<MultisigEventWhereInput>;
};


export type AccountRmrkNftsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RmrkNftOrderByInput>>;
  where?: InputMaybe<RmrkNftWhereInput>;
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
  multisigsEvents_every?: InputMaybe<MultisigEventWhereInput>;
  multisigsEvents_none?: InputMaybe<MultisigEventWhereInput>;
  multisigsEvents_some?: InputMaybe<MultisigEventWhereInput>;
  multisigs_every?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_none?: InputMaybe<AccountMultisigWhereInput>;
  multisigs_some?: InputMaybe<AccountMultisigWhereInput>;
  rmrkNfts_every?: InputMaybe<RmrkNftWhereInput>;
  rmrkNfts_none?: InputMaybe<RmrkNftWhereInput>;
  rmrkNfts_some?: InputMaybe<RmrkNftWhereInput>;
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
  proxy?: Maybe<Account>;
  signers: Array<AccountMultisig>;
  threshold: Scalars['Int'];
};


export type MultisigSignersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountMultisigOrderByInput>>;
  where?: InputMaybe<AccountMultisigWhereInput>;
};

export type MultisigEdge = {
  __typename?: 'MultisigEdge';
  cursor: Scalars['String'];
  node: Multisig;
};

export type MultisigEvent = {
  __typename?: 'MultisigEvent';
  blockNumber: Scalars['Int'];
  caller?: Maybe<Account>;
  id: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  interaction: MultisigInteraction;
  timestamp: Scalars['DateTime'];
};

export type MultisigEventEdge = {
  __typename?: 'MultisigEventEdge';
  cursor: Scalars['String'];
  node: MultisigEvent;
};

export enum MultisigEventOrderByInput {
  BlockNumberAsc = 'blockNumber_ASC',
  BlockNumberDesc = 'blockNumber_DESC',
  CallerIdAsc = 'caller_id_ASC',
  CallerIdDesc = 'caller_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InfoAsc = 'info_ASC',
  InfoDesc = 'info_DESC',
  InteractionAsc = 'interaction_ASC',
  InteractionDesc = 'interaction_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC'
}

export type MultisigEventWhereInput = {
  AND?: InputMaybe<Array<MultisigEventWhereInput>>;
  OR?: InputMaybe<Array<MultisigEventWhereInput>>;
  blockNumber_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']>>;
  blockNumber_isNull?: InputMaybe<Scalars['Boolean']>;
  blockNumber_lt?: InputMaybe<Scalars['Int']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']>;
  blockNumber_not_eq?: InputMaybe<Scalars['Int']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']>>;
  caller?: InputMaybe<AccountWhereInput>;
  caller_isNull?: InputMaybe<Scalars['Boolean']>;
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
  info_contains?: InputMaybe<Scalars['String']>;
  info_containsInsensitive?: InputMaybe<Scalars['String']>;
  info_endsWith?: InputMaybe<Scalars['String']>;
  info_eq?: InputMaybe<Scalars['String']>;
  info_gt?: InputMaybe<Scalars['String']>;
  info_gte?: InputMaybe<Scalars['String']>;
  info_in?: InputMaybe<Array<Scalars['String']>>;
  info_isNull?: InputMaybe<Scalars['Boolean']>;
  info_lt?: InputMaybe<Scalars['String']>;
  info_lte?: InputMaybe<Scalars['String']>;
  info_not_contains?: InputMaybe<Scalars['String']>;
  info_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  info_not_endsWith?: InputMaybe<Scalars['String']>;
  info_not_eq?: InputMaybe<Scalars['String']>;
  info_not_in?: InputMaybe<Array<Scalars['String']>>;
  info_not_startsWith?: InputMaybe<Scalars['String']>;
  info_startsWith?: InputMaybe<Scalars['String']>;
  interaction_eq?: InputMaybe<MultisigInteraction>;
  interaction_in?: InputMaybe<Array<MultisigInteraction>>;
  interaction_isNull?: InputMaybe<Scalars['Boolean']>;
  interaction_not_eq?: InputMaybe<MultisigInteraction>;
  interaction_not_in?: InputMaybe<Array<MultisigInteraction>>;
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

export type MultisigEventsConnection = {
  __typename?: 'MultisigEventsConnection';
  edges: Array<MultisigEventEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export enum MultisigInteraction {
  Call = 'CALL',
  Create = 'CREATE',
  Migrate = 'MIGRATE'
}

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
  multisigEventById?: Maybe<MultisigEvent>;
  /** @deprecated Use multisigEventById */
  multisigEventByUniqueInput?: Maybe<MultisigEvent>;
  multisigEvents: Array<MultisigEvent>;
  multisigEventsConnection: MultisigEventsConnection;
  multisigs: Array<Multisig>;
  multisigsConnection: MultisigsConnection;
  rmrkNftById?: Maybe<RmrkNft>;
  /** @deprecated Use rmrkNftById */
  rmrkNftByUniqueInput?: Maybe<RmrkNft>;
  rmrkNfts: Array<RmrkNft>;
  rmrkNftsConnection: RmrkNfTsConnection;
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


export type QueryMultisigEventByIdArgs = {
  id: Scalars['String'];
};


export type QueryMultisigEventByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryMultisigEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigEventOrderByInput>>;
  where?: InputMaybe<MultisigEventWhereInput>;
};


export type QueryMultisigEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<MultisigEventOrderByInput>;
  where?: InputMaybe<MultisigEventWhereInput>;
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


export type QueryRmrkNftByIdArgs = {
  id: Scalars['String'];
};


export type QueryRmrkNftByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryRmrkNftsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RmrkNftOrderByInput>>;
  where?: InputMaybe<RmrkNftWhereInput>;
};


export type QueryRmrkNftsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<RmrkNftOrderByInput>;
  where?: InputMaybe<RmrkNftWhereInput>;
};

export type RmrkNft = {
  __typename?: 'RmrkNFT';
  children: Array<RmrkNft>;
  collection: Scalars['String'];
  id: Scalars['String'];
  metadata?: Maybe<Scalars['String']>;
  owner?: Maybe<Account>;
  parent?: Maybe<RmrkNft>;
  sn?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  transferable?: Maybe<Scalars['Boolean']>;
};


export type RmrkNftChildrenArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RmrkNftOrderByInput>>;
  where?: InputMaybe<RmrkNftWhereInput>;
};

export type RmrkNftEdge = {
  __typename?: 'RmrkNFTEdge';
  cursor: Scalars['String'];
  node: RmrkNft;
};

export enum RmrkNftOrderByInput {
  CollectionAsc = 'collection_ASC',
  CollectionDesc = 'collection_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  OwnerIdAsc = 'owner_id_ASC',
  OwnerIdDesc = 'owner_id_DESC',
  ParentCollectionAsc = 'parent_collection_ASC',
  ParentCollectionDesc = 'parent_collection_DESC',
  ParentIdAsc = 'parent_id_ASC',
  ParentIdDesc = 'parent_id_DESC',
  ParentMetadataAsc = 'parent_metadata_ASC',
  ParentMetadataDesc = 'parent_metadata_DESC',
  ParentSnAsc = 'parent_sn_ASC',
  ParentSnDesc = 'parent_sn_DESC',
  ParentSymbolAsc = 'parent_symbol_ASC',
  ParentSymbolDesc = 'parent_symbol_DESC',
  ParentTransferableAsc = 'parent_transferable_ASC',
  ParentTransferableDesc = 'parent_transferable_DESC',
  SnAsc = 'sn_ASC',
  SnDesc = 'sn_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  TransferableAsc = 'transferable_ASC',
  TransferableDesc = 'transferable_DESC'
}

export type RmrkNftWhereInput = {
  AND?: InputMaybe<Array<RmrkNftWhereInput>>;
  OR?: InputMaybe<Array<RmrkNftWhereInput>>;
  children_every?: InputMaybe<RmrkNftWhereInput>;
  children_none?: InputMaybe<RmrkNftWhereInput>;
  children_some?: InputMaybe<RmrkNftWhereInput>;
  collection_contains?: InputMaybe<Scalars['String']>;
  collection_containsInsensitive?: InputMaybe<Scalars['String']>;
  collection_endsWith?: InputMaybe<Scalars['String']>;
  collection_eq?: InputMaybe<Scalars['String']>;
  collection_gt?: InputMaybe<Scalars['String']>;
  collection_gte?: InputMaybe<Scalars['String']>;
  collection_in?: InputMaybe<Array<Scalars['String']>>;
  collection_isNull?: InputMaybe<Scalars['Boolean']>;
  collection_lt?: InputMaybe<Scalars['String']>;
  collection_lte?: InputMaybe<Scalars['String']>;
  collection_not_contains?: InputMaybe<Scalars['String']>;
  collection_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  collection_not_endsWith?: InputMaybe<Scalars['String']>;
  collection_not_eq?: InputMaybe<Scalars['String']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']>>;
  collection_not_startsWith?: InputMaybe<Scalars['String']>;
  collection_startsWith?: InputMaybe<Scalars['String']>;
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
  metadata_contains?: InputMaybe<Scalars['String']>;
  metadata_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadata_endsWith?: InputMaybe<Scalars['String']>;
  metadata_eq?: InputMaybe<Scalars['String']>;
  metadata_gt?: InputMaybe<Scalars['String']>;
  metadata_gte?: InputMaybe<Scalars['String']>;
  metadata_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_isNull?: InputMaybe<Scalars['Boolean']>;
  metadata_lt?: InputMaybe<Scalars['String']>;
  metadata_lte?: InputMaybe<Scalars['String']>;
  metadata_not_contains?: InputMaybe<Scalars['String']>;
  metadata_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadata_not_endsWith?: InputMaybe<Scalars['String']>;
  metadata_not_eq?: InputMaybe<Scalars['String']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadata_not_startsWith?: InputMaybe<Scalars['String']>;
  metadata_startsWith?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<AccountWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']>;
  parent?: InputMaybe<RmrkNftWhereInput>;
  parent_isNull?: InputMaybe<Scalars['Boolean']>;
  sn_contains?: InputMaybe<Scalars['String']>;
  sn_containsInsensitive?: InputMaybe<Scalars['String']>;
  sn_endsWith?: InputMaybe<Scalars['String']>;
  sn_eq?: InputMaybe<Scalars['String']>;
  sn_gt?: InputMaybe<Scalars['String']>;
  sn_gte?: InputMaybe<Scalars['String']>;
  sn_in?: InputMaybe<Array<Scalars['String']>>;
  sn_isNull?: InputMaybe<Scalars['Boolean']>;
  sn_lt?: InputMaybe<Scalars['String']>;
  sn_lte?: InputMaybe<Scalars['String']>;
  sn_not_contains?: InputMaybe<Scalars['String']>;
  sn_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  sn_not_endsWith?: InputMaybe<Scalars['String']>;
  sn_not_eq?: InputMaybe<Scalars['String']>;
  sn_not_in?: InputMaybe<Array<Scalars['String']>>;
  sn_not_startsWith?: InputMaybe<Scalars['String']>;
  sn_startsWith?: InputMaybe<Scalars['String']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_containsInsensitive?: InputMaybe<Scalars['String']>;
  symbol_endsWith?: InputMaybe<Scalars['String']>;
  symbol_eq?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_isNull?: InputMaybe<Scalars['Boolean']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  symbol_not_endsWith?: InputMaybe<Scalars['String']>;
  symbol_not_eq?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_startsWith?: InputMaybe<Scalars['String']>;
  symbol_startsWith?: InputMaybe<Scalars['String']>;
  transferable_eq?: InputMaybe<Scalars['Boolean']>;
  transferable_isNull?: InputMaybe<Scalars['Boolean']>;
  transferable_not_eq?: InputMaybe<Scalars['Boolean']>;
};

export type RmrkNfTsConnection = {
  __typename?: 'RmrkNFTsConnection';
  edges: Array<RmrkNftEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
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
  multisigEventById?: Maybe<MultisigEvent>;
  multisigEvents: Array<MultisigEvent>;
  multisigs: Array<Multisig>;
  rmrkNftById?: Maybe<RmrkNft>;
  rmrkNfts: Array<RmrkNft>;
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


export type SubscriptionMultisigEventByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionMultisigEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigEventOrderByInput>>;
  where?: InputMaybe<MultisigEventWhereInput>;
};


export type SubscriptionMultisigsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<MultisigOrderByInput>>;
  where?: InputMaybe<MultisigWhereInput>;
};


export type SubscriptionRmrkNftByIdArgs = {
  id: Scalars['String'];
};


export type SubscriptionRmrkNftsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<RmrkNftOrderByInput>>;
  where?: InputMaybe<RmrkNftWhereInput>;
};

export type WhereIdInput = {
  id: Scalars['String'];
};

export type MultisigsByAccountsQueryVariables = Exact<{
  accounts?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type MultisigsByAccountsQuery = { __typename?: 'Query', multisigs: Array<{ __typename?: 'Multisig', id: string, createdAt: any, threshold: number, proxy?: { __typename?: 'Account', id: string } | null, signers: Array<{ __typename?: 'AccountMultisig', signer: { __typename?: 'Account', id: string } }> }> };


export const MultisigsByAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MultisigsByAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"multisigs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signers_some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"signer"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accounts"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"proxy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"signers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"threshold"}}]}}]}}]} as unknown as DocumentNode<MultisigsByAccountsQuery, MultisigsByAccountsQueryVariables>;