import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, Ie62kuckmfbjet, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I9bin2jc70qt6q, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I48e2fe747rjco, I9p9lq3rej5bhc, I3ruf36ao08o1o, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, I6ouflveob4eli, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Iasb8k6ash5mjn, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, I60v7bikk54tpu, Ifpj261e8s63m3, Idcr6u6361oad9, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, I5u8olqbbvfnvf, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I6r0pr82pbiftt, I40pqum1mu8qg3, I1r4c2ghbtvjuc, I31us5krqr5m63, I7mf7o26ckr36d, If6a4i9ib1jm0p, Ieghlm0vct4gj8, I6h3vmg2d344j0, Idoojq6ktd7ug, Ideaemvoneh309, I3d9o9d7epp66v, I7lfpqlbl62ea8, I6hk7temg1mga7, I2lbmfajhc5gdu, I2siheq6f2djrd, I2eb501t8s6hsq, Ianmuoljk2sk1u, I162mv98348k9l, Ic6cqd9g0t65v0, I5sv83ib1q5mod, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I6o1er683vod1j, Id6gojh30v9ib2, Ide1bahhh47lj9, Id9uqtigc0il3v, Ic68lsi7chpv5k, Iek0boln8pgnko, I452bkd71b385t, I2mk62irjfqdo1, I9pnrh0ioo3e3p, Ie5l999tf7t2te, Ia82mnkmeo2rhc, I4o78c7pg7u4h3, Icbccs0ug47ilf, I855j4i3kr8ko1, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I3qt1hgg4djhgb, I4fooe9dun9o0t, Ier2cke86dqbr2, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I3vs6qhrit34fa, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, I1rppdtg3gl2e6, I6nt490kobvdj4, Ieusrlv9sc7fdl, Iep27ialq4a7o7, Iasu5jvoqr43mv, Ic5mma107scadr, I5qolde99acmd1, I7ntcg8dtn6d9g, I2ur0oeqg495j8, I8v2su1f60qoae, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I2rg5btjrsqec0, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, I4i3u9uui7ktsd, Iaqet9jc3ihboe, Ic952bubvq4k7d, Iabpgqcjikia83, I20qf36cfkp1uq, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, I74dmh6pbhq27s, Ic1d4u2opv3fst, Ie9sr1iqcg3cgm, Ie0bod29l7788n } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<Ie62kuckmfbjet>, false>;
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
         */
        Locks: StorageDescriptor<[Key: SS58String], Anonymize<I8ds64oj6581v0>, false>;
        /**
         * Named reserves on some account balances.
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
         *See [`Pallet::remark`].
         */
        remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *See [`Pallet::set_heap_pages`].
         */
        set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
        /**
         *See [`Pallet::set_code`].
         */
        set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *See [`Pallet::set_code_without_checks`].
         */
        set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *See [`Pallet::set_storage`].
         */
        set_storage: TxDescriptor<Anonymize<I9pj91mj79qekl>>;
        /**
         *See [`Pallet::kill_storage`].
         */
        kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
        /**
         *See [`Pallet::kill_prefix`].
         */
        kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
        /**
         *See [`Pallet::remark_with_event`].
         */
        remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
         *See [`Pallet::authorize_upgrade`].
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *See [`Pallet::authorize_upgrade_without_checks`].
         */
        authorize_upgrade_without_checks: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
         *See [`Pallet::apply_authorized_upgrade`].
         */
        apply_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    ParachainSystem: {
        /**
         *See [`Pallet::set_validation_data`].
         */
        set_validation_data: TxDescriptor<Anonymize<I60v7bikk54tpu>>;
        /**
         *See [`Pallet::sudo_send_upward_message`].
         */
        sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
        /**
         *See [`Pallet::authorize_upgrade`].
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
        /**
         *See [`Pallet::enact_authorized_upgrade`].
         */
        enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    Timestamp: {
        /**
         *See [`Pallet::set`].
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Balances: {
        /**
         *See [`Pallet::transfer_allow_death`].
         */
        transfer_allow_death: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I9bqtpv2ii35mp>>;
        /**
         *See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I4ktuaksf5i1gk>>;
        /**
         *See [`Pallet::transfer_all`].
         */
        transfer_all: TxDescriptor<Anonymize<I9j7pagd6d4bda>>;
        /**
         *See [`Pallet::force_unreserve`].
         */
        force_unreserve: TxDescriptor<Anonymize<I2h9pmio37r7fb>>;
        /**
         *See [`Pallet::upgrade_accounts`].
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
         *See [`Pallet::force_set_balance`].
         */
        force_set_balance: TxDescriptor<Anonymize<I9iq22t0burs89>>;
        /**
         *See [`Pallet::force_adjust_total_issuance`].
         */
        force_adjust_total_issuance: TxDescriptor<Anonymize<I5u8olqbbvfnvf>>;
    };
    CollatorSelection: {
        /**
         *See [`Pallet::set_invulnerables`].
         */
        set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
        /**
         *See [`Pallet::set_desired_candidates`].
         */
        set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
        /**
         *See [`Pallet::set_candidacy_bond`].
         */
        set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
        /**
         *See [`Pallet::register_as_candidate`].
         */
        register_as_candidate: TxDescriptor<undefined>;
        /**
         *See [`Pallet::leave_intent`].
         */
        leave_intent: TxDescriptor<undefined>;
        /**
         *See [`Pallet::add_invulnerable`].
         */
        add_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *See [`Pallet::remove_invulnerable`].
         */
        remove_invulnerable: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *See [`Pallet::update_bond`].
         */
        update_bond: TxDescriptor<Anonymize<I3sdol54kg5jaq>>;
        /**
         *See [`Pallet::take_candidate_slot`].
         */
        take_candidate_slot: TxDescriptor<Anonymize<I8fougodaj6di6>>;
    };
    Session: {
        /**
         *See [`Pallet::set_keys`].
         */
        set_keys: TxDescriptor<Anonymize<I81vt5eq60l4b6>>;
        /**
         *See [`Pallet::purge_keys`].
         */
        purge_keys: TxDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
         *See [`Pallet::suspend_xcm_execution`].
         */
        suspend_xcm_execution: TxDescriptor<undefined>;
        /**
         *See [`Pallet::resume_xcm_execution`].
         */
        resume_xcm_execution: TxDescriptor<undefined>;
        /**
         *See [`Pallet::update_suspend_threshold`].
         */
        update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *See [`Pallet::update_drop_threshold`].
         */
        update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
         *See [`Pallet::update_resume_threshold`].
         */
        update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
    };
    PolkadotXcm: {
        /**
         *See [`Pallet::send`].
         */
        send: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
        /**
         *See [`Pallet::teleport_assets`].
         */
        teleport_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *See [`Pallet::reserve_transfer_assets`].
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<If2ssl12kcglhg>>;
        /**
         *See [`Pallet::force_xcm_version`].
         */
        force_xcm_version: TxDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
         *See [`Pallet::force_default_xcm_version`].
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
         *See [`Pallet::force_subscribe_version_notify`].
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *See [`Pallet::force_unsubscribe_version_notify`].
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
         *See [`Pallet::limited_reserve_transfer_assets`].
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *See [`Pallet::limited_teleport_assets`].
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *See [`Pallet::force_suspension`].
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
        /**
         *See [`Pallet::transfer_assets`].
         */
        transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
         *See [`Pallet::claim_assets`].
         */
        claim_assets: TxDescriptor<Anonymize<I8mmaab8je28oo>>;
        /**
         *See [`Pallet::transfer_assets_using_type_and_then`].
         */
        transfer_assets_using_type_and_then: TxDescriptor<Anonymize<I6r0pr82pbiftt>>;
    };
    MessageQueue: {
        /**
         *See [`Pallet::reap_page`].
         */
        reap_page: TxDescriptor<Anonymize<I40pqum1mu8qg3>>;
        /**
         *See [`Pallet::execute_overweight`].
         */
        execute_overweight: TxDescriptor<Anonymize<I1r4c2ghbtvjuc>>;
    };
    Utility: {
        /**
         *See [`Pallet::batch`].
         */
        batch: TxDescriptor<Anonymize<I31us5krqr5m63>>;
        /**
         *See [`Pallet::as_derivative`].
         */
        as_derivative: TxDescriptor<Anonymize<I7mf7o26ckr36d>>;
        /**
         *See [`Pallet::batch_all`].
         */
        batch_all: TxDescriptor<Anonymize<I31us5krqr5m63>>;
        /**
         *See [`Pallet::dispatch_as`].
         */
        dispatch_as: TxDescriptor<Anonymize<If6a4i9ib1jm0p>>;
        /**
         *See [`Pallet::force_batch`].
         */
        force_batch: TxDescriptor<Anonymize<I31us5krqr5m63>>;
        /**
         *See [`Pallet::with_weight`].
         */
        with_weight: TxDescriptor<Anonymize<Ieghlm0vct4gj8>>;
    };
    Multisig: {
        /**
         *See [`Pallet::as_multi_threshold_1`].
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I6h3vmg2d344j0>>;
        /**
         *See [`Pallet::as_multi`].
         */
        as_multi: TxDescriptor<Anonymize<Idoojq6ktd7ug>>;
        /**
         *See [`Pallet::approve_as_multi`].
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
         *See [`Pallet::cancel_as_multi`].
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Proxy: {
        /**
         *See [`Pallet::proxy`].
         */
        proxy: TxDescriptor<Anonymize<I7lfpqlbl62ea8>>;
        /**
         *See [`Pallet::add_proxy`].
         */
        add_proxy: TxDescriptor<Anonymize<I6hk7temg1mga7>>;
        /**
         *See [`Pallet::remove_proxy`].
         */
        remove_proxy: TxDescriptor<Anonymize<I6hk7temg1mga7>>;
        /**
         *See [`Pallet::remove_proxies`].
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         *See [`Pallet::create_pure`].
         */
        create_pure: TxDescriptor<Anonymize<I2lbmfajhc5gdu>>;
        /**
         *See [`Pallet::kill_pure`].
         */
        kill_pure: TxDescriptor<Anonymize<I2siheq6f2djrd>>;
        /**
         *See [`Pallet::announce`].
         */
        announce: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *See [`Pallet::remove_announcement`].
         */
        remove_announcement: TxDescriptor<Anonymize<I2eb501t8s6hsq>>;
        /**
         *See [`Pallet::reject_announcement`].
         */
        reject_announcement: TxDescriptor<Anonymize<Ianmuoljk2sk1u>>;
        /**
         *See [`Pallet::proxy_announced`].
         */
        proxy_announced: TxDescriptor<Anonymize<I162mv98348k9l>>;
    };
    Identity: {
        /**
         *See [`Pallet::add_registrar`].
         */
        add_registrar: TxDescriptor<Anonymize<Ic6cqd9g0t65v0>>;
        /**
         *See [`Pallet::set_identity`].
         */
        set_identity: TxDescriptor<Anonymize<I5sv83ib1q5mod>>;
        /**
         *See [`Pallet::set_subs`].
         */
        set_subs: TxDescriptor<Anonymize<Ia9mkdf6l44shb>>;
        /**
         *See [`Pallet::clear_identity`].
         */
        clear_identity: TxDescriptor<undefined>;
        /**
         *See [`Pallet::request_judgement`].
         */
        request_judgement: TxDescriptor<Anonymize<I9l2s4klu0831o>>;
        /**
         *See [`Pallet::cancel_request`].
         */
        cancel_request: TxDescriptor<Anonymize<I2ctrt5nqb8o7c>>;
        /**
         *See [`Pallet::set_fee`].
         */
        set_fee: TxDescriptor<Anonymize<I711qahikocb1c>>;
        /**
         *See [`Pallet::set_account_id`].
         */
        set_account_id: TxDescriptor<Anonymize<I6o1er683vod1j>>;
        /**
         *See [`Pallet::set_fields`].
         */
        set_fields: TxDescriptor<Anonymize<Id6gojh30v9ib2>>;
        /**
         *See [`Pallet::provide_judgement`].
         */
        provide_judgement: TxDescriptor<Anonymize<Ide1bahhh47lj9>>;
        /**
         *See [`Pallet::kill_identity`].
         */
        kill_identity: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *See [`Pallet::add_sub`].
         */
        add_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *See [`Pallet::rename_sub`].
         */
        rename_sub: TxDescriptor<Anonymize<Ic68lsi7chpv5k>>;
        /**
         *See [`Pallet::remove_sub`].
         */
        remove_sub: TxDescriptor<Anonymize<Iek0boln8pgnko>>;
        /**
         *See [`Pallet::quit_sub`].
         */
        quit_sub: TxDescriptor<undefined>;
        /**
         *See [`Pallet::add_username_authority`].
         */
        add_username_authority: TxDescriptor<Anonymize<I452bkd71b385t>>;
        /**
         *See [`Pallet::remove_username_authority`].
         */
        remove_username_authority: TxDescriptor<Anonymize<I2mk62irjfqdo1>>;
        /**
         *See [`Pallet::set_username_for`].
         */
        set_username_for: TxDescriptor<Anonymize<I9pnrh0ioo3e3p>>;
        /**
         *See [`Pallet::accept_username`].
         */
        accept_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *See [`Pallet::remove_expired_approval`].
         */
        remove_expired_approval: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *See [`Pallet::set_primary_username`].
         */
        set_primary_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
        /**
         *See [`Pallet::remove_dangling_username`].
         */
        remove_dangling_username: TxDescriptor<Anonymize<Ie5l999tf7t2te>>;
    };
    IdentityMigrator: {
        /**
         *See [`Pallet::reap_identity`].
         */
        reap_identity: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *See [`Pallet::poke_deposit`].
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<I4o78c7pg7u4h3>>;
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
        ProcessingFailed: PlainDescriptor<Anonymize<I3vs6qhrit34fa>>;
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
        BatchInterrupted: PlainDescriptor<Anonymize<I1rppdtg3gl2e6>>;
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
        ItemFailed: PlainDescriptor<Anonymize<I6nt490kobvdj4>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ieusrlv9sc7fdl>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<Ic5mma107scadr>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ieusrlv9sc7fdl>>;
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
         *Invalid non-concrete asset.
         */
        InvalidAssetNotConcrete: PlainDescriptor<undefined>;
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
         * Get the chain's current version.
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
         */
        MaxLocks: PlainDescriptor<number>;
        /**
         * The maximum number of named reserves that can exist on an account.
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
    XcmpQueue: {
        /**
         * The maximum number of inbound XCMP channels that can be suspended simultaneously.
         *
         * Any further channel suspensions will fail and messages may get dropped without further
         * notice. Choosing a high value (1000) is okay; the trade-off that is described in
         * [`InboundXcmpSuspended`] still applies at that scale.
         */
        MaxInboundSuspended: PlainDescriptor<number>;
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
         * servicing enqueued items.
         *
         * This may be legitimately `None` in the case that you will call
         * `ServiceQueues::service_queues` manually.
         */
        ServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
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
         * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
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
         * Initialize a block with the given header.
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I20qf36cfkp1uq>>;
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
        query_call_info: RuntimeDescriptor<[call: Anonymize<I74dmh6pbhq27s>, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<I74dmh6pbhq27s>, len: number], Anonymize<Iei2mvq0mjvt81>>;
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
     * API to interact with GenesisConfig for the runtime
     */
    GenesisBuilder: {
        /**
         * Creates the default `GenesisConfig` and returns it as a JSON blob.
         *
         * This function instantiates the default `GenesisConfig` struct for the runtime and serializes it into a JSON
         * blob. It returns a `Vec<u8>` containing the JSON representation of the default `GenesisConfig`.
         */
        create_default_config: RuntimeDescriptor<[], Binary>;
        /**
         * Build `GenesisConfig` from a JSON blob not using any defaults and store it in the storage.
         *
         * This function deserializes the full `GenesisConfig` from the given JSON blob and puts it into the storage.
         * If the provided JSON blob is incorrect or incomplete or the deserialization fails, an error is returned.
         * It is recommended to log any errors encountered during the process.
         *
         * Please note that provided json blob must contain all `GenesisConfig` fields, no defaults will be used.
         */
        build_config: RuntimeDescriptor<[json: Binary], Anonymize<Ie9sr1iqcg3cgm>>;
    };
};
type IAsset = PlainDescriptor<void>;
export type PasPplDispatchError = Anonymize<Ie0bod29l7788n>;
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
export type PasPplQueries = QueryFromPalletsDef<PalletsTypedef>;
export type PasPplCalls = TxFromPalletsDef<PalletsTypedef>;
export type PasPplEvents = EventsFromPalletsDef<PalletsTypedef>;
export type PasPplErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type PasPplConstants = ConstFromPalletsDef<PalletsTypedef>;
export type PasPplCallData = Anonymize<I74dmh6pbhq27s> & {
    value: {
        type: string;
    };
};
export type PasPplWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
