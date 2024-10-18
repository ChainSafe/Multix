import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, I41mpj4cv3t85p, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, I2d3nnk39kh2oc, I56u24ncejr5kt, I9jd27rnpm8ttv, Iag146hmjgqfgj, I8uo3fpd3bcc6f, Iemen6nrhpgh4n, I9p9lq3rej5bhc, Idkbvh6dahk1v7, Iafhl3qnbl655q, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, I1q8tnt1cluu5j, I8ds64oj6581v0, I6af8s65ktiqmm, Icg2f7lij7mhun, I9bin2jc70qt6q, I75otreomvjlo4, Ia7pdug7cdsg8g, I2nsn38vj5mvnv, Ic02kut0350gb0, I199nnq793ql30, I58e1c2iddvge, I571mt39tli22b, Iegmj7n48sc3am, Icgljjb6j82uhn, Ie9j1itogtv7p5, I8phqps8r3of7e, I8fkfedbgu1sn3, Ia2lhg7l2hilo3, Ifvgo9568rpmqc, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Id0as9l3s817qs, Ifmurjhsco5svb, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, I49qfpo41ua99, I87i62vbq153jd, I99bb69usss9gs, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, I9055m3udr8982, Iaik0jbkkg779m, Ifh402tk60vb2r, I8v76mqrb0l78g, Iecq6vfvo7aje1, Ibj768ddeq2abm, Iep2ornlr21i3f, Ieec4jfmfdjf37, I4ojmnsk1dchql, I7fcree6lak6uv, If5p57vivem5dc, Idd1r3dt7gtgrb, I200n1ov5tbcvr, I31j35h89naqah, Ie2hk3u79d6ui9, I9g4ppuluumr6k, I1es2n69lqf2kp, Ifr86mieei7nd, Ibf4p6a31758t8, I9o18bnq52aqup, Icqshsmhmf8luq, Idkp0k6d3u2eoo, Ie9mstr0r014t5, Id8mv3he1igtks, If30c7eb3adnl, I4gqmlq9k6jlk3, Ip0haf6u0s2dh, I8spksjhs283ao, I6ouflveob4eli, I1js2aelrc7fbg, Ieert180gaet6h, I8dq9q5tjv83o, Ia9eqjc3anbc6q, I4c0s5cioidn76, Ievgjq5dn6rae7, Ifkabnqvg455ag, Ibpgnl08ma89n, I82cps8ng2jtug, Ib40pprbfm23eg, Ie2flgovr1b4r6, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, I35p85j063s0il, Iasb8k6ash5mjn, I2esdqcrfg1au7, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, Idcr6u6361oad9, Iej6d7sg4e9i0s, I5n4sebgkfr760, Iataphgmg35ne7, Ifs1i5fk9cqvr6, Iba78va8008lje, I7k6a0t03qhftf, Ieg3fd8p4pkt10, I8kg5ll427kfqq, I467333262q1l9, Ie8g4l9tfuesvh, I7q6tel1epm4gp, I6c1519t4ts0pv, Ib37rjf9trauc9, I4jjc98iufp5bv, I103h8go0c1ad6, Ideaemvoneh309, I3d9o9d7epp66v, I89rm9kilmbc7s, Ivie26fuehncb, I4fec6prusb0fr, I621kiehb37mud, Idj9faf6hgsdur, I8mj1nm903hpts, I2mbguigr12p1c, Ian208gj7nqkdo, Itmchvgqfl28g, I1du4va7rkp1fr, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, I65i612een2ak, I5vvf47ira6s09, I5ns79ftlq8cnl, I59ofijoau4bjh, Ibmr18suc9ikh9, Ieka2e164ntfss, I5u8olqbbvfnvf, Iolfpkdqipcbi, Id064ak9i4tutv, I873jn3roc1gvm, Ie2d199vs205js, Ivqv0db9u70av, I3ppsnoe8uuhrj, I1i6n6oid188lm, Idfjjcf93r74ng, I91tliuq1e49u6, Idc54030dbq1f7, Ia05o1uc7d7tm9, I98i83boqc476c, Ivcm9ai11rb2u, I127rdknngb3lr, I1c7rq47pt010g, I12ng1otu7kekg, Icm9m0qeemu66d, I7fcl4aua07ato, I6qq5nnbjegi8u, I666bl2fqjkejo, I2a839vbf5817q, Ia9p5bg6p18r0i, I5rlb1eesbovji, Ia96ru6pujbas0, I90n6nnkpdahrh, I4q8pj89cjg46e, I2tctnk2vr8moa, I1pm30k3i4438u, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I7uokuu569ccbo, I81vt5eq60l4b6, Id9o20o60vogf2, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I5u4rht6cqt8gn, Idu1ujel33jksu, I58dlh7d3khdo, I40fog3d0qlub1, Ib4691jt3qnb97, Iaif2nhfhk9qc0, I40pqum1mu8qg3, I1r4c2ghbtvjuc, I9n3utis0e5rr5, I342omrgb8mrol, Ifshuvu6ph2fvg, Idju6aft93dvsp, Ifdq7r9tkem3dm, I7ak4sbgoc0b1q, Ia2mrt26qb3lcq, I38jfk5li8iang, I8551vvghi2irk, I8jt6ldsplhg8i, I2dtrijkm5601t, I2ev73t79f46tb, Ib2obgji960euh, Icu8seopr711dn, Id09aqt1ca773l, I3c63j6sh3evqn, I79cmnv5q6b3p, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, I1736r1jp6plpc, If31vrl50nund3, I6s1n1athh0bbq, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, I5g83hbjlt4g7d, Ie2qs571usasls, I1fll11jqhjobd, I3688il5c49f7a, I4kgns97nm19us, I93l14uap9cben, I648auksndla9n, I5rpu8e0bev51b, Ie9cme7sjl2h5a, I5pchq1uevta1p, I2j4oeihu6vlh4, I2ngi4geus866u, I3nkmpr3dlb5ma, I8oimeqepjooed, Ibc5mquirka4r9, I77usuakd9hv15, I3qt1hgg4djhgb, Ic5b47dj4coa3r, Ia6m2mqatie4c8, I4169336hu4big, I18tsj730b9hcm, I2mbd1rmb00d2c, I1b2tth8h1odgg, I3p80babids0fu, I52q1abqhemsoj, I1kpabdmb2r0c5, Ifgs07rgphbqv0, Idvsf5cbunj7r8, I12504d0vc9lp1, Id29418nin4lfn, Icjd1uv2fqhidu, I91gje44h95np5, I9fss5aulbml64, I7d5l1aam61hfj, Ieucctmr7s3nr1, I53ph05vu6nvda, Ie0bccjhtmt5ep, I849qe2r3bkhgs, Ie5du4befecojp, Iaqcdtcg1n6r1b, I4eus13q90k99b, I3tl8ogjncpm2c, I7jqtdmsfv7o4u, If8009mb874sp7, I29k1t0l9q4ot2, Idoneaqv7bn270, Ifqotmmbsrrn2t, I702l6ro52co4b, I3aq6nd1rsiec4, I9lnema8c5781i, I7vau02iuv06ti, Id7bb1kbm6hd7o, I91l6q9oikoe57, I3h4ohbkb8vmbe, I1n28f4ceil09b, Iagv0u89un0nso, Ie6ivrj6iniahu, I6g2l34laajq1g, I6vbob3jrlktb7, I68hvq39cv9bhg, Id1vdg5glf32bv, I34e4t3tquuabp, I3b100panba8pt, I76pnvsgv4su6l, I1grn1khr0a3i8, I2b1121ufu9vsp, Ics51ctc9oasbt, Ifadgbhtqk8muc, I498b35h1tosb3, Id97r7dv4sbp2r, I4r3lr1hp3q5vu, I26sb21rohuspe, Id846uvbhv0ups, Iel8d6vl7kun8s, Ia5vm4875s01on, I1io386vc3pmlf, Idnoja8d5k0dtr, I95j99jsac0h95, I60v7bikk54tpu, Ifpj261e8s63m3, I2j9vnhvdvfhmj, I5p323njmi171p, Ia82mnkmeo2rhc, I4iak6d0gp76pq, Icbccs0ug47ilf, I855j4i3kr8ko1, Iijbt89g7a8bm, Ia3c82eadg79bj, Ienusoeb625ftq, I25bljl8ut97eo, I6mjba3f9cfcrp, Ic65reh6p4slbe, Iep27ialq4a7o7, Iasu5jvoqr43mv, Idur6qso079kn2, I5qolde99acmd1, I62vuqhqnrh3ct, I2ur0oeqg495j8, I5ra2f4tk0pbpo, I193fovq1blcqu, Ivfk29ifghh65, Ieb7f8831td64a, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I4cbvqmqadhrea, I4fooe9dun9o0t, Iesfs62l0emo0u, I8l5kvre4urt6i, I1e4oietgoviv9, I31t3g4hk9vbij, If82ef6cjv8bf6, Ief502srmm35a5, Icmj165ef4r8q7, I5audd19ntmm34, I4uo49pmivhb33, I56bf0an7gbtfd, If2i2d0sfbq0jg, Ibgp85oael1km5, Iatcmglh3trnbe, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, I8usdc6tg7829p, Id9idaj83175f9, Ie1semicfuv5uu, If25fjs9o37co1, I70sc1pdo8vtos, Iep7an7g10jgpc, Ierev02d74bpoa, Ic836gl3ins837, I71p4hrp3dn9lm, I955v10i1smj2g, I9jl00225t93sl, Ic6up6jb6qdvvj, I2hq50pu2kdjpo, I1k25afngad6j6, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I3iun9sig164po, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, Ic04t5m0ihvrp5, I7id9rd759h17f, Id3ajno3thjgec, I3vs6qhrit34fa, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, Ie57lonvscburs, I35hd3t2u29eq9, I7l6ub3smnjto4, I84g38rnlg29op, Ift6f10887nk72, I7qc53b1tvqjg2, I5ufdtfmbt08vq, Iak7fhrgb9jnnq, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, Iduq4ed8skcjjm, I9mlal0k97k542, If7h819bbagi7e, I470t9q5rbko1v, Ichdo0c08k9mdo, Ieb8d9j6dd5mra, I2ahpksvlo9d9c, Iadl3hi6a95mjv, I8sfstv2v3gf30, I4kd1gd18imvib, I7t7f15a41rr75, Ia8o2edr1f864s, If6710ddu1n5c0, I4rcb77auq9un9, Icpdatq862viq1, I9ov9qusrr22m7, I4sv4h17bn2s7l, Iel10h7jkamd36, I256nf8mbq2ji2, Icld8n4p4164so, Idretbt0ads77s, Iec98km9p5pief, I3jii2muob6ghq, Iapna56s3m0ifu, I2m484u5grs9t6, I1isi013g6qer3, I1tsoaordg68dn, Ia75kq0pe5tv9f, Iaukv957beuu35, I4tudb0ce02mk6, I736uosa90ai8o, Ibe6clpska8jpe, If4cacupn5dljo, I8dsi8mk6ckogi, I655sh5mkv30oh, If7vs929oo0tq1, Icninh3otlaqnf, I9bs07r2l4sohg, I2jbsbaa0plh1m, Ibjhdvo42j8ooc, Ib2h8tf2j486ge, I24o93rg071u0r, I9f1ag3dummf1d, I7mbq68faol6f0, Ibsr7s7f6m5e3v, I7k8ovj1bnotd8, I8tir9pdto2iig, Iq38juhlnqpti, Idvipclfc4pej8, I9gjj9chf4ekgk, Ic7o4tlgoouvkj, I5qobcllfklbjm, Iatnr3londg4j9, I3imtacjnsgh1r, I8002qd532bgbp, Ices4nh6e7so3t, I7vtgav0u6d8sk, Ictprchp8m3ig7, I7cm08des6caup, Ifohblgil17v5c, I18u7irfkprqtc, Iedmlp2ihnd9ih, I7pi88vnts2427, Ia8flqh0ukcd6d, I2sof9mrmjhllk, Ifi3pfbdu7hk3f, I55ji04hkqqfb, I54dj4621btbog, I8eeivtdimg5sg, Ia53lkiao1udji, Ie26sa5pkqc7lh, I7sn2bldv48ck8, It3rcku7atiln, I2e6ar36i5p9qo, Ifssptimng3fig, I2d4kqt7h8dvva, I6ou90sd9g7cje, I3dqh1v95db76q, Iec84e3i3f9e7f, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Ib790qnltjsdhl, I5rtkmhm2dng4u, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iabpgqcjikia83, I7auvdvt5epl7s, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, Id1tj560j5ungu, I974rv7q5bvln8, I5vun5pfncmibi, I6n992ikreen29, Iau3fg1ag3dn6c, Id2dj0p9r1hd24, I3iaubjm1mnjl7, I9dnd2gpp3ceom, Ic1d4u2opv3fst, Icpinkc2ap1trn } from "./common-types";
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
        
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I5sesotjlssv2d>, false>;
        /**
        
         */
        ExtrinsicCount: StorageDescriptor<[], number, true>;
        /**
        
         */
        InherentsApplied: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        BlockWeight: StorageDescriptor<[], Anonymize<Iffmde3ekjedi9>, false>;
        /**
        
         */
        AllExtrinsicsLen: StorageDescriptor<[], number, true>;
        /**
        
         */
        BlockHash: StorageDescriptor<[Key: number], FixedSizeBinary<32>, false>;
        /**
        
         */
        ExtrinsicData: StorageDescriptor<[Key: number], Binary, false>;
        /**
        
         */
        Number: StorageDescriptor<[], number, false>;
        /**
        
         */
        ParentHash: StorageDescriptor<[], FixedSizeBinary<32>, false>;
        /**
        
         */
        Digest: StorageDescriptor<[], Anonymize<I4mddgoa69c0a2>, false>;
        /**
        
         */
        Events: StorageDescriptor<[], Anonymize<I41mpj4cv3t85p>, false>;
        /**
        
         */
        EventCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        EventTopics: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I95g6i7ilua7lq>, false>;
        /**
        
         */
        LastRuntimeUpgrade: StorageDescriptor<[], Anonymize<Ieniouoqkq4icf>, true>;
        /**
        
         */
        UpgradedToU32RefCount: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        UpgradedToTripleRefCount: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        ExecutionPhase: StorageDescriptor<[], Phase, true>;
        /**
        
         */
        AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ibgl04rn6nbfm6>, true>;
    };
    Timestamp: {
        /**
        
         */
        Now: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        DidUpdate: StorageDescriptor<[], boolean, false>;
    };
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true>;
        /**
        
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<I2d3nnk39kh2oc>, false>;
        /**
        
         */
        Retries: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], Anonymize<I56u24ncejr5kt>, true>;
        /**
        
         */
        Lookup: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9jd27rnpm8ttv>, true>;
    };
    Multisig: {
        /**
        
         */
        Multisigs: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, Anonymize<Iag146hmjgqfgj>, true>;
    };
    Proxy: {
        /**
        
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<Iemen6nrhpgh4n>, false>;
        /**
        
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false>;
    };
    TransactionPause: {
        /**
        
         */
        PausedTransactions: StorageDescriptor<[Key: Anonymize<Idkbvh6dahk1v7>], undefined, true>;
        /**
        
         */
        PausedEvmPrecompiles: StorageDescriptor<[Key: FixedSizeBinary<20>], undefined, true>;
    };
    IdleScheduler: {
        /**
        
         */
        Tasks: StorageDescriptor<[Key: number], Anonymize<Iafhl3qnbl655q>, true>;
        /**
        
         */
        NextTaskId: StorageDescriptor<[], number, false>;
        /**
        
         */
        PreviousRelayBlockNumber: StorageDescriptor<[], number, false>;
    };
    Preimage: {
        /**
        
         */
        StatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageOldRequestStatus, true>;
        /**
        
         */
        RequestStatusFor: StorageDescriptor<[Key: FixedSizeBinary<32>], PreimageRequestStatus, true>;
        /**
        
         */
        PreimageFor: StorageDescriptor<[Key: Anonymize<I4pact7n2e9a0i>], Binary, true>;
    };
    Balances: {
        /**
        
         */
        TotalIssuance: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        InactiveIssuance: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        Account: StorageDescriptor<[Key: SS58String], Anonymize<I1q8tnt1cluu5j>, false>;
        /**
        
         */
        Locks: StorageDescriptor<[Key: SS58String], Anonymize<I8ds64oj6581v0>, false>;
        /**
        
         */
        Reserves: StorageDescriptor<[Key: SS58String], Anonymize<I6af8s65ktiqmm>, false>;
        /**
        
         */
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<Icg2f7lij7mhun>, false>;
        /**
        
         */
        Freezes: StorageDescriptor<[Key: SS58String], Anonymize<I9bin2jc70qt6q>, false>;
    };
    Tokens: {
        /**
        
         */
        TotalIssuance: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, false>;
        /**
        
         */
        Locks: StorageDescriptor<Anonymize<I2nsn38vj5mvnv>, Anonymize<Ia7pdug7cdsg8g>, false>;
        /**
        
         */
        Accounts: StorageDescriptor<Anonymize<I2nsn38vj5mvnv>, Anonymize<Ic02kut0350gb0>, false>;
        /**
        
         */
        Reserves: StorageDescriptor<Anonymize<I2nsn38vj5mvnv>, Anonymize<I6af8s65ktiqmm>, false>;
    };
    Vesting: {
        /**
        
         */
        VestingSchedules: StorageDescriptor<[Key: SS58String], Anonymize<I199nnq793ql30>, false>;
    };
    TransactionPayment: {
        /**
        
         */
        NextFeeMultiplier: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        AlternativeFeeSwapPath: StorageDescriptor<[Key: SS58String], Anonymize<I58e1c2iddvge>, true>;
        /**
        
         */
        GlobalFeeSwapPath: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], Anonymize<I58e1c2iddvge>, true>;
        /**
        
         */
        PoolSize: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, false>;
        /**
        
         */
        TokenExchangeRate: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, true>;
        /**
        
         */
        SwapBalanceThreshold: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, false>;
        /**
        
         */
        OverrideChargeFeeMethod: StorageDescriptor<[], Anonymize<I571mt39tli22b>, true>;
    };
    Treasury: {
        /**
        
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Proposals: StorageDescriptor<[Key: number], Anonymize<Iegmj7n48sc3am>, true>;
        /**
        
         */
        Deactivated: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        Approvals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
        
         */
        SpendCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Spends: StorageDescriptor<[Key: number], Anonymize<Ie9j1itogtv7p5>, true>;
    };
    Bounties: {
        /**
        
         */
        BountyCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Bounties: StorageDescriptor<[Key: number], Anonymize<I8phqps8r3of7e>, true>;
        /**
        
         */
        BountyDescriptions: StorageDescriptor<[Key: number], Binary, true>;
        /**
        
         */
        BountyApprovals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
    };
    Tips: {
        /**
        
         */
        Tips: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I8fkfedbgu1sn3>, true>;
        /**
        
         */
        Reasons: StorageDescriptor<[Key: FixedSizeBinary<32>], Binary, true>;
    };
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false>;
    };
    Authorship: {
        /**
        
         */
        Author: StorageDescriptor<[], SS58String, true>;
    };
    CollatorSelection: {
        /**
        
         */
        Invulnerables: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Candidates: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        DesiredCandidates: StorageDescriptor<[], number, false>;
        /**
        
         */
        CandidacyBond: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        SessionPoints: StorageDescriptor<[Key: SS58String], number, false>;
        /**
        
         */
        NonCandidates: StorageDescriptor<[Key: SS58String], number, false>;
    };
    Session: {
        /**
        
         */
        Validators: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        CurrentIndex: StorageDescriptor<[], number, false>;
        /**
        
         */
        QueuedChanged: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        QueuedKeys: StorageDescriptor<[], Anonymize<Ifvgo9568rpmqc>, false>;
        /**
        
         */
        DisabledValidators: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
        
         */
        NextKeys: StorageDescriptor<[Key: SS58String], FixedSizeBinary<32>, true>;
        /**
        
         */
        KeyOwner: StorageDescriptor<[Key: Anonymize<I82jm9g7pufuel>], SS58String, true>;
    };
    Aura: {
        /**
        
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        CurrentSlot: StorageDescriptor<[], bigint, false>;
    };
    AuraExt: {
        /**
        
         */
        Authorities: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        SlotInfo: StorageDescriptor<[], Anonymize<I6cs1itejju2vv>, true>;
    };
    SessionManager: {
        /**
        
         */
        SessionDuration: StorageDescriptor<[], number, false>;
        /**
        
         */
        DurationOffset: StorageDescriptor<[], number, false>;
        /**
        
         */
        SessionDurationChanges: StorageDescriptor<[Key: number], Anonymize<I9jd27rnpm8ttv>, false>;
    };
    XcmpQueue: {
        /**
        
         */
        InboundXcmpSuspended: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
        /**
        
         */
        OutboundXcmpStatus: StorageDescriptor<[], Anonymize<Ib77b0fp1a6mjr>, false>;
        /**
        
         */
        OutboundXcmpMessages: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, Binary, false>;
        /**
        
         */
        SignalMessages: StorageDescriptor<[Key: number], Binary, false>;
        /**
        
         */
        QueueConfig: StorageDescriptor<[], Anonymize<Ifup3lg9ro8a0f>, false>;
        /**
        
         */
        QueueSuspended: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        DeliveryFeeFactor: StorageDescriptor<[Key: number], bigint, false>;
    };
    PolkadotXcm: {
        /**
        
         */
        QueryCounter: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        Queries: StorageDescriptor<[Key: bigint], XcmPalletQueryStatus, true>;
        /**
        
         */
        AssetTraps: StorageDescriptor<[Key: FixedSizeBinary<32>], number, false>;
        /**
        
         */
        SafeXcmVersion: StorageDescriptor<[], number, true>;
        /**
        
         */
        SupportedVersion: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, number, true>;
        /**
        
         */
        VersionNotifiers: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, bigint, true>;
        /**
        
         */
        VersionNotifyTargets: StorageDescriptor<Anonymize<Ic4qvh5df9s5gp>, Anonymize<I7vlvrrl2pnbgk>, true>;
        /**
        
         */
        VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<I50sjs3s5lud21>, false>;
        /**
        
         */
        CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true>;
        /**
        
         */
        RemoteLockedFungibles: StorageDescriptor<Anonymize<Iteuj23is2ed5>, Anonymize<I50qp0ij7h62g2>, true>;
        /**
        
         */
        LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I3rp19gb4dadaa>, true>;
        /**
        
         */
        XcmExecutionSuspended: StorageDescriptor<[], boolean, false>;
    };
    UnknownTokens: {
        /**
        
         */
        ConcreteFungibleBalances: StorageDescriptor<Anonymize<Id0as9l3s817qs>, bigint, false>;
        /**
        
         */
        AbstractFungibleBalances: StorageDescriptor<Anonymize<Ifmurjhsco5svb>, bigint, false>;
    };
    MessageQueue: {
        /**
        
         */
        BookStateFor: StorageDescriptor<[Key: Anonymize<Iejeo53sea6n4q>], Anonymize<Idh2ug6ou4a8og>, false>;
        /**
        
         */
        ServiceHead: StorageDescriptor<[], Anonymize<Iejeo53sea6n4q>, true>;
        /**
        
         */
        Pages: StorageDescriptor<Anonymize<Ib4jhb8tt3uung>, Anonymize<I53esa2ms463bk>, true>;
    };
    Authority: {
        /**
        
         */
        NextTaskIndex: StorageDescriptor<[], number, false>;
        /**
        
         */
        SavedCalls: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I49qfpo41ua99>, true>;
    };
    GeneralCouncil: {
        /**
        
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I87i62vbq153jd>, true>;
        /**
        
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
        
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    GeneralCouncilMembership: {
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    FinancialCouncil: {
        /**
        
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I87i62vbq153jd>, true>;
        /**
        
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
        
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    FinancialCouncilMembership: {
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    HomaCouncil: {
        /**
        
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I87i62vbq153jd>, true>;
        /**
        
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
        
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    HomaCouncilMembership: {
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    TechnicalCommittee: {
        /**
        
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I87i62vbq153jd>, true>;
        /**
        
         */
        Voting: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I99bb69usss9gs>, true>;
        /**
        
         */
        ProposalCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    TechnicalCommitteeMembership: {
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    Democracy: {
        /**
        
         */
        PublicPropCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        PublicProps: StorageDescriptor<[], Anonymize<I6mhebgj62g585>, false>;
        /**
        
         */
        DepositOf: StorageDescriptor<[Key: number], Anonymize<I3vhcedhm4hpvm>, true>;
        /**
        
         */
        ReferendumCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        LowestUnbaked: StorageDescriptor<[], number, false>;
        /**
        
         */
        ReferendumInfoOf: StorageDescriptor<[Key: number], Anonymize<I526daka7j7b17>, true>;
        /**
        
         */
        VotingOf: StorageDescriptor<[Key: SS58String], Anonymize<Ifanv2kvm586s4>, false>;
        /**
        
         */
        LastTabledWasExternal: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        NextExternal: StorageDescriptor<[], Anonymize<I5rsgtofmn5lli>, true>;
        /**
        
         */
        Blacklist: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Idned7t7knml6b>, true>;
        /**
        
         */
        Cancellations: StorageDescriptor<[Key: FixedSizeBinary<32>], boolean, false>;
        /**
        
         */
        MetadataOf: StorageDescriptor<[Key: Anonymize<I2itl2k1j2q8nf>], FixedSizeBinary<32>, true>;
    };
    AcalaOracle: {
        /**
        
         */
        RawValues: StorageDescriptor<Anonymize<I2nsn38vj5mvnv>, Anonymize<I9055m3udr8982>, true>;
        /**
        
         */
        Values: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], Anonymize<I9055m3udr8982>, true>;
        /**
        
         */
        HasDispatched: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
    };
    OperatorMembershipAcala: {
        /**
        
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
        
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    Auction: {
        /**
        
         */
        Auctions: StorageDescriptor<[Key: number], Anonymize<Iaik0jbkkg779m>, true>;
        /**
        
         */
        AuctionsIndex: StorageDescriptor<[], number, false>;
        /**
        
         */
        AuctionEndTime: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, undefined, true>;
    };
    Rewards: {
        /**
        
         */
        PoolInfos: StorageDescriptor<[Key: Anonymize<I8v76mqrb0l78g>], Anonymize<Ifh402tk60vb2r>, false>;
        /**
        
         */
        SharesAndWithdrawnRewards: StorageDescriptor<Anonymize<Ibj768ddeq2abm>, Anonymize<Iecq6vfvo7aje1>, false>;
    };
    OrmlNFT: {
        /**
        
         */
        NextClassId: StorageDescriptor<[], number, false>;
        /**
        
         */
        NextTokenId: StorageDescriptor<[Key: number], bigint, false>;
        /**
        
         */
        Classes: StorageDescriptor<[Key: number], Anonymize<Iep2ornlr21i3f>, true>;
        /**
        
         */
        Tokens: StorageDescriptor<Anonymize<I4ojmnsk1dchql>, Anonymize<Ieec4jfmfdjf37>, true>;
        /**
        
         */
        TokensByOwner: StorageDescriptor<Anonymize<I7fcree6lak6uv>, undefined, false>;
    };
    Parameters: {
        /**
        
         */
        Parameters: StorageDescriptor<[Key: Anonymize<Idd1r3dt7gtgrb>], Anonymize<If5p57vivem5dc>, true>;
    };
    Prices: {
        /**
        
         */
        LockedPrice: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, true>;
    };
    Dex: {
        /**
        
         */
        LiquidityPool: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
        
         */
        TradingPairStatuses: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<Ie2hk3u79d6ui9>, false>;
        /**
        
         */
        ProvisioningPool: StorageDescriptor<Anonymize<I9g4ppuluumr6k>, Anonymize<I200n1ov5tbcvr>, false>;
        /**
        
         */
        InitialShareExchangeRates: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<I200n1ov5tbcvr>, false>;
    };
    DexOracle: {
        /**
        
         */
        Cumulatives: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<I1es2n69lqf2kp>, false>;
        /**
        
         */
        AveragePrices: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<Ifr86mieei7nd>, true>;
    };
    AggregatedDex: {
        /**
        
         */
        AggregatedSwapPaths: StorageDescriptor<[Key: Anonymize<I31j35h89naqah>], Anonymize<Ibf4p6a31758t8>, true>;
    };
    Earning: {
        /**
        
         */
        Ledger: StorageDescriptor<[Key: SS58String], Anonymize<I9o18bnq52aqup>, true>;
    };
    AuctionManager: {
        /**
        
         */
        CollateralAuctions: StorageDescriptor<[Key: number], Anonymize<Icqshsmhmf8luq>, true>;
        /**
        
         */
        TotalCollateralInAuction: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, false>;
        /**
        
         */
        TotalTargetInAuction: StorageDescriptor<[], bigint, false>;
    };
    Loans: {
        /**
        
         */
        Positions: StorageDescriptor<Anonymize<Ie9mstr0r014t5>, Anonymize<Idkp0k6d3u2eoo>, false>;
        /**
        
         */
        TotalPositions: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], Anonymize<Idkp0k6d3u2eoo>, false>;
    };
    Honzon: {
        /**
        
         */
        Authorization: StorageDescriptor<Anonymize<Id8mv3he1igtks>, bigint, true>;
    };
    CdpTreasury: {
        /**
        
         */
        ExpectedCollateralAuctionSize: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, false>;
        /**
        
         */
        DebitPool: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        DebitOffsetBuffer: StorageDescriptor<[], bigint, false>;
    };
    CdpEngine: {
        /**
        
         */
        DebitExchangeRate: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], bigint, true>;
        /**
        
         */
        CollateralParams: StorageDescriptor<[Key: Anonymize<I75otreomvjlo4>], Anonymize<If30c7eb3adnl>, true>;
        /**
        
         */
        LastAccumulationSecs: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        LiquidationContracts: StorageDescriptor<[], Anonymize<I4gqmlq9k6jlk3>, false>;
    };
    EmergencyShutdown: {
        /**
        
         */
        IsShutdown: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        CanRefund: StorageDescriptor<[], boolean, false>;
    };
    Homa: {
        /**
        
         */
        RelayChainCurrentEra: StorageDescriptor<[], number, false>;
        /**
        
         */
        StakingLedgers: StorageDescriptor<[Key: number], Anonymize<Ip0haf6u0s2dh>, true>;
        /**
        
         */
        TotalStakingBonded: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        ToBondPool: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        TotalVoidLiquid: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        UnclaimedRedemption: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        RedeemRequests: StorageDescriptor<[Key: SS58String], Anonymize<I8spksjhs283ao>, true>;
        /**
        
         */
        Unbondings: StorageDescriptor<Anonymize<I6ouflveob4eli>, bigint, false>;
        /**
        
         */
        EstimatedRewardRatePerEra: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        SoftBondedCapPerSubAccount: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        CommissionRate: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        FastMatchFeeRate: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        LastEraBumpedBlock: StorageDescriptor<[], number, false>;
        /**
        
         */
        BumpEraFrequency: StorageDescriptor<[], number, false>;
    };
    XcmInterface: {
        /**
        
         */
        XcmDestWeightAndFee: StorageDescriptor<[Key: Anonymize<Ieert180gaet6h>], Anonymize<I1js2aelrc7fbg>, false>;
    };
    Incentives: {
        /**
        
         */
        IncentiveRewardAmounts: StorageDescriptor<Anonymize<I8dq9q5tjv83o>, bigint, false>;
        /**
        
         */
        ClaimRewardDeductionRates: StorageDescriptor<[Key: Anonymize<I8v76mqrb0l78g>], bigint, false>;
        /**
        
         */
        ClaimRewardDeductionCurrency: StorageDescriptor<[Key: Anonymize<I8v76mqrb0l78g>], Anonymize<I75otreomvjlo4>, true>;
        /**
        
         */
        PendingMultiRewards: StorageDescriptor<Anonymize<Ibj768ddeq2abm>, Anonymize<Ia9eqjc3anbc6q>, false>;
    };
    AssetRegistry: {
        /**
        
         */
        NextForeignAssetId: StorageDescriptor<[], number, false>;
        /**
        
         */
        NextStableAssetId: StorageDescriptor<[], number, false>;
        /**
        
         */
        ForeignAssetLocations: StorageDescriptor<[Key: number], Anonymize<I4c0s5cioidn76>, true>;
        /**
        
         */
        LocationToCurrencyIds: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], Anonymize<I75otreomvjlo4>, true>;
        /**
        
         */
        Erc20IdToAddress: StorageDescriptor<[Key: number], FixedSizeBinary<20>, true>;
        /**
        
         */
        AssetMetadatas: StorageDescriptor<[Key: Anonymize<Ifkabnqvg455ag>], Anonymize<Ievgjq5dn6rae7>, true>;
    };
    LiquidCrowdloan: {
        /**
        
         */
        RedeemCurrencyId: StorageDescriptor<[], Anonymize<I75otreomvjlo4>, true>;
    };
    EVM: {
        /**
        
         */
        ChainId: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        Accounts: StorageDescriptor<[Key: FixedSizeBinary<20>], Anonymize<Ibpgnl08ma89n>, true>;
        /**
        
         */
        ContractStorageSizes: StorageDescriptor<[Key: FixedSizeBinary<20>], number, false>;
        /**
        
         */
        AccountStorages: StorageDescriptor<Anonymize<I82cps8ng2jtug>, FixedSizeBinary<32>, false>;
        /**
        
         */
        Codes: StorageDescriptor<[Key: FixedSizeBinary<32>], Binary, false>;
        /**
        
         */
        CodeInfos: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Ib40pprbfm23eg>, true>;
        /**
        
         */
        NetworkContractIndex: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        ExtrinsicOrigin: StorageDescriptor<[], SS58String, true>;
        /**
        
         */
        XcmOrigin: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, true>;
    };
    EvmAccounts: {
        /**
        
         */
        Accounts: StorageDescriptor<[Key: FixedSizeBinary<20>], SS58String, true>;
        /**
        
         */
        EvmAddresses: StorageDescriptor<[Key: SS58String], FixedSizeBinary<20>, true>;
    };
    StableAsset: {
        /**
        
         */
        PoolCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Pools: StorageDescriptor<[Key: number], Anonymize<Ie2flgovr1b4r6>, true>;
    };
    ParachainSystem: {
        /**
        
         */
        UnincludedSegment: StorageDescriptor<[], Anonymize<I1v7jbnil3tjns>, false>;
        /**
        
         */
        AggregatedUnincludedSegment: StorageDescriptor<[], Anonymize<I8jgj1nhcr2dg8>, true>;
        /**
        
         */
        PendingValidationCode: StorageDescriptor<[], Binary, false>;
        /**
        
         */
        NewValidationCode: StorageDescriptor<[], Binary, true>;
        /**
        
         */
        ValidationData: StorageDescriptor<[], Anonymize<Ifn6q3equiq9qi>, true>;
        /**
        
         */
        DidSetValidationCode: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        LastRelayChainBlockNumber: StorageDescriptor<[], number, false>;
        /**
        
         */
        UpgradeRestrictionSignal: StorageDescriptor<[], Anonymize<Ia3sb0vgvovhtg>, false>;
        /**
        
         */
        UpgradeGoAhead: StorageDescriptor<[], Anonymize<Iav8k1edbj86k7>, false>;
        /**
        
         */
        RelayStateProof: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, true>;
        /**
        
         */
        RelevantMessagingState: StorageDescriptor<[], Anonymize<I4i91h98n3cv1b>, true>;
        /**
        
         */
        HostConfiguration: StorageDescriptor<[], Anonymize<I4iumukclgj8ej>, true>;
        /**
        
         */
        LastDmqMqcHead: StorageDescriptor<[], FixedSizeBinary<32>, false>;
        /**
        
         */
        LastHrmpMqcHeads: StorageDescriptor<[], Anonymize<Iqnbvitf7a7l3>, false>;
        /**
        
         */
        ProcessedDownwardMessages: StorageDescriptor<[], number, false>;
        /**
        
         */
        HrmpWatermark: StorageDescriptor<[], number, false>;
        /**
        
         */
        HrmpOutboundMessages: StorageDescriptor<[], Anonymize<I6r5cbv8ttrb09>, false>;
        /**
        
         */
        UpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        /**
        
         */
        PendingUpwardMessages: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        /**
        
         */
        UpwardDeliveryFeeFactor: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        AnnouncedHrmpMessagesPerCandidate: StorageDescriptor<[], number, false>;
        /**
        
         */
        ReservedXcmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
        /**
        
         */
        ReservedDmpWeightOverride: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, true>;
        /**
        
         */
        CustomValidationHeadData: StorageDescriptor<[], Binary, true>;
    };
    Sudo: {
        /**
        
         */
        Key: StorageDescriptor<[], SS58String, true>;
    };
};
type ICalls = {
    System: {
        /**
        
         */
        remark: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
        
         */
        set_heap_pages: TxDescriptor<Anonymize<I4adgbll7gku4i>>;
        /**
        
         */
        set_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
        
         */
        set_code_without_checks: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
        
         */
        set_storage: TxDescriptor<Anonymize<I9pj91mj79qekl>>;
        /**
        
         */
        kill_storage: TxDescriptor<Anonymize<I39uah9nss64h9>>;
        /**
        
         */
        kill_prefix: TxDescriptor<Anonymize<Ik64dknsq7k08>>;
        /**
        
         */
        remark_with_event: TxDescriptor<Anonymize<I8ofcg5rbj0g2c>>;
        /**
        
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
        
         */
        authorize_upgrade_without_checks: TxDescriptor<Anonymize<Ib51vk42m1po4n>>;
        /**
        
         */
        apply_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    Timestamp: {
        /**
        
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Scheduler: {
        /**
        
         */
        schedule: TxDescriptor<Anonymize<Iej6d7sg4e9i0s>>;
        /**
        
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
        
         */
        schedule_named: TxDescriptor<Anonymize<Iataphgmg35ne7>>;
        /**
        
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
        
         */
        schedule_after: TxDescriptor<Anonymize<Iba78va8008lje>>;
        /**
        
         */
        schedule_named_after: TxDescriptor<Anonymize<I7k6a0t03qhftf>>;
        /**
        
         */
        set_retry: TxDescriptor<Anonymize<Ieg3fd8p4pkt10>>;
        /**
        
         */
        set_retry_named: TxDescriptor<Anonymize<I8kg5ll427kfqq>>;
        /**
        
         */
        cancel_retry: TxDescriptor<Anonymize<I467333262q1l9>>;
        /**
        
         */
        cancel_retry_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
    };
    Utility: {
        /**
        
         */
        batch: TxDescriptor<Anonymize<Ie8g4l9tfuesvh>>;
        /**
        
         */
        as_derivative: TxDescriptor<Anonymize<I7q6tel1epm4gp>>;
        /**
        
         */
        batch_all: TxDescriptor<Anonymize<Ie8g4l9tfuesvh>>;
        /**
        
         */
        dispatch_as: TxDescriptor<Anonymize<I6c1519t4ts0pv>>;
        /**
        
         */
        force_batch: TxDescriptor<Anonymize<Ie8g4l9tfuesvh>>;
        /**
        
         */
        with_weight: TxDescriptor<Anonymize<Ib37rjf9trauc9>>;
    };
    Multisig: {
        /**
        
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I4jjc98iufp5bv>>;
        /**
        
         */
        as_multi: TxDescriptor<Anonymize<I103h8go0c1ad6>>;
        /**
        
         */
        approve_as_multi: TxDescriptor<Anonymize<Ideaemvoneh309>>;
        /**
        
         */
        cancel_as_multi: TxDescriptor<Anonymize<I3d9o9d7epp66v>>;
    };
    Proxy: {
        /**
        
         */
        proxy: TxDescriptor<Anonymize<I89rm9kilmbc7s>>;
        /**
        
         */
        add_proxy: TxDescriptor<Anonymize<Ivie26fuehncb>>;
        /**
        
         */
        remove_proxy: TxDescriptor<Anonymize<Ivie26fuehncb>>;
        /**
        
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
        
         */
        create_pure: TxDescriptor<Anonymize<I4fec6prusb0fr>>;
        /**
        
         */
        kill_pure: TxDescriptor<Anonymize<I621kiehb37mud>>;
        /**
        
         */
        announce: TxDescriptor<Anonymize<Idj9faf6hgsdur>>;
        /**
        
         */
        remove_announcement: TxDescriptor<Anonymize<Idj9faf6hgsdur>>;
        /**
        
         */
        reject_announcement: TxDescriptor<Anonymize<I8mj1nm903hpts>>;
        /**
        
         */
        proxy_announced: TxDescriptor<Anonymize<I2mbguigr12p1c>>;
    };
    TransactionPause: {
        /**
        
         */
        pause_transaction: TxDescriptor<Anonymize<Ian208gj7nqkdo>>;
        /**
        
         */
        unpause_transaction: TxDescriptor<Anonymize<Ian208gj7nqkdo>>;
        /**
        
         */
        pause_evm_precompile: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
        
         */
        unpause_evm_precompile: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
    };
    IdleScheduler: {
        /**
        
         */
        schedule_task: TxDescriptor<Anonymize<I1du4va7rkp1fr>>;
    };
    Preimage: {
        /**
        
         */
        note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>;
        /**
        
         */
        unnote_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        request_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        unrequest_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        ensure_updated: TxDescriptor<Anonymize<I3o5j3bli1pd8e>>;
    };
    Balances: {
        /**
        
         */
        transfer_allow_death: TxDescriptor<Anonymize<I65i612een2ak>>;
        /**
        
         */
        force_transfer: TxDescriptor<Anonymize<I5vvf47ira6s09>>;
        /**
        
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I65i612een2ak>>;
        /**
        
         */
        transfer_all: TxDescriptor<Anonymize<I5ns79ftlq8cnl>>;
        /**
        
         */
        force_unreserve: TxDescriptor<Anonymize<I59ofijoau4bjh>>;
        /**
        
         */
        upgrade_accounts: TxDescriptor<Anonymize<Ibmr18suc9ikh9>>;
        /**
        
         */
        force_set_balance: TxDescriptor<Anonymize<Ieka2e164ntfss>>;
        /**
        
         */
        force_adjust_total_issuance: TxDescriptor<Anonymize<I5u8olqbbvfnvf>>;
    };
    Currencies: {
        /**
        
         */
        transfer: TxDescriptor<Anonymize<Iolfpkdqipcbi>>;
        /**
        
         */
        transfer_native_currency: TxDescriptor<Anonymize<Id064ak9i4tutv>>;
        /**
        
         */
        update_balance: TxDescriptor<Anonymize<I873jn3roc1gvm>>;
        /**
        
         */
        sweep_dust: TxDescriptor<Anonymize<Ie2d199vs205js>>;
        /**
        
         */
        force_set_lock: TxDescriptor<Anonymize<Ivqv0db9u70av>>;
        /**
        
         */
        force_remove_lock: TxDescriptor<Anonymize<I3ppsnoe8uuhrj>>;
    };
    Vesting: {
        /**
        
         */
        claim: TxDescriptor<undefined>;
        /**
        
         */
        vested_transfer: TxDescriptor<Anonymize<I1i6n6oid188lm>>;
        /**
        
         */
        update_vesting_schedules: TxDescriptor<Anonymize<Idfjjcf93r74ng>>;
        /**
        
         */
        claim_for: TxDescriptor<Anonymize<I91tliuq1e49u6>>;
    };
    TransactionPayment: {
        /**
        
         */
        set_alternative_fee_swap_path: TxDescriptor<Anonymize<Idc54030dbq1f7>>;
        /**
        
         */
        enable_charge_fee_pool: TxDescriptor<Anonymize<Ia05o1uc7d7tm9>>;
        /**
        
         */
        disable_charge_fee_pool: TxDescriptor<Anonymize<I98i83boqc476c>>;
        /**
        
         */
        with_fee_path: TxDescriptor<Anonymize<Ivcm9ai11rb2u>>;
        /**
        
         */
        with_fee_currency: TxDescriptor<Anonymize<I127rdknngb3lr>>;
        /**
        
         */
        with_fee_aggregated_path: TxDescriptor<Anonymize<I1c7rq47pt010g>>;
    };
    Treasury: {
        /**
        
         */
        propose_spend: TxDescriptor<Anonymize<I12ng1otu7kekg>>;
        /**
        
         */
        reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
        
         */
        approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
        
         */
        spend_local: TxDescriptor<Anonymize<I7fcl4aua07ato>>;
        /**
        
         */
        remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
        
         */
        spend: TxDescriptor<Anonymize<I6qq5nnbjegi8u>>;
        /**
        
         */
        payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Bounties: {
        /**
        
         */
        propose_bounty: TxDescriptor<Anonymize<I2a839vbf5817q>>;
        /**
        
         */
        approve_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        propose_curator: TxDescriptor<Anonymize<I5rlb1eesbovji>>;
        /**
        
         */
        unassign_curator: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        accept_curator: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        award_bounty: TxDescriptor<Anonymize<Ia96ru6pujbas0>>;
        /**
        
         */
        claim_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        close_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        extend_bounty_expiry: TxDescriptor<Anonymize<I90n6nnkpdahrh>>;
    };
    Tips: {
        /**
        
         */
        report_awesome: TxDescriptor<Anonymize<I4q8pj89cjg46e>>;
        /**
        
         */
        retract_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        tip_new: TxDescriptor<Anonymize<I2tctnk2vr8moa>>;
        /**
        
         */
        tip: TxDescriptor<Anonymize<I1pm30k3i4438u>>;
        /**
        
         */
        close_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        slash_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
    };
    CollatorSelection: {
        /**
        
         */
        set_invulnerables: TxDescriptor<Anonymize<Ifccifqltb5obi>>;
        /**
        
         */
        set_desired_candidates: TxDescriptor<Anonymize<Iadtsfv699cq8b>>;
        /**
        
         */
        set_candidacy_bond: TxDescriptor<Anonymize<Ialpmgmhr3gk5r>>;
        /**
        
         */
        register_as_candidate: TxDescriptor<undefined>;
        /**
        
         */
        register_candidate: TxDescriptor<Anonymize<I7uokuu569ccbo>>;
        /**
        
         */
        leave_intent: TxDescriptor<undefined>;
        /**
        
         */
        withdraw_bond: TxDescriptor<undefined>;
    };
    Session: {
        /**
        
         */
        set_keys: TxDescriptor<Anonymize<I81vt5eq60l4b6>>;
        /**
        
         */
        purge_keys: TxDescriptor<undefined>;
    };
    SessionManager: {
        /**
        
         */
        schedule_session_duration: TxDescriptor<Anonymize<Id9o20o60vogf2>>;
    };
    XcmpQueue: {
        /**
        
         */
        suspend_xcm_execution: TxDescriptor<undefined>;
        /**
        
         */
        resume_xcm_execution: TxDescriptor<undefined>;
        /**
        
         */
        update_suspend_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
        
         */
        update_drop_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
        /**
        
         */
        update_resume_threshold: TxDescriptor<Anonymize<I3vh014cqgmrfd>>;
    };
    PolkadotXcm: {
        /**
        
         */
        send: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
        /**
        
         */
        teleport_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
        
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<Iakevv83i18n4r>>;
        /**
        
         */
        execute: TxDescriptor<Anonymize<If2ssl12kcglhg>>;
        /**
        
         */
        force_xcm_version: TxDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
        
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
        
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
        
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<Icrujen33bbibf>>;
        /**
        
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
        
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
        
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
        /**
        
         */
        transfer_assets: TxDescriptor<Anonymize<I5gi8h3e5lkbeq>>;
        /**
        
         */
        claim_assets: TxDescriptor<Anonymize<I8mmaab8je28oo>>;
    };
    XTokens: {
        /**
        
         */
        transfer: TxDescriptor<Anonymize<I5u4rht6cqt8gn>>;
        /**
        
         */
        transfer_multiasset: TxDescriptor<Anonymize<Idu1ujel33jksu>>;
        /**
        
         */
        transfer_with_fee: TxDescriptor<Anonymize<I58dlh7d3khdo>>;
        /**
        
         */
        transfer_multiasset_with_fee: TxDescriptor<Anonymize<I40fog3d0qlub1>>;
        /**
        
         */
        transfer_multicurrencies: TxDescriptor<Anonymize<Ib4691jt3qnb97>>;
        /**
        
         */
        transfer_multiassets: TxDescriptor<Anonymize<Iaif2nhfhk9qc0>>;
    };
    OrmlXcm: {
        /**
        
         */
        send_as_sovereign: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
    };
    MessageQueue: {
        /**
        
         */
        reap_page: TxDescriptor<Anonymize<I40pqum1mu8qg3>>;
        /**
        
         */
        execute_overweight: TxDescriptor<Anonymize<I1r4c2ghbtvjuc>>;
    };
    Authority: {
        /**
        
         */
        dispatch_as: TxDescriptor<Anonymize<I9n3utis0e5rr5>>;
        /**
        
         */
        schedule_dispatch: TxDescriptor<Anonymize<I342omrgb8mrol>>;
        /**
        
         */
        fast_track_scheduled_dispatch: TxDescriptor<Anonymize<Ifshuvu6ph2fvg>>;
        /**
        
         */
        delay_scheduled_dispatch: TxDescriptor<Anonymize<Idju6aft93dvsp>>;
        /**
        
         */
        cancel_scheduled_dispatch: TxDescriptor<Anonymize<Ifdq7r9tkem3dm>>;
        /**
        
         */
        authorize_call: TxDescriptor<Anonymize<I7ak4sbgoc0b1q>>;
        /**
        
         */
        remove_authorized_call: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        trigger_call: TxDescriptor<Anonymize<Ia2mrt26qb3lcq>>;
    };
    GeneralCouncil: {
        /**
        
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
        
         */
        execute: TxDescriptor<Anonymize<I8551vvghi2irk>>;
        /**
        
         */
        propose: TxDescriptor<Anonymize<I8jt6ldsplhg8i>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
        
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    GeneralCouncilMembership: {
        /**
        
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
        
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
        
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        clear_prime: TxDescriptor<undefined>;
    };
    FinancialCouncil: {
        /**
        
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
        
         */
        execute: TxDescriptor<Anonymize<I8551vvghi2irk>>;
        /**
        
         */
        propose: TxDescriptor<Anonymize<I8jt6ldsplhg8i>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
        
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    FinancialCouncilMembership: {
        /**
        
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
        
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
        
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        clear_prime: TxDescriptor<undefined>;
    };
    HomaCouncil: {
        /**
        
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
        
         */
        execute: TxDescriptor<Anonymize<I8551vvghi2irk>>;
        /**
        
         */
        propose: TxDescriptor<Anonymize<I8jt6ldsplhg8i>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
        
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    HomaCouncilMembership: {
        /**
        
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
        
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
        
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        clear_prime: TxDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
        
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
        
         */
        execute: TxDescriptor<Anonymize<I8551vvghi2irk>>;
        /**
        
         */
        propose: TxDescriptor<Anonymize<I8jt6ldsplhg8i>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
        
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    TechnicalCommitteeMembership: {
        /**
        
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
        
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
        
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        clear_prime: TxDescriptor<undefined>;
    };
    Democracy: {
        /**
        
         */
        propose: TxDescriptor<Anonymize<I1moso5oagpiea>>;
        /**
        
         */
        second: TxDescriptor<Anonymize<Ibeb4n9vpjefp3>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<Id7murq9s9fg6h>>;
        /**
        
         */
        emergency_cancel: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
        
         */
        external_propose: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
        
         */
        external_propose_majority: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
        
         */
        external_propose_default: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
        
         */
        fast_track: TxDescriptor<Anonymize<I5agg650597e49>>;
        /**
        
         */
        veto_external: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        cancel_referendum: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
        
         */
        delegate: TxDescriptor<Anonymize<I1736r1jp6plpc>>;
        /**
        
         */
        undelegate: TxDescriptor<undefined>;
        /**
        
         */
        clear_public_proposals: TxDescriptor<undefined>;
        /**
        
         */
        unlock: TxDescriptor<Anonymize<If31vrl50nund3>>;
        /**
        
         */
        remove_vote: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        remove_other_vote: TxDescriptor<Anonymize<I6s1n1athh0bbq>>;
        /**
        
         */
        blacklist: TxDescriptor<Anonymize<I3v9h9f3mpm1l8>>;
        /**
        
         */
        cancel_proposal: TxDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
        
         */
        set_metadata: TxDescriptor<Anonymize<I2kt2u1flctk2q>>;
    };
    AcalaOracle: {
        /**
        
         */
        feed_values: TxDescriptor<Anonymize<I5g83hbjlt4g7d>>;
    };
    OperatorMembershipAcala: {
        /**
        
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
        
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
        
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
        
         */
        clear_prime: TxDescriptor<undefined>;
    };
    Auction: {
        /**
        
         */
        bid: TxDescriptor<Anonymize<Ie2qs571usasls>>;
    };
    Parameters: {
        /**
        
         */
        set_parameter: TxDescriptor<Anonymize<I1fll11jqhjobd>>;
    };
    Prices: {
        /**
        
         */
        lock_price: TxDescriptor<Anonymize<I98i83boqc476c>>;
        /**
        
         */
        unlock_price: TxDescriptor<Anonymize<I98i83boqc476c>>;
    };
    Dex: {
        /**
        
         */
        swap_with_exact_supply: TxDescriptor<Anonymize<I3688il5c49f7a>>;
        /**
        
         */
        swap_with_exact_target: TxDescriptor<Anonymize<I4kgns97nm19us>>;
        /**
        
         */
        add_liquidity: TxDescriptor<Anonymize<I93l14uap9cben>>;
        /**
        
         */
        add_provision: TxDescriptor<Anonymize<I648auksndla9n>>;
        /**
        
         */
        claim_dex_share: TxDescriptor<Anonymize<I5rpu8e0bev51b>>;
        /**
        
         */
        remove_liquidity: TxDescriptor<Anonymize<Ie9cme7sjl2h5a>>;
        /**
        
         */
        list_provisioning: TxDescriptor<Anonymize<I5pchq1uevta1p>>;
        /**
        
         */
        update_provisioning_parameters: TxDescriptor<Anonymize<I5pchq1uevta1p>>;
        /**
        
         */
        end_provisioning: TxDescriptor<Anonymize<I2j4oeihu6vlh4>>;
        /**
        
         */
        enable_trading_pair: TxDescriptor<Anonymize<I2j4oeihu6vlh4>>;
        /**
        
         */
        disable_trading_pair: TxDescriptor<Anonymize<I2j4oeihu6vlh4>>;
        /**
        
         */
        refund_provision: TxDescriptor<Anonymize<I5rpu8e0bev51b>>;
        /**
        
         */
        abort_provisioning: TxDescriptor<Anonymize<I2j4oeihu6vlh4>>;
    };
    DexOracle: {
        /**
        
         */
        enable_average_price: TxDescriptor<Anonymize<I2ngi4geus866u>>;
        /**
        
         */
        disable_average_price: TxDescriptor<Anonymize<I2j4oeihu6vlh4>>;
        /**
        
         */
        update_average_price_interval: TxDescriptor<Anonymize<I3nkmpr3dlb5ma>>;
    };
    AggregatedDex: {
        /**
        
         */
        swap_with_exact_supply: TxDescriptor<Anonymize<I8oimeqepjooed>>;
        /**
        
         */
        swap_with_exact_target: TxDescriptor<Anonymize<Ibc5mquirka4r9>>;
        /**
        
         */
        update_aggregated_swap_paths: TxDescriptor<Anonymize<I77usuakd9hv15>>;
    };
    Earning: {
        /**
        
         */
        bond: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        unbond: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        unbond_instant: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        rebond: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        withdraw_unbonded: TxDescriptor<undefined>;
    };
    AuctionManager: {
        /**
        
         */
        cancel: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
    };
    Honzon: {
        /**
        
         */
        adjust_loan: TxDescriptor<Anonymize<Ia6m2mqatie4c8>>;
        /**
        
         */
        close_loan_has_debit_by_dex: TxDescriptor<Anonymize<I4169336hu4big>>;
        /**
        
         */
        transfer_loan_from: TxDescriptor<Anonymize<I18tsj730b9hcm>>;
        /**
        
         */
        authorize: TxDescriptor<Anonymize<I2mbd1rmb00d2c>>;
        /**
        
         */
        unauthorize: TxDescriptor<Anonymize<I2mbd1rmb00d2c>>;
        /**
        
         */
        unauthorize_all: TxDescriptor<undefined>;
        /**
        
         */
        expand_position_collateral: TxDescriptor<Anonymize<I1b2tth8h1odgg>>;
        /**
        
         */
        shrink_position_debit: TxDescriptor<Anonymize<I3p80babids0fu>>;
        /**
        
         */
        adjust_loan_by_debit_value: TxDescriptor<Anonymize<I52q1abqhemsoj>>;
        /**
        
         */
        transfer_debit: TxDescriptor<Anonymize<I1kpabdmb2r0c5>>;
    };
    CdpTreasury: {
        /**
        
         */
        extract_surplus_to_treasury: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        auction_collateral: TxDescriptor<Anonymize<Ifgs07rgphbqv0>>;
        /**
        
         */
        exchange_collateral_to_stable: TxDescriptor<Anonymize<Idvsf5cbunj7r8>>;
        /**
        
         */
        set_expected_collateral_auction_size: TxDescriptor<Anonymize<I12504d0vc9lp1>>;
        /**
        
         */
        set_debit_offset_buffer: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
    };
    CdpEngine: {
        /**
        
         */
        liquidate: TxDescriptor<Anonymize<Id29418nin4lfn>>;
        /**
        
         */
        settle: TxDescriptor<Anonymize<Id29418nin4lfn>>;
        /**
        
         */
        set_collateral_params: TxDescriptor<Anonymize<Icjd1uv2fqhidu>>;
        /**
        
         */
        register_liquidation_contract: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
        
         */
        deregister_liquidation_contract: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
    };
    EmergencyShutdown: {
        /**
        
         */
        emergency_shutdown: TxDescriptor<undefined>;
        /**
        
         */
        open_collateral_refund: TxDescriptor<undefined>;
        /**
        
         */
        refund_collaterals: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
    };
    Homa: {
        /**
        
         */
        mint: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        request_redeem: TxDescriptor<Anonymize<I91gje44h95np5>>;
        /**
        
         */
        fast_match_redeems: TxDescriptor<Anonymize<I9fss5aulbml64>>;
        /**
        
         */
        claim_redemption: TxDescriptor<Anonymize<I7d5l1aam61hfj>>;
        /**
        
         */
        update_homa_params: TxDescriptor<Anonymize<Ieucctmr7s3nr1>>;
        /**
        
         */
        update_bump_era_params: TxDescriptor<Anonymize<I53ph05vu6nvda>>;
        /**
        
         */
        reset_ledgers: TxDescriptor<Anonymize<Ie0bccjhtmt5ep>>;
        /**
        
         */
        reset_current_era: TxDescriptor<Anonymize<I849qe2r3bkhgs>>;
        /**
        
         */
        force_bump_current_era: TxDescriptor<Anonymize<Ie5du4befecojp>>;
        /**
        
         */
        fast_match_redeems_completely: TxDescriptor<Anonymize<I9fss5aulbml64>>;
    };
    XcmInterface: {
        /**
        
         */
        update_xcm_dest_weight_and_fee: TxDescriptor<Anonymize<Iaqcdtcg1n6r1b>>;
    };
    Incentives: {
        /**
        
         */
        deposit_dex_share: TxDescriptor<Anonymize<I4eus13q90k99b>>;
        /**
        
         */
        withdraw_dex_share: TxDescriptor<Anonymize<I4eus13q90k99b>>;
        /**
        
         */
        claim_rewards: TxDescriptor<Anonymize<I3tl8ogjncpm2c>>;
        /**
        
         */
        update_incentive_rewards: TxDescriptor<Anonymize<I7jqtdmsfv7o4u>>;
        /**
        
         */
        update_claim_reward_deduction_rates: TxDescriptor<Anonymize<If8009mb874sp7>>;
        /**
        
         */
        update_claim_reward_deduction_currency: TxDescriptor<Anonymize<I29k1t0l9q4ot2>>;
    };
    NFT: {
        /**
        
         */
        create_class: TxDescriptor<Anonymize<Idoneaqv7bn270>>;
        /**
        
         */
        mint: TxDescriptor<Anonymize<Ifqotmmbsrrn2t>>;
        /**
        
         */
        transfer: TxDescriptor<Anonymize<I702l6ro52co4b>>;
        /**
        
         */
        burn: TxDescriptor<Anonymize<I3aq6nd1rsiec4>>;
        /**
        
         */
        burn_with_remark: TxDescriptor<Anonymize<I9lnema8c5781i>>;
        /**
        
         */
        destroy_class: TxDescriptor<Anonymize<I7vau02iuv06ti>>;
        /**
        
         */
        update_class_properties: TxDescriptor<Anonymize<Id7bb1kbm6hd7o>>;
    };
    AssetRegistry: {
        /**
        
         */
        register_foreign_asset: TxDescriptor<Anonymize<I91l6q9oikoe57>>;
        /**
        
         */
        update_foreign_asset: TxDescriptor<Anonymize<I3h4ohbkb8vmbe>>;
        /**
        
         */
        register_stable_asset: TxDescriptor<Anonymize<I1n28f4ceil09b>>;
        /**
        
         */
        update_stable_asset: TxDescriptor<Anonymize<Iagv0u89un0nso>>;
        /**
        
         */
        register_erc20_asset: TxDescriptor<Anonymize<Ie6ivrj6iniahu>>;
        /**
        
         */
        update_erc20_asset: TxDescriptor<Anonymize<I6g2l34laajq1g>>;
        /**
        
         */
        register_native_asset: TxDescriptor<Anonymize<I6vbob3jrlktb7>>;
        /**
        
         */
        update_native_asset: TxDescriptor<Anonymize<I6vbob3jrlktb7>>;
    };
    LiquidCrowdloan: {
        /**
        
         */
        redeem: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        transfer_from_crowdloan_vault: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        set_redeem_currency_id: TxDescriptor<Anonymize<I98i83boqc476c>>;
    };
    EVM: {
        /**
        
         */
        eth_call: TxDescriptor<Anonymize<I68hvq39cv9bhg>>;
        /**
        
         */
        eth_call_v2: TxDescriptor<Anonymize<Id1vdg5glf32bv>>;
        /**
        
         */
        call: TxDescriptor<Anonymize<I34e4t3tquuabp>>;
        /**
        
         */
        scheduled_call: TxDescriptor<Anonymize<I3b100panba8pt>>;
        /**
        
         */
        create: TxDescriptor<Anonymize<I76pnvsgv4su6l>>;
        /**
        
         */
        create2: TxDescriptor<Anonymize<I1grn1khr0a3i8>>;
        /**
        
         */
        create_nft_contract: TxDescriptor<Anonymize<I76pnvsgv4su6l>>;
        /**
        
         */
        create_predeploy_contract: TxDescriptor<Anonymize<I34e4t3tquuabp>>;
        /**
        
         */
        transfer_maintainer: TxDescriptor<Anonymize<I2b1121ufu9vsp>>;
        /**
        
         */
        publish_contract: TxDescriptor<Anonymize<Ics51ctc9oasbt>>;
        /**
        
         */
        publish_free: TxDescriptor<Anonymize<Ics51ctc9oasbt>>;
        /**
        
         */
        enable_contract_development: TxDescriptor<undefined>;
        /**
        
         */
        disable_contract_development: TxDescriptor<undefined>;
        /**
        
         */
        set_code: TxDescriptor<Anonymize<Ifadgbhtqk8muc>>;
        /**
        
         */
        selfdestruct: TxDescriptor<Anonymize<Ics51ctc9oasbt>>;
        /**
        
         */
        strict_call: TxDescriptor<Anonymize<I34e4t3tquuabp>>;
    };
    EvmAccounts: {
        /**
        
         */
        claim_account: TxDescriptor<Anonymize<I498b35h1tosb3>>;
        /**
        
         */
        claim_default_account: TxDescriptor<undefined>;
    };
    StableAsset: {
        /**
        
         */
        create_pool: TxDescriptor<Anonymize<Id97r7dv4sbp2r>>;
        /**
        
         */
        mint: TxDescriptor<Anonymize<I4r3lr1hp3q5vu>>;
        /**
        
         */
        swap: TxDescriptor<Anonymize<I26sb21rohuspe>>;
        /**
        
         */
        redeem_proportion: TxDescriptor<Anonymize<Id846uvbhv0ups>>;
        /**
        
         */
        redeem_single: TxDescriptor<Anonymize<Iel8d6vl7kun8s>>;
        /**
        
         */
        redeem_multi: TxDescriptor<Anonymize<Ia5vm4875s01on>>;
        /**
        
         */
        modify_a: TxDescriptor<Anonymize<I1io386vc3pmlf>>;
        /**
        
         */
        modify_fees: TxDescriptor<Anonymize<Idnoja8d5k0dtr>>;
        /**
        
         */
        modify_recipients: TxDescriptor<Anonymize<I95j99jsac0h95>>;
    };
    ParachainSystem: {
        /**
        
         */
        set_validation_data: TxDescriptor<Anonymize<I60v7bikk54tpu>>;
        /**
        
         */
        sudo_send_upward_message: TxDescriptor<Anonymize<Ifpj261e8s63m3>>;
        /**
        
         */
        authorize_upgrade: TxDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
        /**
        
         */
        enact_authorized_upgrade: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
    };
    Sudo: {
        /**
        
         */
        sudo: TxDescriptor<Anonymize<I2j9vnhvdvfhmj>>;
        /**
        
         */
        sudo_unchecked_weight: TxDescriptor<Anonymize<Ib37rjf9trauc9>>;
        /**
        
         */
        set_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
        
         */
        sudo_as: TxDescriptor<Anonymize<I5p323njmi171p>>;
        /**
        
         */
        remove_key: TxDescriptor<undefined>;
    };
};
type IEvent = {
    System: {
        /**
        
         */
        ExtrinsicSuccess: PlainDescriptor<Anonymize<Ia82mnkmeo2rhc>>;
        /**
        
         */
        ExtrinsicFailed: PlainDescriptor<Anonymize<I4iak6d0gp76pq>>;
        /**
        
         */
        CodeUpdated: PlainDescriptor<undefined>;
        /**
        
         */
        NewAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        KilledAccount: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        Remarked: PlainDescriptor<Anonymize<I855j4i3kr8ko1>>;
        /**
        
         */
        UpgradeAuthorized: PlainDescriptor<Anonymize<Ibgl04rn6nbfm6>>;
    };
    Scheduler: {
        /**
        
         */
        Scheduled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
        
         */
        Canceled: PlainDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
        
         */
        Dispatched: PlainDescriptor<Anonymize<Iijbt89g7a8bm>>;
        /**
        
         */
        RetrySet: PlainDescriptor<Anonymize<Ia3c82eadg79bj>>;
        /**
        
         */
        RetryCancelled: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
        
         */
        CallUnavailable: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
        
         */
        PeriodicFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
        
         */
        RetryFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
        
         */
        PermanentlyOverweight: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
    };
    Utility: {
        /**
        
         */
        BatchInterrupted: PlainDescriptor<Anonymize<I25bljl8ut97eo>>;
        /**
        
         */
        BatchCompleted: PlainDescriptor<undefined>;
        /**
        
         */
        BatchCompletedWithErrors: PlainDescriptor<undefined>;
        /**
        
         */
        ItemCompleted: PlainDescriptor<undefined>;
        /**
        
         */
        ItemFailed: PlainDescriptor<Anonymize<I6mjba3f9cfcrp>>;
        /**
        
         */
        DispatchedAs: PlainDescriptor<Anonymize<Ic65reh6p4slbe>>;
    };
    Multisig: {
        /**
        
         */
        NewMultisig: PlainDescriptor<Anonymize<Iep27ialq4a7o7>>;
        /**
        
         */
        MultisigApproval: PlainDescriptor<Anonymize<Iasu5jvoqr43mv>>;
        /**
        
         */
        MultisigExecuted: PlainDescriptor<Anonymize<Idur6qso079kn2>>;
        /**
        
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
        
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Ic65reh6p4slbe>>;
        /**
        
         */
        PureCreated: PlainDescriptor<Anonymize<I62vuqhqnrh3ct>>;
        /**
        
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
        
         */
        ProxyAdded: PlainDescriptor<Anonymize<I5ra2f4tk0pbpo>>;
        /**
        
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I5ra2f4tk0pbpo>>;
    };
    TransactionPause: {
        /**
        
         */
        TransactionPaused: PlainDescriptor<Anonymize<I193fovq1blcqu>>;
        /**
        
         */
        TransactionUnpaused: PlainDescriptor<Anonymize<I193fovq1blcqu>>;
        /**
        
         */
        EvmPrecompilePaused: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
        
         */
        EvmPrecompileUnpaused: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
    };
    IdleScheduler: {
        /**
        
         */
        TaskDispatched: PlainDescriptor<Anonymize<Ivfk29ifghh65>>;
        /**
        
         */
        TaskAdded: PlainDescriptor<Anonymize<Ieb7f8831td64a>>;
    };
    Preimage: {
        /**
        
         */
        Noted: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        Requested: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        Cleared: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
    };
    Balances: {
        /**
        
         */
        Endowed: PlainDescriptor<Anonymize<Icv68aq8841478>>;
        /**
        
         */
        DustLost: PlainDescriptor<Anonymize<Ic262ibdoec56a>>;
        /**
        
         */
        Transfer: PlainDescriptor<Anonymize<Iflcfm9b6nlmdd>>;
        /**
        
         */
        BalanceSet: PlainDescriptor<Anonymize<Ijrsf4mnp3eka>>;
        /**
        
         */
        Reserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Unreserved: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I8tjvj9uq4b7hi>>;
        /**
        
         */
        Deposit: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Withdraw: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Slashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Minted: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Burned: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Suspended: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Restored: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Upgraded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
        
         */
        Issued: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        Rescinded: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        Locked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Unlocked: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Frozen: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Thawed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        TotalIssuanceForced: PlainDescriptor<Anonymize<I4fooe9dun9o0t>>;
    };
    Tokens: {
        /**
        
         */
        Endowed: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        DustLost: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Transfer: PlainDescriptor<Anonymize<I8l5kvre4urt6i>>;
        /**
        
         */
        Reserved: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Unreserved: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I1e4oietgoviv9>>;
        /**
        
         */
        BalanceSet: PlainDescriptor<Anonymize<I31t3g4hk9vbij>>;
        /**
        
         */
        TotalIssuanceSet: PlainDescriptor<Anonymize<If82ef6cjv8bf6>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Slashed: PlainDescriptor<Anonymize<Ief502srmm35a5>>;
        /**
        
         */
        Deposited: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        LockSet: PlainDescriptor<Anonymize<Icmj165ef4r8q7>>;
        /**
        
         */
        LockRemoved: PlainDescriptor<Anonymize<I5audd19ntmm34>>;
        /**
        
         */
        Locked: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Unlocked: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Issued: PlainDescriptor<Anonymize<If82ef6cjv8bf6>>;
        /**
        
         */
        Rescinded: PlainDescriptor<Anonymize<If82ef6cjv8bf6>>;
    };
    Currencies: {
        /**
        
         */
        Transferred: PlainDescriptor<Anonymize<I8l5kvre4urt6i>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        Deposited: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
        /**
        
         */
        DustSwept: PlainDescriptor<Anonymize<Iesfs62l0emo0u>>;
    };
    Vesting: {
        /**
        
         */
        VestingScheduleAdded: PlainDescriptor<Anonymize<I4uo49pmivhb33>>;
        /**
        
         */
        Claimed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        VestingSchedulesUpdated: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    TransactionPayment: {
        /**
        
         */
        ChargeFeePoolEnabled: PlainDescriptor<Anonymize<I56bf0an7gbtfd>>;
        /**
        
         */
        ChargeFeePoolSwapped: PlainDescriptor<Anonymize<If2i2d0sfbq0jg>>;
        /**
        
         */
        ChargeFeePoolDisabled: PlainDescriptor<Anonymize<Ibgp85oael1km5>>;
        /**
        
         */
        TransactionFeePaid: PlainDescriptor<Anonymize<Iatcmglh3trnbe>>;
    };
    Treasury: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<I44hc4lgsn4o1j>>;
        /**
        
         */
        Spending: PlainDescriptor<Anonymize<I8iksqi3eani0a>>;
        /**
        
         */
        Awarded: PlainDescriptor<Anonymize<I16enopmju1p0q>>;
        /**
        
         */
        Rejected: PlainDescriptor<Anonymize<Ifgqhle2413de7>>;
        /**
        
         */
        Burnt: PlainDescriptor<Anonymize<I43kq8qudg7pq9>>;
        /**
        
         */
        Rollover: PlainDescriptor<Anonymize<I76riseemre533>>;
        /**
        
         */
        Deposit: PlainDescriptor<Anonymize<Ie5v6njpckr05b>>;
        /**
        
         */
        SpendApproved: PlainDescriptor<Anonymize<I38bmcrmh852rk>>;
        /**
        
         */
        UpdatedInactive: PlainDescriptor<Anonymize<I4hcillge8de5f>>;
        /**
        
         */
        AssetSpendApproved: PlainDescriptor<Anonymize<I8usdc6tg7829p>>;
        /**
        
         */
        AssetSpendVoided: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        Paid: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        PaymentFailed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        SpendProcessed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Bounties: {
        /**
        
         */
        BountyProposed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        BountyRejected: PlainDescriptor<Anonymize<Id9idaj83175f9>>;
        /**
        
         */
        BountyBecameActive: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        BountyAwarded: PlainDescriptor<Anonymize<Ie1semicfuv5uu>>;
        /**
        
         */
        BountyClaimed: PlainDescriptor<Anonymize<If25fjs9o37co1>>;
        /**
        
         */
        BountyCanceled: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        BountyExtended: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        BountyApproved: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        CuratorProposed: PlainDescriptor<Anonymize<I70sc1pdo8vtos>>;
        /**
        
         */
        CuratorUnassigned: PlainDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
        
         */
        CuratorAccepted: PlainDescriptor<Anonymize<I70sc1pdo8vtos>>;
    };
    Tips: {
        /**
        
         */
        NewTip: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
        
         */
        TipClosing: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
        
         */
        TipClosed: PlainDescriptor<Anonymize<Ierev02d74bpoa>>;
        /**
        
         */
        TipRetracted: PlainDescriptor<Anonymize<Iep7an7g10jgpc>>;
        /**
        
         */
        TipSlashed: PlainDescriptor<Anonymize<Ic836gl3ins837>>;
    };
    CollatorSelection: {
        /**
        
         */
        NewInvulnerables: PlainDescriptor<Anonymize<I71p4hrp3dn9lm>>;
        /**
        
         */
        NewDesiredCandidates: PlainDescriptor<Anonymize<I955v10i1smj2g>>;
        /**
        
         */
        NewCandidacyBond: PlainDescriptor<Anonymize<I9jl00225t93sl>>;
        /**
        
         */
        CandidateAdded: PlainDescriptor<Anonymize<Ic6up6jb6qdvvj>>;
        /**
        
         */
        CandidateRemoved: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
    };
    Session: {
        /**
        
         */
        NewSession: PlainDescriptor<Anonymize<I2hq50pu2kdjpo>>;
    };
    SessionManager: {
        /**
        
         */
        ScheduledSessionDuration: PlainDescriptor<Anonymize<I1k25afngad6j6>>;
    };
    XcmpQueue: {
        /**
        
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
    };
    PolkadotXcm: {
        /**
        
         */
        Attempted: PlainDescriptor<Anonymize<I2aatv5i0cb96a>>;
        /**
        
         */
        Sent: PlainDescriptor<Anonymize<Ib9msr5sr8t3dn>>;
        /**
        
         */
        UnexpectedResponse: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
        
         */
        ResponseReady: PlainDescriptor<Anonymize<I3iun9sig164po>>;
        /**
        
         */
        Notified: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
        
         */
        NotifyOverweight: PlainDescriptor<Anonymize<Idg69klialbkb8>>;
        /**
        
         */
        NotifyDispatchError: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
        
         */
        NotifyDecodeFailed: PlainDescriptor<Anonymize<I2uqmls7kcdnii>>;
        /**
        
         */
        InvalidResponder: PlainDescriptor<Anonymize<I13jboebjcbglr>>;
        /**
        
         */
        InvalidResponderVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
        
         */
        ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
        
         */
        AssetsTrapped: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
        
         */
        VersionChangeNotified: PlainDescriptor<Anonymize<Ic8hi3qr11vngc>>;
        /**
        
         */
        SupportedVersionChanged: PlainDescriptor<Anonymize<Iabk8ljl5g8c86>>;
        /**
        
         */
        NotifyTargetSendFail: PlainDescriptor<Anonymize<Ibjdlecumfu7q7>>;
        /**
        
         */
        NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ia9ems1kg7laoc>>;
        /**
        
         */
        InvalidQuerierVersion: PlainDescriptor<Anonymize<I3le5tr7ugg6l2>>;
        /**
        
         */
        InvalidQuerier: PlainDescriptor<Anonymize<I92fq0fa45vi3>>;
        /**
        
         */
        VersionNotifyStarted: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
        
         */
        VersionNotifyRequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
        
         */
        VersionNotifyUnrequested: PlainDescriptor<Anonymize<Id01dpp0dn2cj0>>;
        /**
        
         */
        FeesPaid: PlainDescriptor<Anonymize<I6nu8k62ck9o8o>>;
        /**
        
         */
        AssetsClaimed: PlainDescriptor<Anonymize<I381dkhrurdhrs>>;
        /**
        
         */
        VersionMigrationFinished: PlainDescriptor<Anonymize<I6s1nbislhk619>>;
    };
    CumulusXcm: {
        /**
        
         */
        InvalidFormat: PlainDescriptor<FixedSizeBinary<32>>;
        /**
        
         */
        UnsupportedVersion: PlainDescriptor<FixedSizeBinary<32>>;
        /**
        
         */
        ExecutedDownward: PlainDescriptor<Anonymize<Iea25i7vqm7ot3>>;
    };
    XTokens: {
        /**
        
         */
        TransferredAssets: PlainDescriptor<Anonymize<Ic04t5m0ihvrp5>>;
    };
    UnknownTokens: {
        /**
        
         */
        Deposited: PlainDescriptor<Anonymize<I7id9rd759h17f>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<I7id9rd759h17f>>;
    };
    OrmlXcm: {
        /**
        
         */
        Sent: PlainDescriptor<Anonymize<Id3ajno3thjgec>>;
    };
    MessageQueue: {
        /**
        
         */
        ProcessingFailed: PlainDescriptor<Anonymize<I3vs6qhrit34fa>>;
        /**
        
         */
        Processed: PlainDescriptor<Anonymize<Ia3uu7lqcc1q1i>>;
        /**
        
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<I7crucfnonitkn>>;
        /**
        
         */
        PageReaped: PlainDescriptor<Anonymize<I7tmrp94r9sq4n>>;
    };
    Authority: {
        /**
        
         */
        Dispatched: PlainDescriptor<Anonymize<Ic65reh6p4slbe>>;
        /**
        
         */
        Scheduled: PlainDescriptor<Anonymize<Ie57lonvscburs>>;
        /**
        
         */
        FastTracked: PlainDescriptor<Anonymize<I35hd3t2u29eq9>>;
        /**
        
         */
        Delayed: PlainDescriptor<Anonymize<I35hd3t2u29eq9>>;
        /**
        
         */
        Cancelled: PlainDescriptor<Anonymize<Ie57lonvscburs>>;
        /**
        
         */
        AuthorizedCall: PlainDescriptor<Anonymize<I7l6ub3smnjto4>>;
        /**
        
         */
        RemovedAuthorizedCall: PlainDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
        
         */
        TriggeredCallBy: PlainDescriptor<Anonymize<I84g38rnlg29op>>;
    };
    GeneralCouncil: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
        
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Executed: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        MemberExecuted: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    GeneralCouncilMembership: {
        /**
        
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
        
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
        
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
        
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
        
         */
        Dummy: PlainDescriptor<undefined>;
    };
    FinancialCouncil: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
        
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Executed: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        MemberExecuted: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    FinancialCouncilMembership: {
        /**
        
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
        
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
        
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
        
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
        
         */
        Dummy: PlainDescriptor<undefined>;
    };
    HomaCouncil: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
        
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Executed: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        MemberExecuted: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    HomaCouncilMembership: {
        /**
        
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
        
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
        
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
        
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
        
         */
        Dummy: PlainDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<Ift6f10887nk72>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I7qc53b1tvqjg2>>;
        /**
        
         */
        Approved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Disapproved: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Executed: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        MemberExecuted: PlainDescriptor<Anonymize<I5ufdtfmbt08vq>>;
        /**
        
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    TechnicalCommitteeMembership: {
        /**
        
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
        
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
        
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
        
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
        
         */
        Dummy: PlainDescriptor<undefined>;
    };
    Democracy: {
        /**
        
         */
        Proposed: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
        
         */
        Tabled: PlainDescriptor<Anonymize<I3peh714diura8>>;
        /**
        
         */
        ExternalTabled: PlainDescriptor<undefined>;
        /**
        
         */
        Started: PlainDescriptor<Anonymize<I62ffgu6q2478o>>;
        /**
        
         */
        Passed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
        
         */
        NotPassed: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
        
         */
        Cancelled: PlainDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
        
         */
        Delegated: PlainDescriptor<Anonymize<I10r7il4gvbcae>>;
        /**
        
         */
        Undelegated: PlainDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        Vetoed: PlainDescriptor<Anonymize<I2c00i2bngegk9>>;
        /**
        
         */
        Blacklisted: PlainDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<Iet7kfijhihjik>>;
        /**
        
         */
        Seconded: PlainDescriptor<Anonymize<I2vrbos7ogo6ps>>;
        /**
        
         */
        ProposalCanceled: PlainDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
        
         */
        MetadataSet: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
        
         */
        MetadataCleared: PlainDescriptor<Anonymize<Iffeo46j957abe>>;
        /**
        
         */
        MetadataTransferred: PlainDescriptor<Anonymize<I4ljshcevmm3p2>>;
    };
    AcalaOracle: {
        /**
        
         */
        NewFeedData: PlainDescriptor<Anonymize<Iduq4ed8skcjjm>>;
    };
    OperatorMembershipAcala: {
        /**
        
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
        
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
        
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
        
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
        
         */
        Dummy: PlainDescriptor<undefined>;
    };
    Auction: {
        /**
        
         */
        Bid: PlainDescriptor<Anonymize<I9mlal0k97k542>>;
    };
    Parameters: {
        /**
        
         */
        Updated: PlainDescriptor<Anonymize<I1fll11jqhjobd>>;
    };
    Prices: {
        /**
        
         */
        LockPrice: PlainDescriptor<Anonymize<If7h819bbagi7e>>;
        /**
        
         */
        UnlockPrice: PlainDescriptor<Anonymize<I98i83boqc476c>>;
    };
    Dex: {
        /**
        
         */
        AddProvision: PlainDescriptor<Anonymize<I470t9q5rbko1v>>;
        /**
        
         */
        AddLiquidity: PlainDescriptor<Anonymize<Ichdo0c08k9mdo>>;
        /**
        
         */
        RemoveLiquidity: PlainDescriptor<Anonymize<Ieb8d9j6dd5mra>>;
        /**
        
         */
        Swap: PlainDescriptor<Anonymize<I2ahpksvlo9d9c>>;
        /**
        
         */
        EnableTradingPair: PlainDescriptor<Anonymize<Iadl3hi6a95mjv>>;
        /**
        
         */
        ListProvisioning: PlainDescriptor<Anonymize<Iadl3hi6a95mjv>>;
        /**
        
         */
        DisableTradingPair: PlainDescriptor<Anonymize<Iadl3hi6a95mjv>>;
        /**
        
         */
        ProvisioningToEnabled: PlainDescriptor<Anonymize<I8sfstv2v3gf30>>;
        /**
        
         */
        RefundProvision: PlainDescriptor<Anonymize<I470t9q5rbko1v>>;
        /**
        
         */
        ProvisioningAborted: PlainDescriptor<Anonymize<I4kd1gd18imvib>>;
    };
    Earning: {
        /**
        
         */
        Bonded: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Unbonded: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        InstantUnbonded: PlainDescriptor<Anonymize<I7t7f15a41rr75>>;
        /**
        
         */
        Rebonded: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
    };
    AuctionManager: {
        /**
        
         */
        NewCollateralAuction: PlainDescriptor<Anonymize<Ia8o2edr1f864s>>;
        /**
        
         */
        CancelAuction: PlainDescriptor<Anonymize<If6710ddu1n5c0>>;
        /**
        
         */
        CollateralAuctionDealt: PlainDescriptor<Anonymize<I4rcb77auq9un9>>;
        /**
        
         */
        DEXTakeCollateralAuction: PlainDescriptor<Anonymize<Icpdatq862viq1>>;
        /**
        
         */
        CollateralAuctionAborted: PlainDescriptor<Anonymize<I9ov9qusrr22m7>>;
    };
    Loans: {
        /**
        
         */
        PositionUpdated: PlainDescriptor<Anonymize<I4sv4h17bn2s7l>>;
        /**
        
         */
        ConfiscateCollateralAndDebit: PlainDescriptor<Anonymize<Iel10h7jkamd36>>;
        /**
        
         */
        TransferLoan: PlainDescriptor<Anonymize<I256nf8mbq2ji2>>;
    };
    Honzon: {
        /**
        
         */
        Authorization: PlainDescriptor<Anonymize<Icld8n4p4164so>>;
        /**
        
         */
        UnAuthorization: PlainDescriptor<Anonymize<Icld8n4p4164so>>;
        /**
        
         */
        UnAuthorizationAll: PlainDescriptor<Anonymize<Idretbt0ads77s>>;
        /**
        
         */
        TransferDebit: PlainDescriptor<Anonymize<Iec98km9p5pief>>;
    };
    CdpTreasury: {
        /**
        
         */
        ExpectedCollateralAuctionSizeUpdated: PlainDescriptor<Anonymize<I3jii2muob6ghq>>;
        /**
        
         */
        DebitOffsetBufferUpdated: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
    };
    CdpEngine: {
        /**
        
         */
        LiquidateUnsafeCDP: PlainDescriptor<Anonymize<Iapna56s3m0ifu>>;
        /**
        
         */
        SettleCDPInDebit: PlainDescriptor<Anonymize<I2m484u5grs9t6>>;
        /**
        
         */
        CloseCDPInDebitByDEX: PlainDescriptor<Anonymize<I1isi013g6qer3>>;
        /**
        
         */
        InterestRatePerSecUpdated: PlainDescriptor<Anonymize<I1tsoaordg68dn>>;
        /**
        
         */
        LiquidationRatioUpdated: PlainDescriptor<Anonymize<Ia75kq0pe5tv9f>>;
        /**
        
         */
        LiquidationPenaltyUpdated: PlainDescriptor<Anonymize<Iaukv957beuu35>>;
        /**
        
         */
        RequiredCollateralRatioUpdated: PlainDescriptor<Anonymize<I4tudb0ce02mk6>>;
        /**
        
         */
        MaximumTotalDebitValueUpdated: PlainDescriptor<Anonymize<I736uosa90ai8o>>;
        /**
        
         */
        LiquidationContractRegistered: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
        
         */
        LiquidationContractDeregistered: PlainDescriptor<Anonymize<Itmchvgqfl28g>>;
    };
    EmergencyShutdown: {
        /**
        
         */
        Shutdown: PlainDescriptor<Anonymize<Ibe6clpska8jpe>>;
        /**
        
         */
        OpenRefund: PlainDescriptor<Anonymize<Ibe6clpska8jpe>>;
        /**
        
         */
        Refund: PlainDescriptor<Anonymize<If4cacupn5dljo>>;
    };
    Homa: {
        /**
        
         */
        Minted: PlainDescriptor<Anonymize<I8dsi8mk6ckogi>>;
        /**
        
         */
        RequestedRedeem: PlainDescriptor<Anonymize<I655sh5mkv30oh>>;
        /**
        
         */
        RedeemRequestCancelled: PlainDescriptor<Anonymize<If7vs929oo0tq1>>;
        /**
        
         */
        RedeemedByFastMatch: PlainDescriptor<Anonymize<Icninh3otlaqnf>>;
        /**
        
         */
        RedeemedByUnbond: PlainDescriptor<Anonymize<I9bs07r2l4sohg>>;
        /**
        
         */
        WithdrawRedemption: PlainDescriptor<Anonymize<I2jbsbaa0plh1m>>;
        /**
        
         */
        CurrentEraBumped: PlainDescriptor<Anonymize<Ibjhdvo42j8ooc>>;
        /**
        
         */
        CurrentEraReset: PlainDescriptor<Anonymize<Ibjhdvo42j8ooc>>;
        /**
        
         */
        LedgerBondedReset: PlainDescriptor<Anonymize<Ib2h8tf2j486ge>>;
        /**
        
         */
        LedgerUnlockingReset: PlainDescriptor<Anonymize<I24o93rg071u0r>>;
        /**
        
         */
        SoftBondedCapPerSubAccountUpdated: PlainDescriptor<Anonymize<I9f1ag3dummf1d>>;
        /**
        
         */
        EstimatedRewardRatePerEraUpdated: PlainDescriptor<Anonymize<I7mbq68faol6f0>>;
        /**
        
         */
        CommissionRateUpdated: PlainDescriptor<Anonymize<Ibsr7s7f6m5e3v>>;
        /**
        
         */
        FastMatchFeeRateUpdated: PlainDescriptor<Anonymize<I7k8ovj1bnotd8>>;
        /**
        
         */
        LastEraBumpedBlockUpdated: PlainDescriptor<Anonymize<I8tir9pdto2iig>>;
        /**
        
         */
        BumpEraFrequencyUpdated: PlainDescriptor<Anonymize<Iq38juhlnqpti>>;
    };
    XcmInterface: {
        /**
        
         */
        XcmDestWeightUpdated: PlainDescriptor<Anonymize<Idvipclfc4pej8>>;
        /**
        
         */
        XcmFeeUpdated: PlainDescriptor<Anonymize<I9gjj9chf4ekgk>>;
    };
    Incentives: {
        /**
        
         */
        DepositDexShare: PlainDescriptor<Anonymize<Ic7o4tlgoouvkj>>;
        /**
        
         */
        WithdrawDexShare: PlainDescriptor<Anonymize<I5qobcllfklbjm>>;
        /**
        
         */
        ClaimRewards: PlainDescriptor<Anonymize<Iatnr3londg4j9>>;
        /**
        
         */
        IncentiveRewardAmountUpdated: PlainDescriptor<Anonymize<I3imtacjnsgh1r>>;
        /**
        
         */
        ClaimRewardDeductionRateUpdated: PlainDescriptor<Anonymize<I8002qd532bgbp>>;
        /**
        
         */
        ClaimRewardDeductionCurrencyUpdated: PlainDescriptor<Anonymize<Ices4nh6e7so3t>>;
    };
    NFT: {
        /**
        
         */
        CreatedClass: PlainDescriptor<Anonymize<I7vtgav0u6d8sk>>;
        /**
        
         */
        MintedToken: PlainDescriptor<Anonymize<Ictprchp8m3ig7>>;
        /**
        
         */
        TransferredToken: PlainDescriptor<Anonymize<I7cm08des6caup>>;
        /**
        
         */
        BurnedToken: PlainDescriptor<Anonymize<Ifohblgil17v5c>>;
        /**
        
         */
        BurnedTokenWithRemark: PlainDescriptor<Anonymize<I18u7irfkprqtc>>;
        /**
        
         */
        DestroyedClass: PlainDescriptor<Anonymize<I7vtgav0u6d8sk>>;
    };
    AssetRegistry: {
        /**
        
         */
        ForeignAssetRegistered: PlainDescriptor<Anonymize<Iedmlp2ihnd9ih>>;
        /**
        
         */
        ForeignAssetUpdated: PlainDescriptor<Anonymize<Iedmlp2ihnd9ih>>;
        /**
        
         */
        AssetRegistered: PlainDescriptor<Anonymize<I7pi88vnts2427>>;
        /**
        
         */
        AssetUpdated: PlainDescriptor<Anonymize<I7pi88vnts2427>>;
    };
    LiquidCrowdloan: {
        /**
        
         */
        Redeemed: PlainDescriptor<Anonymize<If82ef6cjv8bf6>>;
        /**
        
         */
        TransferFromCrowdloanVaultRequested: PlainDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
        
         */
        RedeemCurrencyIdUpdated: PlainDescriptor<Anonymize<I98i83boqc476c>>;
    };
    EVM: {
        /**
        
         */
        Created: PlainDescriptor<Anonymize<Ia8flqh0ukcd6d>>;
        /**
        
         */
        CreatedFailed: PlainDescriptor<Anonymize<I2sof9mrmjhllk>>;
        /**
        
         */
        Executed: PlainDescriptor<Anonymize<Ia8flqh0ukcd6d>>;
        /**
        
         */
        ExecutedFailed: PlainDescriptor<Anonymize<Ifi3pfbdu7hk3f>>;
        /**
        
         */
        TransferredMaintainer: PlainDescriptor<Anonymize<I2b1121ufu9vsp>>;
        /**
        
         */
        ContractDevelopmentEnabled: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
        
         */
        ContractDevelopmentDisabled: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
        
         */
        ContractPublished: PlainDescriptor<Anonymize<Ics51ctc9oasbt>>;
        /**
        
         */
        ContractSetCode: PlainDescriptor<Anonymize<Ics51ctc9oasbt>>;
        /**
        
         */
        ContractSelfdestructed: PlainDescriptor<Anonymize<Ics51ctc9oasbt>>;
    };
    EvmAccounts: {
        /**
        
         */
        ClaimAccount: PlainDescriptor<Anonymize<I55ji04hkqqfb>>;
    };
    StableAsset: {
        /**
        
         */
        CreatePool: PlainDescriptor<Anonymize<I54dj4621btbog>>;
        /**
        
         */
        Minted: PlainDescriptor<Anonymize<I8eeivtdimg5sg>>;
        /**
        
         */
        TokenSwapped: PlainDescriptor<Anonymize<Ia53lkiao1udji>>;
        /**
        
         */
        RedeemedProportion: PlainDescriptor<Anonymize<Ie26sa5pkqc7lh>>;
        /**
        
         */
        RedeemedSingle: PlainDescriptor<Anonymize<I7sn2bldv48ck8>>;
        /**
        
         */
        RedeemedMulti: PlainDescriptor<Anonymize<It3rcku7atiln>>;
        /**
        
         */
        BalanceUpdated: PlainDescriptor<Anonymize<I2e6ar36i5p9qo>>;
        /**
        
         */
        YieldCollected: PlainDescriptor<Anonymize<Ifssptimng3fig>>;
        /**
        
         */
        FeeCollected: PlainDescriptor<Anonymize<I2d4kqt7h8dvva>>;
        /**
        
         */
        AModified: PlainDescriptor<Anonymize<I6ou90sd9g7cje>>;
        /**
        
         */
        FeeModified: PlainDescriptor<Anonymize<I3dqh1v95db76q>>;
        /**
        
         */
        RecipientModified: PlainDescriptor<Anonymize<Iec84e3i3f9e7f>>;
    };
    ParachainSystem: {
        /**
        
         */
        ValidationFunctionStored: PlainDescriptor<undefined>;
        /**
        
         */
        ValidationFunctionApplied: PlainDescriptor<Anonymize<Idd7hd99u0ho0n>>;
        /**
        
         */
        ValidationFunctionDiscarded: PlainDescriptor<undefined>;
        /**
        
         */
        DownwardMessagesReceived: PlainDescriptor<Anonymize<Iafscmv8tjf0ou>>;
        /**
        
         */
        DownwardMessagesProcessed: PlainDescriptor<Anonymize<I100l07kaehdlp>>;
        /**
        
         */
        UpwardMessageSent: PlainDescriptor<Anonymize<I6gnbnvip5vvdi>>;
    };
    Sudo: {
        /**
        
         */
        Sudid: PlainDescriptor<Anonymize<Ib790qnltjsdhl>>;
        /**
        
         */
        KeyChanged: PlainDescriptor<Anonymize<I5rtkmhm2dng4u>>;
        /**
        
         */
        KeyRemoved: PlainDescriptor<undefined>;
        /**
        
         */
        SudoAsDone: PlainDescriptor<Anonymize<Ib790qnltjsdhl>>;
    };
};
type IError = {
    System: {
        /**
        
         */
        InvalidSpecName: PlainDescriptor<undefined>;
        /**
        
         */
        SpecVersionNeedsToIncrease: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToExtractRuntimeVersion: PlainDescriptor<undefined>;
        /**
        
         */
        NonDefaultComposite: PlainDescriptor<undefined>;
        /**
        
         */
        NonZeroRefCount: PlainDescriptor<undefined>;
        /**
        
         */
        CallFiltered: PlainDescriptor<undefined>;
        /**
        
         */
        MultiBlockMigrationsOngoing: PlainDescriptor<undefined>;
        /**
        
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
        
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    Scheduler: {
        /**
        
         */
        FailedToSchedule: PlainDescriptor<undefined>;
        /**
        
         */
        NotFound: PlainDescriptor<undefined>;
        /**
        
         */
        TargetBlockNumberInPast: PlainDescriptor<undefined>;
        /**
        
         */
        RescheduleNoChange: PlainDescriptor<undefined>;
        /**
        
         */
        Named: PlainDescriptor<undefined>;
    };
    Utility: {
        /**
        
         */
        TooManyCalls: PlainDescriptor<undefined>;
    };
    Multisig: {
        /**
        
         */
        MinimumThreshold: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyApproved: PlainDescriptor<undefined>;
        /**
        
         */
        NoApprovalsNeeded: PlainDescriptor<undefined>;
        /**
        
         */
        TooFewSignatories: PlainDescriptor<undefined>;
        /**
        
         */
        TooManySignatories: PlainDescriptor<undefined>;
        /**
        
         */
        SignatoriesOutOfOrder: PlainDescriptor<undefined>;
        /**
        
         */
        SenderInSignatories: PlainDescriptor<undefined>;
        /**
        
         */
        NotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
        
         */
        NoTimepoint: PlainDescriptor<undefined>;
        /**
        
         */
        WrongTimepoint: PlainDescriptor<undefined>;
        /**
        
         */
        UnexpectedTimepoint: PlainDescriptor<undefined>;
        /**
        
         */
        MaxWeightTooLow: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyStored: PlainDescriptor<undefined>;
    };
    Proxy: {
        /**
        
         */
        TooMany: PlainDescriptor<undefined>;
        /**
        
         */
        NotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NotProxy: PlainDescriptor<undefined>;
        /**
        
         */
        Unproxyable: PlainDescriptor<undefined>;
        /**
        
         */
        Duplicate: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        Unannounced: PlainDescriptor<undefined>;
        /**
        
         */
        NoSelfProxy: PlainDescriptor<undefined>;
    };
    TransactionPause: {
        /**
        
         */
        CannotPause: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCharacter: PlainDescriptor<undefined>;
    };
    Preimage: {
        /**
        
         */
        TooBig: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyNoted: PlainDescriptor<undefined>;
        /**
        
         */
        NotAuthorized: PlainDescriptor<undefined>;
        /**
        
         */
        NotNoted: PlainDescriptor<undefined>;
        /**
        
         */
        Requested: PlainDescriptor<undefined>;
        /**
        
         */
        NotRequested: PlainDescriptor<undefined>;
        /**
        
         */
        TooMany: PlainDescriptor<undefined>;
        /**
        
         */
        TooFew: PlainDescriptor<undefined>;
    };
    Balances: {
        /**
        
         */
        VestingBalance: PlainDescriptor<undefined>;
        /**
        
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
        
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
        
         */
        Expendability: PlainDescriptor<undefined>;
        /**
        
         */
        ExistingVestingSchedule: PlainDescriptor<undefined>;
        /**
        
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyHolds: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyFreezes: PlainDescriptor<undefined>;
        /**
        
         */
        IssuanceDeactivated: PlainDescriptor<undefined>;
        /**
        
         */
        DeltaZero: PlainDescriptor<undefined>;
    };
    Tokens: {
        /**
        
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
        
         */
        AmountIntoBalanceFailed: PlainDescriptor<undefined>;
        /**
        
         */
        LiquidityRestrictions: PlainDescriptor<undefined>;
        /**
        
         */
        MaxLocksExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        KeepAlive: PlainDescriptor<undefined>;
        /**
        
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
        
         */
        DeadAccount: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyReserves: PlainDescriptor<undefined>;
    };
    Currencies: {
        /**
        
         */
        AmountIntoBalanceFailed: PlainDescriptor<undefined>;
        /**
        
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
        
         */
        Erc20InvalidOperation: PlainDescriptor<undefined>;
        /**
        
         */
        EvmAccountNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        RealOriginNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        DepositFailed: PlainDescriptor<undefined>;
    };
    Vesting: {
        /**
        
         */
        ZeroVestingPeriod: PlainDescriptor<undefined>;
        /**
        
         */
        ZeroVestingPeriodCount: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientBalanceToLock: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyVestingSchedules: PlainDescriptor<undefined>;
        /**
        
         */
        AmountLow: PlainDescriptor<undefined>;
        /**
        
         */
        MaxVestingSchedulesExceeded: PlainDescriptor<undefined>;
    };
    TransactionPayment: {
        /**
        
         */
        InvalidSwapPath: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidBalance: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRate: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidToken: PlainDescriptor<undefined>;
        /**
        
         */
        DexNotAvailable: PlainDescriptor<undefined>;
        /**
        
         */
        ChargeFeePoolAlreadyExisted: PlainDescriptor<undefined>;
    };
    Treasury: {
        /**
        
         */
        InsufficientProposersBalance: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyApprovals: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientPermission: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalNotApproved: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToConvertBalance: PlainDescriptor<undefined>;
        /**
        
         */
        SpendExpired: PlainDescriptor<undefined>;
        /**
        
         */
        EarlyPayout: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyAttempted: PlainDescriptor<undefined>;
        /**
        
         */
        PayoutError: PlainDescriptor<undefined>;
        /**
        
         */
        NotAttempted: PlainDescriptor<undefined>;
        /**
        
         */
        Inconclusive: PlainDescriptor<undefined>;
    };
    Bounties: {
        /**
        
         */
        InsufficientProposersBalance: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
        
         */
        ReasonTooBig: PlainDescriptor<undefined>;
        /**
        
         */
        UnexpectedStatus: PlainDescriptor<undefined>;
        /**
        
         */
        RequireCurator: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidValue: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidFee: PlainDescriptor<undefined>;
        /**
        
         */
        PendingPayout: PlainDescriptor<undefined>;
        /**
        
         */
        Premature: PlainDescriptor<undefined>;
        /**
        
         */
        HasActiveChildBounty: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyQueued: PlainDescriptor<undefined>;
    };
    Tips: {
        /**
        
         */
        ReasonTooBig: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyKnown: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownTip: PlainDescriptor<undefined>;
        /**
        
         */
        MaxTipAmountExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        NotFinder: PlainDescriptor<undefined>;
        /**
        
         */
        StillOpen: PlainDescriptor<undefined>;
        /**
        
         */
        Premature: PlainDescriptor<undefined>;
    };
    CollatorSelection: {
        /**
        
         */
        MaxCandidatesExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        BelowCandidatesMin: PlainDescriptor<undefined>;
        /**
        
         */
        StillLocked: PlainDescriptor<undefined>;
        /**
        
         */
        Unknown: PlainDescriptor<undefined>;
        /**
        
         */
        Permission: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyCandidate: PlainDescriptor<undefined>;
        /**
        
         */
        NotCandidate: PlainDescriptor<undefined>;
        /**
        
         */
        NotNonCandidate: PlainDescriptor<undefined>;
        /**
        
         */
        NothingToWithdraw: PlainDescriptor<undefined>;
        /**
        
         */
        RequireSessionKey: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyInvulnerable: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidProof: PlainDescriptor<undefined>;
        /**
        
         */
        MaxInvulnerablesExceeded: PlainDescriptor<undefined>;
    };
    Session: {
        /**
        
         */
        InvalidProof: PlainDescriptor<undefined>;
        /**
        
         */
        NoAssociatedValidatorId: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicatedKey: PlainDescriptor<undefined>;
        /**
        
         */
        NoKeys: PlainDescriptor<undefined>;
        /**
        
         */
        NoAccount: PlainDescriptor<undefined>;
    };
    SessionManager: {
        /**
        
         */
        InvalidSession: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidDuration: PlainDescriptor<undefined>;
        /**
        
         */
        EstimateNextSessionFailed: PlainDescriptor<undefined>;
    };
    XcmpQueue: {
        /**
        
         */
        BadQueueConfig: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadySuspended: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyResumed: PlainDescriptor<undefined>;
    };
    PolkadotXcm: {
        /**
        
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
        
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
        
         */
        Filtered: PlainDescriptor<undefined>;
        /**
        
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
        
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
        
         */
        Empty: PlainDescriptor<undefined>;
        /**
        
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyAssets: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidOrigin: PlainDescriptor<undefined>;
        /**
        
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
        
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
        
         */
        NoSubscription: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadySubscribed: PlainDescriptor<undefined>;
        /**
        
         */
        CannotCheckOutTeleport: PlainDescriptor<undefined>;
        /**
        
         */
        LowBalance: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyLocks: PlainDescriptor<undefined>;
        /**
        
         */
        AccountNotSovereign: PlainDescriptor<undefined>;
        /**
        
         */
        FeesNotMet: PlainDescriptor<undefined>;
        /**
        
         */
        LockNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        InUse: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAssetNotConcrete: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAssetUnknownReserve: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAssetUnsupportedReserve: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyReserves: PlainDescriptor<undefined>;
        /**
        
         */
        LocalExecutionIncomplete: PlainDescriptor<undefined>;
    };
    XTokens: {
        /**
        
         */
        AssetHasNoReserve: PlainDescriptor<undefined>;
        /**
        
         */
        NotCrossChainTransfer: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidDest: PlainDescriptor<undefined>;
        /**
        
         */
        NotCrossChainTransferableCurrency: PlainDescriptor<undefined>;
        /**
        
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
        
         */
        XcmExecutionFailed: PlainDescriptor<undefined>;
        /**
        
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAncestry: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAsset: PlainDescriptor<undefined>;
        /**
        
         */
        DestinationNotInvertible: PlainDescriptor<undefined>;
        /**
        
         */
        BadVersion: PlainDescriptor<undefined>;
        /**
        
         */
        DistinctReserveForAssetAndFee: PlainDescriptor<undefined>;
        /**
        
         */
        ZeroFee: PlainDescriptor<undefined>;
        /**
        
         */
        ZeroAmount: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyAssetsBeingSent: PlainDescriptor<undefined>;
        /**
        
         */
        AssetIndexNonExistent: PlainDescriptor<undefined>;
        /**
        
         */
        FeeNotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportedLocation: PlainDescriptor<undefined>;
        /**
        
         */
        MinXcmFeeNotDefined: PlainDescriptor<undefined>;
        /**
        
         */
        RateLimited: PlainDescriptor<undefined>;
    };
    UnknownTokens: {
        /**
        
         */
        BalanceTooLow: PlainDescriptor<undefined>;
        /**
        
         */
        BalanceOverflow: PlainDescriptor<undefined>;
        /**
        
         */
        UnhandledAsset: PlainDescriptor<undefined>;
    };
    OrmlXcm: {
        /**
        
         */
        Unreachable: PlainDescriptor<undefined>;
        /**
        
         */
        SendFailure: PlainDescriptor<undefined>;
        /**
        
         */
        BadVersion: PlainDescriptor<undefined>;
    };
    MessageQueue: {
        /**
        
         */
        NotReapable: PlainDescriptor<undefined>;
        /**
        
         */
        NoPage: PlainDescriptor<undefined>;
        /**
        
         */
        NoMessage: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyProcessed: PlainDescriptor<undefined>;
        /**
        
         */
        Queued: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientWeight: PlainDescriptor<undefined>;
        /**
        
         */
        TemporarilyUnprocessable: PlainDescriptor<undefined>;
        /**
        
         */
        QueuePaused: PlainDescriptor<undefined>;
        /**
        
         */
        RecursiveDisallowed: PlainDescriptor<undefined>;
    };
    Authority: {
        /**
        
         */
        FailedToSchedule: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToCancel: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToFastTrack: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToDelay: PlainDescriptor<undefined>;
        /**
        
         */
        CallNotAuthorized: PlainDescriptor<undefined>;
        /**
        
         */
        TriggerCallNotPermitted: PlainDescriptor<undefined>;
        /**
        
         */
        WrongCallWeightBound: PlainDescriptor<undefined>;
    };
    GeneralCouncil: {
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
        
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
        
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
        
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    GeneralCouncilMembership: {
        /**
        
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    FinancialCouncil: {
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
        
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
        
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
        
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    FinancialCouncilMembership: {
        /**
        
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    HomaCouncil: {
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
        
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
        
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
        
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    HomaCouncilMembership: {
        /**
        
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
        
         */
        WrongIndex: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateVote: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyInitialized: PlainDescriptor<undefined>;
        /**
        
         */
        TooEarly: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyProposals: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalWeight: PlainDescriptor<undefined>;
        /**
        
         */
        WrongProposalLength: PlainDescriptor<undefined>;
        /**
        
         */
        PrimeAccountNotMember: PlainDescriptor<undefined>;
    };
    TechnicalCommitteeMembership: {
        /**
        
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    Democracy: {
        /**
        
         */
        ValueLow: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalMissing: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyCanceled: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicateProposal: PlainDescriptor<undefined>;
        /**
        
         */
        ProposalBlacklisted: PlainDescriptor<undefined>;
        /**
        
         */
        NotSimpleMajority: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidHash: PlainDescriptor<undefined>;
        /**
        
         */
        NoProposal: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyVetoed: PlainDescriptor<undefined>;
        /**
        
         */
        ReferendumInvalid: PlainDescriptor<undefined>;
        /**
        
         */
        NoneWaiting: PlainDescriptor<undefined>;
        /**
        
         */
        NotVoter: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyDelegating: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientFunds: PlainDescriptor<undefined>;
        /**
        
         */
        NotDelegating: PlainDescriptor<undefined>;
        /**
        
         */
        VotesExist: PlainDescriptor<undefined>;
        /**
        
         */
        InstantNotAllowed: PlainDescriptor<undefined>;
        /**
        
         */
        Nonsense: PlainDescriptor<undefined>;
        /**
        
         */
        WrongUpperBound: PlainDescriptor<undefined>;
        /**
        
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
        
         */
        TooMany: PlainDescriptor<undefined>;
        /**
        
         */
        VotingPeriodLow: PlainDescriptor<undefined>;
        /**
        
         */
        PreimageNotExist: PlainDescriptor<undefined>;
    };
    AcalaOracle: {
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyFeeded: PlainDescriptor<undefined>;
    };
    OperatorMembershipAcala: {
        /**
        
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
        
         */
        NotMember: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    Auction: {
        /**
        
         */
        AuctionNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        AuctionNotStarted: PlainDescriptor<undefined>;
        /**
        
         */
        BidNotAccepted: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidBidPrice: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableAuctionId: PlainDescriptor<undefined>;
    };
    Rewards: {
        /**
        
         */
        PoolDoesNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        ShareDoesNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        CanSplitOnlyLessThanShare: PlainDescriptor<undefined>;
        /**
        
         */
        ShareBelowMinimal: PlainDescriptor<undefined>;
    };
    OrmlNFT: {
        /**
        
         */
        NoAvailableClassId: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableTokenId: PlainDescriptor<undefined>;
        /**
        
         */
        TokenNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        ClassNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        CannotDestroyClass: PlainDescriptor<undefined>;
        /**
        
         */
        MaxMetadataExceeded: PlainDescriptor<undefined>;
    };
    Prices: {
        /**
        
         */
        AccessPriceFailed: PlainDescriptor<undefined>;
        /**
        
         */
        NoLockedPrice: PlainDescriptor<undefined>;
    };
    Dex: {
        /**
        
         */
        AlreadyEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeProvisioning: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeDisabled: PlainDescriptor<undefined>;
        /**
        
         */
        NotAllowedList: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidContributionIncrement: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidLiquidityIncrement: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCurrencyId: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidTradingPathLength: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientTargetAmount: PlainDescriptor<undefined>;
        /**
        
         */
        ExcessiveSupplyAmount: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
        
         */
        ZeroSupplyAmount: PlainDescriptor<undefined>;
        /**
        
         */
        ZeroTargetAmount: PlainDescriptor<undefined>;
        /**
        
         */
        UnacceptableShareIncrement: PlainDescriptor<undefined>;
        /**
        
         */
        UnacceptableLiquidityWithdrawn: PlainDescriptor<undefined>;
        /**
        
         */
        InvariantCheckFailed: PlainDescriptor<undefined>;
        /**
        
         */
        UnqualifiedProvision: PlainDescriptor<undefined>;
        /**
        
         */
        StillProvisioning: PlainDescriptor<undefined>;
        /**
        
         */
        AssetUnregistered: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidTradingPath: PlainDescriptor<undefined>;
        /**
        
         */
        NotAllowedRefund: PlainDescriptor<undefined>;
        /**
        
         */
        CannotSwap: PlainDescriptor<undefined>;
    };
    DexOracle: {
        /**
        
         */
        AveragePriceAlreadyEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        AveragePriceMustBeEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPool: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCurrencyId: PlainDescriptor<undefined>;
        /**
        
         */
        IntervalIsZero: PlainDescriptor<undefined>;
    };
    AggregatedDex: {
        /**
        
         */
        CannotSwap: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPoolId: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidTokenIndex: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSwapPath: PlainDescriptor<undefined>;
    };
    Earning: {
        /**
        
         */
        BelowMinBondThreshold: PlainDescriptor<undefined>;
        /**
        
         */
        MaxUnlockChunksExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        NotBonded: PlainDescriptor<undefined>;
        /**
        
         */
        NotAllowed: PlainDescriptor<undefined>;
    };
    AuctionManager: {
        /**
        
         */
        AuctionNotExists: PlainDescriptor<undefined>;
        /**
        
         */
        InReverseStage: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidFeedPrice: PlainDescriptor<undefined>;
        /**
        
         */
        MustAfterShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidBidPrice: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAmount: PlainDescriptor<undefined>;
    };
    Loans: {
        /**
        
         */
        AmountConvertFailed: PlainDescriptor<undefined>;
    };
    Honzon: {
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        AuthorizationNotExists: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyAuthorized: PlainDescriptor<undefined>;
    };
    CdpTreasury: {
        /**
        
         */
        CollateralNotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        SurplusPoolNotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        DebitPoolNotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        CannotSwap: PlainDescriptor<undefined>;
        /**
        
         */
        NotDexShare: PlainDescriptor<undefined>;
    };
    CdpEngine: {
        /**
        
         */
        ExceedDebitValueHardCap: PlainDescriptor<undefined>;
        /**
        
         */
        BelowRequiredCollateralRatio: PlainDescriptor<undefined>;
        /**
        
         */
        BelowLiquidationRatio: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeUnsafe: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeSafe: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCollateralType: PlainDescriptor<undefined>;
        /**
        
         */
        RemainDebitValueTooSmall: PlainDescriptor<undefined>;
        /**
        
         */
        CollateralAmountBelowMinimum: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidFeedPrice: PlainDescriptor<undefined>;
        /**
        
         */
        NoDebitValue: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        MustAfterShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        CollateralNotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughDebitDecrement: PlainDescriptor<undefined>;
        /**
        
         */
        ConvertDebitBalanceFailed: PlainDescriptor<undefined>;
        /**
        
         */
        LiquidationFailed: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyLiquidationContracts: PlainDescriptor<undefined>;
        /**
        
         */
        CollateralContractNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRate: PlainDescriptor<undefined>;
    };
    EmergencyShutdown: {
        /**
        
         */
        AlreadyShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        MustAfterShutdown: PlainDescriptor<undefined>;
        /**
        
         */
        CanNotRefund: PlainDescriptor<undefined>;
        /**
        
         */
        ExistPotentialSurplus: PlainDescriptor<undefined>;
        /**
        
         */
        ExistUnhandledDebit: PlainDescriptor<undefined>;
    };
    Homa: {
        /**
        
         */
        BelowMintThreshold: PlainDescriptor<undefined>;
        /**
        
         */
        BelowRedeemThreshold: PlainDescriptor<undefined>;
        /**
        
         */
        ExceededStakingCurrencySoftCap: PlainDescriptor<undefined>;
        /**
        
         */
        InsufficientUnclaimedRedemption: PlainDescriptor<undefined>;
        /**
        
         */
        OutdatedEraIndex: PlainDescriptor<undefined>;
        /**
        
         */
        FastMatchIsNotAllowed: PlainDescriptor<undefined>;
        /**
        
         */
        CannotCompletelyFastMatch: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRate: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidLastEraBumpedBlock: PlainDescriptor<undefined>;
    };
    XcmInterface: {
        /**
        
         */
        XcmFailed: PlainDescriptor<undefined>;
    };
    Incentives: {
        /**
        
         */
        NotEnough: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCurrencyId: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPoolId: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRate: PlainDescriptor<undefined>;
    };
    NFT: {
        /**
        
         */
        ClassIdNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        TokenIdNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidQuantity: PlainDescriptor<undefined>;
        /**
        
         */
        NonTransferable: PlainDescriptor<undefined>;
        /**
        
         */
        NonBurnable: PlainDescriptor<undefined>;
        /**
        
         */
        NonMintable: PlainDescriptor<undefined>;
        /**
        
         */
        CannotDestroyClass: PlainDescriptor<undefined>;
        /**
        
         */
        Immutable: PlainDescriptor<undefined>;
        /**
        
         */
        AttributesTooLarge: PlainDescriptor<undefined>;
        /**
        
         */
        IncorrectTokenId: PlainDescriptor<undefined>;
    };
    AssetRegistry: {
        /**
        
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
        
         */
        LocationExisted: PlainDescriptor<undefined>;
        /**
        
         */
        AssetIdNotExists: PlainDescriptor<undefined>;
        /**
        
         */
        AssetIdExisted: PlainDescriptor<undefined>;
    };
    EVM: {
        /**
        
         */
        AddressNotMapped: PlainDescriptor<undefined>;
        /**
        
         */
        ContractNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        ContractDevelopmentNotEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        ContractDevelopmentAlreadyEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        ContractAlreadyPublished: PlainDescriptor<undefined>;
        /**
        
         */
        ContractExceedsMaxCodeSize: PlainDescriptor<undefined>;
        /**
        
         */
        ContractAlreadyExisted: PlainDescriptor<undefined>;
        /**
        
         */
        OutOfStorage: PlainDescriptor<undefined>;
        /**
        
         */
        ChargeFeeFailed: PlainDescriptor<undefined>;
        /**
        
         */
        CannotKillContract: PlainDescriptor<undefined>;
        /**
        
         */
        ReserveStorageFailed: PlainDescriptor<undefined>;
        /**
        
         */
        UnreserveStorageFailed: PlainDescriptor<undefined>;
        /**
        
         */
        ChargeStorageFailed: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidDecimals: PlainDescriptor<undefined>;
        /**
        
         */
        StrictCallFailed: PlainDescriptor<undefined>;
        /**
        
         */
        NotEOA: PlainDescriptor<undefined>;
    };
    EVMBridge: {
        /**
        
         */
        ExecutionFail: PlainDescriptor<undefined>;
        /**
        
         */
        ExecutionRevert: PlainDescriptor<undefined>;
        /**
        
         */
        ExecutionFatal: PlainDescriptor<undefined>;
        /**
        
         */
        ExecutionError: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidReturnValue: PlainDescriptor<undefined>;
    };
    EvmAccounts: {
        /**
        
         */
        AccountIdHasMapped: PlainDescriptor<undefined>;
        /**
        
         */
        EthAddressHasMapped: PlainDescriptor<undefined>;
        /**
        
         */
        BadSignature: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
        
         */
        NonZeroRefCount: PlainDescriptor<undefined>;
    };
    StableAsset: {
        /**
        
         */
        InconsistentStorage: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPoolAsset: PlainDescriptor<undefined>;
        /**
        
         */
        ArgumentsMismatch: PlainDescriptor<undefined>;
        /**
        
         */
        ArgumentsError: PlainDescriptor<undefined>;
        /**
        
         */
        PoolNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        Math: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPoolValue: PlainDescriptor<undefined>;
        /**
        
         */
        MintUnderMin: PlainDescriptor<undefined>;
        /**
        
         */
        SwapUnderMin: PlainDescriptor<undefined>;
        /**
        
         */
        RedeemUnderMin: PlainDescriptor<undefined>;
        /**
        
         */
        RedeemOverMax: PlainDescriptor<undefined>;
    };
    ParachainSystem: {
        /**
        
         */
        OverlappingUpgrades: PlainDescriptor<undefined>;
        /**
        
         */
        ProhibitedByPolkadot: PlainDescriptor<undefined>;
        /**
        
         */
        TooBig: PlainDescriptor<undefined>;
        /**
        
         */
        ValidationDataNotAvailable: PlainDescriptor<undefined>;
        /**
        
         */
        HostConfigurationNotAvailable: PlainDescriptor<undefined>;
        /**
        
         */
        NotScheduled: PlainDescriptor<undefined>;
        /**
        
         */
        NothingAuthorized: PlainDescriptor<undefined>;
        /**
        
         */
        Unauthorized: PlainDescriptor<undefined>;
    };
    Sudo: {
        /**
        
         */
        RequireSudo: PlainDescriptor<undefined>;
    };
};
type IConstants = {
    System: {
        /**
        
         */
        BlockWeights: PlainDescriptor<Anonymize<In7a38730s6qs>>;
        /**
        
         */
        BlockLength: PlainDescriptor<Anonymize<If15el53dd76v9>>;
        /**
        
         */
        BlockHashCount: PlainDescriptor<number>;
        /**
        
         */
        DbWeight: PlainDescriptor<Anonymize<I9s0ave7t0vnrk>>;
        /**
        
         */
        Version: PlainDescriptor<Anonymize<Ic6nglu2db2c36>>;
        /**
        
         */
        SS58Prefix: PlainDescriptor<number>;
    };
    Timestamp: {
        /**
        
         */
        MinimumPeriod: PlainDescriptor<bigint>;
    };
    Scheduler: {
        /**
        
         */
        MaximumWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
        
         */
        MaxScheduledPerBlock: PlainDescriptor<number>;
    };
    Utility: {
        /**
        
         */
        batched_calls_limit: PlainDescriptor<number>;
    };
    Multisig: {
        /**
        
         */
        DepositBase: PlainDescriptor<bigint>;
        /**
        
         */
        DepositFactor: PlainDescriptor<bigint>;
        /**
        
         */
        MaxSignatories: PlainDescriptor<number>;
    };
    Proxy: {
        /**
        
         */
        ProxyDepositBase: PlainDescriptor<bigint>;
        /**
        
         */
        ProxyDepositFactor: PlainDescriptor<bigint>;
        /**
        
         */
        MaxProxies: PlainDescriptor<number>;
        /**
        
         */
        MaxPending: PlainDescriptor<number>;
        /**
        
         */
        AnnouncementDepositBase: PlainDescriptor<bigint>;
        /**
        
         */
        AnnouncementDepositFactor: PlainDescriptor<bigint>;
    };
    IdleScheduler: {
        /**
        
         */
        MinimumWeightRemainInBlock: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
        
         */
        DisableBlockThreshold: PlainDescriptor<number>;
    };
    Balances: {
        /**
        
         */
        ExistentialDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        MaxLocks: PlainDescriptor<number>;
        /**
        
         */
        MaxReserves: PlainDescriptor<number>;
        /**
        
         */
        MaxFreezes: PlainDescriptor<number>;
    };
    Tokens: {
        /**
        
         */
        MaxLocks: PlainDescriptor<number>;
        /**
        
         */
        MaxReserves: PlainDescriptor<number>;
    };
    Currencies: {
        /**
        
         */
        GetNativeCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        Erc20HoldingAccount: PlainDescriptor<FixedSizeBinary<20>>;
    };
    Vesting: {
        /**
        
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
    };
    TransactionPayment: {
        /**
        
         */
        NativeCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        OperationalFeeMultiplier: PlainDescriptor<bigint>;
        /**
        
         */
        TipPerWeightStep: PlainDescriptor<bigint>;
        /**
        
         */
        MaxTipsOfPriority: PlainDescriptor<bigint>;
        /**
        
         */
        AlternativeFeeSwapDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        MaxSwapSlippageCompareToOracle: PlainDescriptor<bigint>;
        /**
        
         */
        TradingPathLimit: PlainDescriptor<number>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        CustomFeeSurplus: PlainDescriptor<number>;
        /**
        
         */
        AlternativeFeeSurplus: PlainDescriptor<number>;
        /**
        
         */
        DefaultFeeTokens: PlainDescriptor<Anonymize<I58e1c2iddvge>>;
    };
    Treasury: {
        /**
        
         */
        ProposalBond: PlainDescriptor<number>;
        /**
        
         */
        ProposalBondMinimum: PlainDescriptor<bigint>;
        /**
        
         */
        ProposalBondMaximum: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
        
         */
        SpendPeriod: PlainDescriptor<number>;
        /**
        
         */
        Burn: PlainDescriptor<number>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        MaxApprovals: PlainDescriptor<number>;
        /**
        
         */
        PayoutPeriod: PlainDescriptor<number>;
    };
    Bounties: {
        /**
        
         */
        BountyDepositBase: PlainDescriptor<bigint>;
        /**
        
         */
        BountyDepositPayoutDelay: PlainDescriptor<number>;
        /**
        
         */
        BountyUpdatePeriod: PlainDescriptor<number>;
        /**
        
         */
        CuratorDepositMultiplier: PlainDescriptor<number>;
        /**
        
         */
        CuratorDepositMax: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
        
         */
        CuratorDepositMin: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
        
         */
        BountyValueMinimum: PlainDescriptor<bigint>;
        /**
        
         */
        DataDepositPerByte: PlainDescriptor<bigint>;
        /**
        
         */
        MaximumReasonLength: PlainDescriptor<number>;
    };
    Tips: {
        /**
        
         */
        MaximumReasonLength: PlainDescriptor<number>;
        /**
        
         */
        DataDepositPerByte: PlainDescriptor<bigint>;
        /**
        
         */
        TipCountdown: PlainDescriptor<number>;
        /**
        
         */
        TipFindersFee: PlainDescriptor<number>;
        /**
        
         */
        TipReportDepositBase: PlainDescriptor<bigint>;
        /**
        
         */
        MaxTipAmount: PlainDescriptor<bigint>;
    };
    CollatorSelection: {
        /**
        
         */
        PotId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        MinCandidates: PlainDescriptor<number>;
        /**
        
         */
        MaxCandidates: PlainDescriptor<number>;
        /**
        
         */
        MaxInvulnerables: PlainDescriptor<number>;
        /**
        
         */
        KickPenaltySessionLength: PlainDescriptor<number>;
        /**
        
         */
        CollatorKickThreshold: PlainDescriptor<number>;
        /**
        
         */
        MinRewardDistributeAmount: PlainDescriptor<bigint>;
    };
    XcmpQueue: {
        /**
        
         */
        MaxInboundSuspended: PlainDescriptor<number>;
    };
    XTokens: {
        /**
        
         */
        SelfLocation: PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
        /**
        
         */
        BaseXcmWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
        /**
        
         */
        RateLimiterId: PlainDescriptor<undefined>;
    };
    MessageQueue: {
        /**
        
         */
        HeapSize: PlainDescriptor<number>;
        /**
        
         */
        MaxStale: PlainDescriptor<number>;
        /**
        
         */
        ServiceWeight: PlainDescriptor<Anonymize<Iasb8k6ash5mjn>>;
    };
    GeneralCouncil: {
        /**
        
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    FinancialCouncil: {
        /**
        
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    HomaCouncil: {
        /**
        
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    TechnicalCommittee: {
        /**
        
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    Democracy: {
        /**
        
         */
        EnactmentPeriod: PlainDescriptor<number>;
        /**
        
         */
        LaunchPeriod: PlainDescriptor<number>;
        /**
        
         */
        VotingPeriod: PlainDescriptor<number>;
        /**
        
         */
        VoteLockingPeriod: PlainDescriptor<number>;
        /**
        
         */
        MinimumDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        InstantAllowed: PlainDescriptor<boolean>;
        /**
        
         */
        FastTrackVotingPeriod: PlainDescriptor<number>;
        /**
        
         */
        CooloffPeriod: PlainDescriptor<number>;
        /**
        
         */
        MaxVotes: PlainDescriptor<number>;
        /**
        
         */
        MaxProposals: PlainDescriptor<number>;
        /**
        
         */
        MaxDeposits: PlainDescriptor<number>;
        /**
        
         */
        MaxBlacklisted: PlainDescriptor<number>;
    };
    AcalaOracle: {
        /**
        
         */
        RootOperatorAccountId: PlainDescriptor<SS58String>;
        /**
        
         */
        MaxHasDispatchedSize: PlainDescriptor<number>;
        /**
        
         */
        MaxFeedValues: PlainDescriptor<number>;
    };
    Prices: {
        /**
        
         */
        GetStableCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        StableCurrencyFixedPrice: PlainDescriptor<bigint>;
        /**
        
         */
        GetStakingCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        GetLiquidCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        RewardRatePerRelaychainBlock: PlainDescriptor<bigint>;
    };
    Dex: {
        /**
        
         */
        GetExchangeFee: PlainDescriptor<Anonymize<I9jd27rnpm8ttv>>;
        /**
        
         */
        TradingPathLimit: PlainDescriptor<number>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        ExtendedProvisioningBlocks: PlainDescriptor<number>;
    };
    AggregatedDex: {
        /**
        
         */
        DexSwapJointList: PlainDescriptor<Anonymize<I2esdqcrfg1au7>>;
        /**
        
         */
        SwapPathLimit: PlainDescriptor<number>;
    };
    Earning: {
        /**
        
         */
        MinBond: PlainDescriptor<bigint>;
        /**
        
         */
        UnbondingPeriod: PlainDescriptor<number>;
        /**
        
         */
        MaxUnbondingChunks: PlainDescriptor<number>;
        /**
        
         */
        LockIdentifier: PlainDescriptor<FixedSizeBinary<8>>;
    };
    AuctionManager: {
        /**
        
         */
        MinimumIncrementSize: PlainDescriptor<bigint>;
        /**
        
         */
        AuctionTimeToClose: PlainDescriptor<number>;
        /**
        
         */
        AuctionDurationSoftCap: PlainDescriptor<number>;
        /**
        
         */
        GetStableCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        UnsignedPriority: PlainDescriptor<bigint>;
    };
    Loans: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Honzon: {
        /**
        
         */
        DepositPerAuthorization: PlainDescriptor<bigint>;
    };
    CdpTreasury: {
        /**
        
         */
        GetStableCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        MaxAuctionsCount: PlainDescriptor<number>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    CdpEngine: {
        /**
        
         */
        DefaultLiquidationRatio: PlainDescriptor<bigint>;
        /**
        
         */
        DefaultDebitExchangeRate: PlainDescriptor<bigint>;
        /**
        
         */
        DefaultLiquidationPenalty: PlainDescriptor<bigint>;
        /**
        
         */
        MinimumDebitValue: PlainDescriptor<bigint>;
        /**
        
         */
        GetStableCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        MaxSwapSlippageCompareToOracle: PlainDescriptor<bigint>;
        /**
        
         */
        UnsignedPriority: PlainDescriptor<bigint>;
        /**
        
         */
        MaxLiquidationContractSlippage: PlainDescriptor<bigint>;
        /**
        
         */
        MaxLiquidationContracts: PlainDescriptor<number>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Homa: {
        /**
        
         */
        StakingCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        LiquidCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        DefaultExchangeRate: PlainDescriptor<bigint>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        ActiveSubAccountsIndexList: PlainDescriptor<Anonymize<Icgljjb6j82uhn>>;
        /**
        
         */
        BondingDuration: PlainDescriptor<number>;
        /**
        
         */
        MintThreshold: PlainDescriptor<bigint>;
        /**
        
         */
        RedeemThreshold: PlainDescriptor<bigint>;
    };
    XcmInterface: {
        /**
        
         */
        StakingCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        ParachainAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        RelayChainUnbondingSlashingSpans: PlainDescriptor<number>;
        /**
        
         */
        SelfLocation: PlainDescriptor<Anonymize<I4c0s5cioidn76>>;
    };
    Incentives: {
        /**
        
         */
        AccumulatePeriod: PlainDescriptor<number>;
        /**
        
         */
        NativeCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        RewardsSource: PlainDescriptor<SS58String>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    NFT: {
        /**
        
         */
        CreateClassDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        CreateTokenDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        DataDepositPerByte: PlainDescriptor<bigint>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        MaxAttributesBytes: PlainDescriptor<number>;
    };
    AssetRegistry: {
        /**
        
         */
        StakingCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
    };
    LiquidCrowdloan: {
        /**
        
         */
        LiquidCrowdloanCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        RelayChainCurrencyId: PlainDescriptor<Anonymize<I75otreomvjlo4>>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        CrowdloanVault: PlainDescriptor<SS58String>;
    };
    EVM: {
        /**
        
         */
        NewContractExtraBytes: PlainDescriptor<number>;
        /**
        
         */
        StorageDepositPerByte: PlainDescriptor<bigint>;
        /**
        
         */
        TxFeePerGas: PlainDescriptor<bigint>;
        /**
        
         */
        NetworkContractSource: PlainDescriptor<FixedSizeBinary<20>>;
        /**
        
         */
        DeveloperDeposit: PlainDescriptor<bigint>;
        /**
        
         */
        PublicationFee: PlainDescriptor<bigint>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
    };
    EvmAccounts: {
        /**
        
         */
        ChainId: PlainDescriptor<bigint>;
    };
    StableAsset: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        FeePrecision: PlainDescriptor<bigint>;
        /**
        
         */
        SwapExactOverAmount: PlainDescriptor<bigint>;
        /**
        
         */
        APrecision: PlainDescriptor<bigint>;
        /**
        
         */
        PoolAssetLimit: PlainDescriptor<number>;
    };
    ParachainSystem: {
        /**
        
         */
        SelfParaId: PlainDescriptor<number>;
    };
};
type IRuntimeCalls = {
    /**
    
     */
    Core: {
        /**
        
         */
        version: RuntimeDescriptor<[], Anonymize<Ic6nglu2db2c36>>;
        /**
        
         */
        execute_block: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>], undefined>;
        /**
        
         */
        initialize_block: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<I2v50gu3s1aqk6>>;
    };
    /**
    
     */
    Metadata: {
        /**
        
         */
        metadata: RuntimeDescriptor<[], Binary>;
        /**
        
         */
        metadata_at_version: RuntimeDescriptor<[version: number], Anonymize<Iabpgqcjikia83>>;
        /**
        
         */
        metadata_versions: RuntimeDescriptor<[], Anonymize<Icgljjb6j82uhn>>;
    };
    /**
    
     */
    BlockBuilder: {
        /**
        
         */
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<I7auvdvt5epl7s>>;
        /**
        
         */
        finalize_block: RuntimeDescriptor<[], Anonymize<Ic952bubvq4k7d>>;
        /**
        
         */
        inherent_extrinsics: RuntimeDescriptor<[inherent: Anonymize<If7uv525tdvv7a>], Anonymize<Itom7fk49o0c9>>;
        /**
        
         */
        check_inherents: RuntimeDescriptor<[block: Anonymize<Iaqet9jc3ihboe>, data: Anonymize<If7uv525tdvv7a>], Anonymize<I2an1fs2eiebjp>>;
    };
    /**
    
     */
    TaggedTransactionQueue: {
        /**
        
         */
        validate_transaction: RuntimeDescriptor<[source: TransactionValidityTransactionSource, tx: Binary, block_hash: FixedSizeBinary<32>], Anonymize<Iajbob6uln5jct>>;
    };
    /**
    
     */
    OffchainWorkerApi: {
        /**
        
         */
        offchain_worker: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], undefined>;
    };
    /**
    
     */
    AuraApi: {
        /**
        
         */
        slot_duration: RuntimeDescriptor<[], bigint>;
        /**
        
         */
        authorities: RuntimeDescriptor<[], Anonymize<Ic5m5lp1oioo8r>>;
    };
    /**
    
     */
    SessionKeys: {
        /**
        
         */
        generate_session_keys: RuntimeDescriptor<[seed: Anonymize<Iabpgqcjikia83>], Binary>;
        /**
        
         */
        decode_session_keys: RuntimeDescriptor<[encoded: Binary], Anonymize<Icerf8h8pdu8ss>>;
    };
    /**
    
     */
    AccountNonceApi: {
        /**
        
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
    OracleApi: {
        /**
        
         */
        get_value: RuntimeDescriptor<[provider_id: Anonymize<Id1tj560j5ungu>, key: Anonymize<I75otreomvjlo4>], Anonymize<I974rv7q5bvln8>>;
        /**
        
         */
        get_all_values: RuntimeDescriptor<[provider_id: Anonymize<Id1tj560j5ungu>], Anonymize<I5vun5pfncmibi>>;
    };
    /**
    
     */
    TokensApi: {
        /**
        
         */
        query_existential_deposit: RuntimeDescriptor<[currency_id: Anonymize<I75otreomvjlo4>], bigint>;
    };
    /**
    
     */
    CurrenciesApi: {
        /**
        
         */
        query_free_balance: RuntimeDescriptor<[currency_id: Anonymize<I75otreomvjlo4>, who: SS58String], bigint>;
    };
    /**
    
     */
    EVMRuntimeRPCApi: {
        /**
        
         */
        call: RuntimeDescriptor<[from: FixedSizeBinary<20>, to: FixedSizeBinary<20>, data: Binary, value: bigint, gas_limit: bigint, storage_limit: number, access_list: Anonymize<I6n992ikreen29>, estimate: boolean], Anonymize<Iau3fg1ag3dn6c>>;
        /**
        
         */
        create: RuntimeDescriptor<[from: FixedSizeBinary<20>, data: Binary, value: bigint, gas_limit: bigint, storage_limit: number, access_list: Anonymize<I6n992ikreen29>, estimate: boolean], Anonymize<Id2dj0p9r1hd24>>;
        /**
        
         */
        get_estimate_resources_request: RuntimeDescriptor<[data: Binary], Anonymize<I3iaubjm1mnjl7>>;
        /**
        
         */
        block_limits: RuntimeDescriptor<[], Anonymize<I9dnd2gpp3ceom>>;
        /**
        
         */
        account_call: RuntimeDescriptor<[from: SS58String, to: FixedSizeBinary<20>, data: Binary, value: bigint, gas_limit: bigint, storage_limit: number, access_list: Anonymize<I6n992ikreen29>, estimate: boolean], Anonymize<Iau3fg1ag3dn6c>>;
        /**
        
         */
        account_create: RuntimeDescriptor<[from: SS58String, data: Binary, value: bigint, gas_limit: bigint, storage_limit: number, access_list: Anonymize<I6n992ikreen29>, estimate: boolean], Anonymize<Id2dj0p9r1hd24>>;
    };
    /**
    
     */
    CollectCollationInfo: {
        /**
        
         */
        collect_collation_info: RuntimeDescriptor<[header: Anonymize<Ic952bubvq4k7d>], Anonymize<Ic1d4u2opv3fst>>;
    };
};
type IAsset = PlainDescriptor<void>;
export type AcalaDispatchError = Anonymize<Icpinkc2ap1trn>;
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
export type AcalaQueries = QueryFromPalletsDef<PalletsTypedef>;
export type AcalaCalls = TxFromPalletsDef<PalletsTypedef>;
export type AcalaEvents = EventsFromPalletsDef<PalletsTypedef>;
export type AcalaErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type AcalaConstants = ConstFromPalletsDef<PalletsTypedef>;
export type AcalaCallData = Anonymize<I87i62vbq153jd> & {
    value: {
        type: string;
    };
};
export type AcalaWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
