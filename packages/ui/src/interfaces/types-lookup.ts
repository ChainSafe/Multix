// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BitVec, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U8aFixed, Vec, bool, i64, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { EthereumAddress } from '@polkadot/types/interfaces/eth';
import type { AccountId32, Call, H256, MultiAddress, PerU16, Perbill, Percent } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly isRootNotAllowed: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable' | 'RootNotAllowed';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly isBlocked: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable' | 'Blocked';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletSchedulerEvent (30) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (35) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletIndicesEvent (36) */
  interface PalletIndicesEvent extends Enum {
    readonly isIndexAssigned: boolean;
    readonly asIndexAssigned: {
      readonly who: AccountId32;
      readonly index: u32;
    } & Struct;
    readonly isIndexFreed: boolean;
    readonly asIndexFreed: {
      readonly index: u32;
    } & Struct;
    readonly isIndexFrozen: boolean;
    readonly asIndexFrozen: {
      readonly index: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'IndexAssigned' | 'IndexFreed' | 'IndexFrozen';
  }

  /** @name PalletBalancesEvent (37) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (38) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (39) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletStakingPalletEvent (40) */
  interface PalletStakingPalletEvent extends Enum {
    readonly isEraPaid: boolean;
    readonly asEraPaid: {
      readonly eraIndex: u32;
      readonly validatorPayout: u128;
      readonly remainder: u128;
    } & Struct;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly stash: AccountId32;
      readonly dest: PalletStakingRewardDestination;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly staker: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashReported: boolean;
    readonly asSlashReported: {
      readonly validator: AccountId32;
      readonly fraction: Perbill;
      readonly slashEra: u32;
    } & Struct;
    readonly isOldSlashingReportDiscarded: boolean;
    readonly asOldSlashingReportDiscarded: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly isStakersElected: boolean;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isKicked: boolean;
    readonly asKicked: {
      readonly nominator: AccountId32;
      readonly stash: AccountId32;
    } & Struct;
    readonly isStakingElectionFailed: boolean;
    readonly isChilled: boolean;
    readonly asChilled: {
      readonly stash: AccountId32;
    } & Struct;
    readonly isPayoutStarted: boolean;
    readonly asPayoutStarted: {
      readonly eraIndex: u32;
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isValidatorPrefsSet: boolean;
    readonly asValidatorPrefsSet: {
      readonly stash: AccountId32;
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isSnapshotVotersSizeExceeded: boolean;
    readonly asSnapshotVotersSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isSnapshotTargetsSizeExceeded: boolean;
    readonly asSnapshotTargetsSizeExceeded: {
      readonly size_: u32;
    } & Struct;
    readonly isForceEra: boolean;
    readonly asForceEra: {
      readonly mode: PalletStakingForcing;
    } & Struct;
    readonly isControllerBatchDeprecated: boolean;
    readonly asControllerBatchDeprecated: {
      readonly failures: u32;
    } & Struct;
    readonly type: 'EraPaid' | 'Rewarded' | 'Slashed' | 'SlashReported' | 'OldSlashingReportDiscarded' | 'StakersElected' | 'Bonded' | 'Unbonded' | 'Withdrawn' | 'Kicked' | 'StakingElectionFailed' | 'Chilled' | 'PayoutStarted' | 'ValidatorPrefsSet' | 'SnapshotVotersSizeExceeded' | 'SnapshotTargetsSizeExceeded' | 'ForceEra' | 'ControllerBatchDeprecated';
  }

  /** @name PalletStakingRewardDestination (41) */
  interface PalletStakingRewardDestination extends Enum {
    readonly isStaked: boolean;
    readonly isStash: boolean;
    readonly isController: boolean;
    readonly isAccount: boolean;
    readonly asAccount: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Staked' | 'Stash' | 'Controller' | 'Account' | 'None';
  }

  /** @name PalletStakingValidatorPrefs (43) */
  interface PalletStakingValidatorPrefs extends Struct {
    readonly commission: Compact<Perbill>;
    readonly blocked: bool;
  }

  /** @name PalletStakingForcing (46) */
  interface PalletStakingForcing extends Enum {
    readonly isNotForcing: boolean;
    readonly isForceNew: boolean;
    readonly isForceNone: boolean;
    readonly isForceAlways: boolean;
    readonly type: 'NotForcing' | 'ForceNew' | 'ForceNone' | 'ForceAlways';
  }

  /** @name PalletOffencesEvent (47) */
  interface PalletOffencesEvent extends Enum {
    readonly isOffence: boolean;
    readonly asOffence: {
      readonly kind: U8aFixed;
      readonly timeslot: Bytes;
    } & Struct;
    readonly type: 'Offence';
  }

  /** @name PalletSessionEvent (49) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name PalletGrandpaEvent (50) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpConsensusGrandpaAppPublic (53) */
  interface SpConsensusGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (54) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletImOnlineEvent (55) */
  interface PalletImOnlineEvent extends Enum {
    readonly isHeartbeatReceived: boolean;
    readonly asHeartbeatReceived: {
      readonly authorityId: PalletImOnlineSr25519AppSr25519Public;
    } & Struct;
    readonly isAllGood: boolean;
    readonly isSomeOffline: boolean;
    readonly asSomeOffline: {
      readonly offline: Vec<ITuple<[AccountId32, PalletStakingExposure]>>;
    } & Struct;
    readonly type: 'HeartbeatReceived' | 'AllGood' | 'SomeOffline';
  }

  /** @name PalletImOnlineSr25519AppSr25519Public (56) */
  interface PalletImOnlineSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (57) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name PalletStakingExposure (60) */
  interface PalletStakingExposure extends Struct {
    readonly total: Compact<u128>;
    readonly own: Compact<u128>;
    readonly others: Vec<PalletStakingIndividualExposure>;
  }

  /** @name PalletStakingIndividualExposure (63) */
  interface PalletStakingIndividualExposure extends Struct {
    readonly who: AccountId32;
    readonly value: Compact<u128>;
  }

  /** @name PalletTreasuryEvent (64) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly isAssetSpendApproved: boolean;
    readonly asAssetSpendApproved: {
      readonly index: u32;
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly amount: u128;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly validFrom: u32;
      readonly expireAt: u32;
    } & Struct;
    readonly isAssetSpendVoided: boolean;
    readonly asAssetSpendVoided: {
      readonly index: u32;
    } & Struct;
    readonly isPaid: boolean;
    readonly asPaid: {
      readonly index: u32;
      readonly paymentId: u64;
    } & Struct;
    readonly isPaymentFailed: boolean;
    readonly asPaymentFailed: {
      readonly index: u32;
      readonly paymentId: u64;
    } & Struct;
    readonly isSpendProcessed: boolean;
    readonly asSpendProcessed: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive' | 'AssetSpendApproved' | 'AssetSpendVoided' | 'Paid' | 'PaymentFailed' | 'SpendProcessed';
  }

  /** @name PolkadotRuntimeCommonImplsVersionedLocatableAsset (65) */
  interface PolkadotRuntimeCommonImplsVersionedLocatableAsset extends Enum {
    readonly isV3: boolean;
    readonly asV3: {
      readonly location: StagingXcmV3MultiLocation;
      readonly assetId: XcmV3MultiassetAssetId;
    } & Struct;
    readonly type: 'V3';
  }

  /** @name StagingXcmV3MultiLocation (66) */
  interface StagingXcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (67) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (68) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (71) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (73) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (74) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV3MultiassetAssetId (75) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: StagingXcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmVersionedMultiLocation (76) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: StagingXcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiLocation (77) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (78) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (79) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (80) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (82) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (83) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name PalletConvictionVotingEvent (84) */
  interface PalletConvictionVotingEvent extends Enum {
    readonly isDelegated: boolean;
    readonly asDelegated: ITuple<[AccountId32, AccountId32]>;
    readonly isUndelegated: boolean;
    readonly asUndelegated: AccountId32;
    readonly type: 'Delegated' | 'Undelegated';
  }

  /** @name PalletReferendaEvent (85) */
  interface PalletReferendaEvent extends Enum {
    readonly isSubmitted: boolean;
    readonly asSubmitted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isDecisionDepositPlaced: boolean;
    readonly asDecisionDepositPlaced: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionDepositRefunded: boolean;
    readonly asDecisionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDepositSlashed: boolean;
    readonly asDepositSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDecisionStarted: boolean;
    readonly asDecisionStarted: {
      readonly index: u32;
      readonly track: u16;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isConfirmStarted: boolean;
    readonly asConfirmStarted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmAborted: boolean;
    readonly asConfirmAborted: {
      readonly index: u32;
    } & Struct;
    readonly isConfirmed: boolean;
    readonly asConfirmed: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly index: u32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isTimedOut: boolean;
    readonly asTimedOut: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isKilled: boolean;
    readonly asKilled: {
      readonly index: u32;
      readonly tally: PalletConvictionVotingTally;
    } & Struct;
    readonly isSubmissionDepositRefunded: boolean;
    readonly asSubmissionDepositRefunded: {
      readonly index: u32;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly index: u32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Submitted' | 'DecisionDepositPlaced' | 'DecisionDepositRefunded' | 'DepositSlashed' | 'DecisionStarted' | 'ConfirmStarted' | 'ConfirmAborted' | 'Confirmed' | 'Approved' | 'Rejected' | 'TimedOut' | 'Cancelled' | 'Killed' | 'SubmissionDepositRefunded' | 'MetadataSet' | 'MetadataCleared';
  }

  /** @name FrameSupportPreimagesBounded (87) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name FrameSystemCall (89) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name PalletSchedulerCall (93) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (95) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isEnsureUpdated: boolean;
    readonly asEnsureUpdated: {
      readonly hashes: Vec<H256>;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage' | 'EnsureUpdated';
  }

  /** @name PalletBabeCall (97) */
  interface PalletBabeCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusSlotsEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isPlanConfigChange: boolean;
    readonly asPlanConfigChange: {
      readonly config: SpConsensusBabeDigestsNextConfigDescriptor;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'PlanConfigChange';
  }

  /** @name SpConsensusSlotsEquivocationProof (98) */
  interface SpConsensusSlotsEquivocationProof extends Struct {
    readonly offender: SpConsensusBabeAppPublic;
    readonly slot: u64;
    readonly firstHeader: SpRuntimeHeader;
    readonly secondHeader: SpRuntimeHeader;
  }

  /** @name SpRuntimeHeader (99) */
  interface SpRuntimeHeader extends Struct {
    readonly parentHash: H256;
    readonly number: Compact<u32>;
    readonly stateRoot: H256;
    readonly extrinsicsRoot: H256;
    readonly digest: SpRuntimeDigest;
  }

  /** @name SpConsensusBabeAppPublic (100) */
  interface SpConsensusBabeAppPublic extends SpCoreSr25519Public {}

  /** @name SpSessionMembershipProof (102) */
  interface SpSessionMembershipProof extends Struct {
    readonly session: u32;
    readonly trieNodes: Vec<Bytes>;
    readonly validatorCount: u32;
  }

  /** @name SpConsensusBabeDigestsNextConfigDescriptor (103) */
  interface SpConsensusBabeDigestsNextConfigDescriptor extends Enum {
    readonly isV1: boolean;
    readonly asV1: {
      readonly c: ITuple<[u64, u64]>;
      readonly allowedSlots: SpConsensusBabeAllowedSlots;
    } & Struct;
    readonly type: 'V1';
  }

  /** @name SpConsensusBabeAllowedSlots (105) */
  interface SpConsensusBabeAllowedSlots extends Enum {
    readonly isPrimarySlots: boolean;
    readonly isPrimaryAndSecondaryPlainSlots: boolean;
    readonly isPrimaryAndSecondaryVRFSlots: boolean;
    readonly type: 'PrimarySlots' | 'PrimaryAndSecondaryPlainSlots' | 'PrimaryAndSecondaryVRFSlots';
  }

  /** @name PalletTimestampCall (106) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletIndicesCall (107) */
  interface PalletIndicesCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly index: u32;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isFree: boolean;
    readonly asFree: {
      readonly index: u32;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly new_: MultiAddress;
      readonly index: u32;
      readonly freeze: bool;
    } & Struct;
    readonly isFreeze: boolean;
    readonly asFreeze: {
      readonly index: u32;
    } & Struct;
    readonly type: 'Claim' | 'Transfer' | 'Free' | 'ForceTransfer' | 'Freeze';
  }

  /** @name PalletBalancesCall (110) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'ForceSetBalance';
  }

  /** @name PalletStakingPalletCall (112) */
  interface PalletStakingPalletCall extends Enum {
    readonly isBond: boolean;
    readonly asBond: {
      readonly value: Compact<u128>;
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly maxAdditional: Compact<u128>;
    } & Struct;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isValidate: boolean;
    readonly asValidate: {
      readonly prefs: PalletStakingValidatorPrefs;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly targets: Vec<MultiAddress>;
    } & Struct;
    readonly isChill: boolean;
    readonly isSetPayee: boolean;
    readonly asSetPayee: {
      readonly payee: PalletStakingRewardDestination;
    } & Struct;
    readonly isSetController: boolean;
    readonly isSetValidatorCount: boolean;
    readonly asSetValidatorCount: {
      readonly new_: Compact<u32>;
    } & Struct;
    readonly isIncreaseValidatorCount: boolean;
    readonly asIncreaseValidatorCount: {
      readonly additional: Compact<u32>;
    } & Struct;
    readonly isScaleValidatorCount: boolean;
    readonly asScaleValidatorCount: {
      readonly factor: Percent;
    } & Struct;
    readonly isForceNoEras: boolean;
    readonly isForceNewEra: boolean;
    readonly isSetInvulnerables: boolean;
    readonly asSetInvulnerables: {
      readonly invulnerables: Vec<AccountId32>;
    } & Struct;
    readonly isForceUnstake: boolean;
    readonly asForceUnstake: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isForceNewEraAlways: boolean;
    readonly isCancelDeferredSlash: boolean;
    readonly asCancelDeferredSlash: {
      readonly era: u32;
      readonly slashIndices: Vec<u32>;
    } & Struct;
    readonly isPayoutStakers: boolean;
    readonly asPayoutStakers: {
      readonly validatorStash: AccountId32;
      readonly era: u32;
    } & Struct;
    readonly isRebond: boolean;
    readonly asRebond: {
      readonly value: Compact<u128>;
    } & Struct;
    readonly isReapStash: boolean;
    readonly asReapStash: {
      readonly stash: AccountId32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isKick: boolean;
    readonly asKick: {
      readonly who: Vec<MultiAddress>;
    } & Struct;
    readonly isSetStakingConfigs: boolean;
    readonly asSetStakingConfigs: {
      readonly minNominatorBond: PalletStakingPalletConfigOpU128;
      readonly minValidatorBond: PalletStakingPalletConfigOpU128;
      readonly maxNominatorCount: PalletStakingPalletConfigOpU32;
      readonly maxValidatorCount: PalletStakingPalletConfigOpU32;
      readonly chillThreshold: PalletStakingPalletConfigOpPercent;
      readonly minCommission: PalletStakingPalletConfigOpPerbill;
    } & Struct;
    readonly isChillOther: boolean;
    readonly asChillOther: {
      readonly controller: AccountId32;
    } & Struct;
    readonly isForceApplyMinCommission: boolean;
    readonly asForceApplyMinCommission: {
      readonly validatorStash: AccountId32;
    } & Struct;
    readonly isSetMinCommission: boolean;
    readonly asSetMinCommission: {
      readonly new_: Perbill;
    } & Struct;
    readonly type: 'Bond' | 'BondExtra' | 'Unbond' | 'WithdrawUnbonded' | 'Validate' | 'Nominate' | 'Chill' | 'SetPayee' | 'SetController' | 'SetValidatorCount' | 'IncreaseValidatorCount' | 'ScaleValidatorCount' | 'ForceNoEras' | 'ForceNewEra' | 'SetInvulnerables' | 'ForceUnstake' | 'ForceNewEraAlways' | 'CancelDeferredSlash' | 'PayoutStakers' | 'Rebond' | 'ReapStash' | 'Kick' | 'SetStakingConfigs' | 'ChillOther' | 'ForceApplyMinCommission' | 'SetMinCommission';
  }

  /** @name PalletStakingPalletConfigOpU128 (116) */
  interface PalletStakingPalletConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpU32 (117) */
  interface PalletStakingPalletConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPercent (118) */
  interface PalletStakingPalletConfigOpPercent extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Percent;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletStakingPalletConfigOpPerbill (119) */
  interface PalletStakingPalletConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletSessionCall (120) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: PolkadotRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name PolkadotRuntimeSessionKeys (121) */
  interface PolkadotRuntimeSessionKeys extends Struct {
    readonly grandpa: SpConsensusGrandpaAppPublic;
    readonly babe: SpConsensusBabeAppPublic;
    readonly imOnline: PalletImOnlineSr25519AppSr25519Public;
    readonly paraValidator: PolkadotPrimitivesV6ValidatorAppPublic;
    readonly paraAssignment: PolkadotPrimitivesV6AssignmentAppPublic;
    readonly authorityDiscovery: SpAuthorityDiscoveryAppPublic;
    readonly beefy: SpConsensusBeefyEcdsaCryptoPublic;
  }

  /** @name PolkadotPrimitivesV6ValidatorAppPublic (122) */
  interface PolkadotPrimitivesV6ValidatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV6AssignmentAppPublic (123) */
  interface PolkadotPrimitivesV6AssignmentAppPublic extends SpCoreSr25519Public {}

  /** @name SpAuthorityDiscoveryAppPublic (124) */
  interface SpAuthorityDiscoveryAppPublic extends SpCoreSr25519Public {}

  /** @name SpConsensusBeefyEcdsaCryptoPublic (125) */
  interface SpConsensusBeefyEcdsaCryptoPublic extends SpCoreEcdsaPublic {}

  /** @name SpCoreEcdsaPublic (126) */
  interface SpCoreEcdsaPublic extends U8aFixed {}

  /** @name PalletGrandpaCall (128) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusGrandpaEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpConsensusGrandpaEquivocationProof (129) */
  interface SpConsensusGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpConsensusGrandpaEquivocation;
  }

  /** @name SpConsensusGrandpaEquivocation (130) */
  interface SpConsensusGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (131) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (132) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpConsensusGrandpaAppSignature (133) */
  interface SpConsensusGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (134) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (137) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpConsensusGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpConsensusGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (138) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name PalletImOnlineCall (140) */
  interface PalletImOnlineCall extends Enum {
    readonly isHeartbeat: boolean;
    readonly asHeartbeat: {
      readonly heartbeat: PalletImOnlineHeartbeat;
      readonly signature: PalletImOnlineSr25519AppSr25519Signature;
    } & Struct;
    readonly type: 'Heartbeat';
  }

  /** @name PalletImOnlineHeartbeat (141) */
  interface PalletImOnlineHeartbeat extends Struct {
    readonly blockNumber: u32;
    readonly sessionIndex: u32;
    readonly authorityIndex: u32;
    readonly validatorsLen: u32;
  }

  /** @name PalletImOnlineSr25519AppSr25519Signature (142) */
  interface PalletImOnlineSr25519AppSr25519Signature extends SpCoreSr25519Signature {}

  /** @name SpCoreSr25519Signature (143) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name PalletTreasuryCall (144) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpendLocal: boolean;
    readonly asSpendLocal: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly amount: Compact<u128>;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly validFrom: Option<u32>;
    } & Struct;
    readonly isPayout: boolean;
    readonly asPayout: {
      readonly index: u32;
    } & Struct;
    readonly isCheckStatus: boolean;
    readonly asCheckStatus: {
      readonly index: u32;
    } & Struct;
    readonly isVoidSpend: boolean;
    readonly asVoidSpend: {
      readonly index: u32;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'SpendLocal' | 'RemoveApproval' | 'Spend' | 'Payout' | 'CheckStatus' | 'VoidSpend';
  }

  /** @name PalletConvictionVotingCall (146) */
  interface PalletConvictionVotingCall extends Enum {
    readonly isVote: boolean;
    readonly asVote: {
      readonly pollIndex: Compact<u32>;
      readonly vote: PalletConvictionVotingVoteAccountVote;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly class: u16;
      readonly to: MultiAddress;
      readonly conviction: PalletConvictionVotingConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly asUndelegate: {
      readonly class: u16;
    } & Struct;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly class: u16;
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly class: Option<u16>;
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly class: u16;
      readonly index: u32;
    } & Struct;
    readonly type: 'Vote' | 'Delegate' | 'Undelegate' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote';
  }

  /** @name PalletConvictionVotingVoteAccountVote (147) */
  interface PalletConvictionVotingVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly isSplitAbstain: boolean;
    readonly asSplitAbstain: {
      readonly aye: u128;
      readonly nay: u128;
      readonly abstain: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split' | 'SplitAbstain';
  }

  /** @name PalletConvictionVotingConviction (149) */
  interface PalletConvictionVotingConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletReferendaCall (151) */
  interface PalletReferendaCall extends Enum {
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly proposalOrigin: PolkadotRuntimeOriginCaller;
      readonly proposal: FrameSupportPreimagesBounded;
      readonly enactmentMoment: FrameSupportScheduleDispatchTime;
    } & Struct;
    readonly isPlaceDecisionDeposit: boolean;
    readonly asPlaceDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isRefundDecisionDeposit: boolean;
    readonly asRefundDecisionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly index: u32;
    } & Struct;
    readonly isKill: boolean;
    readonly asKill: {
      readonly index: u32;
    } & Struct;
    readonly isNudgeReferendum: boolean;
    readonly asNudgeReferendum: {
      readonly index: u32;
    } & Struct;
    readonly isOneFewerDeciding: boolean;
    readonly asOneFewerDeciding: {
      readonly track: u16;
    } & Struct;
    readonly isRefundSubmissionDeposit: boolean;
    readonly asRefundSubmissionDeposit: {
      readonly index: u32;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly index: u32;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Submit' | 'PlaceDecisionDeposit' | 'RefundDecisionDeposit' | 'Cancel' | 'Kill' | 'NudgeReferendum' | 'OneFewerDeciding' | 'RefundSubmissionDeposit' | 'SetMetadata';
  }

  /** @name PolkadotRuntimeOriginCaller (152) */
  interface PolkadotRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isOrigins: boolean;
    readonly asOrigins: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    readonly isParachainsOrigin: boolean;
    readonly asParachainsOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    readonly isXcmPallet: boolean;
    readonly asXcmPallet: PalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Origins' | 'ParachainsOrigin' | 'XcmPallet';
  }

  /** @name FrameSupportDispatchRawOrigin (153) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin (154) */
  interface PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin extends Enum {
    readonly isStakingAdmin: boolean;
    readonly isTreasurer: boolean;
    readonly isFellowshipAdmin: boolean;
    readonly isGeneralAdmin: boolean;
    readonly isAuctionAdmin: boolean;
    readonly isLeaseAdmin: boolean;
    readonly isReferendumCanceller: boolean;
    readonly isReferendumKiller: boolean;
    readonly isSmallTipper: boolean;
    readonly isBigTipper: boolean;
    readonly isSmallSpender: boolean;
    readonly isMediumSpender: boolean;
    readonly isBigSpender: boolean;
    readonly isWhitelistedCaller: boolean;
    readonly type: 'StakingAdmin' | 'Treasurer' | 'FellowshipAdmin' | 'GeneralAdmin' | 'AuctionAdmin' | 'LeaseAdmin' | 'ReferendumCanceller' | 'ReferendumKiller' | 'SmallTipper' | 'BigTipper' | 'SmallSpender' | 'MediumSpender' | 'BigSpender' | 'WhitelistedCaller';
  }

  /** @name PolkadotRuntimeParachainsOriginPalletOrigin (155) */
  interface PolkadotRuntimeParachainsOriginPalletOrigin extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: u32;
    readonly type: 'Parachain';
  }

  /** @name PalletXcmOrigin (157) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: StagingXcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: StagingXcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name SpCoreVoid (158) */
  type SpCoreVoid = Null;

  /** @name FrameSupportScheduleDispatchTime (159) */
  interface FrameSupportScheduleDispatchTime extends Enum {
    readonly isAt: boolean;
    readonly asAt: u32;
    readonly isAfter: boolean;
    readonly asAfter: u32;
    readonly type: 'At' | 'After';
  }

  /** @name PalletWhitelistCall (161) */
  interface PalletWhitelistCall extends Enum {
    readonly isWhitelistCall: boolean;
    readonly asWhitelistCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveWhitelistedCall: boolean;
    readonly asRemoveWhitelistedCall: {
      readonly callHash: H256;
    } & Struct;
    readonly isDispatchWhitelistedCall: boolean;
    readonly asDispatchWhitelistedCall: {
      readonly callHash: H256;
      readonly callEncodedLen: u32;
      readonly callWeightWitness: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isDispatchWhitelistedCallWithPreimage: boolean;
    readonly asDispatchWhitelistedCallWithPreimage: {
      readonly call: Call;
    } & Struct;
    readonly type: 'WhitelistCall' | 'RemoveWhitelistedCall' | 'DispatchWhitelistedCall' | 'DispatchWhitelistedCallWithPreimage';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletCall (162) */
  interface PolkadotRuntimeCommonClaimsPalletCall extends Enum {
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly dest: AccountId32;
      readonly ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    } & Struct;
    readonly isMintClaim: boolean;
    readonly asMintClaim: {
      readonly who: EthereumAddress;
      readonly value: u128;
      readonly vestingSchedule: Option<ITuple<[u128, u128, u32]>>;
      readonly statement: Option<PolkadotRuntimeCommonClaimsStatementKind>;
    } & Struct;
    readonly isClaimAttest: boolean;
    readonly asClaimAttest: {
      readonly dest: AccountId32;
      readonly ethereumSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
      readonly statement: Bytes;
    } & Struct;
    readonly isAttest: boolean;
    readonly asAttest: {
      readonly statement: Bytes;
    } & Struct;
    readonly isMoveClaim: boolean;
    readonly asMoveClaim: {
      readonly old: EthereumAddress;
      readonly new_: EthereumAddress;
      readonly maybePreclaim: Option<AccountId32>;
    } & Struct;
    readonly type: 'Claim' | 'MintClaim' | 'ClaimAttest' | 'Attest' | 'MoveClaim';
  }

  /** @name PolkadotRuntimeCommonClaimsEcdsaSignature (163) */
  interface PolkadotRuntimeCommonClaimsEcdsaSignature extends U8aFixed {}

  /** @name PolkadotRuntimeCommonClaimsStatementKind (169) */
  interface PolkadotRuntimeCommonClaimsStatementKind extends Enum {
    readonly isRegular: boolean;
    readonly isSaft: boolean;
    readonly type: 'Regular' | 'Saft';
  }

  /** @name PalletVestingCall (171) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (172) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletUtilityCall (173) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: PolkadotRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name PalletIdentityCall (175) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentitySimpleIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentitySimpleIdentityInfo (176) */
  interface PalletIdentitySimpleIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (213) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentitySimpleIdentityField (214) */
  interface PalletIdentitySimpleIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (215) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletProxyCall (216) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<PolkadotRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<PolkadotRuntimeProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PolkadotRuntimeProxyType (218) */
  interface PolkadotRuntimeProxyType extends Enum {
    readonly isAny: boolean;
    readonly isNonTransfer: boolean;
    readonly isGovernance: boolean;
    readonly isStaking: boolean;
    readonly isIdentityJudgement: boolean;
    readonly isCancelProxy: boolean;
    readonly isAuction: boolean;
    readonly isNominationPools: boolean;
    readonly type: 'Any' | 'NonTransfer' | 'Governance' | 'Staking' | 'IdentityJudgement' | 'CancelProxy' | 'Auction' | 'NominationPools';
  }

  /** @name PalletMultisigCall (219) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletMultisigTimepoint (221) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletBountiesCall (222) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletChildBountiesCall (223) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name PalletElectionProviderMultiPhaseCall (224) */
  interface PalletElectionProviderMultiPhaseCall extends Enum {
    readonly isSubmitUnsigned: boolean;
    readonly asSubmitUnsigned: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
      readonly witness: PalletElectionProviderMultiPhaseSolutionOrSnapshotSize;
    } & Struct;
    readonly isSetMinimumUntrustedScore: boolean;
    readonly asSetMinimumUntrustedScore: {
      readonly maybeNextScore: Option<SpNposElectionsElectionScore>;
    } & Struct;
    readonly isSetEmergencyElectionResult: boolean;
    readonly asSetEmergencyElectionResult: {
      readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    } & Struct;
    readonly isSubmit: boolean;
    readonly asSubmit: {
      readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    } & Struct;
    readonly isGovernanceFallback: boolean;
    readonly asGovernanceFallback: {
      readonly maybeMaxVoters: Option<u32>;
      readonly maybeMaxTargets: Option<u32>;
    } & Struct;
    readonly type: 'SubmitUnsigned' | 'SetMinimumUntrustedScore' | 'SetEmergencyElectionResult' | 'Submit' | 'GovernanceFallback';
  }

  /** @name PalletElectionProviderMultiPhaseRawSolution (225) */
  interface PalletElectionProviderMultiPhaseRawSolution extends Struct {
    readonly solution: PolkadotRuntimeNposCompactSolution16;
    readonly score: SpNposElectionsElectionScore;
    readonly round: u32;
  }

  /** @name PolkadotRuntimeNposCompactSolution16 (226) */
  interface PolkadotRuntimeNposCompactSolution16 extends Struct {
    readonly votes1: Vec<ITuple<[Compact<u32>, Compact<u16>]>>;
    readonly votes2: Vec<ITuple<[Compact<u32>, ITuple<[Compact<u16>, Compact<PerU16>]>, Compact<u16>]>>;
    readonly votes3: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes4: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes5: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes6: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes7: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes8: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes9: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes10: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes11: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes12: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes13: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes14: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes15: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
    readonly votes16: Vec<ITuple<[Compact<u32>, Vec<ITuple<[Compact<u16>, Compact<PerU16>]>>, Compact<u16>]>>;
  }

  /** @name SpNposElectionsElectionScore (277) */
  interface SpNposElectionsElectionScore extends Struct {
    readonly minimalStake: u128;
    readonly sumStake: u128;
    readonly sumStakeSquared: u128;
  }

  /** @name PalletElectionProviderMultiPhaseSolutionOrSnapshotSize (278) */
  interface PalletElectionProviderMultiPhaseSolutionOrSnapshotSize extends Struct {
    readonly voters: Compact<u32>;
    readonly targets: Compact<u32>;
  }

  /** @name SpNposElectionsSupport (282) */
  interface SpNposElectionsSupport extends Struct {
    readonly total: u128;
    readonly voters: Vec<ITuple<[AccountId32, u128]>>;
  }

  /** @name PalletBagsListCall (285) */
  interface PalletBagsListCall extends Enum {
    readonly isRebag: boolean;
    readonly asRebag: {
      readonly dislocated: MultiAddress;
    } & Struct;
    readonly isPutInFrontOf: boolean;
    readonly asPutInFrontOf: {
      readonly lighter: MultiAddress;
    } & Struct;
    readonly isPutInFrontOfOther: boolean;
    readonly asPutInFrontOfOther: {
      readonly heavier: MultiAddress;
      readonly lighter: MultiAddress;
    } & Struct;
    readonly type: 'Rebag' | 'PutInFrontOf' | 'PutInFrontOfOther';
  }

  /** @name PalletNominationPoolsCall (286) */
  interface PalletNominationPoolsCall extends Enum {
    readonly isJoin: boolean;
    readonly asJoin: {
      readonly amount: Compact<u128>;
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtra: boolean;
    readonly asBondExtra: {
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isClaimPayout: boolean;
    readonly isUnbond: boolean;
    readonly asUnbond: {
      readonly memberAccount: MultiAddress;
      readonly unbondingPoints: Compact<u128>;
    } & Struct;
    readonly isPoolWithdrawUnbonded: boolean;
    readonly asPoolWithdrawUnbonded: {
      readonly poolId: u32;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isWithdrawUnbonded: boolean;
    readonly asWithdrawUnbonded: {
      readonly memberAccount: MultiAddress;
      readonly numSlashingSpans: u32;
    } & Struct;
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
    } & Struct;
    readonly isCreateWithPoolId: boolean;
    readonly asCreateWithPoolId: {
      readonly amount: Compact<u128>;
      readonly root: MultiAddress;
      readonly nominator: MultiAddress;
      readonly bouncer: MultiAddress;
      readonly poolId: u32;
    } & Struct;
    readonly isNominate: boolean;
    readonly asNominate: {
      readonly poolId: u32;
      readonly validators: Vec<AccountId32>;
    } & Struct;
    readonly isSetState: boolean;
    readonly asSetState: {
      readonly poolId: u32;
      readonly state: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly poolId: u32;
      readonly metadata: Bytes;
    } & Struct;
    readonly isSetConfigs: boolean;
    readonly asSetConfigs: {
      readonly minJoinBond: PalletNominationPoolsConfigOpU128;
      readonly minCreateBond: PalletNominationPoolsConfigOpU128;
      readonly maxPools: PalletNominationPoolsConfigOpU32;
      readonly maxMembers: PalletNominationPoolsConfigOpU32;
      readonly maxMembersPerPool: PalletNominationPoolsConfigOpU32;
      readonly globalMaxCommission: PalletNominationPoolsConfigOpPerbill;
    } & Struct;
    readonly isUpdateRoles: boolean;
    readonly asUpdateRoles: {
      readonly poolId: u32;
      readonly newRoot: PalletNominationPoolsConfigOpAccountId32;
      readonly newNominator: PalletNominationPoolsConfigOpAccountId32;
      readonly newBouncer: PalletNominationPoolsConfigOpAccountId32;
    } & Struct;
    readonly isChill: boolean;
    readonly asChill: {
      readonly poolId: u32;
    } & Struct;
    readonly isBondExtraOther: boolean;
    readonly asBondExtraOther: {
      readonly member: MultiAddress;
      readonly extra: PalletNominationPoolsBondExtra;
    } & Struct;
    readonly isSetClaimPermission: boolean;
    readonly asSetClaimPermission: {
      readonly permission: PalletNominationPoolsClaimPermission;
    } & Struct;
    readonly isClaimPayoutOther: boolean;
    readonly asClaimPayoutOther: {
      readonly other: AccountId32;
    } & Struct;
    readonly isSetCommission: boolean;
    readonly asSetCommission: {
      readonly poolId: u32;
      readonly newCommission: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isSetCommissionMax: boolean;
    readonly asSetCommissionMax: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isSetCommissionChangeRate: boolean;
    readonly asSetCommissionChangeRate: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isClaimCommission: boolean;
    readonly asClaimCommission: {
      readonly poolId: u32;
    } & Struct;
    readonly isAdjustPoolDeposit: boolean;
    readonly asAdjustPoolDeposit: {
      readonly poolId: u32;
    } & Struct;
    readonly type: 'Join' | 'BondExtra' | 'ClaimPayout' | 'Unbond' | 'PoolWithdrawUnbonded' | 'WithdrawUnbonded' | 'Create' | 'CreateWithPoolId' | 'Nominate' | 'SetState' | 'SetMetadata' | 'SetConfigs' | 'UpdateRoles' | 'Chill' | 'BondExtraOther' | 'SetClaimPermission' | 'ClaimPayoutOther' | 'SetCommission' | 'SetCommissionMax' | 'SetCommissionChangeRate' | 'ClaimCommission' | 'AdjustPoolDeposit';
  }

  /** @name PalletNominationPoolsBondExtra (287) */
  interface PalletNominationPoolsBondExtra extends Enum {
    readonly isFreeBalance: boolean;
    readonly asFreeBalance: u128;
    readonly isRewards: boolean;
    readonly type: 'FreeBalance' | 'Rewards';
  }

  /** @name PalletNominationPoolsPoolState (288) */
  interface PalletNominationPoolsPoolState extends Enum {
    readonly isOpen: boolean;
    readonly isBlocked: boolean;
    readonly isDestroying: boolean;
    readonly type: 'Open' | 'Blocked' | 'Destroying';
  }

  /** @name PalletNominationPoolsConfigOpU128 (289) */
  interface PalletNominationPoolsConfigOpU128 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u128;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpU32 (290) */
  interface PalletNominationPoolsConfigOpU32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: u32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpPerbill (291) */
  interface PalletNominationPoolsConfigOpPerbill extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: Perbill;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsConfigOpAccountId32 (292) */
  interface PalletNominationPoolsConfigOpAccountId32 extends Enum {
    readonly isNoop: boolean;
    readonly isSet: boolean;
    readonly asSet: AccountId32;
    readonly isRemove: boolean;
    readonly type: 'Noop' | 'Set' | 'Remove';
  }

  /** @name PalletNominationPoolsClaimPermission (293) */
  interface PalletNominationPoolsClaimPermission extends Enum {
    readonly isPermissioned: boolean;
    readonly isPermissionlessCompound: boolean;
    readonly isPermissionlessWithdraw: boolean;
    readonly isPermissionlessAll: boolean;
    readonly type: 'Permissioned' | 'PermissionlessCompound' | 'PermissionlessWithdraw' | 'PermissionlessAll';
  }

  /** @name PalletNominationPoolsCommissionChangeRate (296) */
  interface PalletNominationPoolsCommissionChangeRate extends Struct {
    readonly maxIncrease: Perbill;
    readonly minDelay: u32;
  }

  /** @name PalletFastUnstakeCall (297) */
  interface PalletFastUnstakeCall extends Enum {
    readonly isRegisterFastUnstake: boolean;
    readonly isDeregister: boolean;
    readonly isControl: boolean;
    readonly asControl: {
      readonly erasToCheck: u32;
    } & Struct;
    readonly type: 'RegisterFastUnstake' | 'Deregister' | 'Control';
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletCall (298) */
  interface PolkadotRuntimeParachainsConfigurationPalletCall extends Enum {
    readonly isSetValidationUpgradeCooldown: boolean;
    readonly asSetValidationUpgradeCooldown: {
      readonly new_: u32;
    } & Struct;
    readonly isSetValidationUpgradeDelay: boolean;
    readonly asSetValidationUpgradeDelay: {
      readonly new_: u32;
    } & Struct;
    readonly isSetCodeRetentionPeriod: boolean;
    readonly asSetCodeRetentionPeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxCodeSize: boolean;
    readonly asSetMaxCodeSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxPovSize: boolean;
    readonly asSetMaxPovSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxHeadDataSize: boolean;
    readonly asSetMaxHeadDataSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandCores: boolean;
    readonly asSetOnDemandCores: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandRetries: boolean;
    readonly asSetOnDemandRetries: {
      readonly new_: u32;
    } & Struct;
    readonly isSetGroupRotationFrequency: boolean;
    readonly asSetGroupRotationFrequency: {
      readonly new_: u32;
    } & Struct;
    readonly isSetParasAvailabilityPeriod: boolean;
    readonly asSetParasAvailabilityPeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetSchedulingLookahead: boolean;
    readonly asSetSchedulingLookahead: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxValidatorsPerCore: boolean;
    readonly asSetMaxValidatorsPerCore: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetMaxValidators: boolean;
    readonly asSetMaxValidators: {
      readonly new_: Option<u32>;
    } & Struct;
    readonly isSetDisputePeriod: boolean;
    readonly asSetDisputePeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetDisputePostConclusionAcceptancePeriod: boolean;
    readonly asSetDisputePostConclusionAcceptancePeriod: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNoShowSlots: boolean;
    readonly asSetNoShowSlots: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNDelayTranches: boolean;
    readonly asSetNDelayTranches: {
      readonly new_: u32;
    } & Struct;
    readonly isSetZerothDelayTrancheWidth: boolean;
    readonly asSetZerothDelayTrancheWidth: {
      readonly new_: u32;
    } & Struct;
    readonly isSetNeededApprovals: boolean;
    readonly asSetNeededApprovals: {
      readonly new_: u32;
    } & Struct;
    readonly isSetRelayVrfModuloSamples: boolean;
    readonly asSetRelayVrfModuloSamples: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardQueueCount: boolean;
    readonly asSetMaxUpwardQueueCount: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardQueueSize: boolean;
    readonly asSetMaxUpwardQueueSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxDownwardMessageSize: boolean;
    readonly asSetMaxDownwardMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardMessageSize: boolean;
    readonly asSetMaxUpwardMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxUpwardMessageNumPerCandidate: boolean;
    readonly asSetMaxUpwardMessageNumPerCandidate: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpOpenRequestTtl: boolean;
    readonly asSetHrmpOpenRequestTtl: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpSenderDeposit: boolean;
    readonly asSetHrmpSenderDeposit: {
      readonly new_: u128;
    } & Struct;
    readonly isSetHrmpRecipientDeposit: boolean;
    readonly asSetHrmpRecipientDeposit: {
      readonly new_: u128;
    } & Struct;
    readonly isSetHrmpChannelMaxCapacity: boolean;
    readonly asSetHrmpChannelMaxCapacity: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpChannelMaxTotalSize: boolean;
    readonly asSetHrmpChannelMaxTotalSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxParachainInboundChannels: boolean;
    readonly asSetHrmpMaxParachainInboundChannels: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpChannelMaxMessageSize: boolean;
    readonly asSetHrmpChannelMaxMessageSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxParachainOutboundChannels: boolean;
    readonly asSetHrmpMaxParachainOutboundChannels: {
      readonly new_: u32;
    } & Struct;
    readonly isSetHrmpMaxMessageNumPerCandidate: boolean;
    readonly asSetHrmpMaxMessageNumPerCandidate: {
      readonly new_: u32;
    } & Struct;
    readonly isSetPvfVotingTtl: boolean;
    readonly asSetPvfVotingTtl: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMinimumValidationUpgradeDelay: boolean;
    readonly asSetMinimumValidationUpgradeDelay: {
      readonly new_: u32;
    } & Struct;
    readonly isSetBypassConsistencyCheck: boolean;
    readonly asSetBypassConsistencyCheck: {
      readonly new_: bool;
    } & Struct;
    readonly isSetAsyncBackingParams: boolean;
    readonly asSetAsyncBackingParams: {
      readonly new_: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    } & Struct;
    readonly isSetExecutorParams: boolean;
    readonly asSetExecutorParams: {
      readonly new_: PolkadotPrimitivesV6ExecutorParams;
    } & Struct;
    readonly isSetOnDemandBaseFee: boolean;
    readonly asSetOnDemandBaseFee: {
      readonly new_: u128;
    } & Struct;
    readonly isSetOnDemandFeeVariability: boolean;
    readonly asSetOnDemandFeeVariability: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetOnDemandQueueMaxSize: boolean;
    readonly asSetOnDemandQueueMaxSize: {
      readonly new_: u32;
    } & Struct;
    readonly isSetOnDemandTargetQueueUtilization: boolean;
    readonly asSetOnDemandTargetQueueUtilization: {
      readonly new_: Perbill;
    } & Struct;
    readonly isSetOnDemandTtl: boolean;
    readonly asSetOnDemandTtl: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMinimumBackingVotes: boolean;
    readonly asSetMinimumBackingVotes: {
      readonly new_: u32;
    } & Struct;
    readonly type: 'SetValidationUpgradeCooldown' | 'SetValidationUpgradeDelay' | 'SetCodeRetentionPeriod' | 'SetMaxCodeSize' | 'SetMaxPovSize' | 'SetMaxHeadDataSize' | 'SetOnDemandCores' | 'SetOnDemandRetries' | 'SetGroupRotationFrequency' | 'SetParasAvailabilityPeriod' | 'SetSchedulingLookahead' | 'SetMaxValidatorsPerCore' | 'SetMaxValidators' | 'SetDisputePeriod' | 'SetDisputePostConclusionAcceptancePeriod' | 'SetNoShowSlots' | 'SetNDelayTranches' | 'SetZerothDelayTrancheWidth' | 'SetNeededApprovals' | 'SetRelayVrfModuloSamples' | 'SetMaxUpwardQueueCount' | 'SetMaxUpwardQueueSize' | 'SetMaxDownwardMessageSize' | 'SetMaxUpwardMessageSize' | 'SetMaxUpwardMessageNumPerCandidate' | 'SetHrmpOpenRequestTtl' | 'SetHrmpSenderDeposit' | 'SetHrmpRecipientDeposit' | 'SetHrmpChannelMaxCapacity' | 'SetHrmpChannelMaxTotalSize' | 'SetHrmpMaxParachainInboundChannels' | 'SetHrmpChannelMaxMessageSize' | 'SetHrmpMaxParachainOutboundChannels' | 'SetHrmpMaxMessageNumPerCandidate' | 'SetPvfVotingTtl' | 'SetMinimumValidationUpgradeDelay' | 'SetBypassConsistencyCheck' | 'SetAsyncBackingParams' | 'SetExecutorParams' | 'SetOnDemandBaseFee' | 'SetOnDemandFeeVariability' | 'SetOnDemandQueueMaxSize' | 'SetOnDemandTargetQueueUtilization' | 'SetOnDemandTtl' | 'SetMinimumBackingVotes';
  }

  /** @name PolkadotPrimitivesV6AsyncBackingAsyncBackingParams (299) */
  interface PolkadotPrimitivesV6AsyncBackingAsyncBackingParams extends Struct {
    readonly maxCandidateDepth: u32;
    readonly allowedAncestryLen: u32;
  }

  /** @name PolkadotPrimitivesV6ExecutorParams (300) */
  interface PolkadotPrimitivesV6ExecutorParams extends Vec<PolkadotPrimitivesV6ExecutorParamsExecutorParam> {}

  /** @name PolkadotPrimitivesV6ExecutorParamsExecutorParam (302) */
  interface PolkadotPrimitivesV6ExecutorParamsExecutorParam extends Enum {
    readonly isMaxMemoryPages: boolean;
    readonly asMaxMemoryPages: u32;
    readonly isStackLogicalMax: boolean;
    readonly asStackLogicalMax: u32;
    readonly isStackNativeMax: boolean;
    readonly asStackNativeMax: u32;
    readonly isPrecheckingMaxMemory: boolean;
    readonly asPrecheckingMaxMemory: u64;
    readonly isPvfPrepTimeout: boolean;
    readonly asPvfPrepTimeout: ITuple<[PolkadotPrimitivesV6PvfPrepTimeoutKind, u64]>;
    readonly isPvfExecTimeout: boolean;
    readonly asPvfExecTimeout: ITuple<[PolkadotPrimitivesV6PvfExecTimeoutKind, u64]>;
    readonly isWasmExtBulkMemory: boolean;
    readonly type: 'MaxMemoryPages' | 'StackLogicalMax' | 'StackNativeMax' | 'PrecheckingMaxMemory' | 'PvfPrepTimeout' | 'PvfExecTimeout' | 'WasmExtBulkMemory';
  }

  /** @name PolkadotPrimitivesV6PvfPrepTimeoutKind (303) */
  interface PolkadotPrimitivesV6PvfPrepTimeoutKind extends Enum {
    readonly isPrecheck: boolean;
    readonly isLenient: boolean;
    readonly type: 'Precheck' | 'Lenient';
  }

  /** @name PolkadotPrimitivesV6PvfExecTimeoutKind (304) */
  interface PolkadotPrimitivesV6PvfExecTimeoutKind extends Enum {
    readonly isBacking: boolean;
    readonly isApproval: boolean;
    readonly type: 'Backing' | 'Approval';
  }

  /** @name PolkadotRuntimeParachainsSharedPalletCall (305) */
  type PolkadotRuntimeParachainsSharedPalletCall = Null;

  /** @name PolkadotRuntimeParachainsInclusionPalletCall (306) */
  type PolkadotRuntimeParachainsInclusionPalletCall = Null;

  /** @name PolkadotRuntimeParachainsParasInherentPalletCall (307) */
  interface PolkadotRuntimeParachainsParasInherentPalletCall extends Enum {
    readonly isEnter: boolean;
    readonly asEnter: {
      readonly data: PolkadotPrimitivesV6InherentData;
    } & Struct;
    readonly type: 'Enter';
  }

  /** @name PolkadotPrimitivesV6InherentData (308) */
  interface PolkadotPrimitivesV6InherentData extends Struct {
    readonly bitfields: Vec<PolkadotPrimitivesV6SignedUncheckedSigned>;
    readonly backedCandidates: Vec<PolkadotPrimitivesV6BackedCandidate>;
    readonly disputes: Vec<PolkadotPrimitivesV6DisputeStatementSet>;
    readonly parentHeader: SpRuntimeHeader;
  }

  /** @name PolkadotPrimitivesV6SignedUncheckedSigned (310) */
  interface PolkadotPrimitivesV6SignedUncheckedSigned extends Struct {
    readonly payload: BitVec;
    readonly validatorIndex: u32;
    readonly signature: PolkadotPrimitivesV6ValidatorAppSignature;
  }

  /** @name BitvecOrderLsb0 (313) */
  type BitvecOrderLsb0 = Null;

  /** @name PolkadotPrimitivesV6ValidatorAppSignature (315) */
  interface PolkadotPrimitivesV6ValidatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV6BackedCandidate (317) */
  interface PolkadotPrimitivesV6BackedCandidate extends Struct {
    readonly candidate: PolkadotPrimitivesV6CommittedCandidateReceipt;
    readonly validityVotes: Vec<PolkadotPrimitivesV6ValidityAttestation>;
    readonly validatorIndices: BitVec;
  }

  /** @name PolkadotPrimitivesV6CommittedCandidateReceipt (318) */
  interface PolkadotPrimitivesV6CommittedCandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly commitments: PolkadotPrimitivesV6CandidateCommitments;
  }

  /** @name PolkadotPrimitivesV6CandidateDescriptor (319) */
  interface PolkadotPrimitivesV6CandidateDescriptor extends Struct {
    readonly paraId: u32;
    readonly relayParent: H256;
    readonly collator: PolkadotPrimitivesV6CollatorAppPublic;
    readonly persistedValidationDataHash: H256;
    readonly povHash: H256;
    readonly erasureRoot: H256;
    readonly signature: PolkadotPrimitivesV6CollatorAppSignature;
    readonly paraHead: H256;
    readonly validationCodeHash: H256;
  }

  /** @name PolkadotPrimitivesV6CollatorAppPublic (320) */
  interface PolkadotPrimitivesV6CollatorAppPublic extends SpCoreSr25519Public {}

  /** @name PolkadotPrimitivesV6CollatorAppSignature (321) */
  interface PolkadotPrimitivesV6CollatorAppSignature extends SpCoreSr25519Signature {}

  /** @name PolkadotPrimitivesV6CandidateCommitments (323) */
  interface PolkadotPrimitivesV6CandidateCommitments extends Struct {
    readonly upwardMessages: Vec<Bytes>;
    readonly horizontalMessages: Vec<PolkadotCorePrimitivesOutboundHrmpMessage>;
    readonly newValidationCode: Option<Bytes>;
    readonly headData: Bytes;
    readonly processedDownwardMessages: u32;
    readonly hrmpWatermark: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (326) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotPrimitivesV6ValidityAttestation (332) */
  interface PolkadotPrimitivesV6ValidityAttestation extends Enum {
    readonly isImplicit: boolean;
    readonly asImplicit: PolkadotPrimitivesV6ValidatorAppSignature;
    readonly isExplicit: boolean;
    readonly asExplicit: PolkadotPrimitivesV6ValidatorAppSignature;
    readonly type: 'Implicit' | 'Explicit';
  }

  /** @name PolkadotPrimitivesV6DisputeStatementSet (334) */
  interface PolkadotPrimitivesV6DisputeStatementSet extends Struct {
    readonly candidateHash: H256;
    readonly session: u32;
    readonly statements: Vec<ITuple<[PolkadotPrimitivesV6DisputeStatement, u32, PolkadotPrimitivesV6ValidatorAppSignature]>>;
  }

  /** @name PolkadotPrimitivesV6DisputeStatement (338) */
  interface PolkadotPrimitivesV6DisputeStatement extends Enum {
    readonly isValid: boolean;
    readonly asValid: PolkadotPrimitivesV6ValidDisputeStatementKind;
    readonly isInvalid: boolean;
    readonly asInvalid: PolkadotPrimitivesV6InvalidDisputeStatementKind;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotPrimitivesV6ValidDisputeStatementKind (339) */
  interface PolkadotPrimitivesV6ValidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly isBackingSeconded: boolean;
    readonly asBackingSeconded: H256;
    readonly isBackingValid: boolean;
    readonly asBackingValid: H256;
    readonly isApprovalChecking: boolean;
    readonly type: 'Explicit' | 'BackingSeconded' | 'BackingValid' | 'ApprovalChecking';
  }

  /** @name PolkadotPrimitivesV6InvalidDisputeStatementKind (340) */
  interface PolkadotPrimitivesV6InvalidDisputeStatementKind extends Enum {
    readonly isExplicit: boolean;
    readonly type: 'Explicit';
  }

  /** @name PolkadotRuntimeParachainsParasPalletCall (341) */
  interface PolkadotRuntimeParachainsParasPalletCall extends Enum {
    readonly isForceSetCurrentCode: boolean;
    readonly asForceSetCurrentCode: {
      readonly para: u32;
      readonly newCode: Bytes;
    } & Struct;
    readonly isForceSetCurrentHead: boolean;
    readonly asForceSetCurrentHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly isForceScheduleCodeUpgrade: boolean;
    readonly asForceScheduleCodeUpgrade: {
      readonly para: u32;
      readonly newCode: Bytes;
      readonly relayParentNumber: u32;
    } & Struct;
    readonly isForceNoteNewHead: boolean;
    readonly asForceNoteNewHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly isForceQueueAction: boolean;
    readonly asForceQueueAction: {
      readonly para: u32;
    } & Struct;
    readonly isAddTrustedValidationCode: boolean;
    readonly asAddTrustedValidationCode: {
      readonly validationCode: Bytes;
    } & Struct;
    readonly isPokeUnusedValidationCode: boolean;
    readonly asPokeUnusedValidationCode: {
      readonly validationCodeHash: H256;
    } & Struct;
    readonly isIncludePvfCheckStatement: boolean;
    readonly asIncludePvfCheckStatement: {
      readonly stmt: PolkadotPrimitivesV6PvfCheckStatement;
      readonly signature: PolkadotPrimitivesV6ValidatorAppSignature;
    } & Struct;
    readonly isForceSetMostRecentContext: boolean;
    readonly asForceSetMostRecentContext: {
      readonly para: u32;
      readonly context: u32;
    } & Struct;
    readonly type: 'ForceSetCurrentCode' | 'ForceSetCurrentHead' | 'ForceScheduleCodeUpgrade' | 'ForceNoteNewHead' | 'ForceQueueAction' | 'AddTrustedValidationCode' | 'PokeUnusedValidationCode' | 'IncludePvfCheckStatement' | 'ForceSetMostRecentContext';
  }

  /** @name PolkadotPrimitivesV6PvfCheckStatement (342) */
  interface PolkadotPrimitivesV6PvfCheckStatement extends Struct {
    readonly accept: bool;
    readonly subject: H256;
    readonly sessionIndex: u32;
    readonly validatorIndex: u32;
  }

  /** @name PolkadotRuntimeParachainsInitializerPalletCall (343) */
  interface PolkadotRuntimeParachainsInitializerPalletCall extends Enum {
    readonly isForceApprove: boolean;
    readonly asForceApprove: {
      readonly upTo: u32;
    } & Struct;
    readonly type: 'ForceApprove';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletCall (344) */
  interface PolkadotRuntimeParachainsHrmpPalletCall extends Enum {
    readonly isHrmpInitOpenChannel: boolean;
    readonly asHrmpInitOpenChannel: {
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isHrmpAcceptOpenChannel: boolean;
    readonly asHrmpAcceptOpenChannel: {
      readonly sender: u32;
    } & Struct;
    readonly isHrmpCloseChannel: boolean;
    readonly asHrmpCloseChannel: {
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isForceCleanHrmp: boolean;
    readonly asForceCleanHrmp: {
      readonly para: u32;
      readonly numInbound: u32;
      readonly numOutbound: u32;
    } & Struct;
    readonly isForceProcessHrmpOpen: boolean;
    readonly asForceProcessHrmpOpen: {
      readonly channels: u32;
    } & Struct;
    readonly isForceProcessHrmpClose: boolean;
    readonly asForceProcessHrmpClose: {
      readonly channels: u32;
    } & Struct;
    readonly isHrmpCancelOpenRequest: boolean;
    readonly asHrmpCancelOpenRequest: {
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
      readonly openRequests: u32;
    } & Struct;
    readonly isForceOpenHrmpChannel: boolean;
    readonly asForceOpenHrmpChannel: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly maxCapacity: u32;
      readonly maxMessageSize: u32;
    } & Struct;
    readonly isEstablishSystemChannel: boolean;
    readonly asEstablishSystemChannel: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly isPokeChannelDeposits: boolean;
    readonly asPokeChannelDeposits: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly type: 'HrmpInitOpenChannel' | 'HrmpAcceptOpenChannel' | 'HrmpCloseChannel' | 'ForceCleanHrmp' | 'ForceProcessHrmpOpen' | 'ForceProcessHrmpClose' | 'HrmpCancelOpenRequest' | 'ForceOpenHrmpChannel' | 'EstablishSystemChannel' | 'PokeChannelDeposits';
  }

  /** @name PolkadotParachainPrimitivesPrimitivesHrmpChannelId (345) */
  interface PolkadotParachainPrimitivesPrimitivesHrmpChannelId extends Struct {
    readonly sender: u32;
    readonly recipient: u32;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletCall (346) */
  interface PolkadotRuntimeParachainsDisputesPalletCall extends Enum {
    readonly isForceUnfreeze: boolean;
    readonly type: 'ForceUnfreeze';
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletCall (347) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletCall extends Enum {
    readonly isReportDisputeLostUnsigned: boolean;
    readonly asReportDisputeLostUnsigned: {
      readonly disputeProof: PolkadotPrimitivesV6SlashingDisputeProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly type: 'ReportDisputeLostUnsigned';
  }

  /** @name PolkadotPrimitivesV6SlashingDisputeProof (348) */
  interface PolkadotPrimitivesV6SlashingDisputeProof extends Struct {
    readonly timeSlot: PolkadotPrimitivesV6SlashingDisputesTimeSlot;
    readonly kind: PolkadotPrimitivesV6SlashingSlashingOffenceKind;
    readonly validatorIndex: u32;
    readonly validatorId: PolkadotPrimitivesV6ValidatorAppPublic;
  }

  /** @name PolkadotPrimitivesV6SlashingDisputesTimeSlot (349) */
  interface PolkadotPrimitivesV6SlashingDisputesTimeSlot extends Struct {
    readonly sessionIndex: u32;
    readonly candidateHash: H256;
  }

  /** @name PolkadotPrimitivesV6SlashingSlashingOffenceKind (350) */
  interface PolkadotPrimitivesV6SlashingSlashingOffenceKind extends Enum {
    readonly isForInvalid: boolean;
    readonly isAgainstValid: boolean;
    readonly type: 'ForInvalid' | 'AgainstValid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletCall (351) */
  interface PolkadotRuntimeCommonParasRegistrarPalletCall extends Enum {
    readonly isRegister: boolean;
    readonly asRegister: {
      readonly id: u32;
      readonly genesisHead: Bytes;
      readonly validationCode: Bytes;
    } & Struct;
    readonly isForceRegister: boolean;
    readonly asForceRegister: {
      readonly who: AccountId32;
      readonly deposit: u128;
      readonly id: u32;
      readonly genesisHead: Bytes;
      readonly validationCode: Bytes;
    } & Struct;
    readonly isDeregister: boolean;
    readonly asDeregister: {
      readonly id: u32;
    } & Struct;
    readonly isSwap: boolean;
    readonly asSwap: {
      readonly id: u32;
      readonly other: u32;
    } & Struct;
    readonly isRemoveLock: boolean;
    readonly asRemoveLock: {
      readonly para: u32;
    } & Struct;
    readonly isReserve: boolean;
    readonly isAddLock: boolean;
    readonly asAddLock: {
      readonly para: u32;
    } & Struct;
    readonly isScheduleCodeUpgrade: boolean;
    readonly asScheduleCodeUpgrade: {
      readonly para: u32;
      readonly newCode: Bytes;
    } & Struct;
    readonly isSetCurrentHead: boolean;
    readonly asSetCurrentHead: {
      readonly para: u32;
      readonly newHead: Bytes;
    } & Struct;
    readonly type: 'Register' | 'ForceRegister' | 'Deregister' | 'Swap' | 'RemoveLock' | 'Reserve' | 'AddLock' | 'ScheduleCodeUpgrade' | 'SetCurrentHead';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletCall (352) */
  interface PolkadotRuntimeCommonSlotsPalletCall extends Enum {
    readonly isForceLease: boolean;
    readonly asForceLease: {
      readonly para: u32;
      readonly leaser: AccountId32;
      readonly amount: u128;
      readonly periodBegin: u32;
      readonly periodCount: u32;
    } & Struct;
    readonly isClearAllLeases: boolean;
    readonly asClearAllLeases: {
      readonly para: u32;
    } & Struct;
    readonly isTriggerOnboard: boolean;
    readonly asTriggerOnboard: {
      readonly para: u32;
    } & Struct;
    readonly type: 'ForceLease' | 'ClearAllLeases' | 'TriggerOnboard';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletCall (353) */
  interface PolkadotRuntimeCommonAuctionsPalletCall extends Enum {
    readonly isNewAuction: boolean;
    readonly asNewAuction: {
      readonly duration: Compact<u32>;
      readonly leasePeriodIndex: Compact<u32>;
    } & Struct;
    readonly isBid: boolean;
    readonly asBid: {
      readonly para: Compact<u32>;
      readonly auctionIndex: Compact<u32>;
      readonly firstSlot: Compact<u32>;
      readonly lastSlot: Compact<u32>;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCancelAuction: boolean;
    readonly type: 'NewAuction' | 'Bid' | 'CancelAuction';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletCall (355) */
  interface PolkadotRuntimeCommonCrowdloanPalletCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly index: Compact<u32>;
      readonly cap: Compact<u128>;
      readonly firstPeriod: Compact<u32>;
      readonly lastPeriod: Compact<u32>;
      readonly end: Compact<u32>;
      readonly verifier: Option<SpRuntimeMultiSigner>;
    } & Struct;
    readonly isContribute: boolean;
    readonly asContribute: {
      readonly index: Compact<u32>;
      readonly value: Compact<u128>;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly index: Compact<u32>;
    } & Struct;
    readonly isRefund: boolean;
    readonly asRefund: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isDissolve: boolean;
    readonly asDissolve: {
      readonly index: Compact<u32>;
    } & Struct;
    readonly isEdit: boolean;
    readonly asEdit: {
      readonly index: Compact<u32>;
      readonly cap: Compact<u128>;
      readonly firstPeriod: Compact<u32>;
      readonly lastPeriod: Compact<u32>;
      readonly end: Compact<u32>;
      readonly verifier: Option<SpRuntimeMultiSigner>;
    } & Struct;
    readonly isAddMemo: boolean;
    readonly asAddMemo: {
      readonly index: u32;
      readonly memo: Bytes;
    } & Struct;
    readonly isPoke: boolean;
    readonly asPoke: {
      readonly index: u32;
    } & Struct;
    readonly isContributeAll: boolean;
    readonly asContributeAll: {
      readonly index: Compact<u32>;
      readonly signature: Option<SpRuntimeMultiSignature>;
    } & Struct;
    readonly type: 'Create' | 'Contribute' | 'Withdraw' | 'Refund' | 'Dissolve' | 'Edit' | 'AddMemo' | 'Poke' | 'ContributeAll';
  }

  /** @name SpRuntimeMultiSigner (357) */
  interface SpRuntimeMultiSigner extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Public;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Public;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaPublic;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpRuntimeMultiSignature (359) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEcdsaSignature (360) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name PalletXcmCall (361) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name XcmVersionedXcm (362) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (363) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (365) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2MultiassetMultiAssets (366) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (368) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (369) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiassetFungibility (370) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (371) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmV2Response (372) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (375) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2OriginKind (376) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (377) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV2MultiassetMultiAssetFilter (378) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (379) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (380) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (381) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmV3Xcm (382) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (384) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: StagingXcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<StagingXcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: StagingXcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: StagingXcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (385) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (387) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetFungibility (388) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (389) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (390) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3TraitsError (393) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name XcmV3PalletInfo (395) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (398) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV3QueryResponseInfo (401) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: StagingXcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (402) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (403) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (404) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (405) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (406) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletMessageQueueCall (415) */
  interface PalletMessageQueueCall extends Enum {
    readonly isReapPage: boolean;
    readonly asReapPage: {
      readonly messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly pageIndex: u32;
    } & Struct;
    readonly isExecuteOverweight: boolean;
    readonly asExecuteOverweight: {
      readonly messageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly page: u32;
      readonly index: u32;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ReapPage' | 'ExecuteOverweight';
  }

  /** @name PolkadotRuntimeParachainsInclusionAggregateMessageOrigin (416) */
  interface PolkadotRuntimeParachainsInclusionAggregateMessageOrigin extends Enum {
    readonly isUmp: boolean;
    readonly asUmp: PolkadotRuntimeParachainsInclusionUmpQueueId;
    readonly type: 'Ump';
  }

  /** @name PolkadotRuntimeParachainsInclusionUmpQueueId (417) */
  interface PolkadotRuntimeParachainsInclusionUmpQueueId extends Enum {
    readonly isPara: boolean;
    readonly asPara: u32;
    readonly type: 'Para';
  }

  /** @name PalletAssetRateCall (418) */
  interface PalletAssetRateCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly rate: u128;
    } & Struct;
    readonly isUpdate: boolean;
    readonly asUpdate: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly rate: u128;
    } & Struct;
    readonly isRemove: boolean;
    readonly asRemove: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    } & Struct;
    readonly type: 'Create' | 'Update' | 'Remove';
  }

  /** @name PalletBeefyCall (420) */
  interface PalletBeefyCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpConsensusBeefyEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpConsensusBeefyEquivocationProof;
      readonly keyOwnerProof: SpSessionMembershipProof;
    } & Struct;
    readonly isSetNewGenesis: boolean;
    readonly asSetNewGenesis: {
      readonly delayInBlocks: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'SetNewGenesis';
  }

  /** @name SpConsensusBeefyEquivocationProof (421) */
  interface SpConsensusBeefyEquivocationProof extends Struct {
    readonly first: SpConsensusBeefyVoteMessage;
    readonly second: SpConsensusBeefyVoteMessage;
  }

  /** @name SpConsensusBeefyEcdsaCryptoSignature (422) */
  interface SpConsensusBeefyEcdsaCryptoSignature extends SpCoreEcdsaSignature {}

  /** @name SpConsensusBeefyVoteMessage (423) */
  interface SpConsensusBeefyVoteMessage extends Struct {
    readonly commitment: SpConsensusBeefyCommitment;
    readonly id: SpConsensusBeefyEcdsaCryptoPublic;
    readonly signature: SpConsensusBeefyEcdsaCryptoSignature;
  }

  /** @name SpConsensusBeefyCommitment (424) */
  interface SpConsensusBeefyCommitment extends Struct {
    readonly payload: SpConsensusBeefyPayload;
    readonly blockNumber: u32;
    readonly validatorSetId: u64;
  }

  /** @name SpConsensusBeefyPayload (425) */
  interface SpConsensusBeefyPayload extends Vec<ITuple<[U8aFixed, Bytes]>> {}

  /** @name SpRuntimeBlakeTwo256 (428) */
  type SpRuntimeBlakeTwo256 = Null;

  /** @name PalletConvictionVotingTally (430) */
  interface PalletConvictionVotingTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly support: u128;
  }

  /** @name PalletWhitelistEvent (431) */
  interface PalletWhitelistEvent extends Enum {
    readonly isCallWhitelisted: boolean;
    readonly asCallWhitelisted: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallRemoved: boolean;
    readonly asWhitelistedCallRemoved: {
      readonly callHash: H256;
    } & Struct;
    readonly isWhitelistedCallDispatched: boolean;
    readonly asWhitelistedCallDispatched: {
      readonly callHash: H256;
      readonly result: Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>;
    } & Struct;
    readonly type: 'CallWhitelisted' | 'WhitelistedCallRemoved' | 'WhitelistedCallDispatched';
  }

  /** @name FrameSupportDispatchPostDispatchInfo (433) */
  interface FrameSupportDispatchPostDispatchInfo extends Struct {
    readonly actualWeight: Option<SpWeightsWeightV2Weight>;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name SpRuntimeDispatchErrorWithPostInfo (435) */
  interface SpRuntimeDispatchErrorWithPostInfo extends Struct {
    readonly postInfo: FrameSupportDispatchPostDispatchInfo;
    readonly error: SpRuntimeDispatchError;
  }

  /** @name PolkadotRuntimeCommonClaimsPalletEvent (436) */
  interface PolkadotRuntimeCommonClaimsPalletEvent extends Enum {
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly ethereumAddress: EthereumAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Claimed';
  }

  /** @name PalletVestingEvent (437) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletUtilityEvent (438) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name PalletIdentityEvent (439) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletProxyEvent (440) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: PolkadotRuntimeProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name PalletMultisigEvent (441) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletBountiesEvent (442) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly isBountyApproved: boolean;
    readonly asBountyApproved: {
      readonly index: u32;
    } & Struct;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly isCuratorUnassigned: boolean;
    readonly asCuratorUnassigned: {
      readonly bountyId: u32;
    } & Struct;
    readonly isCuratorAccepted: boolean;
    readonly asCuratorAccepted: {
      readonly bountyId: u32;
      readonly curator: AccountId32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended' | 'BountyApproved' | 'CuratorProposed' | 'CuratorUnassigned' | 'CuratorAccepted';
  }

  /** @name PalletChildBountiesEvent (443) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name PalletElectionProviderMultiPhaseEvent (444) */
  interface PalletElectionProviderMultiPhaseEvent extends Enum {
    readonly isSolutionStored: boolean;
    readonly asSolutionStored: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly origin: Option<AccountId32>;
      readonly prevEjected: bool;
    } & Struct;
    readonly isElectionFinalized: boolean;
    readonly asElectionFinalized: {
      readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
      readonly score: SpNposElectionsElectionScore;
    } & Struct;
    readonly isElectionFailed: boolean;
    readonly isRewarded: boolean;
    readonly asRewarded: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly account: AccountId32;
      readonly value: u128;
    } & Struct;
    readonly isPhaseTransitioned: boolean;
    readonly asPhaseTransitioned: {
      readonly from: PalletElectionProviderMultiPhasePhase;
      readonly to: PalletElectionProviderMultiPhasePhase;
      readonly round: u32;
    } & Struct;
    readonly type: 'SolutionStored' | 'ElectionFinalized' | 'ElectionFailed' | 'Rewarded' | 'Slashed' | 'PhaseTransitioned';
  }

  /** @name PalletElectionProviderMultiPhaseElectionCompute (445) */
  interface PalletElectionProviderMultiPhaseElectionCompute extends Enum {
    readonly isOnChain: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly isFallback: boolean;
    readonly isEmergency: boolean;
    readonly type: 'OnChain' | 'Signed' | 'Unsigned' | 'Fallback' | 'Emergency';
  }

  /** @name PalletElectionProviderMultiPhasePhase (446) */
  interface PalletElectionProviderMultiPhasePhase extends Enum {
    readonly isOff: boolean;
    readonly isSigned: boolean;
    readonly isUnsigned: boolean;
    readonly asUnsigned: ITuple<[bool, u32]>;
    readonly isEmergency: boolean;
    readonly type: 'Off' | 'Signed' | 'Unsigned' | 'Emergency';
  }

  /** @name PalletBagsListEvent (448) */
  interface PalletBagsListEvent extends Enum {
    readonly isRebagged: boolean;
    readonly asRebagged: {
      readonly who: AccountId32;
      readonly from: u64;
      readonly to: u64;
    } & Struct;
    readonly isScoreUpdated: boolean;
    readonly asScoreUpdated: {
      readonly who: AccountId32;
      readonly newScore: u64;
    } & Struct;
    readonly type: 'Rebagged' | 'ScoreUpdated';
  }

  /** @name PalletNominationPoolsEvent (449) */
  interface PalletNominationPoolsEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly depositor: AccountId32;
      readonly poolId: u32;
    } & Struct;
    readonly isBonded: boolean;
    readonly asBonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly bonded: u128;
      readonly joined: bool;
    } & Struct;
    readonly isPaidOut: boolean;
    readonly asPaidOut: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly payout: u128;
    } & Struct;
    readonly isUnbonded: boolean;
    readonly asUnbonded: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
      readonly era: u32;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly member: AccountId32;
      readonly poolId: u32;
      readonly balance: u128;
      readonly points: u128;
    } & Struct;
    readonly isDestroyed: boolean;
    readonly asDestroyed: {
      readonly poolId: u32;
    } & Struct;
    readonly isStateChanged: boolean;
    readonly asStateChanged: {
      readonly poolId: u32;
      readonly newState: PalletNominationPoolsPoolState;
    } & Struct;
    readonly isMemberRemoved: boolean;
    readonly asMemberRemoved: {
      readonly poolId: u32;
      readonly member: AccountId32;
    } & Struct;
    readonly isRolesUpdated: boolean;
    readonly asRolesUpdated: {
      readonly root: Option<AccountId32>;
      readonly bouncer: Option<AccountId32>;
      readonly nominator: Option<AccountId32>;
    } & Struct;
    readonly isPoolSlashed: boolean;
    readonly asPoolSlashed: {
      readonly poolId: u32;
      readonly balance: u128;
    } & Struct;
    readonly isUnbondingPoolSlashed: boolean;
    readonly asUnbondingPoolSlashed: {
      readonly poolId: u32;
      readonly era: u32;
      readonly balance: u128;
    } & Struct;
    readonly isPoolCommissionUpdated: boolean;
    readonly asPoolCommissionUpdated: {
      readonly poolId: u32;
      readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    } & Struct;
    readonly isPoolMaxCommissionUpdated: boolean;
    readonly asPoolMaxCommissionUpdated: {
      readonly poolId: u32;
      readonly maxCommission: Perbill;
    } & Struct;
    readonly isPoolCommissionChangeRateUpdated: boolean;
    readonly asPoolCommissionChangeRateUpdated: {
      readonly poolId: u32;
      readonly changeRate: PalletNominationPoolsCommissionChangeRate;
    } & Struct;
    readonly isPoolCommissionClaimed: boolean;
    readonly asPoolCommissionClaimed: {
      readonly poolId: u32;
      readonly commission: u128;
    } & Struct;
    readonly isMinBalanceDeficitAdjusted: boolean;
    readonly asMinBalanceDeficitAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly isMinBalanceExcessAdjusted: boolean;
    readonly asMinBalanceExcessAdjusted: {
      readonly poolId: u32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Created' | 'Bonded' | 'PaidOut' | 'Unbonded' | 'Withdrawn' | 'Destroyed' | 'StateChanged' | 'MemberRemoved' | 'RolesUpdated' | 'PoolSlashed' | 'UnbondingPoolSlashed' | 'PoolCommissionUpdated' | 'PoolMaxCommissionUpdated' | 'PoolCommissionChangeRateUpdated' | 'PoolCommissionClaimed' | 'MinBalanceDeficitAdjusted' | 'MinBalanceExcessAdjusted';
  }

  /** @name PalletFastUnstakeEvent (450) */
  interface PalletFastUnstakeEvent extends Enum {
    readonly isUnstaked: boolean;
    readonly asUnstaked: {
      readonly stash: AccountId32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly stash: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBatchChecked: boolean;
    readonly asBatchChecked: {
      readonly eras: Vec<u32>;
    } & Struct;
    readonly isBatchFinished: boolean;
    readonly asBatchFinished: {
      readonly size_: u32;
    } & Struct;
    readonly isInternalError: boolean;
    readonly type: 'Unstaked' | 'Slashed' | 'BatchChecked' | 'BatchFinished' | 'InternalError';
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletEvent (451) */
  interface PolkadotRuntimeParachainsInclusionPalletEvent extends Enum {
    readonly isCandidateBacked: boolean;
    readonly asCandidateBacked: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateIncluded: boolean;
    readonly asCandidateIncluded: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32, u32]>;
    readonly isCandidateTimedOut: boolean;
    readonly asCandidateTimedOut: ITuple<[PolkadotPrimitivesV6CandidateReceipt, Bytes, u32]>;
    readonly isUpwardMessagesReceived: boolean;
    readonly asUpwardMessagesReceived: {
      readonly from: u32;
      readonly count: u32;
    } & Struct;
    readonly type: 'CandidateBacked' | 'CandidateIncluded' | 'CandidateTimedOut' | 'UpwardMessagesReceived';
  }

  /** @name PolkadotPrimitivesV6CandidateReceipt (452) */
  interface PolkadotPrimitivesV6CandidateReceipt extends Struct {
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly commitmentsHash: H256;
  }

  /** @name PolkadotRuntimeParachainsParasPalletEvent (455) */
  interface PolkadotRuntimeParachainsParasPalletEvent extends Enum {
    readonly isCurrentCodeUpdated: boolean;
    readonly asCurrentCodeUpdated: u32;
    readonly isCurrentHeadUpdated: boolean;
    readonly asCurrentHeadUpdated: u32;
    readonly isCodeUpgradeScheduled: boolean;
    readonly asCodeUpgradeScheduled: u32;
    readonly isNewHeadNoted: boolean;
    readonly asNewHeadNoted: u32;
    readonly isActionQueued: boolean;
    readonly asActionQueued: ITuple<[u32, u32]>;
    readonly isPvfCheckStarted: boolean;
    readonly asPvfCheckStarted: ITuple<[H256, u32]>;
    readonly isPvfCheckAccepted: boolean;
    readonly asPvfCheckAccepted: ITuple<[H256, u32]>;
    readonly isPvfCheckRejected: boolean;
    readonly asPvfCheckRejected: ITuple<[H256, u32]>;
    readonly type: 'CurrentCodeUpdated' | 'CurrentHeadUpdated' | 'CodeUpgradeScheduled' | 'NewHeadNoted' | 'ActionQueued' | 'PvfCheckStarted' | 'PvfCheckAccepted' | 'PvfCheckRejected';
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletEvent (456) */
  interface PolkadotRuntimeParachainsHrmpPalletEvent extends Enum {
    readonly isOpenChannelRequested: boolean;
    readonly asOpenChannelRequested: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isOpenChannelCanceled: boolean;
    readonly asOpenChannelCanceled: {
      readonly byParachain: u32;
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isOpenChannelAccepted: boolean;
    readonly asOpenChannelAccepted: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly isChannelClosed: boolean;
    readonly asChannelClosed: {
      readonly byParachain: u32;
      readonly channelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    } & Struct;
    readonly isHrmpChannelForceOpened: boolean;
    readonly asHrmpChannelForceOpened: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isHrmpSystemChannelOpened: boolean;
    readonly asHrmpSystemChannelOpened: {
      readonly sender: u32;
      readonly recipient: u32;
      readonly proposedMaxCapacity: u32;
      readonly proposedMaxMessageSize: u32;
    } & Struct;
    readonly isOpenChannelDepositsUpdated: boolean;
    readonly asOpenChannelDepositsUpdated: {
      readonly sender: u32;
      readonly recipient: u32;
    } & Struct;
    readonly type: 'OpenChannelRequested' | 'OpenChannelCanceled' | 'OpenChannelAccepted' | 'ChannelClosed' | 'HrmpChannelForceOpened' | 'HrmpSystemChannelOpened' | 'OpenChannelDepositsUpdated';
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletEvent (457) */
  interface PolkadotRuntimeParachainsDisputesPalletEvent extends Enum {
    readonly isDisputeInitiated: boolean;
    readonly asDisputeInitiated: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeLocation]>;
    readonly isDisputeConcluded: boolean;
    readonly asDisputeConcluded: ITuple<[H256, PolkadotRuntimeParachainsDisputesDisputeResult]>;
    readonly isRevert: boolean;
    readonly asRevert: u32;
    readonly type: 'DisputeInitiated' | 'DisputeConcluded' | 'Revert';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeLocation (458) */
  interface PolkadotRuntimeParachainsDisputesDisputeLocation extends Enum {
    readonly isLocal: boolean;
    readonly isRemote: boolean;
    readonly type: 'Local' | 'Remote';
  }

  /** @name PolkadotRuntimeParachainsDisputesDisputeResult (459) */
  interface PolkadotRuntimeParachainsDisputesDisputeResult extends Enum {
    readonly isValid: boolean;
    readonly isInvalid: boolean;
    readonly type: 'Valid' | 'Invalid';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletEvent (460) */
  interface PolkadotRuntimeCommonParasRegistrarPalletEvent extends Enum {
    readonly isRegistered: boolean;
    readonly asRegistered: {
      readonly paraId: u32;
      readonly manager: AccountId32;
    } & Struct;
    readonly isDeregistered: boolean;
    readonly asDeregistered: {
      readonly paraId: u32;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly paraId: u32;
      readonly who: AccountId32;
    } & Struct;
    readonly isSwapped: boolean;
    readonly asSwapped: {
      readonly paraId: u32;
      readonly otherId: u32;
    } & Struct;
    readonly type: 'Registered' | 'Deregistered' | 'Reserved' | 'Swapped';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletEvent (461) */
  interface PolkadotRuntimeCommonSlotsPalletEvent extends Enum {
    readonly isNewLeasePeriod: boolean;
    readonly asNewLeasePeriod: {
      readonly leasePeriod: u32;
    } & Struct;
    readonly isLeased: boolean;
    readonly asLeased: {
      readonly paraId: u32;
      readonly leaser: AccountId32;
      readonly periodBegin: u32;
      readonly periodCount: u32;
      readonly extraReserved: u128;
      readonly totalAmount: u128;
    } & Struct;
    readonly type: 'NewLeasePeriod' | 'Leased';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletEvent (462) */
  interface PolkadotRuntimeCommonAuctionsPalletEvent extends Enum {
    readonly isAuctionStarted: boolean;
    readonly asAuctionStarted: {
      readonly auctionIndex: u32;
      readonly leasePeriod: u32;
      readonly ending: u32;
    } & Struct;
    readonly isAuctionClosed: boolean;
    readonly asAuctionClosed: {
      readonly auctionIndex: u32;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly bidder: AccountId32;
      readonly extraReserved: u128;
      readonly totalAmount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly bidder: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveConfiscated: boolean;
    readonly asReserveConfiscated: {
      readonly paraId: u32;
      readonly leaser: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBidAccepted: boolean;
    readonly asBidAccepted: {
      readonly bidder: AccountId32;
      readonly paraId: u32;
      readonly amount: u128;
      readonly firstSlot: u32;
      readonly lastSlot: u32;
    } & Struct;
    readonly isWinningOffset: boolean;
    readonly asWinningOffset: {
      readonly auctionIndex: u32;
      readonly blockNumber: u32;
    } & Struct;
    readonly type: 'AuctionStarted' | 'AuctionClosed' | 'Reserved' | 'Unreserved' | 'ReserveConfiscated' | 'BidAccepted' | 'WinningOffset';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletEvent (463) */
  interface PolkadotRuntimeCommonCrowdloanPalletEvent extends Enum {
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly paraId: u32;
    } & Struct;
    readonly isContributed: boolean;
    readonly asContributed: {
      readonly who: AccountId32;
      readonly fundIndex: u32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrew: boolean;
    readonly asWithdrew: {
      readonly who: AccountId32;
      readonly fundIndex: u32;
      readonly amount: u128;
    } & Struct;
    readonly isPartiallyRefunded: boolean;
    readonly asPartiallyRefunded: {
      readonly paraId: u32;
    } & Struct;
    readonly isAllRefunded: boolean;
    readonly asAllRefunded: {
      readonly paraId: u32;
    } & Struct;
    readonly isDissolved: boolean;
    readonly asDissolved: {
      readonly paraId: u32;
    } & Struct;
    readonly isHandleBidResult: boolean;
    readonly asHandleBidResult: {
      readonly paraId: u32;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isEdited: boolean;
    readonly asEdited: {
      readonly paraId: u32;
    } & Struct;
    readonly isMemoUpdated: boolean;
    readonly asMemoUpdated: {
      readonly who: AccountId32;
      readonly paraId: u32;
      readonly memo: Bytes;
    } & Struct;
    readonly isAddedToNewRaise: boolean;
    readonly asAddedToNewRaise: {
      readonly paraId: u32;
    } & Struct;
    readonly type: 'Created' | 'Contributed' | 'Withdrew' | 'PartiallyRefunded' | 'AllRefunded' | 'Dissolved' | 'HandleBidResult' | 'Edited' | 'MemoUpdated' | 'AddedToNewRaise';
  }

  /** @name PalletXcmEvent (464) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isSent: boolean;
    readonly asSent: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly destination: StagingXcmV3MultiLocation;
      readonly message: XcmV3Xcm;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseReady: boolean;
    readonly asResponseReady: {
      readonly queryId: u64;
      readonly response: XcmV3Response;
    } & Struct;
    readonly isNotified: boolean;
    readonly asNotified: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
      readonly actualWeight: SpWeightsWeightV2Weight;
      readonly maxBudgetedWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: {
      readonly queryId: u64;
      readonly palletIndex: u8;
      readonly callIndex: u8;
    } & Struct;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedLocation: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: {
      readonly queryId: u64;
    } & Struct;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: XcmVersionedMultiAssets;
    } & Struct;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly result: u32;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: {
      readonly location: StagingXcmV3MultiLocation;
      readonly version: u32;
    } & Struct;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: {
      readonly location: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly error: XcmV3TraitsError;
    } & Struct;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: {
      readonly location: XcmVersionedMultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
    } & Struct;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: {
      readonly origin: StagingXcmV3MultiLocation;
      readonly queryId: u64;
      readonly expectedQuerier: StagingXcmV3MultiLocation;
      readonly maybeActualQuerier: Option<StagingXcmV3MultiLocation>;
    } & Struct;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: {
      readonly destination: StagingXcmV3MultiLocation;
      readonly cost: XcmV3MultiassetMultiAssets;
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: {
      readonly paying: StagingXcmV3MultiLocation;
      readonly fees: XcmV3MultiassetMultiAssets;
    } & Struct;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: {
      readonly hash_: H256;
      readonly origin: StagingXcmV3MultiLocation;
      readonly assets: XcmVersionedMultiAssets;
    } & Struct;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3TraitsOutcome (465) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name PalletMessageQueueEvent (466) */
  interface PalletMessageQueueEvent extends Enum {
    readonly isProcessingFailed: boolean;
    readonly asProcessingFailed: {
      readonly id: U8aFixed;
      readonly origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly error: FrameSupportMessagesProcessMessageError;
    } & Struct;
    readonly isProcessed: boolean;
    readonly asProcessed: {
      readonly id: U8aFixed;
      readonly origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly success: bool;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly id: U8aFixed;
      readonly origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly pageIndex: u32;
      readonly messageIndex: u32;
    } & Struct;
    readonly isPageReaped: boolean;
    readonly asPageReaped: {
      readonly origin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
      readonly index: u32;
    } & Struct;
    readonly type: 'ProcessingFailed' | 'Processed' | 'OverweightEnqueued' | 'PageReaped';
  }

  /** @name FrameSupportMessagesProcessMessageError (467) */
  interface FrameSupportMessagesProcessMessageError extends Enum {
    readonly isBadFormat: boolean;
    readonly isCorrupt: boolean;
    readonly isUnsupported: boolean;
    readonly isOverweight: boolean;
    readonly asOverweight: SpWeightsWeightV2Weight;
    readonly isYield: boolean;
    readonly type: 'BadFormat' | 'Corrupt' | 'Unsupported' | 'Overweight' | 'Yield';
  }

  /** @name PalletAssetRateEvent (468) */
  interface PalletAssetRateEvent extends Enum {
    readonly isAssetRateCreated: boolean;
    readonly asAssetRateCreated: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly rate: u128;
    } & Struct;
    readonly isAssetRateRemoved: boolean;
    readonly asAssetRateRemoved: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    } & Struct;
    readonly isAssetRateUpdated: boolean;
    readonly asAssetRateUpdated: {
      readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
      readonly old: u128;
      readonly new_: u128;
    } & Struct;
    readonly type: 'AssetRateCreated' | 'AssetRateRemoved' | 'AssetRateUpdated';
  }

  /** @name FrameSystemPhase (469) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (471) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemLimitsBlockWeights (473) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (474) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (475) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (476) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (477) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (478) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (479) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (483) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletSchedulerScheduled (486) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: PolkadotRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (488) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageOldRequestStatus (489) */
  interface PalletPreimageOldRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageRequestStatus (491) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly ticket: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly maybeTicket: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly maybeLen: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (497) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly isTooMany: boolean;
    readonly isTooFew: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested' | 'TooMany' | 'TooFew';
  }

  /** @name SpConsensusBabeDigestsPreDigest (504) */
  interface SpConsensusBabeDigestsPreDigest extends Enum {
    readonly isPrimary: boolean;
    readonly asPrimary: SpConsensusBabeDigestsPrimaryPreDigest;
    readonly isSecondaryPlain: boolean;
    readonly asSecondaryPlain: SpConsensusBabeDigestsSecondaryPlainPreDigest;
    readonly isSecondaryVRF: boolean;
    readonly asSecondaryVRF: SpConsensusBabeDigestsSecondaryVRFPreDigest;
    readonly type: 'Primary' | 'SecondaryPlain' | 'SecondaryVRF';
  }

  /** @name SpConsensusBabeDigestsPrimaryPreDigest (505) */
  interface SpConsensusBabeDigestsPrimaryPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpCoreSr25519VrfVrfSignature (506) */
  interface SpCoreSr25519VrfVrfSignature extends Struct {
    readonly output: U8aFixed;
    readonly proof: U8aFixed;
  }

  /** @name SpConsensusBabeDigestsSecondaryPlainPreDigest (507) */
  interface SpConsensusBabeDigestsSecondaryPlainPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
  }

  /** @name SpConsensusBabeDigestsSecondaryVRFPreDigest (508) */
  interface SpConsensusBabeDigestsSecondaryVRFPreDigest extends Struct {
    readonly authorityIndex: u32;
    readonly slot: u64;
    readonly vrfSignature: SpCoreSr25519VrfVrfSignature;
  }

  /** @name SpConsensusBabeBabeEpochConfiguration (509) */
  interface SpConsensusBabeBabeEpochConfiguration extends Struct {
    readonly c: ITuple<[u64, u64]>;
    readonly allowedSlots: SpConsensusBabeAllowedSlots;
  }

  /** @name PalletBabeError (513) */
  interface PalletBabeError extends Enum {
    readonly isInvalidEquivocationProof: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidEquivocationProof' | 'InvalidKeyOwnershipProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name PalletIndicesError (515) */
  interface PalletIndicesError extends Enum {
    readonly isNotAssigned: boolean;
    readonly isNotOwner: boolean;
    readonly isInUse: boolean;
    readonly isNotTransfer: boolean;
    readonly isPermanent: boolean;
    readonly type: 'NotAssigned' | 'NotOwner' | 'InUse' | 'NotTransfer' | 'Permanent';
  }

  /** @name PalletBalancesBalanceLock (517) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (518) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (521) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesIdAmountRuntimeHoldReason (524) */
  interface PalletBalancesIdAmountRuntimeHoldReason extends Struct {
    readonly id: PolkadotRuntimeRuntimeHoldReason;
    readonly amount: u128;
  }

  /** @name PolkadotRuntimeRuntimeHoldReason (525) */
  interface PolkadotRuntimeRuntimeHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly asPreimage: PalletPreimageHoldReason;
    readonly type: 'Preimage';
  }

  /** @name PalletPreimageHoldReason (526) */
  interface PalletPreimageHoldReason extends Enum {
    readonly isPreimage: boolean;
    readonly type: 'Preimage';
  }

  /** @name PalletBalancesIdAmountRuntimeFreezeReason (529) */
  interface PalletBalancesIdAmountRuntimeFreezeReason extends Struct {
    readonly id: PolkadotRuntimeRuntimeFreezeReason;
    readonly amount: u128;
  }

  /** @name PolkadotRuntimeRuntimeFreezeReason (530) */
  interface PolkadotRuntimeRuntimeFreezeReason extends Enum {
    readonly isNominationPools: boolean;
    readonly asNominationPools: PalletNominationPoolsFreezeReason;
    readonly type: 'NominationPools';
  }

  /** @name PalletNominationPoolsFreezeReason (531) */
  interface PalletNominationPoolsFreezeReason extends Enum {
    readonly isPoolMinBalance: boolean;
    readonly type: 'PoolMinBalance';
  }

  /** @name PalletBalancesError (533) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (534) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletStakingStakingLedger (535) */
  interface PalletStakingStakingLedger extends Struct {
    readonly stash: AccountId32;
    readonly total: Compact<u128>;
    readonly active: Compact<u128>;
    readonly unlocking: Vec<PalletStakingUnlockChunk>;
    readonly claimedRewards: Vec<u32>;
  }

  /** @name PalletStakingUnlockChunk (537) */
  interface PalletStakingUnlockChunk extends Struct {
    readonly value: Compact<u128>;
    readonly era: Compact<u32>;
  }

  /** @name PalletStakingNominations (540) */
  interface PalletStakingNominations extends Struct {
    readonly targets: Vec<AccountId32>;
    readonly submittedIn: u32;
    readonly suppressed: bool;
  }

  /** @name PalletStakingActiveEraInfo (542) */
  interface PalletStakingActiveEraInfo extends Struct {
    readonly index: u32;
    readonly start: Option<u64>;
  }

  /** @name PalletStakingEraRewardPoints (545) */
  interface PalletStakingEraRewardPoints extends Struct {
    readonly total: u32;
    readonly individual: BTreeMap<AccountId32, u32>;
  }

  /** @name PalletStakingUnappliedSlash (550) */
  interface PalletStakingUnappliedSlash extends Struct {
    readonly validator: AccountId32;
    readonly own: u128;
    readonly others: Vec<ITuple<[AccountId32, u128]>>;
    readonly reporters: Vec<AccountId32>;
    readonly payout: u128;
  }

  /** @name PalletStakingSlashingSlashingSpans (552) */
  interface PalletStakingSlashingSlashingSpans extends Struct {
    readonly spanIndex: u32;
    readonly lastStart: u32;
    readonly lastNonzeroSlash: u32;
    readonly prior: Vec<u32>;
  }

  /** @name PalletStakingSlashingSpanRecord (553) */
  interface PalletStakingSlashingSpanRecord extends Struct {
    readonly slashed: u128;
    readonly paidOut: u128;
  }

  /** @name PalletStakingPalletError (556) */
  interface PalletStakingPalletError extends Enum {
    readonly isNotController: boolean;
    readonly isNotStash: boolean;
    readonly isAlreadyBonded: boolean;
    readonly isAlreadyPaired: boolean;
    readonly isEmptyTargets: boolean;
    readonly isDuplicateIndex: boolean;
    readonly isInvalidSlashIndex: boolean;
    readonly isInsufficientBond: boolean;
    readonly isNoMoreChunks: boolean;
    readonly isNoUnlockChunk: boolean;
    readonly isFundedTarget: boolean;
    readonly isInvalidEraToReward: boolean;
    readonly isInvalidNumberOfNominations: boolean;
    readonly isNotSortedAndUnique: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isIncorrectHistoryDepth: boolean;
    readonly isIncorrectSlashingSpans: boolean;
    readonly isBadState: boolean;
    readonly isTooManyTargets: boolean;
    readonly isBadTarget: boolean;
    readonly isCannotChillOther: boolean;
    readonly isTooManyNominators: boolean;
    readonly isTooManyValidators: boolean;
    readonly isCommissionTooLow: boolean;
    readonly isBoundNotMet: boolean;
    readonly type: 'NotController' | 'NotStash' | 'AlreadyBonded' | 'AlreadyPaired' | 'EmptyTargets' | 'DuplicateIndex' | 'InvalidSlashIndex' | 'InsufficientBond' | 'NoMoreChunks' | 'NoUnlockChunk' | 'FundedTarget' | 'InvalidEraToReward' | 'InvalidNumberOfNominations' | 'NotSortedAndUnique' | 'AlreadyClaimed' | 'IncorrectHistoryDepth' | 'IncorrectSlashingSpans' | 'BadState' | 'TooManyTargets' | 'BadTarget' | 'CannotChillOther' | 'TooManyNominators' | 'TooManyValidators' | 'CommissionTooLow' | 'BoundNotMet';
  }

  /** @name SpStakingOffenceOffenceDetails (557) */
  interface SpStakingOffenceOffenceDetails extends Struct {
    readonly offender: ITuple<[AccountId32, PalletStakingExposure]>;
    readonly reporters: Vec<AccountId32>;
  }

  /** @name SpCoreCryptoKeyTypeId (562) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (563) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name PalletGrandpaStoredState (564) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (565) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpConsensusGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaError (567) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletImOnlineError (570) */
  interface PalletImOnlineError extends Enum {
    readonly isInvalidKey: boolean;
    readonly isDuplicatedHeartbeat: boolean;
    readonly type: 'InvalidKey' | 'DuplicatedHeartbeat';
  }

  /** @name PalletTreasuryProposal (571) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name PalletTreasurySpendStatus (573) */
  interface PalletTreasurySpendStatus extends Struct {
    readonly assetKind: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    readonly amount: u128;
    readonly beneficiary: XcmVersionedMultiLocation;
    readonly validFrom: u32;
    readonly expireAt: u32;
    readonly status: PalletTreasuryPaymentState;
  }

  /** @name PalletTreasuryPaymentState (574) */
  interface PalletTreasuryPaymentState extends Enum {
    readonly isPending: boolean;
    readonly isAttempted: boolean;
    readonly asAttempted: {
      readonly id: u64;
    } & Struct;
    readonly isFailed: boolean;
    readonly type: 'Pending' | 'Attempted' | 'Failed';
  }

  /** @name FrameSupportPalletId (577) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (578) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly isFailedToConvertBalance: boolean;
    readonly isSpendExpired: boolean;
    readonly isEarlyPayout: boolean;
    readonly isAlreadyAttempted: boolean;
    readonly isPayoutError: boolean;
    readonly isNotAttempted: boolean;
    readonly isInconclusive: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved' | 'FailedToConvertBalance' | 'SpendExpired' | 'EarlyPayout' | 'AlreadyAttempted' | 'PayoutError' | 'NotAttempted' | 'Inconclusive';
  }

  /** @name PalletConvictionVotingVoteVoting (580) */
  interface PalletConvictionVotingVoteVoting extends Enum {
    readonly isCasting: boolean;
    readonly asCasting: PalletConvictionVotingVoteCasting;
    readonly isDelegating: boolean;
    readonly asDelegating: PalletConvictionVotingVoteDelegating;
    readonly type: 'Casting' | 'Delegating';
  }

  /** @name PalletConvictionVotingVoteCasting (581) */
  interface PalletConvictionVotingVoteCasting extends Struct {
    readonly votes: Vec<ITuple<[u32, PalletConvictionVotingVoteAccountVote]>>;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingDelegations (585) */
  interface PalletConvictionVotingDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletConvictionVotingVotePriorLock (586) */
  interface PalletConvictionVotingVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletConvictionVotingVoteDelegating (587) */
  interface PalletConvictionVotingVoteDelegating extends Struct {
    readonly balance: u128;
    readonly target: AccountId32;
    readonly conviction: PalletConvictionVotingConviction;
    readonly delegations: PalletConvictionVotingDelegations;
    readonly prior: PalletConvictionVotingVotePriorLock;
  }

  /** @name PalletConvictionVotingError (591) */
  interface PalletConvictionVotingError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isNoPermissionYet: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isAlreadyVoting: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isNonsense: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isClassNeeded: boolean;
    readonly isBadClass: boolean;
    readonly type: 'NotOngoing' | 'NotVoter' | 'NoPermission' | 'NoPermissionYet' | 'AlreadyDelegating' | 'AlreadyVoting' | 'InsufficientFunds' | 'NotDelegating' | 'Nonsense' | 'MaxVotesReached' | 'ClassNeeded' | 'BadClass';
  }

  /** @name PalletReferendaReferendumInfo (592) */
  interface PalletReferendaReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletReferendaReferendumStatus;
    readonly isApproved: boolean;
    readonly asApproved: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isRejected: boolean;
    readonly asRejected: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isCancelled: boolean;
    readonly asCancelled: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isTimedOut: boolean;
    readonly asTimedOut: ITuple<[u32, Option<PalletReferendaDeposit>, Option<PalletReferendaDeposit>]>;
    readonly isKilled: boolean;
    readonly asKilled: u32;
    readonly type: 'Ongoing' | 'Approved' | 'Rejected' | 'Cancelled' | 'TimedOut' | 'Killed';
  }

  /** @name PalletReferendaReferendumStatus (593) */
  interface PalletReferendaReferendumStatus extends Struct {
    readonly track: u16;
    readonly origin: PolkadotRuntimeOriginCaller;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly enactment: FrameSupportScheduleDispatchTime;
    readonly submitted: u32;
    readonly submissionDeposit: PalletReferendaDeposit;
    readonly decisionDeposit: Option<PalletReferendaDeposit>;
    readonly deciding: Option<PalletReferendaDecidingStatus>;
    readonly tally: PalletConvictionVotingTally;
    readonly inQueue: bool;
    readonly alarm: Option<ITuple<[u32, ITuple<[u32, u32]>]>>;
  }

  /** @name PalletReferendaDeposit (594) */
  interface PalletReferendaDeposit extends Struct {
    readonly who: AccountId32;
    readonly amount: u128;
  }

  /** @name PalletReferendaDecidingStatus (597) */
  interface PalletReferendaDecidingStatus extends Struct {
    readonly since: u32;
    readonly confirming: Option<u32>;
  }

  /** @name PalletReferendaTrackInfo (605) */
  interface PalletReferendaTrackInfo extends Struct {
    readonly name: Text;
    readonly maxDeciding: u32;
    readonly decisionDeposit: u128;
    readonly preparePeriod: u32;
    readonly decisionPeriod: u32;
    readonly confirmPeriod: u32;
    readonly minEnactmentPeriod: u32;
    readonly minApproval: PalletReferendaCurve;
    readonly minSupport: PalletReferendaCurve;
  }

  /** @name PalletReferendaCurve (606) */
  interface PalletReferendaCurve extends Enum {
    readonly isLinearDecreasing: boolean;
    readonly asLinearDecreasing: {
      readonly length: Perbill;
      readonly floor: Perbill;
      readonly ceil: Perbill;
    } & Struct;
    readonly isSteppedDecreasing: boolean;
    readonly asSteppedDecreasing: {
      readonly begin: Perbill;
      readonly end: Perbill;
      readonly step: Perbill;
      readonly period: Perbill;
    } & Struct;
    readonly isReciprocal: boolean;
    readonly asReciprocal: {
      readonly factor: i64;
      readonly xOffset: i64;
      readonly yOffset: i64;
    } & Struct;
    readonly type: 'LinearDecreasing' | 'SteppedDecreasing' | 'Reciprocal';
  }

  /** @name PalletReferendaError (609) */
  interface PalletReferendaError extends Enum {
    readonly isNotOngoing: boolean;
    readonly isHasDeposit: boolean;
    readonly isBadTrack: boolean;
    readonly isFull: boolean;
    readonly isQueueEmpty: boolean;
    readonly isBadReferendum: boolean;
    readonly isNothingToDo: boolean;
    readonly isNoTrack: boolean;
    readonly isUnfinished: boolean;
    readonly isNoPermission: boolean;
    readonly isNoDeposit: boolean;
    readonly isBadStatus: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'NotOngoing' | 'HasDeposit' | 'BadTrack' | 'Full' | 'QueueEmpty' | 'BadReferendum' | 'NothingToDo' | 'NoTrack' | 'Unfinished' | 'NoPermission' | 'NoDeposit' | 'BadStatus' | 'PreimageNotExist';
  }

  /** @name PalletWhitelistError (610) */
  interface PalletWhitelistError extends Enum {
    readonly isUnavailablePreImage: boolean;
    readonly isUndecodableCall: boolean;
    readonly isInvalidCallWeightWitness: boolean;
    readonly isCallIsNotWhitelisted: boolean;
    readonly isCallAlreadyWhitelisted: boolean;
    readonly type: 'UnavailablePreImage' | 'UndecodableCall' | 'InvalidCallWeightWitness' | 'CallIsNotWhitelisted' | 'CallAlreadyWhitelisted';
  }

  /** @name PolkadotRuntimeCommonClaimsPalletError (611) */
  interface PolkadotRuntimeCommonClaimsPalletError extends Enum {
    readonly isInvalidEthereumSignature: boolean;
    readonly isSignerHasNoClaim: boolean;
    readonly isSenderHasNoClaim: boolean;
    readonly isPotUnderflow: boolean;
    readonly isInvalidStatement: boolean;
    readonly isVestedBalanceExists: boolean;
    readonly type: 'InvalidEthereumSignature' | 'SignerHasNoClaim' | 'SenderHasNoClaim' | 'PotUnderflow' | 'InvalidStatement' | 'VestedBalanceExists';
  }

  /** @name PalletVestingReleases (614) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (615) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletUtilityError (616) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name PalletIdentityRegistration (617) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentitySimpleIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (625) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (627) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletProxyProxyDefinition (630) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: PolkadotRuntimeProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (634) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (636) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name PalletMultisigMultisig (638) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (640) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletBountiesBounty (641) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (642) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (644) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletChildBountiesChildBounty (645) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (646) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (647) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name PalletElectionProviderMultiPhaseReadySolution (648) */
  interface PalletElectionProviderMultiPhaseReadySolution extends Struct {
    readonly supports: Vec<ITuple<[AccountId32, SpNposElectionsSupport]>>;
    readonly score: SpNposElectionsElectionScore;
    readonly compute: PalletElectionProviderMultiPhaseElectionCompute;
  }

  /** @name PalletElectionProviderMultiPhaseRoundSnapshot (650) */
  interface PalletElectionProviderMultiPhaseRoundSnapshot extends Struct {
    readonly voters: Vec<ITuple<[AccountId32, u64, Vec<AccountId32>]>>;
    readonly targets: Vec<AccountId32>;
  }

  /** @name PalletElectionProviderMultiPhaseSignedSignedSubmission (656) */
  interface PalletElectionProviderMultiPhaseSignedSignedSubmission extends Struct {
    readonly who: AccountId32;
    readonly deposit: u128;
    readonly rawSolution: PalletElectionProviderMultiPhaseRawSolution;
    readonly callFee: u128;
  }

  /** @name PalletElectionProviderMultiPhaseError (657) */
  interface PalletElectionProviderMultiPhaseError extends Enum {
    readonly isPreDispatchEarlySubmission: boolean;
    readonly isPreDispatchWrongWinnerCount: boolean;
    readonly isPreDispatchWeakSubmission: boolean;
    readonly isSignedQueueFull: boolean;
    readonly isSignedCannotPayDeposit: boolean;
    readonly isSignedInvalidWitness: boolean;
    readonly isSignedTooMuchWeight: boolean;
    readonly isOcwCallWrongEra: boolean;
    readonly isMissingSnapshotMetadata: boolean;
    readonly isInvalidSubmissionIndex: boolean;
    readonly isCallNotAllowed: boolean;
    readonly isFallbackFailed: boolean;
    readonly isBoundNotMet: boolean;
    readonly isTooManyWinners: boolean;
    readonly type: 'PreDispatchEarlySubmission' | 'PreDispatchWrongWinnerCount' | 'PreDispatchWeakSubmission' | 'SignedQueueFull' | 'SignedCannotPayDeposit' | 'SignedInvalidWitness' | 'SignedTooMuchWeight' | 'OcwCallWrongEra' | 'MissingSnapshotMetadata' | 'InvalidSubmissionIndex' | 'CallNotAllowed' | 'FallbackFailed' | 'BoundNotMet' | 'TooManyWinners';
  }

  /** @name PalletBagsListListNode (658) */
  interface PalletBagsListListNode extends Struct {
    readonly id: AccountId32;
    readonly prev: Option<AccountId32>;
    readonly next: Option<AccountId32>;
    readonly bagUpper: u64;
    readonly score: u64;
  }

  /** @name PalletBagsListListBag (659) */
  interface PalletBagsListListBag extends Struct {
    readonly head: Option<AccountId32>;
    readonly tail: Option<AccountId32>;
  }

  /** @name PalletBagsListError (661) */
  interface PalletBagsListError extends Enum {
    readonly isList: boolean;
    readonly asList: PalletBagsListListListError;
    readonly type: 'List';
  }

  /** @name PalletBagsListListListError (662) */
  interface PalletBagsListListListError extends Enum {
    readonly isDuplicate: boolean;
    readonly isNotHeavier: boolean;
    readonly isNotInSameBag: boolean;
    readonly isNodeNotFound: boolean;
    readonly type: 'Duplicate' | 'NotHeavier' | 'NotInSameBag' | 'NodeNotFound';
  }

  /** @name PalletNominationPoolsPoolMember (663) */
  interface PalletNominationPoolsPoolMember extends Struct {
    readonly poolId: u32;
    readonly points: u128;
    readonly lastRecordedRewardCounter: u128;
    readonly unbondingEras: BTreeMap<u32, u128>;
  }

  /** @name PalletNominationPoolsBondedPoolInner (666) */
  interface PalletNominationPoolsBondedPoolInner extends Struct {
    readonly commission: PalletNominationPoolsCommission;
    readonly memberCounter: u32;
    readonly points: u128;
    readonly roles: PalletNominationPoolsPoolRoles;
    readonly state: PalletNominationPoolsPoolState;
  }

  /** @name PalletNominationPoolsCommission (667) */
  interface PalletNominationPoolsCommission extends Struct {
    readonly current: Option<ITuple<[Perbill, AccountId32]>>;
    readonly max: Option<Perbill>;
    readonly changeRate: Option<PalletNominationPoolsCommissionChangeRate>;
    readonly throttleFrom: Option<u32>;
  }

  /** @name PalletNominationPoolsPoolRoles (670) */
  interface PalletNominationPoolsPoolRoles extends Struct {
    readonly depositor: AccountId32;
    readonly root: Option<AccountId32>;
    readonly nominator: Option<AccountId32>;
    readonly bouncer: Option<AccountId32>;
  }

  /** @name PalletNominationPoolsRewardPool (671) */
  interface PalletNominationPoolsRewardPool extends Struct {
    readonly lastRecordedRewardCounter: u128;
    readonly lastRecordedTotalPayouts: u128;
    readonly totalRewardsClaimed: u128;
    readonly totalCommissionPending: u128;
    readonly totalCommissionClaimed: u128;
  }

  /** @name PalletNominationPoolsSubPools (672) */
  interface PalletNominationPoolsSubPools extends Struct {
    readonly noEra: PalletNominationPoolsUnbondPool;
    readonly withEra: BTreeMap<u32, PalletNominationPoolsUnbondPool>;
  }

  /** @name PalletNominationPoolsUnbondPool (673) */
  interface PalletNominationPoolsUnbondPool extends Struct {
    readonly points: u128;
    readonly balance: u128;
  }

  /** @name PalletNominationPoolsError (679) */
  interface PalletNominationPoolsError extends Enum {
    readonly isPoolNotFound: boolean;
    readonly isPoolMemberNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isAccountBelongsToOtherPool: boolean;
    readonly isFullyUnbonding: boolean;
    readonly isMaxUnbondingLimit: boolean;
    readonly isCannotWithdrawAny: boolean;
    readonly isMinimumBondNotMet: boolean;
    readonly isOverflowRisk: boolean;
    readonly isNotDestroying: boolean;
    readonly isNotNominator: boolean;
    readonly isNotKickerOrDestroying: boolean;
    readonly isNotOpen: boolean;
    readonly isMaxPools: boolean;
    readonly isMaxPoolMembers: boolean;
    readonly isCanNotChangeState: boolean;
    readonly isDoesNotHavePermission: boolean;
    readonly isMetadataExceedsMaxLen: boolean;
    readonly isDefensive: boolean;
    readonly asDefensive: PalletNominationPoolsDefensiveError;
    readonly isPartialUnbondNotAllowedPermissionlessly: boolean;
    readonly isMaxCommissionRestricted: boolean;
    readonly isCommissionExceedsMaximum: boolean;
    readonly isCommissionExceedsGlobalMaximum: boolean;
    readonly isCommissionChangeThrottled: boolean;
    readonly isCommissionChangeRateNotAllowed: boolean;
    readonly isNoPendingCommission: boolean;
    readonly isNoCommissionCurrentSet: boolean;
    readonly isPoolIdInUse: boolean;
    readonly isInvalidPoolId: boolean;
    readonly isBondExtraRestricted: boolean;
    readonly isNothingToAdjust: boolean;
    readonly type: 'PoolNotFound' | 'PoolMemberNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'AccountBelongsToOtherPool' | 'FullyUnbonding' | 'MaxUnbondingLimit' | 'CannotWithdrawAny' | 'MinimumBondNotMet' | 'OverflowRisk' | 'NotDestroying' | 'NotNominator' | 'NotKickerOrDestroying' | 'NotOpen' | 'MaxPools' | 'MaxPoolMembers' | 'CanNotChangeState' | 'DoesNotHavePermission' | 'MetadataExceedsMaxLen' | 'Defensive' | 'PartialUnbondNotAllowedPermissionlessly' | 'MaxCommissionRestricted' | 'CommissionExceedsMaximum' | 'CommissionExceedsGlobalMaximum' | 'CommissionChangeThrottled' | 'CommissionChangeRateNotAllowed' | 'NoPendingCommission' | 'NoCommissionCurrentSet' | 'PoolIdInUse' | 'InvalidPoolId' | 'BondExtraRestricted' | 'NothingToAdjust';
  }

  /** @name PalletNominationPoolsDefensiveError (680) */
  interface PalletNominationPoolsDefensiveError extends Enum {
    readonly isNotEnoughSpaceInUnbondPool: boolean;
    readonly isPoolNotFound: boolean;
    readonly isRewardPoolNotFound: boolean;
    readonly isSubPoolsNotFound: boolean;
    readonly isBondedStashKilledPrematurely: boolean;
    readonly type: 'NotEnoughSpaceInUnbondPool' | 'PoolNotFound' | 'RewardPoolNotFound' | 'SubPoolsNotFound' | 'BondedStashKilledPrematurely';
  }

  /** @name PalletFastUnstakeUnstakeRequest (681) */
  interface PalletFastUnstakeUnstakeRequest extends Struct {
    readonly stashes: Vec<ITuple<[AccountId32, u128]>>;
    readonly checked: Vec<u32>;
  }

  /** @name PalletFastUnstakeError (684) */
  interface PalletFastUnstakeError extends Enum {
    readonly isNotController: boolean;
    readonly isAlreadyQueued: boolean;
    readonly isNotFullyBonded: boolean;
    readonly isNotQueued: boolean;
    readonly isAlreadyHead: boolean;
    readonly isCallNotAllowed: boolean;
    readonly type: 'NotController' | 'AlreadyQueued' | 'NotFullyBonded' | 'NotQueued' | 'AlreadyHead' | 'CallNotAllowed';
  }

  /** @name PolkadotRuntimeParachainsConfigurationHostConfiguration (685) */
  interface PolkadotRuntimeParachainsConfigurationHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
    readonly asyncBackingParams: PolkadotPrimitivesV6AsyncBackingAsyncBackingParams;
    readonly maxPovSize: u32;
    readonly maxDownwardMessageSize: u32;
    readonly hrmpMaxParachainOutboundChannels: u32;
    readonly hrmpSenderDeposit: u128;
    readonly hrmpRecipientDeposit: u128;
    readonly hrmpChannelMaxCapacity: u32;
    readonly hrmpChannelMaxTotalSize: u32;
    readonly hrmpMaxParachainInboundChannels: u32;
    readonly hrmpChannelMaxMessageSize: u32;
    readonly executorParams: PolkadotPrimitivesV6ExecutorParams;
    readonly codeRetentionPeriod: u32;
    readonly onDemandCores: u32;
    readonly onDemandRetries: u32;
    readonly onDemandQueueMaxSize: u32;
    readonly onDemandTargetQueueUtilization: Perbill;
    readonly onDemandFeeVariability: Perbill;
    readonly onDemandBaseFee: u128;
    readonly onDemandTtl: u32;
    readonly groupRotationFrequency: u32;
    readonly parasAvailabilityPeriod: u32;
    readonly schedulingLookahead: u32;
    readonly maxValidatorsPerCore: Option<u32>;
    readonly maxValidators: Option<u32>;
    readonly disputePeriod: u32;
    readonly disputePostConclusionAcceptancePeriod: u32;
    readonly noShowSlots: u32;
    readonly nDelayTranches: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly neededApprovals: u32;
    readonly relayVrfModuloSamples: u32;
    readonly pvfVotingTtl: u32;
    readonly minimumValidationUpgradeDelay: u32;
    readonly minimumBackingVotes: u32;
  }

  /** @name PolkadotRuntimeParachainsConfigurationPalletError (688) */
  interface PolkadotRuntimeParachainsConfigurationPalletError extends Enum {
    readonly isInvalidNewValue: boolean;
    readonly type: 'InvalidNewValue';
  }

  /** @name PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker (691) */
  interface PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker extends Struct {
    readonly buffer: Vec<ITuple<[H256, H256]>>;
    readonly latestNumber: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord (694) */
  interface PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord extends Struct {
    readonly bitfield: BitVec;
    readonly submittedAt: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionCandidatePendingAvailability (695) */
  interface PolkadotRuntimeParachainsInclusionCandidatePendingAvailability extends Struct {
    readonly core: u32;
    readonly hash_: H256;
    readonly descriptor: PolkadotPrimitivesV6CandidateDescriptor;
    readonly availabilityVotes: BitVec;
    readonly backers: BitVec;
    readonly relayParentNumber: u32;
    readonly backedInNumber: u32;
    readonly backingGroup: u32;
  }

  /** @name PolkadotRuntimeParachainsInclusionPalletError (696) */
  interface PolkadotRuntimeParachainsInclusionPalletError extends Enum {
    readonly isUnsortedOrDuplicateValidatorIndices: boolean;
    readonly isUnsortedOrDuplicateDisputeStatementSet: boolean;
    readonly isUnsortedOrDuplicateBackedCandidates: boolean;
    readonly isUnexpectedRelayParent: boolean;
    readonly isWrongBitfieldSize: boolean;
    readonly isBitfieldAllZeros: boolean;
    readonly isBitfieldDuplicateOrUnordered: boolean;
    readonly isValidatorIndexOutOfBounds: boolean;
    readonly isInvalidBitfieldSignature: boolean;
    readonly isUnscheduledCandidate: boolean;
    readonly isCandidateScheduledBeforeParaFree: boolean;
    readonly isScheduledOutOfOrder: boolean;
    readonly isHeadDataTooLarge: boolean;
    readonly isPrematureCodeUpgrade: boolean;
    readonly isNewCodeTooLarge: boolean;
    readonly isDisallowedRelayParent: boolean;
    readonly isInvalidAssignment: boolean;
    readonly isInvalidGroupIndex: boolean;
    readonly isInsufficientBacking: boolean;
    readonly isInvalidBacking: boolean;
    readonly isNotCollatorSigned: boolean;
    readonly isValidationDataHashMismatch: boolean;
    readonly isIncorrectDownwardMessageHandling: boolean;
    readonly isInvalidUpwardMessages: boolean;
    readonly isHrmpWatermarkMishandling: boolean;
    readonly isInvalidOutboundHrmp: boolean;
    readonly isInvalidValidationCodeHash: boolean;
    readonly isParaHeadMismatch: boolean;
    readonly isBitfieldReferencesFreedCore: boolean;
    readonly type: 'UnsortedOrDuplicateValidatorIndices' | 'UnsortedOrDuplicateDisputeStatementSet' | 'UnsortedOrDuplicateBackedCandidates' | 'UnexpectedRelayParent' | 'WrongBitfieldSize' | 'BitfieldAllZeros' | 'BitfieldDuplicateOrUnordered' | 'ValidatorIndexOutOfBounds' | 'InvalidBitfieldSignature' | 'UnscheduledCandidate' | 'CandidateScheduledBeforeParaFree' | 'ScheduledOutOfOrder' | 'HeadDataTooLarge' | 'PrematureCodeUpgrade' | 'NewCodeTooLarge' | 'DisallowedRelayParent' | 'InvalidAssignment' | 'InvalidGroupIndex' | 'InsufficientBacking' | 'InvalidBacking' | 'NotCollatorSigned' | 'ValidationDataHashMismatch' | 'IncorrectDownwardMessageHandling' | 'InvalidUpwardMessages' | 'HrmpWatermarkMishandling' | 'InvalidOutboundHrmp' | 'InvalidValidationCodeHash' | 'ParaHeadMismatch' | 'BitfieldReferencesFreedCore';
  }

  /** @name PolkadotPrimitivesV6ScrapedOnChainVotes (697) */
  interface PolkadotPrimitivesV6ScrapedOnChainVotes extends Struct {
    readonly session: u32;
    readonly backingValidatorsPerCandidate: Vec<ITuple<[PolkadotPrimitivesV6CandidateReceipt, Vec<ITuple<[u32, PolkadotPrimitivesV6ValidityAttestation]>>]>>;
    readonly disputes: Vec<PolkadotPrimitivesV6DisputeStatementSet>;
  }

  /** @name PolkadotRuntimeParachainsParasInherentPalletError (702) */
  interface PolkadotRuntimeParachainsParasInherentPalletError extends Enum {
    readonly isTooManyInclusionInherents: boolean;
    readonly isInvalidParentHeader: boolean;
    readonly isCandidateConcludedInvalid: boolean;
    readonly isInherentOverweight: boolean;
    readonly isDisputeStatementsUnsortedOrDuplicates: boolean;
    readonly isDisputeInvalid: boolean;
    readonly type: 'TooManyInclusionInherents' | 'InvalidParentHeader' | 'CandidateConcludedInvalid' | 'InherentOverweight' | 'DisputeStatementsUnsortedOrDuplicates' | 'DisputeInvalid';
  }

  /** @name PolkadotRuntimeParachainsSchedulerPalletCoreOccupied (705) */
  interface PolkadotRuntimeParachainsSchedulerPalletCoreOccupied extends Enum {
    readonly isFree: boolean;
    readonly isParas: boolean;
    readonly asParas: PolkadotRuntimeParachainsSchedulerPalletParasEntry;
    readonly type: 'Free' | 'Paras';
  }

  /** @name PolkadotRuntimeParachainsSchedulerPalletParasEntry (706) */
  interface PolkadotRuntimeParachainsSchedulerPalletParasEntry extends Struct {
    readonly assignment: PolkadotRuntimeParachainsSchedulerCommonAssignment;
    readonly availabilityTimeouts: u32;
    readonly ttl: u32;
  }

  /** @name PolkadotRuntimeParachainsSchedulerCommonAssignment (707) */
  interface PolkadotRuntimeParachainsSchedulerCommonAssignment extends Struct {
    readonly paraId: u32;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckActiveVoteState (713) */
  interface PolkadotRuntimeParachainsParasPvfCheckActiveVoteState extends Struct {
    readonly votesAccept: BitVec;
    readonly votesReject: BitVec;
    readonly age: u32;
    readonly createdAt: u32;
    readonly causes: Vec<PolkadotRuntimeParachainsParasPvfCheckCause>;
  }

  /** @name PolkadotRuntimeParachainsParasPvfCheckCause (715) */
  interface PolkadotRuntimeParachainsParasPvfCheckCause extends Enum {
    readonly isOnboarding: boolean;
    readonly asOnboarding: u32;
    readonly isUpgrade: boolean;
    readonly asUpgrade: {
      readonly id: u32;
      readonly includedAt: u32;
      readonly setGoAhead: PolkadotRuntimeParachainsParasSetGoAhead;
    } & Struct;
    readonly type: 'Onboarding' | 'Upgrade';
  }

  /** @name PolkadotRuntimeParachainsParasSetGoAhead (716) */
  interface PolkadotRuntimeParachainsParasSetGoAhead extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name PolkadotRuntimeParachainsParasParaLifecycle (719) */
  interface PolkadotRuntimeParachainsParasParaLifecycle extends Enum {
    readonly isOnboarding: boolean;
    readonly isParathread: boolean;
    readonly isParachain: boolean;
    readonly isUpgradingParathread: boolean;
    readonly isDowngradingParachain: boolean;
    readonly isOffboardingParathread: boolean;
    readonly isOffboardingParachain: boolean;
    readonly type: 'Onboarding' | 'Parathread' | 'Parachain' | 'UpgradingParathread' | 'DowngradingParachain' | 'OffboardingParathread' | 'OffboardingParachain';
  }

  /** @name PolkadotRuntimeParachainsParasParaPastCodeMeta (721) */
  interface PolkadotRuntimeParachainsParasParaPastCodeMeta extends Struct {
    readonly upgradeTimes: Vec<PolkadotRuntimeParachainsParasReplacementTimes>;
    readonly lastPruned: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsParasReplacementTimes (723) */
  interface PolkadotRuntimeParachainsParasReplacementTimes extends Struct {
    readonly expectedAt: u32;
    readonly activatedAt: u32;
  }

  /** @name PolkadotPrimitivesV6UpgradeGoAhead (725) */
  interface PolkadotPrimitivesV6UpgradeGoAhead extends Enum {
    readonly isAbort: boolean;
    readonly isGoAhead: boolean;
    readonly type: 'Abort' | 'GoAhead';
  }

  /** @name PolkadotPrimitivesV6UpgradeRestriction (726) */
  interface PolkadotPrimitivesV6UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name PolkadotRuntimeParachainsParasParaGenesisArgs (727) */
  interface PolkadotRuntimeParachainsParasParaGenesisArgs extends Struct {
    readonly genesisHead: Bytes;
    readonly validationCode: Bytes;
    readonly paraKind: bool;
  }

  /** @name PolkadotRuntimeParachainsParasPalletError (728) */
  interface PolkadotRuntimeParachainsParasPalletError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isCannotOnboard: boolean;
    readonly isCannotOffboard: boolean;
    readonly isCannotUpgrade: boolean;
    readonly isCannotDowngrade: boolean;
    readonly isPvfCheckStatementStale: boolean;
    readonly isPvfCheckStatementFuture: boolean;
    readonly isPvfCheckValidatorIndexOutOfBounds: boolean;
    readonly isPvfCheckInvalidSignature: boolean;
    readonly isPvfCheckDoubleVote: boolean;
    readonly isPvfCheckSubjectInvalid: boolean;
    readonly isCannotUpgradeCode: boolean;
    readonly type: 'NotRegistered' | 'CannotOnboard' | 'CannotOffboard' | 'CannotUpgrade' | 'CannotDowngrade' | 'PvfCheckStatementStale' | 'PvfCheckStatementFuture' | 'PvfCheckValidatorIndexOutOfBounds' | 'PvfCheckInvalidSignature' | 'PvfCheckDoubleVote' | 'PvfCheckSubjectInvalid' | 'CannotUpgradeCode';
  }

  /** @name PolkadotRuntimeParachainsInitializerBufferedSessionChange (730) */
  interface PolkadotRuntimeParachainsInitializerBufferedSessionChange extends Struct {
    readonly validators: Vec<PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly queued: Vec<PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly sessionIndex: u32;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (732) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest (733) */
  interface PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest extends Struct {
    readonly confirmed: bool;
    readonly age: u32;
    readonly senderDeposit: u128;
    readonly maxMessageSize: u32;
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
  }

  /** @name PolkadotRuntimeParachainsHrmpHrmpChannel (735) */
  interface PolkadotRuntimeParachainsHrmpHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
    readonly senderDeposit: u128;
    readonly recipientDeposit: u128;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (737) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name PolkadotRuntimeParachainsHrmpPalletError (740) */
  interface PolkadotRuntimeParachainsHrmpPalletError extends Enum {
    readonly isOpenHrmpChannelToSelf: boolean;
    readonly isOpenHrmpChannelInvalidRecipient: boolean;
    readonly isOpenHrmpChannelZeroCapacity: boolean;
    readonly isOpenHrmpChannelCapacityExceedsLimit: boolean;
    readonly isOpenHrmpChannelZeroMessageSize: boolean;
    readonly isOpenHrmpChannelMessageSizeExceedsLimit: boolean;
    readonly isOpenHrmpChannelAlreadyExists: boolean;
    readonly isOpenHrmpChannelAlreadyRequested: boolean;
    readonly isOpenHrmpChannelLimitExceeded: boolean;
    readonly isAcceptHrmpChannelDoesntExist: boolean;
    readonly isAcceptHrmpChannelAlreadyConfirmed: boolean;
    readonly isAcceptHrmpChannelLimitExceeded: boolean;
    readonly isCloseHrmpChannelUnauthorized: boolean;
    readonly isCloseHrmpChannelDoesntExist: boolean;
    readonly isCloseHrmpChannelAlreadyUnderway: boolean;
    readonly isCancelHrmpOpenChannelUnauthorized: boolean;
    readonly isOpenHrmpChannelDoesntExist: boolean;
    readonly isOpenHrmpChannelAlreadyConfirmed: boolean;
    readonly isWrongWitness: boolean;
    readonly isChannelCreationNotAuthorized: boolean;
    readonly type: 'OpenHrmpChannelToSelf' | 'OpenHrmpChannelInvalidRecipient' | 'OpenHrmpChannelZeroCapacity' | 'OpenHrmpChannelCapacityExceedsLimit' | 'OpenHrmpChannelZeroMessageSize' | 'OpenHrmpChannelMessageSizeExceedsLimit' | 'OpenHrmpChannelAlreadyExists' | 'OpenHrmpChannelAlreadyRequested' | 'OpenHrmpChannelLimitExceeded' | 'AcceptHrmpChannelDoesntExist' | 'AcceptHrmpChannelAlreadyConfirmed' | 'AcceptHrmpChannelLimitExceeded' | 'CloseHrmpChannelUnauthorized' | 'CloseHrmpChannelDoesntExist' | 'CloseHrmpChannelAlreadyUnderway' | 'CancelHrmpOpenChannelUnauthorized' | 'OpenHrmpChannelDoesntExist' | 'OpenHrmpChannelAlreadyConfirmed' | 'WrongWitness' | 'ChannelCreationNotAuthorized';
  }

  /** @name PolkadotPrimitivesV6SessionInfo (742) */
  interface PolkadotPrimitivesV6SessionInfo extends Struct {
    readonly activeValidatorIndices: Vec<u32>;
    readonly randomSeed: U8aFixed;
    readonly disputePeriod: u32;
    readonly validators: PolkadotPrimitivesV6IndexedVecValidatorIndex;
    readonly discoveryKeys: Vec<SpAuthorityDiscoveryAppPublic>;
    readonly assignmentKeys: Vec<PolkadotPrimitivesV6AssignmentAppPublic>;
    readonly validatorGroups: PolkadotPrimitivesV6IndexedVecGroupIndex;
    readonly nCores: u32;
    readonly zerothDelayTrancheWidth: u32;
    readonly relayVrfModuloSamples: u32;
    readonly nDelayTranches: u32;
    readonly noShowSlots: u32;
    readonly neededApprovals: u32;
  }

  /** @name PolkadotPrimitivesV6IndexedVecValidatorIndex (743) */
  interface PolkadotPrimitivesV6IndexedVecValidatorIndex extends Vec<PolkadotPrimitivesV6ValidatorAppPublic> {}

  /** @name PolkadotPrimitivesV6IndexedVecGroupIndex (745) */
  interface PolkadotPrimitivesV6IndexedVecGroupIndex extends Vec<Vec<u32>> {}

  /** @name PolkadotPrimitivesV6DisputeState (747) */
  interface PolkadotPrimitivesV6DisputeState extends Struct {
    readonly validatorsFor: BitVec;
    readonly validatorsAgainst: BitVec;
    readonly start: u32;
    readonly concludedAt: Option<u32>;
  }

  /** @name PolkadotRuntimeParachainsDisputesPalletError (749) */
  interface PolkadotRuntimeParachainsDisputesPalletError extends Enum {
    readonly isDuplicateDisputeStatementSets: boolean;
    readonly isAncientDisputeStatement: boolean;
    readonly isValidatorIndexOutOfBounds: boolean;
    readonly isInvalidSignature: boolean;
    readonly isDuplicateStatement: boolean;
    readonly isSingleSidedDispute: boolean;
    readonly isMaliciousBacker: boolean;
    readonly isMissingBackingVotes: boolean;
    readonly isUnconfirmedDispute: boolean;
    readonly type: 'DuplicateDisputeStatementSets' | 'AncientDisputeStatement' | 'ValidatorIndexOutOfBounds' | 'InvalidSignature' | 'DuplicateStatement' | 'SingleSidedDispute' | 'MaliciousBacker' | 'MissingBackingVotes' | 'UnconfirmedDispute';
  }

  /** @name PolkadotPrimitivesV6SlashingPendingSlashes (750) */
  interface PolkadotPrimitivesV6SlashingPendingSlashes extends Struct {
    readonly keys_: BTreeMap<u32, PolkadotPrimitivesV6ValidatorAppPublic>;
    readonly kind: PolkadotPrimitivesV6SlashingSlashingOffenceKind;
  }

  /** @name PolkadotRuntimeParachainsDisputesSlashingPalletError (754) */
  interface PolkadotRuntimeParachainsDisputesSlashingPalletError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidSessionIndex: boolean;
    readonly isInvalidCandidateHash: boolean;
    readonly isInvalidValidatorIndex: boolean;
    readonly isValidatorIndexIdMismatch: boolean;
    readonly isDuplicateSlashingReport: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidSessionIndex' | 'InvalidCandidateHash' | 'InvalidValidatorIndex' | 'ValidatorIndexIdMismatch' | 'DuplicateSlashingReport';
  }

  /** @name PolkadotRuntimeCommonParasRegistrarParaInfo (755) */
  interface PolkadotRuntimeCommonParasRegistrarParaInfo extends Struct {
    readonly manager: AccountId32;
    readonly deposit: u128;
    readonly locked: Option<bool>;
  }

  /** @name PolkadotRuntimeCommonParasRegistrarPalletError (757) */
  interface PolkadotRuntimeCommonParasRegistrarPalletError extends Enum {
    readonly isNotRegistered: boolean;
    readonly isAlreadyRegistered: boolean;
    readonly isNotOwner: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isHeadDataTooLarge: boolean;
    readonly isNotParachain: boolean;
    readonly isNotParathread: boolean;
    readonly isCannotDeregister: boolean;
    readonly isCannotDowngrade: boolean;
    readonly isCannotUpgrade: boolean;
    readonly isParaLocked: boolean;
    readonly isNotReserved: boolean;
    readonly isEmptyCode: boolean;
    readonly isCannotSwap: boolean;
    readonly type: 'NotRegistered' | 'AlreadyRegistered' | 'NotOwner' | 'CodeTooLarge' | 'HeadDataTooLarge' | 'NotParachain' | 'NotParathread' | 'CannotDeregister' | 'CannotDowngrade' | 'CannotUpgrade' | 'ParaLocked' | 'NotReserved' | 'EmptyCode' | 'CannotSwap';
  }

  /** @name PolkadotRuntimeCommonSlotsPalletError (759) */
  interface PolkadotRuntimeCommonSlotsPalletError extends Enum {
    readonly isParaNotOnboarding: boolean;
    readonly isLeaseError: boolean;
    readonly type: 'ParaNotOnboarding' | 'LeaseError';
  }

  /** @name PolkadotRuntimeCommonAuctionsPalletError (764) */
  interface PolkadotRuntimeCommonAuctionsPalletError extends Enum {
    readonly isAuctionInProgress: boolean;
    readonly isLeasePeriodInPast: boolean;
    readonly isParaNotRegistered: boolean;
    readonly isNotCurrentAuction: boolean;
    readonly isNotAuction: boolean;
    readonly isAuctionEnded: boolean;
    readonly isAlreadyLeasedOut: boolean;
    readonly type: 'AuctionInProgress' | 'LeasePeriodInPast' | 'ParaNotRegistered' | 'NotCurrentAuction' | 'NotAuction' | 'AuctionEnded' | 'AlreadyLeasedOut';
  }

  /** @name PolkadotRuntimeCommonCrowdloanFundInfo (765) */
  interface PolkadotRuntimeCommonCrowdloanFundInfo extends Struct {
    readonly depositor: AccountId32;
    readonly verifier: Option<SpRuntimeMultiSigner>;
    readonly deposit: u128;
    readonly raised: u128;
    readonly end: u32;
    readonly cap: u128;
    readonly lastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    readonly firstPeriod: u32;
    readonly lastPeriod: u32;
    readonly fundIndex: u32;
  }

  /** @name PolkadotRuntimeCommonCrowdloanLastContribution (766) */
  interface PolkadotRuntimeCommonCrowdloanLastContribution extends Enum {
    readonly isNever: boolean;
    readonly isPreEnding: boolean;
    readonly asPreEnding: u32;
    readonly isEnding: boolean;
    readonly asEnding: u32;
    readonly type: 'Never' | 'PreEnding' | 'Ending';
  }

  /** @name PolkadotRuntimeCommonCrowdloanPalletError (767) */
  interface PolkadotRuntimeCommonCrowdloanPalletError extends Enum {
    readonly isFirstPeriodInPast: boolean;
    readonly isFirstPeriodTooFarInFuture: boolean;
    readonly isLastPeriodBeforeFirstPeriod: boolean;
    readonly isLastPeriodTooFarInFuture: boolean;
    readonly isCannotEndInPast: boolean;
    readonly isEndTooFarInFuture: boolean;
    readonly isOverflow: boolean;
    readonly isContributionTooSmall: boolean;
    readonly isInvalidParaId: boolean;
    readonly isCapExceeded: boolean;
    readonly isContributionPeriodOver: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isNotParachain: boolean;
    readonly isLeaseActive: boolean;
    readonly isBidOrLeaseActive: boolean;
    readonly isFundNotEnded: boolean;
    readonly isNoContributions: boolean;
    readonly isNotReadyToDissolve: boolean;
    readonly isInvalidSignature: boolean;
    readonly isMemoTooLarge: boolean;
    readonly isAlreadyInNewRaise: boolean;
    readonly isVrfDelayInProgress: boolean;
    readonly isNoLeasePeriod: boolean;
    readonly type: 'FirstPeriodInPast' | 'FirstPeriodTooFarInFuture' | 'LastPeriodBeforeFirstPeriod' | 'LastPeriodTooFarInFuture' | 'CannotEndInPast' | 'EndTooFarInFuture' | 'Overflow' | 'ContributionTooSmall' | 'InvalidParaId' | 'CapExceeded' | 'ContributionPeriodOver' | 'InvalidOrigin' | 'NotParachain' | 'LeaseActive' | 'BidOrLeaseActive' | 'FundNotEnded' | 'NoContributions' | 'NotReadyToDissolve' | 'InvalidSignature' | 'MemoTooLarge' | 'AlreadyInNewRaise' | 'VrfDelayInProgress' | 'NoLeasePeriod';
  }

  /** @name PalletXcmQueryStatus (768) */
  interface PalletXcmQueryStatus extends Enum {
    readonly isPending: boolean;
    readonly asPending: {
      readonly responder: XcmVersionedMultiLocation;
      readonly maybeMatchQuerier: Option<XcmVersionedMultiLocation>;
      readonly maybeNotify: Option<ITuple<[u8, u8]>>;
      readonly timeout: u32;
    } & Struct;
    readonly isVersionNotifier: boolean;
    readonly asVersionNotifier: {
      readonly origin: XcmVersionedMultiLocation;
      readonly isActive: bool;
    } & Struct;
    readonly isReady: boolean;
    readonly asReady: {
      readonly response: XcmVersionedResponse;
      readonly at: u32;
    } & Struct;
    readonly type: 'Pending' | 'VersionNotifier' | 'Ready';
  }

  /** @name XcmVersionedResponse (772) */
  interface XcmVersionedResponse extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Response;
    readonly isV3: boolean;
    readonly asV3: XcmV3Response;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletXcmVersionMigrationStage (778) */
  interface PalletXcmVersionMigrationStage extends Enum {
    readonly isMigrateSupportedVersion: boolean;
    readonly isMigrateVersionNotifiers: boolean;
    readonly isNotifyCurrentTargets: boolean;
    readonly asNotifyCurrentTargets: Option<Bytes>;
    readonly isMigrateAndNotifyOldTargets: boolean;
    readonly type: 'MigrateSupportedVersion' | 'MigrateVersionNotifiers' | 'NotifyCurrentTargets' | 'MigrateAndNotifyOldTargets';
  }

  /** @name XcmVersionedAssetId (781) */
  interface XcmVersionedAssetId extends Enum {
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetAssetId;
    readonly type: 'V3';
  }

  /** @name PalletXcmRemoteLockedFungibleRecord (782) */
  interface PalletXcmRemoteLockedFungibleRecord extends Struct {
    readonly amount: u128;
    readonly owner: XcmVersionedMultiLocation;
    readonly locker: XcmVersionedMultiLocation;
    readonly consumers: Vec<ITuple<[Null, u128]>>;
  }

  /** @name PalletXcmError (789) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name PalletMessageQueueBookState (790) */
  interface PalletMessageQueueBookState extends Struct {
    readonly begin: u32;
    readonly end: u32;
    readonly count: u32;
    readonly readyNeighbours: Option<PalletMessageQueueNeighbours>;
    readonly messageCount: u64;
    readonly size_: u64;
  }

  /** @name PalletMessageQueueNeighbours (792) */
  interface PalletMessageQueueNeighbours extends Struct {
    readonly prev: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
    readonly next: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
  }

  /** @name PalletMessageQueuePage (794) */
  interface PalletMessageQueuePage extends Struct {
    readonly remaining: u32;
    readonly remainingSize: u32;
    readonly firstIndex: u32;
    readonly first: u32;
    readonly last: u32;
    readonly heap: Bytes;
  }

  /** @name PalletMessageQueueError (796) */
  interface PalletMessageQueueError extends Enum {
    readonly isNotReapable: boolean;
    readonly isNoPage: boolean;
    readonly isNoMessage: boolean;
    readonly isAlreadyProcessed: boolean;
    readonly isQueued: boolean;
    readonly isInsufficientWeight: boolean;
    readonly isTemporarilyUnprocessable: boolean;
    readonly isQueuePaused: boolean;
    readonly type: 'NotReapable' | 'NoPage' | 'NoMessage' | 'AlreadyProcessed' | 'Queued' | 'InsufficientWeight' | 'TemporarilyUnprocessable' | 'QueuePaused';
  }

  /** @name PalletAssetRateError (797) */
  interface PalletAssetRateError extends Enum {
    readonly isUnknownAssetKind: boolean;
    readonly isAlreadyExists: boolean;
    readonly type: 'UnknownAssetKind' | 'AlreadyExists';
  }

  /** @name PalletBeefyError (800) */
  interface PalletBeefyError extends Enum {
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly isInvalidConfiguration: boolean;
    readonly type: 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport' | 'InvalidConfiguration';
  }

  /** @name SpConsensusBeefyMmrBeefyAuthoritySet (801) */
  interface SpConsensusBeefyMmrBeefyAuthoritySet extends Struct {
    readonly id: u64;
    readonly len: u32;
    readonly keysetCommitment: H256;
  }

  /** @name FrameSystemExtensionsCheckNonZeroSender (804) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (805) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (806) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (807) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (810) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (811) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (812) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name PolkadotRuntimeCommonClaimsPrevalidateAttests (813) */
  type PolkadotRuntimeCommonClaimsPrevalidateAttests = Null;

  /** @name PolkadotRuntimeRuntime (814) */
  type PolkadotRuntimeRuntime = Null;

} // declare module
