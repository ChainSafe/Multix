import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, I8su45alklu45p, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I1fne82af6d4kj, I9bin2jc70qt6q, TransactionPaymentReleases, Ifble4juuml5ig, Version, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Iegrepoo0c1jc5, I7f4alf2hnuu8s, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I32or1mos65f9o, I9p9lq3rej5bhc, I3qklfjubrljqh, Iag3f1hum3p4c8, I7svnfko10tq2e, I4s6jkha20aoh0, I2brm5b9jij1st, I78s05f59eoi8b, Ianufjuplcj6u4, Id32h28hjj1tch, I6ouflveob4eli, I2mv9dvsaj3kcr, I9jd27rnpm8ttv, I7781vnk0rm9eq, Ie2iqtdb0stqo1, I5irutptk105do, Ic9nev69d8grv1, I18m6a0sc4k7s9, Ic9iokm15iigt6, I35m96p3u4vl0p, Iapmji0h53pmkn, Idrr42svup341f, I4ugih6gb4fmug, Idac0t49lnd4ls, I72ndo6phms8ik, I4c0s5cioidn76, I7rv8d2nr55kkq, I6lh06el3bdfqq, I1b2ckfeib3nig, Id0as9l3s817qs, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Iasb8k6ash5mjn, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, I60v7bikk54tpu, Ifpj261e8s63m3, Idcr6u6361oad9, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, I5u8olqbbvfnvf, I5utcetro501ir, Id9uqtigc0il3v, Iaa2o6cgjdpdn5, Iam6hrl7ptd85l, Ict9ivhr2c5hv0, I8t4vv03357lk9, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I6r0pr82pbiftt, Idlampfle3vh6q, I40pqum1mu8qg3, I1r4c2ghbtvjuc, I5mod9tavlgqe8, I6sleg5o5amna2, Id0n5pnq0r30r6, I6cp97qkicedrr, I8482qvg0pm1q5, I72nhglras2gaj, Ideaemvoneh309, I3d9o9d7epp66v, Ifp701ae7acqkk, Iovrcu9bfelfq, Iefr8jgtgfk8um, I3j05hul54uj7q, I2eb501t8s6hsq, Ianmuoljk2sk1u, I5s1186v7tfuqn, Ic357tcepuvo5c, I2rnoam876ruhj, Ic5b47dj4coa3r, Ib3qnc19gu633c, Ifira6u9hi7cu1, I72tqocvdoqfff, I2i27f3sfmvc05, I1nlrtd1epki2d, I3abtumcmempjs, Id81m8flopt8ha, I8hff7chabggkd, I49i39mtj1ivbs, Ifkr2kcak2vto1, I1ju6r8q0cs9jt, I4kpeq6j7cd5bu, I5na1ka76k6811, I59mhdb9omdqfa, I9vl5kpk0fpakt, I717jt61hu19b4, If66ivi02f7256, I223jtcatlfkrc, I223jg78mng8hq, I4iiuiftkpq3fd, Ibra6533h92c0a, Ibgvkh96s68a66, If9vko7pv0231m, Iafkqus0ohh6l6, I6cu7obfo0rr0o, I736lv5q9m5bot, I1ap9tlenhr44l, Ib92t90p616grb, Ieipuujd6879do, Ie56eq9sg1rsoc, I5tvvgui05tn6e, Ibal0joadvdc2h, Iceq9fmmp9aeqv, I9viqhmdtuof5e, Ibqooroq6rr5kr, I6h88h8vba22v8, Ia9cd4jqb5eecb, I19jiel1ftbcce, I43aobns89nbkh, Iamd7rovec1hfb, I77ie723ncd4co, Ieebloeahma3ke, I4mbtpf4pu3rec, I1ahf3pvgsgbu, I9uapdn16emsti, Ie5i0q2glmr0md, I97qcg6i3l8gee, Ib5udrahak005b, I1jj31tn29ie3c, I5llu6o6a0go5i, Ic8b8561e6t9ie, I93r2effh7od84, I6afd7fllr8otc, Icrkms46uh8tpb, I78u60nqh0etah, I1lso3vlgherue, I26c8p47106toa, Iq82b3qvf20ne, Ic3j8ku6mbsms4, I3nvoqsi8f05ph, I3eoft5md071do, I923eug653ra0o, I7p44cr9g492tc, Ibn8gm2jugarek, Iekg0q69obfi0f, I8dh2oimnihksg, Ib8mfkapk4u9hs, Ikm68gg7akl51, If3csb5ben9n1v, If90dk6l9lmtfv, Ifoahm8m43v9q2, I1rrgcjpoiot5q, I2hc61n7o8dso4, I5787kv2d05f94, Ia8g1imc1kclf4, Id26ouo5lt2551, Iap1up3prsbtvg, I8m5mvhifj6pm, I8ucc4915s9qvj, I1pjcv2ha0997v, Ifnm6nai2i47ar, I9gf2bs80kgbnk, I5urb3tva4ave5, I8eoqk45hnet27, Iddvk596rbl31l, I3iap9ri572kjf, I48iqqqmt2pr38, I90ob4vr51rue4, Ia82mnkmeo2rhc, I8kbvn5rbfrikm, Icbccs0ug47ilf, I855j4i3kr8ko1, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I3qt1hgg4djhgb, I4fooe9dun9o0t, Ier2cke86dqbr2, Iqjk6s1a2lmkt, Icjchvrijclvlv, Ievr89968437gm, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I1rvj4ubaplho0, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, I49i6rmkp2gvb6, Iaagj3es2lkuco, Ibajidue483fc0, Iep27ialq4a7o7, Iasu5jvoqr43mv, I9h4toth1em9je, I5qolde99acmd1, Ie7cuj84ohvg56, I2ur0oeqg495j8, I8ioopvokvl3ud, I88ff3u4dpivk, I33cp947glv1ks, Ic9om1gmmqu7rq, I5hfov2b68ppb6, Ibthhb2m9vneds, Iaitn5bqfacj7k, If4ebvclj2ugvi, Ia5le7udkgbaq9, Ieduc1e6frq8rb, I9h6gbtabovtm4, Ifnsa0dkkpf465, I65dtqr2egjbc3, Ibqj3vg5s5lk0c, I6l73u513p8rna, Iefqmt2htu1dlu, If8bgtgqrchjtu, Idusmq77988cmt, I9gqanbbbe917p, Id1m1230297f7a, Ifvb1p5munhhv4, I46h83ilqeed3g, Icahse3uoi76n7, I75sj3uv7gnemk, I5fjkvcb5vr6nb, I2gr1toekv86b9, I2v2ikqt2trp52, If3057hi1g5qlo, Iaii5qf41d5n3d, Ico8bnjc6taa27, I78i1bvlonei69, I9i1f9mrso1hmf, I9ksla2si91s56, Id9j7b85otvjru, Iaihk9pek2ajl9, Id9av23h47ufb2, Ib4kpnijas4jqp, I2vnu5k0u1i65h, I36h211fbvstks, I2k9iu40qhp841, I3dufa2gr145hf, Ie66s9cr50m7sr, I3msvtljqnu799, I467a79vcdbrec, Ia8imt144v3n25, I35uvf5ij009e8, I1mmtcsmkng8nj, I30qmuqbs4i8i4, Iarmm62t3lm37e, I9nm7qticlhmgl, Iev4iv86ng02ck, I5s8p7gejoudvh, If4jtj68r1gabq, I8s66oebjsgqga, I42gee3b9iotl3, Ib67harsthtcvr, Ic7ok3lq0728f7, I9eo7u28un09g0, I99d21a0mjv4oo, I6l4cdn6bhfq84, Iduk3pajm13p5c, I9cgel74dg00ig, Ibkbs6pj6cn1hv, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iabpgqcjikia83, I56sv83honje13, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I35p85j063s0il, I5vv5n03oo8gas, I6spmpef2c7svf, Iei2mvq0mjvt81, Id47ece6fiiom0, I1p1369d52j8jd, XcmVersionedXcm, Ic0c3req3mlc1l, XcmVersionedAssetId, I7ocn4njqde3v5, XcmVersionedLocation, I5rlt6h8ph553n, I48v5riethqckl, If9gsu4ujg5rjd, I1d8rh8ql0shan, Ieh6nis3hdbtgi, I93k1anhb5gs2q, Ic1d4u2opv3fst, Ie9sr1iqcg3cgm, I1mqgk2tmnn9i2, I6lr8sctk0bi4e, I768s0j7i6e52 } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<I8su45alklu45p>, false>;
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
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<I1fne82af6d4kj>, false>;
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
    Vesting: {
        /**
         * Information regarding the vesting of a given account.
         */
        Vesting: StorageDescriptor<[Key: SS58String], Anonymize<Ifble4juuml5ig>, true>;
        /**
         * Storage version of the pallet.
         *
         * New networks start with latest version, as determined by the genesis build.
         */
        StorageVersion: StorageDescriptor<[], Version, false>;
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
    ToPolkadotXcmRouter: {
        /**
         * Bridge that we are using.
         *
         * **bridges-v1** assumptions: all outbound messages through this router are using single lane
         * and to single remote consensus. If there is some other remote consensus that uses the same
         * bridge hub, the separate pallet instance shall be used, In `v2` we'll have all required
         * primitives (lane-id aka bridge-id, derived from XCM locations) to support multiple  bridges
         * by the same pallet instance.
         */
        Bridge: StorageDescriptor<[], Anonymize<I7f4alf2hnuu8s>, false>;
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
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I32or1mos65f9o>, false>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false>;
    };
    Assets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: number], Anonymize<I3qklfjubrljqh>, true>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Iag3f1hum3p4c8>, true>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I2brm5b9jij1st>, Anonymize<I4s6jkha20aoh0>, true>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: number], Anonymize<I78s05f59eoi8b>, false>;
        /**
         * The asset ID enforced for the next asset creation, if any present. Otherwise, this storage
         * item has no effect.
         *
         * This can be useful for setting up constraints for IDs of the new assets. For example, by
         * providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an
         * auto-increment model can be applied to all new asset IDs.
         *
         * The initial next asset ID can be set using the [`GenesisConfig`] or the
         * [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration.
         */
        NextAssetId: StorageDescriptor<[], number, true>;
    };
    Uniques: {
        /**
         * Details of a collection.
         */
        Class: StorageDescriptor<[Key: number], Anonymize<Ianufjuplcj6u4>, true>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], number, true>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Id32h28hjj1tch>, undefined, true>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        ClassAccount: StorageDescriptor<Anonymize<I6ouflveob4eli>, undefined, true>;
        /**
         * The items in existence and their ownership details.
         */
        Asset: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I2mv9dvsaj3kcr>, true>;
        /**
         * Metadata of a collection.
         */
        ClassMetadataOf: StorageDescriptor<[Key: number], Anonymize<I7781vnk0rm9eq>, true>;
        /**
         * Metadata of an item.
         */
        InstanceMetadataOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I7781vnk0rm9eq>, true>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I5irutptk105do>, Anonymize<Ie2iqtdb0stqo1>, true>;
        /**
         * Price of an asset instance.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9nev69d8grv1>, true>;
        /**
         * Keeps track of the number of items a collection might have.
         */
        CollectionMaxSupply: StorageDescriptor<[Key: number], number, true>;
    };
    Nfts: {
        /**
         * Details of a collection.
         */
        Collection: StorageDescriptor<[Key: number], Anonymize<I18m6a0sc4k7s9>, true>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], number, true>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Id32h28hjj1tch>, undefined, true>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        CollectionAccount: StorageDescriptor<Anonymize<I6ouflveob4eli>, undefined, true>;
        /**
         * The items in existence and their ownership details.
         * Stores collection roles as per account.
         */
        CollectionRoleOf: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>;
        /**
         * The items in existence and their ownership details.
         */
        Item: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9iokm15iigt6>, true>;
        /**
         * Metadata of a collection.
         */
        CollectionMetadataOf: StorageDescriptor<[Key: number], Anonymize<I35m96p3u4vl0p>, true>;
        /**
         * Metadata of an item.
         */
        ItemMetadataOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Iapmji0h53pmkn>, true>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I4ugih6gb4fmug>, Anonymize<Idrr42svup341f>, true>;
        /**
         * A price of an item.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic9nev69d8grv1>, true>;
        /**
         * Item attribute approvals.
         */
        ItemAttributesApprovalsOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * Stores the `CollectionId` that is going to be used for the next collection.
         * This gets incremented whenever a new collection is created.
         */
        NextCollectionId: StorageDescriptor<[], number, true>;
        /**
         * Handles all the pending swaps.
         */
        PendingSwapOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Idac0t49lnd4ls>, true>;
        /**
         * Config of a collection.
         */
        CollectionConfigOf: StorageDescriptor<[Key: number], Anonymize<I72ndo6phms8ik>, true>;
        /**
         * Config of an item.
         */
        ItemConfigOf: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, bigint, true>;
    };
    ForeignAssets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], Anonymize<I3qklfjubrljqh>, true>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<I7rv8d2nr55kkq>, Anonymize<Iag3f1hum3p4c8>, true>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I6lh06el3bdfqq>, Anonymize<I4s6jkha20aoh0>, true>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], Anonymize<I78s05f59eoi8b>, false>;
        /**
         * The asset ID enforced for the next asset creation, if any present. Otherwise, this storage
         * item has no effect.
         *
         * This can be useful for setting up constraints for IDs of the new assets. For example, by
         * providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an
         * auto-increment model can be applied to all new asset IDs.
         *
         * The initial next asset ID can be set using the [`GenesisConfig`] or the
         * [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration.
         */
        NextAssetId: StorageDescriptor<[], Anonymize<I4c0s5cioidn76>, true>;
    };
    NftFractionalization: {
        /**
         * Keeps track of the corresponding NFT ID, asset ID and amount minted.
         */
        NftToAsset: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], Anonymize<I1b2ckfeib3nig>, true>;
    };
    PoolAssets: {
        /**
         * Details of an asset.
         */
        Asset: StorageDescriptor<[Key: number], Anonymize<I3qklfjubrljqh>, true>;
        /**
         * The holdings of a specific account for a specific asset.
         */
        Account: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Iag3f1hum3p4c8>, true>;
        /**
         * Approved balance transfers. First balance is the amount approved for transfer. Second
         * is the amount of `T::Currency` reserved for storing this.
         * First key is the asset ID, second key is the owner and third key is the delegate.
         */
        Approvals: StorageDescriptor<Anonymize<I2brm5b9jij1st>, Anonymize<I4s6jkha20aoh0>, true>;
        /**
         * Metadata of an asset.
         */
        Metadata: StorageDescriptor<[Key: number], Anonymize<I78s05f59eoi8b>, false>;
        /**
         * The asset ID enforced for the next asset creation, if any present. Otherwise, this storage
         * item has no effect.
         *
         * This can be useful for setting up constraints for IDs of the new assets. For example, by
         * providing an initial [`NextAssetId`] and using the [`crate::AutoIncAssetId`] callback, an
         * auto-increment model can be applied to all new asset IDs.
         *
         * The initial next asset ID can be set using the [`GenesisConfig`] or the
         * [SetNextAssetId](`migration::next_asset_id::SetNextAssetId`) migration.
         */
        NextAssetId: StorageDescriptor<[], number, true>;
    };
    AssetConversion: {
        /**
         * Map from `PoolAssetId` to `PoolInfo`. This establishes whether a pool has been officially
         * created rather than people sending tokens directly to a pool's public account.
         */
        Pools: StorageDescriptor<[Key: Anonymize<Id0as9l3s817qs>], number, true>;
        /**
         * Stores the `PoolAssetId` that is going to be used for the next lp token.
         * This gets incremented whenever a new lp pool is created.
         */
        NextPoolAssetId: StorageDescriptor<[], number, true>;
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
        /**
         *Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
         *later.
         *
         *The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
         *version and name should be verified on upgrade. Since the authorization only has a hash,
         *it cannot actually perform the verification.
         *
         *This call requires Root origin.
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
        /**
         *Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
         *
         *If the authorization required a version check, this call will ensure the spec name
         *remains unchanged and that the spec version has increased.
         *
         *Note that this function will not apply the new `code`, but only attempt to schedule the
         *upgrade with the Relay Chain.
         *
         *All origins are allowed.
         */
        enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
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
    Vesting: {
        /**
         *Unlock any vested funds of the sender account.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have funds still
         *locked under this pallet.
         *
         *Emits either `VestingCompleted` or `VestingUpdated`.
         *
         *## Complexity
         *- `O(1)`.
         */
        vest: TxDescriptor<undefined>;
        /**
         *Unlock any vested funds of a `target` account.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `target`: The account whose vested funds should be unlocked. Must have funds still
         *locked under this pallet.
         *
         *Emits either `VestingCompleted` or `VestingUpdated`.
         *
         *## Complexity
         *- `O(1)`.
         */
        vest_other: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *Create a vested transfer.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `target`: The account receiving the vested funds.
         *- `schedule`: The vesting schedule attached to the transfer.
         *
         *Emits `VestingCreated`.
         *
         *NOTE: This will unlock all schedules through the current block.
         *
         *## Complexity
         *- `O(1)`.
         */
        vested_transfer: TxDescriptor<Anonymize<Iaa2o6cgjdpdn5>>;
        /**
         *Force a vested transfer.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *- `source`: The account whose funds should be transferred.
         *- `target`: The account that should be transferred the vested funds.
         *- `schedule`: The vesting schedule attached to the transfer.
         *
         *Emits `VestingCreated`.
         *
         *NOTE: This will unlock all schedules through the current block.
         *
         *## Complexity
         *- `O(1)`.
         */
        force_vested_transfer: TxDescriptor<Anonymize<Iam6hrl7ptd85l>>;
        /**
         *Merge two vesting schedules together, creating a new vesting schedule that unlocks over
         *the highest possible start and end blocks. If both schedules have already started the
         *current block will be used as the schedule start; with the caveat that if one schedule
         *is finished by the current block, the other will be treated as the new merged schedule,
         *unmodified.
         *
         *NOTE: If `schedule1_index == schedule2_index` this is a no-op.
         *NOTE: This will unlock all schedules through the current block prior to merging.
         *NOTE: If both schedules have ended by the current block, no new schedule will be created
         *and both will be removed.
         *
         *Merged schedule attributes:
         *- `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
         *  current_block)`.
         *- `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
         *- `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `schedule1_index`: index of the first schedule to merge.
         *- `schedule2_index`: index of the second schedule to merge.
         */
        merge_schedules: TxDescriptor<Anonymize<Ict9ivhr2c5hv0>>;
        /**
         *Force remove a vesting schedule
         *
         *The dispatch origin for this call must be _Root_.
         *
         *- `target`: An account that has a vesting schedule
         *- `schedule_index`: The vesting schedule index that should be removed
         */
        force_remove_vesting_schedule: TxDescriptor<Anonymize<I8t4vv03357lk9>>;
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
    ToPolkadotXcmRouter: {
        /**
         *Notification about congested bridge queue.
         */
        report_bridge_status: TxDescriptor<Anonymize<Idlampfle3vh6q>>;
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
        batch: TxDescriptor<Anonymize<I5mod9tavlgqe8>>;
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
        as_derivative: TxDescriptor<Anonymize<I6sleg5o5amna2>>;
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
        batch_all: TxDescriptor<Anonymize<I5mod9tavlgqe8>>;
        /**
         *Dispatches a function call with a provided origin.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *## Complexity
         *- O(1).
         */
        dispatch_as: TxDescriptor<Anonymize<Id0n5pnq0r30r6>>;
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
        force_batch: TxDescriptor<Anonymize<I5mod9tavlgqe8>>;
        /**
         *Dispatch a function call with a specified weight.
         *
         *This function does not check the weight of the call, and instead allows the
         *Root origin to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Root_.
         */
        with_weight: TxDescriptor<Anonymize<I6cp97qkicedrr>>;
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
        as_multi_threshold_1: TxDescriptor<Anonymize<I8482qvg0pm1q5>>;
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
        as_multi: TxDescriptor<Anonymize<I72nhglras2gaj>>;
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
        proxy: TxDescriptor<Anonymize<Ifp701ae7acqkk>>;
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
        add_proxy: TxDescriptor<Anonymize<Iovrcu9bfelfq>>;
        /**
         *Unregister a proxy account for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to remove as a proxy.
         *- `proxy_type`: The permissions currently enabled for the removed proxy account.
         */
        remove_proxy: TxDescriptor<Anonymize<Iovrcu9bfelfq>>;
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
        create_pure: TxDescriptor<Anonymize<Iefr8jgtgfk8um>>;
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
        kill_pure: TxDescriptor<Anonymize<I3j05hul54uj7q>>;
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
        proxy_announced: TxDescriptor<Anonymize<I5s1186v7tfuqn>>;
    };
    Assets: {
        /**
         *Issue a new class of fungible assets from a public origin.
         *
         *This new asset class has no assets initially and its owner is the origin.
         *
         *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         *
         *Funds of sender are reserved by `AssetDeposit`.
         *
         *Parameters:
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `admin`: The admin of this class of assets. The admin is the initial address of each
         *member of the asset class's admin team.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<Ic357tcepuvo5c>>;
        /**
         *Issue a new class of fungible assets from a privileged origin.
         *
         *This new asset class has no assets initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `owner`: The owner of this class of assets. The owner has full superuser permissions
         *over this asset, but may later change and configure the permissions using
         *`transfer_ownership` and `set_team`.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<I2rnoam876ruhj>>;
        /**
         *Start the process of destroying a fungible asset class.
         *
         *`start_destroy` is the first in a series of extrinsics that should be called, to allow
         *destruction of an asset class.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *The asset class must be frozen before calling `start_destroy`.
         */
        start_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all accounts associated with a given asset.
         *
         *`destroy_accounts` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedAccounts` event.
         */
        destroy_accounts: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
         *
         *`destroy_approvals` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedApprovals` event.
         */
        destroy_approvals: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Complete destroying asset and unreserve currency.
         *
         *`finish_destroy` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
         *hand.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each successful call emits the `Event::Destroyed` event.
         */
        finish_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Mint assets of a particular class.
         *
         *The origin must be Signed and the sender must be the Issuer of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount minted.
         *- `beneficiary`: The account to be credited with the minted assets.
         *- `amount`: The amount of the asset to be minted.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         */
        mint: TxDescriptor<Anonymize<Ib3qnc19gu633c>>;
        /**
         *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         *
         *Origin must be Signed and the sender should be the Manager of the asset `id`.
         *
         *Bails with `NoAccount` if the `who` is already dead.
         *
         *- `id`: The identifier of the asset to have some amount burned.
         *- `who`: The account to be debited from.
         *- `amount`: The maximum amount by which `who`'s balance should be reduced.
         *
         *Emits `Burned` with the actual amount burned. If this takes the balance to below the
         *minimum for the asset, then the amount burned is increased to take it to zero.
         *
         *Weight: `O(1)`
         *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         */
        burn: TxDescriptor<Anonymize<Ifira6u9hi7cu1>>;
        /**
         *Move some assets from the sender account to another.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from the sender account to another, keeping the sender account alive.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from one account to another.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `source`: The account to be debited.
         *- `dest`: The account to be credited.
         *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
         *`dest`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the `source` balance above zero but
         *below the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         *`dest`.
         */
        force_transfer: TxDescriptor<Anonymize<I2i27f3sfmvc05>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
         *must already exist as an entry in `Account`s of the asset. If you want to freeze an
         *account that does not have an entry, use `touch_other` first.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Allow unprivileged transfers to and from an account again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be unfrozen.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers for the asset class.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Allow unprivileged transfers for the asset again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be thawed.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Change the Owner of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I3abtumcmempjs>>;
        /**
         *Change the Issuer, Admin and Freezer of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<Id81m8flopt8ha>>;
        /**
         *Set the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Funds of sender are reserved according to the formula:
         *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         *account any already reserved funds.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<I8hff7chabggkd>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Any deposit is freed for the asset owner.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Force the metadata for an asset to some value.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is left alone.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         */
        force_set_metadata: TxDescriptor<Anonymize<I49i39mtj1ivbs>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is returned.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        force_clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Alter the attributes of a given asset.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         *value to account for the state bloat associated with its balance storage. If set to
         *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
         *an ED in the Balances pallet or whatever else is used to control user-account state
         *growth).
         *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         *instructions.
         *
         *Emits `AssetStatusChanged` with the identity of the asset.
         *
         *Weight: `O(1)`
         */
        force_asset_status: TxDescriptor<Anonymize<Ifkr2kcak2vto1>>;
        /**
         *Approve an amount of asset for transfer by a delegated third-party account.
         *
         *Origin must be Signed.
         *
         *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         *for the purpose of holding the approval. If some non-zero amount of assets is already
         *approved from signing account to `delegate`, then it is topped up or unreserved to
         *meet the right value.
         *
         *NOTE: The signing account does not need to own `amount` of assets at the point of
         *making this call.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account to delegate permission to transfer asset.
         *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
         *already an approval in place, then this acts additively.
         *
         *Emits `ApprovedTransfer` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<I1ju6r8q0cs9jt>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be Signed and there must be an approval in place between signer and
         *`delegate`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<I4kpeq6j7cd5bu>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         *account of the asset `id`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        force_cancel_approval: TxDescriptor<Anonymize<I5na1ka76k6811>>;
        /**
         *Transfer some asset balance from a previously delegated account to some third-party
         *account.
         *
         *Origin must be Signed and there must be an approval in place by the `owner` to the
         *signer.
         *
         *If the entire amount approved for transfer is transferred, then any deposit previously
         *reserved by `approve_transfer` is unreserved.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The account which previously approved for a transfer of at least `amount` and
         *from which the asset balance will be withdrawn.
         *- `destination`: The account to which the asset balance of `amount` will be transferred.
         *- `amount`: The amount of assets to transfer.
         *
         *Emits `TransferredApproved` on success.
         *
         *Weight: `O(1)`
         */
        transfer_approved: TxDescriptor<Anonymize<I59mhdb9omdqfa>>;
        /**
         *Create an asset account for non-provider assets.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *  to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
         *account.
         *
         *The origin must be Signed.
         *
         *- `id`: The identifier of the asset for which the caller would like the deposit
         *  refunded.
         *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund: TxDescriptor<Anonymize<I9vl5kpk0fpakt>>;
        /**
         *Sets the minimum balance of an asset.
         *
         *Only works if there aren't any accounts that are holding the asset or if
         *the new value of `min_balance` is less than the old one.
         *
         *Origin must be Signed and the sender has to be the Owner of the
         *asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `min_balance`: The new value of `min_balance`.
         *
         *Emits `AssetMinBalanceChanged` event when successful.
         */
        set_min_balance: TxDescriptor<Anonymize<I717jt61hu19b4>>;
        /**
         *Create an asset account for `who`.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
         *  must have sufficient funds for a deposit to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *- `who`: The account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
         *
         *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
         *order to burn a non-zero balance of the asset, the caller must be the account and should
         *use `refund`.
         *
         *- `id`: The identifier of the asset for the account holding a deposit.
         *- `who`: The account to refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the account's asset.
         *- `who`: The account to be unblocked.
         *
         *Emits `Blocked`.
         *
         *Weight: `O(1)`
         */
        block: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
    };
    Uniques: {
        /**
         *Issue a new collection of non-fungible items from a public origin.
         *
         *This new collection has no items initially and its owner is the origin.
         *
         *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         *
         *`ItemDeposit` funds of sender are reserved.
         *
         *Parameters:
         *- `collection`: The identifier of the new collection. This must not be currently in use.
         *- `admin`: The admin of this collection. The admin is the initial address of each
         *member of the collection's admin team.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<If66ivi02f7256>>;
        /**
         *Issue a new collection of non-fungible items from a privileged origin.
         *
         *This new collection has no items initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `collection`: The identifier of the new item. This must not be currently in use.
         *- `owner`: The owner of this collection of items. The owner has full superuser
         *  permissions
         *over this item, but may later change and configure the permissions using
         *`transfer_ownership` and `set_team`.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<I223jtcatlfkrc>>;
        /**
         *Destroy a collection of fungible items.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
         *owner of the `collection`.
         *
         *- `collection`: The identifier of the collection to be destroyed.
         *- `witness`: Information on the items minted in the collection. This must be
         *correct.
         *
         *Emits `Destroyed` event when successful.
         *
         *Weight: `O(n + m)` where:
         *- `n = witness.items`
         *- `m = witness.item_metadatas`
         *- `a = witness.attributes`
         */
        destroy: TxDescriptor<Anonymize<I223jg78mng8hq>>;
        /**
         *Mint an item of a particular collection.
         *
         *The origin must be Signed and the sender must be the Issuer of the `collection`.
         *
         *- `collection`: The collection of the item to be minted.
         *- `item`: The item value of the item to be minted.
         *- `beneficiary`: The initial owner of the minted item.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         */
        mint: TxDescriptor<Anonymize<I4iiuiftkpq3fd>>;
        /**
         *Destroy a single item.
         *
         *Origin must be Signed and the signing account must be either:
         *- the Admin of the `collection`;
         *- the Owner of the `item`;
         *
         *- `collection`: The collection of the item to be burned.
         *- `item`: The item of the item to be burned.
         *- `check_owner`: If `Some` then the operation will fail with `WrongOwner` unless the
         *  item is owned by this value.
         *
         *Emits `Burned` with the actual amount burned.
         *
         *Weight: `O(1)`
         *Modes: `check_owner.is_some()`.
         */
        burn: TxDescriptor<Anonymize<Ibra6533h92c0a>>;
        /**
         *Move an item from the sender account to another.
         *
         *This resets the approved account of the item.
         *
         *Origin must be Signed and the signing account must be either:
         *- the Admin of the `collection`;
         *- the Owner of the `item`;
         *- the approved delegate for the `item` (in this case, the approval is reset).
         *
         *Arguments:
         *- `collection`: The collection of the item to be transferred.
         *- `item`: The item of the item to be transferred.
         *- `dest`: The account to receive ownership of the item.
         *
         *Emits `Transferred`.
         *
         *Weight: `O(1)`
         */
        transfer: TxDescriptor<Anonymize<Ibgvkh96s68a66>>;
        /**
         *Reevaluate the deposits on some items.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection to be frozen.
         *- `items`: The items of the collection whose deposits will be reevaluated.
         *
         *NOTE: This exists as a best-effort function. Any items which are unknown or
         *in the case that the owner account does not have reservable funds to pay for a
         *deposit increase are ignored. Generally the owner isn't going to call this on items
         *whose existing deposit is less than the refreshed deposit as it would only cost them,
         *so it's of little consequence.
         *
         *It will still return an error in the case that the collection is unknown of the signer
         *is not permitted to call it.
         *
         *Weight: `O(items.len())`
         */
        redeposit: TxDescriptor<Anonymize<If9vko7pv0231m>>;
        /**
         *Disallow further unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be frozen.
         *- `item`: The item of the item to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Re-allow unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be thawed.
         *- `item`: The item of the item to be thawed.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Disallow further unprivileged transfers for a whole collection.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection to be frozen.
         *
         *Emits `CollectionFrozen`.
         *
         *Weight: `O(1)`
         */
        freeze_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Re-allow unprivileged transfers for a whole collection.
         *
         *Origin must be Signed and the sender should be the Admin of the `collection`.
         *
         *- `collection`: The collection to be thawed.
         *
         *Emits `CollectionThawed`.
         *
         *Weight: `O(1)`
         */
        thaw_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Change the Owner of a collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection whose owner should be changed.
         *- `owner`: The new Owner of this collection. They must have called
         *  `set_accept_ownership` with `collection` in order for this operation to succeed.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I736lv5q9m5bot>>;
        /**
         *Change the Issuer, Admin and Freezer of a collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection whose team should be changed.
         *- `issuer`: The new Issuer of this collection.
         *- `admin`: The new Admin of this collection.
         *- `freezer`: The new Freezer of this collection.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<I1ap9tlenhr44l>>;
        /**
         *Approve an item to be transferred by a delegated third-party account.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be
         *either the owner of the `item` or the admin of the collection.
         *
         *- `collection`: The collection of the item to be approved for delegated transfer.
         *- `item`: The item of the item to be approved for delegated transfer.
         *- `delegate`: The account to delegate permission to transfer the item.
         *
         *Important NOTE: The `approved` account gets reset after each transfer.
         *
         *Emits `ApprovedTransfer` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         *Cancel the prior approval for the transfer of an item by a delegate.
         *
         *Origin must be either:
         *- the `Force` origin;
         *- `Signed` with the signer being the Admin of the `collection`;
         *- `Signed` with the signer being the Owner of the `item`;
         *
         *Arguments:
         *- `collection`: The collection of the item of whose approval will be cancelled.
         *- `item`: The item of the item of whose approval will be cancelled.
         *- `maybe_check_delegate`: If `Some` will ensure that the given account is the one to
         *  which permission of transfer is delegated.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<Ieipuujd6879do>>;
        /**
         *Alter the attributes of a given item.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `collection`: The identifier of the item.
         *- `owner`: The new Owner of this item.
         *- `issuer`: The new Issuer of this item.
         *- `admin`: The new Admin of this item.
         *- `freezer`: The new Freezer of this item.
         *- `free_holding`: Whether a deposit is taken for holding an item of this collection.
         *- `is_frozen`: Whether this collection is frozen except for permissioned/admin
         *instructions.
         *
         *Emits `ItemStatusChanged` with the identity of the item.
         *
         *Weight: `O(1)`
         */
        force_item_status: TxDescriptor<Anonymize<Ie56eq9sg1rsoc>>;
        /**
         *Set an attribute for a collection or item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`collection`.
         *
         *If the origin is Signed, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * (key.len + value.len)` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `maybe_item`: The identifier of the item whose metadata to set.
         *- `key`: The key of the attribute.
         *- `value`: The value to which to set the attribute.
         *
         *Emits `AttributeSet`.
         *
         *Weight: `O(1)`
         */
        set_attribute: TxDescriptor<Anonymize<I5tvvgui05tn6e>>;
        /**
         *Clear an attribute for a collection or item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `maybe_item`: The identifier of the item whose metadata to clear.
         *- `key`: The key of the attribute.
         *
         *Emits `AttributeCleared`.
         *
         *Weight: `O(1)`
         */
        clear_attribute: TxDescriptor<Anonymize<Ibal0joadvdc2h>>;
        /**
         *Set the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`collection`.
         *
         *If the origin is Signed, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `item`: The identifier of the item whose metadata to set.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *- `is_frozen`: Whether the metadata should be frozen against further changes.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<Iceq9fmmp9aeqv>>;
        /**
         *Clear the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`item`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `item`: The identifier of the item whose metadata to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Set the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
         *the `collection`.
         *
         *If the origin is `Signed`, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the item whose metadata to update.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *- `is_frozen`: Whether the metadata should be frozen against further changes.
         *
         *Emits `CollectionMetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_collection_metadata: TxDescriptor<Anonymize<I9viqhmdtuof5e>>;
        /**
         *Clear the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
         *the `collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose metadata to clear.
         *
         *Emits `CollectionMetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Set (or reset) the acceptance of ownership for a particular account.
         *
         *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
         *provider reference.
         *
         *- `maybe_collection`: The identifier of the collection whose ownership the signer is
         *  willing to accept, or if `None`, an indication that the signer is willing to accept no
         *  ownership transferal.
         *
         *Emits `OwnershipAcceptanceChanged`.
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         *Set the maximum amount of items a collection could have.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
         *the `collection`.
         *
         *Note: This function can only succeed once per collection.
         *
         *- `collection`: The identifier of the collection to change.
         *- `max_supply`: The maximum amount of items a collection could have.
         *
         *Emits `CollectionMaxSupplySet` event when successful.
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *Set (or reset) the price for an item.
         *
         *Origin must be Signed and must be the owner of the asset `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item to set the price for.
         *- `price`: The price for the item. Pass `None`, to reset the price.
         *- `buyer`: Restricts the buy operation to a specific account.
         *
         *Emits `ItemPriceSet` on success if the price is not `None`.
         *Emits `ItemPriceRemoved` on success if the price is `None`.
         */
        set_price: TxDescriptor<Anonymize<Ia9cd4jqb5eecb>>;
        /**
         *Allows to buy an item if it's up for sale.
         *
         *Origin must be Signed and must not be the owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item the sender wants to buy.
         *- `bid_price`: The price the sender is willing to pay.
         *
         *Emits `ItemBought` on success.
         */
        buy_item: TxDescriptor<Anonymize<I19jiel1ftbcce>>;
    };
    Nfts: {
        /**
         *Issue a new collection of non-fungible items from a public origin.
         *
         *This new collection has no items initially and its owner is the origin.
         *
         *The origin must be Signed and the sender must have sufficient funds free.
         *
         *`CollectionDeposit` funds of sender are reserved.
         *
         *Parameters:
         *- `admin`: The admin of this collection. The admin is the initial address of each
         *member of the collection's admin team.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<I43aobns89nbkh>>;
        /**
         *Issue a new collection of non-fungible items from a privileged origin.
         *
         *This new collection has no items initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `owner`: The owner of this collection of items. The owner has full superuser
         *  permissions over this item, but may later change and configure the permissions using
         *  `transfer_ownership` and `set_team`.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<Iamd7rovec1hfb>>;
        /**
         *Destroy a collection of fungible items.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
         *owner of the `collection`.
         *
         *NOTE: The collection must have 0 items to be destroyed.
         *
         *- `collection`: The identifier of the collection to be destroyed.
         *- `witness`: Information on the items minted in the collection. This must be
         *correct.
         *
         *Emits `Destroyed` event when successful.
         *
         *Weight: `O(m + c + a)` where:
         *- `m = witness.item_metadatas`
         *- `c = witness.item_configs`
         *- `a = witness.attributes`
         */
        destroy: TxDescriptor<Anonymize<I77ie723ncd4co>>;
        /**
         *Mint an item of a particular collection.
         *
         *The origin must be Signed and the sender must comply with the `mint_settings` rules.
         *
         *- `collection`: The collection of the item to be minted.
         *- `item`: An identifier of the new item.
         *- `mint_to`: Account into which the item will be minted.
         *- `witness_data`: When the mint type is `HolderOf(collection_id)`, then the owned
         *  item_id from that collection needs to be provided within the witness data object. If
         *  the mint price is set, then it should be additionally confirmed in the `witness_data`.
         *
         *Note: the deposit will be taken from the `origin` and not the `owner` of the `item`.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         */
        mint: TxDescriptor<Anonymize<Ieebloeahma3ke>>;
        /**
         *Mint an item of a particular collection from a privileged origin.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` and the sender must be the
         *Issuer of the `collection`.
         *
         *- `collection`: The collection of the item to be minted.
         *- `item`: An identifier of the new item.
         *- `mint_to`: Account into which the item will be minted.
         *- `item_config`: A config of the new item.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         */
        force_mint: TxDescriptor<Anonymize<I4mbtpf4pu3rec>>;
        /**
         *Destroy a single item.
         *
         *The origin must conform to `ForceOrigin` or must be Signed and the signing account must
         *be the owner of the `item`.
         *
         *- `collection`: The collection of the item to be burned.
         *- `item`: The item to be burned.
         *
         *Emits `Burned`.
         *
         *Weight: `O(1)`
         */
        burn: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Move an item from the sender account to another.
         *
         *Origin must be Signed and the signing account must be either:
         *- the Owner of the `item`;
         *- the approved delegate for the `item` (in this case, the approval is reset).
         *
         *Arguments:
         *- `collection`: The collection of the item to be transferred.
         *- `item`: The item to be transferred.
         *- `dest`: The account to receive ownership of the item.
         *
         *Emits `Transferred`.
         *
         *Weight: `O(1)`
         */
        transfer: TxDescriptor<Anonymize<Ibgvkh96s68a66>>;
        /**
         *Re-evaluate the deposits on some items.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection of the items to be reevaluated.
         *- `items`: The items of the collection whose deposits will be reevaluated.
         *
         *NOTE: This exists as a best-effort function. Any items which are unknown or
         *in the case that the owner account does not have reservable funds to pay for a
         *deposit increase are ignored. Generally the owner isn't going to call this on items
         *whose existing deposit is less than the refreshed deposit as it would only cost them,
         *so it's of little consequence.
         *
         *It will still return an error in the case that the collection is unknown or the signer
         *is not permitted to call it.
         *
         *Weight: `O(items.len())`
         */
        redeposit: TxDescriptor<Anonymize<If9vko7pv0231m>>;
        /**
         *Disallow further unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be changed.
         *- `item`: The item to become non-transferable.
         *
         *Emits `ItemTransferLocked`.
         *
         *Weight: `O(1)`
         */
        lock_item_transfer: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Re-allow unprivileged transfer of an item.
         *
         *Origin must be Signed and the sender should be the Freezer of the `collection`.
         *
         *- `collection`: The collection of the item to be changed.
         *- `item`: The item to become transferable.
         *
         *Emits `ItemTransferUnlocked`.
         *
         *Weight: `O(1)`
         */
        unlock_item_transfer: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Disallows specified settings for the whole collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection to be locked.
         *- `lock_settings`: The settings to be locked.
         *
         *Note: it's possible to only lock(set) the setting, but not to unset it.
         *
         *Emits `CollectionLocked`.
         *
         *Weight: `O(1)`
         */
        lock_collection: TxDescriptor<Anonymize<I1ahf3pvgsgbu>>;
        /**
         *Change the Owner of a collection.
         *
         *Origin must be Signed and the sender should be the Owner of the `collection`.
         *
         *- `collection`: The collection whose owner should be changed.
         *- `owner`: The new Owner of this collection. They must have called
         *  `set_accept_ownership` with `collection` in order for this operation to succeed.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I736lv5q9m5bot>>;
        /**
         *Change the Issuer, Admin and Freezer of a collection.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`collection`.
         *
         *Note: by setting the role to `None` only the `ForceOrigin` will be able to change it
         *after to `Some(account)`.
         *
         *- `collection`: The collection whose team should be changed.
         *- `issuer`: The new Issuer of this collection.
         *- `admin`: The new Admin of this collection.
         *- `freezer`: The new Freezer of this collection.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<I9uapdn16emsti>>;
        /**
         *Change the Owner of a collection.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `collection`: The identifier of the collection.
         *- `owner`: The new Owner of this collection.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        force_collection_owner: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         *Change the config of a collection.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `collection`: The identifier of the collection.
         *- `config`: The new config of this collection.
         *
         *Emits `CollectionConfigChanged`.
         *
         *Weight: `O(1)`
         */
        force_collection_config: TxDescriptor<Anonymize<I97qcg6i3l8gee>>;
        /**
         *Approve an item to be transferred by a delegated third-party account.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *`item`.
         *
         *- `collection`: The collection of the item to be approved for delegated transfer.
         *- `item`: The item to be approved for delegated transfer.
         *- `delegate`: The account to delegate permission to transfer the item.
         *- `maybe_deadline`: Optional deadline for the approval. Specified by providing the
         *	number of blocks after which the approval will expire
         *
         *Emits `TransferApproved` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<Ib5udrahak005b>>;
        /**
         *Cancel one of the transfer approvals for a specific item.
         *
         *Origin must be either:
         *- the `Force` origin;
         *- `Signed` with the signer being the Owner of the `item`;
         *
         *Arguments:
         *- `collection`: The collection of the item of whose approval will be cancelled.
         *- `item`: The item of the collection of whose approval will be cancelled.
         *- `delegate`: The account that is going to loose their approval.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         *Cancel all the approvals of a specific item.
         *
         *Origin must be either:
         *- the `Force` origin;
         *- `Signed` with the signer being the Owner of the `item`;
         *
         *Arguments:
         *- `collection`: The collection of the item of whose approvals will be cleared.
         *- `item`: The item of the collection of whose approvals will be cleared.
         *
         *Emits `AllApprovalsCancelled` on success.
         *
         *Weight: `O(1)`
         */
        clear_all_transfer_approvals: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Disallows changing the metadata or attributes of the item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin
         *of the `collection`.
         *
         *- `collection`: The collection if the `item`.
         *- `item`: An item to be locked.
         *- `lock_metadata`: Specifies whether the metadata should be locked.
         *- `lock_attributes`: Specifies whether the attributes in the `CollectionOwner` namespace
         *  should be locked.
         *
         *Note: `lock_attributes` affects the attributes in the `CollectionOwner` namespace only.
         *When the metadata or attributes are locked, it won't be possible the unlock them.
         *
         *Emits `ItemPropertiesLocked`.
         *
         *Weight: `O(1)`
         */
        lock_item_properties: TxDescriptor<Anonymize<I1jj31tn29ie3c>>;
        /**
         *Set an attribute for a collection or item.
         *
         *Origin must be Signed and must conform to the namespace ruleset:
         *- `CollectionOwner` namespace could be modified by the `collection` Admin only;
         *- `ItemOwner` namespace could be modified by the `maybe_item` owner only. `maybe_item`
         *  should be set in that case;
         *- `Account(AccountId)` namespace could be modified only when the `origin` was given a
         *  permission to do so;
         *
         *The funds of `origin` are reserved according to the formula:
         *`AttributeDepositBase + DepositPerByte * (key.len + value.len)` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `maybe_item`: The identifier of the item whose metadata to set.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *- `value`: The value to which to set the attribute.
         *
         *Emits `AttributeSet`.
         *
         *Weight: `O(1)`
         */
        set_attribute: TxDescriptor<Anonymize<I5llu6o6a0go5i>>;
        /**
         *Force-set an attribute for a collection or item.
         *
         *Origin must be `ForceOrigin`.
         *
         *If the attribute already exists and it was set by another account, the deposit
         *will be returned to the previous owner.
         *
         *- `set_as`: An optional owner of the attribute.
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `maybe_item`: The identifier of the item whose metadata to set.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *- `value`: The value to which to set the attribute.
         *
         *Emits `AttributeSet`.
         *
         *Weight: `O(1)`
         */
        force_set_attribute: TxDescriptor<Anonymize<Ic8b8561e6t9ie>>;
        /**
         *Clear an attribute for a collection or item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Owner of the
         *attribute.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `maybe_item`: The identifier of the item whose metadata to clear.
         *- `namespace`: Attribute's namespace.
         *- `key`: The key of the attribute.
         *
         *Emits `AttributeCleared`.
         *
         *Weight: `O(1)`
         */
        clear_attribute: TxDescriptor<Anonymize<I93r2effh7od84>>;
        /**
         *Approve item's attributes to be changed by a delegated third-party account.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: A collection of the item.
         *- `item`: The item that holds attributes.
         *- `delegate`: The account to delegate permission to change attributes of the item.
         *
         *Emits `ItemAttributesApprovalAdded` on success.
         */
        approve_item_attributes: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         *Cancel the previously provided approval to change item's attributes.
         *All the previously set attributes by the `delegate` will be removed.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: Collection that the item is contained within.
         *- `item`: The item that holds attributes.
         *- `delegate`: The previously approved account to remove.
         *
         *Emits `ItemAttributesApprovalRemoved` on success.
         */
        cancel_item_attributes_approval: TxDescriptor<Anonymize<I6afd7fllr8otc>>;
        /**
         *Set the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
         *`collection`.
         *
         *If the origin is Signed, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the collection whose item's metadata to set.
         *- `item`: The identifier of the item whose metadata to set.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *
         *Emits `ItemMetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<Icrkms46uh8tpb>>;
        /**
         *Clear the metadata for an item.
         *
         *Origin must be either `ForceOrigin` or Signed and the sender should be the Admin of the
         *`collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose item's metadata to clear.
         *- `item`: The identifier of the item whose metadata to clear.
         *
         *Emits `ItemMetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Set the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
         *the `collection`.
         *
         *If the origin is `Signed`, then funds of signer are reserved according to the formula:
         *`MetadataDepositBase + DepositPerByte * data.len` taking into
         *account any already reserved funds.
         *
         *- `collection`: The identifier of the item whose metadata to update.
         *- `data`: The general information of this item. Limited in length by `StringLimit`.
         *
         *Emits `CollectionMetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_collection_metadata: TxDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         *Clear the metadata for a collection.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Admin of
         *the `collection`.
         *
         *Any deposit is freed for the collection's owner.
         *
         *- `collection`: The identifier of the collection whose metadata to clear.
         *
         *Emits `CollectionMetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Set (or reset) the acceptance of ownership for a particular account.
         *
         *Origin must be `Signed` and if `maybe_collection` is `Some`, then the signer must have a
         *provider reference.
         *
         *- `maybe_collection`: The identifier of the collection whose ownership the signer is
         *  willing to accept, or if `None`, an indication that the signer is willing to accept no
         *  ownership transferal.
         *
         *Emits `OwnershipAcceptanceChanged`.
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         *Set the maximum number of items a collection could have.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Owner of
         *the `collection`.
         *
         *- `collection`: The identifier of the collection to change.
         *- `max_supply`: The maximum number of items a collection could have.
         *
         *Emits `CollectionMaxSupplySet` event when successful.
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *Update mint settings.
         *
         *Origin must be either `ForceOrigin` or `Signed` and the sender should be the Issuer
         *of the `collection`.
         *
         *- `collection`: The identifier of the collection to change.
         *- `mint_settings`: The new mint settings.
         *
         *Emits `CollectionMintSettingsUpdated` event when successful.
         */
        update_mint_settings: TxDescriptor<Anonymize<I1lso3vlgherue>>;
        /**
         *Set (or reset) the price for an item.
         *
         *Origin must be Signed and must be the owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item to set the price for.
         *- `price`: The price for the item. Pass `None`, to reset the price.
         *- `buyer`: Restricts the buy operation to a specific account.
         *
         *Emits `ItemPriceSet` on success if the price is not `None`.
         *Emits `ItemPriceRemoved` on success if the price is `None`.
         */
        set_price: TxDescriptor<Anonymize<Ia9cd4jqb5eecb>>;
        /**
         *Allows to buy an item if it's up for sale.
         *
         *Origin must be Signed and must not be the owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item the sender wants to buy.
         *- `bid_price`: The price the sender is willing to pay.
         *
         *Emits `ItemBought` on success.
         */
        buy_item: TxDescriptor<Anonymize<I19jiel1ftbcce>>;
        /**
         *Allows to pay the tips.
         *
         *Origin must be Signed.
         *
         *- `tips`: Tips array.
         *
         *Emits `TipSent` on every tip transfer.
         */
        pay_tips: TxDescriptor<Anonymize<I26c8p47106toa>>;
        /**
         *Register a new atomic swap, declaring an intention to send an `item` in exchange for
         *`desired_item` from origin to target on the current blockchain.
         *The target can execute the swap during the specified `duration` of blocks (if set).
         *Additionally, the price could be set for the desired `item`.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item an owner wants to give.
         *- `desired_collection`: The collection of the desired item.
         *- `desired_item`: The desired item an owner wants to receive.
         *- `maybe_price`: The price an owner is willing to pay or receive for the desired `item`.
         *- `duration`: A deadline for the swap. Specified by providing the number of blocks
         *	after which the swap will expire.
         *
         *Emits `SwapCreated` on success.
         */
        create_swap: TxDescriptor<Anonymize<Iq82b3qvf20ne>>;
        /**
         *Cancel an atomic swap.
         *
         *Origin must be Signed.
         *Origin must be an owner of the `item` if the deadline hasn't expired.
         *
         *- `collection`: The collection of the item.
         *- `item`: The item an owner wants to give.
         *
         *Emits `SwapCancelled` on success.
         */
        cancel_swap: TxDescriptor<Anonymize<Ic3j8ku6mbsms4>>;
        /**
         *Claim an atomic swap.
         *This method executes a pending swap, that was created by a counterpart before.
         *
         *Origin must be Signed and must be an owner of the `item`.
         *
         *- `send_collection`: The collection of the item to be sent.
         *- `send_item`: The item to be sent.
         *- `receive_collection`: The collection of the item to be received.
         *- `receive_item`: The item to be received.
         *- `witness_price`: A price that was previously agreed on.
         *
         *Emits `SwapClaimed` on success.
         */
        claim_swap: TxDescriptor<Anonymize<I3nvoqsi8f05ph>>;
        /**
         *Mint an item by providing the pre-signed approval.
         *
         *Origin must be Signed.
         *
         *- `mint_data`: The pre-signed approval that consists of the information about the item,
         *  its metadata, attributes, who can mint it (`None` for anyone) and until what block
         *  number.
         *- `signature`: The signature of the `data` object.
         *- `signer`: The `data` object's signer. Should be an Issuer of the collection.
         *
         *Emits `Issued` on success.
         *Emits `AttributeSet` if the attributes were provided.
         *Emits `ItemMetadataSet` if the metadata was not empty.
         */
        mint_pre_signed: TxDescriptor<Anonymize<I3eoft5md071do>>;
        /**
         *Set attributes for an item by providing the pre-signed approval.
         *
         *Origin must be Signed and must be an owner of the `data.item`.
         *
         *- `data`: The pre-signed approval that consists of the information about the item,
         *  attributes to update and until what block number.
         *- `signature`: The signature of the `data` object.
         *- `signer`: The `data` object's signer. Should be an Admin of the collection for the
         *  `CollectionOwner` namespace.
         *
         *Emits `AttributeSet` for each provided attribute.
         *Emits `ItemAttributesApprovalAdded` if the approval wasn't set before.
         *Emits `PreSignedAttributesSet` on success.
         */
        set_attributes_pre_signed: TxDescriptor<Anonymize<I923eug653ra0o>>;
    };
    ForeignAssets: {
        /**
         *Issue a new class of fungible assets from a public origin.
         *
         *This new asset class has no assets initially and its owner is the origin.
         *
         *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         *
         *Funds of sender are reserved by `AssetDeposit`.
         *
         *Parameters:
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `admin`: The admin of this class of assets. The admin is the initial address of each
         *member of the asset class's admin team.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<I7p44cr9g492tc>>;
        /**
         *Issue a new class of fungible assets from a privileged origin.
         *
         *This new asset class has no assets initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `owner`: The owner of this class of assets. The owner has full superuser permissions
         *over this asset, but may later change and configure the permissions using
         *`transfer_ownership` and `set_team`.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<Ibn8gm2jugarek>>;
        /**
         *Start the process of destroying a fungible asset class.
         *
         *`start_destroy` is the first in a series of extrinsics that should be called, to allow
         *destruction of an asset class.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *The asset class must be frozen before calling `start_destroy`.
         */
        start_destroy: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Destroy all accounts associated with a given asset.
         *
         *`destroy_accounts` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedAccounts` event.
         */
        destroy_accounts: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
         *
         *`destroy_approvals` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedApprovals` event.
         */
        destroy_approvals: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Complete destroying asset and unreserve currency.
         *
         *`finish_destroy` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
         *hand.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each successful call emits the `Event::Destroyed` event.
         */
        finish_destroy: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Mint assets of a particular class.
         *
         *The origin must be Signed and the sender must be the Issuer of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount minted.
         *- `beneficiary`: The account to be credited with the minted assets.
         *- `amount`: The amount of the asset to be minted.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         */
        mint: TxDescriptor<Anonymize<I8dh2oimnihksg>>;
        /**
         *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         *
         *Origin must be Signed and the sender should be the Manager of the asset `id`.
         *
         *Bails with `NoAccount` if the `who` is already dead.
         *
         *- `id`: The identifier of the asset to have some amount burned.
         *- `who`: The account to be debited from.
         *- `amount`: The maximum amount by which `who`'s balance should be reduced.
         *
         *Emits `Burned` with the actual amount burned. If this takes the balance to below the
         *minimum for the asset, then the amount burned is increased to take it to zero.
         *
         *Weight: `O(1)`
         *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         */
        burn: TxDescriptor<Anonymize<Ib8mfkapk4u9hs>>;
        /**
         *Move some assets from the sender account to another.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer: TxDescriptor<Anonymize<Ikm68gg7akl51>>;
        /**
         *Move some assets from the sender account to another, keeping the sender account alive.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer_keep_alive: TxDescriptor<Anonymize<Ikm68gg7akl51>>;
        /**
         *Move some assets from one account to another.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `source`: The account to be debited.
         *- `dest`: The account to be credited.
         *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
         *`dest`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the `source` balance above zero but
         *below the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         *`dest`.
         */
        force_transfer: TxDescriptor<Anonymize<If3csb5ben9n1v>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
         *must already exist as an entry in `Account`s of the asset. If you want to freeze an
         *account that does not have an entry, use `touch_other` first.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze: TxDescriptor<Anonymize<If90dk6l9lmtfv>>;
        /**
         *Allow unprivileged transfers to and from an account again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be unfrozen.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw: TxDescriptor<Anonymize<If90dk6l9lmtfv>>;
        /**
         *Disallow further unprivileged transfers for the asset class.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze_asset: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Allow unprivileged transfers for the asset again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be thawed.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw_asset: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Change the Owner of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<Ifoahm8m43v9q2>>;
        /**
         *Change the Issuer, Admin and Freezer of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<I1rrgcjpoiot5q>>;
        /**
         *Set the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Funds of sender are reserved according to the formula:
         *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         *account any already reserved funds.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<I2hc61n7o8dso4>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Any deposit is freed for the asset owner.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Force the metadata for an asset to some value.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is left alone.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         */
        force_set_metadata: TxDescriptor<Anonymize<I5787kv2d05f94>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is returned.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        force_clear_metadata: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Alter the attributes of a given asset.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         *value to account for the state bloat associated with its balance storage. If set to
         *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
         *an ED in the Balances pallet or whatever else is used to control user-account state
         *growth).
         *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         *instructions.
         *
         *Emits `AssetStatusChanged` with the identity of the asset.
         *
         *Weight: `O(1)`
         */
        force_asset_status: TxDescriptor<Anonymize<Ia8g1imc1kclf4>>;
        /**
         *Approve an amount of asset for transfer by a delegated third-party account.
         *
         *Origin must be Signed.
         *
         *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         *for the purpose of holding the approval. If some non-zero amount of assets is already
         *approved from signing account to `delegate`, then it is topped up or unreserved to
         *meet the right value.
         *
         *NOTE: The signing account does not need to own `amount` of assets at the point of
         *making this call.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account to delegate permission to transfer asset.
         *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
         *already an approval in place, then this acts additively.
         *
         *Emits `ApprovedTransfer` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<Id26ouo5lt2551>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be Signed and there must be an approval in place between signer and
         *`delegate`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<Iap1up3prsbtvg>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         *account of the asset `id`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        force_cancel_approval: TxDescriptor<Anonymize<I8m5mvhifj6pm>>;
        /**
         *Transfer some asset balance from a previously delegated account to some third-party
         *account.
         *
         *Origin must be Signed and there must be an approval in place by the `owner` to the
         *signer.
         *
         *If the entire amount approved for transfer is transferred, then any deposit previously
         *reserved by `approve_transfer` is unreserved.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The account which previously approved for a transfer of at least `amount` and
         *from which the asset balance will be withdrawn.
         *- `destination`: The account to which the asset balance of `amount` will be transferred.
         *- `amount`: The amount of assets to transfer.
         *
         *Emits `TransferredApproved` on success.
         *
         *Weight: `O(1)`
         */
        transfer_approved: TxDescriptor<Anonymize<I8ucc4915s9qvj>>;
        /**
         *Create an asset account for non-provider assets.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *  to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<Iekg0q69obfi0f>>;
        /**
         *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
         *account.
         *
         *The origin must be Signed.
         *
         *- `id`: The identifier of the asset for which the caller would like the deposit
         *  refunded.
         *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund: TxDescriptor<Anonymize<I1pjcv2ha0997v>>;
        /**
         *Sets the minimum balance of an asset.
         *
         *Only works if there aren't any accounts that are holding the asset or if
         *the new value of `min_balance` is less than the old one.
         *
         *Origin must be Signed and the sender has to be the Owner of the
         *asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `min_balance`: The new value of `min_balance`.
         *
         *Emits `AssetMinBalanceChanged` event when successful.
         */
        set_min_balance: TxDescriptor<Anonymize<Ifnm6nai2i47ar>>;
        /**
         *Create an asset account for `who`.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
         *  must have sufficient funds for a deposit to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *- `who`: The account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch_other: TxDescriptor<Anonymize<If90dk6l9lmtfv>>;
        /**
         *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
         *
         *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
         *order to burn a non-zero balance of the asset, the caller must be the account and should
         *use `refund`.
         *
         *- `id`: The identifier of the asset for the account holding a deposit.
         *- `who`: The account to refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund_other: TxDescriptor<Anonymize<If90dk6l9lmtfv>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the account's asset.
         *- `who`: The account to be unblocked.
         *
         *Emits `Blocked`.
         *
         *Weight: `O(1)`
         */
        block: TxDescriptor<Anonymize<If90dk6l9lmtfv>>;
    };
    NftFractionalization: {
        /**
         *Lock the NFT and mint a new fungible asset.
         *
         *The dispatch origin for this call must be Signed.
         *The origin must be the owner of the NFT they are trying to lock.
         *
         *`Deposit` funds of sender are reserved.
         *
         *- `nft_collection_id`: The ID used to identify the collection of the NFT.
         *Is used within the context of `pallet_nfts`.
         *- `nft_id`: The ID used to identify the NFT within the given collection.
         *Is used within the context of `pallet_nfts`.
         *- `asset_id`: The ID of the new asset. It must not exist.
         *Is used within the context of `pallet_assets`.
         *- `beneficiary`: The account that will receive the newly created asset.
         *- `fractions`: The total issuance of the newly created asset class.
         *
         *Emits `NftFractionalized` event when successful.
         */
        fractionalize: TxDescriptor<Anonymize<I9gf2bs80kgbnk>>;
        /**
         *Burn the total issuance of the fungible asset and return (unlock) the locked NFT.
         *
         *The dispatch origin for this call must be Signed.
         *
         *`Deposit` funds will be returned to `asset_creator`.
         *
         *- `nft_collection_id`: The ID used to identify the collection of the NFT.
         *Is used within the context of `pallet_nfts`.
         *- `nft_id`: The ID used to identify the NFT within the given collection.
         *Is used within the context of `pallet_nfts`.
         *- `asset_id`: The ID of the asset being returned and destroyed. Must match
         *the original ID of the created asset, corresponding to the NFT.
         *Is used within the context of `pallet_assets`.
         *- `beneficiary`: The account that will receive the unified NFT.
         *
         *Emits `NftUnified` event when successful.
         */
        unify: TxDescriptor<Anonymize<I5urb3tva4ave5>>;
    };
    PoolAssets: {
        /**
         *Issue a new class of fungible assets from a public origin.
         *
         *This new asset class has no assets initially and its owner is the origin.
         *
         *The origin must conform to the configured `CreateOrigin` and have sufficient funds free.
         *
         *Funds of sender are reserved by `AssetDeposit`.
         *
         *Parameters:
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `admin`: The admin of this class of assets. The admin is the initial address of each
         *member of the asset class's admin team.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `Created` event when successful.
         *
         *Weight: `O(1)`
         */
        create: TxDescriptor<Anonymize<Ic357tcepuvo5c>>;
        /**
         *Issue a new class of fungible assets from a privileged origin.
         *
         *This new asset class has no assets initially.
         *
         *The origin must conform to `ForceOrigin`.
         *
         *Unlike `create`, no funds are reserved.
         *
         *- `id`: The identifier of the new asset. This must not be currently in use to identify
         *an existing asset. If [`NextAssetId`] is set, then this must be equal to it.
         *- `owner`: The owner of this class of assets. The owner has full superuser permissions
         *over this asset, but may later change and configure the permissions using
         *`transfer_ownership` and `set_team`.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *
         *Emits `ForceCreated` event when successful.
         *
         *Weight: `O(1)`
         */
        force_create: TxDescriptor<Anonymize<I2rnoam876ruhj>>;
        /**
         *Start the process of destroying a fungible asset class.
         *
         *`start_destroy` is the first in a series of extrinsics that should be called, to allow
         *destruction of an asset class.
         *
         *The origin must conform to `ForceOrigin` or must be `Signed` by the asset's `owner`.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *The asset class must be frozen before calling `start_destroy`.
         */
        start_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all accounts associated with a given asset.
         *
         *`destroy_accounts` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all accounts. It will destroy `RemoveItemsLimit` accounts at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedAccounts` event.
         */
        destroy_accounts: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Destroy all approvals associated with a given asset up to the max (T::RemoveItemsLimit).
         *
         *`destroy_approvals` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state.
         *
         *Due to weight restrictions, this function may need to be called multiple times to fully
         *destroy all approvals. It will destroy `RemoveItemsLimit` approvals at a time.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each call emits the `Event::DestroyedApprovals` event.
         */
        destroy_approvals: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Complete destroying asset and unreserve currency.
         *
         *`finish_destroy` should only be called after `start_destroy` has been called, and the
         *asset is in a `Destroying` state. All accounts or approvals should be destroyed before
         *hand.
         *
         *- `id`: The identifier of the asset to be destroyed. This must identify an existing
         *  asset.
         *
         *Each successful call emits the `Event::Destroyed` event.
         */
        finish_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Mint assets of a particular class.
         *
         *The origin must be Signed and the sender must be the Issuer of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount minted.
         *- `beneficiary`: The account to be credited with the minted assets.
         *- `amount`: The amount of the asset to be minted.
         *
         *Emits `Issued` event when successful.
         *
         *Weight: `O(1)`
         *Modes: Pre-existing balance of `beneficiary`; Account pre-existence of `beneficiary`.
         */
        mint: TxDescriptor<Anonymize<Ib3qnc19gu633c>>;
        /**
         *Reduce the balance of `who` by as much as possible up to `amount` assets of `id`.
         *
         *Origin must be Signed and the sender should be the Manager of the asset `id`.
         *
         *Bails with `NoAccount` if the `who` is already dead.
         *
         *- `id`: The identifier of the asset to have some amount burned.
         *- `who`: The account to be debited from.
         *- `amount`: The maximum amount by which `who`'s balance should be reduced.
         *
         *Emits `Burned` with the actual amount burned. If this takes the balance to below the
         *minimum for the asset, then the amount burned is increased to take it to zero.
         *
         *Weight: `O(1)`
         *Modes: Post-existence of `who`; Pre & post Zombie-status of `who`.
         */
        burn: TxDescriptor<Anonymize<Ifira6u9hi7cu1>>;
        /**
         *Move some assets from the sender account to another.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from the sender account to another, keeping the sender account alive.
         *
         *Origin must be Signed.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `target`: The account to be credited.
         *- `amount`: The amount by which the sender's balance of assets should be reduced and
         *`target`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the sender balance above zero but below
         *the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `target`; Post-existence of sender; Account pre-existence of
         *`target`.
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *Move some assets from one account to another.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to have some amount transferred.
         *- `source`: The account to be debited.
         *- `dest`: The account to be credited.
         *- `amount`: The amount by which the `source`'s balance of assets should be reduced and
         *`dest`'s balance increased. The amount actually transferred may be slightly greater in
         *the case that the transfer would otherwise take the `source` balance above zero but
         *below the minimum balance. Must be greater than zero.
         *
         *Emits `Transferred` with the actual amount transferred. If this takes the source balance
         *to below the minimum for the asset, then the amount transferred is increased to take it
         *to zero.
         *
         *Weight: `O(1)`
         *Modes: Pre-existence of `dest`; Post-existence of `source`; Account pre-existence of
         *`dest`.
         */
        force_transfer: TxDescriptor<Anonymize<I2i27f3sfmvc05>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` from an account `who`. `who`
         *must already exist as an entry in `Account`s of the asset. If you want to freeze an
         *account that does not have an entry, use `touch_other` first.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Allow unprivileged transfers to and from an account again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `who`: The account to be unfrozen.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers for the asset class.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *
         *Emits `Frozen`.
         *
         *Weight: `O(1)`
         */
        freeze_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Allow unprivileged transfers for the asset again.
         *
         *Origin must be Signed and the sender should be the Admin of the asset `id`.
         *
         *- `id`: The identifier of the asset to be thawed.
         *
         *Emits `Thawed`.
         *
         *Weight: `O(1)`
         */
        thaw_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Change the Owner of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *
         *Emits `OwnerChanged`.
         *
         *Weight: `O(1)`
         */
        transfer_ownership: TxDescriptor<Anonymize<I3abtumcmempjs>>;
        /**
         *Change the Issuer, Admin and Freezer of an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *- `id`: The identifier of the asset to be frozen.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *
         *Emits `TeamChanged`.
         *
         *Weight: `O(1)`
         */
        set_team: TxDescriptor<Anonymize<Id81m8flopt8ha>>;
        /**
         *Set the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Funds of sender are reserved according to the formula:
         *`MetadataDepositBase + MetadataDepositPerByte * (name.len + symbol.len)` taking into
         *account any already reserved funds.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(1)`
         */
        set_metadata: TxDescriptor<Anonymize<I8hff7chabggkd>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be Signed and the sender should be the Owner of the asset `id`.
         *
         *Any deposit is freed for the asset owner.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Force the metadata for an asset to some value.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is left alone.
         *
         *- `id`: The identifier of the asset to update.
         *- `name`: The user friendly name of this asset. Limited in length by `StringLimit`.
         *- `symbol`: The exchange symbol for this asset. Limited in length by `StringLimit`.
         *- `decimals`: The number of decimals this asset uses to represent one unit.
         *
         *Emits `MetadataSet`.
         *
         *Weight: `O(N + S)` where N and S are the length of the name and symbol respectively.
         */
        force_set_metadata: TxDescriptor<Anonymize<I49i39mtj1ivbs>>;
        /**
         *Clear the metadata for an asset.
         *
         *Origin must be ForceOrigin.
         *
         *Any deposit is returned.
         *
         *- `id`: The identifier of the asset to clear.
         *
         *Emits `MetadataCleared`.
         *
         *Weight: `O(1)`
         */
        force_clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Alter the attributes of a given asset.
         *
         *Origin must be `ForceOrigin`.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The new Owner of this asset.
         *- `issuer`: The new Issuer of this asset.
         *- `admin`: The new Admin of this asset.
         *- `freezer`: The new Freezer of this asset.
         *- `min_balance`: The minimum balance of this new asset that any single account must
         *have. If an account's balance is reduced below this, then it collapses to zero.
         *- `is_sufficient`: Whether a non-zero balance of this asset is deposit of sufficient
         *value to account for the state bloat associated with its balance storage. If set to
         *`true`, then non-zero balances may be stored without a `consumer` reference (and thus
         *an ED in the Balances pallet or whatever else is used to control user-account state
         *growth).
         *- `is_frozen`: Whether this asset class is frozen except for permissioned/admin
         *instructions.
         *
         *Emits `AssetStatusChanged` with the identity of the asset.
         *
         *Weight: `O(1)`
         */
        force_asset_status: TxDescriptor<Anonymize<Ifkr2kcak2vto1>>;
        /**
         *Approve an amount of asset for transfer by a delegated third-party account.
         *
         *Origin must be Signed.
         *
         *Ensures that `ApprovalDeposit` worth of `Currency` is reserved from signing account
         *for the purpose of holding the approval. If some non-zero amount of assets is already
         *approved from signing account to `delegate`, then it is topped up or unreserved to
         *meet the right value.
         *
         *NOTE: The signing account does not need to own `amount` of assets at the point of
         *making this call.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account to delegate permission to transfer asset.
         *- `amount`: The amount of asset that may be transferred by `delegate`. If there is
         *already an approval in place, then this acts additively.
         *
         *Emits `ApprovedTransfer` on success.
         *
         *Weight: `O(1)`
         */
        approve_transfer: TxDescriptor<Anonymize<I1ju6r8q0cs9jt>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be Signed and there must be an approval in place between signer and
         *`delegate`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        cancel_approval: TxDescriptor<Anonymize<I4kpeq6j7cd5bu>>;
        /**
         *Cancel all of some asset approved for delegated transfer by a third-party account.
         *
         *Origin must be either ForceOrigin or Signed origin with the signer being the Admin
         *account of the asset `id`.
         *
         *Unreserves any deposit previously reserved by `approve_transfer` for the approval.
         *
         *- `id`: The identifier of the asset.
         *- `delegate`: The account delegated permission to transfer asset.
         *
         *Emits `ApprovalCancelled` on success.
         *
         *Weight: `O(1)`
         */
        force_cancel_approval: TxDescriptor<Anonymize<I5na1ka76k6811>>;
        /**
         *Transfer some asset balance from a previously delegated account to some third-party
         *account.
         *
         *Origin must be Signed and there must be an approval in place by the `owner` to the
         *signer.
         *
         *If the entire amount approved for transfer is transferred, then any deposit previously
         *reserved by `approve_transfer` is unreserved.
         *
         *- `id`: The identifier of the asset.
         *- `owner`: The account which previously approved for a transfer of at least `amount` and
         *from which the asset balance will be withdrawn.
         *- `destination`: The account to which the asset balance of `amount` will be transferred.
         *- `amount`: The amount of assets to transfer.
         *
         *Emits `TransferredApproved` on success.
         *
         *Weight: `O(1)`
         */
        transfer_approved: TxDescriptor<Anonymize<I59mhdb9omdqfa>>;
        /**
         *Create an asset account for non-provider assets.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed; the signer account must have sufficient funds for a deposit
         *  to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *Return the deposit (if any) of an asset account or a consumer reference (if any) of an
         *account.
         *
         *The origin must be Signed.
         *
         *- `id`: The identifier of the asset for which the caller would like the deposit
         *  refunded.
         *- `allow_burn`: If `true` then assets may be destroyed in order to complete the refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund: TxDescriptor<Anonymize<I9vl5kpk0fpakt>>;
        /**
         *Sets the minimum balance of an asset.
         *
         *Only works if there aren't any accounts that are holding the asset or if
         *the new value of `min_balance` is less than the old one.
         *
         *Origin must be Signed and the sender has to be the Owner of the
         *asset `id`.
         *
         *- `id`: The identifier of the asset.
         *- `min_balance`: The new value of `min_balance`.
         *
         *Emits `AssetMinBalanceChanged` event when successful.
         */
        set_min_balance: TxDescriptor<Anonymize<I717jt61hu19b4>>;
        /**
         *Create an asset account for `who`.
         *
         *A deposit will be taken from the signer account.
         *
         *- `origin`: Must be Signed by `Freezer` or `Admin` of the asset `id`; the signer account
         *  must have sufficient funds for a deposit to be taken.
         *- `id`: The identifier of the asset for the account to be created.
         *- `who`: The account to be created.
         *
         *Emits `Touched` event when successful.
         */
        touch_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Return the deposit (if any) of a target asset account. Useful if you are the depositor.
         *
         *The origin must be Signed and either the account owner, depositor, or asset `Admin`. In
         *order to burn a non-zero balance of the asset, the caller must be the account and should
         *use `refund`.
         *
         *- `id`: The identifier of the asset for the account holding a deposit.
         *- `who`: The account to refund.
         *
         *Emits `Refunded` event when successful.
         */
        refund_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *Disallow further unprivileged transfers of an asset `id` to and from an account `who`.
         *
         *Origin must be Signed and the sender should be the Freezer of the asset `id`.
         *
         *- `id`: The identifier of the account's asset.
         *- `who`: The account to be unblocked.
         *
         *Emits `Blocked`.
         *
         *Weight: `O(1)`
         */
        block: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
    };
    AssetConversion: {
        /**
         *Creates an empty liquidity pool and an associated new `lp_token` asset
         *(the id of which is returned in the `Event::PoolCreated` event).
         *
         *Once a pool is created, someone may [`Pallet::add_liquidity`] to it.
         */
        create_pool: TxDescriptor<Anonymize<I8eoqk45hnet27>>;
        /**
         *Provide liquidity into the pool of `asset1` and `asset2`.
         *NOTE: an optimal amount of asset1 and asset2 will be calculated and
         *might be different than the provided `amount1_desired`/`amount2_desired`
         *thus you should provide the min amount you're happy to provide.
         *Params `amount1_min`/`amount2_min` represent that.
         *`mint_to` will be sent the liquidity tokens that represent this share of the pool.
         *
         *NOTE: when encountering an incorrect exchange rate and non-withdrawable pool liquidity,
         *batch an atomic call with [`Pallet::add_liquidity`] and
         *[`Pallet::swap_exact_tokens_for_tokens`] or [`Pallet::swap_tokens_for_exact_tokens`]
         *calls to render the liquidity withdrawable and rectify the exchange rate.
         *
         *Once liquidity is added, someone may successfully call
         *[`Pallet::swap_exact_tokens_for_tokens`] successfully.
         */
        add_liquidity: TxDescriptor<Anonymize<Iddvk596rbl31l>>;
        /**
         *Allows you to remove liquidity by providing the `lp_token_burn` tokens that will be
         *burned in the process. With the usage of `amount1_min_receive`/`amount2_min_receive`
         *it's possible to control the min amount of returned tokens you're happy with.
         */
        remove_liquidity: TxDescriptor<Anonymize<I3iap9ri572kjf>>;
        /**
         *Swap the exact amount of `asset1` into `asset2`.
         *`amount_out_min` param allows you to specify the min amount of the `asset2`
         *you're happy to receive.
         *
         *[`AssetConversionApi::quote_price_exact_tokens_for_tokens`] runtime call can be called
         *for a quote.
         */
        swap_exact_tokens_for_tokens: TxDescriptor<Anonymize<I48iqqqmt2pr38>>;
        /**
         *Swap any amount of `asset1` to get the exact amount of `asset2`.
         *`amount_in_max` param allows to specify the max amount of the `asset1`
         *you're happy to provide.
         *
         *[`AssetConversionApi::quote_price_tokens_for_exact_tokens`] runtime call can be called
         *for a quote.
         */
        swap_tokens_for_exact_tokens: TxDescriptor<Anonymize<I90ob4vr51rue4>>;
        /**
         *Touch an existing pool to fulfill prerequisites before providing liquidity, such as
         *ensuring that the pool's accounts are in place. It is typically useful when a pool
         *creator removes the pool's accounts and does not provide a liquidity. This action may
         *involve holding assets from the caller as a deposit for creating the pool's accounts.
         *
         *The origin must be Signed.
         *
         *- `asset1`: The asset ID of an existing pool with a pair (asset1, asset2).
         *- `asset2`: The asset ID of an existing pool with a pair (asset1, asset2).
         *
         *Emits `Touched` event when successful.
         */
        touch: TxDescriptor<Anonymize<I8eoqk45hnet27>>;
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<I8kbvn5rbfrikm>>;
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
    AssetTxPayment: {
        /**
         *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         *has been paid by `who` in an asset `asset_id`.
         */
        AssetTxFeePaid: PlainDescriptor<Anonymize<Iqjk6s1a2lmkt>>;
        /**
         *A swap of the refund in native currency back to asset failed.
         */
        AssetRefundFailed: PlainDescriptor<Anonymize<Icjchvrijclvlv>>;
    };
    Vesting: {
        /**
         *The amount vested has been updated. This could indicate a change in funds available.
         *The balance given is the amount which is left unvested (and thus locked).
         */
        VestingUpdated: PlainDescriptor<Anonymize<Ievr89968437gm>>;
        /**
         *An \[account\] has become fully vested.
         */
        VestingCompleted: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
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
        BatchInterrupted: PlainDescriptor<Anonymize<I49i6rmkp2gvb6>>;
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
        ItemFailed: PlainDescriptor<Anonymize<Iaagj3es2lkuco>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ibajidue483fc0>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<I9h4toth1em9je>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ibajidue483fc0>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<Ie7cuj84ohvg56>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I8ioopvokvl3ud>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I8ioopvokvl3ud>>;
    };
    Assets: {
        /**
         *Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<I88ff3u4dpivk>>;
        /**
         *Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<I33cp947glv1ks>>;
        /**
         *Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Ic9om1gmmqu7rq>>;
        /**
         *Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<I5hfov2b68ppb6>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ibthhb2m9vneds>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<Ieduc1e6frq8rb>>;
        /**
         *Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I9h6gbtabovtm4>>;
        /**
         *An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Ifnsa0dkkpf465>>;
        /**
         *Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *(Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I65dtqr2egjbc3>>;
        /**
         *An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Ibqj3vg5s5lk0c>>;
        /**
         *An `amount` was transferred in its entirety from `owner` to `destination` by
         *the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I6l73u513p8rna>>;
        /**
         *An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<Iefqmt2htu1dlu>>;
        /**
         *Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<If8bgtgqrchjtu>>;
        /**
         *Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some assets were deposited (e.g. for transaction fees).
         */
        Deposited: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
        /**
         *Some assets were withdrawn from the account (e.g. for transaction fees).
         */
        Withdrawn: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
    };
    Uniques: {
        /**
         *A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I9gqanbbbe917p>>;
        /**
         *A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Id1m1230297f7a>>;
        /**
         *A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         *An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I46h83ilqeed3g>>;
        /**
         *An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         *Some `item` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Some `item` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Some `collection` was frozen.
         */
        CollectionFrozen: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Some `collection` was thawed.
         */
        CollectionThawed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Icahse3uoi76n7>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<I75sj3uv7gnemk>>;
        /**
         *An `item` of a `collection` has been approved by the `owner` for transfer by
         *a `delegate`.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         *An approval for a `delegate` account to transfer the `item` of an item
         *`collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         *A `collection` has had its attributes changed by the `Force` origin.
         */
        ItemStatusChanged: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I9viqhmdtuof5e>>;
        /**
         *Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for an item.
         */
        MetadataSet: PlainDescriptor<Anonymize<Iceq9fmmp9aeqv>>;
        /**
         *Metadata has been cleared for an item.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *Metadata has been cleared for an item.
         */
        Redeposited: PlainDescriptor<Anonymize<I2gr1toekv86b9>>;
        /**
         *New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I5tvvgui05tn6e>>;
        /**
         *Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<Ibal0joadvdc2h>>;
        /**
         *Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<I2v2ikqt2trp52>>;
        /**
         *Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *The price was set for the instance.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<If3057hi1g5qlo>>;
        /**
         *The price for the instance was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<Iaii5qf41d5n3d>>;
    };
    Nfts: {
        /**
         *A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I9gqanbbbe917p>>;
        /**
         *A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Id1m1230297f7a>>;
        /**
         *A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         *An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I46h83ilqeed3g>>;
        /**
         *An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         *An `item` became non-transferable.
         */
        ItemTransferLocked: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *An `item` became transferable.
         */
        ItemTransferUnlocked: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *`item` metadata or attributes were locked.
         */
        ItemPropertiesLocked: PlainDescriptor<Anonymize<I1jj31tn29ie3c>>;
        /**
         *Some `collection` was locked.
         */
        CollectionLocked: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Icahse3uoi76n7>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ico8bnjc6taa27>>;
        /**
         *An `item` of a `collection` has been approved by the `owner` for transfer by
         *a `delegate`.
         */
        TransferApproved: PlainDescriptor<Anonymize<I78i1bvlonei69>>;
        /**
         *An approval for a `delegate` account to transfer the `item` of an item
         *`collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I5fjkvcb5vr6nb>>;
        /**
         *All approvals of an item got cancelled.
         */
        AllApprovalsCancelled: PlainDescriptor<Anonymize<Ifvb1p5munhhv4>>;
        /**
         *A `collection` has had its config changed by the `Force` origin.
         */
        CollectionConfigChanged: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I78u60nqh0etah>>;
        /**
         *Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *New metadata has been set for an item.
         */
        ItemMetadataSet: PlainDescriptor<Anonymize<Icrkms46uh8tpb>>;
        /**
         *Metadata has been cleared for an item.
         */
        ItemMetadataCleared: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *The deposit for a set of `item`s within a `collection` has been updated.
         */
        Redeposited: PlainDescriptor<Anonymize<I2gr1toekv86b9>>;
        /**
         *New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I5llu6o6a0go5i>>;
        /**
         *Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<I93r2effh7od84>>;
        /**
         *A new approval to modify item attributes was added.
         */
        ItemAttributesApprovalAdded: PlainDescriptor<Anonymize<I9i1f9mrso1hmf>>;
        /**
         *A new approval to modify item attributes was removed.
         */
        ItemAttributesApprovalRemoved: PlainDescriptor<Anonymize<I9i1f9mrso1hmf>>;
        /**
         *Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<I2v2ikqt2trp52>>;
        /**
         *Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *Mint settings for a collection had changed.
         */
        CollectionMintSettingsUpdated: PlainDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *Event gets emitted when the `NextCollectionId` gets incremented.
         */
        NextCollectionIdIncremented: PlainDescriptor<Anonymize<I9ksla2si91s56>>;
        /**
         *The price was set for the item.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<If3057hi1g5qlo>>;
        /**
         *The price for the item was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<Iaii5qf41d5n3d>>;
        /**
         *A tip was sent.
         */
        TipSent: PlainDescriptor<Anonymize<Id9j7b85otvjru>>;
        /**
         *An `item` swap intent was created.
         */
        SwapCreated: PlainDescriptor<Anonymize<Iaihk9pek2ajl9>>;
        /**
         *The swap was cancelled.
         */
        SwapCancelled: PlainDescriptor<Anonymize<Iaihk9pek2ajl9>>;
        /**
         *The swap has been claimed.
         */
        SwapClaimed: PlainDescriptor<Anonymize<Id9av23h47ufb2>>;
        /**
         *New attributes have been set for an `item` of the `collection`.
         */
        PreSignedAttributesSet: PlainDescriptor<Anonymize<Ib4kpnijas4jqp>>;
        /**
         *A new attribute in the `Pallet` namespace was set for the `collection` or an `item`
         *within that `collection`.
         */
        PalletAttributeSet: PlainDescriptor<Anonymize<I2vnu5k0u1i65h>>;
    };
    ForeignAssets: {
        /**
         *Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<I36h211fbvstks>>;
        /**
         *Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<I2k9iu40qhp841>>;
        /**
         *Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<I3dufa2gr145hf>>;
        /**
         *Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<Ie66s9cr50m7sr>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<I3msvtljqnu799>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<I467a79vcdbrec>>;
        /**
         *Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<Ia8imt144v3n25>>;
        /**
         *Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<Ia8imt144v3n25>>;
        /**
         *Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<I1mmtcsmkng8nj>>;
        /**
         *Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I30qmuqbs4i8i4>>;
        /**
         *An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<I467a79vcdbrec>>;
        /**
         *New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Iarmm62t3lm37e>>;
        /**
         *Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *(Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I9nm7qticlhmgl>>;
        /**
         *An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Iev4iv86ng02ck>>;
        /**
         *An `amount` was transferred in its entirety from `owner` to `destination` by
         *the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I5s8p7gejoudvh>>;
        /**
         *An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<I35uvf5ij009e8>>;
        /**
         *The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<If4jtj68r1gabq>>;
        /**
         *Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<I8s66oebjsgqga>>;
        /**
         *Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<Ia8imt144v3n25>>;
        /**
         *Some assets were deposited (e.g. for transaction fees).
         */
        Deposited: PlainDescriptor<Anonymize<I42gee3b9iotl3>>;
        /**
         *Some assets were withdrawn from the account (e.g. for transaction fees).
         */
        Withdrawn: PlainDescriptor<Anonymize<I42gee3b9iotl3>>;
    };
    NftFractionalization: {
        /**
         *An NFT was successfully fractionalized.
         */
        NftFractionalized: PlainDescriptor<Anonymize<Ib67harsthtcvr>>;
        /**
         *An NFT was successfully returned back.
         */
        NftUnified: PlainDescriptor<Anonymize<Ic7ok3lq0728f7>>;
    };
    PoolAssets: {
        /**
         *Some asset class was created.
         */
        Created: PlainDescriptor<Anonymize<I88ff3u4dpivk>>;
        /**
         *Some assets were issued.
         */
        Issued: PlainDescriptor<Anonymize<I33cp947glv1ks>>;
        /**
         *Some assets were transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Ic9om1gmmqu7rq>>;
        /**
         *Some assets were destroyed.
         */
        Burned: PlainDescriptor<Anonymize<I5hfov2b68ppb6>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<Ibthhb2m9vneds>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *Some account `who` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some account `who` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some asset `asset_id` was frozen.
         */
        AssetFrozen: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset `asset_id` was thawed.
         */
        AssetThawed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Accounts were destroyed for given asset.
         */
        AccountsDestroyed: PlainDescriptor<Anonymize<Ieduc1e6frq8rb>>;
        /**
         *Approvals were destroyed for given asset.
         */
        ApprovalsDestroyed: PlainDescriptor<Anonymize<I9h6gbtabovtm4>>;
        /**
         *An asset class is in the process of being destroyed.
         */
        DestructionStarted: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *An asset class was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Some asset class was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<Iaitn5bqfacj7k>>;
        /**
         *New metadata has been set for an asset.
         */
        MetadataSet: PlainDescriptor<Anonymize<Ifnsa0dkkpf465>>;
        /**
         *Metadata has been cleared for an asset.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *(Additional) funds have been approved for transfer to a destination account.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I65dtqr2egjbc3>>;
        /**
         *An approval for account `delegate` was cancelled by `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<Ibqj3vg5s5lk0c>>;
        /**
         *An `amount` was transferred in its entirety from `owner` to `destination` by
         *the approved `delegate`.
         */
        TransferredApproved: PlainDescriptor<Anonymize<I6l73u513p8rna>>;
        /**
         *An asset has had its attributes changed by the `Force` origin.
         */
        AssetStatusChanged: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *The min_balance of an asset has been updated by the asset owner.
         */
        AssetMinBalanceChanged: PlainDescriptor<Anonymize<Iefqmt2htu1dlu>>;
        /**
         *Some account `who` was created with a deposit from `depositor`.
         */
        Touched: PlainDescriptor<Anonymize<If8bgtgqrchjtu>>;
        /**
         *Some account `who` was blocked.
         */
        Blocked: PlainDescriptor<Anonymize<If4ebvclj2ugvi>>;
        /**
         *Some assets were deposited (e.g. for transaction fees).
         */
        Deposited: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
        /**
         *Some assets were withdrawn from the account (e.g. for transaction fees).
         */
        Withdrawn: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
    };
    AssetConversion: {
        /**
         *A successful call of the `CreatePool` extrinsic will create this event.
         */
        PoolCreated: PlainDescriptor<Anonymize<I9eo7u28un09g0>>;
        /**
         *A successful call of the `AddLiquidity` extrinsic will create this event.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<I99d21a0mjv4oo>>;
        /**
         *A successful call of the `RemoveLiquidity` extrinsic will create this event.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<I6l4cdn6bhfq84>>;
        /**
         *Assets have been converted from one to another. Both `SwapExactTokenForToken`
         *and `SwapTokenForExactToken` will generate this event.
         */
        SwapExecuted: PlainDescriptor<Anonymize<Iduk3pajm13p5c>>;
        /**
         *Assets have been converted from one to another.
         */
        SwapCreditExecuted: PlainDescriptor<Anonymize<I9cgel74dg00ig>>;
        /**
         *Pool has been touched in order to fulfill operational requirements.
         */
        Touched: PlainDescriptor<Anonymize<Ibkbs6pj6cn1hv>>;
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
    Vesting: {
        /**
         *The account given is not vesting.
         */
        NotVesting: PlainDescriptor<undefined>;
        /**
         *The account already has `MaxVestingSchedules` count of schedules and thus
         *cannot add another one. Consider merging existing schedules in order to add another.
         */
        AtMaxVestingSchedules: PlainDescriptor<undefined>;
        /**
         *Amount being transferred is too low to create a vesting schedule.
         */
        AmountLow: PlainDescriptor<undefined>;
        /**
         *An index was out of bounds of the vesting schedules.
         */
        ScheduleIndexOutOfBounds: PlainDescriptor<undefined>;
        /**
         *Failed to create a new schedule because some parameter was invalid.
         */
        InvalidScheduleParams: PlainDescriptor<undefined>;
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
    Assets: {
        /**
         *Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         *The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         *The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         *The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         *Unable to increment the consumer reference counters on the account. Either no provider
         *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         *fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         *Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         *The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         *The asset is a live asset and is actively being used. Usually emit for operations such
         *as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         *The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         *The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         *The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         *Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
        /**
         *The asset ID must be equal to the [`NextAssetId`].
         */
        BadAssetId: PlainDescriptor<undefined>;
    };
    Uniques: {
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownCollection: PlainDescriptor<undefined>;
        /**
         *The item ID has already been used for an item.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The owner turned out to be different to what was expected.
         */
        WrongOwner: PlainDescriptor<undefined>;
        /**
         *Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *The item ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *The item or collection is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         *The delegate turned out to be different to what was expected.
         */
        WrongDelegate: PlainDescriptor<undefined>;
        /**
         *There is no delegate approved.
         */
        NoDelegate: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The named owner has not signed ownership of the collection is acceptable.
         */
        Unaccepted: PlainDescriptor<undefined>;
        /**
         *The item is locked.
         */
        Locked: PlainDescriptor<undefined>;
        /**
         *All items have been minted.
         */
        MaxSupplyReached: PlainDescriptor<undefined>;
        /**
         *The max supply has already been set.
         */
        MaxSupplyAlreadySet: PlainDescriptor<undefined>;
        /**
         *The provided max supply is less to the amount of items a collection already has.
         */
        MaxSupplyTooSmall: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         *Item is not for sale.
         */
        NotForSale: PlainDescriptor<undefined>;
        /**
         *The provided bid is too low.
         */
        BidTooLow: PlainDescriptor<undefined>;
    };
    Nfts: {
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownCollection: PlainDescriptor<undefined>;
        /**
         *The item ID has already been used for an item.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The approval had a deadline that expired, so the approval isn't valid anymore.
         */
        ApprovalExpired: PlainDescriptor<undefined>;
        /**
         *The owner turned out to be different to what was expected.
         */
        WrongOwner: PlainDescriptor<undefined>;
        /**
         *The witness data given does not match the current state of the chain.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Collection ID is already taken.
         */
        CollectionIdInUse: PlainDescriptor<undefined>;
        /**
         *Items within that collection are non-transferable.
         */
        ItemsNonTransferable: PlainDescriptor<undefined>;
        /**
         *The provided account is not a delegate.
         */
        NotDelegate: PlainDescriptor<undefined>;
        /**
         *The delegate turned out to be different to what was expected.
         */
        WrongDelegate: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The named owner has not signed ownership acceptance of the collection.
         */
        Unaccepted: PlainDescriptor<undefined>;
        /**
         *The item is locked (non-transferable).
         */
        ItemLocked: PlainDescriptor<undefined>;
        /**
         *Item's attributes are locked.
         */
        LockedItemAttributes: PlainDescriptor<undefined>;
        /**
         *Collection's attributes are locked.
         */
        LockedCollectionAttributes: PlainDescriptor<undefined>;
        /**
         *Item's metadata is locked.
         */
        LockedItemMetadata: PlainDescriptor<undefined>;
        /**
         *Collection's metadata is locked.
         */
        LockedCollectionMetadata: PlainDescriptor<undefined>;
        /**
         *All items have been minted.
         */
        MaxSupplyReached: PlainDescriptor<undefined>;
        /**
         *The max supply is locked and can't be changed.
         */
        MaxSupplyLocked: PlainDescriptor<undefined>;
        /**
         *The provided max supply is less than the number of items a collection already has.
         */
        MaxSupplyTooSmall: PlainDescriptor<undefined>;
        /**
         *The given item ID is unknown.
         */
        UnknownItem: PlainDescriptor<undefined>;
        /**
         *Swap doesn't exist.
         */
        UnknownSwap: PlainDescriptor<undefined>;
        /**
         *The given item has no metadata set.
         */
        MetadataNotFound: PlainDescriptor<undefined>;
        /**
         *The provided attribute can't be found.
         */
        AttributeNotFound: PlainDescriptor<undefined>;
        /**
         *Item is not for sale.
         */
        NotForSale: PlainDescriptor<undefined>;
        /**
         *The provided bid is too low.
         */
        BidTooLow: PlainDescriptor<undefined>;
        /**
         *The item has reached its approval limit.
         */
        ReachedApprovalLimit: PlainDescriptor<undefined>;
        /**
         *The deadline has already expired.
         */
        DeadlineExpired: PlainDescriptor<undefined>;
        /**
         *The duration provided should be less than or equal to `MaxDeadlineDuration`.
         */
        WrongDuration: PlainDescriptor<undefined>;
        /**
         *The method is disabled by system settings.
         */
        MethodDisabled: PlainDescriptor<undefined>;
        /**
         *The provided setting can't be set.
         */
        WrongSetting: PlainDescriptor<undefined>;
        /**
         *Item's config already exists and should be equal to the provided one.
         */
        InconsistentItemConfig: PlainDescriptor<undefined>;
        /**
         *Config for a collection or an item can't be found.
         */
        NoConfig: PlainDescriptor<undefined>;
        /**
         *Some roles were not cleared.
         */
        RolesNotCleared: PlainDescriptor<undefined>;
        /**
         *Mint has not started yet.
         */
        MintNotStarted: PlainDescriptor<undefined>;
        /**
         *Mint has already ended.
         */
        MintEnded: PlainDescriptor<undefined>;
        /**
         *The provided Item was already used for claiming.
         */
        AlreadyClaimed: PlainDescriptor<undefined>;
        /**
         *The provided data is incorrect.
         */
        IncorrectData: PlainDescriptor<undefined>;
        /**
         *The extrinsic was sent by the wrong origin.
         */
        WrongOrigin: PlainDescriptor<undefined>;
        /**
         *The provided signature is incorrect.
         */
        WrongSignature: PlainDescriptor<undefined>;
        /**
         *The provided metadata might be too long.
         */
        IncorrectMetadata: PlainDescriptor<undefined>;
        /**
         *Can't set more attributes per one call.
         */
        MaxAttributesLimitReached: PlainDescriptor<undefined>;
        /**
         *The provided namespace isn't supported in this call.
         */
        WrongNamespace: PlainDescriptor<undefined>;
        /**
         *Can't delete non-empty collections.
         */
        CollectionNotEmpty: PlainDescriptor<undefined>;
        /**
         *The witness data should be provided.
         */
        WitnessRequired: PlainDescriptor<undefined>;
    };
    ForeignAssets: {
        /**
         *Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         *The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         *The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         *The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         *Unable to increment the consumer reference counters on the account. Either no provider
         *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         *fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         *Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         *The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         *The asset is a live asset and is actively being used. Usually emit for operations such
         *as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         *The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         *The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         *The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         *Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
        /**
         *The asset ID must be equal to the [`NextAssetId`].
         */
        BadAssetId: PlainDescriptor<undefined>;
    };
    NftFractionalization: {
        /**
         *Asset ID does not correspond to locked NFT.
         */
        IncorrectAssetId: PlainDescriptor<undefined>;
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *NFT doesn't exist.
         */
        NftNotFound: PlainDescriptor<undefined>;
        /**
         *NFT has not yet been fractionalised.
         */
        NftNotFractionalized: PlainDescriptor<undefined>;
    };
    PoolAssets: {
        /**
         *Account balance must be greater than or equal to the transfer amount.
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         *The account to alter does not exist.
         */
        NoAccount: PlainDescriptor<undefined>;
        /**
         *The signing account has no permission to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The given asset ID is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         *The origin account is frozen.
         */
        Frozen: PlainDescriptor<undefined>;
        /**
         *The asset ID is already taken.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *Invalid witness data given.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Minimum balance should be non-zero.
         */
        MinBalanceZero: PlainDescriptor<undefined>;
        /**
         *Unable to increment the consumer reference counters on the account. Either no provider
         *reference exists to allow a non-zero balance of a non-self-sufficient asset, or one
         *fewer then the maximum number of consumers has been reached.
         */
        UnavailableConsumer: PlainDescriptor<undefined>;
        /**
         *Invalid metadata given.
         */
        BadMetadata: PlainDescriptor<undefined>;
        /**
         *No approval exists that would allow the transfer.
         */
        Unapproved: PlainDescriptor<undefined>;
        /**
         *The source account would not survive the transfer and it needs to stay alive.
         */
        WouldDie: PlainDescriptor<undefined>;
        /**
         *The asset-account already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *The asset-account doesn't have an associated deposit.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The operation would result in funds being burned.
         */
        WouldBurn: PlainDescriptor<undefined>;
        /**
         *The asset is a live asset and is actively being used. Usually emit for operations such
         *as `start_destroy` which require the asset to be in a destroying state.
         */
        LiveAsset: PlainDescriptor<undefined>;
        /**
         *The asset is not live, and likely being destroyed.
         */
        AssetNotLive: PlainDescriptor<undefined>;
        /**
         *The asset status is not the expected status.
         */
        IncorrectStatus: PlainDescriptor<undefined>;
        /**
         *The asset should be frozen before the given operation.
         */
        NotFrozen: PlainDescriptor<undefined>;
        /**
         *Callback action resulted in error
         */
        CallbackFailed: PlainDescriptor<undefined>;
        /**
         *The asset ID must be equal to the [`NextAssetId`].
         */
        BadAssetId: PlainDescriptor<undefined>;
    };
    AssetConversion: {
        /**
         *Provided asset pair is not supported for pool.
         */
        InvalidAssetPair: PlainDescriptor<undefined>;
        /**
         *Pool already exists.
         */
        PoolExists: PlainDescriptor<undefined>;
        /**
         *Desired amount can't be zero.
         */
        WrongDesiredAmount: PlainDescriptor<undefined>;
        /**
         *Provided amount should be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        AmountOneLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Provided amount should be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        AmountTwoLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Reserve needs to always be greater than or equal to the existential deposit/asset's
         *minimal amount.
         */
        ReserveLeftLessThanMinimal: PlainDescriptor<undefined>;
        /**
         *Desired amount can't be equal to the pool reserve.
         */
        AmountOutTooHigh: PlainDescriptor<undefined>;
        /**
         *The pool doesn't exist.
         */
        PoolNotFound: PlainDescriptor<undefined>;
        /**
         *An overflow happened.
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the first token in the pair wasn't met.
         */
        AssetOneDepositDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the second token in the pair wasn't met.
         */
        AssetTwoDepositDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the first token in the pair wasn't met.
         */
        AssetOneWithdrawalDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *The minimal amount requirement for the second token in the pair wasn't met.
         */
        AssetTwoWithdrawalDidNotMeetMinimum: PlainDescriptor<undefined>;
        /**
         *Optimal calculated amount is less than desired.
         */
        OptimalAmountLessThanDesired: PlainDescriptor<undefined>;
        /**
         *Insufficient liquidity minted.
         */
        InsufficientLiquidityMinted: PlainDescriptor<undefined>;
        /**
         *Requested liquidity can't be zero.
         */
        ZeroLiquidity: PlainDescriptor<undefined>;
        /**
         *Amount can't be zero.
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *Calculated amount out is less than provided minimum amount.
         */
        ProvidedMinimumNotSufficientForSwap: PlainDescriptor<undefined>;
        /**
         *Provided maximum amount is not sufficient for swap.
         */
        ProvidedMaximumNotSufficientForSwap: PlainDescriptor<undefined>;
        /**
         *The provided path must consists of 2 assets at least.
         */
        InvalidPath: PlainDescriptor<undefined>;
        /**
         *The provided path must consists of unique assets.
         */
        NonUniquePath: PlainDescriptor<undefined>;
        /**
         *It was not possible to get or increment the Id of the pool.
         */
        IncorrectPoolAssetId: PlainDescriptor<undefined>;
        /**
         *The destination account cannot exist with the swapped funds.
         */
        BelowMinimum: PlainDescriptor<undefined>;
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
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
        /**
        
         */
        MaxVestingSchedules: PlainDescriptor<number>;
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
    Assets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    Uniques: {
        /**
         * The basic amount of funds that must be reserved for collection.
         */
        CollectionDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved for an item.
         */
        ItemDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your item.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding an attribute to an item.
         */
        AttributeDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes store in metadata,
         * either "normal" metadata or attribute metadata.
         */
        DepositPerByte: PlainDescriptor<bigint>;
        /**
         * The maximum length of data stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
    };
    Nfts: {
        /**
         * The basic amount of funds that must be reserved for collection.
         */
        CollectionDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved for an item.
         */
        ItemDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your item.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding an attribute to an item.
         */
        AttributeDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes store in metadata,
         * either "normal" metadata or attribute metadata.
         */
        DepositPerByte: PlainDescriptor<bigint>;
        /**
         * The maximum length of data stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute key.
         */
        KeyLimit: PlainDescriptor<number>;
        /**
         * The maximum length of an attribute value.
         */
        ValueLimit: PlainDescriptor<number>;
        /**
         * The maximum approvals an item could have.
         */
        ApprovalsLimit: PlainDescriptor<number>;
        /**
         * The maximum attributes approvals an item could have.
         */
        ItemAttributesApprovalsLimit: PlainDescriptor<number>;
        /**
         * The max number of tips a user could send.
         */
        MaxTips: PlainDescriptor<number>;
        /**
         * The max duration in blocks for deadlines.
         */
        MaxDeadlineDuration: PlainDescriptor<number>;
        /**
         * The max number of attributes a user could set per call.
         */
        MaxAttributesPerCall: PlainDescriptor<number>;
        /**
         * Disables some of pallet's features.
         */
        Features: PlainDescriptor<bigint>;
    };
    ForeignAssets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    NftFractionalization: {
        /**
         * The deposit paid by the user locking an NFT. The deposit is returned to the original NFT
         * owner when the asset is unified and the NFT is unlocked.
         */
        Deposit: PlainDescriptor<bigint>;
        /**
         * The pallet's id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The newly created asset's symbol.
         */
        NewAssetSymbol: PlainDescriptor<Binary>;
        /**
         * The newly created asset's name.
         */
        NewAssetName: PlainDescriptor<Binary>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    PoolAssets: {
        /**
         * Max number of items to destroy per `destroy_accounts` and `destroy_approvals` call.
         *
         * Must be configured to result in a weight that makes each call fit in a block.
         */
        RemoveItemsLimit: PlainDescriptor<number>;
        /**
         * The basic amount of funds that must be reserved for an asset.
         */
        AssetDeposit: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved for a non-provider asset account to be
         * maintained.
         */
        AssetAccountDeposit: PlainDescriptor<bigint>;
        /**
         * The basic amount of funds that must be reserved when adding metadata to your asset.
         */
        MetadataDepositBase: PlainDescriptor<bigint>;
        /**
         * The additional funds that must be reserved for the number of bytes you store in your
         * metadata.
         */
        MetadataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The amount of funds that must be reserved when creating a new approval.
         */
        ApprovalDeposit: PlainDescriptor<bigint>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    AssetConversion: {
        /**
         * A % the liquidity providers will take of every swap. Represents 10ths of a percent.
         */
        LPFee: PlainDescriptor<number>;
        /**
         * A one-time fee to setup the pool.
         */
        PoolSetupFee: PlainDescriptor<bigint>;
        /**
         * Asset class from [`Config::Assets`] used to pay the [`Config::PoolSetupFee`].
         */
        PoolSetupFeeAsset: PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
        /**
         * A fee to withdraw the liquidity.
         */
        LiquidityWithdrawalFee: PlainDescriptor<number>;
        /**
         * The minimum LP token amount that could be minted. Ameliorates rounding errors.
         */
        MintMinLiquidity: PlainDescriptor<bigint>;
        /**
         * The max number of hops in a swap.
         */
        MaxSwapPathLength: PlainDescriptor<number>;
        /**
         * The pallet's id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I56sv83honje13>>;
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
     * This runtime api allows people to query the size of the liquidity pools
     * and quote prices for swaps.
     */
    AssetConversionApi: {
        /**
         * Provides a quote for [`Pallet::swap_tokens_for_exact_tokens`].
         *
         * Note that the price may have changed by the time the transaction is executed.
         * (Use `amount_in_max` to control slippage.)
         */
        quote_price_tokens_for_exact_tokens: RuntimeDescriptor<[asset1: Anonymize<I4c0s5cioidn76>, asset2: Anonymize<I4c0s5cioidn76>, amount: bigint, include_fee: boolean], Anonymize<I35p85j063s0il>>;
        /**
         * Provides a quote for [`Pallet::swap_exact_tokens_for_tokens`].
         *
         * Note that the price may have changed by the time the transaction is executed.
         * (Use `amount_out_min` to control slippage.)
         */
        quote_price_exact_tokens_for_tokens: RuntimeDescriptor<[asset1: Anonymize<I4c0s5cioidn76>, asset2: Anonymize<I4c0s5cioidn76>, amount: bigint, include_fee: boolean], Anonymize<I35p85j063s0il>>;
        /**
         * Returns the size of the liquidity pool for the given asset pair.
         */
        get_reserves: RuntimeDescriptor<[asset1: Anonymize<I4c0s5cioidn76>, asset2: Anonymize<I4c0s5cioidn76>], Anonymize<I5vv5n03oo8gas>>;
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
        query_call_info: RuntimeDescriptor<[call: Anonymize<Id47ece6fiiom0>, len: number], Anonymize<I6spmpef2c7svf>>;
        /**
         * Query fee details of a given encoded `Call`.
         */
        query_call_fee_details: RuntimeDescriptor<[call: Anonymize<Id47ece6fiiom0>, len: number], Anonymize<Iei2mvq0mjvt81>>;
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
        dry_run_call: RuntimeDescriptor<[origin: Anonymize<I48v5riethqckl>, call: Anonymize<Id47ece6fiiom0>], Anonymize<If9gsu4ujg5rjd>>;
        /**
         * Dry run XCM program
         */
        dry_run_xcm: RuntimeDescriptor<[origin_location: XcmVersionedLocation, xcm: XcmVersionedXcm], Anonymize<I1d8rh8ql0shan>>;
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
     * The API for querying account's balances from runtime.
     */
    FungiblesApi: {
        /**
         * Returns the list of all [`Asset`] that an `AccountId` has.
         */
        query_account_balances: RuntimeDescriptor<[account: SS58String], Anonymize<I93k1anhb5gs2q>>;
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
         * exists. Returned `Vec<u8>` contains bytes of JSON blob (patch) which comprises a list of
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
type IAsset = PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
export type KsmAssetHubDispatchError = Anonymize<I768s0j7i6e52>;
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
export type KsmAssetHubQueries = QueryFromPalletsDef<PalletsTypedef>;
export type KsmAssetHubCalls = TxFromPalletsDef<PalletsTypedef>;
export type KsmAssetHubEvents = EventsFromPalletsDef<PalletsTypedef>;
export type KsmAssetHubErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type KsmAssetHubConstants = ConstFromPalletsDef<PalletsTypedef>;
export type KsmAssetHubCallData = Anonymize<Id47ece6fiiom0> & {
    value: {
        type: string;
    };
};
export type KsmAssetHubWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
