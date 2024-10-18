import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, I8tgtenllrm1ae, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I9bin2jc70qt6q, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Iegrepoo0c1jc5, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I48e2fe747rjco, I9p9lq3rej5bhc, I3ruf36ao08o1o, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, I6ouflveob4eli, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Iasb8k6ash5mjn, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, I60v7bikk54tpu, Ifpj261e8s63m3, Idcr6u6361oad9, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, I5u8olqbbvfnvf, I5utcetro501ir, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I6r0pr82pbiftt, I40pqum1mu8qg3, I1r4c2ghbtvjuc, Idgh1708iud79i, Idg9nued7rj9lu, Ibmffmjbk0g7fc, Iganvp80uojlv, I83coh41ncldih, Iaicsiknal51kq, Ideaemvoneh309, I3d9o9d7epp66v, I3g63irosbs6te, I6hk7temg1mga7, I2lbmfajhc5gdu, I2siheq6f2djrd, I2eb501t8s6hsq, Ianmuoljk2sk1u, If7mcg44kqffo5, Ic6cqd9g0t65v0, I5sv83ib1q5mod, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I6o1er683vod1j, Id6gojh30v9ib2, Ide1bahhh47lj9, Id9uqtigc0il3v, Ic68lsi7chpv5k, Iek0boln8pgnko, I452bkd71b385t, I2mk62irjfqdo1, I9pnrh0ioo3e3p, Ie5l999tf7t2te, Ia82mnkmeo2rhc, I5l9iaam3hu7m3, Icbccs0ug47ilf, I855j4i3kr8ko1, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I3qt1hgg4djhgb, I4fooe9dun9o0t, Ier2cke86dqbr2, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I1rvj4ubaplho0, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, I1pa6ab6c1hbck, I1i430gb97s77a, Iajbtu2g0pu61r, Iep27ialq4a7o7, Iasu5jvoqr43mv, I425n1kmnbfa6t, I5qolde99acmd1, I7ntcg8dtn6d9g, I2ur0oeqg495j8, I8v2su1f60qoae, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I2rg5btjrsqec0, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, I4i3u9uui7ktsd, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iabpgqcjikia83, Idp330e7njpu21, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, Idrssolrvf38li, I1p1369d52j8jd, XcmVersionedXcm, Ic0c3req3mlc1l, XcmVersionedAssetId, I7ocn4njqde3v5, XcmVersionedLocation, I5rlt6h8ph553n, I48v5riethqckl, I7qbmi3qlph772, I8jorigq0ltvq4, Ieh6nis3hdbtgi, Ic1d4u2opv3fst, Ie9sr1iqcg3cgm, I1mqgk2tmnn9i2, I6lr8sctk0bi4e, I1ef1l2i5ktcdn } from "./common-types";
type AnonymousEnum<T extends {}> = T & {
    __anonymous: true;
};
type MyTuple<T> = [T, ...T[]];
type SeparateUndefined<T> = undefined extends T ? undefined | Exclude<T, undefined> : T;
type Anonymize<T> = SeparateUndefined<T extends FixedSizeBinary<infer L> ? number extends L ? Binary : FixedSizeBinary<L> : T extends string | number | bigint | boolean | void | undefined | null | symbol | Uint8Array | Enum<any> ? T : T extends AnonymousEnum<infer V> ? Enum<V> : T extends MyTuple<any> ? {
    [K in keyof T]: T[K];
} : T extends [] ? [] : T extends FixedSizeArray<infer L, infer T> ? number extends L ? Array<T> : FixedSizeArray<L, T> : {
    [K in keyof T & string]: T[K];
}>;
type IStorage = {
    System: {
        /**
         * The full account information for a particular account ID.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false>;
        /**
         * Total extrinsics count for the current block.
         */
        ExtrinsicCount: StorageDescriptor<[], number, true>;
        /**
         * Whether all inherents have been applied.
         */
        InherentsApplied: StorageDescriptor<[], boolean, false>;
        /**
         * The current weight for the block.
         */
        BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false>;
        /**
         * Total length (in bytes) for all extrinsics put together, for the current block.
         */
        AllExtrinsicsLen: StorageDescriptor<[], number, true>;
        /**
         * Map of block numbers to block hashes.
         */
        BlockHash: StorageDescriptor<[Key: number], FixedSizeBinary<32>, false>;
        /**
         * Extrinsics data for the current block (maps an extrinsic's index to its data).
         */
        ExtrinsicData: StorageDescriptor<[Key: number], Binary, false>;
        /**
         * The current block number being processed. Set by `execute_block`.
         */
        Number: StorageDescriptor<[], number, false>;
        /**
         * Hash of the previous block.
         */
        ParentHash: StorageDescriptor<[], FixedSizeBinary<32>, false>;
        /**
         * Digest of the current block, also part of the block header.
         */
        Digest: StorageDescriptor<[], Anonymize<I4mddgoa69c0a2>, false>;
        /**
         * Events deposited for the current block.
         *
         * NOTE: The item is unbound and should therefore never be read on chain.
         * It could otherwise inflate the PoV size of a block.
         *
         * Events have a large in-memory size. Box the events to not go out-of-memory
         * just in case someone still reads them from within the runtime.
         */
        Events: StorageDescriptor<[], Anonymize<I8tgtenllrm1ae>, false>;
        /**
         * The number of events in the `Events<T>` list.
         */
        EventCount: StorageDescriptor<[], number, false>;
        /**
         * Mapping between a topic (represented by T::Hash) and a vector of indexes
         * of events in the `<Events<T>>` list.
         *
         * All topic vectors have deterministic storage locations depending on the topic. This
         * allows light-clients to leverage the changes trie storage tracking mechanism and
         * in case of changes fetch the list of events of interest.
         *
         * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
         * the `EventIndex` then in case if the topic has the same contents on the next block
         * no notification will be triggered thus the event might be lost.
         */
        EventTopics: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I95g6i7ilua7lq>, false>;
        /**
         * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
         */
        LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true>;
        /**
         * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
         */
        UpgradedToU32RefCount: StorageDescriptor<[], boolean, false>;
        /**
         * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
         * (default) if not.
         */
        UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false>;
        /**
         * The execution phase of the block.
         */
        ExecutionPhase: StorageDescriptor<[], Phase, true>;
        /**
         * `Some` if a code upgrade has been authorized.
         */
        AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ibgl04rn6nbfm6>, true>;
    };
    ParachainSystem: {
        /**
         * Latest included block descendants the runtime accepted. In other words, these are
         * ancestors of the currently executing block which have not been included in the observed
         * relay-chain state.
         *
         * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
         * in the pallet.
         */
        UnincludedSegment: StorageDescriptor<[], Anonymize<I1v7jbnil3tjns>, false>;
        /**
         * Storage field that keeps track of bandwidth used by the unincluded segment along with the
         * latest HRMP watermark. Used for limiting the acceptance of new blocks with
         * respect to relay chain constraints.
         */
        AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<I8jgj1nhcr2dg8>, true>;
        /**
         * In case of a scheduled upgrade, this storage field contains the validation code to be
         * applied.
         *
         * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
         * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
         * with the new validation code. This concludes the upgrade process.
         */
        PendingValidationCode: StorageDescriptor<[], Binary, false>;
        /**
         * Validation code that is set by the parachain and is to be communicated to collator and
         * consequently the relay-chain.
         *
         * This will be cleared in `on_initialize` of each new block if no other pallet already set
         * the value.
         */
        NewValidationCode: StorageDescriptor<[], Binary, true>;
        /**
         * The [`PersistedValidationData`] set for this block.
         * This value is expected to be set only once per block and it's never stored
         * in the trie.
         */
        ValidationData: StorageDescriptor<[], Anonymize<Ifn6q3equiq9qi>, true>;
        /**
         * Were the validation data set to notify the relay chain?
         */
        DidSetValidationCode: StorageDescriptor<[], boolean, false>;
        /**
         * The relay chain block number associated with the last parachain block.
         *
         * This is updated in `on_finalize`.
         */
        LastRelayChainBlockNumber: StorageDescriptor<[], number, false>;
        /**
         * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
         * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
         * candidate will be invalid.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Ia3sb0vgvovhtg>, false>;
        /**
         * Optional upgrade go-ahead signal from the relay-chain.
         *
         * This storage item is a mirror of the corresponding value for the current parachain from the
         * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
         * set after the inherent.
         */
        UpgradeGoAhead: StorageDescriptor<[], Anonymize<Iav8k1edbj86k7>, false>;
        /**
         * The state proof for the last relay parent block.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true>;
        /**
         * The snapshot of some state related to messaging relevant to the current parachain as per
         * the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        RelevantMessagingState: StorageDescriptor<[], Anonymize<I4i91h98n3cv1b>, true>;
        /**
         * The parachain host configuration that was obtained from the relay parent.
         *
         * This field is meant to be updated each block with the validation data inherent. Therefore,
         * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
         *
         * This data is also absent from the genesis.
         */
        HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true>;
        /**
         * The last downward message queue chain head we have observed.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastDmqMqcHead: StorageDescriptor<[], FixedSizeBinary<32>, false>;
        /**
         * The message queue chain heads we have observed per each channel incoming channel.
         *
         * This value is loaded before and saved after processing inbound downward messages carried
         * by the system inherent.
         */
        LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<Iqnbvitf7a7l3>, false>;
        /**
         * Number of downward messages processed in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        ProcessedDownwardMessages: StorageDescriptor<[], number, false>;
        /**
         * HRMP watermark that was set in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpWatermark: StorageDescriptor<[], number, false>;
        /**
         * HRMP messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false>;
        /**
         * Upward messages that were sent in a block.
         *
         * This will be cleared in `on_initialize` of each new block.
         */
        UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        /**
         * Upward messages that are still pending and not yet send to the relay chain.
         */
        PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        /**
         * The factor to multiply the base delivery fee by for UMP.
         */
        UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false>;
        /**
         * The number of HRMP messages we observed in `on_initialize` and thus used that number for
         * announcing the weight of `on_initialize` and `on_finalize`.
         */
        AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false>;
        /**
         * The weight we reserve at the beginning of the block for processing XCMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
        /**
         * The weight we reserve at the beginning of the block for processing DMP messages. This
         * overrides the amount set in the Config trait.
         */
        ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
        /**
         * A custom head data that should be returned as result of `validate_block`.
         *
         * See `Pallet::set_custom_validation_head_data` for more information.
         */
        CustomValidationHeadData: StorageDescriptor<[], Binary, true>;
    };
    Timestamp: {
        /**
         * The current time for the current block.
         */
        Now: StorageDescriptor<[], bigint, false>;
        /**
         * Whether the timestamp has been updated in this block.
         *
         * This value is updated to `true` upon successful submission of a timestamp by a node.
         * It is then checked at the end of each block execution in the `on_finalize` hook.
         */
        DidUpdate: StorageDescriptor<[], boolean, false>;
    };
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false>;
    };
    Balances: {
        /**
         * The total units issued in the system.
         */
        TotalIssuance: StorageDescriptor<[], bigint, false>;
        /**
         * The total units of outstanding deactivated balance in the system.
         */
        InactiveIssuance: StorageDescriptor<[], bigint, false>;
        /**
         * The Balances pallet example of storing the balance of an account.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *    type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
         *  }
         * ```
         *
         * You can also store the balance of an account in the `System` pallet.
         *
         * # Example
         *
         * ```nocompile
         *  impl pallet_balances::Config for Runtime {
         *   type AccountStore = System
         *  }
         * ```
         *
         * But this comes with tradeoffs, storing account balances in the system pallet stores
         * `frame_system` data alongside the account data contrary to storing account balances in the
         * `Balances` pallet, which uses a `StorageMap` to store balances data only.
         * NOTE: This is only used in the case that this pallet is used to store balances.
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false>;
        /**
         * Any liquidity locks on some account balances.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         *
         * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        Locks: StorageDescriptor<[Key: SS58String], Anonymize<I8ds64oj6581v0>, false>;
        /**
         * Named reserves on some account balances.
         *
         * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        Reserves: StorageDescriptor<[Key: SS58String], Anonymize<Ia7pdug7cdsg8g>, false>;
        /**
         * Holds on account balances.
         */
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false>;
        /**
         * Freeze locks on account balances.
         */
        Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false>;
    };
    TransactionPayment: {
        /**
        
         */
        NextFeeMultiplier: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        StorageVersion: StorageDescriptor<[], TransactionPaymentReleases, false>;
    };
    Authorship: {
        /**
         * Author of current block.
         */
        Author: StorageDescriptor<[], SS58String, true>;
    };
    CollatorSelection: {
        /**
         * The invulnerable, permissioned collators. This list must be sorted.
         */
        Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The (community, limited) collation candidates. `Candidates` and `Invulnerables` should be
         * mutually exclusive.
         *
         * This list is sorted in ascending order by deposit and when the deposits are equal, the least
         * recently updated is considered greater.
         */
        CandidateList: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false>;
        /**
         * Last block authored by collator.
         */
        LastAuthoredBlock: StorageDescriptor<[Key: SS58String], number, false>;
        /**
         * Desired number of candidates.
         *
         * This should ideally always be less than [`Config::MaxCandidates`] for weights to be correct.
         */
        DesiredCandidates: StorageDescriptor<[], number, false>;
        /**
         * Fixed amount to deposit to become a collator.
         *
         * When a collator calls `leave_intent` they immediately receive the deposit back.
         */
        CandidacyBond: StorageDescriptor<[], bigint, false>;
    };
    Session: {
        /**
         * The current set of validators.
         */
        Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * Current index of the session.
         */
        CurrentIndex: StorageDescriptor<[], number, false>;
        /**
         * True if the underlying economic identities or weighting behind the validators
         * has changed in the queued validator set.
         */
        QueuedChanged: StorageDescriptor<[], boolean, false>;
        /**
         * The queued keys for the next session. When the next session begins, these keys
         * will be used to determine the validator's session keys.
         */
        QueuedKeys: StorageDescriptor<[], Anonymize<Ifvgo9568rpmqc>, false>;
        /**
         * Indices of disabled validators.
         *
         * The vec is always kept sorted so that we can find whether a given validator is
         * disabled using binary search. It gets cleared when `on_session_ending` returns
         * a new set of identities.
         */
        DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
         * The next session keys for a validator.
         */
        NextKeys: StorageDescriptor<[Key: SS58String], FixedSizeBinary<32>, true>;
        /**
         * The owner of a key. The key is the `KeyTypeId` + the encoded key.
         */
        KeyOwner: StorageDescriptor<[Key: Anonymize<I82jm9g7pufuel>], SS58String, true>;
    };
    Aura: {
        /**
         * The current authority set.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * The current slot of this block.
         *
         * This will be set in `on_initialize`.
         */
        CurrentSlot: StorageDescriptor<[], bigint, false>;
    };
    AuraExt: {
        /**
         * Serves as cache for the authorities.
         *
         * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
         * but we require the old authorities to verify the seal when validating a PoV. This will
         * always be updated to the latest AuRa authorities in `on_finalize`.
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Current slot paired with a number of authored blocks.
         *
         * Updated on each block initialization.
         */
        SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true>;
    };
    XcmpQueue: {
        /**
         * The suspended inbound XCMP channels. All others are not suspended.
         *
         * This is a `StorageValue` instead of a `StorageMap` since we expect multiple reads per block
         * to different keys with a one byte payload. The access to `BoundedBTreeSet` will be cached
         * within the block and therefore only included once in the proof size.
         *
         * NOTE: The PoV benchmarking cannot know this and will over-estimate, but the actual proof
         * will be smaller.
         */
        InboundXcmpSuspended: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
         * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
         * and last outbound message. If the two indices are equal, then it indicates an empty
         * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
         * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
         * case of the need to send a high-priority signal message this block.
         * The bool is true if there is a signal message waiting to be sent.
         */
        OutboundXcmpStatus: StorageDescriptor<[], Anonymize<Ib77b0fp1a6mjr>, false>;
        /**
         * The messages outbound in a given XCMP channel.
         */
        OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
        /**
         * Any signal messages waiting to be sent.
         */
        SignalMessages: StorageDescriptor<[Key: number], Binary, false>;
        /**
         * The configuration which controls the dynamics of the outbound queue.
         */
        QueueConfig: StorageDescriptor<[], Anonymize<Ifup3lg9ro8a0f>, false>;
        /**
         * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
         */
        QueueSuspended: StorageDescriptor<[], boolean, false>;
        /**
         * The factor to multiply the base delivery fee by.
         */
        DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false>;
    };
    PolkadotXcm: {
        /**
         * The latest available query index.
         */
        QueryCounter: StorageDescriptor<[], bigint, false>;
        /**
         * The ongoing queries.
         */
        Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true>;
        /**
         * The existing asset traps.
         *
         * Key is the blake2 256 hash of (origin, versioned `Assets`) pair. Value is the number of
         * times this pair has been trapped (usually just 1 if it exists at all).
         */
        AssetTraps: StorageDescriptor<[Key: FixedSizeBinary<32>], number, false>;
        /**
         * Default version to encode XCM when latest version of destination is unknown. If `None`,
         * then the destinations whose XCM version is unknown are considered unreachable.
         */
        SafeXcmVersion: StorageDescriptor<[], number, true>;
        /**
         * The Latest versions that we know various locations support.
         */
        SupportedVersion: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, number, true>;
        /**
         * All locations that we have requested version notifications from.
         */
        VersionNotifiers: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, bigint, true>;
        /**
         * The target locations that are subscribed to our version changes, as well as the most recent
         * of our versions we informed them of.
         */
        VersionNotifyTargets: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, Anonymize<I7vlvrrl2pnbgk>, true>;
        /**
         * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
         * the `u32` counter is the number of times that a send to the destination has been attempted,
         * which is used as a prioritization.
         */
        VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<I50sjs3s5lud21>, false>;
        /**
         * The current migration's stage, if any.
         */
        CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true>;
        /**
         * Fungible assets which we know are locked on a remote chain.
         */
        RemoteLockedFungibles: StorageDescriptor<Anonymize<Iteuj23is2ed5>, Anonymize<I50qp0ij7h62g2>, true>;
        /**
         * Fungible assets which we know are locked on this chain.
         */
        LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I3rp19gb4dadaa>, true>;
        /**
         * Global suspension state of the XCM executor.
         */
        XcmExecutionSuspended: StorageDescriptor<[], boolean, false>;
        /**
         * Whether or not incoming XCMs (both executed locally and received) should be recorded.
         * Only one XCM program will be recorded at a time.
         * This is meant to be used in runtime APIs, and it's advised it stays false
         * for all other use cases, so as to not degrade regular performance.
         *
         * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
         * implementation in the XCM executor configuration.
         */
        ShouldRecordXcm: StorageDescriptor<[], boolean, false>;
        /**
         * If [`ShouldRecordXcm`] is set to true, then the last XCM program executed locally
         * will be stored here.
         * Runtime APIs can fetch the XCM that was executed by accessing this value.
         *
         * Only relevant if this pallet is being used as the [`xcm_executor::traits::RecordXcm`]
         * implementation in the XCM executor configuration.
         */
        RecordedXcm: StorageDescriptor<[], Anonymize<Iegrepoo0c1jc5>, true>;
    };
    MessageQueue: {
        /**
         * The index of the first and last (non-empty) pages.
         */
        BookStateFor: StorageDescriptor<[Key: Anonymize<Iejeo53sea6n4q>], Anonymize<Idh2ug6ou4a8og>, false>;
        /**
         * The origin at which we should begin servicing.
         */
        ServiceHead: StorageDescriptor<[], Anonymize<Iejeo53sea6n4q>, true>;
        /**
         * The map of page indices to pages.
         */
        Pages: StorageDescriptor<Anonymize<Ib4jhb8tt3uung>, Anonymize<I53esa2ms463bk>, true>;
    };
    Multisig: {
        /**
         * The set of open multisig operations.
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true>;
    };
    Proxy: {
        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I48e2fe747rjco>, false>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false>;
    };
    Identity: {
        /**
         * Information that is pertinent to identify the entity behind an account. First item is the
         * registration, second is the account's primary username.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        IdentityOf: StorageDescriptor<[Key: SS58String], Anonymize<I3ruf36ao08o1o>, true>;
        /**
         * The super-identity of an alternative "sub" identity together with its name, within that
         * context. If the account is not some other account's sub-identity, then just `None`.
         */
        SuperOf: StorageDescriptor<[Key: SS58String], Anonymize<I910puuahutflf>, true>;
        /**
         * Alternative "sub" identities of this account.
         *
         * The first item is the deposit, the second is a vector of the accounts.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        SubsOf: StorageDescriptor<[Key: SS58String], Anonymize<I4nfjdef0ibh44>, false>;
        /**
         * The set of registrars. Not expected to get very big as can only be added through a
         * special origin (likely a council motion).
         *
         * The index into this can be cast to `RegistrarIndex` to get a valid value.
         */
        Registrars: StorageDescriptor<[], Anonymize<I74af64m08r6as>, false>;
        /**
         * A map of the accounts who are authorized to grant usernames.
         */
        UsernameAuthorities: StorageDescriptor<[Key: SS58String], Anonymize<I9bhbof2vim227>, true>;
        /**
         * Reverse lookup from `username` to the `AccountId` that has registered it. The value should
         * be a key in the `IdentityOf` map, but it may not if the user has cleared their identity.
         *
         * Multiple usernames may map to the same `AccountId`, but `IdentityOf` will only map to one
         * primary username.
         */
        AccountOfUsername: StorageDescriptor<[Key: Binary], SS58String, true>;
        /**
         * Usernames that an authority has granted, but that the account controller has not confirmed
         * that they want it. Used primarily in cases where the `AccountId` cannot provide a signature
         * because they are a pure proxy, multisig, etc. In order to confirm it, they should call
         * [`Call::accept_username`].
         *
         * First tuple item is the account and second is the acceptance deadline.
         */
        PendingUsernames: StorageDescriptor<[Key: Binary], Anonymize<I6ouflveob4eli>, true>;
    };
};
type ICalls = {
    System: {
        /**
         *Make some on-chain remark.
         *
         *Can be executed by every `origin`.
         */
        remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *Set the number of pages in the WebAssembly environment's heap.
         */
        set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
        /**
         *Set the new runtime code.
         */
        set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *Set the new runtime code without doing any checks of the given `code`.
         *
         *Note that runtime upgrades will not run if this is called with a not-increasing spec
         *version!
         */
        set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *Set some items of storage.
         */
        set_storage: TxDescriptor<Anonymize<I9pj91mj79qekl>>;
        /**
         *Kill some items from storage.
         */
        kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
        /**
         *Kill all storage items with a key that starts with the given prefix.
         *
         ***NOTE:** We rely on the Root origin to provide us the number of subkeys under
         *the prefix we are removing to accurately calculate the weight of this function.
         */
        kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
        /**
         *Make some on-chain remark and emit event.
         */
        remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *This call requires Root origin.
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *WARNING: This authorizes an upgrade that will take place without any safety checks, for
         *example that the spec name remains the same and that the version number increases. Not
         *recommended for normal use. Use `authorize_upgrade` instead.
         *
         *This call requires Root origin.
         */
        authorize_upgrade_without_checks: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
         *
         *If the authorization required a version check, this call will ensure the spec name
         *remains unchanged and that the spec version has increased.
         *
         *Depending on the runtime's `OnSetCode` configuration, this function may directly apply
         *the new `code` in the same block or attempt to schedule the upgrade.
         *
         *All origins are allowed.
         */
        apply_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    ParachainSystem: {
        /**
         *Set the current validation data.
         *
         *This should be invoked exactly once per block. It will panic at the finalization
         *phase if the call was not invoked.
         *
         *The dispatch origin for this call must be `Inherent`
         *
         *As a side effect, this function upgrades the current validation function
         *if the appropriate time has come.
         */
        set_validation_data: TxDescriptor<Anonymize<I60v7bikk54tpu>>;
        /**
        
         */
        sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
    };
    Timestamp: {
        /**
         *Set the current time.
         *
         *This call should be invoked exactly once per block. It will panic at the finalization
         *phase, if this call hasn't been invoked by that time.
         *
         *The timestamp should be greater than the previous one by the amount specified by
         *[`Config::MinimumPeriod`].
         *
         *The dispatch origin for this call must be _None_.
         *
         *This dispatch class is _Mandatory_ to ensure it gets executed in the block. Be aware
         *that changing the complexity of this call could result exhausting the resources in a
         *block to execute any other calls.
         *
         *## Complexity
         *- `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
         *- 1 storage read and 1 storage mutation (codec `O(1)` because of `DidUpdate::take` in
         *  `on_finalize`)
         *- 1 event handler `on_timestamp_set`. Must be `O(1)`.
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Balances: {
        /**
         *Transfer some liquid free balance to another account.
         *
         *`transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
         *If the sender's account is below the existential deposit as a result
         *of the transfer, the account will be reaped.
         *
         *The dispatch origin for this call must be `Signed` by the transactor.
         */
        transfer_allow_death: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *Exactly as `transfer_allow_death`, except the origin must be root and the source account
         *may be specified.
         */
        force_transfer: TxDescriptor<Anonymize<I9bqtpv2ii35mp>>;
        /**
         *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
         *kill the origin account.
         *
         *99% of the time you want [`transfer_allow_death`] instead.
         *
         *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *Transfer the entire transferable balance from the caller account.
         *
         *NOTE: This function only attempts to transfer _transferable_ balances. This means that
         *any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
         *transferred by this function. To ensure that this function results in a killed account,
         *you might need to prepare the account by removing any reference counters, storage
         *deposits, etc...
         *
         *The dispatch origin of this call must be Signed.
         *
         *- `dest`: The recipient of the transfer.
         *- `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
         *  of the funds the account has, causing the sender account to be killed (false), or
         *  transfer everything except at least the existential deposit, which will guarantee to
         *  keep the sender account alive (true).
         */
        transfer_all: TxDescriptor<Anonymize<I9j7pagd6d4bda>>;
        /**
         *Unreserve some balance from a user by force.
         *
         *Can only be called by ROOT.
         */
        force_unreserve: TxDescriptor<Anonymize<I2h9pmio37r7fb>>;
        /**
         *Upgrade a specified account.
         *
         *- `origin`: Must be `Signed`.
         *- `who`: The account to be upgraded.
         *
         *This will waive the transaction fee if at least all but 10% of the accounts needed to
         *be upgraded. (We let some not have to be upgraded just in order to allow for the
         *possibility of churn).
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
         *Set the regular balance of a given account.
         *
         *The dispatch origin for this call is `root`.
         */
        force_set_balance: TxDescriptor<Anonymize<I9iq22t0burs89>>;
        /**
         *Adjust the total issuance in a saturating way.
         *
         *Can only be called by root and always needs a positive `delta`.
         *
         *# Example
         */
        force_adjust_total_issuance: TxDescriptor<Anonymize<I5u8olqbbvfnvf>>;
        /**
         *Burn the specified liquid free balance from the origin account.
         *
         *If the origin's account ends up below the existential deposit as a result
         *of the burn and `keep_alive` is false, the account will be reaped.
         *
         *Unlike sending funds to a _burn_ address, which merely makes the funds inaccessible,
         *this `burn` operation will reduce total issuance by the amount _burned_.
         */
        burn: TxDescriptor<Anonymize<I5utcetro501ir>>;
    };
    CollatorSelection: {
        /**
         *Set the list of invulnerable (fixed) collators. These collators must do some
         *preparation, namely to have registered session keys.
         *
         *The call will remove any accounts that have not registered keys from the set. That is,
         *it is non-atomic; the caller accepts all `AccountId`s passed in `new` _individually_ as
         *acceptable Invulnerables, and is not proposing a _set_ of new Invulnerables.
         *
         *This call does not maintain mutual exclusivity of `Invulnerables` and `Candidates`. It
         *is recommended to use a batch of `add_invulnerable` and `remove_invulnerable` instead. A
         *`batch_all` can also be used to enforce atomicity. If any candidates are included in
         *`new`, they should be removed with `remove_invulnerable_candidate` after execution.
         *
         *Must be called by the `UpdateOrigin`.
         */
        set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
        /**
         *Set the ideal number of non-invulnerable collators. If lowering this number, then the
         *number of running collators could be higher than this figure. Aside from that edge case,
         *there should be no other way to have more candidates than the desired number.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
        /**
         *Set the candidacy bond amount.
         *
         *If the candidacy bond is increased by this call, all current candidates which have a
         *deposit lower than the new bond will be kicked from the list and get their deposits
         *back.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
        /**
         *Register this account as a collator candidate. The account must (a) already have
         *registered session keys and (b) be able to reserve the `CandidacyBond`.
         *
         *This call is not available to `Invulnerable` collators.
         */
        register_as_candidate: TxDescriptor<undefined>;
        /**
         *Deregister `origin` as a collator candidate. Note that the collator can only leave on
         *session change. The `CandidacyBond` will be unreserved immediately.
         *
         *This call will fail if the total number of candidates would drop below
         *`MinEligibleCollators`.
         */
        leave_intent: TxDescriptor<undefined>;
        /**
         *Add a new account `who` to the list of `Invulnerables` collators. `who` must have
         *registered session keys. If `who` is a candidate, they will be removed.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Remove an account `who` from the list of `Invulnerables` collators. `Invulnerables` must
         *be sorted.
         *
         *The origin for this call must be the `UpdateOrigin`.
         */
        remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Update the candidacy bond of collator candidate `origin` to a new amount `new_deposit`.
         *
         *Setting a `new_deposit` that is lower than the current deposit while `origin` is
         *occupying a top-`DesiredCandidates` slot is not allowed.
         *
         *This call will fail if `origin` is not a collator candidate, the updated bond is lower
         *than the minimum candidacy bond, and/or the amount cannot be reserved.
         */
        update_bond: TxDescriptor<Anonymize<I3sdol54kg5jaq>>;
        /**
         *The caller `origin` replaces a candidate `target` in the collator candidate list by
         *reserving `deposit`. The amount `deposit` reserved by the caller must be greater than
         *the existing bond of the target it is trying to replace.
         *
         *This call will fail if the caller is already a collator candidate or invulnerable, the
         *caller does not have registered session keys, the target is not a collator candidate,
         *and/or the `deposit` amount cannot be reserved.
         */
        take_candidate_slot: TxDescriptor<Anonymize<I8fougodaj6di6>>;
    };
    Session: {
        /**
         *Sets the session key(s) of the function caller to `keys`.
         *Allows an account to set its session key prior to becoming a validator.
         *This doesn't take effect until the next session.
         *
         *The dispatch origin of this function must be signed.
         *
         *## Complexity
         *- `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
         *  fixed.
         */
        set_keys: TxDescriptor<Anonymize<I81vt5eq60l4b6>>;
        /**
         *Removes any session key(s) of the function caller.
         *
         *This doesn't take effect until the next session.
         *
         *The dispatch origin of this function must be Signed and the account must be either be
         *convertible to a validator ID using the chain's typical addressing system (this usually
         *means being a controller account) or directly convertible into a validator ID (which
         *usually means being a stash account).
         *
         *## Complexity
         *- `O(1)` in number of key types. Actual cost depends on the number of length of
         *  `T::Keys::key_ids()` which is fixed.
         */
        purge_keys: TxDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         *Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
         *
         *- `origin`: Must pass `ControllerOrigin`.
         */
        suspend_xcm_execution: TxDescriptor<undefined>;
        /**
         *Resumes all XCM executions for the XCMP queue.
         *
         *Note that this function doesn't change the status of the in/out bound channels.
         *
         *- `origin`: Must pass `ControllerOrigin`.
         */
        resume_xcm_execution: TxDescriptor<undefined>;
        /**
         *Overwrites the number of pages which must be in the queue for the other side to be
         *told to suspend their sending.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.suspend_value`
         */
        update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *Overwrites the number of pages which must be in the queue after which we drop any
         *further messages from the channel.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.drop_threshold`
         */
        update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *Overwrites the number of pages which the queue must be reduced to before it signals
         *that message sending may recommence after it has been suspended.
         *
         *- `origin`: Must pass `Root`.
         *- `new`: Desired value for `QueueConfigData.resume_threshold`
         */
        update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
    };
    PolkadotXcm: {
        /**
        
         */
        send: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
        /**
         *Teleport some assets from the local chain to some destination chain.
         *
         ***This function is deprecated: Use `limited_teleport_assets` instead.**
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
         *with all fees taken as needed from the asset.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` chain.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         */
        teleport_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve.
         *
         *`assets` must have same reserve location and may not be teleportable to `dest`.
         * - `assets` have local reserve: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `assets` have destination reserve: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
         *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
         *   to mint and deposit reserve-based assets to `beneficiary`.
         *
         ***This function is deprecated: Use `limited_reserve_transfer_assets` instead.**
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
         *with all fees taken as needed from the asset.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *Execute an XCM message from a local, signed, origin.
         *
         *An event is deposited indicating whether `msg` could be executed completely or only
         *partially.
         *
         *No more than `max_weight` will be used in its attempted execution. If this is less than
         *the maximum amount of weight that the message could take to be executed, then no
         *execution attempt will be made.
         */
        execute: TxDescriptor<Anonymize<If2ssl12kcglhg>>;
        /**
         *Extoll that a particular destination can be communicated with through a particular
         *version of XCM.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The destination that is being described.
         *- `xcm_version`: The latest version of XCM that `location` supports.
         */
        force_xcm_version: TxDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
         *Set a safe XCM version (the version that XCM should be encoded with if the most recent
         *version a destination can accept is unknown).
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
         *Ask a location to notify us regarding their XCM version and any changes to it.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The location to which we should subscribe for XCM version notifications.
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *Require that a particular destination should no longer notify us regarding any XCM
         *version changes.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `location`: The location to which we are currently subscribed for XCM version
         *  notifications which we no longer desire.
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve.
         *
         *`assets` must have same reserve location and may not be teleportable to `dest`.
         * - `assets` have local reserve: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `assets` have destination reserve: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `assets` have remote reserve: burn local assets, forward XCM to reserve chain to move
         *   reserves from this chain's SA to `dest` chain's SA, and forward another XCM to `dest`
         *   to mint and deposit reserve-based assets to `beneficiary`.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Teleport some assets from the local chain to some destination chain.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` chain.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Set or unset the global suspension state of the XCM executor.
         *
         *- `origin`: Must be an origin specified by AdminOrigin.
         *- `suspended`: `true` to suspend, `false` to resume.
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
        /**
         *Transfer some assets from the local chain to the destination chain through their local,
         *destination or remote reserve, or through teleports.
         *
         *Fee payment on the destination side is made from the asset in the `assets` vector of
         *index `fee_asset_item` (hence referred to as `fees`), up to enough to pay for
         *`weight_limit` of weight. If more weight is needed than `weight_limit`, then the
         *operation will fail and the sent assets may be at risk.
         *
         *`assets` (excluding `fees`) must have same reserve location or otherwise be teleportable
         *to `dest`, no limitations imposed on `fees`.
         * - for local reserve: transfer assets to sovereign account of destination chain and
         *   forward a notification XCM to `dest` to mint and deposit reserve-based assets to
         *   `beneficiary`.
         * - for destination reserve: burn local assets and forward a notification to `dest` chain
         *   to withdraw the reserve assets from this chain's sovereign account and deposit them
         *   to `beneficiary`.
         * - for remote reserve: burn local assets, forward XCM to reserve chain to move reserves
         *   from this chain's SA to `dest` chain's SA, and forward another XCM to `dest` to mint
         *   and deposit reserve-based assets to `beneficiary`.
         * - for teleports: burn local assets and forward XCM to `dest` chain to mint/teleport
         *   assets and deposit them to `beneficiary`.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `X2(Parent,
         *  Parachain(..))` to send from parachain to parachain, or `X1(Parachain(..))` to send
         *  from relay to parachain.
         *- `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will
         *  generally be an `AccountId32` value.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `fee_asset_item`: The index into `assets` of the item which should be used to pay
         *  fees.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *Claims assets trapped on this pallet because of leftover assets during XCM execution.
         *
         *- `origin`: Anyone can call this extrinsic.
         *- `assets`: The exact assets that were trapped. Use the version to specify what version
         *was the latest when they were trapped.
         *- `beneficiary`: The location/account where the claimed assets will be deposited.
         */
        claim_assets: TxDescriptor<Anonymize<I8mmaab8je28oo>>;
        /**
         *Transfer assets from the local chain to the destination chain using explicit transfer
         *types for assets and fees.
         *
         *`assets` must have same reserve location or may be teleportable to `dest`. Caller must
         *provide the `assets_transfer_type` to be used for `assets`:
         * - `TransferType::LocalReserve`: transfer assets to sovereign account of destination
         *   chain and forward a notification XCM to `dest` to mint and deposit reserve-based
         *   assets to `beneficiary`.
         * - `TransferType::DestinationReserve`: burn local assets and forward a notification to
         *   `dest` chain to withdraw the reserve assets from this chain's sovereign account and
         *   deposit them to `beneficiary`.
         * - `TransferType::RemoteReserve(reserve)`: burn local assets, forward XCM to `reserve`
         *   chain to move reserves from this chain's SA to `dest` chain's SA, and forward another
         *   XCM to `dest` to mint and deposit reserve-based assets to `beneficiary`. Typically
         *   the remote `reserve` is Asset Hub.
         * - `TransferType::Teleport`: burn local assets and forward XCM to `dest` chain to
         *   mint/teleport assets and deposit them to `beneficiary`.
         *
         *On the destination chain, as well as any intermediary hops, `BuyExecution` is used to
         *buy execution using transferred `assets` identified by `remote_fees_id`.
         *Make sure enough of the specified `remote_fees_id` asset is included in the given list
         *of `assets`. `remote_fees_id` should be enough to pay for `weight_limit`. If more weight
         *is needed than `weight_limit`, then the operation will fail and the sent assets may be
         *at risk.
         *
         *`remote_fees_id` may use different transfer type than rest of `assets` and can be
         *specified through `fees_transfer_type`.
         *
         *The caller needs to specify what should happen to the transferred assets once they reach
         *the `dest` chain. This is done through the `custom_xcm_on_dest` parameter, which
         *contains the instructions to execute on `dest` as a final step.
         *  This is usually as simple as:
         *  `Xcm(vec![DepositAsset { assets: Wild(AllCounted(assets.len())), beneficiary }])`,
         *  but could be something more exotic like sending the `assets` even further.
         *
         *- `origin`: Must be capable of withdrawing the `assets` and executing XCM.
         *- `dest`: Destination context for the assets. Will typically be `[Parent,
         *  Parachain(..)]` to send from parachain to parachain, or `[Parachain(..)]` to send from
         *  relay to parachain, or `(parents: 2, (GlobalConsensus(..), ..))` to send from
         *  parachain across a bridge to another ecosystem destination.
         *- `assets`: The assets to be withdrawn. This should include the assets used to pay the
         *  fee on the `dest` (and possibly reserve) chains.
         *- `assets_transfer_type`: The XCM `TransferType` used to transfer the `assets`.
         *- `remote_fees_id`: One of the included `assets` to be used to pay fees.
         *- `fees_transfer_type`: The XCM `TransferType` used to transfer the `fees` assets.
         *- `custom_xcm_on_dest`: The XCM to be executed on `dest` chain as the last step of the
         *  transfer, which also determines what happens to the assets on the destination chain.
         *- `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
         */
        transfer_assets_using_type_and_then: TxDescriptor<Anonymize<I6r0pr82pbiftt>>;
    };
    MessageQueue: {
        /**
         *Remove a page which has no more messages remaining to be processed or is stale.
         */
        reap_page: TxDescriptor<Anonymize<I40pqum1mu8qg3>>;
        /**
         *Execute an overweight message.
         *
         *Temporary processing errors will be propagated whereas permanent errors are treated
         *as success condition.
         *
         *- `origin`: Must be `Signed`.
         *- `message_origin`: The origin from which the message to be executed arrived.
         *- `page`: The page in the queue in which the message to be executed is sitting.
         *- `index`: The index into the queue of the message to be executed.
         *- `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
         *  of the message.
         *
         *Benchmark complexity considerations: O(index + weight_limit).
         */
        execute_overweight: TxDescriptor<Anonymize<I1r4c2ghbtvjuc>>;
    };
    Utility: {
        /**
         *Send a batch of dispatch calls.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatched without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         *
         *This will return `Ok` in all circumstances. To determine the success of the batch, an
         *event is deposited. If a call failed and the batch was interrupted, then the
         *`BatchInterrupted` event is deposited, along with the number of successful calls made
         *and the error of the failed call. If all were successful, then the `BatchCompleted`
         *event is deposited.
         */
        batch: TxDescriptor<Anonymize<Idgh1708iud79i>>;
        /**
         *Send a call through an indexed pseudonym of the sender.
         *
         *Filter from origin are passed along. The call will be dispatched with an origin which
         *use the same filter as the origin of this call.
         *
         *NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
         *because you expect `proxy` to have been used prior in the call stack and you do not want
         *the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
         *in the Multisig pallet instead.
         *
         *NOTE: Prior to version *12, this was called `as_limited_sub`.
         *
         *The dispatch origin for this call must be _Signed_.
         */
        as_derivative: TxDescriptor<Anonymize<Idg9nued7rj9lu>>;
        /**
         *Send a batch of dispatch calls and atomically execute them.
         *The whole transaction will rollback and fail if any of the calls failed.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatched without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         */
        batch_all: TxDescriptor<Anonymize<Idgh1708iud79i>>;
        /**
         *Dispatches a function call with a provided origin.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *## Complexity
         *- O(1).
         */
        dispatch_as: TxDescriptor<Anonymize<Ibmffmjbk0g7fc>>;
        /**
         *Send a batch of dispatch calls.
         *Unlike `batch`, it allows errors and won't interrupt.
         *
         *May be called from any origin except `None`.
         *
         *- `calls`: The calls to be dispatched from the same origin. The number of call must not
         *  exceed the constant: `batched_calls_limit` (available in constant metadata).
         *
         *If origin is root then the calls are dispatch without checking origin filter. (This
         *includes bypassing `frame_system::Config::BaseCallFilter`).
         *
         *## Complexity
         *- O(C) where C is the number of calls to be batched.
         */
        force_batch: TxDescriptor<Anonymize<Idgh1708iud79i>>;
        /**
         *Dispatch a function call with a specified weight.
         *
         *This function does not check the weight of the call, and instead allows the
         *Root origin to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Root_.
         */
        with_weight: TxDescriptor<Anonymize<Iganvp80uojlv>>;
    };
    Multisig: {
        /**
         *Immediately dispatch a multi-signature call using a single approval from the caller.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `other_signatories`: The accounts (other than the sender) who are part of the
         *multi-signature, but do not participate in the approval process.
         *- `call`: The call to be executed.
         *
         *Result is equivalent to the dispatched result.
         *
         *## Complexity
         *O(Z + C) where Z is the length of the call and C its execution weight.
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I83coh41ncldih>>;
        /**
         *Register approval for a dispatch to be made from a deterministic composite account if
         *approved by a total of `threshold - 1` of `other_signatories`.
         *
         *If there are enough, then dispatch the call.
         *
         *Payment: `DepositBase` will be reserved if this is the first approval, plus
         *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
         *is cancelled.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
         *not the first approval, then it must be `Some`, with the timepoint (block number and
         *transaction index) of the first approval transaction.
         *- `call`: The call to be executed.
         *
         *NOTE: Unless this is the final approval, you will generally want to use
         *`approve_as_multi` instead, since it only requires a hash of the call.
         *
         *Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
         *on success, result is `Ok` and the result from the interior call, if it was executed,
         *may be found in the deposited `MultisigExecuted` event.
         *
         *## Complexity
         *- `O(S + Z + Call)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
         *- One encode & hash, both of complexity `O(S)`.
         *- Up to one binary search and insert (`O(logS + S)`).
         *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
         *- One event.
         *- The weight of the `call`.
         *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
         *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
         */
        as_multi: TxDescriptor<Anonymize<Iaicsiknal51kq>>;
        /**
         *Register approval for a dispatch to be made from a deterministic composite account if
         *approved by a total of `threshold - 1` of `other_signatories`.
         *
         *Payment: `DepositBase` will be reserved if this is the first approval, plus
         *`threshold` times `DepositFactor`. It is returned once this dispatch happens or
         *is cancelled.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
         *not the first approval, then it must be `Some`, with the timepoint (block number and
         *transaction index) of the first approval transaction.
         *- `call_hash`: The hash of the call to be executed.
         *
         *NOTE: If this is the final approval, you will want to use `as_multi` instead.
         *
         *## Complexity
         *- `O(S)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One encode & hash, both of complexity `O(S)`.
         *- Up to one binary search and insert (`O(logS + S)`).
         *- I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
         *- One event.
         *- Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
         *  taken for its lifetime of `DepositBase + threshold * DepositFactor`.
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
         *Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
         *for this operation will be unreserved on success.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `threshold`: The total number of approvals for this dispatch before it is executed.
         *- `other_signatories`: The accounts (other than the sender) who can approve this
         *dispatch. May not be empty.
         *- `timepoint`: The timepoint (block number and transaction index) of the first approval
         *transaction for this dispatch.
         *- `call_hash`: The hash of the call to be executed.
         *
         *## Complexity
         *- `O(S)`.
         *- Up to one balance-reserve or unreserve operation.
         *- One passthrough operation, one insert, both `O(S)` where `S` is the number of
         *  signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
         *- One encode & hash, both of complexity `O(S)`.
         *- One event.
         *- I/O: 1 read `O(S)`, one remove.
         *- Storage: removes one item.
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Proxy: {
        /**
         *Dispatch the given `call` from an account that the sender is authorised for through
         *`add_proxy`.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         *- `call`: The call to be made by the `real` account.
         */
        proxy: TxDescriptor<Anonymize<I3g63irosbs6te>>;
        /**
         *Register a proxy account for the sender that is able to make calls on its behalf.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to make a proxy.
         *- `proxy_type`: The permissions allowed for this proxy account.
         *- `delay`: The announcement period required of the initial proxy. Will generally be
         *zero.
         */
        add_proxy: TxDescriptor<Anonymize<I6hk7temg1mga7>>;
        /**
         *Unregister a proxy account for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to remove as a proxy.
         *- `proxy_type`: The permissions currently enabled for the removed proxy account.
         */
        remove_proxy: TxDescriptor<Anonymize<I6hk7temg1mga7>>;
        /**
         *Unregister all proxy accounts for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *WARNING: This may be called on accounts created by `pure`, however if done, then
         *the unreserved fees will be inaccessible. **All access to this account will be lost.**
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         *Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
         *initialize it with a proxy of `proxy_type` for `origin` sender.
         *
         *Requires a `Signed` origin.
         *
         *- `proxy_type`: The type of the proxy that the sender will be registered as over the
         *new account. This will almost always be the most permissive `ProxyType` possible to
         *allow for maximum flexibility.
         *- `index`: A disambiguation index, in case this is called multiple times in the same
         *transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
         *want to use `0`.
         *- `delay`: The announcement period required of the initial proxy. Will generally be
         *zero.
         *
         *Fails with `Duplicate` if this has already been called in this transaction, from the
         *same sender, with the same parameters.
         *
         *Fails if there are insufficient funds to pay for deposit.
         */
        create_pure: TxDescriptor<Anonymize<I2lbmfajhc5gdu>>;
        /**
         *Removes a previously spawned pure proxy.
         *
         *WARNING: **All access to this account will be lost.** Any funds held in it will be
         *inaccessible.
         *
         *Requires a `Signed` origin, and the sender account must have been created by a call to
         *`pure` with corresponding parameters.
         *
         *- `spawner`: The account that originally called `pure` to create this account.
         *- `index`: The disambiguation index originally passed to `pure`. Probably `0`.
         *- `proxy_type`: The proxy type originally passed to `pure`.
         *- `height`: The height of the chain when the call to `pure` was processed.
         *- `ext_index`: The extrinsic index in which the call to `pure` was processed.
         *
         *Fails with `NoPermission` in case the caller is not a previously created pure
         *account whose `pure` call has corresponding parameters.
         */
        kill_pure: TxDescriptor<Anonymize<I2siheq6f2djrd>>;
        /**
         *Publish the hash of a proxy-call that will be made in the future.
         *
         *This must be called some number of blocks before the corresponding `proxy` is attempted
         *if the delay associated with the proxy relationship is greater than zero.
         *
         *No more than `MaxPending` announcements may be made at any one time.
         *
         *This will take a deposit of `AnnouncementDepositFactor` as well as
         *`AnnouncementDepositBase` if there are no other pending announcements.
         *
         *The dispatch origin for this call must be _Signed_ and a proxy of `real`.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `call_hash`: The hash of the call to be made by the `real` account.
         */
        announce: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *Remove a given announcement.
         *
         *May be called by a proxy account to remove a call they previously announced and return
         *the deposit.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `call_hash`: The hash of the call to be made by the `real` account.
         */
        remove_announcement: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *Remove the given announcement of a delegate.
         *
         *May be called by a target (proxied) account to remove a call that one of their delegates
         *(`delegate`) has announced they want to execute. The deposit is returned.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `delegate`: The account that previously announced the call.
         *- `call_hash`: The hash of the call to be made.
         */
        reject_announcement: TxDescriptor<Anonymize<Ianmuoljk2sk1u>>;
        /**
         *Dispatch the given `call` from an account that the sender is authorized for through
         *`add_proxy`.
         *
         *Removes any corresponding announcement(s).
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `real`: The account that the proxy will make a call on behalf of.
         *- `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
         *- `call`: The call to be made by the `real` account.
         */
        proxy_announced: TxDescriptor<Anonymize<If7mcg44kqffo5>>;
    };
    Identity: {
        /**
         *Add a registrar to the system.
         *
         *The dispatch origin for this call must be `T::RegistrarOrigin`.
         *
         *- `account`: the account of the registrar.
         *
         *Emits `RegistrarAdded` if successful.
         */
        add_registrar: TxDescriptor<Anonymize<Ic6cqd9g0t65v0>>;
        /**
         *Set an account's identity information and reserve the appropriate deposit.
         *
         *If the account already has identity information, the deposit is taken as part payment
         *for the new deposit.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `info`: The identity information.
         *
         *Emits `IdentitySet` if successful.
         */
        set_identity: TxDescriptor<Anonymize<I5sv83ib1q5mod>>;
        /**
         *Set the sub-accounts of the sender.
         *
         *Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
         *and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *identity.
         *
         *- `subs`: The identity's (new) sub-accounts.
         */
        set_subs: TxDescriptor<Anonymize<Ia9mkdf6l44shb>>;
        /**
         *Clear an account's identity info and all sub-accounts and return all deposits.
         *
         *Payment: All reserved balances on the account are returned.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *identity.
         *
         *Emits `IdentityCleared` if successful.
         */
        clear_identity: TxDescriptor<undefined>;
        /**
         *Request a judgement from a registrar.
         *
         *Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
         *given.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a
         *registered identity.
         *
         *- `reg_index`: The index of the registrar whose judgement is requested.
         *- `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
         *
         *```nocompile
         *Registrars::<T>::get().get(reg_index).unwrap().fee
         *```
         *
         *Emits `JudgementRequested` if successful.
         */
        request_judgement: TxDescriptor<Anonymize<I9l2s4klu0831o>>;
        /**
         *Cancel a previous request.
         *
         *Payment: A previously reserved deposit is returned on success.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a
         *registered identity.
         *
         *- `reg_index`: The index of the registrar whose judgement is no longer requested.
         *
         *Emits `JudgementUnrequested` if successful.
         */
        cancel_request: TxDescriptor<Anonymize<I2ctrt5nqb8o7c>>;
        /**
         *Set the fee required for a judgement to be requested from a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `fee`: the new fee.
         */
        set_fee: TxDescriptor<Anonymize<I711qahikocb1c>>;
        /**
         *Change the account associated with a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `new`: the new account ID.
         */
        set_account_id: TxDescriptor<Anonymize<I6o1er683vod1j>>;
        /**
         *Set the field information for a registrar.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `index`.
         *
         *- `index`: the index of the registrar whose fee is to be set.
         *- `fields`: the fields that the registrar concerns themselves with.
         */
        set_fields: TxDescriptor<Anonymize<Id6gojh30v9ib2>>;
        /**
         *Provide a judgement for an account's identity.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must be the account
         *of the registrar whose index is `reg_index`.
         *
         *- `reg_index`: the index of the registrar whose judgement is being made.
         *- `target`: the account whose identity the judgement is upon. This must be an account
         *  with a registered identity.
         *- `judgement`: the judgement of the registrar of index `reg_index` about `target`.
         *- `identity`: The hash of the [`IdentityInformationProvider`] for that the judgement is
         *  provided.
         *
         *Note: Judgements do not apply to a username.
         *
         *Emits `JudgementGiven` if successful.
         */
        provide_judgement: TxDescriptor<Anonymize<Ide1bahhh47lj9>>;
        /**
         *Remove an account's identity and sub-account information and slash the deposits.
         *
         *Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
         *`Slash`. Verification request deposits are not returned; they should be cancelled
         *manually using `cancel_request`.
         *
         *The dispatch origin for this call must match `T::ForceOrigin`.
         *
         *- `target`: the account whose identity the judgement is upon. This must be an account
         *  with a registered identity.
         *
         *Emits `IdentityKilled` if successful.
         */
        kill_identity: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *Add the given account to the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        add_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *Alter the associated name of the given sub-account.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        rename_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *Remove the given account from the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        remove_sub: TxDescriptor<Anonymize<Iek0boln8pgnko>>;
        /**
         *Remove the sender as a sub-account.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender (*not* the original depositor).
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *super-identity.
         *
         *NOTE: This should not normally be used, but is provided in the case that the non-
         *controller of an account is maliciously registered as a sub-account.
         */
        quit_sub: TxDescriptor<undefined>;
        /**
         *Add an `AccountId` with permission to grant usernames with a given `suffix` appended.
         *
         *The authority can grant up to `allocation` usernames. To top up their allocation, they
         *should just issue (or request via governance) a new `add_username_authority` call.
         */
        add_username_authority: TxDescriptor<Anonymize<I452bkd71b385t>>;
        /**
         *Remove `authority` from the username authorities.
         */
        remove_username_authority: TxDescriptor<Anonymize<I2mk62irjfqdo1>>;
        /**
         *Set the username for `who`. Must be called by a username authority.
         *
         *The authority must have an `allocation`. Users can either pre-sign their usernames or
         *accept them later.
         *
         *Usernames must:
         *  - Only contain lowercase ASCII characters or digits.
         *  - When combined with the suffix of the issuing authority be _less than_ the
         *    `MaxUsernameLength`.
         */
        set_username_for: TxDescriptor<Anonymize<I9pnrh0ioo3e3p>>;
        /**
         *Accept a given username that an `authority` granted. The call must include the full
         *username, as in `username.suffix`.
         */
        accept_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Remove an expired username approval. The username was approved by an authority but never
         *accepted by the user and must now be beyond its expiration. The call must include the
         *full username, as in `username.suffix`.
         */
        remove_expired_approval: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Set a given username as the primary. The username should include the suffix.
         */
        set_primary_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *Remove a username that corresponds to an account with no identity. Exists when a user
         *gets a username but then calls `clear_identity`.
         */
        remove_dangling_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
    };
    IdentityMigrator: {
        /**
         *Reap the `IdentityInfo` of `who` from the Identity pallet of `T`, unreserving any
         *deposits held and removing storage items associated with `who`.
         */
        reap_identity: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Update the deposit of `who`. Meant to be called by the system with an XCM `Transact`
         *Instruction.
         */
        poke_deposit: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
};
type IEvent = {
    System: {
        /**
         *An extrinsic completed successfully.
         */
        ExtrinsicSuccess: PlainDescriptor<Anonymize<Ia82mnkmeo2rhc>>;
        /**
         *An extrinsic failed.
         */
        ExtrinsicFailed: PlainDescriptor<Anonymize<I5l9iaam3hu7m3>>;
        /**
         *`:code` was updated.
         */
        CodeUpdated: PlainDescriptor<undefined>;
        /**
         *A new account was created.
         */
        NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *An account was reaped.
         */
        KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *On on-chain remark happened.
         */
        Remarked: PlainDescriptor<Anonymize<I855j4i3kr8ko1>>;
        /**
         *An upgrade was authorized.
         */
        UpgradeAuthorized: PlainDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
    };
    ParachainSystem: {
        /**
         *The validation function has been scheduled to apply.
         */
        ValidationFunctionStored: PlainDescriptor<undefined>;
        /**
         *The validation function was applied as of the contained relay chain block number.
         */
        ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
        /**
         *The relay-chain aborted the upgrade process.
         */
        ValidationFunctionDiscarded: PlainDescriptor<undefined>;
        /**
         *Some downward messages have been received and will be processed.
         */
        DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
        /**
         *Downward messages were processed using the given weight.
         */
        DownwardMessagesProcessed: PlainDescriptor<Anonymize<I100l07kaehdlp>>;
        /**
         *An upward message was sent to the relay chain.
         */
        UpwardMessageSent: PlainDescriptor<Anonymize<I6gnbnvip5vvdi>>;
    };
    Balances: {
        /**
         *An account was created with some free balance.
         */
        Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>;
        /**
         *An account was removed whose balance was non-zero but below ExistentialDeposit,
         *resulting in an outright loss.
         */
        DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
        /**
         *Transfer succeeded.
         */
        Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
        /**
         *A balance was set by root.
         */
        BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
        /**
         *Some balance was reserved (moved from free to reserved).
         */
        Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was unreserved (moved from reserved to free).
         */
        Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was moved from the reserve of the first account to the second account.
         *Final argument indicates the destination balance type.
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I8tjvj9uq4b7hi>>;
        /**
         *Some amount was deposited (e.g. for transaction fees).
         */
        Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was withdrawn from the account (e.g. for transaction fees).
         */
        Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was removed from the account (e.g. for misbehavior).
         */
        Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was minted into an account.
         */
        Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was burned from an account.
         */
        Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was suspended from an account (it can be restored later).
         */
        Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some amount was restored into an account.
         */
        Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *An account was upgraded.
         */
        Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Total issuance was increased by `amount`, creating a credit to be balanced.
         */
        Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *Total issuance was decreased by `amount`, creating a debt to be balanced.
         */
        Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *Some balance was locked.
         */
        Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was unlocked.
         */
        Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Some balance was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *The `TotalIssuance` was forcefully changed.
         */
        TotalIssuanceForced: PlainDescriptor<Anonymize<I4fooe9dun9o0t>>;
    };
    TransactionPayment: {
        /**
         *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         *has been paid by `who`.
         */
        TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
    };
    CollatorSelection: {
        /**
         *New Invulnerables were set.
         */
        NewInvulnerables: PlainDescriptor<Anonymize<I39t01nnod9109>>;
        /**
         *A new Invulnerable was added.
         */
        InvulnerableAdded: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *An Invulnerable was removed.
         */
        InvulnerableRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *The number of desired candidates was set.
         */
        NewDesiredCandidates: PlainDescriptor<Anonymize<I1qmtmbe5so8r3>>;
        /**
         *The candidacy bond was set.
         */
        NewCandidacyBond: PlainDescriptor<Anonymize<Ih99m6ehpcar7>>;
        /**
         *A new candidate joined.
         */
        CandidateAdded: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
        /**
         *Bond of a candidate updated.
         */
        CandidateBondUpdated: PlainDescriptor<Anonymize<Idgorhsbgdq2ap>>;
        /**
         *A candidate was removed.
         */
        CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *An account was replaced in the candidate list by another one.
         */
        CandidateReplaced: PlainDescriptor<Anonymize<I9ubb2kqevnu6t>>;
        /**
         *An account was unable to be added to the Invulnerables because they did not have keys
         *registered. Other Invulnerables may have been set.
         */
        InvalidInvulnerableSkipped: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
    };
    Session: {
        /**
         *New session has happened. Note that the argument is the session index, not the
         *block number as the type might suggest.
         */
        NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
    };
    XcmpQueue: {
        /**
         *An HRMP message was sent to a sibling parachain.
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
    };
    PolkadotXcm: {
        /**
         *Execution of an XCM message was attempted.
         */
        Attempted: PlainDescriptor<Anonymize<I2aatv5i0cb96a>>;
        /**
         *A XCM message was sent.
         */
        Sent: PlainDescriptor<Anonymize<Ib9msr5sr8t3dn>>;
        /**
         *Query response received which does not match a registered query. This may be because a
         *matching query was never registered, it may be because it is a duplicate response, or
         *because the query timed out.
         */
        UnexpectedResponse: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Query response has been received and is ready for taking with `take_response`. There is
         *no registered notification call.
         */
        ResponseReady: PlainDescriptor<Anonymize<I3iun9sig164po>>;
        /**
         *Query response has been received and query is removed. The registered notification has
         *been dispatched and executed successfully.
         */
        Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Query response has been received and query is removed. The registered notification
         *could not be dispatched because the dispatch weight is greater than the maximum weight
         *originally budgeted by this runtime for the query result.
         */
        NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>;
        /**
         *Query response has been received and query is removed. There was a general error with
         *dispatching the notification call.
         */
        NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Query response has been received and query is removed. The dispatch was unable to be
         *decoded into a `Call`; this might be due to dispatch function having a signature which
         *is not `(origin, QueryId, Response)`.
         */
        NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
         *Expected query response has been received but the origin location of the response does
         *not match that expected. The query remains registered for a later, valid, response to
         *be received and acted upon.
         */
        InvalidResponder: PlainDescriptor<Anonymize<I13jboebjcbglr>>;
        /**
         *Expected query response has been received but the expected origin location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidResponderVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Received query response has been read and removed.
         */
        ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
         *Some assets have been placed in an asset trap.
         */
        AssetsTrapped: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
         *An XCM version change notification message has been attempted to be sent.
         *
         *The cost of sending it (borne by the chain) is included.
         */
        VersionChangeNotified: PlainDescriptor<Anonymize<Ic8hi3qr11vngc>>;
        /**
         *The supported version of a location has been changed. This might be through an
         *automatic notification or a manual intervention.
         */
        SupportedVersionChanged: PlainDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *sending the notification to it.
         */
        NotifyTargetSendFail: PlainDescriptor<Anonymize<Ibjdlecumfu7q7>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *migrating the location to our new XCM format.
         */
        NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ia9ems1kg7laoc>>;
        /**
         *Expected query response has been received but the expected querier location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidQuerierVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
         *Expected query response has been received but the querier location of the response does
         *not match the expected. The query remains registered for a later, valid, response to
         *be received and acted upon.
         */
        InvalidQuerier: PlainDescriptor<Anonymize<I92fq0fa45vi3>>;
        /**
         *A remote has requested XCM version change notification from us and we have honored it.
         *A version information message is sent to them and its cost is included.
         */
        VersionNotifyStarted: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *We have requested that a remote chain send us XCM version change notifications.
         */
        VersionNotifyRequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *We have requested that a remote chain stops sending us XCM version change
         *notifications.
         */
        VersionNotifyUnrequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
         *Fees were paid from a location for an operation (often for using `SendXcm`).
         */
        FeesPaid: PlainDescriptor<Anonymize<I6nu8k62ck9o8o>>;
        /**
         *Some assets have been claimed from an asset trap
         */
        AssetsClaimed: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
         *A XCM version migration finished.
         */
        VersionMigrationFinished: PlainDescriptor<Anonymize<I6s1nbislhk619>>;
    };
    CumulusXcm: {
        /**
         *Downward message is invalid XCM.
         *\[ id \]
         */
        InvalidFormat: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         *Downward message is unsupported version of XCM.
         *\[ id \]
         */
        UnsupportedVersion: PlainDescriptor<FixedSizeBinary<32>>;
        /**
         *Downward message executed with the given outcome.
         *\[ id, outcome \]
         */
        ExecutedDownward: PlainDescriptor<Anonymize<Iea25i7vqm7ot3>>;
    };
    MessageQueue: {
        /**
         *Message discarded due to an error in the `MessageProcessor` (usually a format error).
         */
        ProcessingFailed: PlainDescriptor<Anonymize<I1rvj4ubaplho0>>;
        /**
         *Message is processed.
         */
        Processed: PlainDescriptor<Anonymize<Ia3uu7lqcc1q1i>>;
        /**
         *Message placed in overweight queue.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<I7crucfnonitkn>>;
        /**
         *This page was reaped.
         */
        PageReaped: PlainDescriptor<Anonymize<I7tmrp94r9sq4n>>;
    };
    Utility: {
        /**
         *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
         *well as the error.
         */
        BatchInterrupted: PlainDescriptor<Anonymize<I1pa6ab6c1hbck>>;
        /**
         *Batch of dispatches completed fully with no error.
         */
        BatchCompleted: PlainDescriptor<undefined>;
        /**
         *Batch of dispatches completed but has errors.
         */
        BatchCompletedWithErrors: PlainDescriptor<undefined>;
        /**
         *A single item within a Batch of dispatches has completed with no error.
         */
        ItemCompleted: PlainDescriptor<undefined>;
        /**
         *A single item within a Batch of dispatches has completed with error.
         */
        ItemFailed: PlainDescriptor<Anonymize<I1i430gb97s77a>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Iajbtu2g0pu61r>>;
    };
    Multisig: {
        /**
         *A new multisig operation has begun.
         */
        NewMultisig: PlainDescriptor<Anonymize<Iep27ialq4a7o7>>;
        /**
         *A multisig operation has been approved by someone.
         */
        MultisigApproval: PlainDescriptor<Anonymize<Iasu5jvoqr43mv>>;
        /**
         *A multisig operation has been executed.
         */
        MultisigExecuted: PlainDescriptor<Anonymize<I425n1kmnbfa6t>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Iajbtu2g0pu61r>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<I7ntcg8dtn6d9g>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I8v2su1f60qoae>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I8v2su1f60qoae>>;
    };
    Identity: {
        /**
         *A name was set or reset (which will remove all judgements).
         */
        IdentitySet: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *A name was cleared, and the given balance returned.
         */
        IdentityCleared: PlainDescriptor<Anonymize<Iep1lmt6q3s6r3>>;
        /**
         *A name was removed and the given balance slashed.
         */
        IdentityKilled: PlainDescriptor<Anonymize<Iep1lmt6q3s6r3>>;
        /**
         *A judgement was asked from a registrar.
         */
        JudgementRequested: PlainDescriptor<Anonymize<I1fac16213rie2>>;
        /**
         *A judgement request was retracted.
         */
        JudgementUnrequested: PlainDescriptor<Anonymize<I1fac16213rie2>>;
        /**
         *A judgement was given by a registrar.
         */
        JudgementGiven: PlainDescriptor<Anonymize<Ifjt77oc391o43>>;
        /**
         *A registrar was added.
         */
        RegistrarAdded: PlainDescriptor<Anonymize<Itvt1jsipv0lc>>;
        /**
         *A sub-identity was added to an identity and the deposit paid.
         */
        SubIdentityAdded: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A sub-identity was removed from an identity and the deposit freed.
         */
        SubIdentityRemoved: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A sub-identity was cleared, and the given deposit repatriated from the
         *main identity account to the sub-identity account.
         */
        SubIdentityRevoked: PlainDescriptor<Anonymize<Ick3mveut33f44>>;
        /**
         *A username authority was added.
         */
        AuthorityAdded: PlainDescriptor<Anonymize<I2rg5btjrsqec0>>;
        /**
         *A username authority was removed.
         */
        AuthorityRemoved: PlainDescriptor<Anonymize<I2rg5btjrsqec0>>;
        /**
         *A username was set for `who`.
         */
        UsernameSet: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
        /**
         *A username was queued, but `who` must accept it prior to `expiration`.
         */
        UsernameQueued: PlainDescriptor<Anonymize<I8u2ba9jeiu6q0>>;
        /**
         *A queued username passed its expiration without being claimed and was removed.
         */
        PreapprovalExpired: PlainDescriptor<Anonymize<I7ieadb293k6b4>>;
        /**
         *A username was set as a primary and can be looked up from `who`.
         */
        PrimaryUsernameSet: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
        /**
         *A dangling username (as in, a username corresponding to an account that has removed its
         *identity) has been removed.
         */
        DanglingUsernameRemoved: PlainDescriptor<Anonymize<Ibdqerrooruuq9>>;
    };
    IdentityMigrator: {
        /**
         *The identity and all sub accounts were reaped for `who`.
         */
        IdentityReaped: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *The deposits held for `who` were updated. `identity` is the new deposit held for
         *identity info, and `subs` is the new deposit held for the sub-accounts.
         */
        DepositUpdated: PlainDescriptor<Anonymize<I4i3u9uui7ktsd>>;
    };
};
type IError = {
    System: {
        /**
         *The name of specification does not match between the current runtime
         *and the new runtime.
         */
        InvalidSpecName: PlainDescriptor<undefined>;
        /**
         *The specification version is not allowed to decrease between the current runtime
         *and the new runtime.
         */
        SpecVersionNeedsToIncrease: PlainDescriptor<undefined>;
        /**
         *Failed to extract the runtime version from the new runtime.
         *
         *Either calling `Core_version` or decoding `RuntimeVersion` failed.
         */
        FailedToExtractRuntimeVersion: PlainDescriptor<undefined>;
        /**
         *Suicide called when the account has non-default composite data.
         */
        NonDefaultComposite: PlainDescriptor<undefined>;
        /**
         *There is a non-zero reference count preventing the account from being purged.
         */
        NonZeroRefCount: PlainDescriptor<undefined>;
        /**
         *The origin filter prevent the call to be dispatched.
         */
        CallFiltered: PlainDescriptor<undefined>;
        /**
         *A multi-block migration is ongoing and prevents the current code from being replaced.
         */
        MultiBlockMigrationsOngoing: PlainDescriptor<undefined>;
        /**
         *No upgrade authorized.
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
         *The submitted code is not authorized.
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    ParachainSystem: {
        /**
         *Attempt to upgrade validation function while existing upgrade pending.
         */
        OverlappingUpgrades: PlainDescriptor<undefined>;
        /**
         *Polkadot currently prohibits this parachain from upgrading its validation function.
         */
        ProhibitedByPolkadot: PlainDescriptor<undefined>;
        /**
         *The supplied validation function has compiled into a blob larger than Polkadot is
         *willing to run.
         */
        TooBig: PlainDescriptor<undefined>;
        /**
         *The inherent which supplies the validation data did not run this block.
         */
        ValidationDataNotAvailable: PlainDescriptor<undefined>;
        /**
         *The inherent which supplies the host configuration did not run this block.
         */
        HostConfigurationNotAvailable: PlainDescriptor<undefined>;
        /**
         *No validation function upgrade is currently scheduled.
         */
        NotScheduled: PlainDescriptor<undefined>;
        /**
         *No code upgrade has been authorized.
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
         *The given code upgrade has not been authorized.
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    Balances: {
        /**
         *Vesting balance too high to send value.
         */
        VestingBalance: PlainDescriptor<undefined>;
        /**
         *Account liquidity restrictions prevent withdrawal.
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
         *Balance too low to send value.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Value too low to create account due to existential deposit.
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
         *Transfer/payment would kill account.
         */
        Expendability: PlainDescriptor<undefined>;
        /**
         *A vesting schedule already exists for this account.
         */
        ExistingVestingSchedule: PlainDescriptor<undefined>;
        /**
         *Beneficiary account must pre-exist.
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
         *Number of named reserves exceed `MaxReserves`.
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
         *Number of holds exceed `VariantCountOf<T::RuntimeHoldReason>`.
         */
        TooManyHolds: PlainDescriptor<undefined>;
        /**
         *Number of freezes exceed `MaxFreezes`.
         */
        TooManyFreezes: PlainDescriptor<undefined>;
        /**
         *The issuance cannot be modified since it is already deactivated.
         */
        IssuanceDeactivated: PlainDescriptor<undefined>;
        /**
         *The delta cannot be zero.
         */
        DeltaZero: PlainDescriptor<undefined>;
    };
    CollatorSelection: {
        /**
         *The pallet has too many candidates.
         */
        TooManyCandidates: PlainDescriptor<undefined>;
        /**
         *Leaving would result in too few candidates.
         */
        TooFewEligibleCollators: PlainDescriptor<undefined>;
        /**
         *Account is already a candidate.
         */
        AlreadyCandidate: PlainDescriptor<undefined>;
        /**
         *Account is not a candidate.
         */
        NotCandidate: PlainDescriptor<undefined>;
        /**
         *There are too many Invulnerables.
         */
        TooManyInvulnerables: PlainDescriptor<undefined>;
        /**
         *Account is already an Invulnerable.
         */
        AlreadyInvulnerable: PlainDescriptor<undefined>;
        /**
         *Account is not an Invulnerable.
         */
        NotInvulnerable: PlainDescriptor<undefined>;
        /**
         *Account has no associated validator ID.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         *Validator ID is not yet registered.
         */
        ValidatorNotRegistered: PlainDescriptor<undefined>;
        /**
         *Could not insert in the candidate list.
         */
        InsertToCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *Could not remove from the candidate list.
         */
        RemoveFromCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *New deposit amount would be below the minimum candidacy bond.
         */
        DepositTooLow: PlainDescriptor<undefined>;
        /**
         *Could not update the candidate list.
         */
        UpdateCandidateListFailed: PlainDescriptor<undefined>;
        /**
         *Deposit amount is too low to take the target's slot in the candidate list.
         */
        InsufficientBond: PlainDescriptor<undefined>;
        /**
         *The target account to be replaced in the candidate list is not a candidate.
         */
        TargetIsNotCandidate: PlainDescriptor<undefined>;
        /**
         *The updated deposit amount is equal to the amount already reserved.
         */
        IdenticalDeposit: PlainDescriptor<undefined>;
        /**
         *Cannot lower candidacy bond while occupying a future collator slot in the list.
         */
        InvalidUnreserve: PlainDescriptor<undefined>;
    };
    Session: {
        /**
         *Invalid ownership proof.
         */
        InvalidProof: PlainDescriptor<undefined>;
        /**
         *No associated validator ID for account.
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
         *Registered duplicate key.
         */
        DuplicatedKey: PlainDescriptor<undefined>;
        /**
         *No keys are associated with this account.
         */
        NoKeys: PlainDescriptor<undefined>;
        /**
         *Key setting account is not live, so it's impossible to associate keys.
         */
        NoAccount: PlainDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         *Setting the queue config failed since one of its values was invalid.
         */
        BadQueueConfig: PlainDescriptor<undefined>;
        /**
         *The execution is already suspended.
         */
        AlreadySuspended: PlainDescriptor<undefined>;
        /**
         *The execution is already resumed.
         */
        AlreadyResumed: PlainDescriptor<undefined>;
        /**
         *There are too many active outbound channels.
         */
        TooManyActiveOutboundChannels: PlainDescriptor<undefined>;
        /**
         *The message is too big.
         */
        TooBig: PlainDescriptor<undefined>;
    };
    PolkadotXcm: {
        /**
         *The desired destination was unreachable, generally because there is a no way of routing
         *to it.
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
         *There was some other issue (i.e. not to do with routing) in sending the message.
         *Perhaps a lack of space for buffering the message.
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
         *The message execution fails the filter.
         */
        Filtered: PlainDescriptor<undefined>;
        /**
         *The message's weight could not be determined.
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
         *The destination `Location` provided cannot be inverted.
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
         *The assets to be sent are empty.
         */
        Empty: PlainDescriptor<undefined>;
        /**
         *Could not re-anchor the assets to declare the fees for the destination chain.
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         *Too many assets have been attempted for transfer.
         */
        TooManyAssets: PlainDescriptor<undefined>;
        /**
         *Origin is invalid for sending.
         */
        InvalidOrigin: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
         *The given location could not be used (e.g. because it cannot be expressed in the
         *desired version of XCM).
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
         *The referenced subscription could not be found.
         */
        NoSubscription: PlainDescriptor<undefined>;
        /**
         *The location is invalid since it already has a subscription from us.
         */
        AlreadySubscribed: PlainDescriptor<undefined>;
        /**
         *Could not check-out the assets for teleportation to the destination chain.
         */
        CannotCheckOutTeleport: PlainDescriptor<undefined>;
        /**
         *The owner does not own (all) of the asset that they wish to do the operation on.
         */
        LowBalance: PlainDescriptor<undefined>;
        /**
         *The asset owner has too many locks on the asset.
         */
        TooManyLocks: PlainDescriptor<undefined>;
        /**
         *The given account is not an identifiable sovereign account for any location.
         */
        AccountNotSovereign: PlainDescriptor<undefined>;
        /**
         *The operation required fees to be paid which the initiator could not meet.
         */
        FeesNotMet: PlainDescriptor<undefined>;
        /**
         *A remote lock with the corresponding data could not be found.
         */
        LockNotFound: PlainDescriptor<undefined>;
        /**
         *The unlock operation cannot succeed because there are still consumers of the lock.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid asset, reserve chain could not be determined for it.
         */
        InvalidAssetUnknownReserve: PlainDescriptor<undefined>;
        /**
         *Invalid asset, do not support remote asset reserves with different fees reserves.
         */
        InvalidAssetUnsupportedReserve: PlainDescriptor<undefined>;
        /**
         *Too many assets with different reserve locations have been attempted for transfer.
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
         *Local XCM execution incomplete.
         */
        LocalExecutionIncomplete: PlainDescriptor<undefined>;
    };
    MessageQueue: {
        /**
         *Page is not reapable because it has items remaining to be processed and is not old
         *enough.
         */
        NotReapable: PlainDescriptor<undefined>;
        /**
         *Page to be reaped does not exist.
         */
        NoPage: PlainDescriptor<undefined>;
        /**
         *The referenced message could not be found.
         */
        NoMessage: PlainDescriptor<undefined>;
        /**
         *The message was already processed and cannot be processed again.
         */
        AlreadyProcessed: PlainDescriptor<undefined>;
        /**
         *The message is queued for future execution.
         */
        Queued: PlainDescriptor<undefined>;
        /**
         *There is temporarily not enough weight to continue servicing messages.
         */
        InsufficientWeight: PlainDescriptor<undefined>;
        /**
         *This message is temporarily unprocessable.
         *
         *Such errors are expected, but not guaranteed, to resolve themselves eventually through
         *retrying.
         */
        TemporarilyUnprocessable: PlainDescriptor<undefined>;
        /**
         *The queue is paused and no message can be executed from it.
         *
         *This can change at any time and may resolve in the future by re-trying.
         */
        QueuePaused: PlainDescriptor<undefined>;
        /**
         *Another call is in progress and needs to finish before this call can happen.
         */
        RecursiveDisallowed: PlainDescriptor<undefined>;
    };
    Utility: {
        /**
         *Too many calls batched.
         */
        TooManyCalls: PlainDescriptor<undefined>;
    };
    Multisig: {
        /**
         *Threshold must be 2 or greater.
         */
        MinimumThreshold: PlainDescriptor<undefined>;
        /**
         *Call is already approved by this signatory.
         */
        AlreadyApproved: PlainDescriptor<undefined>;
        /**
         *Call doesn't need any (more) approvals.
         */
        NoApprovalsNeeded: PlainDescriptor<undefined>;
        /**
         *There are too few signatories in the list.
         */
        TooFewSignatories: PlainDescriptor<undefined>;
        /**
         *There are too many signatories in the list.
         */
        TooManySignatories: PlainDescriptor<undefined>;
        /**
         *The signatories were provided out of order; they should be ordered.
         */
        SignatoriesOutOfOrder: PlainDescriptor<undefined>;
        /**
         *The sender was contained in the other signatories; it shouldn't be.
         */
        SenderInSignatories: PlainDescriptor<undefined>;
        /**
         *Multisig operation not found when attempting to cancel.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Only the account that originally created the multisig is able to cancel it.
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
         *No timepoint was given, yet the multisig operation is already underway.
         */
        NoTimepoint: PlainDescriptor<undefined>;
        /**
         *A different timepoint was given to the multisig operation that is underway.
         */
        WrongTimepoint: PlainDescriptor<undefined>;
        /**
         *A timepoint was given, yet no multisig operation is underway.
         */
        UnexpectedTimepoint: PlainDescriptor<undefined>;
        /**
         *The maximum weight information provided was too low.
         */
        MaxWeightTooLow: PlainDescriptor<undefined>;
        /**
         *The data to be stored is already stored.
         */
        AlreadyStored: PlainDescriptor<undefined>;
    };
    Proxy: {
        /**
         *There are too many proxies registered or too many announcements pending.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Proxy registration not found.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Sender is not a proxy of the account to be proxied.
         */
        NotProxy: PlainDescriptor<undefined>;
        /**
         *A call which is incompatible with the proxy type's filter was attempted.
         */
        Unproxyable: PlainDescriptor<undefined>;
        /**
         *Account is already a proxy.
         */
        Duplicate: PlainDescriptor<undefined>;
        /**
         *Call may not be made by proxy because it may escalate its privileges.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *Announcement, if made at all, was made too recently.
         */
        Unannounced: PlainDescriptor<undefined>;
        /**
         *Cannot add self as proxy.
         */
        NoSelfProxy: PlainDescriptor<undefined>;
    };
    Identity: {
        /**
         *Too many subs-accounts.
         */
        TooManySubAccounts: PlainDescriptor<undefined>;
        /**
         *Account isn't found.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Account isn't named.
         */
        NotNamed: PlainDescriptor<undefined>;
        /**
         *Empty index.
         */
        EmptyIndex: PlainDescriptor<undefined>;
        /**
         *Fee is changed.
         */
        FeeChanged: PlainDescriptor<undefined>;
        /**
         *No identity found.
         */
        NoIdentity: PlainDescriptor<undefined>;
        /**
         *Sticky judgement.
         */
        StickyJudgement: PlainDescriptor<undefined>;
        /**
         *Judgement given.
         */
        JudgementGiven: PlainDescriptor<undefined>;
        /**
         *Invalid judgement.
         */
        InvalidJudgement: PlainDescriptor<undefined>;
        /**
         *The index is invalid.
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
         *The target is invalid.
         */
        InvalidTarget: PlainDescriptor<undefined>;
        /**
         *Maximum amount of registrars reached. Cannot add any more.
         */
        TooManyRegistrars: PlainDescriptor<undefined>;
        /**
         *Account ID is already named.
         */
        AlreadyClaimed: PlainDescriptor<undefined>;
        /**
         *Sender is not a sub-account.
         */
        NotSub: PlainDescriptor<undefined>;
        /**
         *Sub-account isn't owned by sender.
         */
        NotOwned: PlainDescriptor<undefined>;
        /**
         *The provided judgement was for a different identity.
         */
        JudgementForDifferentIdentity: PlainDescriptor<undefined>;
        /**
         *Error that occurs when there is an issue paying for judgement.
         */
        JudgementPaymentFailed: PlainDescriptor<undefined>;
        /**
         *The provided suffix is too long.
         */
        InvalidSuffix: PlainDescriptor<undefined>;
        /**
         *The sender does not have permission to issue a username.
         */
        NotUsernameAuthority: PlainDescriptor<undefined>;
        /**
         *The authority cannot allocate any more usernames.
         */
        NoAllocation: PlainDescriptor<undefined>;
        /**
         *The signature on a username was not valid.
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
         *Setting this username requires a signature, but none was provided.
         */
        RequiresSignature: PlainDescriptor<undefined>;
        /**
         *The username does not meet the requirements.
         */
        InvalidUsername: PlainDescriptor<undefined>;
        /**
         *The username is already taken.
         */
        UsernameTaken: PlainDescriptor<undefined>;
        /**
         *The requested username does not exist.
         */
        NoUsername: PlainDescriptor<undefined>;
        /**
         *The username cannot be forcefully removed because it can still be accepted.
         */
        NotExpired: PlainDescriptor<undefined>;
    };
};
type IConstants = {
    System: {
        /**
         * Block & extrinsics weights: base values and limits.
         */
        BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>;
        /**
         * The maximum length of a block (in bytes).
         */
        BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>;
        /**
         * Maximum number of block number to block hash mappings to keep (oldest pruned first).
         */
        BlockHashCount: PlainDescriptor<number>;
        /**
         * The weight of runtime database operations the runtime can invoke.
         */
        DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
        /**
         * Get the chain's in-code version.
         */
        Version: PlainDescriptor<Anonymize<Ic6nglu2db2c36>>;
        /**
         * The designated SS58 prefix of this chain.
         *
         * This replaces the "ss58Format" property declared in the chain spec. Reason is
         * that the runtime should know about the prefix in order to make use of it as
         * an identifier of the chain.
         */
        SS58Prefix: PlainDescriptor<number>;
    };
    ParachainSystem: {
        /**
         * Returns the parachain ID we are running with.
         */
        SelfParaId: PlainDescriptor<number>;
    };
    Timestamp: {
        /**
         * The minimum period between blocks.
         *
         * Be aware that this is different to the *expected* period that the block production
         * apparatus provides. Your chosen consensus system will generally work with this to
         * determine a sensible block time. For example, in the Aura pallet it will be double this
         * period on default settings.
         */
        MinimumPeriod: PlainDescriptor<bigint>;
    };
    Balances: {
        /**
         * The minimum amount required to keep an account open. MUST BE GREATER THAN ZERO!
         *
         * If you *really* need it to be zero, you can enable the feature `insecure_zero_ed` for
         * this pallet. However, you do so at your own risk: this will open up a major DoS vector.
         * In case you have multiple sources of provider references, you may also get unexpected
         * behaviour if you set this to zero.
         *
         * Bottom line: Do yourself a favour and make it at least one!
         */
        ExistentialDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum number of locks that should exist on an account.
         * Not strictly enforced, but used for weight estimation.
         *
         * Use of locks is deprecated in favour of freezes. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        MaxLocks: PlainDescriptor<number>;
        /**
         * The maximum number of named reserves that can exist on an account.
         *
         * Use of reserves is deprecated in favour of holds. See `https://github.com/paritytech/substrate/pull/12951/`
         */
        MaxReserves: PlainDescriptor<number>;
        /**
         * The maximum number of individual freeze locks that can exist on an account at any time.
         */
        MaxFreezes: PlainDescriptor<number>;
    };
    TransactionPayment: {
        /**
         * A fee multiplier for `Operational` extrinsics to compute "virtual tip" to boost their
         * `priority`
         *
         * This value is multiplied by the `final_fee` to obtain a "virtual tip" that is later
         * added to a tip component in regular `priority` calculations.
         * It means that a `Normal` transaction can front-run a similarly-sized `Operational`
         * extrinsic (with no tip), by including a tip value greater than the virtual tip.
         *
         * ```rust,ignore
         * // For `Normal`
         * let priority = priority_calc(tip);
         *
         * // For `Operational`
         * let virtual_tip = (inclusion_fee + tip) * OperationalFeeMultiplier;
         * let priority = priority_calc(tip + virtual_tip);
         * ```
         *
         * Note that since we use `final_fee` the multiplier applies also to the regular `tip`
         * sent with the transaction. So, not only does the transaction get a priority bump based
         * on the `inclusion_fee`, but we also amplify the impact of tips applied to `Operational`
         * transactions.
         */
        OperationalFeeMultiplier: PlainDescriptor<number>;
    };
    Aura: {
        /**
         * The slot duration Aura should run with, expressed in milliseconds.
         * The effective value of this type should not change while the chain is running.
         *
         * For backwards compatibility either use [`MinimumPeriodTimesTwo`] or a const.
         */
        SlotDuration: PlainDescriptor<bigint>;
    };
    XcmpQueue: {
        /**
         * The maximum number of inbound XCMP channels that can be suspended simultaneously.
         *
         * Any further channel suspensions will fail and messages may get dropped without further
         * notice. Choosing a high value (1000) is okay; the trade-off that is described in
         * [`InboundXcmpSuspended`] still applies at that scale.
         */
        MaxInboundSuspended: PlainDescriptor<number>;
        /**
         * Maximal number of outbound XCMP channels that can have messages queued at the same time.
         *
         * If this is reached, then no further messages can be sent to channels that do not yet
         * have a message queued. This should be set to the expected maximum of outbound channels
         * which is determined by [`Self::ChannelInfo`]. It is important to set this large enough,
         * since otherwise the congestion control protocol will not work as intended and messages
         * may be dropped. This value increases the PoV and should therefore not be picked too
         * high. Governance needs to pay attention to not open more channels than this value.
         */
        MaxActiveOutboundChannels: PlainDescriptor<number>;
        /**
         * The maximal page size for HRMP message pages.
         *
         * A lower limit can be set dynamically, but this is the hard-limit for the PoV worst case
         * benchmarking. The limit for the size of a message is slightly below this, since some
         * overhead is incurred for encoding the format.
         */
        MaxPageSize: PlainDescriptor<number>;
    };
    MessageQueue: {
        /**
         * The size of the page; this implies the maximum message size which can be sent.
         *
         * A good value depends on the expected message sizes, their weights, the weight that is
         * available for processing them and the maximal needed message size. The maximal message
         * size is slightly lower than this as defined by [`MaxMessageLenOf`].
         */
        HeapSize: PlainDescriptor<number>;
        /**
         * The maximum number of stale pages (i.e. of overweight messages) allowed before culling
         * can happen. Once there are more stale pages than this, then historical pages may be
         * dropped, even if they contain unprocessed overweight messages.
         */
        MaxStale: PlainDescriptor<number>;
        /**
         * The amount of weight (if any) which should be provided to the message queue for
         * servicing enqueued items `on_initialize`.
         *
         * This may be legitimately `None` in the case that you will call
         * `ServiceQueues::service_queues` manually or set [`Self::IdleMaxServiceWeight`] to have
         * it run in `on_idle`.
         */
        ServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
        /**
         * The maximum amount of weight (if any) to be used from remaining weight `on_idle` which
         * should be provided to the message queue for servicing enqueued items `on_idle`.
         * Useful for parachains to process messages at the same block they are received.
         *
         * If `None`, it will not call `ServiceQueues::service_queues` in `on_idle`.
         */
        IdleMaxServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
    };
    Utility: {
        /**
         * The limit on the number of batched calls.
         */
        batched_calls_limit: PlainDescriptor<number>;
    };
    Multisig: {
        /**
         * The base amount of currency needed to reserve for creating a multisig execution or to
         * store a dispatch call for later.
         *
         * This is held for an additional storage item whose value size is
         * `4 + sizeof((BlockNumber, Balance, AccountId))` bytes and whose key size is
         * `32 + sizeof(AccountId)` bytes.
         */
        DepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per unit threshold when creating a multisig execution.
         *
         * This is held for adding 32 bytes more into a pre-existing storage value.
         */
        DepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of signatories allowed in the multisig.
         */
        MaxSignatories: PlainDescriptor<number>;
    };
    Proxy: {
        /**
         * The base amount of currency needed to reserve for creating a proxy.
         *
         * This is held for an additional storage item whose value size is
         * `sizeof(Balance)` bytes and whose key size is `sizeof(AccountId)` bytes.
         */
        ProxyDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per proxy added.
         *
         * This is held for adding 32 bytes plus an instance of `ProxyType` more into a
         * pre-existing storage value. Thus, when configuring `ProxyDepositFactor` one should take
         * into account `32 + proxy_type.encode().len()` bytes of data.
         */
        ProxyDepositFactor: PlainDescriptor<bigint>;
        /**
         * The maximum amount of proxies allowed for a single account.
         */
        MaxProxies: PlainDescriptor<number>;
        /**
         * The maximum amount of time-delayed announcements that are allowed to be pending.
         */
        MaxPending: PlainDescriptor<number>;
        /**
         * The base amount of currency needed to reserve for creating an announcement.
         *
         * This is held when a new storage item holding a `Balance` is created (typically 16
         * bytes).
         */
        AnnouncementDepositBase: PlainDescriptor<bigint>;
        /**
         * The amount of currency needed per announcement made.
         *
         * This is held for adding an `AccountId`, `Hash` and `BlockNumber` (typically 68 bytes)
         * into a pre-existing storage value.
         */
        AnnouncementDepositFactor: PlainDescriptor<bigint>;
    };
    Identity: {
        /**
         * The amount held on deposit for a registered identity.
         */
        BasicDeposit: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit per encoded byte for a registered identity.
         */
        ByteDeposit: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit for a registered subaccount. This should account for the fact
         * that one storage item's value will increase by the size of an account ID, and there will
         * be another trie item whose value is the size of an account ID plus 32 bytes.
         */
        SubAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum number of sub-accounts allowed per identified account.
         */
        MaxSubAccounts: PlainDescriptor<number>;
        /**
         * Maximum number of registrars allowed in the system. Needed to bound the complexity
         * of, e.g., updating judgements.
         */
        MaxRegistrars: PlainDescriptor<number>;
        /**
         * The number of blocks within which a username grant must be accepted.
         */
        PendingUsernameExpiration: PlainDescriptor<number>;
        /**
         * The maximum length of a suffix.
         */
        MaxSuffixLength: PlainDescriptor<number>;
        /**
         * The maximum length of a username, including its suffix and any system-added delimiters.
         */
        MaxUsernameLength: PlainDescriptor<number>;
    };
};
type IRuntimeCalls = {
    /**
     * API necessary for block authorship with aura.
     */
    AuraApi: {
        /**
         * Returns the slot duration for Aura.
         *
         * Currently, only the value provided by this type at genesis will be used.
         */
        slot_duration: RuntimeDescriptor<[], bigint>;
        /**
         * Return the current set of authorities.
         */
        authorities: RuntimeDescriptor<[], Anonymize<Ic5m5lp1oioo8r>>;
    };
    /**
     * This runtime API is used to inform potential block authors whether they will
     * have the right to author at a slot, assuming they have claimed the slot.
     *
     * In particular, this API allows Aura-based parachains to regulate their "unincluded segment",
     * which is the section of the head of the chain which has not yet been made available in the
     * relay chain.
     *
     * When the unincluded segment is short, Aura chains will allow authors to create multiple
     * blocks per slot in order to build a backlog. When it is saturated, this API will limit
     * the amount of blocks that can be created.
     */
    AuraUnincludedSegmentApi: {
        /**
         * Whether it is legal to extend the chain, assuming the given block is the most
         * recently included one as-of the relay parent that will be built against, and
         * the given slot.
         *
         * This should be consistent with the logic the runtime uses when validating blocks to
         * avoid issues.
         *
         * When the unincluded segment is empty, i.e. `included_hash == at`, where at is the block
         * whose state we are querying against, this must always return `true` as long as the slot
         * is more recent than the included block itself.
         */
        can_build_upon: RuntimeDescriptor<[included_hash: FixedSizeBinary<32>, slot: bigint], boolean>;
    };
    /**
     * The `Core` runtime api that every Substrate runtime needs to implement.
     */
    Core: {
        /**
         * Returns the version of the runtime.
         */
        version: RuntimeDescriptor<[], Anonymize<Ic6nglu2db2c36>>;
        /**
         * Execute the given block.
         */
        execute_block: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>], undefined>;
        /**
         * Initialize a block with the given header and return the runtime executive mode.
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<I2v50gu3s1aqk6>>;
    };
    /**
     * The `Metadata` api trait that returns metadata for the runtime.
     */
    Metadata: {
        /**
         * Returns the metadata of a runtime.
         */
        metadata: RuntimeDescriptor<[], Binary>;
        /**
         * Returns the metadata at a given version.
         *
         * If the given `version` isn't supported, this will return `None`.
         * Use [`Self::metadata_versions`] to find out about supported metadata version of the runtime.
         */
        metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns the supported metadata versions.
         *
         * This can be used to call `metadata_at_version`.
         */
        metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
    };
    /**
     * The `BlockBuilder` api trait that provides the required functionality for building a block.
     */
    BlockBuilder: {
        /**
         * Apply the given extrinsic.
         *
         * Returns an inclusion outcome which specifies if this extrinsic is included in
         * this block or not.
         */
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<Idp330e7njpu21>>;
        /**
         * Finish the current block.
         */
        finalize_block: RuntimeDescriptor<[], Anonymize<Ic952bubvq4k7d>>;
        /**
         * Generate inherent extrinsics. The inherent data will vary from chain to chain.
         */
        inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If7uv525tdvv7a>], Anonymize<Itom7fk49o0c9>>;
        /**
         * Check that the inherents are valid. The inherent data will vary from chain to chain.
         */
        check_inherents: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>, data: Anonymize<If7uv525tdvv7a>], Anonymize<I2an1fs2eiebjp>>;
    };
    /**
     * The `TaggedTransactionQueue` api trait for interfering with the transaction queue.
     */
    TaggedTransactionQueue: {
        /**
         * Validate the transaction.
         *
         * This method is invoked by the transaction pool to learn details about given transaction.
         * The implementation should make sure to verify the correctness of the transaction
         * against current state. The given `block_hash` corresponds to the hash of the block
         * that is used as current state.
         *
         * Note that this call may be performed by the pool multiple times and transactions
         * might be verified in any possible order.
         */
        validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: FixedSizeBinary<32>], Anonymize<Iajbob6uln5jct>>;
    };
    /**
     * The offchain worker api.
     */
    OffchainWorkerApi: {
        /**
         * Starts the off-chain task for given block header.
         */
        offchain_worker: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
     * Session keys runtime api.
     */
    SessionKeys: {
        /**
         * Generate a set of session keys with optionally using the given seed.
         * The keys should be stored within the keystore exposed via runtime
         * externalities.
         *
         * The seed needs to be a valid `utf8` string.
         *
         * Returns the concatenated SCALE encoded public keys.
         */
        generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
        /**
         * Decode the given public session keys.
         *
         * Returns the list of public raw public keys + key type.
         */
        decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<Icerf8h8pdu8ss>>;
    };
    /**
     * The API to query account nonce.
     */
    AccountNonceApi: {
        /**
         * Get current account nonce of given `AccountId`.
         */
        account_nonce: RuntimeDescriptor<[account: SS58String], number>;
    };
    /**
    
     */
    TransactionPaymentApi: {
        /**
        
         */
        query_info: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
        
         */
        query_fee_details: RuntimeDescriptor<[uxt: Binary, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
        
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
        
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
    
     */
    TransactionPaymentCallApi: {
        /**
         * Query information of a dispatch class, weight, and fee of a given encoded `Call`.
         */
        query_call_info: RuntimeDescriptor<[call: Anonymize<Idrssolrvf38li>, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Idrssolrvf38li>, len: number], Anonymize<Iei2mvq0mjvt81>>;
        /**
         * Query the output of the current `WeightToFee` given some input.
         */
        query_weight_to_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>], bigint>;
        /**
         * Query the output of the current `LengthToFee` given some input.
         */
        query_length_to_fee: RuntimeDescriptor<[length: number], bigint>;
    };
    /**
     * A trait of XCM payment API.
     *
     * API provides functionality for obtaining:
     *
     * * the weight required to execute an XCM message,
     * * a list of acceptable `AssetId`s for message execution payment,
     * * the cost of the weight in the specified acceptable `AssetId`.
     * * the fees for an XCM message delivery.
     *
     * To determine the execution weight of the calls required for
     * [`xcm::latest::Instruction::Transact`] instruction, `TransactionPaymentCallApi` can be used.
     */
    XcmPaymentApi: {
        /**
         * Returns a list of acceptable payment assets.
         *
         * # Arguments
         *
         * * `xcm_version`: Version.
         */
        query_acceptable_payment_assets: RuntimeDescriptor<[xcm_version: number], Anonymize<I1p1369d52j8jd>>;
        /**
         * Returns a weight needed to execute a XCM.
         *
         * # Arguments
         *
         * * `message`: `VersionedXcm`.
         */
        query_xcm_weight: RuntimeDescriptor<[message: XcmVersionedXcm], Anonymize<Ic0c3req3mlc1l>>;
        /**
         * Converts a weight into a fee for the specified `AssetId`.
         *
         * # Arguments
         *
         * * `weight`: convertible `Weight`.
         * * `asset`: `VersionedAssetId`.
         */
        query_weight_to_asset_fee: RuntimeDescriptor<[weight: Anonymize<I4q39t5hn830vp>, asset: XcmVersionedAssetId], Anonymize<I7ocn4njqde3v5>>;
        /**
         * Get delivery fees for sending a specific `message` to a `destination`.
         * These always come in a specific asset, defined by the chain.
         *
         * # Arguments
         * * `message`: The message that'll be sent, necessary because most delivery fees are based on the
         *   size of the message.
         * * `destination`: The destination to send the message to. Different destinations may use
         *   different senders that charge different fees.
         */
        query_delivery_fees: RuntimeDescriptor<[destination: XcmVersionedLocation, message: XcmVersionedXcm], Anonymize<I5rlt6h8ph553n>>;
    };
    /**
     * API for dry-running extrinsics and XCM programs to get the programs that need to be passed to the fees API.
     *
     * All calls return a vector of tuples (location, xcm) where each "xcm" is executed in "location".
     * If there's local execution, the location will be "Here".
     * This vector can be used to calculate both execution and delivery fees.
     *
     * Calls or XCMs might fail when executed, this doesn't mean the result of these calls will be an `Err`.
     * In those cases, there might still be a valid result, with the execution error inside it.
     * The only reasons why these calls might return an error are listed in the [`Error`] enum.
     */
    DryRunApi: {
        /**
         * Dry run call.
         */
        dry_run_call: RuntimeDescriptor<[origin: Anonymize<I48v5riethqckl>, call: Anonymize<Idrssolrvf38li>], Anonymize<I7qbmi3qlph772>>;
        /**
         * Dry run XCM program
         */
        dry_run_xcm: RuntimeDescriptor<[origin_location: XcmVersionedLocation, xcm: XcmVersionedXcm], Anonymize<I8jorigq0ltvq4>>;
    };
    /**
     * API for useful conversions between XCM `Location` and `AccountId`.
     */
    LocationToAccountApi: {
        /**
         * Converts `Location` to `AccountId`.
         */
        convert_location: RuntimeDescriptor<[location: XcmVersionedLocation], Anonymize<Ieh6nis3hdbtgi>>;
    };
    /**
     * Runtime api to collect information about a collation.
     */
    CollectCollationInfo: {
        /**
         * Collect information about a collation.
         *
         * The given `header` is the header of the built block for that
         * we are collecting the collation info for.
         */
        collect_collation_info: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<Ic1d4u2opv3fst>>;
    };
    /**
     * API to interact with RuntimeGenesisConfig for the runtime
     */
    GenesisBuilder: {
        /**
         * Build `RuntimeGenesisConfig` from a JSON blob not using any defaults and store it in the
         * storage.
         *
         * In the case of a FRAME-based runtime, this function deserializes the full `RuntimeGenesisConfig` from the given JSON blob and
         * puts it into the storage. If the provided JSON blob is incorrect or incomplete or the
         * deserialization fails, an error is returned.
         *
         * Please note that provided JSON blob must contain all `RuntimeGenesisConfig` fields, no
         * defaults will be used.
         */
        build_state: RuntimeDescriptor<[json: Binary], Anonymize<Ie9sr1iqcg3cgm>>;
        /**
         * Returns a JSON blob representation of the built-in `RuntimeGenesisConfig` identified by
         * `id`.
         *
         * If `id` is `None` the function returns JSON blob representation of the default
         * `RuntimeGenesisConfig` struct of the runtime. Implementation must provide default
         * `RuntimeGenesisConfig`.
         *
         * Otherwise function returns a JSON representation of the built-in, named
         * `RuntimeGenesisConfig` preset identified by `id`, or `None` if such preset does not
         * exist. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of
         * (potentially nested) key-value pairs that are intended for customizing the default
         * runtime genesis config. The patch shall be merged (rfc7386) with the JSON representation
         * of the default `RuntimeGenesisConfig` to create a comprehensive genesis config that can
         * be used in `build_state` method.
         */
        get_preset: RuntimeDescriptor<[id: Anonymize<I1mqgk2tmnn9i2>], Anonymize<Iabpgqcjikia83>>;
        /**
         * Returns a list of identifiers for available builtin `RuntimeGenesisConfig` presets.
         *
         * The presets from the list can be queried with [`GenesisBuilder::get_preset`] method. If
         * no named presets are provided by the runtime the list is empty.
         */
        preset_names: RuntimeDescriptor<[], Anonymize<I6lr8sctk0bi4e>>;
    };
};
type IAsset = PlainDescriptor<void>;
export type RococoPplDispatchError = Anonymize<I1ef1l2i5ktcdn>;
type PalletsTypedef = {
    __storage: IStorage;
    __tx: ICalls;
    __event: IEvent;
    __error: IError;
    __const: IConstants;
};
type IDescriptors = {
    descriptors: {
        pallets: PalletsTypedef;
        apis: IRuntimeCalls;
    } & Promise<any>;
    metadataTypes: Promise<Uint8Array>;
    asset: IAsset;
};
declare const _allDescriptors: IDescriptors;
export default _allDescriptors;
export type RococoPplQueries = QueryFromPalletsDef<PalletsTypedef>;
export type RococoPplCalls = TxFromPalletsDef<PalletsTypedef>;
export type RococoPplEvents = EventsFromPalletsDef<PalletsTypedef>;
export type RococoPplErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type RococoPplConstants = ConstFromPalletsDef<PalletsTypedef>;
export type RococoPplCallData = Anonymize<Idrssolrvf38li> & {
    value: {
        type: string;
    };
};
export type RococoPplWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
type PalletKey = `*.${keyof (IStorage & ICalls & IEvent & IError & IConstants & IRuntimeCalls)}`;
type NestedKey<D extends Record<string, Record<string, any>>> = "*" | {
    [P in keyof D & string]: `${P}.*` | {
        [N in keyof D[P] & string]: `${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
type ApiKey<D extends Record<string, Record<string, any>>> = "api.*" | {
    [P in keyof D & string]: `api.${P}.*` | {
        [N in keyof D[P] & string]: `api.${P}.${N}`;
    }[keyof D[P] & string];
}[keyof D & string];
