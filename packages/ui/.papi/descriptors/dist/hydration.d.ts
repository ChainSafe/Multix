import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, Idabjiaorrflgu, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, I3oiqtmlj7klbr, I9bin2jc70qt6q, TransactionPaymentReleases, Iegmj7n48sc3am, Icgljjb6j82uhn, Ie9j1itogtv7p5, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, I1evsr8hplu1lg, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, I6ouflveob4eli, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, I8nj9dlo7lnbb3, Iba9inugg1atvo, Ib23vkkc52tqbu, Ic5m5lp1oioo8r, I9l5thhgutrdl0, I99bb69usss9gs, Ia2lhg7l2hilo3, I8fkfedbgu1sn3, Iegjdtqhbb6qh9, I9p9lq3rej5bhc, Iag146hmjgqfgj, I8uo3fpd3bcc6f, Ianufjuplcj6u4, Ic3orq32is6lrl, I95l2k9b1re95f, I2mv9dvsaj3kcr, I200n1ov5tbcvr, I7781vnk0rm9eq, Ie2iqtdb0stqo1, I974uplh4fafs4, Ic9nev69d8grv1, If354jrdedj0pj, Ib17t3992hb64n, I215mkl885p4da, I52nkon7v46cta, I4c0s5cioidn76, Isibf8mrredhc, I8ikpj86u2na1q, I23jd67h2erm49, Icbsch55a85u5u, Idkbvh6dahk1v7, I5ugnv0dol8v8t, I1ksaufim9dq1c, Ielgh4t8o7rcvt, I3rvqhkck00laj, I9jd27rnpm8ttv, I7bcpl5g2rcql5, I4vdvk2616mp4t, Iep7au1720bm0e, I48olja7kd2ijk, I4q0p5rehstne, Iesal24fi7slt9, I4kv0johj9i346, Ibn3i0ad6beo5l, I10uqvdcdcld3o, I3fgr93o42d9hi, Ihjc2vmjfhsmq, I663kh18bno0fo, I1p5pqg6bllgtl, I4ojmnsk1dchql, Iesq88051ch8ht, I9qpa0evftgoo5, I4qc61lpfqml75, I1stghsu756nk9, Ic02kut0350gb0, I199nnq793ql30, I7jidl7qnnq87c, I82cps8ng2jtug, Ic17drnrq0rtgi, Idi27giun0mb9q, Idud3fdh64aqp9, Ie7atdsih6q14b, I4totqt881mlti, Id32h28hjj1tch, I66gvo4ilpv28i, I2u0nucph7peo9, Ibt9i4631ja7qv, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, Id0as9l3s817qs, Ifmurjhsco5svb, Ifi4da1gej1fri, Ifvgo9568rpmqc, I82jm9g7pufuel, I6cs1itejju2vv, I7dp637m60bg7s, Ifmar1ir5rft6l, I1os9h4ivict7u, Isa48262v9oqu, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, I35p85j063s0il, I9m0752cdvui5o, Ie5fbn0f5capo3, Ia9ai1mp1viqjd, Ie4gu6f3b6uctq, Iasb8k6ash5mjn, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, Idcr6u6361oad9, I1o12ibtjm10ot, I8vn14j8a40qm, I493o732nahjlr, Id5fm4p8lj5qgi, Ibmr18suc9ikh9, I4og34pg4ruv5d, I5u8olqbbvfnvf, Ic1e6uvbf8ado3, Ie7oqvfdar8r2, I6v8sm60vvkmk7, I92pum5p0t4pat, I1g5tojdtkn6tu, Icm9m0qeemu66d, Idscf6boak49q1, I6qq5nnbjegi8u, I666bl2fqjkejo, I3fmnv57d2qort, I7b7a7ip4fqnq3, Ib8d8jglhl68gd, I1rcq20gtlfvue, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, Icbccs0ug47ilf, I2kds5jji7slh8, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I93c18nim2s66c, Id6gojh30v9ib2, Ica5n28rlj0lk6, I14p0q0qs0fqbj, Ie3u4phm019a8l, I9jie72r7q6717, I3alo542n0mgp, I2rg5btjrsqec0, I21r37il499a97, Ie5l999tf7t2te, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, I2ev73t79f46tb, Iab64mce6q91i, I7ji3jng252el9, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, Iaa13icjlsj13d, I98vh5ccjtf1ev, I3al0eab2u0gt2, I7hhej9ji2h5gt, I6fuug4i4r04hi, I38jfk5li8iang, Ibg19he58hud84, Iqduq47asarsk, I2dtrijkm5601t, Ib2obgji960euh, Ie6dn4p5chsk1u, I2vi5dr4528rgv, I1pm30k3i4438u, I11c208k5k7c7p, I2e1ekg17a2uj2, I9uff8o8g5b5av, I1acluqiqlacck, Idkqesere66fs7, Ifs54vj2idl9k4, Ia1mrp1uqfh37g, Ic2scjb6ud07jn, I516qu19579v6p, Ideaemvoneh309, I3d9o9d7epp66v, I3rrsthr03bsf8, I1it6nfuocs3uo, I83qeclck631s2, I846j8gk91gp4q, I4apbr3d7b110l, I9svbf1ionsuba, I63enm20toa64c, I92ucef7ff2o7l, I88sl1jplq27bh, I2970lus2v0qct, I1vsbo63n9pu69, I3fatc2oi4mp63, I1j3v9uknthnij, I6ng2cdk1vvip6, I62ht2i39rtkaa, Ichf8eu9t3dtc2, I9e4bfe80t2int, I9oai3q0an1tbo, I90ivo9n6p6nqo, Idj9k8sn80h3m6, I64f3h3tf92u6f, Ifnmu9mlmgtdbf, I7psec5e6ghc64, I2psb0sladd863, I585tk8khua0gk, I3ut99di214ru2, Iemkp87d26vsbh, I4ahfrt5dscf6q, Ifmsv6e4cim6b1, I3nv51ps4mq7qu, I4a8hon12idk34, Ia5le7udkgbaq9, Ib2p3kr78drjc1, Ida2ijjar0n0j3, Ing3etrevsfg0, Ietsl92b11kilg, Icqdi7b9m95ug3, Ieuqv44kptstcs, I6vhvcln14dp4d, Ievca65alkkho9, I2qkf9i0e8mf1f, Iefviakco48cs2, Iakb7idgif10m8, Id7aqsj1u6b2r2, Icah19jgge5j3e, I2bi2kbaaunr13, Ian208gj7nqkdo, I81d44muu393rf, I3iojc1k1m6nu7, I9q8qmop6bko5m, Ial2ta95n8ff3b, Iammrvujtc5lnk, I87j02rt3f17j8, Iasmn3c065hq91, Ia5kd7m19ap7ge, Ieq7brqoubndin, Ie8ft8rd6cil27, I2k37dcoppgins, Ia05t9pjenemsb, I8utns9aeu3t6o, I35cf63e7kg5on, Ibq6b0nsk23kj8, I2i1tilmsb1rl1, I4l0u1h71fhj81, Iet9su1uri0qgo, I242odhgbhik24, I7o081p6vv5gqs, Ic18k1k8u5726n, I3qt1hgg4djhgb, I77a9b6eik0rui, Ics8sn0t3vlpat, I6p5nbogrodkcc, I7pgj3rnfo83eg, Ic11mlh16sngai, I4vbsn8c7ui70f, I60m5cjc6e18ab, Iauknf9up388mv, Ieh252ua9757u1, Iest0fomljvrb6, I3i06ijrvdoq97, Ibc2f5cr6dqguj, Ia6sgngioc9e, I3qhjmr9i9etho, I13ss7bvftqcnq, Ic3gahhrcopfnt, I9n7ns8k72amhv, I2co61imvsepb6, Icjk91npopm3h9, Ie03o0h06lol9p, Ie6ot1bq9o2jef, I6ap0qjh5n5817, Ionfhf9va2t31, Ibbvcet1pv1l61, I67bpqa7o2ocua, I2holodggoluon, Ib5umq5uf644jr, I9r83fr4b3rmmj, I24s4g6gkj5oec, Iapqe6jot9df6, If64i3fucaastf, Ietluscr05n0a8, Idcabvplu05lea, I2ncccle6pmhd9, I92bnd3pe0civj, Ic84i538n8bl8j, Ia8ogbeici6lip, Itmchvgqfl28g, I10hmgseei3j6r, I8p4numg1r4ojm, Idtucog650c7f8, I4kvfua9fqrpi2, I7t5blhj97u8r7, I21qpgggberqt3, Id7r4m9aulb7sn, Ielqbuofrsq2ri, Iaehj4ajaudum7, Id83ilm95if0sl, Ico8a80unk7v19, Ib9aiguc778ujf, Id8iisbt404cdq, I5n4sebgkfr760, Idfjtnp5n5am6q, Ifs1i5fk9cqvr6, I65cco11c1cc37, Ie0iohak3dljd, I60v7bikk54tpu, Ifpj261e8s63m3, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I40pqum1mu8qg3, I1r4c2ghbtvjuc, I6t8mv3ij8f6jn, Idu1ujel33jksu, I1ii8c8cvda9o5, I40fog3d0qlub1, Ibahh2k28pd3rl, Iaif2nhfhk9qc0, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, Iabgdocrka40v9, Ia82mnkmeo2rhc, I37198fc8nlna5, I855j4i3kr8ko1, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, I8tjvj9uq4b7hi, I4fooe9dun9o0t, Ier2cke86dqbr2, I1o37fpk9vgbri, I859063tfqget1, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, I8usdc6tg7829p, If5f66j638r2u7, Ibs3esn1s24jlu, Ibqj96eumlo3jb, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, Iaofef34v2445a, Ie3gphha4ejh40, I4b66js88p45m8, I50d9r8lrdga93, I27avf13g71mla, Ift6f10887nk72, I7qc53b1tvqjg2, Idb0larbt92hmf, Iak7fhrgb9jnnq, Iep7an7g10jgpc, Ierev02d74bpoa, Ic836gl3ins837, Ic3vmcebni2jj7, I2ur0oeqg495j8, I3opji3hcv2fmd, Iep27ialq4a7o7, Iasu5jvoqr43mv, I7goua51ub7klk, I5qolde99acmd1, I86naabrotue2j, I2r637rurl4t61, Iar6hlsh10hqst, I89nkv9adctj3n, I5seehdocrcoau, Ic2kg6kak0gd23, I2odpdgf7k5003, Ifmob7l1au7mdj, Iagqcb06kbevb1, Iec8defeh924b6, I6cn8fgvhihc8u, I5spr699klbpc7, Ir72g75rutn0i, I7i2rquf9o1sc4, I32ndibr4v59gl, Ichvhj93no2r9s, Ibo4guh1r2d417, I5bdik3e9dtr9m, Idml4kfacbec4q, I5po34152rrdd1, I8gu0uupiacpfc, I3qaapujidulnv, I5u2c8nrbcec0n, I193fovq1blcqu, I4qeb32vu4p1o2, Icatb69nkfsv2d, Iao3tfuiovep78, I1cq0joe6ba7us, I8p8774nu1gec7, I58kb78e8933i0, Idhf8n2m782jc6, I8qbcd8kjt9b35, I9fddbmtajbhgk, I16oglmrf6q8h2, I56vurdc4pd324, Iv3iro9hpdvcu, I725512ll00rul, Ibnohbnq46n24i, Iao268t9rbrp83, I11glevchscfbg, Ifrsdu7763lo3e, I1rcm9o2k31p0u, I90op6i3kabg2t, If7ps0a75qku2k, I4qcsbrcg45e5p, I2gupahud9i8tv, Idmv46n4bkamls, I88qo502j1hm6r, I44sqbdseede38, I203slt75ll6b5, I9buamva6m987d, I15i908ukdv01j, I3md9r9ud9jcmi, I4rlrhubptb25s, Ibb0j2hs2i32f5, Iae6luacdfosbm, Idvrgp2jjkjaee, I6q2a2o24kbh1n, Iflfus32kckdgg, I7e9lbuqrul79d, Idpc6o3gv6oduv, I789ltv1nd8rlg, I5nm6uebbrcvd2, I1966f4idd9els, I8hof8vbjel5j0, Ic20as3skakdjb, Ieg2h8ei7d5hi, I8c5lgkcpg07sj, Ieas3thfe5cojl, I82vqlr4shhaso, I2age4ibb0qdmq, I4do2q74i35m, Iehf2srrsvlrt4, I1a3321bv4rsn2, Ibmagsilt697o6, I73g6utvpcmklb, I4uo49pmivhb33, Ifmc9boeeia623, Iea4g5ovhnolus, I8363i1h1dgh0n, Ibqjgs3foip9fb, I4o7otrppfgqfl, I4h1hamhsvt02v, Ibil4nv30gc4gi, I2k8785n6tr14a, I1mm5epgr01rv3, Ia4163nej70ub3, Iec641q1s1ifm2, I4rrqp6atse8pe, I17mdck5880djt, I140nraqvlukpk, Irs8utdvl0ftp, Iened6fgpg1iel, Iumh462jqskl8, If2udmk8jhl6id, Id17a14lhd6e8s, Ienusoeb625ftq, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I137t1cld92pod, I3vs6qhrit34fa, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, Id3ajno3thjgec, Ic04t5m0ihvrp5, I7id9rd759h17f, I39t01nnod9109, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, Ibplkiqg5rvr3e, Icnmrtlo128skq, Icojqvn3afk41n, Iaqet9jc3ihboe, Ic952bubvq4k7d, Iabpgqcjikia83, Ib415e5slg7dos, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, Ic1d4u2opv3fst, I6spmpef2c7svf, Iei2mvq0mjvt81, If08sfhqn8ujfr, Ic4rgfgksgmm3e, I3dj14b7k3rkm5, I6ef6bgpp6bbav, I9nuef6i0lkkf8, Ifogockjiq4b3, I2r0n4gcrs974b, Ie6kgk6f04rsvk, Ibkook56hopvp8, I1fl9qh2r1hf29, I4arjljr6dpflb, I45rl58hfs7m0h, I6fr2mqud652ga, Ihfphjolmsqq1, Ie9sr1iqcg3cgm, I34p6lklavdpe2 } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<Idabjiaorrflgu>, false>;
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
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<I3oiqtmlj7klbr>, false>;
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
    MultiTransactionPayment: {
        /**
         * Account currency map
         */
        AccountCurrencyMap: StorageDescriptor<[Key: SS58String], number, true>;
        /**
         * Curated list of currencies which fees can be paid mapped to corresponding fallback price
         */
        AcceptedCurrencies: StorageDescriptor<[Key: number], bigint, true>;
        /**
         * Asset prices from the spot price provider or the fallback price if the price is not available. Updated at the beginning of every block.
         */
        AcceptedCurrencyPrice: StorageDescriptor<[Key: number], bigint, true>;
        /**
        
         */
        TransactionCurrencyOverride: StorageDescriptor<[Key: SS58String], number, true>;
    };
    Treasury: {
        /**
         * Number of proposals that have been made.
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
         * Proposals that have been made.
         */
        Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true>;
        /**
         * The amount which has been reported as inactive to Currency.
         */
        Deactivated: StorageDescriptor<[], bigint, false>;
        /**
         * Proposal indices that have been approved but not yet awarded.
         */
        Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
         * The count of spends that have been made.
         */
        SpendCount: StorageDescriptor<[], number, false>;
        /**
         * Spends that have been approved and being processed.
         */
        Spends: StorageDescriptor<[Key: number], Anonymize<Ie9j1itogtv7p5>, true>;
    };
    Preimage: {
        /**
         * The request status of a given hash.
         */
        StatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageOldRequestStatus, true>;
        /**
         * The request status of a given hash.
         */
        RequestStatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageRequestStatus, true>;
        /**
        
         */
        PreimageFor: StorageDescriptor<[Key: Anonymize<I4pact7n2e9a0i>], Binary, true>;
    };
    Identity: {
        /**
         * Information that is pertinent to identify the entity behind an account. First item is the
         * registration, second is the account's primary username.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        IdentityOf: StorageDescriptor<[Key: SS58String], Anonymize<I1evsr8hplu1lg>, true>;
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
    Democracy: {
        /**
         * The number of (public) proposals that have been made so far.
         */
        PublicPropCount: StorageDescriptor<[], number, false>;
        /**
         * The public proposals. Unsorted. The second item is the proposal.
         */
        PublicProps: StorageDescriptor<[], Anonymize<I6mhebgj62g585>, false>;
        /**
         * Those who have locked a deposit.
         *
         * TWOX-NOTE: Safe, as increasing integer keys are safe.
         */
        DepositOf: StorageDescriptor<[Key: number], Anonymize<I3vhcedhm4hpvm>, true>;
        /**
         * The next free referendum index, aka the number of referenda started so far.
         */
        ReferendumCount: StorageDescriptor<[], number, false>;
        /**
         * The lowest referendum index representing an unbaked referendum. Equal to
         * `ReferendumCount` if there isn't a unbaked referendum.
         */
        LowestUnbaked: StorageDescriptor<[], number, false>;
        /**
         * Information concerning any given referendum.
         *
         * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
         */
        ReferendumInfoOf: StorageDescriptor<[Key: number], Anonymize<I526daka7j7b17>, true>;
        /**
         * All votes for a particular voter. We store the balance for the number of votes that we
         * have recorded. The second item is the total amount of delegations, that will be added.
         *
         * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
         */
        VotingOf: StorageDescriptor<[Key: SS58String], Anonymize<Ifanv2kvm586s4>, false>;
        /**
         * True if the last referendum tabled was submitted externally. False if it was a public
         * proposal.
         */
        LastTabledWasExternal: StorageDescriptor<[], boolean, false>;
        /**
         * The referendum to be tabled whenever it would be valid to table an external proposal.
         * This happens when a referendum needs to be tabled and one of two conditions are met:
         * - `LastTabledWasExternal` is `false`; or
         * - `PublicProps` is empty.
         */
        NextExternal: StorageDescriptor<[], Anonymize<I5rsgtofmn5lli>, true>;
        /**
         * A record of who vetoed what. Maps proposal hash to a possible existent block number
         * (until when it may not be resubmitted) and who vetoed it.
         */
        Blacklist: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Idned7t7knml6b>, true>;
        /**
         * Record of all proposals that have been subject to emergency cancellation.
         */
        Cancellations: StorageDescriptor<[Key: FixedSizeBinary<32>], boolean, false>;
        /**
         * General information concerning any proposal or referendum.
         * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         */
        MetadataOf: StorageDescriptor<[Key: Anonymize<I2itl2k1j2q8nf>], FixedSizeBinary<32>, true>;
    };
    Elections: {
        /**
         * The current elected members.
         *
         * Invariant: Always sorted based on account id.
         */
        Members: StorageDescriptor<[], Anonymize<I8nj9dlo7lnbb3>, false>;
        /**
         * The current reserved runners-up.
         *
         * Invariant: Always sorted based on rank (worse to best). Upon removal of a member, the
         * last (i.e. _best_) runner-up will be replaced.
         */
        RunnersUp: StorageDescriptor<[], Anonymize<I8nj9dlo7lnbb3>, false>;
        /**
         * The present candidate list. A current member or runner-up can never enter this vector
         * and is always implicitly assumed to be a candidate.
         *
         * Second element is the deposit.
         *
         * Invariant: Always sorted based on account id.
         */
        Candidates: StorageDescriptor<[], Anonymize<Iba9inugg1atvo>, false>;
        /**
         * The total number of vote rounds that have happened, excluding the upcoming one.
         */
        ElectionRounds: StorageDescriptor<[], number, false>;
        /**
         * Votes and locked stake of a particular voter.
         *
         * TWOX-NOTE: SAFE as `AccountId` is a crypto hash.
         */
        Voting: StorageDescriptor<[Key: SS58String], Anonymize<Ib23vkkc52tqbu>, false>;
    };
    Council: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9l5thhgutrdl0>, true>;
        /**
         * Votes on a given proposal, if it is ongoing.
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
         * Proposals so far.
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
         * The current members of the collective. This is stored sorted (just by value).
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The prime member that helps determine the default vote behavior in case of absentations.
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    TechnicalCommittee: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9l5thhgutrdl0>, true>;
        /**
         * Votes on a given proposal, if it is ongoing.
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
         * Proposals so far.
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
         * The current members of the collective. This is stored sorted (just by value).
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The prime member that helps determine the default vote behavior in case of absentations.
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    Tips: {
        /**
         * TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
         * This has the insecure enumerable hash function since the key itself is already
         * guaranteed to be a secure hash.
         */
        Tips: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I8fkfedbgu1sn3>, true>;
        /**
         * Simple preimage lookup from the reason's hash to the original data. Again, has an
         * insecure enumerable hash since the key is guaranteed to be the result of a secure hash.
         */
        Reasons: StorageDescriptor<[Key: FixedSizeBinary<32>], Binary, true>;
    };
    Proxy: {
        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<Iegjdtqhbb6qh9>, false>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false>;
    };
    Multisig: {
        /**
         * The set of open multisig operations.
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true>;
    };
    Uniques: {
        /**
         * Details of a collection.
         */
        Class: StorageDescriptor<[Key: bigint], Anonymize<Ianufjuplcj6u4>, true>;
        /**
         * The collection, if any, of which an account is willing to take ownership.
         */
        OwnershipAcceptance: StorageDescriptor<[Key: SS58String], bigint, true>;
        /**
         * The items held by any given account; set out this way so that items owned by a single
         * account can be enumerated.
         */
        Account: StorageDescriptor<Anonymize<Ic3orq32is6lrl>, undefined, true>;
        /**
         * The collections owned by any given account; set out this way so that collections owned by
         * a single account can be enumerated.
         */
        ClassAccount: StorageDescriptor<Anonymize<I95l2k9b1re95f>, undefined, true>;
        /**
         * The items in existence and their ownership details.
         */
        Asset: StorageDescriptor<Anonymize<I200n1ov5tbcvr>, Anonymize<I2mv9dvsaj3kcr>, true>;
        /**
         * Metadata of a collection.
         */
        ClassMetadataOf: StorageDescriptor<[Key: bigint], Anonymize<I7781vnk0rm9eq>, true>;
        /**
         * Metadata of an item.
         */
        InstanceMetadataOf: StorageDescriptor<Anonymize<I200n1ov5tbcvr>, Anonymize<I7781vnk0rm9eq>, true>;
        /**
         * Attributes of a collection.
         */
        Attribute: StorageDescriptor<Anonymize<I974uplh4fafs4>, Anonymize<Ie2iqtdb0stqo1>, true>;
        /**
         * Price of an asset instance.
         */
        ItemPriceOf: StorageDescriptor<Anonymize<I200n1ov5tbcvr>, Anonymize<Ic9nev69d8grv1>, true>;
        /**
         * Keeps track of the number of items a collection might have.
         */
        CollectionMaxSupply: StorageDescriptor<[Key: bigint], number, true>;
    };
    StateTrieMigration: {
        /**
         * Migration progress.
         *
         * This stores the snapshot of the last migrated keys. It can be set into motion and move
         * forward by any of the means provided by this pallet.
         */
        MigrationProcess: StorageDescriptor<[], Anonymize<If354jrdedj0pj>, false>;
        /**
         * The limits that are imposed on automatic migrations.
         *
         * If set to None, then no automatic migration happens.
         */
        AutoLimits: StorageDescriptor<[], Anonymize<Ib17t3992hb64n>, false>;
        /**
         * The maximum limits that the signed migration could use.
         *
         * If not set, no signed submission is allowed.
         */
        SignedMigrationMaxLimits: StorageDescriptor<[], Anonymize<I215mkl885p4da>, true>;
    };
    AssetRegistry: {
        /**
         * Details of an asset.
         */
        Assets: StorageDescriptor<[Key: number], Anonymize<I52nkon7v46cta>, true>;
        /**
         * Next available asset id. This is sequential id assigned for each new registered asset.
         */
        NextAssetId: StorageDescriptor<[], number, false>;
        /**
         * Mapping between asset name and asset id.
         */
        AssetIds: StorageDescriptor<[Key: Binary], number, true>;
        /**
         * Native location of an asset.
         */
        AssetLocations: StorageDescriptor<[Key: number], Anonymize<I4c0s5cioidn76>, true>;
        /**
         * Non-native assets which transfer is banned.
         */
        BannedAssets: StorageDescriptor<[Key: number], undefined, true>;
        /**
         * Local asset for native location.
         */
        LocationAssets: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], number, true>;
        /**
         * Number of accounts that paid existential deposits for insufficient assets.
         * This storage is used by `SufficiencyCheck`.
         */
        ExistentialDepositCounter: StorageDescriptor<[], bigint, false>;
    };
    Claims: {
        /**
         * Asset id storage for each shared token
         */
        Claims: StorageDescriptor<[Key: FixedSizeBinary<20>], bigint, false>;
    };
    GenesisHistory: {
        /**
        
         */
        PreviousChain: StorageDescriptor<[], Anonymize<Isibf8mrredhc>, false>;
    };
    CollatorRewards: {
        /**
         * Stores the collators per session (index).
         */
        Collators: StorageDescriptor<[Key: number], Anonymize<Ia2lhg7l2hilo3>, false>;
    };
    Omnipool: {
        /**
         * State of an asset in the omnipool
         */
        Assets: StorageDescriptor<[Key: number], Anonymize<I8ikpj86u2na1q>, true>;
        /**
         * Imbalance of hub asset
         */
        HubAssetImbalance: StorageDescriptor<[], Anonymize<I23jd67h2erm49>, false>;
        /**
         * Tradable state of hub asset.
         */
        HubAssetTradability: StorageDescriptor<[], number, false>;
        /**
         * LP positions. Maps NFT instance id to corresponding position
         */
        Positions: StorageDescriptor<[Key: bigint], Anonymize<Icbsch55a85u5u>, true>;
        /**
         * Position ids sequencer
         */
        NextPositionId: StorageDescriptor<[], bigint, false>;
    };
    TransactionPause: {
        /**
         * The paused transaction map
         *
         * map (PalletNameBytes, FunctionNameBytes) => Option<()>
         */
        PausedTransactions: StorageDescriptor<[Key: Anonymize<Idkbvh6dahk1v7>], undefined, true>;
    };
    Duster: {
        /**
         * Accounts excluded from dusting.
         */
        AccountBlacklist: StorageDescriptor<[Key: SS58String], undefined, true>;
        /**
         * Account to take reward from.
         */
        RewardAccount: StorageDescriptor<[], SS58String, true>;
        /**
         * Account to send dust to.
         */
        DustAccount: StorageDescriptor<[], SS58String, true>;
    };
    OmnipoolWarehouseLM: {
        /**
         * Id sequencer for `GlobalFarm` and `YieldFarm`.
         */
        FarmSequencer: StorageDescriptor<[], number, false>;
        /**
        
         */
        DepositSequencer: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        GlobalFarm: StorageDescriptor<[Key: number], Anonymize<I5ugnv0dol8v8t>, true>;
        /**
         * Yield farm details.
         */
        YieldFarm: StorageDescriptor<Anonymize<Ielgh4t8o7rcvt>, Anonymize<I1ksaufim9dq1c>, true>;
        /**
         * Deposit details.
         */
        Deposit: StorageDescriptor<[Key: bigint], Anonymize<I3rvqhkck00laj>, true>;
        /**
         * Active(farms able to receive LP shares deposits) yield farms.
         */
        ActiveYieldFarm: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, number, true>;
    };
    OmnipoolLiquidityMining: {
        /**
         * Map of omnipool position's ids to LM's deposit ids.
         */
        OmniPositionId: StorageDescriptor<[Key: bigint], bigint, true>;
    };
    OTC: {
        /**
         * ID sequencer for Orders
         */
        NextOrderId: StorageDescriptor<[], number, false>;
        /**
        
         */
        Orders: StorageDescriptor<[Key: number], Anonymize<I7bcpl5g2rcql5>, true>;
    };
    CircuitBreaker: {
        /**
         * Trade volume limits of assets set by set_trade_volume_limit.
         * If not set, returns the default limit.
         */
        TradeVolumeLimitPerAsset: StorageDescriptor<[Key: number], Anonymize<I9jd27rnpm8ttv>, false>;
        /**
         * Trade volumes per asset
         */
        AllowedTradeVolumeLimitPerAsset: StorageDescriptor<[Key: number], Anonymize<I4vdvk2616mp4t>, true>;
        /**
         * Liquidity limits of assets for adding liquidity.
         * If not set, returns the default limit.
         */
        LiquidityAddLimitPerAsset: StorageDescriptor<[Key: number], Anonymize<Iep7au1720bm0e>, false>;
        /**
         * Add liquidity volumes per asset
         */
        AllowedAddLiquidityAmountPerAsset: StorageDescriptor<[Key: number], Anonymize<I48olja7kd2ijk>, true>;
        /**
         * Liquidity limits of assets for removing liquidity.
         * If not set, returns the default limit.
         */
        LiquidityRemoveLimitPerAsset: StorageDescriptor<[Key: number], Anonymize<Iep7au1720bm0e>, false>;
        /**
         * Remove liquidity volumes per asset
         */
        AllowedRemoveLiquidityAmountPerAsset: StorageDescriptor<[Key: number], Anonymize<I48olja7kd2ijk>, true>;
    };
    Router: {
        /**
         *Flag to indicate when to skip ED handling
         */
        SkipEd: StorageDescriptor<[], Anonymize<I4q0p5rehstne>, true>;
        /**
         * Storing routes for asset pairs
         */
        Routes: StorageDescriptor<[Key: Anonymize<I4kv0johj9i346>], Anonymize<Iesal24fi7slt9>, true>;
    };
    DynamicFees: {
        /**
         * Stores last calculated fee of an asset and block number in which it was changed..
         * Stored as (Asset fee, Protocol fee, Block number)
         */
        AssetFee: StorageDescriptor<[Key: number], Anonymize<Ibn3i0ad6beo5l>, true>;
    };
    Staking: {
        /**
         * Global staking state.
         */
        Staking: StorageDescriptor<[], Anonymize<I10uqvdcdcld3o>, false>;
        /**
         * User's position state.
         */
        Positions: StorageDescriptor<[Key: bigint], Anonymize<I3fgr93o42d9hi>, true>;
        /**
         * Position ids sequencer.
         */
        NextPositionId: StorageDescriptor<[], bigint, false>;
        /**
         * List of position votes.
         */
        PositionVotes: StorageDescriptor<[Key: bigint], Anonymize<Ihjc2vmjfhsmq>, false>;
        /**
         * List of processed vote. Used to determine if the vote should be locked in case of voting not in favor.
         */
        ProcessedVotes: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<I663kh18bno0fo>, true>;
    };
    Stableswap: {
        /**
         * Existing pools
         */
        Pools: StorageDescriptor<[Key: number], Anonymize<I1p5pqg6bllgtl>, true>;
        /**
         * Tradability state of pool assets.
         */
        AssetTradability: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, number, false>;
    };
    Bonds: {
        /**
         * Registered bond ids.
         * Maps (underlying asset ID, maturity) -> bond ID
         */
        BondIds: StorageDescriptor<[Key: Anonymize<I4ojmnsk1dchql>], number, true>;
        /**
         * Registered bonds.
         * Maps bond ID -> (underlying asset ID, maturity)
         */
        Bonds: StorageDescriptor<[Key: number], Anonymize<I4ojmnsk1dchql>, true>;
    };
    LBP: {
        /**
         * Details of a pool.
         */
        PoolData: StorageDescriptor<[Key: SS58String], Anonymize<Iesq88051ch8ht>, true>;
        /**
         * Storage used for tracking existing fee collectors
         * Not more than one fee collector per asset possible
         */
        FeeCollectorWithAsset: StorageDescriptor<Anonymize<I6ouflveob4eli>, boolean, false>;
    };
    XYK: {
        /**
         * Asset id storage for shared pool tokens
         */
        ShareToken: StorageDescriptor<[Key: SS58String], number, false>;
        /**
         * Total liquidity in a pool.
         */
        TotalLiquidity: StorageDescriptor<[Key: SS58String], bigint, false>;
        /**
         * Asset pair in a pool.
         */
        PoolAssets: StorageDescriptor<[Key: SS58String], Anonymize<I9jd27rnpm8ttv>, true>;
    };
    Referrals: {
        /**
         * Referral codes
         * Maps a referral code to an account.
         */
        ReferralCodes: StorageDescriptor<[Key: Binary], SS58String, true>;
        /**
         * Referral accounts
         * Maps an account to a referral code.
         */
        ReferralAccounts: StorageDescriptor<[Key: SS58String], Binary, true>;
        /**
         * Linked accounts.
         * Maps an account to a referral account.
         */
        LinkedAccounts: StorageDescriptor<[Key: SS58String], SS58String, true>;
        /**
         * Shares of a referral account
         */
        ReferrerShares: StorageDescriptor<[Key: SS58String], bigint, false>;
        /**
         * Shares of a trader account
         */
        TraderShares: StorageDescriptor<[Key: SS58String], bigint, false>;
        /**
         * Total share issuance.
         */
        TotalShares: StorageDescriptor<[], bigint, false>;
        /**
         * Referer level and total accumulated rewards over time.
         * Maps referrer account to (Level, Balance). Level indicates current rewards and Balance is used to unlock next level.
         * Dev note: we use OptionQuery here because this helps to easily determine that an account if referrer account.
         */
        Referrer: StorageDescriptor<[Key: SS58String], Anonymize<I9qpa0evftgoo5>, true>;
        /**
         * Asset fee distribution rewards information.
         * Maps (asset_id, level) to asset reward percentages.
         */
        AssetRewards: StorageDescriptor<Anonymize<I1stghsu756nk9>, Anonymize<I4qc61lpfqml75>, true>;
        /**
         * Information about assets that are currently in the rewards pot.
         * Used to easily determine list of assets that need to be converted.
         */
        PendingConversions: StorageDescriptor<[Key: number], undefined, true>;
        /**
         *Counter for the related counted storage map
         */
        CounterForPendingConversions: StorageDescriptor<[], number, false>;
    };
    Tokens: {
        /**
         * The total issuance of a token type.
         */
        TotalIssuance: StorageDescriptor<[Key: number], bigint, false>;
        /**
         * Any liquidity locks of a token type under an account.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         */
        Locks: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<Ia7pdug7cdsg8g>, false>;
        /**
         * The balance of a token type under an account.
         *
         * NOTE: If the total is ever zero, decrease account ref account.
         *
         * NOTE: This is only used in the case that this module is used to store
         * balances.
         */
        Accounts: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<Ic02kut0350gb0>, false>;
        /**
         * Named reserves on some account balances.
         */
        Reserves: StorageDescriptor<Anonymize<I6ouflveob4eli>, Anonymize<Ia7pdug7cdsg8g>, false>;
    };
    Vesting: {
        /**
         * Vesting schedules of an account.
         *
         * VestingSchedules: map AccountId => Vec<VestingSchedule>
         */
        VestingSchedules: StorageDescriptor<[Key: SS58String], Anonymize<I199nnq793ql30>, false>;
    };
    EVM: {
        /**
        
         */
        AccountCodes: StorageDescriptor<[Key: FixedSizeBinary<20>], Binary, false>;
        /**
        
         */
        AccountCodesMetadata: StorageDescriptor<[Key: FixedSizeBinary<20>], Anonymize<I7jidl7qnnq87c>, true>;
        /**
        
         */
        AccountStorages: StorageDescriptor<Anonymize<I82cps8ng2jtug>, FixedSizeBinary<32>, false>;
        /**
        
         */
        Suicided: StorageDescriptor<[Key: FixedSizeBinary<20>], undefined, true>;
    };
    EVMChainId: {
        /**
         * The EVM chain ID.
         */
        ChainId: StorageDescriptor<[], bigint, false>;
    };
    Ethereum: {
        /**
         * Current building block's transactions and receipts.
         */
        Pending: StorageDescriptor<[], Anonymize<Ic17drnrq0rtgi>, false>;
        /**
         * The current Ethereum block.
         */
        CurrentBlock: StorageDescriptor<[], Anonymize<Idi27giun0mb9q>, true>;
        /**
         * The current Ethereum receipts.
         */
        CurrentReceipts: StorageDescriptor<[], Anonymize<Idud3fdh64aqp9>, true>;
        /**
         * The current transaction statuses.
         */
        CurrentTransactionStatuses: StorageDescriptor<[], Anonymize<Ie7atdsih6q14b>, true>;
        /**
        
         */
        BlockHash: StorageDescriptor<[Key: Anonymize<I4totqt881mlti>], FixedSizeBinary<32>, false>;
    };
    EVMAccounts: {
        /**
         * Maps an EVM address to the last 12 bytes of a substrate account.
         */
        AccountExtension: StorageDescriptor<[Key: FixedSizeBinary<20>], FixedSizeBinary<12>, true>;
        /**
         * Whitelisted addresses that are allowed to deploy smart contracts.
         */
        ContractDeployer: StorageDescriptor<[Key: FixedSizeBinary<20>], undefined, true>;
    };
    DynamicEvmFee: {
        /**
         * Base fee per gas
         */
        BaseFeePerGas: StorageDescriptor<[], Anonymize<I4totqt881mlti>, false>;
    };
    XYKWarehouseLM: {
        /**
         * Id sequencer for `GlobalFarm` and `YieldFarm`.
         */
        FarmSequencer: StorageDescriptor<[], number, false>;
        /**
        
         */
        DepositSequencer: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        GlobalFarm: StorageDescriptor<[Key: number], Anonymize<I5ugnv0dol8v8t>, true>;
        /**
         * Yield farm details.
         */
        YieldFarm: StorageDescriptor<Anonymize<Id32h28hjj1tch>, Anonymize<I1ksaufim9dq1c>, true>;
        /**
         * Deposit details.
         */
        Deposit: StorageDescriptor<[Key: bigint], Anonymize<I66gvo4ilpv28i>, true>;
        /**
         * Active(farms able to receive LP shares deposits) yield farms.
         */
        ActiveYieldFarm: StorageDescriptor<Anonymize<I6ouflveob4eli>, number, true>;
    };
    DCA: {
        /**
         * Id sequencer for schedules
         */
        ScheduleIdSequencer: StorageDescriptor<[], number, false>;
        /**
         * Storing schedule details
         */
        Schedules: StorageDescriptor<[Key: number], Anonymize<I2u0nucph7peo9>, true>;
        /**
         * Storing schedule ownership
         */
        ScheduleOwnership: StorageDescriptor<Anonymize<I6ouflveob4eli>, undefined, true>;
        /**
         * Keep tracking the remaining amounts to spend for DCA schedules
         */
        RemainingAmounts: StorageDescriptor<[Key: number], bigint, true>;
        /**
         * Keep tracking the retry on error flag for DCA schedules
         */
        RetriesOnError: StorageDescriptor<[Key: number], number, false>;
        /**
         * Keep tracking of the schedule ids to be executed in the block
         */
        ScheduleIdsPerBlock: StorageDescriptor<[Key: number], Anonymize<Icgljjb6j82uhn>, false>;
    };
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true>;
        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<Ibt9i4631ja7qv>, false>;
        /**
         * Lookup from a name to the block number and index of the task.
         *
         * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
         * identities.
         */
        Lookup: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9jd27rnpm8ttv>, true>;
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
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false>;
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
    UnknownTokens: {
        /**
         * Concrete fungible balances under a given location and a concrete
         * fungible id.
         *
         * double_map: who, asset_id => u128
         */
        ConcreteFungibleBalances: StorageDescriptor<Anonymize<Id0as9l3s817qs>, bigint, false>;
        /**
         * Abstract fungible balances under a given location and a abstract
         * fungible id.
         *
         * double_map: who, asset_id => u128
         */
        AbstractFungibleBalances: StorageDescriptor<Anonymize<Ifmurjhsco5svb>, bigint, false>;
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
    EmaOracle: {
        /**
         * Accumulator for oracle data in current block that will be recorded at the end of the block.
         */
        Accumulator: StorageDescriptor<[], Anonymize<I7dp637m60bg7s>, false>;
        /**
         * Oracle storage keyed by data source, involved asset ids and the period length of the oracle.
         *
         * Stores the data entry as well as the block number when the oracle was first initialized.
         */
        Oracles: StorageDescriptor<Anonymize<I1os9h4ivict7u>, Anonymize<Ifmar1ir5rft6l>, true>;
        /**
         * Assets that are whitelisted and tracked by the pallet.
         */
        WhitelistedAssets: StorageDescriptor<[], Anonymize<Isa48262v9oqu>, false>;
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
        transfer_allow_death: TxDescriptor<Anonymize<I1o12ibtjm10ot>>;
        /**
         *See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I8vn14j8a40qm>>;
        /**
         *See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I1o12ibtjm10ot>>;
        /**
         *See [`Pallet::transfer_all`].
         */
        transfer_all: TxDescriptor<Anonymize<I493o732nahjlr>>;
        /**
         *See [`Pallet::force_unreserve`].
         */
        force_unreserve: TxDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *See [`Pallet::upgrade_accounts`].
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
         *See [`Pallet::force_set_balance`].
         */
        force_set_balance: TxDescriptor<Anonymize<I4og34pg4ruv5d>>;
        /**
         *See [`Pallet::force_adjust_total_issuance`].
         */
        force_adjust_total_issuance: TxDescriptor<Anonymize<I5u8olqbbvfnvf>>;
    };
    MultiTransactionPayment: {
        /**
         *See [`Pallet::set_currency`].
         */
        set_currency: TxDescriptor<Anonymize<Ic1e6uvbf8ado3>>;
        /**
         *See [`Pallet::add_currency`].
         */
        add_currency: TxDescriptor<Anonymize<Ie7oqvfdar8r2>>;
        /**
         *See [`Pallet::remove_currency`].
         */
        remove_currency: TxDescriptor<Anonymize<Ic1e6uvbf8ado3>>;
        /**
         *See [`Pallet::reset_payment_currency`].
         */
        reset_payment_currency: TxDescriptor<Anonymize<I6v8sm60vvkmk7>>;
        /**
         *See [`Pallet::dispatch_permit`].
         */
        dispatch_permit: TxDescriptor<Anonymize<I92pum5p0t4pat>>;
    };
    Treasury: {
        /**
         *See [`Pallet::propose_spend`].
         */
        propose_spend: TxDescriptor<Anonymize<I1g5tojdtkn6tu>>;
        /**
         *See [`Pallet::reject_proposal`].
         */
        reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *See [`Pallet::approve_proposal`].
         */
        approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *See [`Pallet::spend_local`].
         */
        spend_local: TxDescriptor<Anonymize<Idscf6boak49q1>>;
        /**
         *See [`Pallet::remove_approval`].
         */
        remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *See [`Pallet::spend`].
         */
        spend: TxDescriptor<Anonymize<I6qq5nnbjegi8u>>;
        /**
         *See [`Pallet::payout`].
         */
        payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *See [`Pallet::check_status`].
         */
        check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *See [`Pallet::void_spend`].
         */
        void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Utility: {
        /**
         *See [`Pallet::batch`].
         */
        batch: TxDescriptor<Anonymize<I3fmnv57d2qort>>;
        /**
         *See [`Pallet::as_derivative`].
         */
        as_derivative: TxDescriptor<Anonymize<I7b7a7ip4fqnq3>>;
        /**
         *See [`Pallet::batch_all`].
         */
        batch_all: TxDescriptor<Anonymize<I3fmnv57d2qort>>;
        /**
         *See [`Pallet::dispatch_as`].
         */
        dispatch_as: TxDescriptor<Anonymize<Ib8d8jglhl68gd>>;
        /**
         *See [`Pallet::force_batch`].
         */
        force_batch: TxDescriptor<Anonymize<I3fmnv57d2qort>>;
        /**
         *See [`Pallet::with_weight`].
         */
        with_weight: TxDescriptor<Anonymize<I1rcq20gtlfvue>>;
    };
    Preimage: {
        /**
         *See [`Pallet::note_preimage`].
         */
        note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>;
        /**
         *See [`Pallet::unnote_preimage`].
         */
        unnote_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::request_preimage`].
         */
        request_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::unrequest_preimage`].
         */
        unrequest_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::ensure_updated`].
         */
        ensure_updated: TxDescriptor<Anonymize<I3o5j3bli1pd8e>>;
    };
    Identity: {
        /**
         *See [`Pallet::add_registrar`].
         */
        add_registrar: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *See [`Pallet::set_identity`].
         */
        set_identity: TxDescriptor<Anonymize<I2kds5jji7slh8>>;
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
        set_account_id: TxDescriptor<Anonymize<I93c18nim2s66c>>;
        /**
         *See [`Pallet::set_fields`].
         */
        set_fields: TxDescriptor<Anonymize<Id6gojh30v9ib2>>;
        /**
         *See [`Pallet::provide_judgement`].
         */
        provide_judgement: TxDescriptor<Anonymize<Ica5n28rlj0lk6>>;
        /**
         *See [`Pallet::kill_identity`].
         */
        kill_identity: TxDescriptor<Anonymize<I14p0q0qs0fqbj>>;
        /**
         *See [`Pallet::add_sub`].
         */
        add_sub: TxDescriptor<Anonymize<Ie3u4phm019a8l>>;
        /**
         *See [`Pallet::rename_sub`].
         */
        rename_sub: TxDescriptor<Anonymize<Ie3u4phm019a8l>>;
        /**
         *See [`Pallet::remove_sub`].
         */
        remove_sub: TxDescriptor<Anonymize<I9jie72r7q6717>>;
        /**
         *See [`Pallet::quit_sub`].
         */
        quit_sub: TxDescriptor<undefined>;
        /**
         *See [`Pallet::add_username_authority`].
         */
        add_username_authority: TxDescriptor<Anonymize<I3alo542n0mgp>>;
        /**
         *See [`Pallet::remove_username_authority`].
         */
        remove_username_authority: TxDescriptor<Anonymize<I2rg5btjrsqec0>>;
        /**
         *See [`Pallet::set_username_for`].
         */
        set_username_for: TxDescriptor<Anonymize<I21r37il499a97>>;
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
    Democracy: {
        /**
         *See [`Pallet::propose`].
         */
        propose: TxDescriptor<Anonymize<I1moso5oagpiea>>;
        /**
         *See [`Pallet::second`].
         */
        second: TxDescriptor<Anonymize<Ibeb4n9vpjefp3>>;
        /**
         *See [`Pallet::vote`].
         */
        vote: TxDescriptor<Anonymize<Id7murq9s9fg6h>>;
        /**
         *See [`Pallet::emergency_cancel`].
         */
        emergency_cancel: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *See [`Pallet::external_propose`].
         */
        external_propose: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *See [`Pallet::external_propose_majority`].
         */
        external_propose_majority: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *See [`Pallet::external_propose_default`].
         */
        external_propose_default: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *See [`Pallet::fast_track`].
         */
        fast_track: TxDescriptor<Anonymize<I5agg650597e49>>;
        /**
         *See [`Pallet::veto_external`].
         */
        veto_external: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *See [`Pallet::cancel_referendum`].
         */
        cancel_referendum: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *See [`Pallet::delegate`].
         */
        delegate: TxDescriptor<Anonymize<Iab64mce6q91i>>;
        /**
         *See [`Pallet::undelegate`].
         */
        undelegate: TxDescriptor<undefined>;
        /**
         *See [`Pallet::clear_public_proposals`].
         */
        clear_public_proposals: TxDescriptor<undefined>;
        /**
         *See [`Pallet::unlock`].
         */
        unlock: TxDescriptor<Anonymize<I14p0q0qs0fqbj>>;
        /**
         *See [`Pallet::remove_vote`].
         */
        remove_vote: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *See [`Pallet::remove_other_vote`].
         */
        remove_other_vote: TxDescriptor<Anonymize<I7ji3jng252el9>>;
        /**
         *See [`Pallet::blacklist`].
         */
        blacklist: TxDescriptor<Anonymize<I3v9h9f3mpm1l8>>;
        /**
         *See [`Pallet::cancel_proposal`].
         */
        cancel_proposal: TxDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
         *See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<I2kt2u1flctk2q>>;
        /**
         *See [`Pallet::force_remove_vote`].
         */
        force_remove_vote: TxDescriptor<Anonymize<I7ji3jng252el9>>;
    };
    Elections: {
        /**
         *See [`Pallet::vote`].
         */
        vote: TxDescriptor<Anonymize<Iaa13icjlsj13d>>;
        /**
         *See [`Pallet::remove_voter`].
         */
        remove_voter: TxDescriptor<undefined>;
        /**
         *See [`Pallet::submit_candidacy`].
         */
        submit_candidacy: TxDescriptor<Anonymize<I98vh5ccjtf1ev>>;
        /**
         *See [`Pallet::renounce_candidacy`].
         */
        renounce_candidacy: TxDescriptor<Anonymize<I3al0eab2u0gt2>>;
        /**
         *See [`Pallet::remove_member`].
         */
        remove_member: TxDescriptor<Anonymize<I7hhej9ji2h5gt>>;
        /**
         *See [`Pallet::clean_defunct_voters`].
         */
        clean_defunct_voters: TxDescriptor<Anonymize<I6fuug4i4r04hi>>;
    };
    Council: {
        /**
         *See [`Pallet::set_members`].
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<Ibg19he58hud84>>;
        /**
         *See [`Pallet::propose`].
         */
        propose: TxDescriptor<Anonymize<Iqduq47asarsk>>;
        /**
         *See [`Pallet::vote`].
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *See [`Pallet::disapprove_proposal`].
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *See [`Pallet::close`].
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    TechnicalCommittee: {
        /**
         *See [`Pallet::set_members`].
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<Ibg19he58hud84>>;
        /**
         *See [`Pallet::propose`].
         */
        propose: TxDescriptor<Anonymize<Iqduq47asarsk>>;
        /**
         *See [`Pallet::vote`].
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *See [`Pallet::disapprove_proposal`].
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *See [`Pallet::close`].
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    Tips: {
        /**
         *See [`Pallet::report_awesome`].
         */
        report_awesome: TxDescriptor<Anonymize<Ie6dn4p5chsk1u>>;
        /**
         *See [`Pallet::retract_tip`].
         */
        retract_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::tip_new`].
         */
        tip_new: TxDescriptor<Anonymize<I2vi5dr4528rgv>>;
        /**
         *See [`Pallet::tip`].
         */
        tip: TxDescriptor<Anonymize<I1pm30k3i4438u>>;
        /**
         *See [`Pallet::close_tip`].
         */
        close_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::slash_tip`].
         */
        slash_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
    };
    Proxy: {
        /**
         *See [`Pallet::proxy`].
         */
        proxy: TxDescriptor<Anonymize<I11c208k5k7c7p>>;
        /**
         *See [`Pallet::add_proxy`].
         */
        add_proxy: TxDescriptor<Anonymize<I2e1ekg17a2uj2>>;
        /**
         *See [`Pallet::remove_proxy`].
         */
        remove_proxy: TxDescriptor<Anonymize<I2e1ekg17a2uj2>>;
        /**
         *See [`Pallet::remove_proxies`].
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         *See [`Pallet::create_pure`].
         */
        create_pure: TxDescriptor<Anonymize<I9uff8o8g5b5av>>;
        /**
         *See [`Pallet::kill_pure`].
         */
        kill_pure: TxDescriptor<Anonymize<I1acluqiqlacck>>;
        /**
         *See [`Pallet::announce`].
         */
        announce: TxDescriptor<Anonymize<Idkqesere66fs7>>;
        /**
         *See [`Pallet::remove_announcement`].
         */
        remove_announcement: TxDescriptor<Anonymize<Idkqesere66fs7>>;
        /**
         *See [`Pallet::reject_announcement`].
         */
        reject_announcement: TxDescriptor<Anonymize<Ifs54vj2idl9k4>>;
        /**
         *See [`Pallet::proxy_announced`].
         */
        proxy_announced: TxDescriptor<Anonymize<Ia1mrp1uqfh37g>>;
    };
    Multisig: {
        /**
         *See [`Pallet::as_multi_threshold_1`].
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<Ic2scjb6ud07jn>>;
        /**
         *See [`Pallet::as_multi`].
         */
        as_multi: TxDescriptor<Anonymize<I516qu19579v6p>>;
        /**
         *See [`Pallet::approve_as_multi`].
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
         *See [`Pallet::cancel_as_multi`].
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Uniques: {
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<I3rrsthr03bsf8>>;
        /**
         *See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I1it6nfuocs3uo>>;
        /**
         *See [`Pallet::destroy`].
         */
        destroy: TxDescriptor<Anonymize<I83qeclck631s2>>;
        /**
         *See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<I846j8gk91gp4q>>;
        /**
         *See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<I4apbr3d7b110l>>;
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I9svbf1ionsuba>>;
        /**
         *See [`Pallet::redeposit`].
         */
        redeposit: TxDescriptor<Anonymize<I63enm20toa64c>>;
        /**
         *See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *See [`Pallet::freeze_collection`].
         */
        freeze_collection: TxDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *See [`Pallet::thaw_collection`].
         */
        thaw_collection: TxDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<I2970lus2v0qct>>;
        /**
         *See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<I1vsbo63n9pu69>>;
        /**
         *See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<I3fatc2oi4mp63>>;
        /**
         *See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<I1j3v9uknthnij>>;
        /**
         *See [`Pallet::force_item_status`].
         */
        force_item_status: TxDescriptor<Anonymize<I6ng2cdk1vvip6>>;
        /**
         *See [`Pallet::set_attribute`].
         */
        set_attribute: TxDescriptor<Anonymize<I62ht2i39rtkaa>>;
        /**
         *See [`Pallet::clear_attribute`].
         */
        clear_attribute: TxDescriptor<Anonymize<Ichf8eu9t3dtc2>>;
        /**
         *See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<I9e4bfe80t2int>>;
        /**
         *See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *See [`Pallet::set_collection_metadata`].
         */
        set_collection_metadata: TxDescriptor<Anonymize<I9oai3q0an1tbo>>;
        /**
         *See [`Pallet::clear_collection_metadata`].
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *See [`Pallet::set_accept_ownership`].
         */
        set_accept_ownership: TxDescriptor<Anonymize<I90ivo9n6p6nqo>>;
        /**
         *See [`Pallet::set_collection_max_supply`].
         */
        set_collection_max_supply: TxDescriptor<Anonymize<Idj9k8sn80h3m6>>;
        /**
         *See [`Pallet::set_price`].
         */
        set_price: TxDescriptor<Anonymize<I64f3h3tf92u6f>>;
        /**
         *See [`Pallet::buy_item`].
         */
        buy_item: TxDescriptor<Anonymize<Ifnmu9mlmgtdbf>>;
    };
    StateTrieMigration: {
        /**
         *See [`Pallet::control_auto_migration`].
         */
        control_auto_migration: TxDescriptor<Anonymize<I7psec5e6ghc64>>;
        /**
         *See [`Pallet::continue_migrate`].
         */
        continue_migrate: TxDescriptor<Anonymize<I2psb0sladd863>>;
        /**
         *See [`Pallet::migrate_custom_top`].
         */
        migrate_custom_top: TxDescriptor<Anonymize<I585tk8khua0gk>>;
        /**
         *See [`Pallet::migrate_custom_child`].
         */
        migrate_custom_child: TxDescriptor<Anonymize<I3ut99di214ru2>>;
        /**
         *See [`Pallet::set_signed_max_limits`].
         */
        set_signed_max_limits: TxDescriptor<Anonymize<Iemkp87d26vsbh>>;
        /**
         *See [`Pallet::force_set_progress`].
         */
        force_set_progress: TxDescriptor<Anonymize<I4ahfrt5dscf6q>>;
    };
    AssetRegistry: {
        /**
         *See [`Pallet::register`].
         */
        register: TxDescriptor<Anonymize<Ifmsv6e4cim6b1>>;
        /**
         *See [`Pallet::update`].
         */
        update: TxDescriptor<Anonymize<I3nv51ps4mq7qu>>;
        /**
         *See [`Pallet::register_external`].
         */
        register_external: TxDescriptor<Anonymize<I4a8hon12idk34>>;
        /**
         *See [`Pallet::ban_asset`].
         */
        ban_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *See [`Pallet::unban_asset`].
         */
        unban_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
    };
    Claims: {
        /**
         *See [`Pallet::claim`].
         */
        claim: TxDescriptor<Anonymize<Ib2p3kr78drjc1>>;
    };
    Omnipool: {
        /**
         *See [`Pallet::add_token`].
         */
        add_token: TxDescriptor<Anonymize<Ida2ijjar0n0j3>>;
        /**
         *See [`Pallet::add_liquidity`].
         */
        add_liquidity: TxDescriptor<Anonymize<Ing3etrevsfg0>>;
        /**
         *See [`Pallet::add_liquidity_with_limit`].
         */
        add_liquidity_with_limit: TxDescriptor<Anonymize<Ietsl92b11kilg>>;
        /**
         *See [`Pallet::remove_liquidity`].
         */
        remove_liquidity: TxDescriptor<Anonymize<Icqdi7b9m95ug3>>;
        /**
         *See [`Pallet::remove_liquidity_with_limit`].
         */
        remove_liquidity_with_limit: TxDescriptor<Anonymize<Ieuqv44kptstcs>>;
        /**
         *See [`Pallet::sacrifice_position`].
         */
        sacrifice_position: TxDescriptor<Anonymize<I6vhvcln14dp4d>>;
        /**
         *See [`Pallet::sell`].
         */
        sell: TxDescriptor<Anonymize<Ievca65alkkho9>>;
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<I2qkf9i0e8mf1f>>;
        /**
         *See [`Pallet::set_asset_tradable_state`].
         */
        set_asset_tradable_state: TxDescriptor<Anonymize<Iefviakco48cs2>>;
        /**
         *See [`Pallet::refund_refused_asset`].
         */
        refund_refused_asset: TxDescriptor<Anonymize<Iakb7idgif10m8>>;
        /**
         *See [`Pallet::set_asset_weight_cap`].
         */
        set_asset_weight_cap: TxDescriptor<Anonymize<Id7aqsj1u6b2r2>>;
        /**
         *See [`Pallet::withdraw_protocol_liquidity`].
         */
        withdraw_protocol_liquidity: TxDescriptor<Anonymize<Icah19jgge5j3e>>;
        /**
         *See [`Pallet::remove_token`].
         */
        remove_token: TxDescriptor<Anonymize<I2bi2kbaaunr13>>;
    };
    TransactionPause: {
        /**
         *See [`Pallet::pause_transaction`].
         */
        pause_transaction: TxDescriptor<Anonymize<Ian208gj7nqkdo>>;
        /**
         *See [`Pallet::unpause_transaction`].
         */
        unpause_transaction: TxDescriptor<Anonymize<Ian208gj7nqkdo>>;
    };
    Duster: {
        /**
         *See [`Pallet::dust_account`].
         */
        dust_account: TxDescriptor<Anonymize<I81d44muu393rf>>;
        /**
         *See [`Pallet::add_nondustable_account`].
         */
        add_nondustable_account: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *See [`Pallet::remove_nondustable_account`].
         */
        remove_nondustable_account: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
    };
    OmnipoolLiquidityMining: {
        /**
         *See [`Pallet::create_global_farm`].
         */
        create_global_farm: TxDescriptor<Anonymize<I3iojc1k1m6nu7>>;
        /**
         *See [`Pallet::terminate_global_farm`].
         */
        terminate_global_farm: TxDescriptor<Anonymize<I9q8qmop6bko5m>>;
        /**
         *See [`Pallet::create_yield_farm`].
         */
        create_yield_farm: TxDescriptor<Anonymize<Ial2ta95n8ff3b>>;
        /**
         *See [`Pallet::update_yield_farm`].
         */
        update_yield_farm: TxDescriptor<Anonymize<Iammrvujtc5lnk>>;
        /**
         *See [`Pallet::stop_yield_farm`].
         */
        stop_yield_farm: TxDescriptor<Anonymize<I87j02rt3f17j8>>;
        /**
         *See [`Pallet::resume_yield_farm`].
         */
        resume_yield_farm: TxDescriptor<Anonymize<Iasmn3c065hq91>>;
        /**
         *See [`Pallet::terminate_yield_farm`].
         */
        terminate_yield_farm: TxDescriptor<Anonymize<Ia5kd7m19ap7ge>>;
        /**
         *See [`Pallet::deposit_shares`].
         */
        deposit_shares: TxDescriptor<Anonymize<Ieq7brqoubndin>>;
        /**
         *See [`Pallet::redeposit_shares`].
         */
        redeposit_shares: TxDescriptor<Anonymize<Ie8ft8rd6cil27>>;
        /**
         *See [`Pallet::claim_rewards`].
         */
        claim_rewards: TxDescriptor<Anonymize<I2k37dcoppgins>>;
        /**
         *See [`Pallet::withdraw_shares`].
         */
        withdraw_shares: TxDescriptor<Anonymize<I2k37dcoppgins>>;
        /**
         *See [`Pallet::update_global_farm`].
         */
        update_global_farm: TxDescriptor<Anonymize<Ia05t9pjenemsb>>;
    };
    OTC: {
        /**
         *See [`Pallet::place_order`].
         */
        place_order: TxDescriptor<Anonymize<I8utns9aeu3t6o>>;
        /**
         *See [`Pallet::partial_fill_order`].
         */
        partial_fill_order: TxDescriptor<Anonymize<I35cf63e7kg5on>>;
        /**
         *See [`Pallet::fill_order`].
         */
        fill_order: TxDescriptor<Anonymize<Ibq6b0nsk23kj8>>;
        /**
         *See [`Pallet::cancel_order`].
         */
        cancel_order: TxDescriptor<Anonymize<Ibq6b0nsk23kj8>>;
    };
    CircuitBreaker: {
        /**
         *See [`Pallet::set_trade_volume_limit`].
         */
        set_trade_volume_limit: TxDescriptor<Anonymize<I2i1tilmsb1rl1>>;
        /**
         *See [`Pallet::set_add_liquidity_limit`].
         */
        set_add_liquidity_limit: TxDescriptor<Anonymize<I4l0u1h71fhj81>>;
        /**
         *See [`Pallet::set_remove_liquidity_limit`].
         */
        set_remove_liquidity_limit: TxDescriptor<Anonymize<I4l0u1h71fhj81>>;
    };
    Router: {
        /**
         *See [`Pallet::sell`].
         */
        sell: TxDescriptor<Anonymize<Iet9su1uri0qgo>>;
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<I242odhgbhik24>>;
        /**
         *See [`Pallet::set_route`].
         */
        set_route: TxDescriptor<Anonymize<I7o081p6vv5gqs>>;
        /**
         *See [`Pallet::force_insert_route`].
         */
        force_insert_route: TxDescriptor<Anonymize<I7o081p6vv5gqs>>;
        /**
         *See [`Pallet::sell_all`].
         */
        sell_all: TxDescriptor<Anonymize<Ic18k1k8u5726n>>;
    };
    Staking: {
        /**
         *See [`Pallet::initialize_staking`].
         */
        initialize_staking: TxDescriptor<undefined>;
        /**
         *See [`Pallet::stake`].
         */
        stake: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *See [`Pallet::increase_stake`].
         */
        increase_stake: TxDescriptor<Anonymize<Icqdi7b9m95ug3>>;
        /**
         *See [`Pallet::claim`].
         */
        claim: TxDescriptor<Anonymize<I6vhvcln14dp4d>>;
        /**
         *See [`Pallet::unstake`].
         */
        unstake: TxDescriptor<Anonymize<I6vhvcln14dp4d>>;
    };
    Stableswap: {
        /**
         *See [`Pallet::create_pool`].
         */
        create_pool: TxDescriptor<Anonymize<I77a9b6eik0rui>>;
        /**
         *See [`Pallet::update_pool_fee`].
         */
        update_pool_fee: TxDescriptor<Anonymize<Ics8sn0t3vlpat>>;
        /**
         *See [`Pallet::update_amplification`].
         */
        update_amplification: TxDescriptor<Anonymize<I6p5nbogrodkcc>>;
        /**
         *See [`Pallet::add_liquidity`].
         */
        add_liquidity: TxDescriptor<Anonymize<I7pgj3rnfo83eg>>;
        /**
         *See [`Pallet::add_liquidity_shares`].
         */
        add_liquidity_shares: TxDescriptor<Anonymize<Ic11mlh16sngai>>;
        /**
         *See [`Pallet::remove_liquidity_one_asset`].
         */
        remove_liquidity_one_asset: TxDescriptor<Anonymize<I4vbsn8c7ui70f>>;
        /**
         *See [`Pallet::withdraw_asset_amount`].
         */
        withdraw_asset_amount: TxDescriptor<Anonymize<I60m5cjc6e18ab>>;
        /**
         *See [`Pallet::sell`].
         */
        sell: TxDescriptor<Anonymize<Iauknf9up388mv>>;
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<Ieh252ua9757u1>>;
        /**
         *See [`Pallet::set_asset_tradable_state`].
         */
        set_asset_tradable_state: TxDescriptor<Anonymize<Iest0fomljvrb6>>;
    };
    Bonds: {
        /**
         *See [`Pallet::issue`].
         */
        issue: TxDescriptor<Anonymize<I3i06ijrvdoq97>>;
        /**
         *See [`Pallet::redeem`].
         */
        redeem: TxDescriptor<Anonymize<Ibc2f5cr6dqguj>>;
    };
    OtcSettlements: {
        /**
         *See [`Pallet::settle_otc_order`].
         */
        settle_otc_order: TxDescriptor<Anonymize<Ia6sgngioc9e>>;
    };
    LBP: {
        /**
         *See [`Pallet::create_pool`].
         */
        create_pool: TxDescriptor<Anonymize<I3qhjmr9i9etho>>;
        /**
         *See [`Pallet::update_pool_data`].
         */
        update_pool_data: TxDescriptor<Anonymize<I13ss7bvftqcnq>>;
        /**
         *See [`Pallet::add_liquidity`].
         */
        add_liquidity: TxDescriptor<Anonymize<Ic3gahhrcopfnt>>;
        /**
         *See [`Pallet::remove_liquidity`].
         */
        remove_liquidity: TxDescriptor<Anonymize<I9n7ns8k72amhv>>;
        /**
         *See [`Pallet::sell`].
         */
        sell: TxDescriptor<Anonymize<I2co61imvsepb6>>;
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<I2co61imvsepb6>>;
    };
    XYK: {
        /**
         *See [`Pallet::create_pool`].
         */
        create_pool: TxDescriptor<Anonymize<Icjk91npopm3h9>>;
        /**
         *See [`Pallet::add_liquidity`].
         */
        add_liquidity: TxDescriptor<Anonymize<Ie03o0h06lol9p>>;
        /**
         *See [`Pallet::remove_liquidity`].
         */
        remove_liquidity: TxDescriptor<Anonymize<Ie6ot1bq9o2jef>>;
        /**
         *See [`Pallet::sell`].
         */
        sell: TxDescriptor<Anonymize<I6ap0qjh5n5817>>;
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<I6ap0qjh5n5817>>;
    };
    Referrals: {
        /**
         *See [`Pallet::register_code`].
         */
        register_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *See [`Pallet::link_code`].
         */
        link_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *See [`Pallet::convert`].
         */
        convert: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *See [`Pallet::claim_rewards`].
         */
        claim_rewards: TxDescriptor<undefined>;
        /**
         *See [`Pallet::set_reward_percentage`].
         */
        set_reward_percentage: TxDescriptor<Anonymize<Ionfhf9va2t31>>;
    };
    Tokens: {
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<Ibbvcet1pv1l61>>;
        /**
         *See [`Pallet::transfer_all`].
         */
        transfer_all: TxDescriptor<Anonymize<I67bpqa7o2ocua>>;
        /**
         *See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<Ibbvcet1pv1l61>>;
        /**
         *See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I2holodggoluon>>;
        /**
         *See [`Pallet::set_balance`].
         */
        set_balance: TxDescriptor<Anonymize<Ib5umq5uf644jr>>;
    };
    Currencies: {
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<Ibbvcet1pv1l61>>;
        /**
         *See [`Pallet::transfer_native_currency`].
         */
        transfer_native_currency: TxDescriptor<Anonymize<I9r83fr4b3rmmj>>;
        /**
         *See [`Pallet::update_balance`].
         */
        update_balance: TxDescriptor<Anonymize<I24s4g6gkj5oec>>;
    };
    Vesting: {
        /**
         *See [`Pallet::claim`].
         */
        claim: TxDescriptor<undefined>;
        /**
         *See [`Pallet::vested_transfer`].
         */
        vested_transfer: TxDescriptor<Anonymize<Iapqe6jot9df6>>;
        /**
         *See [`Pallet::update_vesting_schedules`].
         */
        update_vesting_schedules: TxDescriptor<Anonymize<If64i3fucaastf>>;
        /**
         *See [`Pallet::claim_for`].
         */
        claim_for: TxDescriptor<Anonymize<Ietluscr05n0a8>>;
    };
    EVM: {
        /**
         *See [`Pallet::withdraw`].
         */
        withdraw: TxDescriptor<Anonymize<Idcabvplu05lea>>;
        /**
         *See [`Pallet::call`].
         */
        call: TxDescriptor<Anonymize<I2ncccle6pmhd9>>;
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<I92bnd3pe0civj>>;
        /**
         *See [`Pallet::create2`].
         */
        create2: TxDescriptor<Anonymize<Ic84i538n8bl8j>>;
    };
    Ethereum: {
        /**
         *See [`Pallet::transact`].
         */
        transact: TxDescriptor<Anonymize<Ia8ogbeici6lip>>;
    };
    EVMAccounts: {
        /**
         *See [`Pallet::bind_evm_address`].
         */
        bind_evm_address: TxDescriptor<undefined>;
        /**
         *See [`Pallet::add_contract_deployer`].
         */
        add_contract_deployer: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *See [`Pallet::remove_contract_deployer`].
         */
        remove_contract_deployer: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *See [`Pallet::renounce_contract_deployer`].
         */
        renounce_contract_deployer: TxDescriptor<undefined>;
    };
    XYKLiquidityMining: {
        /**
         *See [`Pallet::create_global_farm`].
         */
        create_global_farm: TxDescriptor<Anonymize<I10hmgseei3j6r>>;
        /**
         *See [`Pallet::update_global_farm`].
         */
        update_global_farm: TxDescriptor<Anonymize<I8p4numg1r4ojm>>;
        /**
         *See [`Pallet::terminate_global_farm`].
         */
        terminate_global_farm: TxDescriptor<Anonymize<I9q8qmop6bko5m>>;
        /**
         *See [`Pallet::create_yield_farm`].
         */
        create_yield_farm: TxDescriptor<Anonymize<Idtucog650c7f8>>;
        /**
         *See [`Pallet::update_yield_farm`].
         */
        update_yield_farm: TxDescriptor<Anonymize<I4kvfua9fqrpi2>>;
        /**
         *See [`Pallet::stop_yield_farm`].
         */
        stop_yield_farm: TxDescriptor<Anonymize<I7t5blhj97u8r7>>;
        /**
         *See [`Pallet::resume_yield_farm`].
         */
        resume_yield_farm: TxDescriptor<Anonymize<I21qpgggberqt3>>;
        /**
         *See [`Pallet::terminate_yield_farm`].
         */
        terminate_yield_farm: TxDescriptor<Anonymize<Id7r4m9aulb7sn>>;
        /**
         *See [`Pallet::deposit_shares`].
         */
        deposit_shares: TxDescriptor<Anonymize<Ielqbuofrsq2ri>>;
        /**
         *See [`Pallet::redeposit_shares`].
         */
        redeposit_shares: TxDescriptor<Anonymize<Iaehj4ajaudum7>>;
        /**
         *See [`Pallet::claim_rewards`].
         */
        claim_rewards: TxDescriptor<Anonymize<I2k37dcoppgins>>;
        /**
         *See [`Pallet::withdraw_shares`].
         */
        withdraw_shares: TxDescriptor<Anonymize<Id83ilm95if0sl>>;
    };
    DCA: {
        /**
         *See [`Pallet::schedule`].
         */
        schedule: TxDescriptor<Anonymize<Ico8a80unk7v19>>;
        /**
         *See [`Pallet::terminate`].
         */
        terminate: TxDescriptor<Anonymize<Ib9aiguc778ujf>>;
    };
    Scheduler: {
        /**
         *See [`Pallet::schedule`].
         */
        schedule: TxDescriptor<Anonymize<Id8iisbt404cdq>>;
        /**
         *See [`Pallet::cancel`].
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *See [`Pallet::schedule_named`].
         */
        schedule_named: TxDescriptor<Anonymize<Idfjtnp5n5am6q>>;
        /**
         *See [`Pallet::cancel_named`].
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
         *See [`Pallet::schedule_after`].
         */
        schedule_after: TxDescriptor<Anonymize<I65cco11c1cc37>>;
        /**
         *See [`Pallet::schedule_named_after`].
         */
        schedule_named_after: TxDescriptor<Anonymize<Ie0iohak3dljd>>;
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
    OrmlXcm: {
        /**
         *See [`Pallet::send_as_sovereign`].
         */
        send_as_sovereign: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
    };
    XTokens: {
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I6t8mv3ij8f6jn>>;
        /**
         *See [`Pallet::transfer_multiasset`].
         */
        transfer_multiasset: TxDescriptor<Anonymize<Idu1ujel33jksu>>;
        /**
         *See [`Pallet::transfer_with_fee`].
         */
        transfer_with_fee: TxDescriptor<Anonymize<I1ii8c8cvda9o5>>;
        /**
         *See [`Pallet::transfer_multiasset_with_fee`].
         */
        transfer_multiasset_with_fee: TxDescriptor<Anonymize<I40fog3d0qlub1>>;
        /**
         *See [`Pallet::transfer_multicurrencies`].
         */
        transfer_multicurrencies: TxDescriptor<Anonymize<Ibahh2k28pd3rl>>;
        /**
         *See [`Pallet::transfer_multiassets`].
         */
        transfer_multiassets: TxDescriptor<Anonymize<Iaif2nhfhk9qc0>>;
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
    EmaOracle: {
        /**
         *See [`Pallet::add_oracle`].
         */
        add_oracle: TxDescriptor<Anonymize<Iabgdocrka40v9>>;
        /**
         *See [`Pallet::remove_oracle`].
         */
        remove_oracle: TxDescriptor<Anonymize<Iabgdocrka40v9>>;
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<I37198fc8nlna5>>;
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
    MultiTransactionPayment: {
        /**
         *CurrencySet
         *[who, currency]
         */
        CurrencySet: PlainDescriptor<Anonymize<I1o37fpk9vgbri>>;
        /**
         *New accepted currency added
         *[currency]
         */
        CurrencyAdded: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Accepted currency removed
         *[currency]
         */
        CurrencyRemoved: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Transaction fee paid in non-native currency
         *[Account, Currency, Native fee amount, Non-native fee amount, Destination account]
         */
        FeeWithdrawn: PlainDescriptor<Anonymize<I859063tfqget1>>;
    };
    Treasury: {
        /**
         *New proposal.
         */
        Proposed: PlainDescriptor<Anonymize<I44hc4lgsn4o1j>>;
        /**
         *We have ended a spend period and will now allocate funds.
         */
        Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>>;
        /**
         *Some funds have been allocated.
         */
        Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>>;
        /**
         *A proposal was rejected; funds were slashed.
         */
        Rejected: PlainDescriptor<Anonymize<Ifgqhle2413de7>>;
        /**
         *Some of our funds have been burnt.
         */
        Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>>;
        /**
         *Spending has finished; this is the amount that rolls over until next spend.
         */
        Rollover: PlainDescriptor<Anonymize<I76riseemre533>>;
        /**
         *Some funds have been deposited.
         */
        Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>>;
        /**
         *A new spend proposal has been approved.
         */
        SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>>;
        /**
         *The inactive funds of the pallet have been updated.
         */
        UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>>;
        /**
         *A new asset spend proposal has been approved.
         */
        AssetSpendApproved: PlainDescriptor<Anonymize<I8usdc6tg7829p>>;
        /**
         *An approved spend was voided.
         */
        AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A payment happened.
         */
        Paid: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A payment failed and can be retried.
         */
        PaymentFailed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A spend was processed and removed from the storage. It might have been successfully
         *paid or it may have expired.
         */
        SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Utility: {
        /**
         *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
         *well as the error.
         */
        BatchInterrupted: PlainDescriptor<Anonymize<If5f66j638r2u7>>;
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
        ItemFailed: PlainDescriptor<Anonymize<Ibs3esn1s24jlu>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ibqj96eumlo3jb>>;
    };
    Preimage: {
        /**
         *A preimage has been noted.
         */
        Noted: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *A preimage has been requested.
         */
        Requested: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *A preimage has ben cleared.
         */
        Cleared: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
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
    Democracy: {
        /**
         *A motion has been proposed by a public account.
         */
        Proposed: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
         *A public proposal has been tabled for referendum vote.
         */
        Tabled: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
         *An external proposal has been tabled.
         */
        ExternalTabled: PlainDescriptor<undefined>;
        /**
         *A referendum has begun.
         */
        Started: PlainDescriptor<Anonymize<I62ffgu6q2478o>>;
        /**
         *A proposal has been approved by referendum.
         */
        Passed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *A proposal has been rejected by referendum.
         */
        NotPassed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *A referendum has been cancelled.
         */
        Cancelled: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *An account has delegated their vote to another account.
         */
        Delegated: PlainDescriptor<Anonymize<I10r7il4gvbcae>>;
        /**
         *An account has cancelled a previous delegation operation.
         */
        Undelegated: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *An external proposal has been vetoed.
         */
        Vetoed: PlainDescriptor<Anonymize<I2c00i2bngegk9>>;
        /**
         *A proposal_hash has been blacklisted permanently.
         */
        Blacklisted: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *An account has voted in a referendum
         */
        Voted: PlainDescriptor<Anonymize<Iet7kfijhihjik>>;
        /**
         *An account has secconded a proposal
         */
        Seconded: PlainDescriptor<Anonymize<I2vrbos7ogo6ps>>;
        /**
         *A proposal got canceled.
         */
        ProposalCanceled: PlainDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
         *Metadata for a proposal or a referendum has been set.
         */
        MetadataSet: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
         *Metadata for a proposal or a referendum has been cleared.
         */
        MetadataCleared: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
         *Metadata has been transferred to new owner.
         */
        MetadataTransferred: PlainDescriptor<Anonymize<I4ljshcevmm3p2>>;
    };
    Elections: {
        /**
         *A new term with new_members. This indicates that enough candidates existed to run
         *the election, not that enough have has been elected. The inner value must be examined
         *for this purpose. A `NewTerm(\[\])` indicates that some candidates got their bond
         *slashed and none were elected, whilst `EmptyTerm` means that no candidates existed to
         *begin with.
         */
        NewTerm: PlainDescriptor<Anonymize<Iaofef34v2445a>>;
        /**
         *No (or not enough) candidates existed for this round. This is different from
         *`NewTerm(\[\])`. See the description of `NewTerm`.
         */
        EmptyTerm: PlainDescriptor<undefined>;
        /**
         *Internal error happened while trying to perform election.
         */
        ElectionError: PlainDescriptor<undefined>;
        /**
         *A member has been removed. This should always be followed by either `NewTerm` or
         *`EmptyTerm`.
         */
        MemberKicked: PlainDescriptor<Anonymize<Ie3gphha4ejh40>>;
        /**
         *Someone has renounced their candidacy.
         */
        Renounced: PlainDescriptor<Anonymize<I4b66js88p45m8>>;
        /**
         *A candidate was slashed by amount due to failing to obtain a seat as member or
         *runner-up.
         *
         *Note that old members and runners-up are also candidates.
         */
        CandidateSlashed: PlainDescriptor<Anonymize<I50d9r8lrdga93>>;
        /**
         *A seat holder was slashed by amount by being forcefully removed from the set.
         */
        SeatHolderSlashed: PlainDescriptor<Anonymize<I27avf13g71mla>>;
    };
    Council: {
        /**
         *A motion (given hash) has been proposed (by given account) with a threshold (given
         *`MemberCount`).
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
         *A motion (given hash) has been voted on by given account, leaving
         *a tally (yes votes and no votes given respectively as `MemberCount`).
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
         *A motion was approved by the required threshold.
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was not approved by the required threshold.
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was executed; result will be `Ok` if it returned without error.
         */
        Executed: PlainDescriptor<Anonymize<Idb0larbt92hmf>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<Idb0larbt92hmf>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    TechnicalCommittee: {
        /**
         *A motion (given hash) has been proposed (by given account) with a threshold (given
         *`MemberCount`).
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
         *A motion (given hash) has been voted on by given account, leaving
         *a tally (yes votes and no votes given respectively as `MemberCount`).
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
         *A motion was approved by the required threshold.
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was not approved by the required threshold.
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *A motion was executed; result will be `Ok` if it returned without error.
         */
        Executed: PlainDescriptor<Anonymize<Idb0larbt92hmf>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<Idb0larbt92hmf>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    Tips: {
        /**
         *A new tip suggestion has been opened.
         */
        NewTip: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
         *A tip suggestion has reached threshold and is closing.
         */
        TipClosing: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
         *A tip suggestion has been closed.
         */
        TipClosed: PlainDescriptor<Anonymize<Ierev02d74bpoa>>;
        /**
         *A tip suggestion has been retracted.
         */
        TipRetracted: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
         *A tip suggestion has been slashed.
         */
        TipSlashed: PlainDescriptor<Anonymize<Ic836gl3ins837>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ibqj96eumlo3jb>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<Ic3vmcebni2jj7>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I3opji3hcv2fmd>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I3opji3hcv2fmd>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<I7goua51ub7klk>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Uniques: {
        /**
         *A `collection` was created.
         */
        Created: PlainDescriptor<Anonymize<I86naabrotue2j>>;
        /**
         *A `collection` was force-created.
         */
        ForceCreated: PlainDescriptor<Anonymize<I2r637rurl4t61>>;
        /**
         *A `collection` was destroyed.
         */
        Destroyed: PlainDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *An `item` was issued.
         */
        Issued: PlainDescriptor<Anonymize<I846j8gk91gp4q>>;
        /**
         *An `item` was transferred.
         */
        Transferred: PlainDescriptor<Anonymize<Iar6hlsh10hqst>>;
        /**
         *An `item` was destroyed.
         */
        Burned: PlainDescriptor<Anonymize<I846j8gk91gp4q>>;
        /**
         *Some `item` was frozen.
         */
        Frozen: PlainDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *Some `item` was thawed.
         */
        Thawed: PlainDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *Some `collection` was frozen.
         */
        CollectionFrozen: PlainDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *Some `collection` was thawed.
         */
        CollectionThawed: PlainDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *The owner changed.
         */
        OwnerChanged: PlainDescriptor<Anonymize<I2970lus2v0qct>>;
        /**
         *The management team changed.
         */
        TeamChanged: PlainDescriptor<Anonymize<I1vsbo63n9pu69>>;
        /**
         *An `item` of a `collection` has been approved by the `owner` for transfer by
         *a `delegate`.
         */
        ApprovedTransfer: PlainDescriptor<Anonymize<I89nkv9adctj3n>>;
        /**
         *An approval for a `delegate` account to transfer the `item` of an item
         *`collection` was cancelled by its `owner`.
         */
        ApprovalCancelled: PlainDescriptor<Anonymize<I89nkv9adctj3n>>;
        /**
         *A `collection` has had its attributes changed by the `Force` origin.
         */
        ItemStatusChanged: PlainDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *New metadata has been set for a `collection`.
         */
        CollectionMetadataSet: PlainDescriptor<Anonymize<I9oai3q0an1tbo>>;
        /**
         *Metadata has been cleared for a `collection`.
         */
        CollectionMetadataCleared: PlainDescriptor<Anonymize<I88sl1jplq27bh>>;
        /**
         *New metadata has been set for an item.
         */
        MetadataSet: PlainDescriptor<Anonymize<I9e4bfe80t2int>>;
        /**
         *Metadata has been cleared for an item.
         */
        MetadataCleared: PlainDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *Metadata has been cleared for an item.
         */
        Redeposited: PlainDescriptor<Anonymize<I5seehdocrcoau>>;
        /**
         *New attribute metadata has been set for a `collection` or `item`.
         */
        AttributeSet: PlainDescriptor<Anonymize<I62ht2i39rtkaa>>;
        /**
         *Attribute metadata has been cleared for a `collection` or `item`.
         */
        AttributeCleared: PlainDescriptor<Anonymize<Ichf8eu9t3dtc2>>;
        /**
         *Ownership acceptance has changed for an account.
         */
        OwnershipAcceptanceChanged: PlainDescriptor<Anonymize<Ic2kg6kak0gd23>>;
        /**
         *Max supply has been set for a collection.
         */
        CollectionMaxSupplySet: PlainDescriptor<Anonymize<Idj9k8sn80h3m6>>;
        /**
         *The price was set for the instance.
         */
        ItemPriceSet: PlainDescriptor<Anonymize<I2odpdgf7k5003>>;
        /**
         *The price for the instance was removed.
         */
        ItemPriceRemoved: PlainDescriptor<Anonymize<I92ucef7ff2o7l>>;
        /**
         *An item was bought.
         */
        ItemBought: PlainDescriptor<Anonymize<Ifmob7l1au7mdj>>;
    };
    StateTrieMigration: {
        /**
         *Given number of `(top, child)` keys were migrated respectively, with the given
         *`compute`.
         */
        Migrated: PlainDescriptor<Anonymize<Iagqcb06kbevb1>>;
        /**
         *Some account got slashed by the given amount.
         */
        Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *The auto migration task finished.
         */
        AutoMigrationFinished: PlainDescriptor<undefined>;
        /**
         *Migration got halted due to an error or miss-configuration.
         */
        Halted: PlainDescriptor<Anonymize<Iec8defeh924b6>>;
    };
    AssetRegistry: {
        /**
         *Existential deposit for insufficinet asset was paid.
         *`SufficiencyCheck` triggers this event.
         */
        ExistentialDepositPaid: PlainDescriptor<Anonymize<I6cn8fgvhihc8u>>;
        /**
         *Asset was registered.
         */
        Registered: PlainDescriptor<Anonymize<I5spr699klbpc7>>;
        /**
         *Asset was updated.
         */
        Updated: PlainDescriptor<Anonymize<I5spr699klbpc7>>;
        /**
         *Native location set for an asset.
         */
        LocationSet: PlainDescriptor<Anonymize<Ir72g75rutn0i>>;
        /**
         *Asset was banned.
         */
        AssetBanned: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *Asset's ban was removed.
         */
        AssetUnbanned: PlainDescriptor<Anonymize<Ia5le7udkgbaq9>>;
    };
    Claims: {
        /**
        
         */
        Claim: PlainDescriptor<Anonymize<I7i2rquf9o1sc4>>;
    };
    CollatorRewards: {
        /**
         *Collator was rewarded.
         */
        CollatorRewarded: PlainDescriptor<Anonymize<I32ndibr4v59gl>>;
    };
    Omnipool: {
        /**
         *An asset was added to Omnipool
         */
        TokenAdded: PlainDescriptor<Anonymize<Ichvhj93no2r9s>>;
        /**
         *An asset was removed from Omnipool
         */
        TokenRemoved: PlainDescriptor<Anonymize<Ibo4guh1r2d417>>;
        /**
         *Liquidity of an asset was added to Omnipool.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<I5bdik3e9dtr9m>>;
        /**
         *Liquidity of an asset was removed from Omnipool.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<Idml4kfacbec4q>>;
        /**
         *PRotocol Liquidity was removed from Omnipool.
         */
        ProtocolLiquidityRemoved: PlainDescriptor<Anonymize<I5po34152rrdd1>>;
        /**
         *Sell trade executed.
         */
        SellExecuted: PlainDescriptor<Anonymize<I8gu0uupiacpfc>>;
        /**
         *Buy trade executed.
         */
        BuyExecuted: PlainDescriptor<Anonymize<I8gu0uupiacpfc>>;
        /**
         *LP Position was created and NFT instance minted.
         */
        PositionCreated: PlainDescriptor<Anonymize<I3qaapujidulnv>>;
        /**
         *LP Position was destroyed and NFT instance burned.
         */
        PositionDestroyed: PlainDescriptor<Anonymize<I5u2c8nrbcec0n>>;
        /**
         *LP Position was updated.
         */
        PositionUpdated: PlainDescriptor<Anonymize<I3qaapujidulnv>>;
        /**
         *Asset's tradable state has been updated.
         */
        TradableStateUpdated: PlainDescriptor<Anonymize<Iefviakco48cs2>>;
        /**
         *Amount has been refunded for asset which has not been accepted to add to omnipool.
         */
        AssetRefunded: PlainDescriptor<Anonymize<Iakb7idgif10m8>>;
        /**
         *Asset's weight cap has been updated.
         */
        AssetWeightCapUpdated: PlainDescriptor<Anonymize<Id7aqsj1u6b2r2>>;
    };
    TransactionPause: {
        /**
         *Paused transaction
         */
        TransactionPaused: PlainDescriptor<Anonymize<I193fovq1blcqu>>;
        /**
         *Unpaused transaction
         */
        TransactionUnpaused: PlainDescriptor<Anonymize<I193fovq1blcqu>>;
    };
    Duster: {
        /**
         *Account dusted.
         */
        Dusted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Account added to non-dustable list.
         */
        Added: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Account removed from non-dustable list.
         */
        Removed: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    OmnipoolWarehouseLM: {
        /**
         *Global farm accumulated reward per share was updated.
         */
        GlobalFarmAccRPZUpdated: PlainDescriptor<Anonymize<I4qeb32vu4p1o2>>;
        /**
         *Yield farm accumulated reward per valued share was updated.
         */
        YieldFarmAccRPVSUpdated: PlainDescriptor<Anonymize<Icatb69nkfsv2d>>;
        /**
         *Global farm has no more rewards to distribute in the moment.
         */
        AllRewardsDistributed: PlainDescriptor<Anonymize<I9q8qmop6bko5m>>;
    };
    OmnipoolLiquidityMining: {
        /**
         *New global farm was created.
         */
        GlobalFarmCreated: PlainDescriptor<Anonymize<Iao3tfuiovep78>>;
        /**
         *Global farm was updated
         */
        GlobalFarmUpdated: PlainDescriptor<Anonymize<I1cq0joe6ba7us>>;
        /**
         *Global farm was terminated.
         */
        GlobalFarmTerminated: PlainDescriptor<Anonymize<I8p8774nu1gec7>>;
        /**
         *New yield farm was added to the farm.
         */
        YieldFarmCreated: PlainDescriptor<Anonymize<I58kb78e8933i0>>;
        /**
         *Yield farm multiplier was updated.
         */
        YieldFarmUpdated: PlainDescriptor<Anonymize<Idhf8n2m782jc6>>;
        /**
         *Yield farm for `asset_id` was stopped.
         */
        YieldFarmStopped: PlainDescriptor<Anonymize<I8qbcd8kjt9b35>>;
        /**
         *Yield farm for `asset_id` was resumed.
         */
        YieldFarmResumed: PlainDescriptor<Anonymize<Idhf8n2m782jc6>>;
        /**
         *Yield farm was terminated from the global farm.
         */
        YieldFarmTerminated: PlainDescriptor<Anonymize<I8qbcd8kjt9b35>>;
        /**
         *New LP shares(LP position) were deposited.
         */
        SharesDeposited: PlainDescriptor<Anonymize<I9fddbmtajbhgk>>;
        /**
         *Already locked LP shares were redeposited to another yield farm.
         */
        SharesRedeposited: PlainDescriptor<Anonymize<I9fddbmtajbhgk>>;
        /**
         *Rewards were claimed.
         */
        RewardClaimed: PlainDescriptor<Anonymize<I16oglmrf6q8h2>>;
        /**
         *LP shares were withdrawn.
         */
        SharesWithdrawn: PlainDescriptor<Anonymize<I56vurdc4pd324>>;
        /**
         *All LP shares were unlocked and NFT representing deposit was destroyed.
         */
        DepositDestroyed: PlainDescriptor<Anonymize<Iv3iro9hpdvcu>>;
    };
    OTC: {
        /**
         *An Order has been cancelled
         */
        Cancelled: PlainDescriptor<Anonymize<Ibq6b0nsk23kj8>>;
        /**
         *An Order has been completely filled
         */
        Filled: PlainDescriptor<Anonymize<I725512ll00rul>>;
        /**
         *An Order has been partially filled
         */
        PartiallyFilled: PlainDescriptor<Anonymize<I725512ll00rul>>;
        /**
         *An Order has been placed
         */
        Placed: PlainDescriptor<Anonymize<Ibnohbnq46n24i>>;
    };
    CircuitBreaker: {
        /**
         *Trade volume limit of an asset was changed.
         */
        TradeVolumeLimitChanged: PlainDescriptor<Anonymize<I2i1tilmsb1rl1>>;
        /**
         *Add liquidity limit of an asset was changed.
         */
        AddLiquidityLimitChanged: PlainDescriptor<Anonymize<I4l0u1h71fhj81>>;
        /**
         *Remove liquidity limit of an asset was changed.
         */
        RemoveLiquidityLimitChanged: PlainDescriptor<Anonymize<I4l0u1h71fhj81>>;
    };
    Router: {
        /**
         *The route with trades has been successfully executed
         */
        Executed: PlainDescriptor<Anonymize<Iao268t9rbrp83>>;
        /**
         *The route with trades has been successfully executed
         */
        RouteUpdated: PlainDescriptor<Anonymize<I11glevchscfbg>>;
    };
    Staking: {
        /**
         *New staking position was created and NFT was minted.
         */
        PositionCreated: PlainDescriptor<Anonymize<Ifrsdu7763lo3e>>;
        /**
         *Staked amount for existing position was increased.
         */
        StakeAdded: PlainDescriptor<Anonymize<I1rcm9o2k31p0u>>;
        /**
         *Rewards were claimed.
         */
        RewardsClaimed: PlainDescriptor<Anonymize<I90op6i3kabg2t>>;
        /**
         *Staked amount was withdrawn and NFT was burned.
         */
        Unstaked: PlainDescriptor<Anonymize<If7ps0a75qku2k>>;
        /**
         *Staking was initialized.
         */
        StakingInitialized: PlainDescriptor<Anonymize<I4qcsbrcg45e5p>>;
        /**
         *Staking's `accumulated_reward_per_stake` was updated.
         */
        AccumulatedRpsUpdated: PlainDescriptor<Anonymize<I2gupahud9i8tv>>;
    };
    Stableswap: {
        /**
         *A pool was created.
         */
        PoolCreated: PlainDescriptor<Anonymize<Idmv46n4bkamls>>;
        /**
         *Pool fee has been updated.
         */
        FeeUpdated: PlainDescriptor<Anonymize<Ics8sn0t3vlpat>>;
        /**
         *Liquidity of an asset was added to a pool.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<I88qo502j1hm6r>>;
        /**
         *Liquidity removed.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<I44sqbdseede38>>;
        /**
         *Sell trade executed. Trade fee paid in asset leaving the pool (already subtracted from amount_out).
         */
        SellExecuted: PlainDescriptor<Anonymize<I203slt75ll6b5>>;
        /**
         *Buy trade executed. Trade fee paid in asset entering the pool (already included in amount_in).
         */
        BuyExecuted: PlainDescriptor<Anonymize<I203slt75ll6b5>>;
        /**
         *Asset's tradable state has been updated.
         */
        TradableStateUpdated: PlainDescriptor<Anonymize<Iest0fomljvrb6>>;
        /**
         *AAmplification of a pool has been scheduled to change.
         */
        AmplificationChanging: PlainDescriptor<Anonymize<I9buamva6m987d>>;
    };
    Bonds: {
        /**
         *A bond asset was registered
         */
        TokenCreated: PlainDescriptor<Anonymize<I15i908ukdv01j>>;
        /**
         *New bond were issued
         */
        Issued: PlainDescriptor<Anonymize<I3md9r9ud9jcmi>>;
        /**
         *Bonds were redeemed
         */
        Redeemed: PlainDescriptor<Anonymize<I4rlrhubptb25s>>;
    };
    OtcSettlements: {
        /**
         *A trade has been executed
         */
        Executed: PlainDescriptor<Anonymize<Ibb0j2hs2i32f5>>;
    };
    LBP: {
        /**
         *Pool was created by the `CreatePool` origin.
         */
        PoolCreated: PlainDescriptor<Anonymize<Iae6luacdfosbm>>;
        /**
         *Pool data were updated.
         */
        PoolUpdated: PlainDescriptor<Anonymize<Iae6luacdfosbm>>;
        /**
         *New liquidity was provided to the pool.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<Idvrgp2jjkjaee>>;
        /**
         *Liquidity was removed from the pool and the pool was destroyed.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<Idvrgp2jjkjaee>>;
        /**
         *Sale executed.
         */
        SellExecuted: PlainDescriptor<Anonymize<I6q2a2o24kbh1n>>;
        /**
         *Purchase executed.
         */
        BuyExecuted: PlainDescriptor<Anonymize<Iflfus32kckdgg>>;
    };
    XYK: {
        /**
         *New liquidity was provided to the pool.
         */
        LiquidityAdded: PlainDescriptor<Anonymize<Idvrgp2jjkjaee>>;
        /**
         *Liquidity was removed from the pool.
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<I7e9lbuqrul79d>>;
        /**
         *Pool was created.
         */
        PoolCreated: PlainDescriptor<Anonymize<Idpc6o3gv6oduv>>;
        /**
         *Pool was destroyed.
         */
        PoolDestroyed: PlainDescriptor<Anonymize<I789ltv1nd8rlg>>;
        /**
         *Asset sale executed.
         */
        SellExecuted: PlainDescriptor<Anonymize<I5nm6uebbrcvd2>>;
        /**
         *Asset purchase executed.
         */
        BuyExecuted: PlainDescriptor<Anonymize<I1966f4idd9els>>;
    };
    Referrals: {
        /**
         *Referral code has been registered.
         */
        CodeRegistered: PlainDescriptor<Anonymize<I8hof8vbjel5j0>>;
        /**
         *Referral code has been linked to an account.
         */
        CodeLinked: PlainDescriptor<Anonymize<Ic20as3skakdjb>>;
        /**
         *Asset has been converted to RewardAsset.
         */
        Converted: PlainDescriptor<Anonymize<Ieg2h8ei7d5hi>>;
        /**
         *Rewards claimed.
         */
        Claimed: PlainDescriptor<Anonymize<I8c5lgkcpg07sj>>;
        /**
         *New asset rewards has been set.
         */
        AssetRewardsUpdated: PlainDescriptor<Anonymize<Ionfhf9va2t31>>;
        /**
         *Referrer reached new level.
         */
        LevelUp: PlainDescriptor<Anonymize<Ieas3thfe5cojl>>;
    };
    Tokens: {
        /**
         *An account was created with some free balance.
         */
        Endowed: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *An account was removed whose balance was non-zero but below
         *ExistentialDeposit, resulting in an outright loss.
         */
        DustLost: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Transfer succeeded.
         */
        Transfer: PlainDescriptor<Anonymize<I82vqlr4shhaso>>;
        /**
         *Some balance was reserved (moved from free to reserved).
         */
        Reserved: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Some balance was unreserved (moved from reserved to free).
         */
        Unreserved: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Some reserved balance was repatriated (moved from reserved to
         *another account).
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I2age4ibb0qdmq>>;
        /**
         *A balance was set by root.
         */
        BalanceSet: PlainDescriptor<Anonymize<I4do2q74i35m>>;
        /**
         *The total issuance of an currency has been set
         */
        TotalIssuanceSet: PlainDescriptor<Anonymize<Iehf2srrsvlrt4>>;
        /**
         *Some balances were withdrawn (e.g. pay for transaction fee)
         */
        Withdrawn: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Some balances were slashed (e.g. due to mis-behavior)
         */
        Slashed: PlainDescriptor<Anonymize<I1a3321bv4rsn2>>;
        /**
         *Deposited some balance into an account
         */
        Deposited: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Some funds are locked
         */
        LockSet: PlainDescriptor<Anonymize<Ibmagsilt697o6>>;
        /**
         *Some locked funds were unlocked
         */
        LockRemoved: PlainDescriptor<Anonymize<I73g6utvpcmklb>>;
        /**
         *Some free balance was locked.
         */
        Locked: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Some locked balance was freed.
         */
        Unlocked: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
        
         */
        Issued: PlainDescriptor<Anonymize<Iehf2srrsvlrt4>>;
        /**
        
         */
        Rescinded: PlainDescriptor<Anonymize<Iehf2srrsvlrt4>>;
    };
    Currencies: {
        /**
         *Currency transfer success.
         */
        Transferred: PlainDescriptor<Anonymize<I82vqlr4shhaso>>;
        /**
         *Update balance success.
         */
        BalanceUpdated: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Deposit success.
         */
        Deposited: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
        /**
         *Withdraw success.
         */
        Withdrawn: PlainDescriptor<Anonymize<I24s4g6gkj5oec>>;
    };
    Vesting: {
        /**
         *Added new vesting schedule.
         */
        VestingScheduleAdded: PlainDescriptor<Anonymize<I4uo49pmivhb33>>;
        /**
         *Claimed vesting.
         */
        Claimed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *Updated vesting schedules.
         */
        VestingSchedulesUpdated: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    EVM: {
        /**
         *Ethereum events from contracts.
         */
        Log: PlainDescriptor<Anonymize<Ifmc9boeeia623>>;
        /**
         *A contract has been created at given address.
         */
        Created: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *A contract was attempted to be created, but the execution failed.
         */
        CreatedFailed: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *A contract has been executed successfully with states applied.
         */
        Executed: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *A contract has been executed with errors. States are reverted with only gas fees applied.
         */
        ExecutedFailed: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
    };
    Ethereum: {
        /**
         *An ethereum transaction was successfully executed.
         */
        Executed: PlainDescriptor<Anonymize<Iea4g5ovhnolus>>;
    };
    EVMAccounts: {
        /**
         *Binding was created.
         */
        Bound: PlainDescriptor<Anonymize<I8363i1h1dgh0n>>;
        /**
         *Deployer was added.
         */
        DeployerAdded: PlainDescriptor<Anonymize<Ibqjgs3foip9fb>>;
        /**
         *Deployer was removed.
         */
        DeployerRemoved: PlainDescriptor<Anonymize<Ibqjgs3foip9fb>>;
    };
    XYKLiquidityMining: {
        /**
         *New global farm was created.
         */
        GlobalFarmCreated: PlainDescriptor<Anonymize<I4o7otrppfgqfl>>;
        /**
         *Global farm's `price_adjustment` was updated.
         */
        GlobalFarmUpdated: PlainDescriptor<Anonymize<I4h1hamhsvt02v>>;
        /**
         *New yield farm was added into the farm.
         */
        YieldFarmCreated: PlainDescriptor<Anonymize<Ibil4nv30gc4gi>>;
        /**
         *Global farm was terminated.
         */
        GlobalFarmTerminated: PlainDescriptor<Anonymize<I8p8774nu1gec7>>;
        /**
         *New LP tokens was deposited.
         */
        SharesDeposited: PlainDescriptor<Anonymize<I2k8785n6tr14a>>;
        /**
         *LP token was redeposited for a new yield farm entry
         */
        SharesRedeposited: PlainDescriptor<Anonymize<I2k8785n6tr14a>>;
        /**
         *Rewards was claimed.
         */
        RewardClaimed: PlainDescriptor<Anonymize<I16oglmrf6q8h2>>;
        /**
         *LP tokens was withdrawn.
         */
        SharesWithdrawn: PlainDescriptor<Anonymize<I2k8785n6tr14a>>;
        /**
         *Yield farm for asset pair was stopped.
         */
        YieldFarmStopped: PlainDescriptor<Anonymize<I1mm5epgr01rv3>>;
        /**
         *Yield farm for asset pair was resumed.
         */
        YieldFarmResumed: PlainDescriptor<Anonymize<Ia4163nej70ub3>>;
        /**
         *Yield farm was terminated from global farm.
         */
        YieldFarmTerminated: PlainDescriptor<Anonymize<I1mm5epgr01rv3>>;
        /**
         *Yield farm multiplier was updated.
         */
        YieldFarmUpdated: PlainDescriptor<Anonymize<Ia4163nej70ub3>>;
        /**
         *NFT representing deposit has been destroyed
         */
        DepositDestroyed: PlainDescriptor<Anonymize<Iv3iro9hpdvcu>>;
    };
    XYKWarehouseLM: {
        /**
         *Global farm accumulated reward per share was updated.
         */
        GlobalFarmAccRPZUpdated: PlainDescriptor<Anonymize<I4qeb32vu4p1o2>>;
        /**
         *Yield farm accumulated reward per valued share was updated.
         */
        YieldFarmAccRPVSUpdated: PlainDescriptor<Anonymize<Icatb69nkfsv2d>>;
        /**
         *Global farm has no more rewards to distribute in the moment.
         */
        AllRewardsDistributed: PlainDescriptor<Anonymize<I9q8qmop6bko5m>>;
    };
    RelayChainInfo: {
        /**
         *Current block numbers
         *[ Parachain block number, Relaychain Block number ]
         */
        CurrentBlockNumbers: PlainDescriptor<Anonymize<Iec641q1s1ifm2>>;
    };
    DCA: {
        /**
         *The DCA execution is started
         */
        ExecutionStarted: PlainDescriptor<Anonymize<I4rrqp6atse8pe>>;
        /**
         *The DCA is scheduled for next execution
         */
        Scheduled: PlainDescriptor<Anonymize<I17mdck5880djt>>;
        /**
         *The DCA is planned for blocknumber
         */
        ExecutionPlanned: PlainDescriptor<Anonymize<I140nraqvlukpk>>;
        /**
         *The DCA trade is successfully executed
         */
        TradeExecuted: PlainDescriptor<Anonymize<Irs8utdvl0ftp>>;
        /**
         *The DCA trade execution is failed
         */
        TradeFailed: PlainDescriptor<Anonymize<Iened6fgpg1iel>>;
        /**
         *The DCA is terminated and completely removed from the chain
         */
        Terminated: PlainDescriptor<Anonymize<Iened6fgpg1iel>>;
        /**
         *The DCA is completed and completely removed from the chain
         */
        Completed: PlainDescriptor<Anonymize<Iumh462jqskl8>>;
        /**
         *Randomness generation failed possibly coming from missing data about relay chain
         */
        RandomnessGenerationFailed: PlainDescriptor<Anonymize<If2udmk8jhl6id>>;
    };
    Scheduler: {
        /**
         *Scheduled some task.
         */
        Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Canceled some task.
         */
        Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Dispatched some task.
         */
        Dispatched: PlainDescriptor<Anonymize<Id17a14lhd6e8s>>;
        /**
         *The call for the provided hash was not found so the task has been aborted.
         */
        CallUnavailable: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task was unable to be renewed since the agenda is full at that block.
         */
        PeriodicFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task can never be executed since it is overweight.
         */
        PermanentlyOverweight: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
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
    XcmpQueue: {
        /**
         *An HRMP message was sent to a sibling parachain.
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
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
    OrmlXcm: {
        /**
         *XCM message sent. \[to, message\]
         */
        Sent: PlainDescriptor<Anonymize<Id3ajno3thjgec>>;
    };
    XTokens: {
        /**
         *Transferred `Asset` with fee.
         */
        TransferredAssets: PlainDescriptor<Anonymize<Ic04t5m0ihvrp5>>;
    };
    UnknownTokens: {
        /**
         *Deposit success.
         */
        Deposited: PlainDescriptor<Anonymize<I7id9rd759h17f>>;
        /**
         *Withdraw success.
         */
        Withdrawn: PlainDescriptor<Anonymize<I7id9rd759h17f>>;
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
    EmaOracle: {
        /**
         *Oracle was added to the whitelist.
         */
        AddedToWhitelist: PlainDescriptor<Anonymize<Iabgdocrka40v9>>;
        /**
         *Oracle was removed from the whitelist.
         */
        RemovedFromWhitelist: PlainDescriptor<Anonymize<Iabgdocrka40v9>>;
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
    MultiTransactionPayment: {
        /**
         *Selected currency is not supported.
         */
        UnsupportedCurrency: PlainDescriptor<undefined>;
        /**
         *Account balance should be non-zero.
         */
        ZeroBalance: PlainDescriptor<undefined>;
        /**
         *Currency is already in the list of accepted currencies.
         */
        AlreadyAccepted: PlainDescriptor<undefined>;
        /**
         *It is not allowed to add Core Asset as accepted currency. Core asset is accepted by design.
         */
        CoreAssetNotAllowed: PlainDescriptor<undefined>;
        /**
         *Fallback price cannot be zero.
         */
        ZeroPrice: PlainDescriptor<undefined>;
        /**
         *Fallback price was not found.
         */
        FallbackPriceNotFound: PlainDescriptor<undefined>;
        /**
         *Math overflow
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *It is not allowed to change payment currency of an EVM account.
         */
        EvmAccountNotAllowed: PlainDescriptor<undefined>;
        /**
         *EVM permit expired.
         */
        EvmPermitExpired: PlainDescriptor<undefined>;
        /**
         *EVM permit is invalid.
         */
        EvmPermitInvalid: PlainDescriptor<undefined>;
        /**
         *EVM permit call failed.
         */
        EvmPermitCallExecutionError: PlainDescriptor<undefined>;
        /**
         *EVM permit call failed.
         */
        EvmPermitRunnerError: PlainDescriptor<undefined>;
    };
    Treasury: {
        /**
         *Proposer's balance is too low.
         */
        InsufficientProposersBalance: PlainDescriptor<undefined>;
        /**
         *No proposal, bounty or spend at that index.
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
         *Too many approvals in the queue.
         */
        TooManyApprovals: PlainDescriptor<undefined>;
        /**
         *The spend origin is valid but the amount it is allowed to spend is lower than the
         *amount to be spent.
         */
        InsufficientPermission: PlainDescriptor<undefined>;
        /**
         *Proposal has not been approved.
         */
        ProposalNotApproved: PlainDescriptor<undefined>;
        /**
         *The balance of the asset kind is not convertible to the balance of the native asset.
         */
        FailedToConvertBalance: PlainDescriptor<undefined>;
        /**
         *The spend has expired and cannot be claimed.
         */
        SpendExpired: PlainDescriptor<undefined>;
        /**
         *The spend is not yet eligible for payout.
         */
        EarlyPayout: PlainDescriptor<undefined>;
        /**
         *The payment has already been attempted.
         */
        AlreadyAttempted: PlainDescriptor<undefined>;
        /**
         *There was some issue with the mechanism of payment.
         */
        PayoutError: PlainDescriptor<undefined>;
        /**
         *The payout was not yet attempted/claimed.
         */
        NotAttempted: PlainDescriptor<undefined>;
        /**
         *The payment has neither failed nor succeeded yet.
         */
        Inconclusive: PlainDescriptor<undefined>;
    };
    Utility: {
        /**
         *Too many calls batched.
         */
        TooManyCalls: PlainDescriptor<undefined>;
    };
    Preimage: {
        /**
         *Preimage is too large to store on-chain.
         */
        TooBig: PlainDescriptor<undefined>;
        /**
         *Preimage has already been noted on-chain.
         */
        AlreadyNoted: PlainDescriptor<undefined>;
        /**
         *The user is not authorized to perform this action.
         */
        NotAuthorized: PlainDescriptor<undefined>;
        /**
         *The preimage cannot be removed since it has not yet been noted.
         */
        NotNoted: PlainDescriptor<undefined>;
        /**
         *A preimage may not be removed when there are outstanding requests.
         */
        Requested: PlainDescriptor<undefined>;
        /**
         *The preimage request cannot be removed since no outstanding requests exist.
         */
        NotRequested: PlainDescriptor<undefined>;
        /**
         *More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Too few hashes were requested to be upgraded (i.e. zero).
         */
        TooFew: PlainDescriptor<undefined>;
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
    Democracy: {
        /**
         *Value too low
         */
        ValueLow: PlainDescriptor<undefined>;
        /**
         *Proposal does not exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Cannot cancel the same proposal twice
         */
        AlreadyCanceled: PlainDescriptor<undefined>;
        /**
         *Proposal already made
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal still blacklisted
         */
        ProposalBlacklisted: PlainDescriptor<undefined>;
        /**
         *Next external proposal not simple majority
         */
        NotSimpleMajority: PlainDescriptor<undefined>;
        /**
         *Invalid hash
         */
        InvalidHash: PlainDescriptor<undefined>;
        /**
         *No external proposal
         */
        NoProposal: PlainDescriptor<undefined>;
        /**
         *Identity may not veto a proposal twice
         */
        AlreadyVetoed: PlainDescriptor<undefined>;
        /**
         *Vote given for invalid referendum
         */
        ReferendumInvalid: PlainDescriptor<undefined>;
        /**
         *No proposals waiting
         */
        NoneWaiting: PlainDescriptor<undefined>;
        /**
         *The given account did not vote on the referendum.
         */
        NotVoter: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The account is already delegating.
         */
        AlreadyDelegating: PlainDescriptor<undefined>;
        /**
         *Too high a balance was provided that the account cannot afford.
         */
        InsufficientFunds: PlainDescriptor<undefined>;
        /**
         *The account is not currently delegating.
         */
        NotDelegating: PlainDescriptor<undefined>;
        /**
         *The account currently has votes attached to it and the operation cannot succeed until
         *these are removed, either through `unvote` or `reap_vote`.
         */
        VotesExist: PlainDescriptor<undefined>;
        /**
         *The instant referendum origin is currently disallowed.
         */
        InstantNotAllowed: PlainDescriptor<undefined>;
        /**
         *Delegation to oneself makes no sense.
         */
        Nonsense: PlainDescriptor<undefined>;
        /**
         *Invalid upper bound.
         */
        WrongUpperBound: PlainDescriptor<undefined>;
        /**
         *Maximum number of votes reached.
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
         *Maximum number of items reached.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *Voting period too low
         */
        VotingPeriodLow: PlainDescriptor<undefined>;
        /**
         *The preimage does not exist.
         */
        PreimageNotExist: PlainDescriptor<undefined>;
    };
    Elections: {
        /**
         *Cannot vote when no candidates or members exist.
         */
        UnableToVote: PlainDescriptor<undefined>;
        /**
         *Must vote for at least one candidate.
         */
        NoVotes: PlainDescriptor<undefined>;
        /**
         *Cannot vote more than candidates.
         */
        TooManyVotes: PlainDescriptor<undefined>;
        /**
         *Cannot vote more than maximum allowed.
         */
        MaximumVotesExceeded: PlainDescriptor<undefined>;
        /**
         *Cannot vote with stake less than minimum balance.
         */
        LowBalance: PlainDescriptor<undefined>;
        /**
         *Voter can not pay voting bond.
         */
        UnableToPayBond: PlainDescriptor<undefined>;
        /**
         *Must be a voter.
         */
        MustBeVoter: PlainDescriptor<undefined>;
        /**
         *Duplicated candidate submission.
         */
        DuplicatedCandidate: PlainDescriptor<undefined>;
        /**
         *Too many candidates have been created.
         */
        TooManyCandidates: PlainDescriptor<undefined>;
        /**
         *Member cannot re-submit candidacy.
         */
        MemberSubmit: PlainDescriptor<undefined>;
        /**
         *Runner cannot re-submit candidacy.
         */
        RunnerUpSubmit: PlainDescriptor<undefined>;
        /**
         *Candidate does not have enough funds.
         */
        InsufficientCandidateFunds: PlainDescriptor<undefined>;
        /**
         *Not a member.
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *The provided count of number of candidates is incorrect.
         */
        InvalidWitnessData: PlainDescriptor<undefined>;
        /**
         *The provided count of number of votes is incorrect.
         */
        InvalidVoteCount: PlainDescriptor<undefined>;
        /**
         *The renouncing origin presented a wrong `Renouncing` parameter.
         */
        InvalidRenouncing: PlainDescriptor<undefined>;
        /**
         *Prediction regarding replacement after member removal is wrong.
         */
        InvalidReplacement: PlainDescriptor<undefined>;
    };
    Council: {
        /**
         *Account is not a member
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Duplicate proposals not allowed
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal must exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Mismatched index
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
         *Duplicate vote ignored
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
         *Members are already initialized!
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
         *The close call was made too early, before the end of the voting.
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
         *There can only be a maximum of `MaxProposals` active proposals.
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
         *The given weight bound for the proposal was too low.
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
         *The given length bound for the proposal was too low.
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
         *Prime account is not a member
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
         *Account is not a member
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Duplicate proposals not allowed
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
         *Proposal must exist
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
         *Mismatched index
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
         *Duplicate vote ignored
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
         *Members are already initialized!
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
         *The close call was made too early, before the end of the voting.
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
         *There can only be a maximum of `MaxProposals` active proposals.
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
         *The given weight bound for the proposal was too low.
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
         *The given length bound for the proposal was too low.
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
         *Prime account is not a member
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    Tips: {
        /**
         *The reason given is just too big.
         */
        ReasonTooBig: PlainDescriptor<undefined>;
        /**
         *The tip was already found/started.
         */
        AlreadyKnown: PlainDescriptor<undefined>;
        /**
         *The tip hash is unknown.
         */
        UnknownTip: PlainDescriptor<undefined>;
        /**
         *The tip given was too generous.
         */
        MaxTipAmountExceeded: PlainDescriptor<undefined>;
        /**
         *The account attempting to retract the tip is not the finder of the tip.
         */
        NotFinder: PlainDescriptor<undefined>;
        /**
         *The tip cannot be claimed/closed because there are not enough tippers yet.
         */
        StillOpen: PlainDescriptor<undefined>;
        /**
         *The tip cannot be claimed/closed because it's still in the countdown period.
         */
        Premature: PlainDescriptor<undefined>;
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
    StateTrieMigration: {
        /**
         *Max signed limits not respected.
         */
        MaxSignedLimits: PlainDescriptor<undefined>;
        /**
         *A key was longer than the configured maximum.
         *
         *This means that the migration halted at the current [`Progress`] and
         *can be resumed with a larger [`crate::Config::MaxKeyLen`] value.
         *Retrying with the same [`crate::Config::MaxKeyLen`] value will not work.
         *The value should only be increased to avoid a storage migration for the currently
         *stored [`crate::Progress::LastKey`].
         */
        KeyTooLong: PlainDescriptor<undefined>;
        /**
         *submitter does not have enough funds.
         */
        NotEnoughFunds: PlainDescriptor<undefined>;
        /**
         *Bad witness data provided.
         */
        BadWitness: PlainDescriptor<undefined>;
        /**
         *Signed migration is not allowed because the maximum limit is not set yet.
         */
        SignedMigrationNotAllowed: PlainDescriptor<undefined>;
        /**
         *Bad child root provided.
         */
        BadChildRoot: PlainDescriptor<undefined>;
    };
    AssetRegistry: {
        /**
         *Asset ID is not available. This only happens when it reaches the MAX value of given id type.
         */
        NoIdAvailable: PlainDescriptor<undefined>;
        /**
         *Invalid asset name or symbol.
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
         *Length of name or symbol is less than min. length.
         */
        TooShort: PlainDescriptor<undefined>;
        /**
         *Asset's symbol can't contain whitespace characters .
         */
        InvalidSymbol: PlainDescriptor<undefined>;
        /**
         *Asset ID is not registered in the asset-registry.
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Asset is already registered.
         */
        AssetAlreadyRegistered: PlainDescriptor<undefined>;
        /**
         *Incorrect number of assets provided to create shared asset.
         */
        InvalidSharedAssetLen: PlainDescriptor<undefined>;
        /**
         *Cannot update asset location.
         */
        CannotUpdateLocation: PlainDescriptor<undefined>;
        /**
         *Selected asset id is out of reserved range.
         */
        NotInReservedRange: PlainDescriptor<undefined>;
        /**
         *Location already registered with different asset.
         */
        LocationAlreadyRegistered: PlainDescriptor<undefined>;
        /**
         *Origin is forbidden to set/update value.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Balance too low.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Sufficient assets can't be changed to insufficient.
         */
        ForbiddenSufficiencyChange: PlainDescriptor<undefined>;
        /**
         *Asset is already banned.
         */
        AssetAlreadyBanned: PlainDescriptor<undefined>;
        /**
         *Asset is not banned.
         */
        AssetNotBanned: PlainDescriptor<undefined>;
    };
    Claims: {
        /**
         *Ethereum signature is not valid
         */
        InvalidEthereumSignature: PlainDescriptor<undefined>;
        /**
         *Claim is not valid
         */
        NoClaimOrAlreadyClaimed: PlainDescriptor<undefined>;
        /**
         *Value reached maximum and cannot be incremented further
         */
        BalanceOverflow: PlainDescriptor<undefined>;
    };
    Omnipool: {
        /**
         *Balance too low
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Asset is already in omnipool
         */
        AssetAlreadyAdded: PlainDescriptor<undefined>;
        /**
         *Asset is not in omnipool
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
         *Failed to add token to Omnipool due to insufficient initial liquidity.
         */
        MissingBalance: PlainDescriptor<undefined>;
        /**
         *Invalid initial asset price.
         */
        InvalidInitialAssetPrice: PlainDescriptor<undefined>;
        /**
         *Slippage protection - minimum limit has not been reached.
         */
        BuyLimitNotReached: PlainDescriptor<undefined>;
        /**
         *Slippage protection - maximum limit has been exceeded.
         */
        SellLimitExceeded: PlainDescriptor<undefined>;
        /**
         *Position has not been found.
         */
        PositionNotFound: PlainDescriptor<undefined>;
        /**
         *Insufficient shares in position
         */
        InsufficientShares: PlainDescriptor<undefined>;
        /**
         *Asset is not allowed to be traded.
         */
        NotAllowed: PlainDescriptor<undefined>;
        /**
         *Signed account is not owner of position instance.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Asset weight cap has been exceeded.
         */
        AssetWeightCapExceeded: PlainDescriptor<undefined>;
        /**
         *Asset is not registered in asset registry
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Provided liquidity is below minimum allowed limit
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Traded amount is below minimum allowed limit
         */
        InsufficientTradingAmount: PlainDescriptor<undefined>;
        /**
         *Sell or buy with same asset ids is not allowed.
         */
        SameAssetTradeNotAllowed: PlainDescriptor<undefined>;
        /**
         *LRNA update after trade results in positive value.
         */
        HubAssetUpdateError: PlainDescriptor<undefined>;
        /**
         *Imbalance results in positive value.
         */
        PositiveImbalance: PlainDescriptor<undefined>;
        /**
         *Amount of shares provided cannot be 0.
         */
        InvalidSharesAmount: PlainDescriptor<undefined>;
        /**
         *Hub asset is only allowed to be sold.
         */
        InvalidHubAssetTradableState: PlainDescriptor<undefined>;
        /**
         *Asset is not allowed to be refunded.
         */
        AssetRefundNotAllowed: PlainDescriptor<undefined>;
        /**
         *Max fraction of asset to buy has been exceeded.
         */
        MaxOutRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Max fraction of asset to sell has been exceeded.
         */
        MaxInRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Max allowed price difference has been exceeded.
         */
        PriceDifferenceTooHigh: PlainDescriptor<undefined>;
        /**
         *Invalid oracle price - division by zero.
         */
        InvalidOraclePrice: PlainDescriptor<undefined>;
        /**
         *Failed to calculate withdrawal fee.
         */
        InvalidWithdrawalFee: PlainDescriptor<undefined>;
        /**
         *More than allowed amount of fee has been transferred.
         */
        FeeOverdraft: PlainDescriptor<undefined>;
        /**
         *Token cannot be removed from Omnipool due to shares still owned by other users.
         */
        SharesRemaining: PlainDescriptor<undefined>;
        /**
         *Token cannot be removed from Omnipool because asset is not frozen.
         */
        AssetNotFrozen: PlainDescriptor<undefined>;
        /**
         *Calculated amount out from sell trade is zero.
         */
        ZeroAmountOut: PlainDescriptor<undefined>;
        /**
         *Existential deposit of asset is not available.
         */
        ExistentialDepositNotAvailable: PlainDescriptor<undefined>;
        /**
         *Slippage protection
         */
        SlippageLimit: PlainDescriptor<undefined>;
    };
    TransactionPause: {
        /**
         *can not pause
         */
        CannotPause: PlainDescriptor<undefined>;
        /**
         *invalid character encoding
         */
        InvalidCharacter: PlainDescriptor<undefined>;
        /**
         *pallet name or function name is too long
         */
        NameTooLong: PlainDescriptor<undefined>;
    };
    Duster: {
        /**
         *Account is excluded from dusting.
         */
        AccountBlacklisted: PlainDescriptor<undefined>;
        /**
         *Account is not present in the non-dustable list.
         */
        AccountNotBlacklisted: PlainDescriptor<undefined>;
        /**
         *The balance is zero.
         */
        ZeroBalance: PlainDescriptor<undefined>;
        /**
         *The balance is sufficient to keep account open.
         */
        BalanceSufficient: PlainDescriptor<undefined>;
        /**
         *Dust account is not set.
         */
        DustAccountNotSet: PlainDescriptor<undefined>;
        /**
         *Reserve account is not set.
         */
        ReserveAccountNotSet: PlainDescriptor<undefined>;
    };
    OmnipoolWarehouseLM: {
        /**
         *Global farm does not exist.
         */
        GlobalFarmNotFound: PlainDescriptor<undefined>;
        /**
         *Yield farm does not exist.
         */
        YieldFarmNotFound: PlainDescriptor<undefined>;
        /**
         *Multiple claims in the same period is not allowed.
         */
        DoubleClaimInPeriod: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is canceled.
         */
        LiquidityMiningCanceled: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is not canceled.
         */
        LiquidityMiningIsActive: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is in `active` or `terminated` state and action cannot be completed.
         */
        LiquidityMiningIsNotStopped: PlainDescriptor<undefined>;
        /**
         *LP shares amount is not valid.
         */
        InvalidDepositAmount: PlainDescriptor<undefined>;
        /**
         *Account is not allowed to perform action.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Yield farm multiplier can't be 0.
         */
        InvalidMultiplier: PlainDescriptor<undefined>;
        /**
         *Yield farm with given `amm_pool_id` already exists in global farm.
         */
        YieldFarmAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Loyalty curve's initial reward percentage is not valid. Valid range is: [0, 1).
         */
        InvalidInitialRewardPercentage: PlainDescriptor<undefined>;
        /**
         *One or more yield farms exist in global farm.
         */
        GlobalFarmIsNotEmpty: PlainDescriptor<undefined>;
        /**
         *Farm's `incentivized_asset` is missing in provided asset pair.
         */
        MissingIncentivizedAsset: PlainDescriptor<undefined>;
        /**
         *Reward currency balance is not sufficient.
         */
        InsufficientRewardCurrencyBalance: PlainDescriptor<undefined>;
        /**
         *Blocks per period can't be 0.
         */
        InvalidBlocksPerPeriod: PlainDescriptor<undefined>;
        /**
         *Yield per period can't be 0.
         */
        InvalidYieldPerPeriod: PlainDescriptor<undefined>;
        /**
         *Total rewards is less than `MinTotalFarmRewards`.
         */
        InvalidTotalRewards: PlainDescriptor<undefined>;
        /**
         *Planned yielding periods is less than `MinPlannedYieldingPeriods`.
         */
        InvalidPlannedYieldingPeriods: PlainDescriptor<undefined>;
        /**
         *Maximum number of locks reached for deposit.
         */
        MaxEntriesPerDeposit: PlainDescriptor<undefined>;
        /**
         *Trying to lock LP shares into already locked yield farm.
         */
        DoubleLock: PlainDescriptor<undefined>;
        /**
         *Yield farm entry doesn't exist for given deposit.
         */
        YieldFarmEntryNotFound: PlainDescriptor<undefined>;
        /**
         *Max number of yield farms in global farm was reached. Global farm can't accept new
         *yield farms until some yield farm is not removed from storage.
         */
        GlobalFarmIsFull: PlainDescriptor<undefined>;
        /**
         *Invalid min. deposit was set for global farm.
         */
        InvalidMinDeposit: PlainDescriptor<undefined>;
        /**
         *Price adjustment multiplier can't be 0.
         */
        InvalidPriceAdjustment: PlainDescriptor<undefined>;
        /**
         *Account creation from id failed.
         */
        ErrorGetAccountId: PlainDescriptor<undefined>;
        /**
         *Value of deposited shares amount in reward currency is bellow min. limit.
         */
        IncorrectValuedShares: PlainDescriptor<undefined>;
        /**
         *`reward_currency` is not registered in asset registry.
         */
        RewardCurrencyNotRegistered: PlainDescriptor<undefined>;
        /**
         *`incentivized_asset` is not registered in asset registry.
         */
        IncentivizedAssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Action cannot be completed because unexpected error has occurred. This should be reported
         *to protocol maintainers.
         */
        InconsistentState: PlainDescriptor<Anonymize<Ibplkiqg5rvr3e>>;
    };
    OmnipoolLiquidityMining: {
        /**
         *Asset is not in the omnipool.
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
         *Signed account is not owner of the deposit.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Rewards to claim are 0.
         */
        ZeroClaimedRewards: PlainDescriptor<undefined>;
        /**
         *Action cannot be completed because unexpected error has occurred. This should be reported
         *to protocol maintainers.
         */
        InconsistentState: PlainDescriptor<Anonymize<Icnmrtlo128skq>>;
        /**
         *Oracle could not be found for requested assets.
         */
        OracleNotAvailable: PlainDescriptor<undefined>;
        /**
         *Oracle providing `price_adjustment` could not be found for requested assets.
         */
        PriceAdjustmentNotAvailable: PlainDescriptor<undefined>;
    };
    OTC: {
        /**
         *Asset does not exist in registry
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Order cannot be found
         */
        OrderNotFound: PlainDescriptor<undefined>;
        /**
         *Size of order ID exceeds the bound
         */
        OrderIdOutOfBound: PlainDescriptor<undefined>;
        /**
         *Cannot partially fill an order which is not partially fillable
         */
        OrderNotPartiallyFillable: PlainDescriptor<undefined>;
        /**
         *Order amount_in and amount_out must at all times be greater than the existential deposit
         *for the asset multiplied by the ExistentialDepositMultiplier.
         *A fill order may not leave behind amounts smaller than this.
         */
        OrderAmountTooSmall: PlainDescriptor<undefined>;
        /**
         *Error with math calculations
         */
        MathError: PlainDescriptor<undefined>;
        /**
         *The caller does not have permission to complete the action
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Reserved amount not sufficient.
         */
        InsufficientReservedAmount: PlainDescriptor<undefined>;
    };
    CircuitBreaker: {
        /**
         *Invalid value for a limit. Limit must be non-zero.
         */
        InvalidLimitValue: PlainDescriptor<undefined>;
        /**
         *Allowed liquidity limit is not stored for asset
         */
        LiquidityLimitNotStoredForAsset: PlainDescriptor<undefined>;
        /**
         *Token trade outflow per block has been reached
         */
        TokenOutflowLimitReached: PlainDescriptor<undefined>;
        /**
         *Token trade influx per block has been reached
         */
        TokenInfluxLimitReached: PlainDescriptor<undefined>;
        /**
         *Maximum pool's liquidity limit per block has been reached
         */
        MaxLiquidityLimitPerBlockReached: PlainDescriptor<undefined>;
        /**
         *Asset is not allowed to have a limit
         */
        NotAllowed: PlainDescriptor<undefined>;
    };
    Router: {
        /**
         *The trading limit has been reached
         */
        TradingLimitReached: PlainDescriptor<undefined>;
        /**
         *The the max number of trades limit is reached
         */
        MaxTradesExceeded: PlainDescriptor<undefined>;
        /**
         *The AMM pool is not supported for executing trades
         */
        PoolNotSupported: PlainDescriptor<undefined>;
        /**
         *The user has not enough balance to execute the trade
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *The calculation of route trade amounts failed in the underlying AMM
         */
        RouteCalculationFailed: PlainDescriptor<undefined>;
        /**
         *The route is invalid
         */
        InvalidRoute: PlainDescriptor<undefined>;
        /**
         *The route update was not successful
         */
        RouteUpdateIsNotSuccessful: PlainDescriptor<undefined>;
        /**
         *Route contains assets that has no oracle data
         */
        RouteHasNoOracle: PlainDescriptor<undefined>;
        /**
         *The route execution failed in the underlying AMM
         */
        InvalidRouteExecution: PlainDescriptor<undefined>;
        /**
         *Trading same assets is not allowed.
         */
        NotAllowed: PlainDescriptor<undefined>;
    };
    Staking: {
        /**
         *Balance is too low.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Staked amount is too low.
         */
        InsufficientStake: PlainDescriptor<undefined>;
        /**
         *Staking position has not been found.
         */
        PositionNotFound: PlainDescriptor<undefined>;
        /**
         *Maximum amount of votes were reached for staking position.
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
         *Staking is not initialized.
         */
        NotInitialized: PlainDescriptor<undefined>;
        /**
         *Staking is already initialized.
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
         *Arithmetic error.
         */
        Arithmetic: PlainDescriptor<undefined>;
        /**
         *Pot's balance is zero.
         */
        MissingPotBalance: PlainDescriptor<undefined>;
        /**
         *Account's position already exists.
         */
        PositionAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Signer is not an owner of the staking position.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Position contains registered votes.
         */
        ExistingVotes: PlainDescriptor<undefined>;
        /**
         *Position contains processed votes. Removed these votes first before increasing stake or claiming.
         */
        ExistingProcessedVotes: PlainDescriptor<undefined>;
        /**
         *Action cannot be completed because unexpected error has occurred. This should be reported
         *to protocol maintainers.
         */
        InconsistentState: PlainDescriptor<Anonymize<Icojqvn3afk41n>>;
    };
    Stableswap: {
        /**
         *Creating a pool with same assets or less than 2 assets is not allowed.
         */
        IncorrectAssets: PlainDescriptor<undefined>;
        /**
         *Maximum number of assets has been exceeded.
         */
        MaxAssetsExceeded: PlainDescriptor<undefined>;
        /**
         *A pool with given assets does not exist.
         */
        PoolNotFound: PlainDescriptor<undefined>;
        /**
         *A pool with given assets already exists.
         */
        PoolExists: PlainDescriptor<undefined>;
        /**
         *Asset is not in the pool.
         */
        AssetNotInPool: PlainDescriptor<undefined>;
        /**
         *Share asset is not registered in Registry.
         */
        ShareAssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Share asset is amount assets when creating a pool.
         */
        ShareAssetInPoolAssets: PlainDescriptor<undefined>;
        /**
         *One or more assets are not registered in AssetRegistry
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Invalid asset amount provided. Amount must be greater than zero.
         */
        InvalidAssetAmount: PlainDescriptor<undefined>;
        /**
         *Balance of an asset is not sufficient to perform a trade.
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Balance of a share asset is not sufficient to withdraw liquidity.
         */
        InsufficientShares: PlainDescriptor<undefined>;
        /**
         *Liquidity has not reached the required minimum.
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Insufficient liquidity left in the pool after withdrawal.
         */
        InsufficientLiquidityRemaining: PlainDescriptor<undefined>;
        /**
         *Amount is less than the minimum trading amount configured.
         */
        InsufficientTradingAmount: PlainDescriptor<undefined>;
        /**
         *Minimum limit has not been reached during trade.
         */
        BuyLimitNotReached: PlainDescriptor<undefined>;
        /**
         *Maximum limit has been exceeded during trade.
         */
        SellLimitExceeded: PlainDescriptor<undefined>;
        /**
         *Initial liquidity of asset must be > 0.
         */
        InvalidInitialLiquidity: PlainDescriptor<undefined>;
        /**
         *Amplification is outside configured range.
         */
        InvalidAmplification: PlainDescriptor<undefined>;
        /**
         *Remaining balance of share asset is below asset's existential deposit.
         */
        InsufficientShareBalance: PlainDescriptor<undefined>;
        /**
         *Not allowed to perform an operation on given asset.
         */
        NotAllowed: PlainDescriptor<undefined>;
        /**
         *Future block number is in the past.
         */
        PastBlock: PlainDescriptor<undefined>;
        /**
         *New amplification is equal to the previous value.
         */
        SameAmplification: PlainDescriptor<undefined>;
        /**
         *Slippage protection.
         */
        SlippageLimit: PlainDescriptor<undefined>;
        /**
         *Failed to retrieve asset decimals.
         */
        UnknownDecimals: PlainDescriptor<undefined>;
    };
    Bonds: {
        /**
         *Bond not registered
         */
        NotRegistered: PlainDescriptor<undefined>;
        /**
         *Bond is not mature
         */
        NotMature: PlainDescriptor<undefined>;
        /**
         *Maturity not long enough
         */
        InvalidMaturity: PlainDescriptor<undefined>;
        /**
         *Asset type not allowed for underlying asset
         */
        DisallowedAsset: PlainDescriptor<undefined>;
        /**
         *Asset is not registered in `AssetRegistry`
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
         *Generated name is not valid.
         */
        InvalidBondName: PlainDescriptor<undefined>;
        /**
         *Bond's name parsing was now successful
         */
        FailToParseName: PlainDescriptor<undefined>;
    };
    OtcSettlements: {
        /**
         *Otc order not found
         */
        OrderNotFound: PlainDescriptor<undefined>;
        /**
         *OTC order is not partially fillable
         */
        NotPartiallyFillable: PlainDescriptor<undefined>;
        /**
         *Provided route doesn't match the existing route
         */
        InvalidRoute: PlainDescriptor<undefined>;
        /**
         *Initial and final balance are different
         */
        BalanceInconsistency: PlainDescriptor<undefined>;
        /**
         *Trade amount higher than necessary
         */
        TradeAmountTooHigh: PlainDescriptor<undefined>;
        /**
         *Trade amount lower than necessary
         */
        TradeAmountTooLow: PlainDescriptor<undefined>;
        /**
         *Price for a route is not available
         */
        PriceNotAvailable: PlainDescriptor<undefined>;
    };
    LBP: {
        /**
         *Pool assets can not be the same
         */
        CannotCreatePoolWithSameAssets: PlainDescriptor<undefined>;
        /**
         *Account is not a pool owner
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
         *Sale already started
         */
        SaleStarted: PlainDescriptor<undefined>;
        /**
         *Sale is still in progress
         */
        SaleNotEnded: PlainDescriptor<undefined>;
        /**
         *Sale is not running
         */
        SaleIsNotRunning: PlainDescriptor<undefined>;
        /**
         *Sale duration is too long
         */
        MaxSaleDurationExceeded: PlainDescriptor<undefined>;
        /**
         *Liquidity being added should not be zero
         */
        CannotAddZeroLiquidity: PlainDescriptor<undefined>;
        /**
         *Asset balance too low
         */
        InsufficientAssetBalance: PlainDescriptor<undefined>;
        /**
         *Pool does not exist
         */
        PoolNotFound: PlainDescriptor<undefined>;
        /**
         *Pool has been already created
         */
        PoolAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Invalid block range
         */
        InvalidBlockRange: PlainDescriptor<undefined>;
        /**
         *Calculation error
         */
        WeightCalculationError: PlainDescriptor<undefined>;
        /**
         *Weight set is out of range
         */
        InvalidWeight: PlainDescriptor<undefined>;
        /**
         *Can not perform a trade with zero amount
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *Trade amount is too high
         */
        MaxInRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Trade amount is too high
         */
        MaxOutRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Invalid fee amount
         */
        FeeAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Trading limit reached
         */
        TradingLimitReached: PlainDescriptor<undefined>;
        /**
         *An unexpected integer overflow occurred
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *Nothing to update
         */
        NothingToUpdate: PlainDescriptor<undefined>;
        /**
         *Liquidity has not reached the required minimum.
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Amount is less than minimum trading limit.
         */
        InsufficientTradingAmount: PlainDescriptor<undefined>;
        /**
         *Not more than one fee collector per asset id
         */
        FeeCollectorWithAssetAlreadyUsed: PlainDescriptor<undefined>;
    };
    XYK: {
        /**
         *It is not allowed to create a pool between same assets.
         */
        CannotCreatePoolWithSameAssets: PlainDescriptor<undefined>;
        /**
         *Liquidity has not reached the required minimum.
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Amount is less than min trading limit.
         */
        InsufficientTradingAmount: PlainDescriptor<undefined>;
        /**
         *Liquidity is zero.
         */
        ZeroLiquidity: PlainDescriptor<undefined>;
        /**
         *It is not allowed to create a pool with zero initial price.
         *Not used, kept for backward compatibility
         */
        ZeroInitialPrice: PlainDescriptor<undefined>;
        /**
         *Overflow
         *Not used, kept for backward compatibility
         */
        CreatePoolAssetAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        InvalidMintedLiquidity: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        InvalidLiquidityAmount: PlainDescriptor<undefined>;
        /**
         *Asset amount has exceeded given limit.
         */
        AssetAmountExceededLimit: PlainDescriptor<undefined>;
        /**
         *Asset amount has not reached given limit.
         */
        AssetAmountNotReachedLimit: PlainDescriptor<undefined>;
        /**
         *Asset balance is not sufficient.
         */
        InsufficientAssetBalance: PlainDescriptor<undefined>;
        /**
         *Not enough asset liquidity in the pool.
         */
        InsufficientPoolAssetBalance: PlainDescriptor<undefined>;
        /**
         *Not enough core asset liquidity in the pool.
         */
        InsufficientNativeCurrencyBalance: PlainDescriptor<undefined>;
        /**
         *Liquidity pool for given assets does not exist.
         */
        TokenPoolNotFound: PlainDescriptor<undefined>;
        /**
         *Liquidity pool for given assets already exists.
         */
        TokenPoolAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        AddAssetAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        RemoveAssetAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        SellAssetAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        BuyAssetAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        FeeAmountInvalid: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        CannotApplyDiscount: PlainDescriptor<undefined>;
        /**
         *Max fraction of pool to buy in single transaction has been exceeded.
         */
        MaxOutRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Max fraction of pool to sell in single transaction has been exceeded.
         */
        MaxInRatioExceeded: PlainDescriptor<undefined>;
        /**
         *Overflow
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *Pool cannot be created due to outside factors.
         */
        CannotCreatePool: PlainDescriptor<undefined>;
    };
    Referrals: {
        /**
         *Referral code is too long.
         */
        TooLong: PlainDescriptor<undefined>;
        /**
         *Referral code is too short.
         */
        TooShort: PlainDescriptor<undefined>;
        /**
         *Referral code contains invalid character. Only alphanumeric characters are allowed.
         */
        InvalidCharacter: PlainDescriptor<undefined>;
        /**
         *Referral code already exists.
         */
        AlreadyExists: PlainDescriptor<undefined>;
        /**
         *Provided referral code is invalid. Either does not exist or is too long.
         */
        InvalidCode: PlainDescriptor<undefined>;
        /**
         *Account is already linked to another referral account.
         */
        AlreadyLinked: PlainDescriptor<undefined>;
        /**
         *Nothing in the referral pot account for the asset.
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *Linking an account to the same referral account is not allowed.
         */
        LinkNotAllowed: PlainDescriptor<undefined>;
        /**
         *Calculated rewards are more than the fee amount. This can happen if percentages are incorrectly set.
         */
        IncorrectRewardCalculation: PlainDescriptor<undefined>;
        /**
         *Given referrer and trader percentages exceeds 100% percent.
         */
        IncorrectRewardPercentage: PlainDescriptor<undefined>;
        /**
         *The account has already a code registered.
         */
        AlreadyRegistered: PlainDescriptor<undefined>;
        /**
         *Price for given asset pair not found.
         */
        PriceNotFound: PlainDescriptor<undefined>;
        /**
         *Minimum trading amount for conversion has not been reached.
         */
        ConversionMinTradingAmountNotReached: PlainDescriptor<undefined>;
        /**
         *Zero amount received from conversion.
         */
        ConversionZeroAmountReceived: PlainDescriptor<undefined>;
    };
    Tokens: {
        /**
         *The balance is too low
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
         *Cannot convert Amount into Balance type
         */
        AmountIntoBalanceFailed: PlainDescriptor<undefined>;
        /**
         *Failed because liquidity restrictions due to locking
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
         *Failed because the maximum locks was exceeded
         */
        MaxLocksExceeded: PlainDescriptor<undefined>;
        /**
         *Transfer/payment would kill account
         */
        KeepAlive: PlainDescriptor<undefined>;
        /**
         *Value too low to create account due to existential deposit
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
         *Beneficiary account must pre-exist
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyReserves: PlainDescriptor<undefined>;
    };
    Currencies: {
        /**
         *Unable to convert the Amount type into Balance.
         */
        AmountIntoBalanceFailed: PlainDescriptor<undefined>;
        /**
         *Balance is too low.
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
         *Deposit result is not expected
         */
        DepositFailed: PlainDescriptor<undefined>;
    };
    Vesting: {
        /**
         *Vesting period is zero
         */
        ZeroVestingPeriod: PlainDescriptor<undefined>;
        /**
         *Number of vests is zero
         */
        ZeroVestingPeriodCount: PlainDescriptor<undefined>;
        /**
         *Insufficient amount of balance to lock
         */
        InsufficientBalanceToLock: PlainDescriptor<undefined>;
        /**
         *This account have too many vesting schedules
         */
        TooManyVestingSchedules: PlainDescriptor<undefined>;
        /**
         *The vested transfer amount is too low
         */
        AmountLow: PlainDescriptor<undefined>;
        /**
         *Failed because the maximum vesting schedules was exceeded
         */
        MaxVestingSchedulesExceeded: PlainDescriptor<undefined>;
    };
    EVM: {
        /**
         *Not enough balance to perform action
         */
        BalanceLow: PlainDescriptor<undefined>;
        /**
         *Calculating total fee overflowed
         */
        FeeOverflow: PlainDescriptor<undefined>;
        /**
         *Calculating total payment overflowed
         */
        PaymentOverflow: PlainDescriptor<undefined>;
        /**
         *Withdraw fee failed
         */
        WithdrawFailed: PlainDescriptor<undefined>;
        /**
         *Gas price is too low.
         */
        GasPriceTooLow: PlainDescriptor<undefined>;
        /**
         *Nonce is invalid
         */
        InvalidNonce: PlainDescriptor<undefined>;
        /**
         *Gas limit is too low.
         */
        GasLimitTooLow: PlainDescriptor<undefined>;
        /**
         *Gas limit is too high.
         */
        GasLimitTooHigh: PlainDescriptor<undefined>;
        /**
         *The chain id is invalid.
         */
        InvalidChainId: PlainDescriptor<undefined>;
        /**
         *the signature is invalid.
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
         *EVM reentrancy
         */
        Reentrancy: PlainDescriptor<undefined>;
        /**
         *EIP-3607,
         */
        TransactionMustComeFromEOA: PlainDescriptor<undefined>;
        /**
         *Invalid Transaction
         */
        InvalidTransaction: PlainDescriptor<undefined>;
        /**
         *Undefined error.
         */
        Undefined: PlainDescriptor<undefined>;
    };
    Ethereum: {
        /**
         *Signature is invalid.
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
         *Pre-log is present, therefore transact is not allowed.
         */
        PreLogExists: PlainDescriptor<undefined>;
    };
    EVMAccounts: {
        /**
         *EVM Account's nonce is not zero
         */
        TruncatedAccountAlreadyUsed: PlainDescriptor<undefined>;
        /**
         *Address is already bound
         */
        AddressAlreadyBound: PlainDescriptor<undefined>;
        /**
         *Bound address cannot be used
         */
        BoundAddressCannotBeUsed: PlainDescriptor<undefined>;
        /**
         *Address not whitelisted
         */
        AddressNotWhitelisted: PlainDescriptor<undefined>;
    };
    XYKLiquidityMining: {
        /**
         *Nft pallet didn't return an owner.
         */
        CantFindDepositOwner: PlainDescriptor<undefined>;
        /**
         *Account balance of XYK pool shares is not sufficient.
         */
        InsufficientXykSharesBalance: PlainDescriptor<undefined>;
        /**
         *XYK pool does not exist
         */
        XykPoolDoesntExist: PlainDescriptor<undefined>;
        /**
         *Account is not deposit owner.
         */
        NotDepositOwner: PlainDescriptor<undefined>;
        /**
         *XYK did not return assets for given pool id
         */
        CantGetXykAssets: PlainDescriptor<undefined>;
        /**
         *Deposit data not found
         */
        DepositDataNotFound: PlainDescriptor<undefined>;
        /**
         *Calculated reward to claim is 0.
         */
        ZeroClaimedRewards: PlainDescriptor<undefined>;
        /**
         *Asset is not in the `AssetPair`.
         */
        AssetNotInAssetPair: PlainDescriptor<undefined>;
        /**
         *Provided `AssetPair` is not used by the deposit.
         */
        InvalidAssetPair: PlainDescriptor<undefined>;
        /**
         *Asset is not registered in asset registry.
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Failed to calculate `pot`'s account.
         */
        FailToGetPotId: PlainDescriptor<undefined>;
    };
    XYKWarehouseLM: {
        /**
         *Global farm does not exist.
         */
        GlobalFarmNotFound: PlainDescriptor<undefined>;
        /**
         *Yield farm does not exist.
         */
        YieldFarmNotFound: PlainDescriptor<undefined>;
        /**
         *Multiple claims in the same period is not allowed.
         */
        DoubleClaimInPeriod: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is canceled.
         */
        LiquidityMiningCanceled: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is not canceled.
         */
        LiquidityMiningIsActive: PlainDescriptor<undefined>;
        /**
         *Liquidity mining is in `active` or `terminated` state and action cannot be completed.
         */
        LiquidityMiningIsNotStopped: PlainDescriptor<undefined>;
        /**
         *LP shares amount is not valid.
         */
        InvalidDepositAmount: PlainDescriptor<undefined>;
        /**
         *Account is not allowed to perform action.
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *Yield farm multiplier can't be 0.
         */
        InvalidMultiplier: PlainDescriptor<undefined>;
        /**
         *Yield farm with given `amm_pool_id` already exists in global farm.
         */
        YieldFarmAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Loyalty curve's initial reward percentage is not valid. Valid range is: [0, 1).
         */
        InvalidInitialRewardPercentage: PlainDescriptor<undefined>;
        /**
         *One or more yield farms exist in global farm.
         */
        GlobalFarmIsNotEmpty: PlainDescriptor<undefined>;
        /**
         *Farm's `incentivized_asset` is missing in provided asset pair.
         */
        MissingIncentivizedAsset: PlainDescriptor<undefined>;
        /**
         *Reward currency balance is not sufficient.
         */
        InsufficientRewardCurrencyBalance: PlainDescriptor<undefined>;
        /**
         *Blocks per period can't be 0.
         */
        InvalidBlocksPerPeriod: PlainDescriptor<undefined>;
        /**
         *Yield per period can't be 0.
         */
        InvalidYieldPerPeriod: PlainDescriptor<undefined>;
        /**
         *Total rewards is less than `MinTotalFarmRewards`.
         */
        InvalidTotalRewards: PlainDescriptor<undefined>;
        /**
         *Planned yielding periods is less than `MinPlannedYieldingPeriods`.
         */
        InvalidPlannedYieldingPeriods: PlainDescriptor<undefined>;
        /**
         *Maximum number of locks reached for deposit.
         */
        MaxEntriesPerDeposit: PlainDescriptor<undefined>;
        /**
         *Trying to lock LP shares into already locked yield farm.
         */
        DoubleLock: PlainDescriptor<undefined>;
        /**
         *Yield farm entry doesn't exist for given deposit.
         */
        YieldFarmEntryNotFound: PlainDescriptor<undefined>;
        /**
         *Max number of yield farms in global farm was reached. Global farm can't accept new
         *yield farms until some yield farm is not removed from storage.
         */
        GlobalFarmIsFull: PlainDescriptor<undefined>;
        /**
         *Invalid min. deposit was set for global farm.
         */
        InvalidMinDeposit: PlainDescriptor<undefined>;
        /**
         *Price adjustment multiplier can't be 0.
         */
        InvalidPriceAdjustment: PlainDescriptor<undefined>;
        /**
         *Account creation from id failed.
         */
        ErrorGetAccountId: PlainDescriptor<undefined>;
        /**
         *Value of deposited shares amount in reward currency is bellow min. limit.
         */
        IncorrectValuedShares: PlainDescriptor<undefined>;
        /**
         *`reward_currency` is not registered in asset registry.
         */
        RewardCurrencyNotRegistered: PlainDescriptor<undefined>;
        /**
         *`incentivized_asset` is not registered in asset registry.
         */
        IncentivizedAssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Action cannot be completed because unexpected error has occurred. This should be reported
         *to protocol maintainers.
         */
        InconsistentState: PlainDescriptor<Anonymize<Ibplkiqg5rvr3e>>;
    };
    DCA: {
        /**
         *Schedule not exist
         */
        ScheduleNotFound: PlainDescriptor<undefined>;
        /**
         *The min trade amount is not reached
         */
        MinTradeAmountNotReached: PlainDescriptor<undefined>;
        /**
         *Forbidden as the user is not the owner of the schedule
         */
        Forbidden: PlainDescriptor<undefined>;
        /**
         *The next execution block number is not in the future
         */
        BlockNumberIsNotInFuture: PlainDescriptor<undefined>;
        /**
         *Price is unstable as price change from oracle data is bigger than max allowed
         */
        PriceUnstable: PlainDescriptor<undefined>;
        /**
         *Order was randomly rescheduled to next block
         */
        Bumped: PlainDescriptor<undefined>;
        /**
         *Error occurred when calculating price
         */
        CalculatingPriceError: PlainDescriptor<undefined>;
        /**
         *The total amount to be reserved is smaller than min budget
         */
        TotalAmountIsSmallerThanMinBudget: PlainDescriptor<undefined>;
        /**
         *The budget is too low for executing at least two orders
         */
        BudgetTooLow: PlainDescriptor<undefined>;
        /**
         *There is no free block found to plan DCA execution
         */
        NoFreeBlockFound: PlainDescriptor<undefined>;
        /**
         *The DCA schedule has been manually terminated
         */
        ManuallyTerminated: PlainDescriptor<undefined>;
        /**
         *Max number of retries reached for schedule
         */
        MaxRetryReached: PlainDescriptor<undefined>;
        /**
         *Absolutely trade limit reached, leading to retry
         */
        TradeLimitReached: PlainDescriptor<undefined>;
        /**
         *Slippage limit calculated from oracle is reached, leading to retry
         */
        SlippageLimitReached: PlainDescriptor<undefined>;
        /**
         *No parent hash has been found from relay chain
         */
        NoParentHashFound: PlainDescriptor<undefined>;
        /**
         *Error that should not really happen only in case of invalid state of the schedule storage entries
         */
        InvalidState: PlainDescriptor<undefined>;
        /**
         *Period should be longer than 5 blocks
         */
        PeriodTooShort: PlainDescriptor<undefined>;
        /**
         *Stability threshold cannot be higher than `MaxConfigurablePriceDifferenceBetweenBlock`
         */
        StabilityThresholdTooHigh: PlainDescriptor<undefined>;
    };
    Scheduler: {
        /**
         *Failed to schedule a call
         */
        FailedToSchedule: PlainDescriptor<undefined>;
        /**
         *Cannot find the scheduled call.
         */
        NotFound: PlainDescriptor<undefined>;
        /**
         *Given target block number is in the past.
         */
        TargetBlockNumberInPast: PlainDescriptor<undefined>;
        /**
         *Reschedule failed because it does not change scheduled time.
         */
        RescheduleNoChange: PlainDescriptor<undefined>;
        /**
         *Attempt to use a non-named function on a named task.
         */
        Named: PlainDescriptor<undefined>;
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
    OrmlXcm: {
        /**
         *The message and destination combination was not recognized as being
         *reachable.
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
         *The message and destination was recognized as being reachable but
         *the operation could not be completed.
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be
         *interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
    };
    XTokens: {
        /**
         *Asset has no reserve location.
         */
        AssetHasNoReserve: PlainDescriptor<undefined>;
        /**
         *Not cross-chain transfer.
         */
        NotCrossChainTransfer: PlainDescriptor<undefined>;
        /**
         *Invalid transfer destination.
         */
        InvalidDest: PlainDescriptor<undefined>;
        /**
         *Currency is not cross-chain transferable.
         */
        NotCrossChainTransferableCurrency: PlainDescriptor<undefined>;
        /**
         *The message's weight could not be determined.
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
         *XCM execution failed.
         */
        XcmExecutionFailed: PlainDescriptor<undefined>;
        /**
         *Could not re-anchor the assets to declare the fees for the
         *destination chain.
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         *Could not get ancestry of asset reserve location.
         */
        InvalidAncestry: PlainDescriptor<undefined>;
        /**
         *The Asset is invalid.
         */
        InvalidAsset: PlainDescriptor<undefined>;
        /**
         *The destination `Location` provided cannot be inverted.
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
         *The version of the `Versioned` value used is not able to be
         *interpreted.
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
         *We tried sending distinct asset and fee but they have different
         *reserve chains.
         */
        DistinctReserveForAssetAndFee: PlainDescriptor<undefined>;
        /**
         *The fee is zero.
         */
        ZeroFee: PlainDescriptor<undefined>;
        /**
         *The transfering asset amount is zero.
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
         *The number of assets to be sent is over the maximum.
         */
        TooManyAssetsBeingSent: PlainDescriptor<undefined>;
        /**
         *The specified index does not exist in a Assets struct.
         */
        AssetIndexNonExistent: PlainDescriptor<undefined>;
        /**
         *Fee is not enough.
         */
        FeeNotEnough: PlainDescriptor<undefined>;
        /**
         *Not supported Location
         */
        NotSupportedLocation: PlainDescriptor<undefined>;
        /**
         *MinXcmFee not registered for certain reserve location
         */
        MinXcmFeeNotDefined: PlainDescriptor<undefined>;
        /**
         *Asset transfer is limited by RateLimiter.
         */
        RateLimited: PlainDescriptor<undefined>;
    };
    UnknownTokens: {
        /**
         *The balance is too low.
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
         *The operation will cause balance to overflow.
         */
        BalanceOverflow: PlainDescriptor<undefined>;
        /**
         *Unhandled asset.
         */
        UnhandledAsset: PlainDescriptor<undefined>;
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
    EmaOracle: {
        /**
        
         */
        TooManyUniqueEntries: PlainDescriptor<undefined>;
        /**
        
         */
        OnTradeValueZero: PlainDescriptor<undefined>;
        /**
        
         */
        OracleNotFound: PlainDescriptor<undefined>;
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
    MultiTransactionPayment: {
        /**
         * Native Asset
         */
        NativeAssetId: PlainDescriptor<number>;
        /**
         * EVM Asset
         */
        EvmAssetId: PlainDescriptor<number>;
    };
    Treasury: {
        /**
         * Fraction of a proposal's value that should be bonded in order to place the proposal.
         * An accepted proposal gets these back. A rejected proposal does not.
         */
        ProposalBond: PlainDescriptor<number>;
        /**
         * Minimum amount of funds that should be placed in a deposit for making a proposal.
         */
        ProposalBondMinimum: PlainDescriptor<bigint>;
        /**
         * Maximum amount of funds that should be placed in a deposit for making a proposal.
         */
        ProposalBondMaximum: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
         * Period between successive spends.
         */
        SpendPeriod: PlainDescriptor<number>;
        /**
         * Percentage of spare funds (if any) that are burnt per spend period.
         */
        Burn: PlainDescriptor<number>;
        /**
         * The treasury's pallet id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum number of approvals that can wait in the spending queue.
         *
         * NOTE: This parameter is also used within the Bounties Pallet extension if enabled.
         */
        MaxApprovals: PlainDescriptor<number>;
        /**
         * The period during which an approved treasury spend has to be claimed.
         */
        PayoutPeriod: PlainDescriptor<number>;
    };
    Utility: {
        /**
         * The limit on the number of batched calls.
         */
        batched_calls_limit: PlainDescriptor<number>;
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
    Democracy: {
        /**
         * The period between a proposal being approved and enacted.
         *
         * It should generally be a little more than the unstake period to ensure that
         * voting stakers have an opportunity to remove themselves from the system in the case
         * where they are on the losing side of a vote.
         */
        EnactmentPeriod: PlainDescriptor<number>;
        /**
         * How often (in blocks) new public referenda are launched.
         */
        LaunchPeriod: PlainDescriptor<number>;
        /**
         * How often (in blocks) to check for new votes.
         */
        VotingPeriod: PlainDescriptor<number>;
        /**
         * The minimum period of vote locking.
         *
         * It should be no shorter than enactment period to ensure that in the case of an approval,
         * those successful voters are locked into the consequences that their votes entail.
         */
        VoteLockingPeriod: PlainDescriptor<number>;
        /**
         * The minimum amount to be used as a deposit for a public referendum proposal.
         */
        MinimumDeposit: PlainDescriptor<bigint>;
        /**
         * Indicator for whether an emergency origin is even allowed to happen. Some chains may
         * want to set this permanently to `false`, others may want to condition it on things such
         * as an upgrade having happened recently.
         */
        InstantAllowed: PlainDescriptor<boolean>;
        /**
         * Minimum voting period allowed for a fast-track referendum.
         */
        FastTrackVotingPeriod: PlainDescriptor<number>;
        /**
         * Period in blocks where an external proposal may not be re-submitted after being vetoed.
         */
        CooloffPeriod: PlainDescriptor<number>;
        /**
         * The maximum number of votes for an account.
         *
         * Also used to compute weight, an overly big value can
         * lead to extrinsic with very big weight: see `delegate` for instance.
         */
        MaxVotes: PlainDescriptor<number>;
        /**
         * The maximum number of public proposals that can exist at any time.
         */
        MaxProposals: PlainDescriptor<number>;
        /**
         * The maximum number of deposits a public proposal may have at any time.
         */
        MaxDeposits: PlainDescriptor<number>;
        /**
         * The maximum number of items which can be blacklisted.
         */
        MaxBlacklisted: PlainDescriptor<number>;
    };
    Elections: {
        /**
         * Identifier for the elections-phragmen pallet's lock
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * How much should be locked up in order to submit one's candidacy.
         */
        CandidacyBond: PlainDescriptor<bigint>;
        /**
         * Base deposit associated with voting.
         *
         * This should be sensibly high to economically ensure the pallet cannot be attacked by
         * creating a gigantic number of votes.
         */
        VotingBondBase: PlainDescriptor<bigint>;
        /**
         * The amount of bond that need to be locked for each vote (32 bytes).
         */
        VotingBondFactor: PlainDescriptor<bigint>;
        /**
         * Number of members to elect.
         */
        DesiredMembers: PlainDescriptor<number>;
        /**
         * Number of runners_up to keep.
         */
        DesiredRunnersUp: PlainDescriptor<number>;
        /**
         * How long each seat is kept. This defines the next block number at which an election
         * round will happen. If set to zero, no elections are ever triggered and the module will
         * be in passive mode.
         */
        TermDuration: PlainDescriptor<number>;
        /**
         * The maximum number of candidates in a phragmen election.
         *
         * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
         * consider how it will impact `T::WeightInfo::election_phragmen`.
         *
         * When this limit is reached no more candidates are accepted in the election.
         */
        MaxCandidates: PlainDescriptor<number>;
        /**
         * The maximum number of voters to allow in a phragmen election.
         *
         * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
         * consider how it will impact `T::WeightInfo::election_phragmen`.
         *
         * When the limit is reached the new voters are ignored.
         */
        MaxVoters: PlainDescriptor<number>;
        /**
         * Maximum numbers of votes per voter.
         *
         * Warning: This impacts the size of the election which is run onchain. Chose wisely, and
         * consider how it will impact `T::WeightInfo::election_phragmen`.
         */
        MaxVotesPerVoter: PlainDescriptor<number>;
    };
    Council: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    TechnicalCommittee: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    Tips: {
        /**
         * Maximum acceptable reason length.
         *
         * Benchmarks depend on this value, be sure to update weights file when changing this value
         */
        MaximumReasonLength: PlainDescriptor<number>;
        /**
         * The amount held on deposit per byte within the tip report reason or bounty description.
         */
        DataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * The period for which a tip remains open after is has achieved threshold tippers.
         */
        TipCountdown: PlainDescriptor<number>;
        /**
         * The percent of the final tip which goes to the original reporter of the tip.
         */
        TipFindersFee: PlainDescriptor<number>;
        /**
         * The non-zero amount held on deposit for placing a tip report.
         */
        TipReportDepositBase: PlainDescriptor<bigint>;
        /**
         * The maximum amount for a single tip.
         */
        MaxTipAmount: PlainDescriptor<bigint>;
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
    StateTrieMigration: {
        /**
         * Maximal number of bytes that a key can have.
         *
         * FRAME itself does not limit the key length.
         * The concrete value must therefore depend on your storage usage.
         * A [`frame_support::storage::StorageNMap`] for example can have an arbitrary number of
         * keys which are then hashed and concatenated, resulting in arbitrarily long keys.
         *
         * Use the *state migration RPC* to retrieve the length of the longest key in your
         * storage: <https://github.com/paritytech/substrate/issues/11642>
         *
         * The migration will halt with a `Halted` event if this value is too small.
         * Since there is no real penalty from over-estimating, it is advised to use a large
         * value. The default is 512 byte.
         *
         * Some key lengths for reference:
         * - [`frame_support::storage::StorageValue`]: 32 byte
         * - [`frame_support::storage::StorageMap`]: 64 byte
         * - [`frame_support::storage::StorageDoubleMap`]: 96 byte
         *
         * For more info see
         * <https://www.shawntabrizi.com/blog/substrate/querying-substrate-storage-via-rpc/>
         */
        MaxKeyLen: PlainDescriptor<number>;
    };
    AssetRegistry: {
        /**
        
         */
        SequentialIdStartAt: PlainDescriptor<number>;
        /**
         * The maximum length of a name or symbol stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
        /**
         * The min length of a name or symbol stored on-chain.
         */
        MinStringLimit: PlainDescriptor<number>;
        /**
         * Weight multiplier for `register_external` extrinsic
         */
        RegExternalWeightMultiplier: PlainDescriptor<bigint>;
    };
    CollatorRewards: {
        /**
         * Reward amount per one collator.
         */
        RewardPerCollator: PlainDescriptor<bigint>;
        /**
         * Reward Asset Id
         */
        RewardCurrencyId: PlainDescriptor<number>;
    };
    Omnipool: {
        /**
         * Native Asset ID
         */
        HdxAssetId: PlainDescriptor<number>;
        /**
         * Hub Asset ID
         */
        HubAssetId: PlainDescriptor<number>;
        /**
         * Minimum withdrawal fee
         */
        MinWithdrawalFee: PlainDescriptor<number>;
        /**
         * Minimum trading limit
         */
        MinimumTradingLimit: PlainDescriptor<bigint>;
        /**
         * Minimum pool liquidity which can be added
         */
        MinimumPoolLiquidity: PlainDescriptor<bigint>;
        /**
         * Max fraction of asset reserve to sell in single transaction
         */
        MaxInRatio: PlainDescriptor<bigint>;
        /**
         * Max fraction of asset reserve to buy in single transaction
         */
        MaxOutRatio: PlainDescriptor<bigint>;
        /**
         * Non fungible class id
         */
        NFTCollectionId: PlainDescriptor<bigint>;
    };
    Duster: {
        /**
         * Reward amount
         */
        Reward: PlainDescriptor<bigint>;
        /**
         * Native Asset Id
         */
        NativeCurrencyId: PlainDescriptor<number>;
    };
    OmnipoolWarehouseLM: {
        /**
         * Pallet id.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Treasury account to receive claimed rewards lower than ED
         */
        TreasuryAccountId: PlainDescriptor<SS58String>;
        /**
         * Minimum total rewards to distribute from global farm during liquidity mining.
         */
        MinTotalFarmRewards: PlainDescriptor<bigint>;
        /**
         * Minimum number of periods to run liquidity mining program.
         */
        MinPlannedYieldingPeriods: PlainDescriptor<number>;
        /**
         * Maximum number of yield farms same LP shares can be re/deposited into. This value always
         * MUST BE >= 1.
         */
        MaxFarmEntriesPerDeposit: PlainDescriptor<number>;
        /**
         * Max number of yield farms can exist in global farm. This includes all farms in the
         * storage(active, stopped, terminated).
         */
        MaxYieldFarmsPerGlobalFarm: PlainDescriptor<number>;
    };
    OmnipoolLiquidityMining: {
        /**
         * NFT collection id for liquidity mining's deposit nfts.
         */
        NFTCollectionId: PlainDescriptor<bigint>;
        /**
         * Identifier of oracle data soruce
         */
        OracleSource: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Oracle's price aggregation period.
         */
        OraclePeriod: PlainDescriptor<Anonymize<I9m0752cdvui5o>>;
    };
    OTC: {
        /**
         * Multiplier used to compute minimal amounts of asset_in and asset_out in an OTC.
         */
        ExistentialDepositMultiplier: PlainDescriptor<number>;
        /**
         * Fee deducted from amount_out.
         */
        Fee: PlainDescriptor<number>;
        /**
         * Fee receiver.
         */
        FeeReceiver: PlainDescriptor<SS58String>;
    };
    CircuitBreaker: {
        /**
         * The maximum percentage of a pool's liquidity that can be traded in a block.
         * Represented as a non-zero fraction (nominator, denominator) with the max value being 10_000.
         */
        DefaultMaxNetTradeVolumeLimitPerBlock: PlainDescriptor<Anonymize<I9jd27rnpm8ttv>>;
        /**
         * The maximum percentage of a pool's liquidity that can be added in a block.
         * Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
         * If set to None, the limits are not enforced.
         */
        DefaultMaxAddLiquidityLimitPerBlock: PlainDescriptor<Anonymize<Iep7au1720bm0e>>;
        /**
         * The maximum percentage of a pool's liquidity that can be removed in a block.
         * Represented as an optional non-zero fraction (nominator, denominator) with the max value being 10_000.
         * If set to None, the limits are not enforced.
         */
        DefaultMaxRemoveLiquidityLimitPerBlock: PlainDescriptor<Anonymize<Iep7au1720bm0e>>;
    };
    Router: {
        /**
         * Native Asset Id
         */
        NativeAssetId: PlainDescriptor<number>;
        /**
         * Oracle's price aggregation period.
         */
        OraclePeriod: PlainDescriptor<Anonymize<I9m0752cdvui5o>>;
    };
    DynamicFees: {
        /**
        
         */
        AssetFeeParameters: PlainDescriptor<Anonymize<Ie5fbn0f5capo3>>;
        /**
        
         */
        ProtocolFeeParameters: PlainDescriptor<Anonymize<Ie5fbn0f5capo3>>;
    };
    Staking: {
        /**
         * Staking period length in blocks.
         */
        PeriodLength: PlainDescriptor<number>;
        /**
         * Pallet id.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Native Asset ID.
         */
        NativeAssetId: PlainDescriptor<number>;
        /**
         * Min amount user must stake.
         */
        MinStake: PlainDescriptor<bigint>;
        /**
         * Weight of the time points in total points calculations.
         */
        TimePointsWeight: PlainDescriptor<number>;
        /**
         * Weight of the action points in total points calculations.
         */
        ActionPointsWeight: PlainDescriptor<number>;
        /**
         * Number of time points users receive for each period.
         */
        TimePointsPerPeriod: PlainDescriptor<number>;
        /**
         * Number of periods user can't claim rewards for. User can exit but won't receive any rewards.
         * If he stay longer than `UnclaimablePeriods` he will receive rewards also for these periods.
         */
        UnclaimablePeriods: PlainDescriptor<bigint>;
        /**
         * Weight of the actual stake in slash points calculation. Bigger the value lower the calculated slash points.
         */
        CurrentStakeWeight: PlainDescriptor<number>;
        /**
         * Max amount of votes the user can have at any time.
         */
        MaxVotes: PlainDescriptor<number>;
        /**
         * NFT collection id.
         */
        NFTCollectionId: PlainDescriptor<bigint>;
    };
    Stableswap: {
        /**
         * Minimum pool liquidity
         */
        MinPoolLiquidity: PlainDescriptor<bigint>;
        /**
         * Minimum trading amount
         */
        MinTradingLimit: PlainDescriptor<bigint>;
        /**
         * Amplification inclusive range. Pool's amp can be selected from the range only.
         */
        AmplificationRange: PlainDescriptor<Anonymize<Ia9ai1mp1viqjd>>;
    };
    Bonds: {
        /**
         * The pallet id, used for deriving its sovereign account ID.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Protocol fee.
         */
        ProtocolFee: PlainDescriptor<number>;
        /**
         * Protocol fee receiver.
         */
        FeeReceiver: PlainDescriptor<SS58String>;
    };
    OtcSettlements: {
        /**
         * Account who receives the profit.
         */
        ProfitReceiver: PlainDescriptor<SS58String>;
        /**
         * Minimum profit in terms of percentage.
         */
        MinProfitPercentage: PlainDescriptor<number>;
        /**
         * Determines when we consider an arbitrage as closed.
         */
        PricePrecision: PlainDescriptor<bigint>;
        /**
         * Minimum trading limit.
         */
        MinTradingLimit: PlainDescriptor<bigint>;
        /**
         * Maximum number of iterations used in the binary search algorithm to find the trade amount.
         */
        MaxIterations: PlainDescriptor<number>;
    };
    LBP: {
        /**
         * Minimum trading limit, sole purpose of this is to keep the math working
         */
        MinTradingLimit: PlainDescriptor<bigint>;
        /**
         * Minimum pool liquidity, sole purpose of this is to keep the math working
         */
        MinPoolLiquidity: PlainDescriptor<bigint>;
        /**
         * Max fraction of pool to sell in single transaction
         */
        MaxInRatio: PlainDescriptor<bigint>;
        /**
         * Max fraction of pool to buy in single transaction
         */
        MaxOutRatio: PlainDescriptor<bigint>;
        /**
        
         */
        repay_fee: PlainDescriptor<Anonymize<I9jd27rnpm8ttv>>;
    };
    XYK: {
        /**
         * Native Asset Id
         */
        NativeAssetId: PlainDescriptor<number>;
        /**
         * Trading fee rate
         */
        GetExchangeFee: PlainDescriptor<Anonymize<I9jd27rnpm8ttv>>;
        /**
         * Minimum trading limit
         */
        MinTradingLimit: PlainDescriptor<bigint>;
        /**
         * Minimum pool liquidity
         */
        MinPoolLiquidity: PlainDescriptor<bigint>;
        /**
         * Max fraction of pool to sell in single transaction
         */
        MaxInRatio: PlainDescriptor<bigint>;
        /**
         * Max fraction of pool to buy in single transaction
         */
        MaxOutRatio: PlainDescriptor<bigint>;
        /**
         * Oracle source identifier for this pallet.
         */
        OracleSource: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Referrals: {
        /**
         * ID of an asset that is used to distribute rewards in.
         */
        RewardAsset: PlainDescriptor<number>;
        /**
         * Pallet id. Determines account which holds accumulated rewards in various assets.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Registration fee details.
         * (ID of an asset which fee is to be paid in, Amount, Beneficiary account)
         */
        RegistrationFee: PlainDescriptor<Anonymize<Ie4gu6f3b6uctq>>;
        /**
         * Maximum referral code length.
         */
        CodeLength: PlainDescriptor<number>;
        /**
         * Minimum referral code length.
         */
        MinCodeLength: PlainDescriptor<number>;
        /**
         * Seed amount that was sent to the reward pot.
         */
        SeedNativeAmount: PlainDescriptor<bigint>;
    };
    Tokens: {
        /**
        
         */
        MaxLocks: PlainDescriptor<number>;
        /**
         * The maximum number of named reserves that can exist on an account.
         */
        MaxReserves: PlainDescriptor<number>;
    };
    Currencies: {
        /**
        
         */
        GetNativeCurrencyId: PlainDescriptor<number>;
    };
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
    };
    EVMAccounts: {
        /**
         * Fee multiplier for the binding of addresses.
         */
        FeeMultiplier: PlainDescriptor<number>;
    };
    DynamicEvmFee: {
        /**
         * WETH Asset Id
         */
        WethAssetId: PlainDescriptor<number>;
    };
    XYKLiquidityMining: {
        /**
         * NFT collection id for liquidity mining's deposit nfts.
         */
        NFTCollectionId: PlainDescriptor<bigint>;
    };
    XYKWarehouseLM: {
        /**
         * Pallet id.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Treasury account to receive claimed rewards lower than ED
         */
        TreasuryAccountId: PlainDescriptor<SS58String>;
        /**
         * Minimum total rewards to distribute from global farm during liquidity mining.
         */
        MinTotalFarmRewards: PlainDescriptor<bigint>;
        /**
         * Minimum number of periods to run liquidity mining program.
         */
        MinPlannedYieldingPeriods: PlainDescriptor<number>;
        /**
         * Maximum number of yield farms same LP shares can be re/deposited into. This value always
         * MUST BE >= 1.
         */
        MaxFarmEntriesPerDeposit: PlainDescriptor<number>;
        /**
         * Max number of yield farms can exist in global farm. This includes all farms in the
         * storage(active, stopped, terminated).
         */
        MaxYieldFarmsPerGlobalFarm: PlainDescriptor<number>;
    };
    DCA: {
        /**
         *Max price difference allowed between blocks
         */
        MaxPriceDifferenceBetweenBlocks: PlainDescriptor<number>;
        /**
         *Max configurable price difference allowed between blocks
         */
        MaxConfigurablePriceDifferenceBetweenBlocks: PlainDescriptor<number>;
        /**
         *The number of max schedules to be executed per block
         */
        MaxSchedulePerBlock: PlainDescriptor<number>;
        /**
         *The number of max retries in case of trade limit error
         */
        MaxNumberOfRetriesOnError: PlainDescriptor<number>;
        /**
         *Minimal period between executions
         */
        MinimalPeriod: PlainDescriptor<number>;
        /**
         *Chance of the random rescheduling
         */
        BumpChance: PlainDescriptor<number>;
        /**
         * Minimum trading limit for a single trade
         */
        MinimumTradingLimit: PlainDescriptor<bigint>;
        /**
         * Native Asset Id
         */
        NativeAssetId: PlainDescriptor<number>;
        /**
         *Minimum budget to be able to schedule a DCA, specified in native currency
         */
        MinBudgetInNativeCurrency: PlainDescriptor<bigint>;
        /**
         *The fee receiver for transaction fees
         */
        FeeReceiver: PlainDescriptor<SS58String>;
        /**
         * Named reserve identifier to store named reserves for orders of each users
         */
        NamedReserveId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Scheduler: {
        /**
         * The maximum weight that may be scheduled per block for any dispatchables.
         */
        MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
         * The maximum number of scheduled calls in the queue for a single block.
         *
         * NOTE:
         * + Dependent pallets' benchmarks might require a higher limit for the setting. Set a
         * higher limit under `runtime-benchmarks` feature.
         */
        MaxScheduledPerBlock: PlainDescriptor<number>;
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
    XTokens: {
        /**
         * Self chain location.
         */
        SelfLocation: PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
        /**
         * Base XCM weight.
         *
         * The actually weight for an XCM message is `T::BaseXcmWeight +
         * T::Weigher::weight(&msg)`.
         */
        BaseXcmWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
         * The id of the RateLimiter.
         */
        RateLimiterId: PlainDescriptor<undefined>;
    };
    EmaOracle: {
        /**
         * Maximum number of unique oracle entries expected in one block.
         */
        MaxUniqueEntries: PlainDescriptor<number>;
    };
};
type IRuntimeCalls = {
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<Ib415e5slg7dos>>;
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
     * API necessary for Ethereum-compatibility layer.
     */
    EthereumRuntimeRPCApi: {
        /**
         * Returns runtime defined pallet_evm::ChainId.
         */
        chain_id: RuntimeDescriptor<[], bigint>;
        /**
         * Returns pallet_evm::Accounts by address.
         */
        account_basic: RuntimeDescriptor<[address: FixedSizeBinary<20>], Anonymize<If08sfhqn8ujfr>>;
        /**
         * Returns FixedGasPrice::min_gas_price
         */
        gas_price: RuntimeDescriptor<[], Anonymize<I4totqt881mlti>>;
        /**
         * For a given account address, returns pallet_evm::AccountCodes.
         */
        account_code_at: RuntimeDescriptor<[address: FixedSizeBinary<20>], Binary>;
        /**
         * Returns the converted FindAuthor::find_author authority id.
         */
        author: RuntimeDescriptor<[], FixedSizeBinary<20>>;
        /**
         * For a given account address and index, returns pallet_evm::AccountStorages.
         */
        storage_at: RuntimeDescriptor<[address: FixedSizeBinary<20>, index: Anonymize<I4totqt881mlti>], FixedSizeBinary<32>>;
        /**
        
         */
        call: RuntimeDescriptor<[from: FixedSizeBinary<20>, to: FixedSizeBinary<20>, data: Binary, value: Anonymize<I4totqt881mlti>, gas_limit: Anonymize<I4totqt881mlti>, max_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, max_priority_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, nonce: Anonymize<Ic4rgfgksgmm3e>, estimate: boolean, access_list: Anonymize<I3dj14b7k3rkm5>], Anonymize<I6ef6bgpp6bbav>>;
        /**
        
         */
        create: RuntimeDescriptor<[from: FixedSizeBinary<20>, data: Binary, value: Anonymize<I4totqt881mlti>, gas_limit: Anonymize<I4totqt881mlti>, max_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, max_priority_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, nonce: Anonymize<Ic4rgfgksgmm3e>, estimate: boolean, access_list: Anonymize<I3dj14b7k3rkm5>], Anonymize<I9nuef6i0lkkf8>>;
        /**
         * Return the current block.
         */
        current_block: RuntimeDescriptor<[], Anonymize<Ifogockjiq4b3>>;
        /**
         * Return the current receipt.
         */
        current_receipts: RuntimeDescriptor<[], Anonymize<I2r0n4gcrs974b>>;
        /**
         * Return the current transaction status.
         */
        current_transaction_statuses: RuntimeDescriptor<[], Anonymize<Ie6kgk6f04rsvk>>;
        /**
        
         */
        current_all: RuntimeDescriptor<[], Anonymize<Ibkook56hopvp8>>;
        /**
         * Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.
         */
        extrinsic_filter: RuntimeDescriptor<[xts: Anonymize<Itom7fk49o0c9>], Anonymize<I1fl9qh2r1hf29>>;
        /**
         * Return the elasticity multiplier.
         */
        elasticity: RuntimeDescriptor<[], Anonymize<I4arjljr6dpflb>>;
        /**
         * Used to determine if gas limit multiplier for non-transactional calls (eth_call/estimateGas)
         * is supported.
         */
        gas_limit_multiplier_support: RuntimeDescriptor<[], undefined>;
        /**
         * Return the pending block.
         */
        pending_block: RuntimeDescriptor<[xts: Anonymize<Itom7fk49o0c9>], Anonymize<I45rl58hfs7m0h>>;
        /**
         * initialize the pending block
         */
        initialize_pending_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
    
     */
    ConvertTransactionRuntimeApi: {
        /**
        
         */
        convert_transaction: RuntimeDescriptor<[transaction: Anonymize<I6fr2mqud652ga>], Binary>;
    };
    /**
     * The API to query EVM account conversions.
     */
    EvmAccountsApi: {
        /**
         * get the EVM address from the substrate address.
         */
        evm_address: RuntimeDescriptor<[account_id: SS58String], FixedSizeBinary<20>>;
        /**
         * Return the Substrate address bound to the EVM account. If not bound, returns `None`.
         */
        bound_account_id: RuntimeDescriptor<[evm_address: FixedSizeBinary<20>], Anonymize<Ihfphjolmsqq1>>;
        /**
         * Get the Substrate address from the EVM address.
         * Returns the truncated version of the address if the address wasn't bind.
         */
        account_id: RuntimeDescriptor<[evm_address: FixedSizeBinary<20>], SS58String>;
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
export type HydrationDispatchError = Anonymize<I34p6lklavdpe2>;
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
export type HydrationQueries = QueryFromPalletsDef<PalletsTypedef>;
export type HydrationCalls = TxFromPalletsDef<PalletsTypedef>;
export type HydrationEvents = EventsFromPalletsDef<PalletsTypedef>;
export type HydrationErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type HydrationConstants = ConstFromPalletsDef<PalletsTypedef>;
export type HydrationCallData = Anonymize<I9l5thhgutrdl0> & {
    value: {
        type: string;
    };
};
export type HydrationWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
