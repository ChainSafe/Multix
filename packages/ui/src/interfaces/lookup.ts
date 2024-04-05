// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<polkadot_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup35: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup36: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup37: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup38: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup39: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup40: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        dest: 'PalletStakingRewardDestination',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      SnapshotVotersSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      SnapshotTargetsSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      ForceEra: {
        mode: 'PalletStakingForcing',
      },
      ControllerBatchDeprecated: {
        failures: 'u32'
      }
    }
  },
  /**
   * Lookup41: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup43: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup46: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup47: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup49: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup50: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup53: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup54: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup55: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,PalletStakingExposure)>'
      }
    }
  },
  /**
   * Lookup56: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup57: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup60: pallet_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<PalletStakingIndividualExposure>'
  },
  /**
   * Lookup63: pallet_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup64: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        amount: 'u128',
        beneficiary: 'XcmVersionedMultiLocation',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'u64',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'u64',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup65: polkadot_runtime_common::impls::VersionedLocatableAsset
   **/
  PolkadotRuntimeCommonImplsVersionedLocatableAsset: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: {
        location: 'StagingXcmV3MultiLocation',
        assetId: 'XcmV3MultiassetAssetId'
      }
    }
  },
  /**
   * Lookup66: staging_xcm::v3::multilocation::MultiLocation
   **/
  StagingXcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup67: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup68: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup71: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup73: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup74: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup75: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'StagingXcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup76: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup77: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup78: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup79: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup80: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup82: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup83: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup84: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(AccountId32,AccountId32)',
      Undelegated: 'AccountId32'
    }
  },
  /**
   * Lookup85: pallet_referenda::pallet::Event<T, I>
   **/
  PalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
        tally: 'PalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup87: frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup89: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup93: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup95: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup97: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup98: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup99: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup100: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup102: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup103: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup105: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup106: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup107: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup110: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup112: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
      },
      chill_other: {
        controller: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill'
      }
    }
  },
  /**
   * Lookup116: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup117: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup118: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup119: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup120: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'PolkadotRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup121: polkadot_runtime::SessionKeys
   **/
  PolkadotRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    paraValidator: 'PolkadotPrimitivesV6ValidatorAppPublic',
    paraAssignment: 'PolkadotPrimitivesV6AssignmentAppPublic',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup122: polkadot_primitives::v6::validator_app::Public
   **/
  PolkadotPrimitivesV6ValidatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup123: polkadot_primitives::v6::assignment_app::Public
   **/
  PolkadotPrimitivesV6AssignmentAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup124: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup125: sp_consensus_beefy::ecdsa_crypto::Public
   **/
  SpConsensusBeefyEcdsaCryptoPublic: 'SpCoreEcdsaPublic',
  /**
   * Lookup126: sp_core::ecdsa::Public
   **/
  SpCoreEcdsaPublic: '[u8;33]',
  /**
   * Lookup128: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup129: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup130: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup131: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup132: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup133: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup134: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup137: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup138: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup140: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup141: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup142: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: 'SpCoreSr25519Signature',
  /**
   * Lookup143: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup144: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        amount: 'Compact<u128>',
        beneficiary: 'XcmVersionedMultiLocation',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup146: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'MultiAddress',
        conviction: 'PalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'MultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup147: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup149: pallet_conviction_voting::conviction::Conviction
   **/
  PalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup151: pallet_referenda::pallet::Call<T, I>
   **/
  PalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'PolkadotRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactmentMoment: 'FrameSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup152: polkadot_runtime::OriginCaller
   **/
  PolkadotRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Void: 'SpCoreVoid',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      Origins: 'PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      ParachainsOrigin: 'PolkadotRuntimeParachainsOriginPalletOrigin',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      XcmPallet: 'PalletXcmOrigin'
    }
  },
  /**
   * Lookup153: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup154: polkadot_runtime::governance::origins::pallet_custom_origins::Origin
   **/
  PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: {
    _enum: ['StakingAdmin', 'Treasurer', 'FellowshipAdmin', 'GeneralAdmin', 'AuctionAdmin', 'LeaseAdmin', 'ReferendumCanceller', 'ReferendumKiller', 'SmallTipper', 'BigTipper', 'SmallSpender', 'MediumSpender', 'BigSpender', 'WhitelistedCaller']
  },
  /**
   * Lookup155: polkadot_runtime_parachains::origin::pallet::Origin
   **/
  PolkadotRuntimeParachainsOriginPalletOrigin: {
    _enum: {
      Parachain: 'u32'
    }
  },
  /**
   * Lookup157: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'StagingXcmV3MultiLocation',
      Response: 'StagingXcmV3MultiLocation'
    }
  },
  /**
   * Lookup158: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup159: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup161: pallet_whitelist::pallet::Call<T>
   **/
  PalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'SpWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup162: polkadot_runtime_common::claims::pallet::Call<T>
   **/
  PolkadotRuntimeCommonClaimsPalletCall: {
    _enum: {
      claim: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
      },
      mint_claim: {
        who: 'EthereumAddress',
        value: 'u128',
        vestingSchedule: 'Option<(u128,u128,u32)>',
        statement: 'Option<PolkadotRuntimeCommonClaimsStatementKind>',
      },
      claim_attest: {
        dest: 'AccountId32',
        ethereumSignature: 'PolkadotRuntimeCommonClaimsEcdsaSignature',
        statement: 'Bytes',
      },
      attest: {
        statement: 'Bytes',
      },
      move_claim: {
        _alias: {
          new_: 'new',
        },
        old: 'EthereumAddress',
        new_: 'EthereumAddress',
        maybePreclaim: 'Option<AccountId32>'
      }
    }
  },
  /**
   * Lookup163: polkadot_runtime_common::claims::EcdsaSignature
   **/
  PolkadotRuntimeCommonClaimsEcdsaSignature: '[u8;65]',
  /**
   * Lookup169: polkadot_runtime_common::claims::StatementKind
   **/
  PolkadotRuntimeCommonClaimsStatementKind: {
    _enum: ['Regular', 'Saft']
  },
  /**
   * Lookup171: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup172: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup173: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'PolkadotRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup175: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentitySimpleIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup176: pallet_identity::simple::IdentityInfo<FieldLimit>
   **/
  PalletIdentitySimpleIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup213: pallet_identity::types::BitFlags<pallet_identity::simple::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 0,
    Legal: 1,
    Web: 2,
    Riot: 3,
    Email: 4,
    PgpFingerprint: 5,
    Image: 6,
    Twitter: 7
  },
  /**
   * Lookup214: pallet_identity::simple::IdentityField
   **/
  PalletIdentitySimpleIdentityField: {
    _enum: ['Display', 'Legal', 'Web', 'Riot', 'Email', 'PgpFingerprint', 'Image', 'Twitter']
  },
  /**
   * Lookup215: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup216: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<PolkadotRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'PolkadotRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'PolkadotRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'PolkadotRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'PolkadotRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<PolkadotRuntimeProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup218: polkadot_runtime::ProxyType
   **/
  PolkadotRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking', '__Unused4', 'IdentityJudgement', 'CancelProxy', 'Auction', 'NominationPools']
  },
  /**
   * Lookup219: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup221: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup222: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup223: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup224: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup225: pallet_election_provider_multi_phase::RawSolution<polkadot_runtime::NposCompactSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'PolkadotRuntimeNposCompactSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup226: polkadot_runtime::NposCompactSolution16
   **/
  PolkadotRuntimeNposCompactSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup277: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup278: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup282: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup285: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'MultiAddress',
      },
      put_in_front_of: {
        lighter: 'MultiAddress',
      },
      put_in_front_of_other: {
        heavier: 'MultiAddress',
        lighter: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup286: pallet_nomination_pools::pallet::Call<T>
   **/
  PalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'MultiAddress',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'MultiAddress',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
      },
      create_with_pool_id: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
        poolId: 'u32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<AccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PalletNominationPoolsConfigOpU128',
        minCreateBond: 'PalletNominationPoolsConfigOpU128',
        maxPools: 'PalletNominationPoolsConfigOpU32',
        maxMembers: 'PalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PalletNominationPoolsConfigOpU32',
        globalMaxCommission: 'PalletNominationPoolsConfigOpPerbill',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PalletNominationPoolsConfigOpAccountId32',
        newBouncer: 'PalletNominationPoolsConfigOpAccountId32',
      },
      chill: {
        poolId: 'u32',
      },
      bond_extra_other: {
        member: 'MultiAddress',
        extra: 'PalletNominationPoolsBondExtra',
      },
      set_claim_permission: {
        permission: 'PalletNominationPoolsClaimPermission',
      },
      claim_payout_other: {
        other: 'AccountId32',
      },
      set_commission: {
        poolId: 'u32',
        newCommission: 'Option<(Perbill,AccountId32)>',
      },
      set_commission_max: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      set_commission_change_rate: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      claim_commission: {
        poolId: 'u32',
      },
      adjust_pool_deposit: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup287: pallet_nomination_pools::BondExtra<Balance>
   **/
  PalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup288: pallet_nomination_pools::PoolState
   **/
  PalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup289: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup290: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup291: pallet_nomination_pools::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletNominationPoolsConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup292: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'AccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup293: pallet_nomination_pools::ClaimPermission
   **/
  PalletNominationPoolsClaimPermission: {
    _enum: ['Permissioned', 'PermissionlessCompound', 'PermissionlessWithdraw', 'PermissionlessAll']
  },
  /**
   * Lookup296: pallet_nomination_pools::CommissionChangeRate<BlockNumber>
   **/
  PalletNominationPoolsCommissionChangeRate: {
    maxIncrease: 'Perbill',
    minDelay: 'u32'
  },
  /**
   * Lookup297: pallet_fast_unstake::pallet::Call<T>
   **/
  PalletFastUnstakeCall: {
    _enum: {
      register_fast_unstake: 'Null',
      deregister: 'Null',
      control: {
        erasToCheck: 'u32'
      }
    }
  },
  /**
   * Lookup298: polkadot_runtime_parachains::configuration::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletCall: {
    _enum: {
      set_validation_upgrade_cooldown: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_code_retention_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_code_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_pov_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_head_data_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_cores: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_retries: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_group_rotation_frequency: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_paras_availability_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused10: 'Null',
      set_scheduling_lookahead: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_validators_per_core: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_max_validators: {
        _alias: {
          new_: 'new',
        },
        new_: 'Option<u32>',
      },
      set_dispute_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_dispute_post_conclusion_acceptance_period: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused16: 'Null',
      __Unused17: 'Null',
      set_no_show_slots: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_n_delay_tranches: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_zeroth_delay_tranche_width: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_needed_approvals: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_relay_vrf_modulo_samples: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_queue_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_downward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused26: 'Null',
      set_max_upward_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_upward_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_open_request_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_sender_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_recipient_deposit: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_hrmp_channel_max_capacity: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_channel_max_total_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_inbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused35: 'Null',
      set_hrmp_channel_max_message_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_hrmp_max_parachain_outbound_channels: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused38: 'Null',
      set_hrmp_max_message_num_per_candidate: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      __Unused40: 'Null',
      __Unused41: 'Null',
      set_pvf_voting_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_validation_upgrade_delay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_bypass_consistency_check: {
        _alias: {
          new_: 'new',
        },
        new_: 'bool',
      },
      set_async_backing_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV6AsyncBackingAsyncBackingParams',
      },
      set_executor_params: {
        _alias: {
          new_: 'new',
        },
        new_: 'PolkadotPrimitivesV6ExecutorParams',
      },
      set_on_demand_base_fee: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      set_on_demand_fee_variability: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_on_demand_queue_max_size: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_on_demand_target_queue_utilization: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      set_on_demand_ttl: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_minimum_backing_votes: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32'
      }
    }
  },
  /**
   * Lookup299: polkadot_primitives::v6::async_backing::AsyncBackingParams
   **/
  PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
    maxCandidateDepth: 'u32',
    allowedAncestryLen: 'u32'
  },
  /**
   * Lookup300: polkadot_primitives::v6::executor_params::ExecutorParams
   **/
  PolkadotPrimitivesV6ExecutorParams: 'Vec<PolkadotPrimitivesV6ExecutorParamsExecutorParam>',
  /**
   * Lookup302: polkadot_primitives::v6::executor_params::ExecutorParam
   **/
  PolkadotPrimitivesV6ExecutorParamsExecutorParam: {
    _enum: {
      __Unused0: 'Null',
      MaxMemoryPages: 'u32',
      StackLogicalMax: 'u32',
      StackNativeMax: 'u32',
      PrecheckingMaxMemory: 'u64',
      PvfPrepTimeout: '(PolkadotPrimitivesV6PvfPrepTimeoutKind,u64)',
      PvfExecTimeout: '(PolkadotPrimitivesV6PvfExecTimeoutKind,u64)',
      WasmExtBulkMemory: 'Null'
    }
  },
  /**
   * Lookup303: polkadot_primitives::v6::PvfPrepTimeoutKind
   **/
  PolkadotPrimitivesV6PvfPrepTimeoutKind: {
    _enum: ['Precheck', 'Lenient']
  },
  /**
   * Lookup304: polkadot_primitives::v6::PvfExecTimeoutKind
   **/
  PolkadotPrimitivesV6PvfExecTimeoutKind: {
    _enum: ['Backing', 'Approval']
  },
  /**
   * Lookup305: polkadot_runtime_parachains::shared::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsSharedPalletCall: 'Null',
  /**
   * Lookup306: polkadot_runtime_parachains::inclusion::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletCall: 'Null',
  /**
   * Lookup307: polkadot_runtime_parachains::paras_inherent::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletCall: {
    _enum: {
      enter: {
        data: 'PolkadotPrimitivesV6InherentData'
      }
    }
  },
  /**
   * Lookup308: polkadot_primitives::v6::InherentData<sp_runtime::generic::header::Header<Number, Hash>>
   **/
  PolkadotPrimitivesV6InherentData: {
    bitfields: 'Vec<PolkadotPrimitivesV6SignedUncheckedSigned>',
    backedCandidates: 'Vec<PolkadotPrimitivesV6BackedCandidate>',
    disputes: 'Vec<PolkadotPrimitivesV6DisputeStatementSet>',
    parentHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup310: polkadot_primitives::v6::signed::UncheckedSigned<polkadot_primitives::v6::AvailabilityBitfield, polkadot_primitives::v6::AvailabilityBitfield>
   **/
  PolkadotPrimitivesV6SignedUncheckedSigned: {
    payload: 'BitVec',
    validatorIndex: 'u32',
    signature: 'PolkadotPrimitivesV6ValidatorAppSignature'
  },
  /**
   * Lookup313: bitvec::order::Lsb0
   **/
  BitvecOrderLsb0: 'Null',
  /**
   * Lookup315: polkadot_primitives::v6::validator_app::Signature
   **/
  PolkadotPrimitivesV6ValidatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup317: polkadot_primitives::v6::BackedCandidate<primitive_types::H256>
   **/
  PolkadotPrimitivesV6BackedCandidate: {
    candidate: 'PolkadotPrimitivesV6CommittedCandidateReceipt',
    validityVotes: 'Vec<PolkadotPrimitivesV6ValidityAttestation>',
    validatorIndices: 'BitVec'
  },
  /**
   * Lookup318: polkadot_primitives::v6::CommittedCandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CommittedCandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    commitments: 'PolkadotPrimitivesV6CandidateCommitments'
  },
  /**
   * Lookup319: polkadot_primitives::v6::CandidateDescriptor<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CandidateDescriptor: {
    paraId: 'u32',
    relayParent: 'H256',
    collator: 'PolkadotPrimitivesV6CollatorAppPublic',
    persistedValidationDataHash: 'H256',
    povHash: 'H256',
    erasureRoot: 'H256',
    signature: 'PolkadotPrimitivesV6CollatorAppSignature',
    paraHead: 'H256',
    validationCodeHash: 'H256'
  },
  /**
   * Lookup320: polkadot_primitives::v6::collator_app::Public
   **/
  PolkadotPrimitivesV6CollatorAppPublic: 'SpCoreSr25519Public',
  /**
   * Lookup321: polkadot_primitives::v6::collator_app::Signature
   **/
  PolkadotPrimitivesV6CollatorAppSignature: 'SpCoreSr25519Signature',
  /**
   * Lookup323: polkadot_primitives::v6::CandidateCommitments<N>
   **/
  PolkadotPrimitivesV6CandidateCommitments: {
    upwardMessages: 'Vec<Bytes>',
    horizontalMessages: 'Vec<PolkadotCorePrimitivesOutboundHrmpMessage>',
    newValidationCode: 'Option<Bytes>',
    headData: 'Bytes',
    processedDownwardMessages: 'u32',
    hrmpWatermark: 'u32'
  },
  /**
   * Lookup326: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup332: polkadot_primitives::v6::ValidityAttestation
   **/
  PolkadotPrimitivesV6ValidityAttestation: {
    _enum: {
      __Unused0: 'Null',
      Implicit: 'PolkadotPrimitivesV6ValidatorAppSignature',
      Explicit: 'PolkadotPrimitivesV6ValidatorAppSignature'
    }
  },
  /**
   * Lookup334: polkadot_primitives::v6::DisputeStatementSet
   **/
  PolkadotPrimitivesV6DisputeStatementSet: {
    candidateHash: 'H256',
    session: 'u32',
    statements: 'Vec<(PolkadotPrimitivesV6DisputeStatement,u32,PolkadotPrimitivesV6ValidatorAppSignature)>'
  },
  /**
   * Lookup338: polkadot_primitives::v6::DisputeStatement
   **/
  PolkadotPrimitivesV6DisputeStatement: {
    _enum: {
      Valid: 'PolkadotPrimitivesV6ValidDisputeStatementKind',
      Invalid: 'PolkadotPrimitivesV6InvalidDisputeStatementKind'
    }
  },
  /**
   * Lookup339: polkadot_primitives::v6::ValidDisputeStatementKind
   **/
  PolkadotPrimitivesV6ValidDisputeStatementKind: {
    _enum: {
      Explicit: 'Null',
      BackingSeconded: 'H256',
      BackingValid: 'H256',
      ApprovalChecking: 'Null'
    }
  },
  /**
   * Lookup340: polkadot_primitives::v6::InvalidDisputeStatementKind
   **/
  PolkadotPrimitivesV6InvalidDisputeStatementKind: {
    _enum: ['Explicit']
  },
  /**
   * Lookup341: polkadot_runtime_parachains::paras::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsParasPalletCall: {
    _enum: {
      force_set_current_code: {
        para: 'u32',
        newCode: 'Bytes',
      },
      force_set_current_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
        relayParentNumber: 'u32',
      },
      force_note_new_head: {
        para: 'u32',
        newHead: 'Bytes',
      },
      force_queue_action: {
        para: 'u32',
      },
      add_trusted_validation_code: {
        validationCode: 'Bytes',
      },
      poke_unused_validation_code: {
        validationCodeHash: 'H256',
      },
      include_pvf_check_statement: {
        stmt: 'PolkadotPrimitivesV6PvfCheckStatement',
        signature: 'PolkadotPrimitivesV6ValidatorAppSignature',
      },
      force_set_most_recent_context: {
        para: 'u32',
        context: 'u32'
      }
    }
  },
  /**
   * Lookup342: polkadot_primitives::v6::PvfCheckStatement
   **/
  PolkadotPrimitivesV6PvfCheckStatement: {
    accept: 'bool',
    subject: 'H256',
    sessionIndex: 'u32',
    validatorIndex: 'u32'
  },
  /**
   * Lookup343: polkadot_runtime_parachains::initializer::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsInitializerPalletCall: {
    _enum: {
      force_approve: {
        upTo: 'u32'
      }
    }
  },
  /**
   * Lookup344: polkadot_runtime_parachains::hrmp::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletCall: {
    _enum: {
      hrmp_init_open_channel: {
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      hrmp_accept_open_channel: {
        sender: 'u32',
      },
      hrmp_close_channel: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      force_clean_hrmp: {
        para: 'u32',
        numInbound: 'u32',
        numOutbound: 'u32',
      },
      force_process_hrmp_open: {
        channels: 'u32',
      },
      force_process_hrmp_close: {
        channels: 'u32',
      },
      hrmp_cancel_open_request: {
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
        openRequests: 'u32',
      },
      force_open_hrmp_channel: {
        sender: 'u32',
        recipient: 'u32',
        maxCapacity: 'u32',
        maxMessageSize: 'u32',
      },
      establish_system_channel: {
        sender: 'u32',
        recipient: 'u32',
      },
      poke_channel_deposits: {
        sender: 'u32',
        recipient: 'u32'
      }
    }
  },
  /**
   * Lookup345: polkadot_parachain_primitives::primitives::HrmpChannelId
   **/
  PolkadotParachainPrimitivesPrimitivesHrmpChannelId: {
    sender: 'u32',
    recipient: 'u32'
  },
  /**
   * Lookup346: polkadot_runtime_parachains::disputes::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletCall: {
    _enum: ['force_unfreeze']
  },
  /**
   * Lookup347: polkadot_runtime_parachains::disputes::slashing::pallet::Call<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletCall: {
    _enum: {
      report_dispute_lost_unsigned: {
        disputeProof: 'PolkadotPrimitivesV6SlashingDisputeProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup348: polkadot_primitives::v6::slashing::DisputeProof
   **/
  PolkadotPrimitivesV6SlashingDisputeProof: {
    timeSlot: 'PolkadotPrimitivesV6SlashingDisputesTimeSlot',
    kind: 'PolkadotPrimitivesV6SlashingSlashingOffenceKind',
    validatorIndex: 'u32',
    validatorId: 'PolkadotPrimitivesV6ValidatorAppPublic'
  },
  /**
   * Lookup349: polkadot_primitives::v6::slashing::DisputesTimeSlot
   **/
  PolkadotPrimitivesV6SlashingDisputesTimeSlot: {
    sessionIndex: 'u32',
    candidateHash: 'H256'
  },
  /**
   * Lookup350: polkadot_primitives::v6::slashing::SlashingOffenceKind
   **/
  PolkadotPrimitivesV6SlashingSlashingOffenceKind: {
    _enum: ['ForInvalid', 'AgainstValid']
  },
  /**
   * Lookup351: polkadot_runtime_common::paras_registrar::pallet::Call<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletCall: {
    _enum: {
      register: {
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      force_register: {
        who: 'AccountId32',
        deposit: 'u128',
        id: 'u32',
        genesisHead: 'Bytes',
        validationCode: 'Bytes',
      },
      deregister: {
        id: 'u32',
      },
      swap: {
        id: 'u32',
        other: 'u32',
      },
      remove_lock: {
        para: 'u32',
      },
      reserve: 'Null',
      add_lock: {
        para: 'u32',
      },
      schedule_code_upgrade: {
        para: 'u32',
        newCode: 'Bytes',
      },
      set_current_head: {
        para: 'u32',
        newHead: 'Bytes'
      }
    }
  },
  /**
   * Lookup352: polkadot_runtime_common::slots::pallet::Call<T>
   **/
  PolkadotRuntimeCommonSlotsPalletCall: {
    _enum: {
      force_lease: {
        para: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
        periodBegin: 'u32',
        periodCount: 'u32',
      },
      clear_all_leases: {
        para: 'u32',
      },
      trigger_onboard: {
        para: 'u32'
      }
    }
  },
  /**
   * Lookup353: polkadot_runtime_common::auctions::pallet::Call<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletCall: {
    _enum: {
      new_auction: {
        duration: 'Compact<u32>',
        leasePeriodIndex: 'Compact<u32>',
      },
      bid: {
        para: 'Compact<u32>',
        auctionIndex: 'Compact<u32>',
        firstSlot: 'Compact<u32>',
        lastSlot: 'Compact<u32>',
        amount: 'Compact<u128>',
      },
      cancel_auction: 'Null'
    }
  },
  /**
   * Lookup355: polkadot_runtime_common::crowdloan::pallet::Call<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletCall: {
    _enum: {
      create: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      contribute: {
        index: 'Compact<u32>',
        value: 'Compact<u128>',
        signature: 'Option<SpRuntimeMultiSignature>',
      },
      withdraw: {
        who: 'AccountId32',
        index: 'Compact<u32>',
      },
      refund: {
        index: 'Compact<u32>',
      },
      dissolve: {
        index: 'Compact<u32>',
      },
      edit: {
        index: 'Compact<u32>',
        cap: 'Compact<u128>',
        firstPeriod: 'Compact<u32>',
        lastPeriod: 'Compact<u32>',
        end: 'Compact<u32>',
        verifier: 'Option<SpRuntimeMultiSigner>',
      },
      add_memo: {
        index: 'u32',
        memo: 'Bytes',
      },
      poke: {
        index: 'u32',
      },
      contribute_all: {
        index: 'Compact<u32>',
        signature: 'Option<SpRuntimeMultiSignature>'
      }
    }
  },
  /**
   * Lookup357: sp_runtime::MultiSigner
   **/
  SpRuntimeMultiSigner: {
    _enum: {
      Ed25519: 'SpCoreEd25519Public',
      Sr25519: 'SpCoreSr25519Public',
      Ecdsa: 'SpCoreEcdsaPublic'
    }
  },
  /**
   * Lookup359: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup360: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup361: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup362: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup363: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup365: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup366: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup368: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup369: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup370: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup371: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup372: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup375: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup376: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup377: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup378: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup379: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup380: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup381: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup382: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup384: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<StagingXcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'StagingXcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'StagingXcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'StagingXcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'StagingXcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'StagingXcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'StagingXcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'StagingXcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'StagingXcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<StagingXcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup385: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup387: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup388: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup389: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup390: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup393: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup395: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup398: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup401: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'StagingXcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup402: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup403: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup404: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup405: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup406: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup415: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup416: polkadot_runtime_parachains::inclusion::AggregateMessageOrigin
   **/
  PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: {
    _enum: {
      Ump: 'PolkadotRuntimeParachainsInclusionUmpQueueId'
    }
  },
  /**
   * Lookup417: polkadot_runtime_parachains::inclusion::UmpQueueId
   **/
  PolkadotRuntimeParachainsInclusionUmpQueueId: {
    _enum: {
      Para: 'u32'
    }
  },
  /**
   * Lookup418: pallet_asset_rate::pallet::Call<T>
   **/
  PalletAssetRateCall: {
    _enum: {
      create: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      update: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      remove: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset'
      }
    }
  },
  /**
   * Lookup420: pallet_beefy::pallet::Call<T>
   **/
  PalletBeefyCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusBeefyEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      set_new_genesis: {
        delayInBlocks: 'u32'
      }
    }
  },
  /**
   * Lookup421: sp_consensus_beefy::EquivocationProof<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyEquivocationProof: {
    first: 'SpConsensusBeefyVoteMessage',
    second: 'SpConsensusBeefyVoteMessage'
  },
  /**
   * Lookup422: sp_consensus_beefy::ecdsa_crypto::Signature
   **/
  SpConsensusBeefyEcdsaCryptoSignature: 'SpCoreEcdsaSignature',
  /**
   * Lookup423: sp_consensus_beefy::VoteMessage<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyVoteMessage: {
    commitment: 'SpConsensusBeefyCommitment',
    id: 'SpConsensusBeefyEcdsaCryptoPublic',
    signature: 'SpConsensusBeefyEcdsaCryptoSignature'
  },
  /**
   * Lookup424: sp_consensus_beefy::commitment::Commitment<TBlockNumber>
   **/
  SpConsensusBeefyCommitment: {
    payload: 'SpConsensusBeefyPayload',
    blockNumber: 'u32',
    validatorSetId: 'u64'
  },
  /**
   * Lookup425: sp_consensus_beefy::payload::Payload
   **/
  SpConsensusBeefyPayload: 'Vec<([u8;2],Bytes)>',
  /**
   * Lookup428: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup430: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup431: pallet_whitelist::pallet::Event<T>
   **/
  PalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup433: frame_support::dispatch::PostDispatchInfo
   **/
  FrameSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<SpWeightsWeightV2Weight>',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup435: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  SpRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'FrameSupportDispatchPostDispatchInfo',
    error: 'SpRuntimeDispatchError'
  },
  /**
   * Lookup436: polkadot_runtime_common::claims::pallet::Event<T>
   **/
  PolkadotRuntimeCommonClaimsPalletEvent: {
    _enum: {
      Claimed: {
        who: 'AccountId32',
        ethereumAddress: 'EthereumAddress',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup437: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup438: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup439: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup440: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'PolkadotRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'PolkadotRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'PolkadotRuntimeProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup441: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup442: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup443: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup444: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<AccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        score: 'SpNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiPhasePhase',
        to: 'PalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup445: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup446: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup448: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup449: pallet_nomination_pools::pallet::Event<T>
   **/
  PalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'AccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'AccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'AccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
        era: 'u32',
      },
      Withdrawn: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'AccountId32',
      },
      RolesUpdated: {
        root: 'Option<AccountId32>',
        bouncer: 'Option<AccountId32>',
        nominator: 'Option<AccountId32>',
      },
      PoolSlashed: {
        poolId: 'u32',
        balance: 'u128',
      },
      UnbondingPoolSlashed: {
        poolId: 'u32',
        era: 'u32',
        balance: 'u128',
      },
      PoolCommissionUpdated: {
        poolId: 'u32',
        current: 'Option<(Perbill,AccountId32)>',
      },
      PoolMaxCommissionUpdated: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      PoolCommissionChangeRateUpdated: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      PoolCommissionClaimed: {
        poolId: 'u32',
        commission: 'u128',
      },
      MinBalanceDeficitAdjusted: {
        poolId: 'u32',
        amount: 'u128',
      },
      MinBalanceExcessAdjusted: {
        poolId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup450: pallet_fast_unstake::pallet::Event<T>
   **/
  PalletFastUnstakeEvent: {
    _enum: {
      Unstaked: {
        stash: 'AccountId32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Slashed: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      BatchChecked: {
        eras: 'Vec<u32>',
      },
      BatchFinished: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      InternalError: 'Null'
    }
  },
  /**
   * Lookup451: polkadot_runtime_parachains::inclusion::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletEvent: {
    _enum: {
      CandidateBacked: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32,u32)',
      CandidateIncluded: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32,u32)',
      CandidateTimedOut: '(PolkadotPrimitivesV6CandidateReceipt,Bytes,u32)',
      UpwardMessagesReceived: {
        from: 'u32',
        count: 'u32'
      }
    }
  },
  /**
   * Lookup452: polkadot_primitives::v6::CandidateReceipt<primitive_types::H256>
   **/
  PolkadotPrimitivesV6CandidateReceipt: {
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    commitmentsHash: 'H256'
  },
  /**
   * Lookup455: polkadot_runtime_parachains::paras::pallet::Event
   **/
  PolkadotRuntimeParachainsParasPalletEvent: {
    _enum: {
      CurrentCodeUpdated: 'u32',
      CurrentHeadUpdated: 'u32',
      CodeUpgradeScheduled: 'u32',
      NewHeadNoted: 'u32',
      ActionQueued: '(u32,u32)',
      PvfCheckStarted: '(H256,u32)',
      PvfCheckAccepted: '(H256,u32)',
      PvfCheckRejected: '(H256,u32)'
    }
  },
  /**
   * Lookup456: polkadot_runtime_parachains::hrmp::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletEvent: {
    _enum: {
      OpenChannelRequested: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelCanceled: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      OpenChannelAccepted: {
        sender: 'u32',
        recipient: 'u32',
      },
      ChannelClosed: {
        byParachain: 'u32',
        channelId: 'PolkadotParachainPrimitivesPrimitivesHrmpChannelId',
      },
      HrmpChannelForceOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      HrmpSystemChannelOpened: {
        sender: 'u32',
        recipient: 'u32',
        proposedMaxCapacity: 'u32',
        proposedMaxMessageSize: 'u32',
      },
      OpenChannelDepositsUpdated: {
        sender: 'u32',
        recipient: 'u32'
      }
    }
  },
  /**
   * Lookup457: polkadot_runtime_parachains::disputes::pallet::Event<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletEvent: {
    _enum: {
      DisputeInitiated: '(H256,PolkadotRuntimeParachainsDisputesDisputeLocation)',
      DisputeConcluded: '(H256,PolkadotRuntimeParachainsDisputesDisputeResult)',
      Revert: 'u32'
    }
  },
  /**
   * Lookup458: polkadot_runtime_parachains::disputes::DisputeLocation
   **/
  PolkadotRuntimeParachainsDisputesDisputeLocation: {
    _enum: ['Local', 'Remote']
  },
  /**
   * Lookup459: polkadot_runtime_parachains::disputes::DisputeResult
   **/
  PolkadotRuntimeParachainsDisputesDisputeResult: {
    _enum: ['Valid', 'Invalid']
  },
  /**
   * Lookup460: polkadot_runtime_common::paras_registrar::pallet::Event<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletEvent: {
    _enum: {
      Registered: {
        paraId: 'u32',
        manager: 'AccountId32',
      },
      Deregistered: {
        paraId: 'u32',
      },
      Reserved: {
        paraId: 'u32',
        who: 'AccountId32',
      },
      Swapped: {
        paraId: 'u32',
        otherId: 'u32'
      }
    }
  },
  /**
   * Lookup461: polkadot_runtime_common::slots::pallet::Event<T>
   **/
  PolkadotRuntimeCommonSlotsPalletEvent: {
    _enum: {
      NewLeasePeriod: {
        leasePeriod: 'u32',
      },
      Leased: {
        paraId: 'u32',
        leaser: 'AccountId32',
        periodBegin: 'u32',
        periodCount: 'u32',
        extraReserved: 'u128',
        totalAmount: 'u128'
      }
    }
  },
  /**
   * Lookup462: polkadot_runtime_common::auctions::pallet::Event<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletEvent: {
    _enum: {
      AuctionStarted: {
        auctionIndex: 'u32',
        leasePeriod: 'u32',
        ending: 'u32',
      },
      AuctionClosed: {
        auctionIndex: 'u32',
      },
      Reserved: {
        bidder: 'AccountId32',
        extraReserved: 'u128',
        totalAmount: 'u128',
      },
      Unreserved: {
        bidder: 'AccountId32',
        amount: 'u128',
      },
      ReserveConfiscated: {
        paraId: 'u32',
        leaser: 'AccountId32',
        amount: 'u128',
      },
      BidAccepted: {
        bidder: 'AccountId32',
        paraId: 'u32',
        amount: 'u128',
        firstSlot: 'u32',
        lastSlot: 'u32',
      },
      WinningOffset: {
        auctionIndex: 'u32',
        blockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup463: polkadot_runtime_common::crowdloan::pallet::Event<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletEvent: {
    _enum: {
      Created: {
        paraId: 'u32',
      },
      Contributed: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      Withdrew: {
        who: 'AccountId32',
        fundIndex: 'u32',
        amount: 'u128',
      },
      PartiallyRefunded: {
        paraId: 'u32',
      },
      AllRefunded: {
        paraId: 'u32',
      },
      Dissolved: {
        paraId: 'u32',
      },
      HandleBidResult: {
        paraId: 'u32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Edited: {
        paraId: 'u32',
      },
      MemoUpdated: {
        who: 'AccountId32',
        paraId: 'u32',
        memo: 'Bytes',
      },
      AddedToNewRaise: {
        paraId: 'u32'
      }
    }
  },
  /**
   * Lookup464: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: {
        outcome: 'XcmV3TraitsOutcome',
      },
      Sent: {
        origin: 'StagingXcmV3MultiLocation',
        destination: 'StagingXcmV3MultiLocation',
        message: 'XcmV3Xcm',
        messageId: '[u8;32]',
      },
      UnexpectedResponse: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseReady: {
        queryId: 'u64',
        response: 'XcmV3Response',
      },
      Notified: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyOverweight: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
        actualWeight: 'SpWeightsWeightV2Weight',
        maxBudgetedWeight: 'SpWeightsWeightV2Weight',
      },
      NotifyDispatchError: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      NotifyDecodeFailed: {
        queryId: 'u64',
        palletIndex: 'u8',
        callIndex: 'u8',
      },
      InvalidResponder: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedLocation: 'Option<StagingXcmV3MultiLocation>',
      },
      InvalidResponderVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      ResponseTaken: {
        queryId: 'u64',
      },
      AssetsTrapped: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets',
      },
      VersionChangeNotified: {
        destination: 'StagingXcmV3MultiLocation',
        result: 'u32',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      SupportedVersionChanged: {
        location: 'StagingXcmV3MultiLocation',
        version: 'u32',
      },
      NotifyTargetSendFail: {
        location: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        error: 'XcmV3TraitsError',
      },
      NotifyTargetMigrationFail: {
        location: 'XcmVersionedMultiLocation',
        queryId: 'u64',
      },
      InvalidQuerierVersion: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
      },
      InvalidQuerier: {
        origin: 'StagingXcmV3MultiLocation',
        queryId: 'u64',
        expectedQuerier: 'StagingXcmV3MultiLocation',
        maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
      },
      VersionNotifyStarted: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyRequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      VersionNotifyUnrequested: {
        destination: 'StagingXcmV3MultiLocation',
        cost: 'XcmV3MultiassetMultiAssets',
        messageId: '[u8;32]',
      },
      FeesPaid: {
        paying: 'StagingXcmV3MultiLocation',
        fees: 'XcmV3MultiassetMultiAssets',
      },
      AssetsClaimed: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        origin: 'StagingXcmV3MultiLocation',
        assets: 'XcmVersionedMultiAssets'
      }
    }
  },
  /**
   * Lookup465: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup466: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup467: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null'
    }
  },
  /**
   * Lookup468: pallet_asset_rate::pallet::Event<T>
   **/
  PalletAssetRateEvent: {
    _enum: {
      AssetRateCreated: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        rate: 'u128',
      },
      AssetRateRemoved: {
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
      },
      AssetRateUpdated: {
        _alias: {
          new_: 'new',
        },
        assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup469: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup471: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup473: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup474: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup475: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup476: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup477: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup478: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup479: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup483: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup486: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, polkadot_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'PolkadotRuntimeOriginCaller'
  },
  /**
   * Lookup488: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup489: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup491: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup497: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup504: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup505: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup506: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    output: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup507: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup508: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup509: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup513: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup515: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup517: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup518: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup521: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup524: pallet_balances::types::IdAmount<polkadot_runtime::RuntimeHoldReason, Balance>
   **/
  PalletBalancesIdAmountRuntimeHoldReason: {
    id: 'PolkadotRuntimeRuntimeHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup525: polkadot_runtime::RuntimeHoldReason
   **/
  PolkadotRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      Preimage: 'PalletPreimageHoldReason'
    }
  },
  /**
   * Lookup526: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup529: pallet_balances::types::IdAmount<polkadot_runtime::RuntimeFreezeReason, Balance>
   **/
  PalletBalancesIdAmountRuntimeFreezeReason: {
    id: 'PolkadotRuntimeRuntimeFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup530: polkadot_runtime::RuntimeFreezeReason
   **/
  PolkadotRuntimeRuntimeFreezeReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      NominationPools: 'PalletNominationPoolsFreezeReason'
    }
  },
  /**
   * Lookup531: pallet_nomination_pools::pallet::FreezeReason
   **/
  PalletNominationPoolsFreezeReason: {
    _enum: ['PoolMinBalance']
  },
  /**
   * Lookup533: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup534: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup535: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    claimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup537: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup540: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup542: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup545: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup550: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup552: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup553: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup556: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet']
  },
  /**
   * Lookup557: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,PalletStakingExposure)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup562: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup563: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup564: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup565: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup567: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup570: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup571: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup573: pallet_treasury::SpendStatus<polkadot_runtime_common::impls::VersionedLocatableAsset, AssetBalance, xcm::VersionedMultiLocation, BlockNumber, PaymentId>
   **/
  PalletTreasurySpendStatus: {
    assetKind: 'PolkadotRuntimeCommonImplsVersionedLocatableAsset',
    amount: 'u128',
    beneficiary: 'XcmVersionedMultiLocation',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletTreasuryPaymentState'
  },
  /**
   * Lookup574: pallet_treasury::PaymentState<Id>
   **/
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'u64',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup577: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup578: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup580: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PalletConvictionVotingVoteCasting',
      Delegating: 'PalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup581: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup585: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup586: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup587: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'AccountId32',
    conviction: 'PalletConvictionVotingConviction',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup591: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup592: pallet_referenda::types::ReferendumInfo<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfo: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatus',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup593: pallet_referenda::types::ReferendumStatus<TrackId, polkadot_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<polkadot_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatus: {
    track: 'u16',
    origin: 'PolkadotRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup594: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PalletReferendaDeposit: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup597: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup605: pallet_referenda::types::TrackInfo<Balance, Moment>
   **/
  PalletReferendaTrackInfo: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PalletReferendaCurve',
    minSupport: 'PalletReferendaCurve'
  },
  /**
   * Lookup606: pallet_referenda::types::Curve
   **/
  PalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'Perbill',
        floor: 'Perbill',
        ceil: 'Perbill',
      },
      SteppedDecreasing: {
        begin: 'Perbill',
        end: 'Perbill',
        step: 'Perbill',
        period: 'Perbill',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup609: pallet_referenda::pallet::Error<T, I>
   **/
  PalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist']
  },
  /**
   * Lookup610: pallet_whitelist::pallet::Error<T>
   **/
  PalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup611: polkadot_runtime_common::claims::pallet::Error<T>
   **/
  PolkadotRuntimeCommonClaimsPalletError: {
    _enum: ['InvalidEthereumSignature', 'SignerHasNoClaim', 'SenderHasNoClaim', 'PotUnderflow', 'InvalidStatement', 'VestedBalanceExists']
  },
  /**
   * Lookup614: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup615: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup616: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup617: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::simple::IdentityInfo<FieldLimit>>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentitySimpleIdentityInfo'
  },
  /**
   * Lookup625: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, pallet_identity::simple::IdentityField>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup627: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup630: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, polkadot_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'PolkadotRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup634: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup636: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup638: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup640: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup641: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup642: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup644: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup645: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup646: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup647: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup648: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup650: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32, DataProvider>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup656: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, polkadot_runtime::NposCompactSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup657: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners']
  },
  /**
   * Lookup658: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup659: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup661: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup662: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup663: pallet_nomination_pools::PoolMember<T>
   **/
  PalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    lastRecordedRewardCounter: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup666: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PalletNominationPoolsBondedPoolInner: {
    commission: 'PalletNominationPoolsCommission',
    memberCounter: 'u32',
    points: 'u128',
    roles: 'PalletNominationPoolsPoolRoles',
    state: 'PalletNominationPoolsPoolState'
  },
  /**
   * Lookup667: pallet_nomination_pools::Commission<T>
   **/
  PalletNominationPoolsCommission: {
    current: 'Option<(Perbill,AccountId32)>',
    max: 'Option<Perbill>',
    changeRate: 'Option<PalletNominationPoolsCommissionChangeRate>',
    throttleFrom: 'Option<u32>'
  },
  /**
   * Lookup670: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsPoolRoles: {
    depositor: 'AccountId32',
    root: 'Option<AccountId32>',
    nominator: 'Option<AccountId32>',
    bouncer: 'Option<AccountId32>'
  },
  /**
   * Lookup671: pallet_nomination_pools::RewardPool<T>
   **/
  PalletNominationPoolsRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup672: pallet_nomination_pools::SubPools<T>
   **/
  PalletNominationPoolsSubPools: {
    noEra: 'PalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup673: pallet_nomination_pools::UnbondPool<T>
   **/
  PalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup679: pallet_nomination_pools::pallet::Error<T>
   **/
  PalletNominationPoolsError: {
    _enum: {
      PoolNotFound: 'Null',
      PoolMemberNotFound: 'Null',
      RewardPoolNotFound: 'Null',
      SubPoolsNotFound: 'Null',
      AccountBelongsToOtherPool: 'Null',
      FullyUnbonding: 'Null',
      MaxUnbondingLimit: 'Null',
      CannotWithdrawAny: 'Null',
      MinimumBondNotMet: 'Null',
      OverflowRisk: 'Null',
      NotDestroying: 'Null',
      NotNominator: 'Null',
      NotKickerOrDestroying: 'Null',
      NotOpen: 'Null',
      MaxPools: 'Null',
      MaxPoolMembers: 'Null',
      CanNotChangeState: 'Null',
      DoesNotHavePermission: 'Null',
      MetadataExceedsMaxLen: 'Null',
      Defensive: 'PalletNominationPoolsDefensiveError',
      PartialUnbondNotAllowedPermissionlessly: 'Null',
      MaxCommissionRestricted: 'Null',
      CommissionExceedsMaximum: 'Null',
      CommissionExceedsGlobalMaximum: 'Null',
      CommissionChangeThrottled: 'Null',
      CommissionChangeRateNotAllowed: 'Null',
      NoPendingCommission: 'Null',
      NoCommissionCurrentSet: 'Null',
      PoolIdInUse: 'Null',
      InvalidPoolId: 'Null',
      BondExtraRestricted: 'Null',
      NothingToAdjust: 'Null'
    }
  },
  /**
   * Lookup680: pallet_nomination_pools::pallet::DefensiveError
   **/
  PalletNominationPoolsDefensiveError: {
    _enum: ['NotEnoughSpaceInUnbondPool', 'PoolNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'BondedStashKilledPrematurely']
  },
  /**
   * Lookup681: pallet_fast_unstake::types::UnstakeRequest<T>
   **/
  PalletFastUnstakeUnstakeRequest: {
    stashes: 'Vec<(AccountId32,u128)>',
    checked: 'Vec<u32>'
  },
  /**
   * Lookup684: pallet_fast_unstake::pallet::Error<T>
   **/
  PalletFastUnstakeError: {
    _enum: ['NotController', 'AlreadyQueued', 'NotFullyBonded', 'NotQueued', 'AlreadyHead', 'CallNotAllowed']
  },
  /**
   * Lookup685: polkadot_runtime_parachains::configuration::HostConfiguration<BlockNumber>
   **/
  PolkadotRuntimeParachainsConfigurationHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32',
    asyncBackingParams: 'PolkadotPrimitivesV6AsyncBackingAsyncBackingParams',
    maxPovSize: 'u32',
    maxDownwardMessageSize: 'u32',
    hrmpMaxParachainOutboundChannels: 'u32',
    hrmpSenderDeposit: 'u128',
    hrmpRecipientDeposit: 'u128',
    hrmpChannelMaxCapacity: 'u32',
    hrmpChannelMaxTotalSize: 'u32',
    hrmpMaxParachainInboundChannels: 'u32',
    hrmpChannelMaxMessageSize: 'u32',
    executorParams: 'PolkadotPrimitivesV6ExecutorParams',
    codeRetentionPeriod: 'u32',
    onDemandCores: 'u32',
    onDemandRetries: 'u32',
    onDemandQueueMaxSize: 'u32',
    onDemandTargetQueueUtilization: 'Perbill',
    onDemandFeeVariability: 'Perbill',
    onDemandBaseFee: 'u128',
    onDemandTtl: 'u32',
    groupRotationFrequency: 'u32',
    parasAvailabilityPeriod: 'u32',
    schedulingLookahead: 'u32',
    maxValidatorsPerCore: 'Option<u32>',
    maxValidators: 'Option<u32>',
    disputePeriod: 'u32',
    disputePostConclusionAcceptancePeriod: 'u32',
    noShowSlots: 'u32',
    nDelayTranches: 'u32',
    zerothDelayTrancheWidth: 'u32',
    neededApprovals: 'u32',
    relayVrfModuloSamples: 'u32',
    pvfVotingTtl: 'u32',
    minimumValidationUpgradeDelay: 'u32',
    minimumBackingVotes: 'u32'
  },
  /**
   * Lookup688: polkadot_runtime_parachains::configuration::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsConfigurationPalletError: {
    _enum: ['InvalidNewValue']
  },
  /**
   * Lookup691: polkadot_runtime_parachains::shared::AllowedRelayParentsTracker<primitive_types::H256, BlockNumber>
   **/
  PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: {
    buffer: 'Vec<(H256,H256)>',
    latestNumber: 'u32'
  },
  /**
   * Lookup694: polkadot_runtime_parachains::inclusion::AvailabilityBitfieldRecord<N>
   **/
  PolkadotRuntimeParachainsInclusionAvailabilityBitfieldRecord: {
    bitfield: 'BitVec',
    submittedAt: 'u32'
  },
  /**
   * Lookup695: polkadot_runtime_parachains::inclusion::CandidatePendingAvailability<primitive_types::H256, N>
   **/
  PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: {
    _alias: {
      hash_: 'hash'
    },
    core: 'u32',
    hash_: 'H256',
    descriptor: 'PolkadotPrimitivesV6CandidateDescriptor',
    availabilityVotes: 'BitVec',
    backers: 'BitVec',
    relayParentNumber: 'u32',
    backedInNumber: 'u32',
    backingGroup: 'u32'
  },
  /**
   * Lookup696: polkadot_runtime_parachains::inclusion::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsInclusionPalletError: {
    _enum: ['UnsortedOrDuplicateValidatorIndices', 'UnsortedOrDuplicateDisputeStatementSet', 'UnsortedOrDuplicateBackedCandidates', 'UnexpectedRelayParent', 'WrongBitfieldSize', 'BitfieldAllZeros', 'BitfieldDuplicateOrUnordered', 'ValidatorIndexOutOfBounds', 'InvalidBitfieldSignature', 'UnscheduledCandidate', 'CandidateScheduledBeforeParaFree', 'ScheduledOutOfOrder', 'HeadDataTooLarge', 'PrematureCodeUpgrade', 'NewCodeTooLarge', 'DisallowedRelayParent', 'InvalidAssignment', 'InvalidGroupIndex', 'InsufficientBacking', 'InvalidBacking', 'NotCollatorSigned', 'ValidationDataHashMismatch', 'IncorrectDownwardMessageHandling', 'InvalidUpwardMessages', 'HrmpWatermarkMishandling', 'InvalidOutboundHrmp', 'InvalidValidationCodeHash', 'ParaHeadMismatch', 'BitfieldReferencesFreedCore']
  },
  /**
   * Lookup697: polkadot_primitives::v6::ScrapedOnChainVotes<primitive_types::H256>
   **/
  PolkadotPrimitivesV6ScrapedOnChainVotes: {
    session: 'u32',
    backingValidatorsPerCandidate: 'Vec<(PolkadotPrimitivesV6CandidateReceipt,Vec<(u32,PolkadotPrimitivesV6ValidityAttestation)>)>',
    disputes: 'Vec<PolkadotPrimitivesV6DisputeStatementSet>'
  },
  /**
   * Lookup702: polkadot_runtime_parachains::paras_inherent::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasInherentPalletError: {
    _enum: ['TooManyInclusionInherents', 'InvalidParentHeader', 'CandidateConcludedInvalid', 'InherentOverweight', 'DisputeStatementsUnsortedOrDuplicates', 'DisputeInvalid']
  },
  /**
   * Lookup705: polkadot_runtime_parachains::scheduler::pallet::CoreOccupied<N>
   **/
  PolkadotRuntimeParachainsSchedulerPalletCoreOccupied: {
    _enum: {
      Free: 'Null',
      Paras: 'PolkadotRuntimeParachainsSchedulerPalletParasEntry'
    }
  },
  /**
   * Lookup706: polkadot_runtime_parachains::scheduler::pallet::ParasEntry<N>
   **/
  PolkadotRuntimeParachainsSchedulerPalletParasEntry: {
    assignment: 'PolkadotRuntimeParachainsSchedulerCommonAssignment',
    availabilityTimeouts: 'u32',
    ttl: 'u32'
  },
  /**
   * Lookup707: polkadot_runtime_parachains::scheduler::common::Assignment
   **/
  PolkadotRuntimeParachainsSchedulerCommonAssignment: {
    paraId: 'u32'
  },
  /**
   * Lookup713: polkadot_runtime_parachains::paras::PvfCheckActiveVoteState<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: {
    votesAccept: 'BitVec',
    votesReject: 'BitVec',
    age: 'u32',
    createdAt: 'u32',
    causes: 'Vec<PolkadotRuntimeParachainsParasPvfCheckCause>'
  },
  /**
   * Lookup715: polkadot_runtime_parachains::paras::PvfCheckCause<BlockNumber>
   **/
  PolkadotRuntimeParachainsParasPvfCheckCause: {
    _enum: {
      Onboarding: 'u32',
      Upgrade: {
        id: 'u32',
        includedAt: 'u32',
        setGoAhead: 'PolkadotRuntimeParachainsParasSetGoAhead'
      }
    }
  },
  /**
   * Lookup716: polkadot_runtime_parachains::paras::SetGoAhead
   **/
  PolkadotRuntimeParachainsParasSetGoAhead: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup719: polkadot_runtime_parachains::paras::ParaLifecycle
   **/
  PolkadotRuntimeParachainsParasParaLifecycle: {
    _enum: ['Onboarding', 'Parathread', 'Parachain', 'UpgradingParathread', 'DowngradingParachain', 'OffboardingParathread', 'OffboardingParachain']
  },
  /**
   * Lookup721: polkadot_runtime_parachains::paras::ParaPastCodeMeta<N>
   **/
  PolkadotRuntimeParachainsParasParaPastCodeMeta: {
    upgradeTimes: 'Vec<PolkadotRuntimeParachainsParasReplacementTimes>',
    lastPruned: 'Option<u32>'
  },
  /**
   * Lookup723: polkadot_runtime_parachains::paras::ReplacementTimes<N>
   **/
  PolkadotRuntimeParachainsParasReplacementTimes: {
    expectedAt: 'u32',
    activatedAt: 'u32'
  },
  /**
   * Lookup725: polkadot_primitives::v6::UpgradeGoAhead
   **/
  PolkadotPrimitivesV6UpgradeGoAhead: {
    _enum: ['Abort', 'GoAhead']
  },
  /**
   * Lookup726: polkadot_primitives::v6::UpgradeRestriction
   **/
  PolkadotPrimitivesV6UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup727: polkadot_runtime_parachains::paras::ParaGenesisArgs
   **/
  PolkadotRuntimeParachainsParasParaGenesisArgs: {
    genesisHead: 'Bytes',
    validationCode: 'Bytes',
    paraKind: 'bool'
  },
  /**
   * Lookup728: polkadot_runtime_parachains::paras::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsParasPalletError: {
    _enum: ['NotRegistered', 'CannotOnboard', 'CannotOffboard', 'CannotUpgrade', 'CannotDowngrade', 'PvfCheckStatementStale', 'PvfCheckStatementFuture', 'PvfCheckValidatorIndexOutOfBounds', 'PvfCheckInvalidSignature', 'PvfCheckDoubleVote', 'PvfCheckSubjectInvalid', 'CannotUpgradeCode']
  },
  /**
   * Lookup730: polkadot_runtime_parachains::initializer::BufferedSessionChange
   **/
  PolkadotRuntimeParachainsInitializerBufferedSessionChange: {
    validators: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
    queued: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
    sessionIndex: 'u32'
  },
  /**
   * Lookup732: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup733: polkadot_runtime_parachains::hrmp::HrmpOpenChannelRequest
   **/
  PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: {
    confirmed: 'bool',
    age: 'u32',
    senderDeposit: 'u128',
    maxMessageSize: 'u32',
    maxCapacity: 'u32',
    maxTotalSize: 'u32'
  },
  /**
   * Lookup735: polkadot_runtime_parachains::hrmp::HrmpChannel
   **/
  PolkadotRuntimeParachainsHrmpHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>',
    senderDeposit: 'u128',
    recipientDeposit: 'u128'
  },
  /**
   * Lookup737: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup740: polkadot_runtime_parachains::hrmp::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsHrmpPalletError: {
    _enum: ['OpenHrmpChannelToSelf', 'OpenHrmpChannelInvalidRecipient', 'OpenHrmpChannelZeroCapacity', 'OpenHrmpChannelCapacityExceedsLimit', 'OpenHrmpChannelZeroMessageSize', 'OpenHrmpChannelMessageSizeExceedsLimit', 'OpenHrmpChannelAlreadyExists', 'OpenHrmpChannelAlreadyRequested', 'OpenHrmpChannelLimitExceeded', 'AcceptHrmpChannelDoesntExist', 'AcceptHrmpChannelAlreadyConfirmed', 'AcceptHrmpChannelLimitExceeded', 'CloseHrmpChannelUnauthorized', 'CloseHrmpChannelDoesntExist', 'CloseHrmpChannelAlreadyUnderway', 'CancelHrmpOpenChannelUnauthorized', 'OpenHrmpChannelDoesntExist', 'OpenHrmpChannelAlreadyConfirmed', 'WrongWitness', 'ChannelCreationNotAuthorized']
  },
  /**
   * Lookup742: polkadot_primitives::v6::SessionInfo
   **/
  PolkadotPrimitivesV6SessionInfo: {
    activeValidatorIndices: 'Vec<u32>',
    randomSeed: '[u8;32]',
    disputePeriod: 'u32',
    validators: 'PolkadotPrimitivesV6IndexedVecValidatorIndex',
    discoveryKeys: 'Vec<SpAuthorityDiscoveryAppPublic>',
    assignmentKeys: 'Vec<PolkadotPrimitivesV6AssignmentAppPublic>',
    validatorGroups: 'PolkadotPrimitivesV6IndexedVecGroupIndex',
    nCores: 'u32',
    zerothDelayTrancheWidth: 'u32',
    relayVrfModuloSamples: 'u32',
    nDelayTranches: 'u32',
    noShowSlots: 'u32',
    neededApprovals: 'u32'
  },
  /**
   * Lookup743: polkadot_primitives::v6::IndexedVec<polkadot_primitives::v6::ValidatorIndex, polkadot_primitives::v6::validator_app::Public>
   **/
  PolkadotPrimitivesV6IndexedVecValidatorIndex: 'Vec<PolkadotPrimitivesV6ValidatorAppPublic>',
  /**
   * Lookup745: polkadot_primitives::v6::IndexedVec<polkadot_primitives::v6::GroupIndex, V>
   **/
  PolkadotPrimitivesV6IndexedVecGroupIndex: 'Vec<Vec<u32>>',
  /**
   * Lookup747: polkadot_primitives::v6::DisputeState<N>
   **/
  PolkadotPrimitivesV6DisputeState: {
    validatorsFor: 'BitVec',
    validatorsAgainst: 'BitVec',
    start: 'u32',
    concludedAt: 'Option<u32>'
  },
  /**
   * Lookup749: polkadot_runtime_parachains::disputes::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesPalletError: {
    _enum: ['DuplicateDisputeStatementSets', 'AncientDisputeStatement', 'ValidatorIndexOutOfBounds', 'InvalidSignature', 'DuplicateStatement', 'SingleSidedDispute', 'MaliciousBacker', 'MissingBackingVotes', 'UnconfirmedDispute']
  },
  /**
   * Lookup750: polkadot_primitives::v6::slashing::PendingSlashes
   **/
  PolkadotPrimitivesV6SlashingPendingSlashes: {
    _alias: {
      keys_: 'keys'
    },
    keys_: 'BTreeMap<u32, PolkadotPrimitivesV6ValidatorAppPublic>',
    kind: 'PolkadotPrimitivesV6SlashingSlashingOffenceKind'
  },
  /**
   * Lookup754: polkadot_runtime_parachains::disputes::slashing::pallet::Error<T>
   **/
  PolkadotRuntimeParachainsDisputesSlashingPalletError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidSessionIndex', 'InvalidCandidateHash', 'InvalidValidatorIndex', 'ValidatorIndexIdMismatch', 'DuplicateSlashingReport']
  },
  /**
   * Lookup755: polkadot_runtime_common::paras_registrar::ParaInfo<sp_core::crypto::AccountId32, Balance>
   **/
  PolkadotRuntimeCommonParasRegistrarParaInfo: {
    manager: 'AccountId32',
    deposit: 'u128',
    locked: 'Option<bool>'
  },
  /**
   * Lookup757: polkadot_runtime_common::paras_registrar::pallet::Error<T>
   **/
  PolkadotRuntimeCommonParasRegistrarPalletError: {
    _enum: ['NotRegistered', 'AlreadyRegistered', 'NotOwner', 'CodeTooLarge', 'HeadDataTooLarge', 'NotParachain', 'NotParathread', 'CannotDeregister', 'CannotDowngrade', 'CannotUpgrade', 'ParaLocked', 'NotReserved', 'EmptyCode', 'CannotSwap']
  },
  /**
   * Lookup759: polkadot_runtime_common::slots::pallet::Error<T>
   **/
  PolkadotRuntimeCommonSlotsPalletError: {
    _enum: ['ParaNotOnboarding', 'LeaseError']
  },
  /**
   * Lookup764: polkadot_runtime_common::auctions::pallet::Error<T>
   **/
  PolkadotRuntimeCommonAuctionsPalletError: {
    _enum: ['AuctionInProgress', 'LeasePeriodInPast', 'ParaNotRegistered', 'NotCurrentAuction', 'NotAuction', 'AuctionEnded', 'AlreadyLeasedOut']
  },
  /**
   * Lookup765: polkadot_runtime_common::crowdloan::FundInfo<sp_core::crypto::AccountId32, Balance, BlockNumber, LeasePeriod>
   **/
  PolkadotRuntimeCommonCrowdloanFundInfo: {
    depositor: 'AccountId32',
    verifier: 'Option<SpRuntimeMultiSigner>',
    deposit: 'u128',
    raised: 'u128',
    end: 'u32',
    cap: 'u128',
    lastContribution: 'PolkadotRuntimeCommonCrowdloanLastContribution',
    firstPeriod: 'u32',
    lastPeriod: 'u32',
    fundIndex: 'u32'
  },
  /**
   * Lookup766: polkadot_runtime_common::crowdloan::LastContribution<BlockNumber>
   **/
  PolkadotRuntimeCommonCrowdloanLastContribution: {
    _enum: {
      Never: 'Null',
      PreEnding: 'u32',
      Ending: 'u32'
    }
  },
  /**
   * Lookup767: polkadot_runtime_common::crowdloan::pallet::Error<T>
   **/
  PolkadotRuntimeCommonCrowdloanPalletError: {
    _enum: ['FirstPeriodInPast', 'FirstPeriodTooFarInFuture', 'LastPeriodBeforeFirstPeriod', 'LastPeriodTooFarInFuture', 'CannotEndInPast', 'EndTooFarInFuture', 'Overflow', 'ContributionTooSmall', 'InvalidParaId', 'CapExceeded', 'ContributionPeriodOver', 'InvalidOrigin', 'NotParachain', 'LeaseActive', 'BidOrLeaseActive', 'FundNotEnded', 'NoContributions', 'NotReadyToDissolve', 'InvalidSignature', 'MemoTooLarge', 'AlreadyInNewRaise', 'VrfDelayInProgress', 'NoLeasePeriod']
  },
  /**
   * Lookup768: pallet_xcm::pallet::QueryStatus<BlockNumber>
   **/
  PalletXcmQueryStatus: {
    _enum: {
      Pending: {
        responder: 'XcmVersionedMultiLocation',
        maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
        maybeNotify: 'Option<(u8,u8)>',
        timeout: 'u32',
      },
      VersionNotifier: {
        origin: 'XcmVersionedMultiLocation',
        isActive: 'bool',
      },
      Ready: {
        response: 'XcmVersionedResponse',
        at: 'u32'
      }
    }
  },
  /**
   * Lookup772: xcm::VersionedResponse
   **/
  XcmVersionedResponse: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Response',
      V3: 'XcmV3Response'
    }
  },
  /**
   * Lookup778: pallet_xcm::pallet::VersionMigrationStage
   **/
  PalletXcmVersionMigrationStage: {
    _enum: {
      MigrateSupportedVersion: 'Null',
      MigrateVersionNotifiers: 'Null',
      NotifyCurrentTargets: 'Option<Bytes>',
      MigrateAndNotifyOldTargets: 'Null'
    }
  },
  /**
   * Lookup781: xcm::VersionedAssetId
   **/
  XcmVersionedAssetId: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetAssetId'
    }
  },
  /**
   * Lookup782: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
   **/
  PalletXcmRemoteLockedFungibleRecord: {
    amount: 'u128',
    owner: 'XcmVersionedMultiLocation',
    locker: 'XcmVersionedMultiLocation',
    consumers: 'Vec<(Null,u128)>'
  },
  /**
   * Lookup789: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup790: pallet_message_queue::BookState<polkadot_runtime_parachains::inclusion::AggregateMessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup792: pallet_message_queue::Neighbours<polkadot_runtime_parachains::inclusion::AggregateMessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin',
    next: 'PolkadotRuntimeParachainsInclusionAggregateMessageOrigin'
  },
  /**
   * Lookup794: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup796: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused']
  },
  /**
   * Lookup797: pallet_asset_rate::pallet::Error<T>
   **/
  PalletAssetRateError: {
    _enum: ['UnknownAssetKind', 'AlreadyExists']
  },
  /**
   * Lookup800: pallet_beefy::pallet::Error<T>
   **/
  PalletBeefyError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup801: sp_consensus_beefy::mmr::BeefyAuthoritySet<primitive_types::H256>
   **/
  SpConsensusBeefyMmrBeefyAuthoritySet: {
    id: 'u64',
    len: 'u32',
    keysetCommitment: 'H256'
  },
  /**
   * Lookup804: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup805: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup806: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup807: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup810: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup811: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup812: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup813: polkadot_runtime_common::claims::PrevalidateAttests<T>
   **/
  PolkadotRuntimeCommonClaimsPrevalidateAttests: 'Null',
  /**
   * Lookup814: polkadot_runtime::Runtime
   **/
  PolkadotRuntimeRuntime: 'Null'
};
