import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, I809k12j7rapsg, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ic5m5lp1oioo8r, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I3b7ubon4divk4, I9p9lq3rej5bhc, Ifble4juuml5ig, Version, I8l842dlicg2jr, I9jd27rnpm8ttv, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, Ibgl04rn6nbfm6, I9cllvl0tmdeco, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ie0cpusdmler9p, I6o3vavku3vjsk, Iepvrcsdbii2qt, I82vjkits3vc46, Icp9h5ma02v1rg, I9us7218h9qeio, I68itkd3tsdg5p, I7vlvrrl2pnbgk, I9osn6oe908bj1, XcmPalletVersionMigrationStage, I78c7o5kd104ql, I165b31dp8f95m, I7csvdmmfnffaq, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, Icg2f7lij7mhun, I9bin2jc70qt6q, TransactionPaymentReleases, I3qklfjubrljqh, Iag3f1hum3p4c8, I7svnfko10tq2e, I4s6jkha20aoh0, I2brm5b9jij1st, I78s05f59eoi8b, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, I6cs1itejju2vv, I4ftk0glls7946, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, I497ltikio29qi, I99bb69usss9gs, Iegmj7n48sc3am, I8phqps8r3of7e, Ibjfaoj07vq7bm, I2jh6l2jh6e48q, I3d3qku31qb8k1, I8nj9dlo7lnbb3, Iba9inugg1atvo, Ib23vkkc52tqbu, I8fkfedbgu1sn3, Ibofbvvaehln4e, Ietn1p3svqp9bc, Ieshol306jk7hn, I8bmte156jvcnb, Idpatrs8teqg2g, I9huuk9esp2bq8, Ifo61fvdcequsl, Icb3gfdt6hp40h, I4ojmnsk1dchql, I35p85j063s0il, I53b09cgcnercs, If5ahrn9t884ts, Iabpgqcjikia83, Ielgh4t8o7rcvt, I8olmuvp76k6ru, Ifft6v9k9ntfp4, Idnnprtrknpgsn, I2p59kvukfmhga, I7mctunsj2ck9l, I96rqo4i9p11oo, Iafqnechp3omqg, Idsa6q9es8ufjv, I95l2k9b1re95f, I200n1ov5tbcvr, I6ouflveob4eli, I954gj183hquv6, Iep7au1720bm0e, I9as49fv9bga0l, Ieadvls69m2nhd, Ibu9mlecf9ndjt, Ianufjuplcj6u4, Id32h28hjj1tch, I2mv9dvsaj3kcr, I7781vnk0rm9eq, Ie2iqtdb0stqo1, I5irutptk105do, Ic9nev69d8grv1, I1oea0vf2lc6sk, Ic602a40m2hqqe, I2mi8ncqesoi0m, I6ivjcn7a8nega, If0s55733jsdoi, I78ifo46cgtb7u, Iacclqe3n26duv, I9tgfb3nfi7kmf, I2774fobohragd, I727g4u99tm30m, I6frph631evdvn, I6rb1c153e044t, I7dihovo5r7fhs, I91fho98huiaik, I4totqt881mlti, I5p3oo2n3c074l, I6sqre0udfgkem, Idmrjcv7s8vviq, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Iea4cdk1e0kthe, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Idcr6u6361oad9, I6d5372cq6g7rp, Ibh6lctsfq1715, Iddkhb9kg4rrbf, I1cevpuh25tqlr, I90ptamk4ecadd, Ia2bjakfooella, Ideaemvoneh309, I3d9o9d7epp66v, Ie5nj113re5t7v, If4tj1q0g38fjg, I213kjmutgr2fi, Ia4iqoohe2opk8, I2eb501t8s6hsq, Ianmuoljk2sk1u, Ifqvt461f7nsdv, Id9uqtigc0il3v, Iaa2o6cgjdpdn5, Iam6hrl7ptd85l, Ict9ivhr2c5hv0, I7kbs6obd7pstn, I5n4sebgkfr760, I2k4ud9u51f7rm, Ifs1i5fk9cqvr6, Icj0lvb4va50a9, I8kbubdhufokf8, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, I60v7bikk54tpu, Ifpj261e8s63m3, Iab1retd4gg4q1, I3vh014cqgmrfd, I2tni7rrb2buqm, I177omkp0t3av4, I561t4i7oneora, Ia8um7upnt2t99, I44pbivm2pe7qc, Ic76kfh5ebqkpl, I8nm9vc7o6er85, I5up1l6nq7b3hn, Ibgm4rnf22lal1, I4ktuaksf5i1gk, I9bqtpv2ii35mp, I9j7pagd6d4bda, I2h9pmio37r7fb, Ibmr18suc9ikh9, I9iq22t0burs89, Ic357tcepuvo5c, I2rnoam876ruhj, Ic5b47dj4coa3r, Ib3qnc19gu633c, Ifira6u9hi7cu1, I72tqocvdoqfff, I2i27f3sfmvc05, I1nlrtd1epki2d, I3abtumcmempjs, Id81m8flopt8ha, I8hff7chabggkd, I49i39mtj1ivbs, Ifkr2kcak2vto1, I1ju6r8q0cs9jt, I4kpeq6j7cd5bu, I5na1ka76k6811, I59mhdb9omdqfa, I9vl5kpk0fpakt, I717jt61hu19b4, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I81vt5eq60l4b6, Ic6cqd9g0t65v0, I2kds5jji7slh8, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, I6o1er683vod1j, Id6gojh30v9ib2, Ide1bahhh47lj9, Ic68lsi7chpv5k, Iek0boln8pgnko, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, I2ev73t79f46tb, Ibot4i7a9t6oo8, I666bl2fqjkejo, I3hsuol7rtl0bj, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, I38jfk5li8iang, I4hmsdfa39av1f, I1sq2b4jsjfck0, I2dtrijkm5601t, Ib2obgji960euh, Iffcutbjvs7mcv, Icm9m0qeemu66d, Icnrv1mfbd3in1, I2a839vbf5817q, Ia9p5bg6p18r0i, I42bqh279uf7oa, I4p6v96cffstms, I90n6nnkpdahrh, Iah01oofl8tuo9, Iacbtv7bdkku2a, I59bngqm85b22v, I4u4n2na1l5uo7, I3c63j6sh3evqn, I8k3rnvpeeh4hv, Iaa13icjlsj13d, I98vh5ccjtf1ev, I3al0eab2u0gt2, I6tk7rk1nnjhlp, I6fuug4i4r04hi, I4rh6l1hlna3ip, I5v1ok3nh6vhmm, I1pm30k3i4438u, I8mk5kjgn02hi8, Ieqvq91sbe02ko, I2gr10p66od9ch, I9mcq66cm3gibo, I9pfbl6m798rk2, Ibmkshvkdhh06f, I9p8b8lamchikq, Ibd6glo8oakrtd, I7mker2n05rfmr, I9md9er0ggas34, I1t41l2dqbt5j1, I5lo526po2gedr, Idfhfc170a4ugb, I1dbabrrad6gor, Ia5le7udkgbaq9, Ifs4cp5rg3k9nc, Ifvtjt50q884bb, Idusmq77988cmt, I3pgrm00u7fff4, I8p40dt899dtuq, I32b0jhgrkml07, I98387i4qus0q0, I9r8hk2r0veiqk, Ic93n0cje721n3, I4ej0varlqk27n, I8aufv2kktips8, Icnkee0to4c5ac, Ifojc0u4m3uvm3, Ibj6p2qmre1slv, I77s95qt6vtede, I1ur2rlach980v, I4djmoborcve41, I76icl3jdndgc3, Ibd9squo71c5pa, Ife5k0e5mpkhd2, I8dq28qkmijvoe, I6s1nbislhk619, Iffvohb3t8h71u, I947um9nhnghi1, I7rou92jg5lvkv, I99b3k55ooqgai, I66q98ur9ul454, If1d2pnfu9k0hv, I6v8sm60vvkmk7, Ivuka4fpegqab, I573qjpa7bj77k, Ibfm3gehrtppo6, I7is3ul3rohkhb, Ieari17laupqqv, Ibihfmtr4nutgv, I28a39o0noo9cs, I6mppljttce685, I7egjhl0mn1j4l, I7nuotcce43q45, Ibhr0o5fchkus0, I6bpho1qciu1vq, I9ge3l8s7gjron, I3qt1hgg4djhgb, Ie64b2bdu3uou9, I4nhnnt51clo6, If8bcs63vv4eft, Icv39e87t78khf, I3cucnpdvg2uaf, I7p2tv37l911cg, Iah5k3ggvcdj9j, Ilfjnkdvr6eb2, Ibqbi21r6gl2kt, Ieh4ftquu8iia3, Ics9h14l9rgrav, I1faoarphn2s32, I2jh8ggfgmkeo0, Iabj7fklqpbosu, Ic312np0jtnd0o, If66ivi02f7256, I223jtcatlfkrc, I223jg78mng8hq, I4iiuiftkpq3fd, Ibra6533h92c0a, Ibgvkh96s68a66, If9vko7pv0231m, Iafkqus0ohh6l6, I6cu7obfo0rr0o, Ie5i0q2glmr0md, I1ap9tlenhr44l, Ib92t90p616grb, Ieipuujd6879do, Ie56eq9sg1rsoc, I5tvvgui05tn6e, Ibal0joadvdc2h, Iceq9fmmp9aeqv, I9viqhmdtuof5e, Ibqooroq6rr5kr, I6h88h8vba22v8, Ia9cd4jqb5eecb, I19jiel1ftbcce, I8uhqcv2tbpaul, Ialemosrn6f6v, I2bf315tpln3ie, Idap45qa17pms2, I9m43jftr52of7, Ied59p4g9emfn, I715u7ss17c7t, I7of83qrfaioip, Ibsv4ivp1dg0u4, Ibau3aourms2ev, Ibku9o3184ad8p, I6kkm2uudo9ubv, If878fl46fbcu3, Ib60g2h688gk1p, Idj4ot80o5e11t, I7sm7g1ejv0h1q, I6mqoemo8r3tqu, Iclrcvqgva5chh, Ifkdal1nu7d0oc, I397r94a4pub9e, I4sv46pqslbnlv, I3q4fduif2p624, I988hmt4l3b72b, Iev9giuq7lsi3o, Iem1enf2fufb5v, Ifp4t9o738p31f, I4cdvg646kt2e0, Idlg4l2qff953q, I516q1duegu1bc, Icpsl5uslfkju4, I59qvdvbm7opmu, I8e10h8p8npln5, I5j5chkhnfbh8j, I4a37j1kii1e1b, Iem2tclvr85h3e, I5tq7j96upc637, Ireognj60ejo1, Ia82mnkmeo2rhc, I1f4bk2e0gtk55, Icbccs0ug47ilf, I855j4i3kr8ko1, Ieu3q3iifakcb8, I8fs4df378mcpp, Iaec871uechrcf, Iep27ialq4a7o7, Iasu5jvoqr43mv, Iddd9dh9c7bplc, I5qolde99acmd1, I3losnoicnf24b, I2ur0oeqg495j8, I222ob4fvnhvmb, Ievr89968437gm, I2dam96ptgp9i4, Ienusoeb625ftq, Idd7hd99u0ho0n, Ib51vk42m1po4n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, I2650grdiibijj, I5q96bb8stug61, I137t1cld92pod, If8b64mo2bodj0, Icu5p58ltu1veo, I2c8bkmorso999, I2gfpd8ikmku31, Iadf1uv6agh6rp, If4e6jvgfn13rl, Ise9gq7rqlnvm, Ifmqhv1oc3rh3, Ia37keupp0t7n6, Iel50id65eke1v, I9s1ksje8tscgp, I2uqmls7kcdnii, Idg69klialbkb8, I6ama1doqn7ush, I30pg328m00nr3, I2on6pi7n0k0ik, Iduq5i0c15rc0o, I75o78kjj6nl2u, Ien06stpa519em, I13106a549td2f, Icti9s23lkm0qj, Iemrprej97cn2e, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, Ier2cke86dqbr2, I88ff3u4dpivk, I33cp947glv1ks, Ic9om1gmmqu7rq, I5hfov2b68ppb6, Ibthhb2m9vneds, Iaitn5bqfacj7k, If4ebvclj2ugvi, Ieduc1e6frq8rb, I9h6gbtabovtm4, Ifnsa0dkkpf465, I65dtqr2egjbc3, Ibqj3vg5s5lk0c, I6l73u513p8rna, Iefqmt2htu1dlu, If8bgtgqrchjtu, I39t01nnod9109, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I2hq50pu2kdjpo, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, Ift6f10887nk72, I7qc53b1tvqjg2, I7h7qtdsbfcb4v, Iak7fhrgb9jnnq, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, Ie5v6njpckr05b, I38bmcrmh852rk, I4hcillge8de5f, Id9idaj83175f9, Ie1semicfuv5uu, If25fjs9o37co1, Idtfinpnsamten, I455dk0vr5anih, Iaofef34v2445a, Ie3gphha4ejh40, I4b66js88p45m8, I50d9r8lrdga93, I27avf13g71mla, Iep7an7g10jgpc, Ierev02d74bpoa, Ic836gl3ins837, I60p8l86a8cm59, I3m3sk2lgcabvp, I5pf572duh4oeg, I6o5gj873rg52t, Icfvncndiepf13, I5hfier3p0p9jc, Ie4gu6f3b6uctq, I5vjpealkafo1p, Ibqslebq6u42vb, I6hjfgcu14eb0q, Icmtuqsikv2bvd, I3a6hiniv07tkc, I2b65htl0pjlqh, Ibf0qcof7of6r3, I3klqo14nbar9n, Ibpvnujci6lmps, Inpik2efrovhj, I2rpqkg7ssb4am, I99h25vhi9ugv4, I4ct3iu08fvs4m, I3d9shde1q80sl, I71394bfgmh7f4, Icas6s87koosbm, I31du8nf8ebd7l, I2q85o3gc28n4s, I90vvr8uqrv92h, I2d0uit6oup7dt, I2tutt7vqt5geb, I69u9ruosjbvbq, I1jcetuoafqqbr, Ita6m0fl0nn5o, I26pv5uad3shu7, I4l3grg74he7f8, Ia69ln29ruhu9e, I2hpkvh0joj3gp, Iclu7lhjet5kei, Ibqrtilbvj9oag, I6k3obpc83bkgt, I1u512ep96c36b, Iduib0sos7pca1, I8qju7m3hstakb, I6913n2585e5v4, I2am6a50bsgodv, Ia79dd8827p5d7, If2nonba72deue, I82fnm31ss836o, I1focoio9oicr1, Iffu89avbjtc5o, Ie2og8nuo133e, Ickvb9esgisdvp, I9gqanbbbe917p, Id1m1230297f7a, Ifvb1p5munhhv4, I46h83ilqeed3g, Icahse3uoi76n7, I75sj3uv7gnemk, I5fjkvcb5vr6nb, I2gr1toekv86b9, I2v2ikqt2trp52, If3057hi1g5qlo, Iaii5qf41d5n3d, I86pkmcnt7cik7, I37orqm0h7voie, Idn09te2cs37nc, Ie6j9cnp8aj7k7, I9kmfil6jdj4l8, I9o9f05ebunqev, Ifb32prv2c7htc, I8jvqf5673ih1q, Ie6p960gf85qqh, I9pbttir0alsh4, Ie27tfrcer2j34, I4a41r9balkt5o, Ifokke6olpki32, Ibnjv02qe8q15q, Iufi3tjf8uomh, Icdqlqqb8bqrfq, I6uachrs3kgekh, Ict3k310u6ic13, I19a4q1q9b96bj, I9vspelmo3v87n, Iatonj6bqf2dcb, Iepshvhf8fi3ce, I8vto936slaf4, Ie628frm5eo165, I6lnq492gvt8n2, I83logdba4873j, Idndvbb9nej6lj, Ife179qlf4g24i, Ieg3201strrrud, Icqa1le0ffav0n, Iaqet9jc3ihboe, Ic952bubvq4k7d, Ia80jl3tjleac5, If7uv525tdvv7a, I2an1fs2eiebjp, TransactionValidityTransactionSource, Iajbob6uln5jct, Icerf8h8pdu8ss, I6spmpef2c7svf, Iei2mvq0mjvt81, Ic1d4u2opv3fst, Id181dbjj1tdf3, Ifee01a9g3rt24, Ic0d5ujpem0f1u, I291qb692j5j75, Icfm6esve5sckl, Icj5jam18ja0de, I1i2n12vu9icg5, I1uas0i0nvg00e, Ibf6ecleurvs3c, I9gma1k4b4n01, Idpvt3t6spl9s5, If5srre49dgeim, Ie9sr1iqcg3cgm, Iemlsb8m0gkj0a } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<I809k12j7rapsg>, false>;
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
    RandomnessCollectiveFlip: {
        /**
         * Series of block headers from the last 81 blocks that acts as random seed material. This
         * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
         * the oldest hash.
         */
        RandomMaterial: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
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
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<I3b7ubon4divk4>, false>;
        /**
         * The announcements made by the proxy (key).
         */
        Announcements: StorageDescriptor<[Key: SS58String], Anonymize<I9p9lq3rej5bhc>, false>;
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
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true>;
        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<I8l842dlicg2jr>, false>;
        /**
         * Lookup from a name to the block number and index of the task.
         *
         * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
         * identities.
         */
        Lookup: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9jd27rnpm8ttv>, true>;
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
    ParachainInfo: {
        /**
        
         */
        ParachainId: StorageDescriptor<[], number, false>;
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
         * latest the latest HRMP watermark. Used for limiting the acceptance of new blocks with
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
         * The next authorized upgrade, if there is one.
         */
        AuthorizedUpgrade: StorageDescriptor<[], Anonymize<Ibgl04rn6nbfm6>, true>;
        /**
         * A custom head data that should be returned as result of `validate_block`.
         *
         * See `Pallet::set_custom_validation_head_data` for more information.
         */
        CustomValidationHeadData: StorageDescriptor<[], Binary, true>;
    };
    XcmpQueue: {
        /**
         * Status of the inbound XCMP channels.
         */
        InboundXcmpStatus: StorageDescriptor<[], Anonymize<I9cllvl0tmdeco>, false>;
        /**
         * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
         */
        InboundXcmpMessages: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Binary, false>;
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
        QueueConfig: StorageDescriptor<[], Anonymize<Ie0cpusdmler9p>, false>;
        /**
         * The messages that exceeded max individual message weight budget.
         *
         * These message stay in this storage map until they are manually dispatched via
         * `service_overweight`.
         */
        Overweight: StorageDescriptor<[Key: bigint], Anonymize<I6o3vavku3vjsk>, true>;
        /**
         *Counter for the related counted storage map
         */
        CounterForOverweight: StorageDescriptor<[], number, false>;
        /**
         * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
         * available free overweight index.
         */
        OverweightCount: StorageDescriptor<[], bigint, false>;
        /**
         * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
         */
        QueueSuspended: StorageDescriptor<[], boolean, false>;
    };
    DmpQueue: {
        /**
         * The configuration.
         */
        Configuration: StorageDescriptor<[], Anonymize<I4q39t5hn830vp>, false>;
        /**
         * The page index.
         */
        PageIndex: StorageDescriptor<[], Anonymize<Iepvrcsdbii2qt>, false>;
        /**
         * The queue pages.
         */
        Pages: StorageDescriptor<[Key: number], Anonymize<I82vjkits3vc46>, false>;
        /**
         * The overweight messages.
         */
        Overweight: StorageDescriptor<[Key: bigint], Anonymize<Icp9h5ma02v1rg>, true>;
        /**
         *Counter for the related counted storage map
         */
        CounterForOverweight: StorageDescriptor<[], number, false>;
    };
    PolkadotXcm: {
        /**
         * The latest available query index.
         */
        QueryCounter: StorageDescriptor<[], bigint, false>;
        /**
         * The ongoing queries.
         */
        Queries: StorageDescriptor<[Key: bigint], Anonymize<I9us7218h9qeio>, true>;
        /**
         * The existing asset traps.
         *
         * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
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
        SupportedVersion: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, number, true>;
        /**
         * All locations that we have requested version notifications from.
         */
        VersionNotifiers: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, bigint, true>;
        /**
         * The target locations that are subscribed to our version changes, as well as the most recent
         * of our versions we informed them of.
         */
        VersionNotifyTargets: StorageDescriptor<Anonymize<I68itkd3tsdg5p>, Anonymize<I7vlvrrl2pnbgk>, true>;
        /**
         * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
         * the `u32` counter is the number of times that a send to the destination has been attempted,
         * which is used as a prioritization.
         */
        VersionDiscoveryQueue: StorageDescriptor<[], Anonymize<I9osn6oe908bj1>, false>;
        /**
         * The current migration's stage, if any.
         */
        CurrentMigration: StorageDescriptor<[], XcmPalletVersionMigrationStage, true>;
        /**
         * Fungible assets which we know are locked on a remote chain.
         */
        RemoteLockedFungibles: StorageDescriptor<Anonymize<I165b31dp8f95m>, Anonymize<I78c7o5kd104ql>, true>;
        /**
         * Fungible assets which we know are locked on this chain.
         */
        LockedFungibles: StorageDescriptor<[Key: SS58String], Anonymize<I7csvdmmfnffaq>, true>;
        /**
         * Global suspension state of the XCM executor.
         */
        XcmExecutionSuspended: StorageDescriptor<[], boolean, false>;
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
        Holds: StorageDescriptor<[Key: SS58String], Anonymize<Icg2f7lij7mhun>, false>;
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
         */
        Candidates: StorageDescriptor<[], Anonymize<Ifi4da1gej1fri>, false>;
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
    Identity: {
        /**
         * Information that is pertinent to identify the entity behind an account.
         *
         * TWOX-NOTE: OK ― `AccountId` is a secure hash.
         */
        IdentityOf: StorageDescriptor<[Key: SS58String], Anonymize<I4ftk0glls7946>, true>;
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
    Council: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I497ltikio29qi>, true>;
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
    };
    Bounties: {
        /**
         * Number of bounty proposals that have been made.
         */
        BountyCount: StorageDescriptor<[], number, false>;
        /**
         * Bounties that have been made.
         */
        Bounties: StorageDescriptor<[Key: number], Anonymize<I8phqps8r3of7e>, true>;
        /**
         * The description of each bounty.
         */
        BountyDescriptions: StorageDescriptor<[Key: number], Binary, true>;
        /**
         * Bounty indices that have been approved but not yet funded.
         */
        BountyApprovals: StorageDescriptor<[], Anonymize<Icgljjb6j82uhn>, false>;
    };
    Lottery: {
        /**
        
         */
        LotteryIndex: StorageDescriptor<[], number, false>;
        /**
         * The configuration for the current lottery.
         */
        Lottery: StorageDescriptor<[], Anonymize<Ibjfaoj07vq7bm>, true>;
        /**
         * Users who have purchased a ticket. (Lottery Index, Tickets Purchased)
         */
        Participants: StorageDescriptor<[Key: SS58String], Anonymize<I2jh6l2jh6e48q>, false>;
        /**
         * Total number of tickets sold.
         */
        TicketsCount: StorageDescriptor<[], number, false>;
        /**
         * Each ticket's owner.
         *
         * May have residual storage from previous lotteries. Use `TicketsCount` to see which ones
         * are actually valid ticket mappings.
         */
        Tickets: StorageDescriptor<[Key: number], SS58String, true>;
        /**
         * The calls stored in this pallet to be used in an active lottery if configured
         * by `Config::ValidateCall`.
         */
        CallIndices: StorageDescriptor<[], Anonymize<I3d3qku31qb8k1>, false>;
    };
    TechnicalCommittee: {
        /**
         * The hashes of the active proposals.
         */
        Proposals: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Actual proposal for a given hash, if it's current.
         */
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I497ltikio29qi>, true>;
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
    TechnicalMembership: {
        /**
         * The current membership, stored as an ordered Vec.
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The current prime member, if one exists.
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    PhragmenElection: {
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
    ChildBounties: {
        /**
         * Number of total child bounties.
         */
        ChildBountyCount: StorageDescriptor<[], number, false>;
        /**
         * Number of child bounties per parent bounty.
         * Map of parent bounty index to number of child bounties.
         */
        ParentChildBounties: StorageDescriptor<[Key: number], number, false>;
        /**
         * Child bounties that have been added.
         */
        ChildBounties: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ibofbvvaehln4e>, true>;
        /**
         * The description of each child-bounty.
         */
        ChildBountyDescriptions: StorageDescriptor<[Key: number], Binary, true>;
        /**
         * The cumulative child-bounty curator fee for each parent bounty.
         */
        ChildrenCuratorFees: StorageDescriptor<[Key: number], bigint, false>;
    };
    ChainBridge: {
        /**
        
         */
        ChainNonces: StorageDescriptor<[Key: number], bigint, true>;
        /**
        
         */
        RelayerThreshold: StorageDescriptor<[], number, false>;
        /**
        
         */
        Relayers: StorageDescriptor<[Key: SS58String], boolean, false>;
        /**
        
         */
        RelayerCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Votes: StorageDescriptor<Anonymize<Ieshol306jk7hn>, Anonymize<Ietn1p3svqp9bc>, true>;
        /**
        
         */
        BridgeEvents: StorageDescriptor<[], Anonymize<I8bmte156jvcnb>, false>;
        /**
        
         */
        BridgeFee: StorageDescriptor<[Key: number], bigint, true>;
    };
    AssetsRegistry: {
        /**
         * Mapping fungible asset location to corresponding asset id
         */
        IdByLocations: StorageDescriptor<[Key: Anonymize<Idpatrs8teqg2g>], number, true>;
        /**
         * Mapping fungible asset resource id to corresponding asset id
         */
        IdByResourceId: StorageDescriptor<[Key: FixedSizeBinary<32>], number, true>;
        /**
        
         */
        RegistryInfoByIds: StorageDescriptor<[Key: number], Anonymize<I9huuk9esp2bq8>, true>;
    };
    PhalaMq: {
        /**
         * The next expected sequence of a ingress message coming from a certain sender (origin)
         */
        OffchainIngress: StorageDescriptor<[Key: Anonymize<Ifo61fvdcequsl>], bigint, true>;
        /**
        
         */
        QueuedOutboundMessage: StorageDescriptor<[], Anonymize<Icb3gfdt6hp40h>, true>;
        /**
         * Outbound messages at the current block.
         *
         * It will be cleared at the beginning of every block.
         */
        OutboundMessages: StorageDescriptor<[], Anonymize<Icb3gfdt6hp40h>, false>;
    };
    PhalaRegistry: {
        /**
         * Gatekeeper pubkey list
         */
        Gatekeeper: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Gatekeeper master pubkey
         */
        GatekeeperMasterPubkey: StorageDescriptor<[], FixedSizeBinary<32>, true>;
        /**
         * The block number and unix timestamp when the gatekeeper is launched
         */
        GatekeeperLaunchedAt: StorageDescriptor<[], Anonymize<I4ojmnsk1dchql>, true>;
        /**
         * The rotation counter starting from 1, it always equals to the latest rotation id.
         * The totation id 0 is reserved for the first master key before we introduce the rotation.
         */
        RotationCounter: StorageDescriptor<[], bigint, false>;
        /**
         * Current rotation info including rotation id
         *
         * Only one rotation process is allowed at one time.
         * Since the rotation request is broadcasted to all gatekeepers, it should be finished only if there is one functional
         * gatekeeper.
         */
        MasterKeyRotationLock: StorageDescriptor<[], Anonymize<I35p85j063s0il>, false>;
        /**
         * Mapping from worker pubkey to WorkerInfo
         */
        Workers: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I53b09cgcnercs>, true>;
        /**
         * The first time registered block number for each worker.
         */
        WorkerAddedAt: StorageDescriptor<[Key: FixedSizeBinary<32>], number, true>;
        /**
         * Mapping from contract address to pubkey
         */
        ContractKeys: StorageDescriptor<[Key: FixedSizeBinary<32>], FixedSizeBinary<32>, true>;
        /**
        
         */
        ClusterKeys: StorageDescriptor<[Key: FixedSizeBinary<32>], FixedSizeBinary<32>, true>;
        /**
         * Pubkey for secret topics.
         */
        TopicKey: StorageDescriptor<[Key: Binary], Binary, true>;
        /**
         * The number of blocks to run the benchmark
         */
        BenchmarkDuration: StorageDescriptor<[], number, true>;
        /**
         * Allow list of pRuntime binary digest
         *
         * Only pRuntime within the list can register.
         */
        PRuntimeAllowList: StorageDescriptor<[], Anonymize<Itom7fk49o0c9>, false>;
        /**
         * The effective height of pRuntime binary
         */
        PRuntimeAddedAt: StorageDescriptor<[Key: Binary], number, true>;
        /**
         * Allow list of relaychain genesis
         *
         * Only genesis within the list can do register.
         */
        RelaychainGenesisBlockHashAllowList: StorageDescriptor<[], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
         * Mapping from worker pubkey to Phala Network identity
         */
        Endpoints: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<If5ahrn9t884ts>, true>;
        /**
         * Allow list of pRuntime binary digest
         *
         * Only pRuntime within the list can register.
         */
        TempWorkersIterKey: StorageDescriptor<[], Anonymize<Iabpgqcjikia83>, false>;
        /**
         * PRuntimes whoes version less than MinimumPRuntimeVersion would be forced to quit.
         */
        MinimumPRuntimeVersion: StorageDescriptor<[], Anonymize<Ielgh4t8o7rcvt>, false>;
        /**
         * The consensus version used by pruntime. PRuntimes would switch some code path according
         * the current consensus version.
         */
        PRuntimeConsensusVersion: StorageDescriptor<[], number, false>;
        /**
         * The max consensus version that pruntime has report via register_worker
         */
        MaxKnownPRuntimeConsensusVersion: StorageDescriptor<[], Anonymize<I8olmuvp76k6ru>, false>;
    };
    PhalaComputation: {
        /**
         * Tokenomic parameters used by Gatekeepers to compute the V promote.
         */
        TokenomicParameters: StorageDescriptor<[], Anonymize<Ifft6v9k9ntfp4>, true>;
        /**
         * The scheduled new tokenomic params to update at the end of this block.
         */
        ScheduledTokenomicUpdate: StorageDescriptor<[], Anonymize<Ifft6v9k9ntfp4>, true>;
        /**
         * Total online workers including WorkerIdle and WorkerUnresponsive workers.
         *
         * Increased when a worker is turned to WorkerIdle; decreased when turned to CoolingDown.
         */
        OnlineWorkers: StorageDescriptor<[], number, false>;
        /**
         * The expected heartbeat count at every block (default: 20)
         */
        ExpectedHeartbeatCount: StorageDescriptor<[], number, true>;
        /**
         * Won't sent heartbeat challenges to the the worker if enabled.
         */
        HeartbeatPaused: StorageDescriptor<[], boolean, false>;
        /**
        
         */
        MaxBudgetLimit: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        BudgetUpdateNonce: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        LastBudgetUpdateBlock: StorageDescriptor<[], number, false>;
        /**
        
         */
        ContractAccount: StorageDescriptor<[], SS58String, false>;
        /**
         * The miner state.
         *
         * The session state is created when a worker is bounded with a session, but it will be kept even
         * if the worker is force unbound. A re-bind of a worker will reset the computing state.
         */
        Sessions: StorageDescriptor<[Key: SS58String], Anonymize<Idnnprtrknpgsn>, true>;
        /**
         * The bound worker for a session account
         */
        SessionBindings: StorageDescriptor<[Key: SS58String], FixedSizeBinary<32>, true>;
        /**
         * The bound worker account for a worker
         */
        WorkerBindings: StorageDescriptor<[Key: FixedSizeBinary<32>], SS58String, true>;
        /**
         * The cool down period (in sec)
         */
        CoolDownPeriod: StorageDescriptor<[], bigint, false>;
        /**
         * The next id to assign to a computing session
         */
        NextSessionId: StorageDescriptor<[], number, false>;
        /**
         * The block number when the computing starts. Used to calculate halving.
         */
        ComputingStartBlock: StorageDescriptor<[], number, true>;
        /**
         * The interval of halving (75% decay) in block number.
         */
        ComputingHalvingInterval: StorageDescriptor<[], number, true>;
        /**
         * The stakes of session accounts.
         *
         * Only presents for computing and cooling down sessions.
         */
        Stakes: StorageDescriptor<[Key: SS58String], bigint, true>;
    };
    PhalaStakePool: {
        /**
         * Mapping from pool id to PoolInfo
         */
        StakePools: StorageDescriptor<[Key: bigint], Anonymize<I2p59kvukfmhga>, true>;
        /**
         * Mapping from (pid, staker) to UserStakeInfo
         */
        PoolStakers: StorageDescriptor<[Key: Anonymize<I96rqo4i9p11oo>], Anonymize<I7mctunsj2ck9l>, true>;
        /**
         * The number of total pools
         */
        PoolCount: StorageDescriptor<[], bigint, false>;
        /**
         * Mapping from workers to the pool they belong to
         *
         * The map entry lasts from `add_worker()` to `remove_worker()` or force unbinding.
         */
        WorkerAssignments: StorageDescriptor<[Key: FixedSizeBinary<32>], bigint, true>;
        /**
         * (Deprecated)
         */
        SubAccountAssignments: StorageDescriptor<[Key: SS58String], bigint, true>;
        /**
         * Mapping staker to it's the balance locked in all pools
         */
        StakeLedger: StorageDescriptor<[Key: SS58String], bigint, true>;
        /**
         * Mapping from the block timestamp to pools that has withdrawal requests queued in that block
         */
        WithdrawalQueuedPools: StorageDescriptor<[Key: bigint], Anonymize<Iafqnechp3omqg>, true>;
        /**
         * Queue that contains all block's timestamp, in that block contains the waiting withdraw reqeust.
         * This queue has a max size of (T::GracePeriod * 8) bytes
         */
        WithdrawalTimestamps: StorageDescriptor<[], Anonymize<Iafqnechp3omqg>, false>;
        /**
         * Helper storage to track the preimage of the mining sub-accounts. Not used in consensus.
         */
        SubAccountPreimages: StorageDescriptor<[Key: SS58String], Anonymize<Idsa6q9es8ufjv>, true>;
        /**
         * Mapping for pools that specify certain stakers to contribute stakes
         */
        PoolContributionWhitelists: StorageDescriptor<[Key: bigint], Anonymize<Ia2lhg7l2hilo3>, true>;
        /**
         * Mapping for pools that store their descriptions set by owner
         */
        PoolDescriptions: StorageDescriptor<[Key: bigint], Binary, true>;
    };
    PhalaStakePoolv2: {
        /**
        
         */
        LegacyRewards: StorageDescriptor<[Key: Anonymize<I95l2k9b1re95f>], bigint, true>;
        /**
         * Mapping from workers to the pool they belong to
         *
         * The map entry lasts from `add_worker()` to `remove_worker()` or force unbinding.
         */
        WorkerAssignments: StorageDescriptor<[Key: FixedSizeBinary<32>], bigint, true>;
        /**
         * (Deprecated)
         */
        SubAccountAssignments: StorageDescriptor<[Key: SS58String], bigint, true>;
        /**
         * Helper storage to track the preimage of the computing sub-accounts. Not used in consensus.
         */
        SubAccountPreimages: StorageDescriptor<[Key: SS58String], Anonymize<Idsa6q9es8ufjv>, true>;
        /**
        
         */
        StakepoolIterateStartPos: StorageDescriptor<[], Anonymize<I35p85j063s0il>, false>;
    };
    PhalaVault: {
        /**
         * Mapping from the vault pid to its owner authority locking status
         *
         * Using to forbid vault's owner to trigger an withdraw for the vault and override the withdraw request issued by `force shutdown`.
         */
        VaultLocks: StorageDescriptor<[Key: bigint], undefined, true>;
    };
    PhalaWrappedBalances: {
        /**
         * Mapping from the vote ids and accounts to the amounts of W-PHA used to approve or oppose to the vote
         */
        VoteAccountMap: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I200n1ov5tbcvr>, true>;
        /**
         * Mapping from the accounts and vote ids to the amounts of W-PHA used to approve or oppose to the vote
         */
        AccountVoteMap: StorageDescriptor<Anonymize<I6ouflveob4eli>, undefined, true>;
        /**
         * Mapping for users to their asset status proxys
         */
        StakerAccounts: StorageDescriptor<[Key: SS58String], Anonymize<I954gj183hquv6>, true>;
        /**
         * Collect the unmintable dust
         */
        UnmintableDust: StorageDescriptor<[], bigint, false>;
    };
    PhalaBasePool: {
        /**
         * Mapping from the next self-increased nft ids to collections
         */
        NextNftId: StorageDescriptor<[Key: number], number, false>;
        /**
        
         */
        LockIterateStartPos: StorageDescriptor<[], Anonymize<Iep7au1720bm0e>, false>;
        /**
         * The number of total pools
         */
        PoolCount: StorageDescriptor<[], bigint, false>;
        /**
         * Mapping from collectionids to pids
         */
        PoolCollections: StorageDescriptor<[Key: number], bigint, true>;
        /**
         * The Next available collectionid to be created
         */
        CollectionIndex: StorageDescriptor<[], number, false>;
        /**
         * Mapping from pids to pools (including stake pools and vaults)
         */
        Pools: StorageDescriptor<[Key: bigint], Anonymize<I9as49fv9bga0l>, true>;
        /**
         * Mapping from the NftId to its internal locking status
         *
         * Used to ensure nft attributes can't be read and override when it has already be accessed and haven't updated yet.
         */
        NftLocks: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], undefined, true>;
        /**
         * Mapping for pools that specify certain stakers to contribute stakes
         */
        PoolContributionWhitelists: StorageDescriptor<[Key: bigint], Anonymize<Ia2lhg7l2hilo3>, true>;
        /**
         * Mapping for pools that store their descriptions set by owner
         */
        PoolDescriptions: StorageDescriptor<[Key: bigint], Binary, true>;
        /**
         * Claimable reimbursement due to previous on-chain issues.
         */
        Reimbursements: StorageDescriptor<[Key: Anonymize<I95l2k9b1re95f>], bigint, true>;
    };
    PhalaPhatContracts: {
        /**
        
         */
        Contracts: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Ieadvls69m2nhd>, true>;
        /**
         * The contract cluster counter, it always equals to the latest cluster id.
         */
        ClusterCounter: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        Clusters: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Ibu9mlecf9ndjt>, true>;
        /**
        
         */
        ClusterContracts: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ClusterWorkers: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Ic5m5lp1oioo8r>, false>;
        /**
        
         */
        ClusterByWorkers: StorageDescriptor<[Key: FixedSizeBinary<32>], FixedSizeBinary<32>, true>;
        /**
         * The pink-system contract code used to deploy new clusters
         */
        PinkSystemCode: StorageDescriptor<[], Anonymize<Icp9h5ma02v1rg>, false>;
        /**
         * The blake2_256 hash of the pink-system contract code.
         */
        PinkSystemCodeHash: StorageDescriptor<[], FixedSizeBinary<32>, true>;
        /**
         * The pink-runtime version used to deploy new clusters.
         * See also: `phactory::storage::pink_runtime_version`.
         */
        PinkRuntimeVersion: StorageDescriptor<[], Anonymize<I9jd27rnpm8ttv>, true>;
        /**
         * The next pink-system contract code to be applied from the next block
         */
        NextPinkSystemCode: StorageDescriptor<[], Binary, true>;
    };
    PhalaPhatTokenomic: {
        /**
         * Stake of user to contract
         */
        ContractUserStakes: StorageDescriptor<Anonymize<I8uo3fpd3bcc6f>, bigint, false>;
        /**
         * Map of contracts to their total stakes received
         */
        ContractTotalStakes: StorageDescriptor<[Key: FixedSizeBinary<32>], bigint, false>;
        /**
         * Minimum allowed stake
         */
        MinStake: StorageDescriptor<[], bigint, false>;
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
    RmrkCore: {
        /**
         * Stores collections info
         */
        Collections: StorageDescriptor<[Key: number], Anonymize<I1oea0vf2lc6sk>, true>;
        /**
         * Stores nft info
         */
        Nfts: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<Ic602a40m2hqqe>, true>;
        /**
         * Stores priority info
         */
        Priorities: StorageDescriptor<Anonymize<Ielgh4t8o7rcvt>, number, true>;
        /**
         * Stores nft children info
         */
        Children: StorageDescriptor<Anonymize<I2mi8ncqesoi0m>, undefined, true>;
        /**
         * Stores resource info
         */
        Resources: StorageDescriptor<Anonymize<Ielgh4t8o7rcvt>, Anonymize<I6ivjcn7a8nega>, true>;
        /**
         * Stores the existence of a base for a particular NFT
         * This is populated on `add_composable_resource`, and is
         * used in the rmrk-equip pallet when equipping a resource.
         */
        EquippableBases: StorageDescriptor<Anonymize<Ielgh4t8o7rcvt>, undefined, true>;
        /**
         * Stores the existence of a Base + Slot for a particular
         * NFT's particular resource.  This is populated on
         * `add_slot_resource`, and is used in the rmrk-equip
         * pallet when equipping a resource.
         */
        EquippableSlots: StorageDescriptor<Anonymize<If0s55733jsdoi>, undefined, true>;
        /**
         * Arbitrary properties / metadata of an asset.
         */
        Properties: StorageDescriptor<Anonymize<I5irutptk105do>, Binary, true>;
        /**
         * Lock for NFTs
         */
        Lock: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], boolean, false>;
        /**
         * This storage is not used by the chain.
         * It is need only for PolkadotJS types generation.
         *
         * The stored types are use in the RPC interface only,
         * PolkadotJS won't generate TS types for them without this storage.
         */
        DummyStorage: StorageDescriptor<[], Anonymize<I78ifo46cgtb7u>, true>;
    };
    RmrkEquip: {
        /**
         * Stores Bases info (issuer, base_type, symbol, parts)
         * TODO https://github.com/rmrk-team/rmrk-substrate/issues/98
         * Delete Parts from Bases info, as it's kept in Parts storage
         */
        Bases: StorageDescriptor<[Key: number], Anonymize<Iacclqe3n26duv>, true>;
        /**
         * Stores Parts (either FixedPart or SlotPart)
         * - SlotPart: id, equippable (list), src, z
         * - FixedPart: id, src, z
         */
        Parts: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I9tgfb3nfi7kmf>, true>;
        /**
         * Stores the incrementing NextBaseId
         */
        NextBaseId: StorageDescriptor<[], number, false>;
        /**
         * Stores the incrementing NextPartId
         */
        NextPartId: StorageDescriptor<[Key: number], number, false>;
        /**
         * Stores Equippings info ((equipper, base, slot), equipped_resource)
         */
        Equippings: StorageDescriptor<Anonymize<I2774fobohragd>, number, true>;
        /**
         * Stores Theme info ((base, theme name, property key), property value)
         */
        Themes: StorageDescriptor<Anonymize<I727g4u99tm30m>, Binary, true>;
    };
    RmrkMarket: {
        /**
         * Stores listed NFT price info
         */
        ListedNfts: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, Anonymize<I6frph631evdvn>, true>;
        /**
         * Stores offer on a NFT info
         */
        Offers: StorageDescriptor<Anonymize<I7dihovo5r7fhs>, Anonymize<I6rb1c153e044t>, true>;
        /**
         * Stores the marketplace owner account
         */
        MarketplaceOwner: StorageDescriptor<[], SS58String, true>;
    };
    SygmaAccessSegregator: {
        /**
         * Mapping signature of extrinsic to account has access
         * (pallet_index, extrinsic_name) => account
         */
        ExtrinsicAccess: StorageDescriptor<[Key: Anonymize<Icp9h5ma02v1rg>], SS58String, true>;
    };
    SygmaBasicFeeHandler: {
        /**
         * Mapping fungible asset id to corresponding fee amount
         */
        AssetFees: StorageDescriptor<[Key: Anonymize<I91fho98huiaik>], bigint, true>;
    };
    SygmaBridge: {
        /**
         * Deposit counter of dest domain
         */
        DepositCounts: StorageDescriptor<[Key: number], bigint, false>;
        /**
         * Bridge Pause indicator
         * Bridge is unpaused initially, until pause
         * After mpc address setup, bridge should be paused until ready to unpause
         */
        IsPaused: StorageDescriptor<[Key: number], boolean, false>;
        /**
         * Pre-set MPC address
         */
        MpcAddr: StorageDescriptor<[], FixedSizeBinary<20>, false>;
        /**
         * Mark whether a deposit nonce was used. Used to mark execution status of a proposal.
         */
        UsedNonces: StorageDescriptor<Anonymize<I4ojmnsk1dchql>, bigint, false>;
        /**
         * Mark supported dest domainID
         */
        DestDomainIds: StorageDescriptor<[Key: number], boolean, false>;
        /**
         * Mark the pairs for supported dest domainID with its corresponding chainID
         * The chainID is not directly used in pallet, this map is designed more about rechecking the
         * domainID
         */
        DestChainIds: StorageDescriptor<[Key: number], Anonymize<I4totqt881mlti>, true>;
    };
    SygmaFeeHandlerRouter: {
        /**
         * Return the Fee handler type based on domainID and assetID
         */
        HandlerType: StorageDescriptor<[Key: Anonymize<I91fho98huiaik>], Anonymize<I5p3oo2n3c074l>, true>;
    };
    SygmaPercentageFeeHandler: {
        /**
         * Mapping fungible asset id with domain id to fee rate and its lower bound, upperbound
         */
        AssetFeeRate: StorageDescriptor<[Key: Anonymize<I91fho98huiaik>], Anonymize<I6sqre0udfgkem>, true>;
    };
    PalletIndex: {
        /**
         * Pre-set index worker account
         */
        Workers: StorageDescriptor<[Key: SS58String], boolean, false>;
        /**
         * Mapping task_id to the full deposit data
         */
        DepositRecords: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<Idmrjcv7s8vviq>, true>;
        /**
         * Mapping the worker account and its actived task queue
         */
        ActivedTasks: StorageDescriptor<[Key: SS58String], Anonymize<Ic5m5lp1oioo8r>, false>;
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
    };
    Timestamp: {
        /**
         *See [`Pallet::set`].
         */
        set: TxDescriptor<Anonymize<Idcr6u6361oad9>>;
    };
    Utility: {
        /**
         *See [`Pallet::batch`].
         */
        batch: TxDescriptor<Anonymize<I6d5372cq6g7rp>>;
        /**
         *See [`Pallet::as_derivative`].
         */
        as_derivative: TxDescriptor<Anonymize<Ibh6lctsfq1715>>;
        /**
         *See [`Pallet::batch_all`].
         */
        batch_all: TxDescriptor<Anonymize<I6d5372cq6g7rp>>;
        /**
         *See [`Pallet::dispatch_as`].
         */
        dispatch_as: TxDescriptor<Anonymize<Iddkhb9kg4rrbf>>;
        /**
         *See [`Pallet::force_batch`].
         */
        force_batch: TxDescriptor<Anonymize<I6d5372cq6g7rp>>;
        /**
         *See [`Pallet::with_weight`].
         */
        with_weight: TxDescriptor<Anonymize<I1cevpuh25tqlr>>;
    };
    Multisig: {
        /**
         *See [`Pallet::as_multi_threshold_1`].
         */
        as_multi_threshold_1: TxDescriptor<Anonymize<I90ptamk4ecadd>>;
        /**
         *See [`Pallet::as_multi`].
         */
        as_multi: TxDescriptor<Anonymize<Ia2bjakfooella>>;
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
        proxy: TxDescriptor<Anonymize<Ie5nj113re5t7v>>;
        /**
         *See [`Pallet::add_proxy`].
         */
        add_proxy: TxDescriptor<Anonymize<If4tj1q0g38fjg>>;
        /**
         *See [`Pallet::remove_proxy`].
         */
        remove_proxy: TxDescriptor<Anonymize<If4tj1q0g38fjg>>;
        /**
         *See [`Pallet::remove_proxies`].
         */
        remove_proxies: TxDescriptor<undefined>;
        /**
         *See [`Pallet::create_pure`].
         */
        create_pure: TxDescriptor<Anonymize<I213kjmutgr2fi>>;
        /**
         *See [`Pallet::kill_pure`].
         */
        kill_pure: TxDescriptor<Anonymize<Ia4iqoohe2opk8>>;
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
        proxy_announced: TxDescriptor<Anonymize<Ifqvt461f7nsdv>>;
    };
    Vesting: {
        /**
         *See [`Pallet::vest`].
         */
        vest: TxDescriptor<undefined>;
        /**
         *See [`Pallet::vest_other`].
         */
        vest_other: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *See [`Pallet::vested_transfer`].
         */
        vested_transfer: TxDescriptor<Anonymize<Iaa2o6cgjdpdn5>>;
        /**
         *See [`Pallet::force_vested_transfer`].
         */
        force_vested_transfer: TxDescriptor<Anonymize<Iam6hrl7ptd85l>>;
        /**
         *See [`Pallet::merge_schedules`].
         */
        merge_schedules: TxDescriptor<Anonymize<Ict9ivhr2c5hv0>>;
    };
    Scheduler: {
        /**
         *See [`Pallet::schedule`].
         */
        schedule: TxDescriptor<Anonymize<I7kbs6obd7pstn>>;
        /**
         *See [`Pallet::cancel`].
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *See [`Pallet::schedule_named`].
         */
        schedule_named: TxDescriptor<Anonymize<I2k4ud9u51f7rm>>;
        /**
         *See [`Pallet::cancel_named`].
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
         *See [`Pallet::schedule_after`].
         */
        schedule_after: TxDescriptor<Anonymize<Icj0lvb4va50a9>>;
        /**
         *See [`Pallet::schedule_named_after`].
         */
        schedule_named_after: TxDescriptor<Anonymize<I8kbubdhufokf8>>;
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
    XcmpQueue: {
        /**
         *See [`Pallet::service_overweight`].
         */
        service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
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
        /**
         *See [`Pallet::update_threshold_weight`].
         */
        update_threshold_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
        /**
         *See [`Pallet::update_weight_restrict_decay`].
         */
        update_weight_restrict_decay: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
        /**
         *See [`Pallet::update_xcmp_max_individual_weight`].
         */
        update_xcmp_max_individual_weight: TxDescriptor<Anonymize<I2tni7rrb2buqm>>;
    };
    DmpQueue: {
        /**
         *See [`Pallet::service_overweight`].
         */
        service_overweight: TxDescriptor<Anonymize<Iab1retd4gg4q1>>;
    };
    PolkadotXcm: {
        /**
         *See [`Pallet::send`].
         */
        send: TxDescriptor<Anonymize<I177omkp0t3av4>>;
        /**
         *See [`Pallet::teleport_assets`].
         */
        teleport_assets: TxDescriptor<Anonymize<I561t4i7oneora>>;
        /**
         *See [`Pallet::reserve_transfer_assets`].
         */
        reserve_transfer_assets: TxDescriptor<Anonymize<I561t4i7oneora>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<Ia8um7upnt2t99>>;
        /**
         *See [`Pallet::force_xcm_version`].
         */
        force_xcm_version: TxDescriptor<Anonymize<I44pbivm2pe7qc>>;
        /**
         *See [`Pallet::force_default_xcm_version`].
         */
        force_default_xcm_version: TxDescriptor<Anonymize<Ic76kfh5ebqkpl>>;
        /**
         *See [`Pallet::force_subscribe_version_notify`].
         */
        force_subscribe_version_notify: TxDescriptor<Anonymize<I8nm9vc7o6er85>>;
        /**
         *See [`Pallet::force_unsubscribe_version_notify`].
         */
        force_unsubscribe_version_notify: TxDescriptor<Anonymize<I8nm9vc7o6er85>>;
        /**
         *See [`Pallet::limited_reserve_transfer_assets`].
         */
        limited_reserve_transfer_assets: TxDescriptor<Anonymize<I5up1l6nq7b3hn>>;
        /**
         *See [`Pallet::limited_teleport_assets`].
         */
        limited_teleport_assets: TxDescriptor<Anonymize<I5up1l6nq7b3hn>>;
        /**
         *See [`Pallet::force_suspension`].
         */
        force_suspension: TxDescriptor<Anonymize<Ibgm4rnf22lal1>>;
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
    };
    Assets: {
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<Ic357tcepuvo5c>>;
        /**
         *See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I2rnoam876ruhj>>;
        /**
         *See [`Pallet::start_destroy`].
         */
        start_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::destroy_accounts`].
         */
        destroy_accounts: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::destroy_approvals`].
         */
        destroy_approvals: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::finish_destroy`].
         */
        finish_destroy: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<Ib3qnc19gu633c>>;
        /**
         *See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<Ifira6u9hi7cu1>>;
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *See [`Pallet::transfer_keep_alive`].
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I72tqocvdoqfff>>;
        /**
         *See [`Pallet::force_transfer`].
         */
        force_transfer: TxDescriptor<Anonymize<I2i27f3sfmvc05>>;
        /**
         *See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *See [`Pallet::freeze_asset`].
         */
        freeze_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::thaw_asset`].
         */
        thaw_asset: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<I3abtumcmempjs>>;
        /**
         *See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<Id81m8flopt8ha>>;
        /**
         *See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<I8hff7chabggkd>>;
        /**
         *See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::force_set_metadata`].
         */
        force_set_metadata: TxDescriptor<Anonymize<I49i39mtj1ivbs>>;
        /**
         *See [`Pallet::force_clear_metadata`].
         */
        force_clear_metadata: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::force_asset_status`].
         */
        force_asset_status: TxDescriptor<Anonymize<Ifkr2kcak2vto1>>;
        /**
         *See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<I1ju6r8q0cs9jt>>;
        /**
         *See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<I4kpeq6j7cd5bu>>;
        /**
         *See [`Pallet::force_cancel_approval`].
         */
        force_cancel_approval: TxDescriptor<Anonymize<I5na1ka76k6811>>;
        /**
         *See [`Pallet::transfer_approved`].
         */
        transfer_approved: TxDescriptor<Anonymize<I59mhdb9omdqfa>>;
        /**
         *See [`Pallet::touch`].
         */
        touch: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::refund`].
         */
        refund: TxDescriptor<Anonymize<I9vl5kpk0fpakt>>;
        /**
         *See [`Pallet::set_min_balance`].
         */
        set_min_balance: TxDescriptor<Anonymize<I717jt61hu19b4>>;
        /**
         *See [`Pallet::touch_other`].
         */
        touch_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *See [`Pallet::refund_other`].
         */
        refund_other: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
        /**
         *See [`Pallet::block`].
         */
        block: TxDescriptor<Anonymize<I1nlrtd1epki2d>>;
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
    Identity: {
        /**
         *See [`Pallet::add_registrar`].
         */
        add_registrar: TxDescriptor<Anonymize<Ic6cqd9g0t65v0>>;
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
        delegate: TxDescriptor<Anonymize<Ibot4i7a9t6oo8>>;
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
        unlock: TxDescriptor<Anonymize<Id9uqtigc0il3v>>;
        /**
         *See [`Pallet::remove_vote`].
         */
        remove_vote: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *See [`Pallet::remove_other_vote`].
         */
        remove_other_vote: TxDescriptor<Anonymize<I3hsuol7rtl0bj>>;
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
    };
    Council: {
        /**
         *See [`Pallet::set_members`].
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<I4hmsdfa39av1f>>;
        /**
         *See [`Pallet::propose`].
         */
        propose: TxDescriptor<Anonymize<I1sq2b4jsjfck0>>;
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
    Treasury: {
        /**
         *See [`Pallet::propose_spend`].
         */
        propose_spend: TxDescriptor<Anonymize<Iffcutbjvs7mcv>>;
        /**
         *See [`Pallet::reject_proposal`].
         */
        reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *See [`Pallet::approve_proposal`].
         */
        approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *See [`Pallet::spend`].
         */
        spend: TxDescriptor<Anonymize<Icnrv1mfbd3in1>>;
        /**
         *See [`Pallet::remove_approval`].
         */
        remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
    };
    Bounties: {
        /**
         *See [`Pallet::propose_bounty`].
         */
        propose_bounty: TxDescriptor<Anonymize<I2a839vbf5817q>>;
        /**
         *See [`Pallet::approve_bounty`].
         */
        approve_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
         *See [`Pallet::propose_curator`].
         */
        propose_curator: TxDescriptor<Anonymize<I42bqh279uf7oa>>;
        /**
         *See [`Pallet::unassign_curator`].
         */
        unassign_curator: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
         *See [`Pallet::accept_curator`].
         */
        accept_curator: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
         *See [`Pallet::award_bounty`].
         */
        award_bounty: TxDescriptor<Anonymize<I4p6v96cffstms>>;
        /**
         *See [`Pallet::claim_bounty`].
         */
        claim_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
         *See [`Pallet::close_bounty`].
         */
        close_bounty: TxDescriptor<Anonymize<Ia9p5bg6p18r0i>>;
        /**
         *See [`Pallet::extend_bounty_expiry`].
         */
        extend_bounty_expiry: TxDescriptor<Anonymize<I90n6nnkpdahrh>>;
    };
    Lottery: {
        /**
         *See [`Pallet::buy_ticket`].
         */
        buy_ticket: TxDescriptor<Anonymize<Iah01oofl8tuo9>>;
        /**
         *See [`Pallet::set_calls`].
         */
        set_calls: TxDescriptor<Anonymize<I6d5372cq6g7rp>>;
        /**
         *See [`Pallet::start_lottery`].
         */
        start_lottery: TxDescriptor<Anonymize<Iacbtv7bdkku2a>>;
        /**
         *See [`Pallet::stop_repeat`].
         */
        stop_repeat: TxDescriptor<undefined>;
    };
    TechnicalCommittee: {
        /**
         *See [`Pallet::set_members`].
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *See [`Pallet::execute`].
         */
        execute: TxDescriptor<Anonymize<I4hmsdfa39av1f>>;
        /**
         *See [`Pallet::propose`].
         */
        propose: TxDescriptor<Anonymize<I1sq2b4jsjfck0>>;
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
    TechnicalMembership: {
        /**
         *See [`Pallet::add_member`].
         */
        add_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *See [`Pallet::remove_member`].
         */
        remove_member: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *See [`Pallet::swap_member`].
         */
        swap_member: TxDescriptor<Anonymize<I4u4n2na1l5uo7>>;
        /**
         *See [`Pallet::reset_members`].
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *See [`Pallet::change_key`].
         */
        change_key: TxDescriptor<Anonymize<I8k3rnvpeeh4hv>>;
        /**
         *See [`Pallet::set_prime`].
         */
        set_prime: TxDescriptor<Anonymize<I59bngqm85b22v>>;
        /**
         *See [`Pallet::clear_prime`].
         */
        clear_prime: TxDescriptor<undefined>;
    };
    PhragmenElection: {
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
        remove_member: TxDescriptor<Anonymize<I6tk7rk1nnjhlp>>;
        /**
         *See [`Pallet::clean_defunct_voters`].
         */
        clean_defunct_voters: TxDescriptor<Anonymize<I6fuug4i4r04hi>>;
    };
    Tips: {
        /**
         *See [`Pallet::report_awesome`].
         */
        report_awesome: TxDescriptor<Anonymize<I4rh6l1hlna3ip>>;
        /**
         *See [`Pallet::retract_tip`].
         */
        retract_tip: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *See [`Pallet::tip_new`].
         */
        tip_new: TxDescriptor<Anonymize<I5v1ok3nh6vhmm>>;
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
    ChildBounties: {
        /**
         *See [`Pallet::add_child_bounty`].
         */
        add_child_bounty: TxDescriptor<Anonymize<I8mk5kjgn02hi8>>;
        /**
         *See [`Pallet::propose_curator`].
         */
        propose_curator: TxDescriptor<Anonymize<Ieqvq91sbe02ko>>;
        /**
         *See [`Pallet::accept_curator`].
         */
        accept_curator: TxDescriptor<Anonymize<I2gr10p66od9ch>>;
        /**
         *See [`Pallet::unassign_curator`].
         */
        unassign_curator: TxDescriptor<Anonymize<I2gr10p66od9ch>>;
        /**
         *See [`Pallet::award_child_bounty`].
         */
        award_child_bounty: TxDescriptor<Anonymize<I9mcq66cm3gibo>>;
        /**
         *See [`Pallet::claim_child_bounty`].
         */
        claim_child_bounty: TxDescriptor<Anonymize<I2gr10p66od9ch>>;
        /**
         *See [`Pallet::close_child_bounty`].
         */
        close_child_bounty: TxDescriptor<Anonymize<I2gr10p66od9ch>>;
    };
    ChainBridge: {
        /**
         *See [`Pallet::set_threshold`].
         */
        set_threshold: TxDescriptor<Anonymize<I9pfbl6m798rk2>>;
        /**
         *See [`Pallet::whitelist_chain`].
         */
        whitelist_chain: TxDescriptor<Anonymize<Ic5b47dj4coa3r>>;
        /**
         *See [`Pallet::add_relayer`].
         */
        add_relayer: TxDescriptor<Anonymize<Ibmkshvkdhh06f>>;
        /**
         *See [`Pallet::remove_relayer`].
         */
        remove_relayer: TxDescriptor<Anonymize<Ibmkshvkdhh06f>>;
        /**
         *See [`Pallet::update_fee`].
         */
        update_fee: TxDescriptor<Anonymize<I9p8b8lamchikq>>;
        /**
         *See [`Pallet::acknowledge_proposal`].
         */
        acknowledge_proposal: TxDescriptor<Anonymize<Ibd6glo8oakrtd>>;
        /**
         *See [`Pallet::reject_proposal`].
         */
        reject_proposal: TxDescriptor<Anonymize<Ibd6glo8oakrtd>>;
        /**
         *See [`Pallet::eval_vote_state`].
         */
        eval_vote_state: TxDescriptor<Anonymize<I7mker2n05rfmr>>;
        /**
         *See [`Pallet::handle_fungible_transfer`].
         */
        handle_fungible_transfer: TxDescriptor<Anonymize<I9md9er0ggas34>>;
    };
    XTransfer: {
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<I1t41l2dqbt5j1>>;
        /**
         *See [`Pallet::transfer_generic`].
         */
        transfer_generic: TxDescriptor<Anonymize<I5lo526po2gedr>>;
    };
    AssetsRegistry: {
        /**
         *See [`Pallet::force_withdraw_fund`].
         */
        force_withdraw_fund: TxDescriptor<Anonymize<Idfhfc170a4ugb>>;
        /**
         *See [`Pallet::force_register_asset`].
         */
        force_register_asset: TxDescriptor<Anonymize<I1dbabrrad6gor>>;
        /**
         *See [`Pallet::force_unregister_asset`].
         */
        force_unregister_asset: TxDescriptor<Anonymize<Ia5le7udkgbaq9>>;
        /**
         *See [`Pallet::force_set_metadata`].
         */
        force_set_metadata: TxDescriptor<Anonymize<Ifs4cp5rg3k9nc>>;
        /**
         *See [`Pallet::force_mint`].
         */
        force_mint: TxDescriptor<Anonymize<Ifvtjt50q884bb>>;
        /**
         *See [`Pallet::force_burn`].
         */
        force_burn: TxDescriptor<Anonymize<Idusmq77988cmt>>;
        /**
         *See [`Pallet::force_set_price`].
         */
        force_set_price: TxDescriptor<Anonymize<I3pgrm00u7fff4>>;
        /**
         *See [`Pallet::force_set_location`].
         */
        force_set_location: TxDescriptor<Anonymize<I8p40dt899dtuq>>;
        /**
         *See [`Pallet::force_enable_chainbridge`].
         */
        force_enable_chainbridge: TxDescriptor<Anonymize<I32b0jhgrkml07>>;
        /**
         *See [`Pallet::force_disable_chainbridge`].
         */
        force_disable_chainbridge: TxDescriptor<Anonymize<I98387i4qus0q0>>;
        /**
         *See [`Pallet::force_enable_sygmabridge`].
         */
        force_enable_sygmabridge: TxDescriptor<Anonymize<I9r8hk2r0veiqk>>;
        /**
         *See [`Pallet::force_disable_sygmabridge`].
         */
        force_disable_sygmabridge: TxDescriptor<Anonymize<Ic93n0cje721n3>>;
    };
    PhalaMq: {
        /**
         *See [`Pallet::sync_offchain_message`].
         */
        sync_offchain_message: TxDescriptor<Anonymize<I4ej0varlqk27n>>;
        /**
         *See [`Pallet::push_message`].
         */
        push_message: TxDescriptor<Anonymize<I8aufv2kktips8>>;
        /**
         *See [`Pallet::force_push_pallet_message`].
         */
        force_push_pallet_message: TxDescriptor<Anonymize<I8aufv2kktips8>>;
    };
    PhalaRegistry: {
        /**
         *See [`Pallet::force_set_benchmark_duration`].
         */
        force_set_benchmark_duration: TxDescriptor<Anonymize<Icnkee0to4c5ac>>;
        /**
         *See [`Pallet::force_register_worker`].
         */
        force_register_worker: TxDescriptor<Anonymize<Ifojc0u4m3uvm3>>;
        /**
         *See [`Pallet::force_register_topic_pubkey`].
         */
        force_register_topic_pubkey: TxDescriptor<Anonymize<Ibj6p2qmre1slv>>;
        /**
         *See [`Pallet::register_gatekeeper`].
         */
        register_gatekeeper: TxDescriptor<Anonymize<I77s95qt6vtede>>;
        /**
         *See [`Pallet::unregister_gatekeeper`].
         */
        unregister_gatekeeper: TxDescriptor<Anonymize<I77s95qt6vtede>>;
        /**
         *See [`Pallet::rotate_master_key`].
         */
        rotate_master_key: TxDescriptor<undefined>;
        /**
         *See [`Pallet::register_worker`].
         */
        register_worker: TxDescriptor<Anonymize<I1ur2rlach980v>>;
        /**
         *See [`Pallet::register_worker_v2`].
         */
        register_worker_v2: TxDescriptor<Anonymize<I4djmoborcve41>>;
        /**
         *See [`Pallet::update_worker_endpoint`].
         */
        update_worker_endpoint: TxDescriptor<Anonymize<I76icl3jdndgc3>>;
        /**
         *See [`Pallet::add_pruntime`].
         */
        add_pruntime: TxDescriptor<Anonymize<Ibd9squo71c5pa>>;
        /**
         *See [`Pallet::remove_pruntime`].
         */
        remove_pruntime: TxDescriptor<Anonymize<Ibd9squo71c5pa>>;
        /**
         *See [`Pallet::add_relaychain_genesis_block_hash`].
         */
        add_relaychain_genesis_block_hash: TxDescriptor<Anonymize<Ife5k0e5mpkhd2>>;
        /**
         *See [`Pallet::remove_relaychain_genesis_block_hash`].
         */
        remove_relaychain_genesis_block_hash: TxDescriptor<Anonymize<Ife5k0e5mpkhd2>>;
        /**
         *See [`Pallet::set_minimum_pruntime_version`].
         */
        set_minimum_pruntime_version: TxDescriptor<Anonymize<I8dq28qkmijvoe>>;
        /**
         *See [`Pallet::set_pruntime_consensus_version`].
         */
        set_pruntime_consensus_version: TxDescriptor<Anonymize<I6s1nbislhk619>>;
    };
    PhalaComputation: {
        /**
         *See [`Pallet::set_cool_down_expiration`].
         */
        set_cool_down_expiration: TxDescriptor<Anonymize<Iffvohb3t8h71u>>;
        /**
         *See [`Pallet::unbind`].
         */
        unbind: TxDescriptor<Anonymize<I947um9nhnghi1>>;
        /**
         *See [`Pallet::force_heartbeat`].
         */
        force_heartbeat: TxDescriptor<undefined>;
        /**
         *See [`Pallet::force_start_computing`].
         */
        force_start_computing: TxDescriptor<Anonymize<I7rou92jg5lvkv>>;
        /**
         *See [`Pallet::force_stop_computing`].
         */
        force_stop_computing: TxDescriptor<Anonymize<I947um9nhnghi1>>;
        /**
         *See [`Pallet::update_tokenomic`].
         */
        update_tokenomic: TxDescriptor<Anonymize<I99b3k55ooqgai>>;
        /**
         *See [`Pallet::set_heartbeat_paused`].
         */
        set_heartbeat_paused: TxDescriptor<Anonymize<I66q98ur9ul454>>;
        /**
         *See [`Pallet::set_budget_per_block`].
         */
        set_budget_per_block: TxDescriptor<Anonymize<If1d2pnfu9k0hv>>;
        /**
         *See [`Pallet::update_contract_root`].
         */
        update_contract_root: TxDescriptor<Anonymize<I6v8sm60vvkmk7>>;
    };
    PhalaStakePoolv2: {
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<undefined>;
        /**
         *See [`Pallet::add_worker`].
         */
        add_worker: TxDescriptor<Anonymize<Ivuka4fpegqab>>;
        /**
         *See [`Pallet::remove_worker`].
         */
        remove_worker: TxDescriptor<Anonymize<I573qjpa7bj77k>>;
        /**
         *See [`Pallet::set_cap`].
         */
        set_cap: TxDescriptor<Anonymize<Ibfm3gehrtppo6>>;
        /**
         *See [`Pallet::set_payout_pref`].
         */
        set_payout_pref: TxDescriptor<Anonymize<I7is3ul3rohkhb>>;
        /**
         *See [`Pallet::claim_legacy_rewards`].
         */
        claim_legacy_rewards: TxDescriptor<Anonymize<Ieari17laupqqv>>;
        /**
         *See [`Pallet::claim_owner_rewards`].
         */
        claim_owner_rewards: TxDescriptor<Anonymize<Ieari17laupqqv>>;
        /**
         *See [`Pallet::check_and_maybe_force_withdraw`].
         */
        check_and_maybe_force_withdraw: TxDescriptor<Anonymize<Ibihfmtr4nutgv>>;
        /**
         *See [`Pallet::contribute`].
         */
        contribute: TxDescriptor<Anonymize<I28a39o0noo9cs>>;
        /**
         *See [`Pallet::withdraw`].
         */
        withdraw: TxDescriptor<Anonymize<I6mppljttce685>>;
        /**
         *See [`Pallet::start_computing`].
         */
        start_computing: TxDescriptor<Anonymize<I7egjhl0mn1j4l>>;
        /**
         *See [`Pallet::stop_computing`].
         */
        stop_computing: TxDescriptor<Anonymize<I573qjpa7bj77k>>;
        /**
         *See [`Pallet::reclaim_pool_worker`].
         */
        reclaim_pool_worker: TxDescriptor<Anonymize<I573qjpa7bj77k>>;
        /**
         *See [`Pallet::restart_computing`].
         */
        restart_computing: TxDescriptor<Anonymize<I7egjhl0mn1j4l>>;
    };
    PhalaVault: {
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<undefined>;
        /**
         *See [`Pallet::set_payout_pref`].
         */
        set_payout_pref: TxDescriptor<Anonymize<I7is3ul3rohkhb>>;
        /**
         *See [`Pallet::claim_owner_shares`].
         */
        claim_owner_shares: TxDescriptor<Anonymize<I7nuotcce43q45>>;
        /**
         *See [`Pallet::maybe_gain_owner_shares`].
         */
        maybe_gain_owner_shares: TxDescriptor<Anonymize<Ibhr0o5fchkus0>>;
        /**
         *See [`Pallet::check_and_maybe_force_withdraw`].
         */
        check_and_maybe_force_withdraw: TxDescriptor<Anonymize<Ibhr0o5fchkus0>>;
        /**
         *See [`Pallet::contribute`].
         */
        contribute: TxDescriptor<Anonymize<I6bpho1qciu1vq>>;
        /**
         *See [`Pallet::withdraw`].
         */
        withdraw: TxDescriptor<Anonymize<I9ge3l8s7gjron>>;
    };
    PhalaWrappedBalances: {
        /**
         *See [`Pallet::wrap`].
         */
        wrap: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *See [`Pallet::unwrap_all`].
         */
        unwrap_all: TxDescriptor<undefined>;
        /**
         *See [`Pallet::unwrap`].
         */
        unwrap: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *See [`Pallet::vote`].
         */
        vote: TxDescriptor<Anonymize<Ie64b2bdu3uou9>>;
        /**
         *See [`Pallet::unlock`].
         */
        unlock: TxDescriptor<Anonymize<I4nhnnt51clo6>>;
    };
    PhalaBasePool: {
        /**
         *See [`Pallet::add_staker_to_whitelist`].
         */
        add_staker_to_whitelist: TxDescriptor<Anonymize<If8bcs63vv4eft>>;
        /**
         *See [`Pallet::set_pool_description`].
         */
        set_pool_description: TxDescriptor<Anonymize<Icv39e87t78khf>>;
        /**
         *See [`Pallet::remove_staker_from_whitelist`].
         */
        remove_staker_from_whitelist: TxDescriptor<Anonymize<If8bcs63vv4eft>>;
        /**
         *See [`Pallet::claim_reimbursement`].
         */
        claim_reimbursement: TxDescriptor<Anonymize<Ieari17laupqqv>>;
        /**
         *See [`Pallet::set_reimbursements`].
         */
        set_reimbursements: TxDescriptor<Anonymize<I3cucnpdvg2uaf>>;
    };
    PhalaPhatContracts: {
        /**
         *See [`Pallet::add_cluster`].
         */
        add_cluster: TxDescriptor<Anonymize<I7p2tv37l911cg>>;
        /**
         *See [`Pallet::cluster_upload_resource`].
         */
        cluster_upload_resource: TxDescriptor<Anonymize<Iah5k3ggvcdj9j>>;
        /**
         *See [`Pallet::transfer_to_cluster`].
         */
        transfer_to_cluster: TxDescriptor<Anonymize<Ilfjnkdvr6eb2>>;
        /**
         *See [`Pallet::push_contract_message`].
         */
        push_contract_message: TxDescriptor<Anonymize<Ibqbi21r6gl2kt>>;
        /**
         *See [`Pallet::instantiate_contract`].
         */
        instantiate_contract: TxDescriptor<Anonymize<Ieh4ftquu8iia3>>;
        /**
         *See [`Pallet::cluster_destroy`].
         */
        cluster_destroy: TxDescriptor<Anonymize<Ics9h14l9rgrav>>;
        /**
         *See [`Pallet::set_pink_system_code`].
         */
        set_pink_system_code: TxDescriptor<Anonymize<I6pjjpfvhvcfru>>;
        /**
         *See [`Pallet::set_pink_runtime_version`].
         */
        set_pink_runtime_version: TxDescriptor<Anonymize<I1faoarphn2s32>>;
        /**
         *See [`Pallet::add_worker_to_cluster`].
         */
        add_worker_to_cluster: TxDescriptor<Anonymize<I2jh8ggfgmkeo0>>;
        /**
         *See [`Pallet::remove_worker_from_cluster`].
         */
        remove_worker_from_cluster: TxDescriptor<Anonymize<I2jh8ggfgmkeo0>>;
        /**
         *See [`Pallet::cleanup_removed_workers`].
         */
        cleanup_removed_workers: TxDescriptor<Anonymize<Iabj7fklqpbosu>>;
    };
    PhalaPhatTokenomic: {
        /**
         *See [`Pallet::adjust_stake`].
         */
        adjust_stake: TxDescriptor<Anonymize<Ic312np0jtnd0o>>;
    };
    Uniques: {
        /**
         *See [`Pallet::create`].
         */
        create: TxDescriptor<Anonymize<If66ivi02f7256>>;
        /**
         *See [`Pallet::force_create`].
         */
        force_create: TxDescriptor<Anonymize<I223jtcatlfkrc>>;
        /**
         *See [`Pallet::destroy`].
         */
        destroy: TxDescriptor<Anonymize<I223jg78mng8hq>>;
        /**
         *See [`Pallet::mint`].
         */
        mint: TxDescriptor<Anonymize<I4iiuiftkpq3fd>>;
        /**
         *See [`Pallet::burn`].
         */
        burn: TxDescriptor<Anonymize<Ibra6533h92c0a>>;
        /**
         *See [`Pallet::transfer`].
         */
        transfer: TxDescriptor<Anonymize<Ibgvkh96s68a66>>;
        /**
         *See [`Pallet::redeposit`].
         */
        redeposit: TxDescriptor<Anonymize<If9vko7pv0231m>>;
        /**
         *See [`Pallet::freeze`].
         */
        freeze: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *See [`Pallet::thaw`].
         */
        thaw: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *See [`Pallet::freeze_collection`].
         */
        freeze_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *See [`Pallet::thaw_collection`].
         */
        thaw_collection: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *See [`Pallet::transfer_ownership`].
         */
        transfer_ownership: TxDescriptor<Anonymize<Ie5i0q2glmr0md>>;
        /**
         *See [`Pallet::set_team`].
         */
        set_team: TxDescriptor<Anonymize<I1ap9tlenhr44l>>;
        /**
         *See [`Pallet::approve_transfer`].
         */
        approve_transfer: TxDescriptor<Anonymize<Ib92t90p616grb>>;
        /**
         *See [`Pallet::cancel_approval`].
         */
        cancel_approval: TxDescriptor<Anonymize<Ieipuujd6879do>>;
        /**
         *See [`Pallet::force_item_status`].
         */
        force_item_status: TxDescriptor<Anonymize<Ie56eq9sg1rsoc>>;
        /**
         *See [`Pallet::set_attribute`].
         */
        set_attribute: TxDescriptor<Anonymize<I5tvvgui05tn6e>>;
        /**
         *See [`Pallet::clear_attribute`].
         */
        clear_attribute: TxDescriptor<Anonymize<Ibal0joadvdc2h>>;
        /**
         *See [`Pallet::set_metadata`].
         */
        set_metadata: TxDescriptor<Anonymize<Iceq9fmmp9aeqv>>;
        /**
         *See [`Pallet::clear_metadata`].
         */
        clear_metadata: TxDescriptor<Anonymize<Iafkqus0ohh6l6>>;
        /**
         *See [`Pallet::set_collection_metadata`].
         */
        set_collection_metadata: TxDescriptor<Anonymize<I9viqhmdtuof5e>>;
        /**
         *See [`Pallet::clear_collection_metadata`].
         */
        clear_collection_metadata: TxDescriptor<Anonymize<I6cu7obfo0rr0o>>;
        /**
         *See [`Pallet::set_accept_ownership`].
         */
        set_accept_ownership: TxDescriptor<Anonymize<Ibqooroq6rr5kr>>;
        /**
         *See [`Pallet::set_collection_max_supply`].
         */
        set_collection_max_supply: TxDescriptor<Anonymize<I6h88h8vba22v8>>;
        /**
         *See [`Pallet::set_price`].
         */
        set_price: TxDescriptor<Anonymize<Ia9cd4jqb5eecb>>;
        /**
         *See [`Pallet::buy_item`].
         */
        buy_item: TxDescriptor<Anonymize<I19jiel1ftbcce>>;
    };
    RmrkCore: {
        /**
         *See [`Pallet::mint_nft`].
         */
        mint_nft: TxDescriptor<Anonymize<I8uhqcv2tbpaul>>;
        /**
         *See [`Pallet::mint_nft_directly_to_nft`].
         */
        mint_nft_directly_to_nft: TxDescriptor<Anonymize<Ialemosrn6f6v>>;
        /**
         *See [`Pallet::create_collection`].
         */
        create_collection: TxDescriptor<Anonymize<I2bf315tpln3ie>>;
        /**
         *See [`Pallet::burn_nft`].
         */
        burn_nft: TxDescriptor<Anonymize<Idap45qa17pms2>>;
        /**
         *See [`Pallet::destroy_collection`].
         */
        destroy_collection: TxDescriptor<Anonymize<I9m43jftr52of7>>;
        /**
         *See [`Pallet::send`].
         */
        send: TxDescriptor<Anonymize<Ied59p4g9emfn>>;
        /**
         *See [`Pallet::accept_nft`].
         */
        accept_nft: TxDescriptor<Anonymize<Ied59p4g9emfn>>;
        /**
         *See [`Pallet::reject_nft`].
         */
        reject_nft: TxDescriptor<Anonymize<Idap45qa17pms2>>;
        /**
         *See [`Pallet::change_collection_issuer`].
         */
        change_collection_issuer: TxDescriptor<Anonymize<I715u7ss17c7t>>;
        /**
         *See [`Pallet::set_property`].
         */
        set_property: TxDescriptor<Anonymize<I7of83qrfaioip>>;
        /**
         *See [`Pallet::lock_collection`].
         */
        lock_collection: TxDescriptor<Anonymize<I9m43jftr52of7>>;
        /**
         *See [`Pallet::add_basic_resource`].
         */
        add_basic_resource: TxDescriptor<Anonymize<Ibsv4ivp1dg0u4>>;
        /**
         *See [`Pallet::add_composable_resource`].
         */
        add_composable_resource: TxDescriptor<Anonymize<Ibau3aourms2ev>>;
        /**
         *See [`Pallet::add_slot_resource`].
         */
        add_slot_resource: TxDescriptor<Anonymize<Ibku9o3184ad8p>>;
        /**
         *See [`Pallet::replace_resource`].
         */
        replace_resource: TxDescriptor<Anonymize<I6kkm2uudo9ubv>>;
        /**
         *See [`Pallet::accept_resource`].
         */
        accept_resource: TxDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
         *See [`Pallet::remove_resource`].
         */
        remove_resource: TxDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
         *See [`Pallet::accept_resource_removal`].
         */
        accept_resource_removal: TxDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
         *See [`Pallet::set_priority`].
         */
        set_priority: TxDescriptor<Anonymize<Ib60g2h688gk1p>>;
    };
    RmrkEquip: {
        /**
         *See [`Pallet::change_base_issuer`].
         */
        change_base_issuer: TxDescriptor<Anonymize<Idj4ot80o5e11t>>;
        /**
         *See [`Pallet::equip`].
         */
        equip: TxDescriptor<Anonymize<I7sm7g1ejv0h1q>>;
        /**
         *See [`Pallet::unequip`].
         */
        unequip: TxDescriptor<Anonymize<I6mqoemo8r3tqu>>;
        /**
         *See [`Pallet::equippable`].
         */
        equippable: TxDescriptor<Anonymize<Iclrcvqgva5chh>>;
        /**
         *See [`Pallet::equippable_add`].
         */
        equippable_add: TxDescriptor<Anonymize<Ifkdal1nu7d0oc>>;
        /**
         *See [`Pallet::equippable_remove`].
         */
        equippable_remove: TxDescriptor<Anonymize<Ifkdal1nu7d0oc>>;
        /**
         *See [`Pallet::theme_add`].
         */
        theme_add: TxDescriptor<Anonymize<I397r94a4pub9e>>;
        /**
         *See [`Pallet::create_base`].
         */
        create_base: TxDescriptor<Anonymize<I4sv46pqslbnlv>>;
    };
    RmrkMarket: {
        /**
         *See [`Pallet::buy`].
         */
        buy: TxDescriptor<Anonymize<I3q4fduif2p624>>;
        /**
         *See [`Pallet::list`].
         */
        list: TxDescriptor<Anonymize<I988hmt4l3b72b>>;
        /**
         *See [`Pallet::unlist`].
         */
        unlist: TxDescriptor<Anonymize<Idap45qa17pms2>>;
        /**
         *See [`Pallet::make_offer`].
         */
        make_offer: TxDescriptor<Anonymize<I988hmt4l3b72b>>;
        /**
         *See [`Pallet::withdraw_offer`].
         */
        withdraw_offer: TxDescriptor<Anonymize<Idap45qa17pms2>>;
        /**
         *See [`Pallet::accept_offer`].
         */
        accept_offer: TxDescriptor<Anonymize<Iev9giuq7lsi3o>>;
    };
    SygmaAccessSegregator: {
        /**
         *See [`Pallet::grant_access`].
         */
        grant_access: TxDescriptor<Anonymize<Iem1enf2fufb5v>>;
    };
    SygmaBasicFeeHandler: {
        /**
         *See [`Pallet::set_fee`].
         */
        set_fee: TxDescriptor<Anonymize<Ifp4t9o738p31f>>;
    };
    SygmaBridge: {
        /**
         *See [`Pallet::pause_bridge`].
         */
        pause_bridge: TxDescriptor<Anonymize<I4cdvg646kt2e0>>;
        /**
         *See [`Pallet::unpause_bridge`].
         */
        unpause_bridge: TxDescriptor<Anonymize<I4cdvg646kt2e0>>;
        /**
         *See [`Pallet::set_mpc_address`].
         */
        set_mpc_address: TxDescriptor<Anonymize<Idlg4l2qff953q>>;
        /**
         *See [`Pallet::register_domain`].
         */
        register_domain: TxDescriptor<Anonymize<I516q1duegu1bc>>;
        /**
         *See [`Pallet::unregister_domain`].
         */
        unregister_domain: TxDescriptor<Anonymize<I516q1duegu1bc>>;
        /**
         *See [`Pallet::deposit`].
         */
        deposit: TxDescriptor<Anonymize<Icpsl5uslfkju4>>;
        /**
         *See [`Pallet::retry`].
         */
        retry: TxDescriptor<Anonymize<I59qvdvbm7opmu>>;
        /**
         *See [`Pallet::execute_proposal`].
         */
        execute_proposal: TxDescriptor<Anonymize<I8e10h8p8npln5>>;
        /**
         *See [`Pallet::pause_all_bridges`].
         */
        pause_all_bridges: TxDescriptor<undefined>;
        /**
         *See [`Pallet::unpause_all_bridges`].
         */
        unpause_all_bridges: TxDescriptor<undefined>;
    };
    SygmaFeeHandlerRouter: {
        /**
         *See [`Pallet::set_fee_handler`].
         */
        set_fee_handler: TxDescriptor<Anonymize<I5j5chkhnfbh8j>>;
    };
    SygmaPercentageFeeHandler: {
        /**
         *See [`Pallet::set_fee_rate`].
         */
        set_fee_rate: TxDescriptor<Anonymize<I4a37j1kii1e1b>>;
    };
    PalletIndex: {
        /**
         *See [`Pallet::force_add_worker`].
         */
        force_add_worker: TxDescriptor<Anonymize<Iem2tclvr85h3e>>;
        /**
         *See [`Pallet::force_remove_worker`].
         */
        force_remove_worker: TxDescriptor<Anonymize<Iem2tclvr85h3e>>;
        /**
         *See [`Pallet::deposit_task`].
         */
        deposit_task: TxDescriptor<Anonymize<I5tq7j96upc637>>;
        /**
         *See [`Pallet::claim_task`].
         */
        claim_task: TxDescriptor<Anonymize<Ireognj60ejo1>>;
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<I1f4bk2e0gtk55>>;
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
    };
    Utility: {
        /**
         *Batch of dispatches did not complete fully. Index of first failing dispatch given, as
         *well as the error.
         */
        BatchInterrupted: PlainDescriptor<Anonymize<Ieu3q3iifakcb8>>;
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
        ItemFailed: PlainDescriptor<Anonymize<I8fs4df378mcpp>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<Iaec871uechrcf>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<Iddd9dh9c7bplc>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<Iaec871uechrcf>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<I3losnoicnf24b>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I222ob4fvnhvmb>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I222ob4fvnhvmb>>;
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
        Dispatched: PlainDescriptor<Anonymize<I2dam96ptgp9i4>>;
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
         *An upgrade has been authorized.
         */
        UpgradeAuthorized: PlainDescriptor<Anonymize<Ib51vk42m1po4n>>;
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
    XcmpQueue: {
        /**
         *Some XCM was executed ok.
         */
        Success: PlainDescriptor<Anonymize<I2650grdiibijj>>;
        /**
         *Some XCM failed.
         */
        Fail: PlainDescriptor<Anonymize<I5q96bb8stug61>>;
        /**
         *Bad XCM version used.
         */
        BadVersion: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         *Bad XCM format used.
         */
        BadFormat: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         *An HRMP message was sent to a sibling parachain.
         */
        XcmpMessageSent: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         *An XCM exceeded the individual message weight budget.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<If8b64mo2bodj0>>;
        /**
         *An XCM from the overweight queue was executed with the given actual weight used.
         */
        OverweightServiced: PlainDescriptor<Anonymize<Icu5p58ltu1veo>>;
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
        ExecutedDownward: PlainDescriptor<Anonymize<I2c8bkmorso999>>;
    };
    DmpQueue: {
        /**
         *Downward message is invalid XCM.
         */
        InvalidFormat: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         *Downward message is unsupported version of XCM.
         */
        UnsupportedVersion: PlainDescriptor<Anonymize<I137t1cld92pod>>;
        /**
         *Downward message executed with the given outcome.
         */
        ExecutedDownward: PlainDescriptor<Anonymize<I2gfpd8ikmku31>>;
        /**
         *The weight limit for handling downward messages was reached.
         */
        WeightExhausted: PlainDescriptor<Anonymize<Iadf1uv6agh6rp>>;
        /**
         *Downward message is overweight and was placed in the overweight queue.
         */
        OverweightEnqueued: PlainDescriptor<Anonymize<If4e6jvgfn13rl>>;
        /**
         *Downward message from the overweight queue was executed.
         */
        OverweightServiced: PlainDescriptor<Anonymize<Ise9gq7rqlnvm>>;
        /**
         *The maximum number of downward messages was reached.
         */
        MaxMessagesExhausted: PlainDescriptor<Anonymize<I137t1cld92pod>>;
    };
    PolkadotXcm: {
        /**
         *Execution of an XCM message was attempted.
         */
        Attempted: PlainDescriptor<Anonymize<Ifmqhv1oc3rh3>>;
        /**
         *A XCM message was sent.
         */
        Sent: PlainDescriptor<Anonymize<Ia37keupp0t7n6>>;
        /**
         *Query response received which does not match a registered query. This may be because a
         *matching query was never registered, it may be because it is a duplicate response, or
         *because the query timed out.
         */
        UnexpectedResponse: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         *Query response has been received and is ready for taking with `take_response`. There is
         *no registered notification call.
         */
        ResponseReady: PlainDescriptor<Anonymize<I9s1ksje8tscgp>>;
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
        InvalidResponder: PlainDescriptor<Anonymize<I6ama1doqn7ush>>;
        /**
         *Expected query response has been received but the expected origin location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidResponderVersion: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         *Received query response has been read and removed.
         */
        ResponseTaken: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
         *Some assets have been placed in an asset trap.
         */
        AssetsTrapped: PlainDescriptor<Anonymize<I2on6pi7n0k0ik>>;
        /**
         *An XCM version change notification message has been attempted to be sent.
         *
         *The cost of sending it (borne by the chain) is included.
         */
        VersionChangeNotified: PlainDescriptor<Anonymize<Iduq5i0c15rc0o>>;
        /**
         *The supported version of a location has been changed. This might be through an
         *automatic notification or a manual intervention.
         */
        SupportedVersionChanged: PlainDescriptor<Anonymize<I44pbivm2pe7qc>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *sending the notification to it.
         */
        NotifyTargetSendFail: PlainDescriptor<Anonymize<I75o78kjj6nl2u>>;
        /**
         *A given location which had a version change subscription was dropped owing to an error
         *migrating the location to our new XCM format.
         */
        NotifyTargetMigrationFail: PlainDescriptor<Anonymize<Ien06stpa519em>>;
        /**
         *Expected query response has been received but the expected querier location placed in
         *storage by this runtime previously cannot be decoded. The query remains registered.
         *
         *This is unexpected (since a location placed in storage in a previously executing
         *runtime should be readable prior to query timeout) and dangerous since the possibly
         *valid response will be dropped. Manual governance intervention is probably going to be
         *needed.
         */
        InvalidQuerierVersion: PlainDescriptor<Anonymize<Iel50id65eke1v>>;
        /**
         *Expected query response has been received but the querier location of the response does
         *not match the expected. The query remains registered for a later, valid, response to
         *be received and acted upon.
         */
        InvalidQuerier: PlainDescriptor<Anonymize<I13106a549td2f>>;
        /**
         *A remote has requested XCM version change notification from us and we have honored it.
         *A version information message is sent to them and its cost is included.
         */
        VersionNotifyStarted: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         *We have requested that a remote chain send us XCM version change notifications.
         */
        VersionNotifyRequested: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         *We have requested that a remote chain stops sending us XCM version change
         *notifications.
         */
        VersionNotifyUnrequested: PlainDescriptor<Anonymize<Icti9s23lkm0qj>>;
        /**
         *Fees were paid from a location for an operation (often for using `SendXcm`).
         */
        FeesPaid: PlainDescriptor<Anonymize<Iemrprej97cn2e>>;
        /**
         *Some assets have been claimed from an asset trap
         */
        AssetsClaimed: PlainDescriptor<Anonymize<I2on6pi7n0k0ik>>;
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
    };
    TransactionPayment: {
        /**
         *A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
         *has been paid by `who`.
         */
        TransactionFeePaid: PlainDescriptor<Anonymize<Ier2cke86dqbr2>>;
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
         *A candidate was removed.
         */
        CandidateRemoved: PlainDescriptor<Anonymize<I6v8sm60vvkmk7>>;
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
        Executed: PlainDescriptor<Anonymize<I7h7qtdsbfcb4v>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I7h7qtdsbfcb4v>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
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
    };
    Bounties: {
        /**
         *New bounty proposal.
         */
        BountyProposed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A bounty proposal was rejected; funds were slashed.
         */
        BountyRejected: PlainDescriptor<Anonymize<Id9idaj83175f9>>;
        /**
         *A bounty proposal is funded and became active.
         */
        BountyBecameActive: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A bounty is awarded to a beneficiary.
         */
        BountyAwarded: PlainDescriptor<Anonymize<Ie1semicfuv5uu>>;
        /**
         *A bounty is claimed by beneficiary.
         */
        BountyClaimed: PlainDescriptor<Anonymize<If25fjs9o37co1>>;
        /**
         *A bounty is cancelled.
         */
        BountyCanceled: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A bounty expiry is extended.
         */
        BountyExtended: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Lottery: {
        /**
         *A lottery has been started!
         */
        LotteryStarted: PlainDescriptor<undefined>;
        /**
         *A new set of calls have been set!
         */
        CallsUpdated: PlainDescriptor<undefined>;
        /**
         *A winner has been chosen!
         */
        Winner: PlainDescriptor<Anonymize<Idtfinpnsamten>>;
        /**
         *A ticket has been bought!
         */
        TicketBought: PlainDescriptor<Anonymize<I455dk0vr5anih>>;
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
        Executed: PlainDescriptor<Anonymize<I7h7qtdsbfcb4v>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I7h7qtdsbfcb4v>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
    };
    TechnicalMembership: {
        /**
         *The given member was added; see the transaction for who.
         */
        MemberAdded: PlainDescriptor<undefined>;
        /**
         *The given member was removed; see the transaction for who.
         */
        MemberRemoved: PlainDescriptor<undefined>;
        /**
         *Two members were swapped; see the transaction for who.
         */
        MembersSwapped: PlainDescriptor<undefined>;
        /**
         *The membership was reset; see the transaction for who the new set is.
         */
        MembersReset: PlainDescriptor<undefined>;
        /**
         *One of the members' keys changed.
         */
        KeyChanged: PlainDescriptor<undefined>;
        /**
         *Phantom member, never used.
         */
        Dummy: PlainDescriptor<undefined>;
    };
    PhragmenElection: {
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
    ChildBounties: {
        /**
         *A child-bounty is added.
         */
        Added: PlainDescriptor<Anonymize<I60p8l86a8cm59>>;
        /**
         *A child-bounty is awarded to a beneficiary.
         */
        Awarded: PlainDescriptor<Anonymize<I3m3sk2lgcabvp>>;
        /**
         *A child-bounty is claimed by beneficiary.
         */
        Claimed: PlainDescriptor<Anonymize<I5pf572duh4oeg>>;
        /**
         *A child-bounty is cancelled.
         */
        Canceled: PlainDescriptor<Anonymize<I60p8l86a8cm59>>;
    };
    ChainBridge: {
        /**
         *Vote threshold has changed (new_threshold)
         */
        RelayerThresholdChanged: PlainDescriptor<number>;
        /**
         *Chain now available for transfers (chain_id)
         */
        ChainWhitelisted: PlainDescriptor<number>;
        /**
         *Relayer added to set
         */
        RelayerAdded: PlainDescriptor<SS58String>;
        /**
         *Relayer removed from set
         */
        RelayerRemoved: PlainDescriptor<SS58String>;
        /**
         *FungibleTransfer is for relaying fungibles (dest_id, nonce, resource_id, amount, recipient)
         */
        FungibleTransfer: PlainDescriptor<Anonymize<I6o5gj873rg52t>>;
        /**
         *NonFungibleTransfer is for relaying NFTs (dest_id, nonce, resource_id, token_id, recipient, metadata)
         */
        NonFungibleTransfer: PlainDescriptor<Anonymize<Icfvncndiepf13>>;
        /**
         *GenericTransfer is for a generic data payload (dest_id, nonce, resource_id, metadata)
         */
        GenericTransfer: PlainDescriptor<Anonymize<I5hfier3p0p9jc>>;
        /**
         *Vote submitted in favour of proposal
         */
        VoteFor: PlainDescriptor<Anonymize<Ie4gu6f3b6uctq>>;
        /**
         *Vot submitted against proposal
         */
        VoteAgainst: PlainDescriptor<Anonymize<Ie4gu6f3b6uctq>>;
        /**
         *Voting successful for a proposal
         */
        ProposalApproved: PlainDescriptor<Anonymize<I4ojmnsk1dchql>>;
        /**
         *Voting rejected a proposal
         */
        ProposalRejected: PlainDescriptor<Anonymize<I4ojmnsk1dchql>>;
        /**
         *Execution of call succeeded
         */
        ProposalSucceeded: PlainDescriptor<Anonymize<I4ojmnsk1dchql>>;
        /**
         *Execution of call failed
         */
        ProposalFailed: PlainDescriptor<Anonymize<I4ojmnsk1dchql>>;
        /**
        
         */
        FeeUpdated: PlainDescriptor<Anonymize<I9p8b8lamchikq>>;
    };
    XcmBridge: {
        /**
         *Assets sent to parachain or relaychain.
         */
        AssetTransfered: PlainDescriptor<Anonymize<I5vjpealkafo1p>>;
    };
    XTransfer: {
        /**
         *Assets being withdrawn from somewhere.
         */
        Withdrawn: PlainDescriptor<Anonymize<Ibqslebq6u42vb>>;
        /**
         *Assets being deposited to somewhere.
         */
        Deposited: PlainDescriptor<Anonymize<Ibqslebq6u42vb>>;
        /**
         *Assets being forwarded to somewhere.
         */
        Forwarded: PlainDescriptor<Anonymize<Ibqslebq6u42vb>>;
    };
    AssetsRegistry: {
        /**
         *Asset is registerd.
         */
        AssetRegistered: PlainDescriptor<Anonymize<I8p40dt899dtuq>>;
        /**
         *Asset is unregisterd.
         */
        AssetUnregistered: PlainDescriptor<Anonymize<I8p40dt899dtuq>>;
        /**
         *Asset enabled chainbridge.
         */
        ChainbridgeEnabled: PlainDescriptor<Anonymize<I6hjfgcu14eb0q>>;
        /**
         *Asset disabled chainbridge.
         */
        ChainbridgeDisabled: PlainDescriptor<Anonymize<I6hjfgcu14eb0q>>;
        /**
         *Asset enabled sygmabridge.
         */
        SygmabridgeEnabled: PlainDescriptor<Anonymize<Ic93n0cje721n3>>;
        /**
         *Asset disabled sygmabridge.
         */
        SygmabridgeDisabled: PlainDescriptor<Anonymize<Ic93n0cje721n3>>;
        /**
         *Force mint asset to an certain account.
         */
        ForceMinted: PlainDescriptor<Anonymize<Ifvtjt50q884bb>>;
        /**
         *Force burn asset from an certain account.
         */
        ForceBurnt: PlainDescriptor<Anonymize<Idusmq77988cmt>>;
    };
    PhalaRegistry: {
        /**
         *A new Gatekeeper is enabled on the blockchain
         */
        GatekeeperAdded: PlainDescriptor<Anonymize<Icmtuqsikv2bvd>>;
        /**
        
         */
        GatekeeperRemoved: PlainDescriptor<Anonymize<Icmtuqsikv2bvd>>;
        /**
        
         */
        WorkerAdded: PlainDescriptor<Anonymize<I3a6hiniv07tkc>>;
        /**
        
         */
        WorkerUpdated: PlainDescriptor<Anonymize<I3a6hiniv07tkc>>;
        /**
        
         */
        MasterKeyRotated: PlainDescriptor<Anonymize<I2b65htl0pjlqh>>;
        /**
        
         */
        MasterKeyRotationFailed: PlainDescriptor<Anonymize<Ibf0qcof7of6r3>>;
        /**
        
         */
        InitialScoreSet: PlainDescriptor<Anonymize<I3klqo14nbar9n>>;
        /**
        
         */
        MinimumPRuntimeVersionChangedTo: PlainDescriptor<Anonymize<Ielgh4t8o7rcvt>>;
        /**
        
         */
        PRuntimeConsensusVersionChangedTo: PlainDescriptor<number>;
        /**
        
         */
        GatekeeperLaunched: PlainDescriptor<undefined>;
    };
    PhalaComputation: {
        /**
         *Cool down expiration changed (in sec).
         *
         *Indicates a change in [`CoolDownPeriod`].
         */
        CoolDownExpirationChanged: PlainDescriptor<Anonymize<Iffvohb3t8h71u>>;
        /**
         *A worker starts computing.
         *
         *Affected states:
         *- the worker info at [`Sessions`] is updated with `WorkerIdle` state
         *- [`NextSessionId`] for the session is incremented
         *- [`Stakes`] for the session is updated
         *- [`OnlineWorkers`] is incremented
         */
        WorkerStarted: PlainDescriptor<Anonymize<Ibpvnujci6lmps>>;
        /**
         *Worker stops computing.
         *
         *Affected states:
         *- the worker info at [`Sessions`] is updated with `WorkerCoolingDown` state
         *- [`OnlineWorkers`] is decremented
         */
        WorkerStopped: PlainDescriptor<Anonymize<I947um9nhnghi1>>;
        /**
         *Worker is reclaimed, with its slash settled.
         */
        WorkerReclaimed: PlainDescriptor<Anonymize<Inpik2efrovhj>>;
        /**
         *Worker & session are bounded.
         *
         *Affected states:
         *- [`SessionBindings`] for the session account is pointed to the worker
         *- [`WorkerBindings`] for the worker is pointed to the session account
         *- the worker info at [`Sessions`] is updated with `Ready` state
         */
        SessionBound: PlainDescriptor<Anonymize<I2rpqkg7ssb4am>>;
        /**
         *Worker & worker are unbound.
         *
         *Affected states:
         *- [`SessionBindings`] for the session account is removed
         *- [`WorkerBindings`] for the worker is removed
         */
        SessionUnbound: PlainDescriptor<Anonymize<I2rpqkg7ssb4am>>;
        /**
         *Worker enters unresponsive state.
         *
         *Affected states:
         *- the worker info at [`Sessions`] is updated from `WorkerIdle` to `WorkerUnresponsive`
         */
        WorkerEnterUnresponsive: PlainDescriptor<Anonymize<I947um9nhnghi1>>;
        /**
         *Worker returns to responsive state.
         *
         *Affected states:
         *- the worker info at [`Sessions`] is updated from `WorkerUnresponsive` to `WorkerIdle`
         */
        WorkerExitUnresponsive: PlainDescriptor<Anonymize<I947um9nhnghi1>>;
        /**
         *Worker settled successfully.
         *
         *It results in the v in [`Sessions`] being updated. It also indicates the downstream
         *stake pool has received the computing reward (payout), and the treasury has received the
         *tax.
         */
        SessionSettled: PlainDescriptor<Anonymize<I99h25vhi9ugv4>>;
        /**
         *Some internal error happened when settling a worker's ledger.
         */
        InternalErrorWorkerSettleFailed: PlainDescriptor<Anonymize<I4ct3iu08fvs4m>>;
        /**
         *Block subsidy halved by 25%.
         *
         *This event will be followed by a [`TokenomicParametersChanged`](#variant.TokenomicParametersChanged)
         *event indicating the change of the block subsidy budget in the parameter.
         */
        SubsidyBudgetHalved: PlainDescriptor<undefined>;
        /**
         *Some internal error happened when trying to halve the subsidy
         */
        InternalErrorWrongHalvingConfigured: PlainDescriptor<undefined>;
        /**
         *Tokenomic parameter changed.
         *
         *Affected states:
         *- [`TokenomicParameters`] is updated.
         */
        TokenomicParametersChanged: PlainDescriptor<undefined>;
        /**
         *A session settlement was dropped because the on-chain version is more up-to-date.
         *
         *This is a temporary walk-around of the computing staking design. Will be fixed by
         *StakePool v2.
         */
        SessionSettlementDropped: PlainDescriptor<Anonymize<I3d9shde1q80sl>>;
        /**
         *Benchmark Updated
         */
        BenchmarkUpdated: PlainDescriptor<Anonymize<I71394bfgmh7f4>>;
        /**
        
         */
        BudgetUpdated: PlainDescriptor<Anonymize<Icas6s87koosbm>>;
    };
    PhalaStakePoolv2: {
        /**
         *A stake pool is created by `owner`
         *
         *Affected states:
         *- a new entry in [`Pools`] with the pid
         */
        PoolCreated: PlainDescriptor<Anonymize<I31du8nf8ebd7l>>;
        /**
         *The commission of a pool is updated
         *
         *The commission ratio is represented by an integer. The real value is
         *`commission / 1_000_000u32`.
         *
         *Affected states:
         *- the `payout_commission` field in [`Pools`] is updated
         */
        PoolCommissionSet: PlainDescriptor<Anonymize<I2q85o3gc28n4s>>;
        /**
         *The stake capacity of the pool is updated
         *
         *Affected states:
         *- the `cap` field in [`Pools`] is updated
         */
        PoolCapacitySet: PlainDescriptor<Anonymize<Ibfm3gehrtppo6>>;
        /**
         *A worker is added to the pool
         *
         *Affected states:
         *- the `worker` is added to the vector `workers` in [`Pools`]
         *- the worker in the [`WorkerAssignments`] is pointed to `pid`
         *- the worker-session binding is updated in `computation` pallet ([`WorkerBindings`](computation::pallet::WorkerBindings),
         *  [`SessionBindings`](computation::pallet::SessionBindings))
         */
        PoolWorkerAdded: PlainDescriptor<Anonymize<I90vvr8uqrv92h>>;
        /**
         *Someone contributed to a pool
         *
         *Affected states:
         *- the stake related fields in [`Pools`]
         *- the user W-PHA balance reduced
         *- the user recive ad share NFT once contribution succeeded
         *- when there was any request in the withdraw queue, the action may trigger withdrawals
         *  ([`Withdrawal`](#variant.Withdrawal) event)
         */
        Contribution: PlainDescriptor<Anonymize<I2d0uit6oup7dt>>;
        /**
         *Owner rewards were withdrawn by pool owner
         *
         *Affected states:
         *- the stake related fields in [`Pools`]
         *- the owner asset account
         */
        OwnerRewardsWithdrawn: PlainDescriptor<Anonymize<I2tutt7vqt5geb>>;
        /**
         *The pool received a slash event from one of its workers (currently disabled)
         *
         *The slash is accured to the pending slash accumulator.
         */
        PoolSlashed: PlainDescriptor<Anonymize<I6bpho1qciu1vq>>;
        /**
         *Some slash is actually settled to a contributor (currently disabled)
         */
        SlashSettled: PlainDescriptor<Anonymize<I2tutt7vqt5geb>>;
        /**
         *Some reward is dismissed because the worker is no longer bound to a pool
         *
         *There's no affected state.
         */
        RewardDismissedNotInPool: PlainDescriptor<Anonymize<I69u9ruosjbvbq>>;
        /**
         *Some reward is dismissed because the pool doesn't have any share
         *
         *There's no affected state.
         */
        RewardDismissedNoShare: PlainDescriptor<Anonymize<I6bpho1qciu1vq>>;
        /**
         *Some reward is dismissed because the amount is too tiny (dust)
         *
         *There's no affected state.
         */
        RewardDismissedDust: PlainDescriptor<Anonymize<I6bpho1qciu1vq>>;
        /**
         *A worker is removed from a pool.
         *
         *Affected states:
         *- the worker item in [`WorkerAssignments`] is removed
         *- the worker is removed from the [`Pools`] item
         */
        PoolWorkerRemoved: PlainDescriptor<Anonymize<I573qjpa7bj77k>>;
        /**
         *A worker is reclaimed from the pool
         */
        WorkerReclaimed: PlainDescriptor<Anonymize<I573qjpa7bj77k>>;
        /**
         *The amount of reward that distributed to owner and stakers
         */
        RewardReceived: PlainDescriptor<Anonymize<I1jcetuoafqqbr>>;
        /**
         *The amount of stakes for a worker to start computing
         */
        WorkingStarted: PlainDescriptor<Anonymize<Ita6m0fl0nn5o>>;
        /**
         *Some to-distribute reward is dismissed because the amount is too tiny (dust)
         *
         *There's no affected state.
         */
        RewardToOwnerDismissedDust: PlainDescriptor<Anonymize<I6bpho1qciu1vq>>;
        /**
         *Some to-distribute reward is dismissed because the amount is too tiny (dust)
         *
         *There's no affected state.
         */
        RewardToDistributionDismissedDust: PlainDescriptor<Anonymize<I6bpho1qciu1vq>>;
    };
    PhalaVault: {
        /**
         *A vault is created by `owner`
         *
         *Affected states:
         *- a new entry in [`Pools`] with the pid
         */
        PoolCreated: PlainDescriptor<Anonymize<I31du8nf8ebd7l>>;
        /**
         *The commission of a vault is updated
         *
         *The commission ratio is represented by an integer. The real value is
         *`commission / 1_000_000u32`.
         *
         *Affected states:
         *- the `commission` field in [`Pools`] is updated
         */
        VaultCommissionSet: PlainDescriptor<Anonymize<I2q85o3gc28n4s>>;
        /**
         *Owner shares is claimed by pool owner
         *Affected states:
         *- the shares related fields in [`Pools`]
         *- the nft related storages in rmrk and pallet unique
         */
        OwnerSharesClaimed: PlainDescriptor<Anonymize<I26pv5uad3shu7>>;
        /**
         *Additional owner shares are mint into the pool
         *
         *Affected states:
         *- the shares related fields in [`Pools`]
         *- last_share_price_checkpoint in [`Pools`]
         */
        OwnerSharesGained: PlainDescriptor<Anonymize<I4l3grg74he7f8>>;
        /**
         *Someone contributed to a vault
         *
         *Affected states:
         *- the stake related fields in [`Pools`]
         *- the user W-PHA balance reduced
         *- the user recive ad share NFT once contribution succeeded
         *- when there was any request in the withdraw queue, the action may trigger withdrawals
         *  ([`Withdrawal`](#variant.Withdrawal) event)
         */
        Contribution: PlainDescriptor<Anonymize<Ia69ln29ruhu9e>>;
        /**
        
         */
        ForceShutdown: PlainDescriptor<Anonymize<I2hpkvh0joj3gp>>;
    };
    PhalaWrappedBalances: {
        /**
         *Some dust stake is removed
         *
         *Triggered when the remaining stake of a user is too small after withdrawal or slash.
         *
         *Affected states:
         *- the balance of the locking ledger of the contributor at [`StakeLedger`] is set to 0
         *- the user's dust stake is moved to treasury
         */
        DustRemoved: PlainDescriptor<Anonymize<Iclu7lhjet5kei>>;
        /**
        
         */
        Wrapped: PlainDescriptor<Anonymize<Iclu7lhjet5kei>>;
        /**
        
         */
        Unwrapped: PlainDescriptor<Anonymize<Iclu7lhjet5kei>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<Ibqrtilbvj9oag>>;
    };
    PhalaBasePool: {
        /**
         *A Nft is created to contain pool shares
         */
        NftCreated: PlainDescriptor<Anonymize<I6k3obpc83bkgt>>;
        /**
         *A withdrawal request is inserted to a queue
         *
         *Affected states:
         *- a new item is inserted to or an old item is being replaced by the new item in the
         *  withdraw queue in [`Pools`]
         */
        WithdrawalQueued: PlainDescriptor<Anonymize<I1u512ep96c36b>>;
        /**
         *Some stake was withdrawn from a pool
         *
         *The lock in [`Balances`](pallet_balances::pallet::Pallet) is updated to release the
         *locked stake.
         *
         *Affected states:
         *- the stake related fields in [`Pools`]
         *- the user staking asset account
         */
        Withdrawal: PlainDescriptor<Anonymize<Iduib0sos7pca1>>;
        /**
         *A pool contribution whitelist is added
         *
         *- lazy operated when the first staker is added to the whitelist
         */
        PoolWhitelistCreated: PlainDescriptor<Anonymize<Ibihfmtr4nutgv>>;
        /**
         *The pool contribution whitelist is deleted
         *
         *- lazy operated when the last staker is removed from the whitelist
         */
        PoolWhitelistDeleted: PlainDescriptor<Anonymize<Ibihfmtr4nutgv>>;
        /**
         *A staker is added to the pool contribution whitelist
         */
        PoolWhitelistStakerAdded: PlainDescriptor<Anonymize<If8bcs63vv4eft>>;
        /**
         *A staker is removed from the pool contribution whitelist
         */
        PoolWhitelistStakerRemoved: PlainDescriptor<Anonymize<If8bcs63vv4eft>>;
    };
    PhalaPhatContracts: {
        /**
        
         */
        ClusterCreated: PlainDescriptor<Anonymize<I8qju7m3hstakb>>;
        /**
        
         */
        ClusterPubkeyAvailable: PlainDescriptor<Anonymize<I6913n2585e5v4>>;
        /**
        
         */
        ClusterDeployed: PlainDescriptor<Anonymize<I2am6a50bsgodv>>;
        /**
        
         */
        ClusterDeploymentFailed: PlainDescriptor<Anonymize<Ia79dd8827p5d7>>;
        /**
        
         */
        Instantiating: PlainDescriptor<Anonymize<If2nonba72deue>>;
        /**
        
         */
        ContractPubkeyAvailable: PlainDescriptor<Anonymize<I82fnm31ss836o>>;
        /**
        
         */
        Instantiated: PlainDescriptor<Anonymize<I1focoio9oicr1>>;
        /**
        
         */
        ClusterDestroyed: PlainDescriptor<Anonymize<Ics9h14l9rgrav>>;
        /**
        
         */
        Transfered: PlainDescriptor<Anonymize<Iffu89avbjtc5o>>;
        /**
        
         */
        WorkerAddedToCluster: PlainDescriptor<Anonymize<Ia79dd8827p5d7>>;
        /**
        
         */
        WorkerRemovedFromCluster: PlainDescriptor<Anonymize<Ia79dd8827p5d7>>;
    };
    PhalaPhatTokenomic: {
        /**
        
         */
        ContractDepositChanged: PlainDescriptor<Anonymize<Ie2og8nuo133e>>;
        /**
        
         */
        UserStakeChanged: PlainDescriptor<Anonymize<Ickvb9esgisdvp>>;
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
    RmrkCore: {
        /**
        
         */
        CollectionCreated: PlainDescriptor<Anonymize<I86pkmcnt7cik7>>;
        /**
        
         */
        NftMinted: PlainDescriptor<Anonymize<I37orqm0h7voie>>;
        /**
        
         */
        NFTBurned: PlainDescriptor<Anonymize<Idn09te2cs37nc>>;
        /**
        
         */
        CollectionDestroyed: PlainDescriptor<Anonymize<I86pkmcnt7cik7>>;
        /**
        
         */
        NFTSent: PlainDescriptor<Anonymize<Ie6j9cnp8aj7k7>>;
        /**
        
         */
        NFTAccepted: PlainDescriptor<Anonymize<I9kmfil6jdj4l8>>;
        /**
        
         */
        NFTRejected: PlainDescriptor<Anonymize<I9o9f05ebunqev>>;
        /**
        
         */
        IssuerChanged: PlainDescriptor<Anonymize<Ifb32prv2c7htc>>;
        /**
        
         */
        PropertySet: PlainDescriptor<Anonymize<I7of83qrfaioip>>;
        /**
        
         */
        PropertyRemoved: PlainDescriptor<Anonymize<I8jvqf5673ih1q>>;
        /**
        
         */
        PropertiesRemoved: PlainDescriptor<Anonymize<Ie6p960gf85qqh>>;
        /**
        
         */
        CollectionLocked: PlainDescriptor<Anonymize<I86pkmcnt7cik7>>;
        /**
        
         */
        ResourceAdded: PlainDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
        
         */
        ResourceReplaced: PlainDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
        
         */
        ResourceAccepted: PlainDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
        
         */
        ResourceRemoval: PlainDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
        
         */
        ResourceRemovalAccepted: PlainDescriptor<Anonymize<If878fl46fbcu3>>;
        /**
        
         */
        PrioritySet: PlainDescriptor<Anonymize<Idap45qa17pms2>>;
    };
    RmrkEquip: {
        /**
        
         */
        BaseCreated: PlainDescriptor<Anonymize<I9pbttir0alsh4>>;
        /**
        
         */
        SlotEquipped: PlainDescriptor<Anonymize<Ie27tfrcer2j34>>;
        /**
        
         */
        SlotUnequipped: PlainDescriptor<Anonymize<Ie27tfrcer2j34>>;
        /**
        
         */
        EquippablesUpdated: PlainDescriptor<Anonymize<I4a41r9balkt5o>>;
        /**
        
         */
        BaseIssuerChanged: PlainDescriptor<Anonymize<Ifokke6olpki32>>;
    };
    RmrkMarket: {
        /**
         *The price for a token was updated
         */
        TokenPriceUpdated: PlainDescriptor<Anonymize<Ibnjv02qe8q15q>>;
        /**
         *Token was sold to a new owner
         */
        TokenSold: PlainDescriptor<Anonymize<Iufi3tjf8uomh>>;
        /**
         *Token listed on Marketplace
         */
        TokenListed: PlainDescriptor<Anonymize<Icdqlqqb8bqrfq>>;
        /**
         *Token unlisted on Marketplace
         */
        TokenUnlisted: PlainDescriptor<Anonymize<Idn09te2cs37nc>>;
        /**
         *Offer was placed on a token
         */
        OfferPlaced: PlainDescriptor<Anonymize<I6uachrs3kgekh>>;
        /**
         *Offer was withdrawn
         */
        OfferWithdrawn: PlainDescriptor<Anonymize<I9o9f05ebunqev>>;
        /**
         *Offer was accepted
         */
        OfferAccepted: PlainDescriptor<Anonymize<Ict3k310u6ic13>>;
        /**
         *Royalty fee paid to royalty owner
         */
        RoyaltyFeePaid: PlainDescriptor<Anonymize<I19a4q1q9b96bj>>;
        /**
         *Market fee paid to marketplace owner
         */
        MarketFeePaid: PlainDescriptor<Anonymize<I9vspelmo3v87n>>;
    };
    SygmaAccessSegregator: {
        /**
         *Extrinsic access grant to someone
         *args: [pallet_index, extrinsic_name, who]
         */
        AccessGranted: PlainDescriptor<Anonymize<Iem1enf2fufb5v>>;
    };
    SygmaBasicFeeHandler: {
        /**
         *Fee set for a specific asset
         *args: [domain, asset, amount]
         */
        FeeSet: PlainDescriptor<Anonymize<Ifp4t9o738p31f>>;
    };
    SygmaBridge: {
        /**
         *When initial bridge transfer send to dest domain
         *args: [dest_domain_id, resource_id, deposit_nonce, sender, transfer_type,
         *deposit_data, handler_response, ]
         */
        Deposit: PlainDescriptor<Anonymize<Iatonj6bqf2dcb>>;
        /**
         *When proposal was executed successfully
         */
        ProposalExecution: PlainDescriptor<Anonymize<Iepshvhf8fi3ce>>;
        /**
         *When proposal was faild to execute
         */
        FailedHandlerExecution: PlainDescriptor<Anonymize<I8vto936slaf4>>;
        /**
         *When user is going to retry a bridge transfer
         *args: [deposit_on_block_height, dest_domain_id, sender]
         */
        Retry: PlainDescriptor<Anonymize<Ie628frm5eo165>>;
        /**
         *When bridge is paused
         *args: [dest_domain_id]
         */
        BridgePaused: PlainDescriptor<Anonymize<I4cdvg646kt2e0>>;
        /**
         *When bridge is unpaused
         *args: [dest_domain_id]
         */
        BridgeUnpaused: PlainDescriptor<Anonymize<I4cdvg646kt2e0>>;
        /**
         *When registering a new dest domainID with its corresponding chainID
         */
        RegisterDestDomain: PlainDescriptor<Anonymize<I6lnq492gvt8n2>>;
        /**
         *When unregistering a dest domainID with its corresponding chainID
         */
        UnregisterDestDomain: PlainDescriptor<Anonymize<I6lnq492gvt8n2>>;
        /**
         *When bridge fee is collected
         */
        FeeCollected: PlainDescriptor<Anonymize<I83logdba4873j>>;
        /**
         *When all bridges are paused
         */
        AllBridgePaused: PlainDescriptor<Anonymize<Idndvbb9nej6lj>>;
        /**
         *When all bridges are unpaused
         */
        AllBridgeUnpaused: PlainDescriptor<Anonymize<Idndvbb9nej6lj>>;
    };
    SygmaFeeHandlerRouter: {
        /**
         *When fee handler was set for a specific (domain, asset) pair
         *args: [dest_domain_id, asset_id, handler_type]
         */
        FeeHandlerSet: PlainDescriptor<Anonymize<I5j5chkhnfbh8j>>;
    };
    SygmaWrapper: {
        /**
         *Assets sent to EVM chain.
         */
        AssetTransfered: PlainDescriptor<Anonymize<I5vjpealkafo1p>>;
    };
    SygmaPercentageFeeHandler: {
        /**
         *Fee set rate for a specific asset and domain
         *args: [domain, asset, rate_basis_point, fee_lower_bound, fee_upper_bound]
         */
        FeeRateSet: PlainDescriptor<Anonymize<Ife179qlf4g24i>>;
    };
    PalletIndex: {
        /**
         *Worker is set.
         */
        WorkerAdd: PlainDescriptor<Anonymize<Iem2tclvr85h3e>>;
        /**
         *Worker is set.
         */
        WorkerRemove: PlainDescriptor<Anonymize<Iem2tclvr85h3e>>;
        /**
         *New task saved.
         */
        NewTask: PlainDescriptor<Anonymize<Ieg3201strrrud>>;
        /**
         *Task has been claimed.
         */
        Claimed: PlainDescriptor<Anonymize<Icqa1le0ffav0n>>;
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
    XcmpQueue: {
        /**
         *Failed to send XCM message.
         */
        FailedToSend: PlainDescriptor<undefined>;
        /**
         *Bad XCM origin.
         */
        BadXcmOrigin: PlainDescriptor<undefined>;
        /**
         *Bad XCM data.
         */
        BadXcm: PlainDescriptor<undefined>;
        /**
         *Bad overweight index.
         */
        BadOverweightIndex: PlainDescriptor<undefined>;
        /**
         *Provided weight is possibly not enough to execute the message.
         */
        WeightOverLimit: PlainDescriptor<undefined>;
    };
    DmpQueue: {
        /**
         *The message index given is unknown.
         */
        Unknown: PlainDescriptor<undefined>;
        /**
         *The amount of weight given is possibly not enough for executing the message.
         */
        OverLimit: PlainDescriptor<undefined>;
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
         *The destination `MultiLocation` provided cannot be inverted.
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
         *Invalid asset for the operation.
         */
        InvalidAsset: PlainDescriptor<undefined>;
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
         *Number of holds exceed `MaxHolds`.
         */
        TooManyHolds: PlainDescriptor<undefined>;
        /**
         *Number of freezes exceed `MaxFreezes`.
         */
        TooManyFreezes: PlainDescriptor<undefined>;
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
         *Too many additional fields.
         */
        TooManyFields: PlainDescriptor<undefined>;
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
    Treasury: {
        /**
         *Proposer's balance is too low.
         */
        InsufficientProposersBalance: PlainDescriptor<undefined>;
        /**
         *No proposal or bounty at that index.
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
    };
    Bounties: {
        /**
         *Proposer's balance is too low.
         */
        InsufficientProposersBalance: PlainDescriptor<undefined>;
        /**
         *No proposal or bounty at that index.
         */
        InvalidIndex: PlainDescriptor<undefined>;
        /**
         *The reason given is just too big.
         */
        ReasonTooBig: PlainDescriptor<undefined>;
        /**
         *The bounty status is unexpected.
         */
        UnexpectedStatus: PlainDescriptor<undefined>;
        /**
         *Require bounty curator.
         */
        RequireCurator: PlainDescriptor<undefined>;
        /**
         *Invalid bounty value.
         */
        InvalidValue: PlainDescriptor<undefined>;
        /**
         *Invalid bounty fee.
         */
        InvalidFee: PlainDescriptor<undefined>;
        /**
         *A bounty payout is pending.
         *To cancel the bounty, you must unassign and slash the curator.
         */
        PendingPayout: PlainDescriptor<undefined>;
        /**
         *The bounties cannot be claimed/closed because it's still in the countdown period.
         */
        Premature: PlainDescriptor<undefined>;
        /**
         *The bounty cannot be closed because it has active child bounties.
         */
        HasActiveChildBounty: PlainDescriptor<undefined>;
        /**
         *Too many approvals are already queued.
         */
        TooManyQueued: PlainDescriptor<undefined>;
    };
    Lottery: {
        /**
         *A lottery has not been configured.
         */
        NotConfigured: PlainDescriptor<undefined>;
        /**
         *A lottery is already in progress.
         */
        InProgress: PlainDescriptor<undefined>;
        /**
         *A lottery has already ended.
         */
        AlreadyEnded: PlainDescriptor<undefined>;
        /**
         *The call is not valid for an open lottery.
         */
        InvalidCall: PlainDescriptor<undefined>;
        /**
         *You are already participating in the lottery with this call.
         */
        AlreadyParticipating: PlainDescriptor<undefined>;
        /**
         *Too many calls for a single lottery.
         */
        TooManyCalls: PlainDescriptor<undefined>;
        /**
         *Failed to encode calls
         */
        EncodingFailed: PlainDescriptor<undefined>;
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
    TechnicalMembership: {
        /**
         *Already a member.
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
         *Not a member.
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *Too many members.
         */
        TooManyMembers: PlainDescriptor<undefined>;
    };
    PhragmenElection: {
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
    ChildBounties: {
        /**
         *The parent bounty is not in active state.
         */
        ParentBountyNotActive: PlainDescriptor<undefined>;
        /**
         *The bounty balance is not enough to add new child-bounty.
         */
        InsufficientBountyBalance: PlainDescriptor<undefined>;
        /**
         *Number of child bounties exceeds limit `MaxActiveChildBountyCount`.
         */
        TooManyChildBounties: PlainDescriptor<undefined>;
    };
    ChainBridge: {
        /**
         *Relayer threshold not set
         */
        _ThresholdNotSet: PlainDescriptor<undefined>;
        /**
         *Provided chain Id is not valid
         */
        InvalidChainId: PlainDescriptor<undefined>;
        /**
         *Relayer threshold cannot be 0
         */
        InvalidThreshold: PlainDescriptor<undefined>;
        /**
         *Interactions with this chain is not permitted
         */
        ChainNotWhitelisted: PlainDescriptor<undefined>;
        /**
         *Chain has already been enabled
         */
        ChainAlreadyWhitelisted: PlainDescriptor<undefined>;
        /**
         *Resource ID provided isn't mapped to anything
         */
        _ResourceDoesNotExist: PlainDescriptor<undefined>;
        /**
         *Relayer already in set
         */
        RelayerAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Provided accountId is not a relayer
         */
        RelayerInvalid: PlainDescriptor<undefined>;
        /**
         *Protected operation, must be performed by relayer
         */
        MustBeRelayer: PlainDescriptor<undefined>;
        /**
         *Relayer has already submitted some vote for this proposal
         */
        RelayerAlreadyVoted: PlainDescriptor<undefined>;
        /**
         *A proposal with these parameters has already been submitted
         */
        ProposalAlreadyExists: PlainDescriptor<undefined>;
        /**
         *No proposal with the ID was found
         */
        ProposalDoesNotExist: PlainDescriptor<undefined>;
        /**
         *Cannot complete proposal, needs more votes
         */
        ProposalNotComplete: PlainDescriptor<undefined>;
        /**
         *Proposal has either failed or succeeded
         */
        ProposalAlreadyComplete: PlainDescriptor<undefined>;
        /**
         *Lifetime of proposal has been exceeded
         */
        ProposalExpired: PlainDescriptor<undefined>;
        /**
         *Got wrong paremeter when update fee
         */
        InvalidFeeOption: PlainDescriptor<undefined>;
        /**
         *Unkonwn asset
         */
        ExtractAssetFailed: PlainDescriptor<undefined>;
        /**
         *Unknown destnation
         */
        ExtractDestFailed: PlainDescriptor<undefined>;
        /**
         *Asset can not pay as fee
         */
        CannotPayAsFee: PlainDescriptor<undefined>;
        /**
         *Transfer failed
         */
        TransactFailed: PlainDescriptor<undefined>;
        /**
         *Infusficient balance to withdraw
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Too expensive fee for withdrawn asset
         */
        FeeTooExpensive: PlainDescriptor<undefined>;
        /**
         *Can not extract asset reserve location
         */
        CannotDetermineReservedLocation: PlainDescriptor<undefined>;
        /**
         *Can not extract dest location
         */
        DestUnrecognized: PlainDescriptor<undefined>;
        /**
         *Assets not registered through pallet-assets or pallet-uniques
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
         *Convertion failed from resource id
         */
        AssetConversionFailed: PlainDescriptor<undefined>;
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
        /**
         *Can not transfer assets to dest due to some reasons
         */
        CannotDepositAsset: PlainDescriptor<undefined>;
        /**
         *Trying to push bridge event count more than `BridgeEventLimit`
         */
        BridgeEventOverflow: PlainDescriptor<undefined>;
    };
    XcmBridge: {
        /**
        
         */
        _UnknownError: PlainDescriptor<undefined>;
        /**
         *Can not reanchor asset location according dest
         */
        CannotReanchor: PlainDescriptor<undefined>;
        /**
         *Failed to measure weight of a XCM message
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
        
         */
        _FeePaymentEmpty: PlainDescriptor<undefined>;
        /**
         *XCM message executeion failed due to some reasons
         */
        ExecutionFailed: PlainDescriptor<undefined>;
        /**
        
         */
        _UnknownTransfer: PlainDescriptor<undefined>;
        /**
         *Asset not been registered or not been supported
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        _LocationInvertFailed: PlainDescriptor<undefined>;
        /**
         *Extract dest location failed
         */
        IllegalDestination: PlainDescriptor<undefined>;
        /**
         *Can not transfer asset to dest
         */
        CannotDepositAsset: PlainDescriptor<undefined>;
        /**
         *Transfer type not valid
         */
        UnknownTransferType: PlainDescriptor<undefined>;
        /**
         *Unimplemented function
         */
        Unimplemented: PlainDescriptor<undefined>;
    };
    XTransfer: {
        /**
        
         */
        _TransactFailed: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownAsset: PlainDescriptor<undefined>;
        /**
        
         */
        UnsupportedDest: PlainDescriptor<undefined>;
        /**
        
         */
        UnhandledTransfer: PlainDescriptor<undefined>;
    };
    AssetsRegistry: {
        /**
        
         */
        AssetAlreadyExist: PlainDescriptor<undefined>;
        /**
        
         */
        AssetNotRegistered: PlainDescriptor<undefined>;
        /**
        
         */
        BridgeAlreadyEnabled: PlainDescriptor<undefined>;
        /**
        
         */
        BridgeAlreadyDisabled: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToTransactAsset: PlainDescriptor<undefined>;
        /**
        
         */
        DuplictedLocation: PlainDescriptor<undefined>;
        /**
        
         */
        LocationTooLong: PlainDescriptor<undefined>;
    };
    PhalaMq: {
        /**
        
         */
        BadSender: PlainDescriptor<undefined>;
        /**
        
         */
        BadSequence: PlainDescriptor<undefined>;
        /**
        
         */
        BadDestination: PlainDescriptor<undefined>;
    };
    PhalaRegistry: {
        /**
        
         */
        CannotHandleUnknownMessage: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSender: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPubKey: PlainDescriptor<undefined>;
        /**
        
         */
        MalformedSignature: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSignatureLength: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSignature: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownContract: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidIASSigningCert: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidReport: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidQuoteStatus: PlainDescriptor<undefined>;
        /**
        
         */
        BadIASReport: PlainDescriptor<undefined>;
        /**
        
         */
        OutdatedIASReport: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownQuoteBodyFormat: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidDCAPQuote: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRuntimeInfoHash: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRuntimeInfo: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidInput: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidBenchReport: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        NoneAttestationDisabled: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidGatekeeper: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidMasterPubkey: PlainDescriptor<undefined>;
        /**
        
         */
        MasterKeyMismatch: PlainDescriptor<undefined>;
        /**
        
         */
        MasterKeyUninitialized: PlainDescriptor<undefined>;
        /**
        
         */
        GenesisBlockHashRejected: PlainDescriptor<undefined>;
        /**
        
         */
        GenesisBlockHashAlreadyExists: PlainDescriptor<undefined>;
        /**
        
         */
        GenesisBlockHashNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        PRuntimeRejected: PlainDescriptor<undefined>;
        /**
        
         */
        PRuntimeAlreadyExists: PlainDescriptor<undefined>;
        /**
        
         */
        PRuntimeNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownCluster: PlainDescriptor<undefined>;
        /**
        
         */
        NotImplemented: PlainDescriptor<undefined>;
        /**
        
         */
        CannotRemoveLastGatekeeper: PlainDescriptor<undefined>;
        /**
        
         */
        MasterKeyInRotation: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRotatedMasterPubkey: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidEndpointSigningTime: PlainDescriptor<undefined>;
        /**
         *Migration root not authorized
         */
        NotMigrationRoot: PlainDescriptor<undefined>;
        /**
        
         */
        ParachainIdMismatch: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidConsensusVersion: PlainDescriptor<undefined>;
        /**
        
         */
        UnsupportedAttestationType: PlainDescriptor<undefined>;
    };
    PhalaComputation: {
        /**
         *The transaction is sent by an unauthorized sender
         */
        BadSender: PlainDescriptor<undefined>;
        /**
         *Deprecated.
         */
        _InvalidMessage: PlainDescriptor<undefined>;
        /**
         *The worker is not registered in the registry.
         */
        WorkerNotRegistered: PlainDescriptor<undefined>;
        /**
         *Deprecated
         */
        _GatekeeperNotRegistered: PlainDescriptor<undefined>;
        /**
         *Not permitted because the session is already bound with another worker.
         */
        DuplicateBoundSession: PlainDescriptor<undefined>;
        /**
         *There's no benchmark result on the blockchain.
         */
        BenchmarkMissing: PlainDescriptor<undefined>;
        /**
         *session not found.
         */
        SessionNotFound: PlainDescriptor<undefined>;
        /**
         *Not permitted because the session is not bound with a worker.
         */
        SessionNotBound: PlainDescriptor<undefined>;
        /**
         *Worker is not in `Ready` state to proceed.
         */
        WorkerNotReady: PlainDescriptor<undefined>;
        /**
         *Worker is not in `Computation` state to stop computing.
         */
        WorkerNotComputing: PlainDescriptor<undefined>;
        /**
         *Not permitted because the worker is not bound with a worker account.
         */
        WorkerNotBound: PlainDescriptor<undefined>;
        /**
         *Cannot reclaim the worker because it's still in cooldown period.
         */
        CoolDownNotReady: PlainDescriptor<undefined>;
        /**
         *Cannot start computing because there's too little stake.
         */
        InsufficientStake: PlainDescriptor<undefined>;
        /**
         *Cannot start computing because there's too much stake (exceeds Vmax).
         */
        TooMuchStake: PlainDescriptor<undefined>;
        /**
         *Internal error. The tokenomic parameter is not set.
         */
        InternalErrorBadTokenomicParameters: PlainDescriptor<undefined>;
        /**
         *Not permitted because the worker is already bound with another session account.
         */
        DuplicateBoundWorker: PlainDescriptor<undefined>;
        /**
         *Indicating the initial benchmark score is too low to start computing.
         */
        BenchmarkTooLow: PlainDescriptor<undefined>;
        /**
         *Internal error. A worker should never start with existing stake in the storage.
         */
        InternalErrorCannotStartWithExistingStake: PlainDescriptor<undefined>;
        /**
         *Migration root not authorized
         */
        NotMigrationRoot: PlainDescriptor<undefined>;
        /**
        
         */
        NonceIndexInvalid: PlainDescriptor<undefined>;
        /**
        
         */
        BudgetUpdateBlockInvalid: PlainDescriptor<undefined>;
        /**
        
         */
        BudgetExceedMaxLimit: PlainDescriptor<undefined>;
        /**
         *The worker need to be re-registered to be added to a pool.
         */
        WorkerReregisterNeeded: PlainDescriptor<undefined>;
    };
    PhalaStakePoolv2: {
        /**
         *The worker is not registered in the registry when adding to the pool
         */
        WorkerNotRegistered: PlainDescriptor<undefined>;
        /**
         *The worker doesn't have a valid benchmark when adding to the pool
         */
        BenchmarkMissing: PlainDescriptor<undefined>;
        /**
         *The worker is already added to the pool
         */
        WorkerExists: PlainDescriptor<undefined>;
        /**
         *The worker is already in cd_workers
         */
        WorkerAlreadyStopped: PlainDescriptor<undefined>;
        /**
         *The target worker is not in the pool
         */
        WorkerDoesNotExist: PlainDescriptor<undefined>;
        /**
         *The worker is already added to another pool
         */
        WorkerInAnotherPool: PlainDescriptor<undefined>;
        /**
         *The owner of the pool doesn't have the access to the worker
         *
         *The access to a worker is granted by it's `operator` parameter set by `register_worker`
         */
        UnauthorizedOperator: PlainDescriptor<undefined>;
        /**
         *The caller is not the owner of the pool
         */
        UnauthorizedPoolOwner: PlainDescriptor<undefined>;
        /**
         *The stake capacity is set too low to cover the existing stake
         */
        InadequateCapacity: PlainDescriptor<undefined>;
        /**
         *The stake added to a pool exceeds its capacity
         */
        StakeExceedsCapacity: PlainDescriptor<undefined>;
        /**
         *The specified pool doesn't exist
         */
        PoolDoesNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        _PoolIsBusy: PlainDescriptor<undefined>;
        /**
         *The contributed stake is smaller than the minimum threshold
         */
        InsufficientContribution: PlainDescriptor<undefined>;
        /**
         *The caller has no nft to withdraw
         */
        NoNftToWithdraw: PlainDescriptor<undefined>;
        /**
         *Trying to contribute more than the available balance
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *The user doesn't have stake in a pool
         */
        PoolStakeNotFound: PlainDescriptor<undefined>;
        /**
         *Cannot start computing because there's no enough free stake
         */
        InsufficientFreeStake: PlainDescriptor<undefined>;
        /**
         *The withdrawal amount is too small (considered as dust)
         */
        InvalidWithdrawalAmount: PlainDescriptor<undefined>;
        /**
         *Couldn't bind worker and the pool computing subaccount
         */
        FailedToBindSessionAndWorker: PlainDescriptor<undefined>;
        /**
         *Internal error: Cannot withdraw from the subsidy pool. This should never happen.
         */
        InternalSubsidyPoolCannotWithdraw: PlainDescriptor<undefined>;
        /**
         *The pool has already got all the stake completely slashed.
         *
         *In this case, no more funds can be contributed to the pool until all the pending slash
         *has been resolved.
         */
        PoolBankrupt: PlainDescriptor<undefined>;
        /**
         *There's no pending reward to claim
         */
        NoRewardToClaim: PlainDescriptor<undefined>;
        /**
         *The StakePool is not enabled yet.
         */
        FeatureNotEnabled: PlainDescriptor<undefined>;
        /**
         *Failed to add a worker because the number of the workers exceeds the upper limit.
         */
        WorkersExceedLimit: PlainDescriptor<undefined>;
        /**
         *Restarted with a less stake is not allowed in the tokenomic.
         */
        CannotRestartWithLessStake: PlainDescriptor<undefined>;
        /**
         *Invalid amount of balance input when force reward.
         */
        InvalidForceRewardAmount: PlainDescriptor<undefined>;
        /**
         *Withdraw queue is not empty so that we can't restart computing
         */
        WithdrawQueueNotEmpty: PlainDescriptor<undefined>;
        /**
         *Stakepool's collection_id isn't founded
         */
        MissingCollectionId: PlainDescriptor<undefined>;
        /**
         *Vault is forced locked for it has some expired withdrawal
         */
        VaultIsLocked: PlainDescriptor<undefined>;
        /**
         *The target miner is not in the 	`miner` storage
         */
        SessionDoesNotExist: PlainDescriptor<undefined>;
        /**
         *The target worker is not reclaimed and can not be removed from a pool.
         */
        WorkerIsNotReady: PlainDescriptor<undefined>;
        /**
        
         */
        LockAccountStakeError: PlainDescriptor<undefined>;
        /**
        
         */
        NoLegacyRewardToClaim: PlainDescriptor<undefined>;
    };
    PhalaVault: {
        /**
         *The caller is not the owner of the pool
         */
        UnauthorizedPoolOwner: PlainDescriptor<undefined>;
        /**
         *The withdrawal amount is too small or too large
         */
        NoEnoughShareToClaim: PlainDescriptor<undefined>;
        /**
         *The vault have no owner shares to claim
         */
        NoRewardToClaim: PlainDescriptor<undefined>;
        /**
         *The asset account hasn't been created. It indicates an internal error.
         */
        AssetAccountNotExist: PlainDescriptor<undefined>;
        /**
         *Trying to contribute more than the available balance
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *The contributed stake is smaller than the minimum threshold
         */
        InsufficientContribution: PlainDescriptor<undefined>;
        /**
         *The Vault was bankrupt; cannot interact with it unless all the shares are withdrawn.
         */
        VaultBankrupt: PlainDescriptor<undefined>;
        /**
         *The caller has no nft to withdraw
         */
        NoNftToWithdraw: PlainDescriptor<undefined>;
        /**
         *The commission is not changed
         */
        CommissionNotChanged: PlainDescriptor<undefined>;
    };
    PhalaWrappedBalances: {
        /**
         *user's `FinanceAccount` does not exist in storage: `StakerAccounts`
         */
        StakerAccountNotFound: PlainDescriptor<undefined>;
        /**
         *Trying to unwrap more than the available balance
         */
        UnwrapAmountExceedsAvaliableStake: PlainDescriptor<undefined>;
        /**
         *Trying to vote more than the available balance
         */
        VoteAmountLargerThanTotalStakes: PlainDescriptor<undefined>;
        /**
         *The vote is not currently on going
         */
        ReferendumInvalid: PlainDescriptor<undefined>;
        /**
         *The vote is now on going and the W-PHA used in voting can not be unlocked
         */
        ReferendumOngoing: PlainDescriptor<undefined>;
        /**
         *The Iteration exceed the max limitaion
         */
        IterationsIsNotVaild: PlainDescriptor<undefined>;
    };
    PhalaBasePool: {
        /**
         *basepool's collection_id isn't founded
         */
        MissCollectionId: PlainDescriptor<undefined>;
        /**
         *The pool has already got all the stake completely slashed.
         *
         *In this case, no more funds can be contributed to the pool until all the pending slash
         *has been resolved.
         */
        PoolBankrupt: PlainDescriptor<undefined>;
        /**
         *CheckSub less than zero, indicate share amount is invalid
         */
        InvalidShareToWithdraw: PlainDescriptor<undefined>;
        /**
         *The withdrawal amount is too small (considered as dust)
         */
        InvalidWithdrawalAmount: PlainDescriptor<undefined>;
        /**
         *RMRK errors
         */
        RmrkError: PlainDescriptor<undefined>;
        /**
         *The Specified pid does not match to any pool
         */
        PoolDoesNotExist: PlainDescriptor<undefined>;
        /**
         *Tried to access a pool type that doesn't match the actual pool type in the storage.
         *
         *E.g. Try to access a vault but it's actually a  stake pool.
         */
        PoolTypeNotMatch: PlainDescriptor<undefined>;
        /**
         *NftId does not match any nft
         */
        NftIdNotFound: PlainDescriptor<undefined>;
        /**
         *Occurs when pool's shares is zero
         */
        InvalidSharePrice: PlainDescriptor<undefined>;
        /**
         *Tried to get a `NftGuard` when the nft is locked. It indicates an internal error occured.
         */
        AttrLocked: PlainDescriptor<undefined>;
        /**
         *The caller is not the owner of the pool
         */
        UnauthorizedPoolOwner: PlainDescriptor<undefined>;
        /**
         *Can not add the staker to whitelist because the staker is already in whitelist.
         */
        AlreadyInContributeWhitelist: PlainDescriptor<undefined>;
        /**
         *Invalid staker to contribute because origin isn't in Pool's contribution whitelist.
         */
        NotInContributeWhitelist: PlainDescriptor<undefined>;
        /**
         *Too many stakers in contribution whitelist that exceed the limit
         */
        ExceedWhitelistMaxLen: PlainDescriptor<undefined>;
        /**
         *The pool hasn't have a whitelist created
         */
        NoWhitelistCreated: PlainDescriptor<undefined>;
        /**
         *Too long for pool description length
         */
        ExceedMaxDescriptionLen: PlainDescriptor<undefined>;
        /**
         *Migration root not authorized
         */
        NotMigrationRoot: PlainDescriptor<undefined>;
        /**
         *Burn nft failed
         */
        BurnNftFailed: PlainDescriptor<undefined>;
        /**
        
         */
        DeprecatedTransferSharesAmountInvalid: PlainDescriptor<undefined>;
        /**
         *No reimbursement to claim
         */
        NoReimbursementToClaim: PlainDescriptor<undefined>;
        /**
        
         */
        InternalSubsidyPoolCannotWithdraw: PlainDescriptor<undefined>;
    };
    PhalaPhatContracts: {
        /**
        
         */
        CodeNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        ClusterNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        ClusterNotDeployed: PlainDescriptor<undefined>;
        /**
        
         */
        ClusterPermissionDenied: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicatedContract: PlainDescriptor<undefined>;
        /**
        
         */
        DuplicatedDeployment: PlainDescriptor<undefined>;
        /**
        
         */
        NoWorkerSpecified: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidSender: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        PayloadTooLarge: PlainDescriptor<undefined>;
        /**
        
         */
        NoPinkSystemCode: PlainDescriptor<undefined>;
        /**
        
         */
        ContractNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerIsBusy: PlainDescriptor<undefined>;
    };
    PhalaPhatTokenomic: {
        /**
        
         */
        InvalidAmountOfStake: PlainDescriptor<undefined>;
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
    RmrkCore: {
        /**
         *Error names should be descriptive.
         */
        NoneValue: PlainDescriptor<undefined>;
        /**
         *Errors should have helpful documentation associated with them.
         */
        StorageOverflow: PlainDescriptor<undefined>;
        /**
        
         */
        TooLong: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableCollectionId: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableResourceId: PlainDescriptor<undefined>;
        /**
        
         */
        MetadataNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        RecipientNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableNftId: PlainDescriptor<undefined>;
        /**
        
         */
        NotInRange: PlainDescriptor<undefined>;
        /**
        
         */
        RoyaltyNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        CollectionUnknown: PlainDescriptor<undefined>;
        /**
        
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
        
         */
        NoWitness: PlainDescriptor<undefined>;
        /**
        
         */
        CollectionNotEmpty: PlainDescriptor<undefined>;
        /**
        
         */
        CollectionFullOrLocked: PlainDescriptor<undefined>;
        /**
        
         */
        CannotSendToDescendentOrSelf: PlainDescriptor<undefined>;
        /**
        
         */
        ResourceAlreadyExists: PlainDescriptor<undefined>;
        /**
        
         */
        NftAlreadyExists: PlainDescriptor<undefined>;
        /**
        
         */
        EmptyResource: PlainDescriptor<undefined>;
        /**
         *The recursion limit has been reached.
         */
        TooManyRecursions: PlainDescriptor<undefined>;
        /**
        
         */
        NftIsLocked: PlainDescriptor<undefined>;
        /**
        
         */
        CannotAcceptNonOwnedNft: PlainDescriptor<undefined>;
        /**
        
         */
        CannotRejectNonOwnedNft: PlainDescriptor<undefined>;
        /**
        
         */
        CannotRejectNonPendingNft: PlainDescriptor<undefined>;
        /**
        
         */
        ResourceDoesntExist: PlainDescriptor<undefined>;
        /**
         *Accepting a resource that is not pending should fail
         */
        ResourceNotPending: PlainDescriptor<undefined>;
        /**
        
         */
        NonTransferable: PlainDescriptor<undefined>;
        /**
        
         */
        CannotSendEquippedItem: PlainDescriptor<undefined>;
        /**
        
         */
        CannotAcceptToNewOwner: PlainDescriptor<undefined>;
        /**
        
         */
        FailedTransferHooksPreCheck: PlainDescriptor<undefined>;
        /**
        
         */
        FailedTransferHooksPostTransfer: PlainDescriptor<undefined>;
    };
    RmrkEquip: {
        /**
        
         */
        PermissionError: PlainDescriptor<undefined>;
        /**
        
         */
        ItemDoesntExist: PlainDescriptor<undefined>;
        /**
        
         */
        EquipperDoesntExist: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailableBaseId: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyEquippables: PlainDescriptor<undefined>;
        /**
        
         */
        NoAvailablePartId: PlainDescriptor<undefined>;
        /**
        
         */
        MustBeDirectParent: PlainDescriptor<undefined>;
        /**
        
         */
        PartDoesntExist: PlainDescriptor<undefined>;
        /**
        
         */
        BaseDoesntExist: PlainDescriptor<undefined>;
        /**
        
         */
        CantEquipFixedPart: PlainDescriptor<undefined>;
        /**
        
         */
        NoResourceForThisBaseFoundOnNft: PlainDescriptor<undefined>;
        /**
        
         */
        CollectionNotEquippable: PlainDescriptor<undefined>;
        /**
        
         */
        ItemHasNoResourceToEquipThere: PlainDescriptor<undefined>;
        /**
        
         */
        NoEquippableOnFixedPart: PlainDescriptor<undefined>;
        /**
        
         */
        NeedsDefaultThemeFirst: PlainDescriptor<undefined>;
        /**
        
         */
        ItemAlreadyEquipped: PlainDescriptor<undefined>;
        /**
        
         */
        SlotAlreadyEquipped: PlainDescriptor<undefined>;
        /**
        
         */
        SlotNotEquipped: PlainDescriptor<undefined>;
        /**
        
         */
        UnknownError: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedsMaxPartsPerBase: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyProperties: PlainDescriptor<undefined>;
        /**
        
         */
        ItemNotEquipped: PlainDescriptor<undefined>;
        /**
        
         */
        UnequipperMustOwnEitherItemOrEquipper: PlainDescriptor<undefined>;
        /**
        
         */
        UnexpectedTryFromIntError: PlainDescriptor<undefined>;
        /**
        
         */
        UnexpectedVecConversionError: PlainDescriptor<undefined>;
    };
    RmrkMarket: {
        /**
         *No permissions for account to interact with NFT
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *Token cannot be bought
         */
        TokenNotForSale: PlainDescriptor<undefined>;
        /**
         *Offer already accepted and cannot withdraw
         */
        CannotWithdrawOffer: PlainDescriptor<undefined>;
        /**
         *Cannot unlist NFT as it has already been unlisted or sold
         */
        CannotUnlistToken: PlainDescriptor<undefined>;
        /**
         *Cannot make offer on NFT on own NFT
         */
        CannotOfferOnOwnToken: PlainDescriptor<undefined>;
        /**
         *Cannot buy NFT that is already owned
         */
        CannotBuyOwnToken: PlainDescriptor<undefined>;
        /**
         *Offer is unknown
         */
        UnknownOffer: PlainDescriptor<undefined>;
        /**
         *Cannot list NFT owned by a NFT
         */
        CannotListNftOwnedByNft: PlainDescriptor<undefined>;
        /**
         *Cannot list a non-existing NFT
         */
        TokenDoesNotExist: PlainDescriptor<undefined>;
        /**
         *Offer is below the OfferMinimumAmount threshold
         */
        OfferTooLow: PlainDescriptor<undefined>;
        /**
         *Account cannot offer on a NFT again with an active offer
         */
        AlreadyOffered: PlainDescriptor<undefined>;
        /**
         *Accepted offer has expired and cannot be accepted
         */
        OfferHasExpired: PlainDescriptor<undefined>;
        /**
         *Listing has expired and cannot be bought
         */
        ListingHasExpired: PlainDescriptor<undefined>;
        /**
         *Price differs from when `buy` was executed
         */
        PriceDiffersFromExpected: PlainDescriptor<undefined>;
        /**
         *Not possible to list non-transferable NFT
         */
        NonTransferable: PlainDescriptor<undefined>;
        /**
         *Marketplace owner not configured
         */
        MarketplaceOwnerNotSet: PlainDescriptor<undefined>;
        /**
         *Cannot list NFT based on downstream logic implemented for MarketplaceHooks trait
         */
        CannotListNft: PlainDescriptor<undefined>;
    };
    SygmaAccessSegregator: {
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
        /**
         *Failed to grant extrinsic access permission to an account
         */
        GrantAccessFailed: PlainDescriptor<undefined>;
    };
    SygmaBasicFeeHandler: {
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
        /**
         *Account has not gained access permission
         */
        AccessDenied: PlainDescriptor<undefined>;
    };
    SygmaBridge: {
        /**
         *Account has not gained access permission
         */
        AccessDenied: PlainDescriptor<undefined>;
        /**
         *Protected operation, must be performed by relayer
         */
        BadMpcSignature: PlainDescriptor<undefined>;
        /**
         *Insufficient balance on sender account
         */
        InsufficientBalance: PlainDescriptor<undefined>;
        /**
         *Asset transactor execution failed
         */
        TransactFailed: PlainDescriptor<undefined>;
        /**
         *The withdrawn amount can not cover the fee payment
         */
        FeeTooExpensive: PlainDescriptor<undefined>;
        /**
         *MPC address not set
         */
        MissingMpcAddress: PlainDescriptor<undefined>;
        /**
         *MPC address can not be updated
         */
        MpcAddrNotUpdatable: PlainDescriptor<undefined>;
        /**
         *Bridge is paused
         */
        BridgePaused: PlainDescriptor<undefined>;
        /**
         *Bridge is unpaused
         */
        BridgeUnpaused: PlainDescriptor<undefined>;
        /**
         *Fee config option missing
         */
        MissingFeeConfig: PlainDescriptor<undefined>;
        /**
         *Asset not bound to a resource id
         */
        AssetNotBound: PlainDescriptor<undefined>;
        /**
         *Proposal has either failed or succeeded
         */
        ProposalAlreadyComplete: PlainDescriptor<undefined>;
        /**
         *Proposal list empty
         */
        EmptyProposalList: PlainDescriptor<undefined>;
        /**
         *Transactor operation failed
         */
        TransactorFailed: PlainDescriptor<undefined>;
        /**
         *Deposit data not correct
         */
        InvalidDepositData: PlainDescriptor<undefined>;
        /**
         *Dest domain not supported
         */
        DestDomainNotSupported: PlainDescriptor<undefined>;
        /**
         *Dest chain id not match
         */
        DestChainIDNotMatch: PlainDescriptor<undefined>;
        /**
         *Failed to extract destination data
         */
        ExtractDestDataFailed: PlainDescriptor<undefined>;
        /**
         *Failed on the decimal converter
         */
        DecimalConversionFail: PlainDescriptor<undefined>;
        /**
         *Deposit nonce has reached max integer value
         */
        DepositNonceOverflow: PlainDescriptor<undefined>;
        /**
         *Asset not bound to a liquidity holder account
         */
        NoLiquidityHolderAccountBound: PlainDescriptor<undefined>;
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
    };
    SygmaFeeHandlerRouter: {
        /**
         *Account has not gained access permission
         */
        AccessDenied: PlainDescriptor<undefined>;
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
    };
    SygmaWrapper: {
        /**
         *Can not transfer asset to dest
         */
        CannotDepositAsset: PlainDescriptor<undefined>;
        /**
         *Unimplemented function
         */
        Unimplemented: PlainDescriptor<undefined>;
    };
    SygmaPercentageFeeHandler: {
        /**
         *Function unimplemented
         */
        Unimplemented: PlainDescriptor<undefined>;
        /**
         *Account has not gained access permission
         */
        AccessDenied: PlainDescriptor<undefined>;
        /**
         *Fee rate is out of range [0, 10000)
         */
        FeeRateOutOfRange: PlainDescriptor<undefined>;
        /**
         *Percentage fee bound is invalid
         */
        InvalidFeeBound: PlainDescriptor<undefined>;
    };
    PalletIndex: {
        /**
        
         */
        AssetNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerAlreadySet: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        WorkerMismatch: PlainDescriptor<undefined>;
        /**
        
         */
        TaskAlreadyExist: PlainDescriptor<undefined>;
        /**
        
         */
        NotFoundInTaskQueue: PlainDescriptor<undefined>;
        /**
        
         */
        TaskQueueEmpty: PlainDescriptor<undefined>;
        /**
        
         */
        TransactFailed: PlainDescriptor<undefined>;
        /**
        
         */
        FeeTooExpensive: PlainDescriptor<undefined>;
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
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
        /**
        
         */
        MaxVestingSchedules: PlainDescriptor<number>;
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
         * The maximum number of holds that can exist on an account at any time.
         */
        MaxHolds: PlainDescriptor<number>;
        /**
         * The maximum number of individual freeze locks that can exist on an account at any time.
         */
        MaxFreezes: PlainDescriptor<number>;
    };
    TransactionPayment: {
        /**
         * A fee mulitplier for `Operational` extrinsics to compute "virtual tip" to boost their
         * `priority`
         *
         * This value is multipled by the `final_fee` to obtain a "virtual tip" that is later
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
    Identity: {
        /**
         * The amount held on deposit for a registered identity
         */
        BasicDeposit: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit per additional field for a registered identity.
         */
        FieldDeposit: PlainDescriptor<bigint>;
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
         * Maximum number of additional fields that may be stored in an ID. Needed to bound the I/O
         * required to access an identity, but can be pretty high.
         */
        MaxAdditionalFields: PlainDescriptor<number>;
        /**
         * Maxmimum number of registrars allowed in the system. Needed to bound the complexity
         * of, e.g., updating judgements.
         */
        MaxRegistrars: PlainDescriptor<number>;
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
    Council: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
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
    };
    Bounties: {
        /**
         * The amount held on deposit for placing a bounty proposal.
         */
        BountyDepositBase: PlainDescriptor<bigint>;
        /**
         * The delay period for which a bounty beneficiary need to wait before claim the payout.
         */
        BountyDepositPayoutDelay: PlainDescriptor<number>;
        /**
         * Bounty duration in blocks.
         */
        BountyUpdatePeriod: PlainDescriptor<number>;
        /**
         * The curator deposit is calculated as a percentage of the curator fee.
         *
         * This deposit has optional upper and lower bounds with `CuratorDepositMax` and
         * `CuratorDepositMin`.
         */
        CuratorDepositMultiplier: PlainDescriptor<number>;
        /**
         * Maximum amount of funds that should be placed in a deposit for making a proposal.
         */
        CuratorDepositMax: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
         * Minimum amount of funds that should be placed in a deposit for making a proposal.
         */
        CuratorDepositMin: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
         * Minimum value for a bounty.
         */
        BountyValueMinimum: PlainDescriptor<bigint>;
        /**
         * The amount held on deposit per byte within the tip report reason or bounty description.
         */
        DataDepositPerByte: PlainDescriptor<bigint>;
        /**
         * Maximum acceptable reason length.
         *
         * Benchmarks depend on this value, be sure to update weights file when changing this value
         */
        MaximumReasonLength: PlainDescriptor<number>;
    };
    Lottery: {
        /**
         * The Lottery's pallet id
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The max number of calls available in a single lottery.
         */
        MaxCalls: PlainDescriptor<number>;
        /**
         * Number of time we should try to generate a random number that has no modulo bias.
         * The larger this number, the more potential computation is used for picking the winner,
         * but also the more likely that the chosen winner is done fairly.
         */
        MaxGenerateRandom: PlainDescriptor<number>;
    };
    TechnicalCommittee: {
        /**
         * The maximum weight of a dispatch call that can be proposed and executed.
         */
        MaxProposalWeight: PlainDescriptor<Anonymize<I4q39t5hn830vp>>;
    };
    PhragmenElection: {
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
         * The amount held on deposit for placing a tip report.
         */
        TipReportDepositBase: PlainDescriptor<bigint>;
    };
    ChildBounties: {
        /**
         * Maximum number of child bounties that can be added to a parent bounty.
         */
        MaxActiveChildBountyCount: PlainDescriptor<number>;
        /**
         * Minimum value for a child-bounty.
         */
        ChildBountyValueMinimum: PlainDescriptor<bigint>;
    };
    ChainBridge: {
        /**
         * The identifier for this chain.
         * This must be unique and must not collide with existing IDs within a set of bridged chains.
         */
        BridgeChainId: PlainDescriptor<number>;
        /**
        
         */
        ProposalLifetime: PlainDescriptor<number>;
        /**
         * Maximum number of bridge events  allowed to exist in a single block
         */
        BridgeEventLimit: PlainDescriptor<number>;
        /**
         * Salt used to generation rid
         */
        ResourceIdGenerationSalt: PlainDescriptor<Anonymize<I35p85j063s0il>>;
    };
    AssetsRegistry: {
        /**
        
         */
        MinBalance: PlainDescriptor<bigint>;
        /**
        
         */
        NativeExecutionPrice: PlainDescriptor<bigint>;
        /**
        
         */
        ResourceIdGenerationSalt: PlainDescriptor<Anonymize<I35p85j063s0il>>;
        /**
        
         */
        NativeAssetLocation: PlainDescriptor<Anonymize<Idpatrs8teqg2g>>;
        /**
        
         */
        NativeAssetSygmaResourceId: PlainDescriptor<FixedSizeBinary<32>>;
    };
    PhalaRegistry: {
        /**
         * Enable None Attestation, SHOULD BE SET TO FALSE ON PRODUCTION !!!
         */
        NoneAttestationEnabled: PlainDescriptor<boolean>;
        /**
         * Verify attestation
         *
         * SHOULD NOT SET TO FALSE ON PRODUCTION!!!
         */
        VerifyPRuntime: PlainDescriptor<boolean>;
        /**
         * Verify relaychain genesis
         *
         * SHOULD NOT SET TO FALSE ON PRODUCTION!!!
         */
        VerifyRelaychainGenesisBlockHash: PlainDescriptor<boolean>;
    };
    PhalaStakePoolv2: {
        /**
        
         */
        MinContribution: PlainDescriptor<bigint>;
        /**
         * The grace period for force withdraw request, in seconds.
         */
        GracePeriod: PlainDescriptor<bigint>;
        /**
         * The max allowed workers in a pool
         */
        MaxPoolWorkers: PlainDescriptor<number>;
    };
    PhalaVault: {
        /**
        
         */
        InitialPriceCheckPoint: PlainDescriptor<bigint>;
        /**
        
         */
        VaultQueuePeriod: PlainDescriptor<bigint>;
    };
    PhalaWrappedBalances: {
        /**
         * W-PHA's asset id
         */
        WPhaAssetId: PlainDescriptor<number>;
        /**
         * Pha's global fund pool
         */
        WrappedBalancesAccountId: PlainDescriptor<SS58String>;
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
    RmrkCore: {
        /**
         * The maximum resource symbol length
         */
        ResourceSymbolLimit: PlainDescriptor<number>;
        /**
         * The maximum number of parts each resource may have
         */
        PartsLimit: PlainDescriptor<number>;
        /**
         * The maximum number of resources that can be included in a setpriority extrinsic
         */
        MaxPriorities: PlainDescriptor<number>;
        /**
         * The maximum number of properties each can have
         */
        PropertiesLimit: PlainDescriptor<number>;
        /**
         * The maximum nesting allowed in the pallet extrinsics.
         */
        NestingBudget: PlainDescriptor<number>;
    };
    RmrkEquip: {
        /**
         * Maximum allowed Parts (either Fixed or Slot) per Base
         */
        MaxPropertiesPerTheme: PlainDescriptor<number>;
        /**
         * Maximum number of Properties allowed for any Theme
         */
        MaxCollectionsEquippablePerPart: PlainDescriptor<number>;
    };
    RmrkMarket: {
        /**
         * Minimum offer amount as a valid offer
         */
        MinimumOfferAmount: PlainDescriptor<bigint>;
        /**
         * Market fee to be implemented downstream.
         */
        MarketFee: PlainDescriptor<number>;
    };
    SygmaBridge: {
        /**
         * Bridge transfer reserve accounts mapping with designated assets
         */
        TransferReserveAccounts: PlainDescriptor<Anonymize<Iea4cdk1e0kthe>>;
        /**
         * EIP712 Verifying contract address
         * This is used in EIP712 typed data domain
         */
        DestVerifyingContractAddress: PlainDescriptor<FixedSizeBinary<20>>;
        /**
         * Pallet ChainID
         * This is used in EIP712 typed data domain
         */
        EIP712ChainID: PlainDescriptor<Anonymize<I4totqt881mlti>>;
        /**
         * Fee reserve account
         */
        FeeReserveAccount: PlainDescriptor<SS58String>;
    };
    PalletIndex: {
        /**
         * Fee reserve account
         */
        FeeReserveAccount: PlainDescriptor<SS58String>;
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
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<Ia80jl3tjleac5>>;
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
    MqApi: {
        /**
        
         */
        sender_sequence: RuntimeDescriptor<[sender: Anonymize<Ifo61fvdcequsl>], Anonymize<I35p85j063s0il>>;
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
    
     */
    RmrkApi: {
        /**
         * Get collection by id
         */
        collection_by_id: RuntimeDescriptor<[id: number], Anonymize<Id181dbjj1tdf3>>;
        /**
         * Get NFT by collection id and NFT id
         */
        nft_by_id: RuntimeDescriptor<[collection_id: number, nft_id: number], Anonymize<Ifee01a9g3rt24>>;
        /**
         * Get tokens owned by an account in a collection
         */
        account_tokens: RuntimeDescriptor<[account_id: SS58String, collection_id: number], Anonymize<Ic0d5ujpem0f1u>>;
        /**
         * Get NFT children
         */
        nft_children: RuntimeDescriptor<[collection_id: number, nft_id: number], Anonymize<I291qb692j5j75>>;
        /**
         * Get collection properties
         */
        collection_properties: RuntimeDescriptor<[collection_id: number, filter_keys: Anonymize<Icfm6esve5sckl>], Anonymize<Icj5jam18ja0de>>;
        /**
         * Get NFT properties
         */
        nft_properties: RuntimeDescriptor<[collection_id: number, nft_id: number, filter_keys: Anonymize<Icfm6esve5sckl>], Anonymize<Icj5jam18ja0de>>;
        /**
         * Get NFT resources
         */
        nft_resources: RuntimeDescriptor<[collection_id: number, nft_id: number], Anonymize<I1i2n12vu9icg5>>;
        /**
         * Get NFT resource priority
         */
        nft_resource_priority: RuntimeDescriptor<[collection_id: number, nft_id: number, resource_id: number], Anonymize<I1uas0i0nvg00e>>;
        /**
         * Get base info
         */
        base: RuntimeDescriptor<[base_id: number], Anonymize<Ibf6ecleurvs3c>>;
        /**
         * Get all Base's parts
         */
        base_parts: RuntimeDescriptor<[base_id: number], Anonymize<I9gma1k4b4n01>>;
        /**
         * Get Base's theme names
         */
        theme_names: RuntimeDescriptor<[base_id: number], Anonymize<Idpvt3t6spl9s5>>;
        /**
         * Get Theme info -- name, properties, and inherit flag
         */
        theme: RuntimeDescriptor<[base_id: number, theme_name: Binary, filter_keys: Anonymize<Icfm6esve5sckl>], Anonymize<If5srre49dgeim>>;
    };
    /**
    
     */
    SygmaBridgeApi: {
        /**
        
         */
        is_proposal_executed: RuntimeDescriptor<[nonce: bigint, domain_id: number], boolean>;
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
export type PhalaDispatchError = Anonymize<Iemlsb8m0gkj0a>;
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
export type PhalaQueries = QueryFromPalletsDef<PalletsTypedef>;
export type PhalaCalls = TxFromPalletsDef<PalletsTypedef>;
export type PhalaEvents = EventsFromPalletsDef<PalletsTypedef>;
export type PhalaErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type PhalaConstants = ConstFromPalletsDef<PalletsTypedef>;
export type PhalaCallData = Anonymize<I497ltikio29qi> & {
    value: {
        type: string;
    };
};
export type PhalaWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
