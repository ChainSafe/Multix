import { StorageDescriptor, PlainDescriptor, TxDescriptor, RuntimeDescriptor, Enum, QueryFromPalletsDef, TxFromPalletsDef, EventsFromPalletsDef, ErrorsFromPalletsDef, ConstFromPalletsDef, SS58String, FixedSizeBinary, Binary, FixedSizeArray } from "polkadot-api";
import { I5sesotjlssv2d, Iffmde3ekjedi9, I4mddgoa69c0a2, I9c7e78u1qjnal, I95g6i7ilua7lq, Ieniouoqkq4icf, Phase, Ibgl04rn6nbfm6, Iff9heri56m1mb, I1v7jbnil3tjns, I8jgj1nhcr2dg8, Ifn6q3equiq9qi, Ia3sb0vgvovhtg, Iav8k1edbj86k7, Itom7fk49o0c9, I4i91h98n3cv1b, I4iumukclgj8ej, Iqnbvitf7a7l3, I6r5cbv8ttrb09, I4q39t5hn830vp, Idkbvh6dahk1v7, I1q8tnt1cluu5j, I8ds64oj6581v0, Ia7pdug7cdsg8g, Icg2f7lij7mhun, I9bin2jc70qt6q, TransactionPaymentReleases, Ia2lhg7l2hilo3, Ifi4da1gej1fri, Ifvgo9568rpmqc, Icgljjb6j82uhn, I82jm9g7pufuel, Ic5m5lp1oioo8r, I6cs1itejju2vv, I6mhebgj62g585, I3vhcedhm4hpvm, I526daka7j7b17, Ifanv2kvm586s4, I5rsgtofmn5lli, Idned7t7knml6b, I2itl2k1j2q8nf, I1iu0bu1rp17tr, I99bb69usss9gs, I8nj9dlo7lnbb3, Iba9inugg1atvo, Ib23vkkc52tqbu, ConvictionVotingVoteVoting, I6ouflveob4eli, If9jidduiuq7vv, Ibs6u72covsi5f, Ib77b0fp1a6mjr, I5g2vv0ckl2m8b, Ifup3lg9ro8a0f, XcmPalletQueryStatus, Ic4qvh5df9s5gp, I7vlvrrl2pnbgk, I50sjs3s5lud21, XcmPalletVersionMigrationStage, I50qp0ij7h62g2, Iteuj23is2ed5, I3rp19gb4dadaa, Iegrepoo0c1jc5, Idh2ug6ou4a8og, Iejeo53sea6n4q, I53esa2ms463bk, Ib4jhb8tt3uung, I9o4npulmafg3s, I56u24ncejr5kt, I9jd27rnpm8ttv, Ieg7k9e6jbge4a, I9p9lq3rej5bhc, Iag146hmjgqfgj, I8uo3fpd3bcc6f, I1evsr8hplu1lg, I910puuahutflf, I4nfjdef0ibh44, I74af64m08r6as, I9bhbof2vim227, Ifble4juuml5ig, Version, Iegmj7n48sc3am, Ie9j1itogtv7p5, PreimageOldRequestStatus, PreimageRequestStatus, I4pact7n2e9a0i, Ic17drnrq0rtgi, Idi27giun0mb9q, Idud3fdh64aqp9, Ie7atdsih6q14b, I4totqt881mlti, I7jidl7qnnq87c, I82cps8ng2jtug, Iebirugq1dbhv6, Icoe72r8pkf564, Ic02kut0350gb0, Id0as9l3s817qs, Ifmurjhsco5svb, Iettgnma0t3a0g, Icu3qllmbdnj89, Idhafor8sovqeu, I84fmreorpmm3e, I3t5icadd1rvs1, I76qpl5pst2d4o, Ik66om7cc050c, I200n1ov5tbcvr, Iaa4kemhg4eh7v, I6sn46nd9sjbst, I9d86her21jvp8, I6ae21pstqk9et, Icsknfl0f6r973, I2j3o5sgk562ak, Ielgh4t8o7rcvt, I2q82ekqn8jp9r, I7svnfko10tq2e, I4c0s5cioidn76, Ievgjq5dn6rae7, I810b83nplvppm, Id6ihttoi261us, Ia9o9frjhn49u0, I3thiua0nporjs, I9v3gj6frc0u13, Iapmb49b0eddb4, I8d057oj36rajf, I2eq26k0hguoqq, Iadrpn9mhdu2rp, I7uhs5s0pidt2q, I6ge61lbhbulha, Ia88a8r9e89e2p, I4qitokr7lpmpu, I34jhssnacefoe, I65gcqchov0ds9, I9egg64gafs7r7, Idmnfldthdnj8h, I98pjho0jvtfaa, I69hlrlj6ggqgm, I7t012gg35hgm4, I1js2aelrc7fbg, Ib8nbo9p8dn6s1, Icq8st9st73vh1, I8pl16po8ngde, I4kcv5272ambf0, I970q50juj0l2, Ifpaals567gacp, Ilivuv1vkc02s, Ianombrc3en111, I1755v7kcv6nfl, I26t6htp1ghfm3, Ial6i7mt9utr8, I84h6f3k470m6q, I17n1fg1r6mg6q, Ifm7mj15s63a8e, Ieqteqhnicu2mf, I4frqunb5hj2km, Ifptjqqj04qat7, I9t45q0sd1h16t, Iaa6gfhcgert4g, I93ot7g316idsl, I393gnb7kgq98v, Ifvilitm1tdmqi, Iei9bnssh84mli, I2dbamvpq4935, Iarr20ag9rpg5c, I5o39ti65l0u4e, Ic7uu02ss1ah16, Iafqnechp3omqg, I3em9l2q88o7if, Imng78fk88871, Ifaba2nbbb02cs, I3gg47bgkgq9tr, Ic080st7mqo0d7, Ibe2akds4krf80, I5m768sb1iam8f, I2uhe6v3aqlo79, If5lnhvjis90k, I22oifipsnuvk4, I42jj1su7asrm9, I7p4is2lmk8vmo, I3udg9qslb775f, Iavngg6vh7nl2j, Iao359lc45ru9s, I1ifiaqhtj7c9, I1i2kfunpgo63g, I6km05m2f6usv7, I39fnrtffbq76n, I9055m3udr8982, I92tce08cbhnmn, Ilqs3opgrh80o, Iamub7qfj1haap, I60rdchrdlh152, Ickhdoqhl8bqbi, Ihtnsu0oqpkmt, I1ia1mr5j8i0fe, I3ifohh97v7oqs, I7p8qimonpk9dr, I9p3c3ohdngoau, In7a38730s6qs, If15el53dd76v9, I9s0ave7t0vnrk, Ic6nglu2db2c36, Ibafpkl9hhno69, Iasb8k6ash5mjn, I35p85j063s0il, XcmV3JunctionNetworkId, I8ofcg5rbj0g2c, I4adgbll7gku4i, I6pjjpfvhvcfru, I9pj91mj79qekl, I39uah9nss64h9, Ik64dknsq7k08, Ib51vk42m1po4n, Idcr6u6361oad9, I666bl2fqjkejo, I1u3ac7lafvv5b, I5teebeg0opib2, I60v7bikk54tpu, Ifpj261e8s63m3, Iba7pefg0d11kh, I2pjehun5ehh5i, I65i612een2ak, I5vvf47ira6s09, I5ns79ftlq8cnl, I59ofijoau4bjh, Ibmr18suc9ikh9, Ieka2e164ntfss, I5u8olqbbvfnvf, I5utcetro501ir, Ifccifqltb5obi, Iadtsfv699cq8b, Ialpmgmhr3gk5r, I4cbvqmqadhrea, I3sdol54kg5jaq, I8fougodaj6di6, I81vt5eq60l4b6, I1moso5oagpiea, Ibeb4n9vpjefp3, Id7murq9s9fg6h, Ied9mja4bq7va8, I4f7jul8ljs54r, I5agg650597e49, I2ev73t79f46tb, I1736r1jp6plpc, If31vrl50nund3, I6s1n1athh0bbq, I3v9h9f3mpm1l8, I9mnj4k4u8ls2c, I2kt2u1flctk2q, I38jfk5li8iang, I7j6tqsqukhnri, I59de8grgi0rgo, I2dtrijkm5601t, Ib2obgji960euh, Iaa13icjlsj13d, I98vh5ccjtf1ev, I3al0eab2u0gt2, Ib3prtfc334m1t, I6fuug4i4r04hi, Icu8seopr711dn, Id09aqt1ca773l, I3c63j6sh3evqn, I79cmnv5q6b3p, Idnsr2pndm36h0, Iam6m7eerh6h6v, I8steo882k7qns, Ic8m623qbgr5mp, I5f178ab6b89t3, Ieg7p9mojce0qk, Iaur73da4vrh3b, Icbio0e1f0034b, I8c0vkqjjipnuj, I1adbcfi5uc62r, Ibf6ucefn8fh49, I6ktbtrls224jl, I3vh014cqgmrfd, I9paqujeb1fpv6, Iakevv83i18n4r, If2ssl12kcglhg, Iabk8ljl5g8c86, Ic76kfh5ebqkpl, Icrujen33bbibf, I5gi8h3e5lkbeq, Ibgm4rnf22lal1, I8mmaab8je28oo, I6r0pr82pbiftt, I40pqum1mu8qg3, I1r4c2ghbtvjuc, Ifgf2lv1kbqov7, I1ucinofptavlh, Ifcksl2knoosec, I946f5igftuiau, I2mguj9c7439e8, I5n4sebgkfr760, Ish5gp6f54bck, Ifs1i5fk9cqvr6, I7l3dpep93imqm, Iea1arudhpnpah, Ieg3fd8p4pkt10, I8kg5ll427kfqq, I467333262q1l9, I4h9fg0e30t24s, Ic8921q56j7e76, I2egj4q248jk1a, Ic0caeuh81btl, Idj9faf6hgsdur, I8mj1nm903hpts, Ifun0ood196g9n, Isqlsstl7j1o4, I3u4d2ab3msvn8, Ideaemvoneh309, I3d9o9d7epp66v, I73kffnn32g4c7, I2kds5jji7slh8, Ia9mkdf6l44shb, I9l2s4klu0831o, I2ctrt5nqb8o7c, I711qahikocb1c, Id6gojh30v9ib2, I9h4cqmadpj7l0, I29bkdd7n16li1, I9jb9hqm18runn, I85htvo8b885h, I95j99om5qfj06, Ifh75tbmlqktju, Ie5l999tf7t2te, I3usr0jpt8ovnk, I5a5fh6anhjgu7, I3atr9j3ums3m2, I2bvdo47pdo59f, I2okmh2c5ub01c, Ict9ivhr2c5hv0, I12ng1otu7kekg, Icm9m0qeemu66d, I7fcl4aua07ato, I6qq5nnbjegi8u, I82nfqfkd48n10, I1jm8m1rh9e20v, I3o5j3bli1pd8e, Ia8ogbeici6lip, Idcabvplu05lea, I2ncccle6pmhd9, I92bnd3pe0civj, Ic84i538n8bl8j, I6v8kghkt0dksl, Itmchvgqfl28g, I5culoml3m3hc5, Idu1ujel33jksu, Icmdiibb69taq4, I40fog3d0qlub1, I2vqbh54f2cif2, Iaif2nhfhk9qc0, I302t0ook7k95n, If84l0hb2pbh5j, I7td476oj5kt2h, I1o4mqqd02b5sj, Id3v70nvrro0hv, I6msvbss3ktmnu, Ifbs87e8855hrh, Ibugemvm1fr87g, I11kqb3hb93c3c, Ici6p55173o3kg, Ib7tkro61h34d2, Ig5896f16psh3, Ibsib3ed5u1164, I6g1lhais855g9, I52cpe8da8o62l, I7h9e3cbrb3kaa, Ieaqa57prka9ld, Iedoc1ioirjto2, Idqd6j83jfa92q, Icbccs0ug47ilf, I1kid1a77qaur7, Ics6651m6a7vef, Ie4g7upp74eu13, I5gmbd5ouh8to0, Idosag2hho5h9d, I59jcdm11snp4p, I1d28k4v5qap3a, Ick23c1oi70vti, I50dt84l38nc68, I1j6hllalj2epr, Ieha9i74pbfov3, Ia1u3jll6a06ae, Idqhqtsjlrcjh1, I87diq5b0qic4c, Ie5v6njpckr05b, I3iun9sig164po, Iv901693moogd, Ic9o893ack6tuk, I48uhm2mc8gk2s, I1n28f4ceil09b, Ieq8j5nmk3i7o0, Icpcfc9lhh4mbr, I9jict5bcuu8ag, I110m02ast38uc, I8apnhdjfa68oh, Ia0bl64soc0sol, I78qlfm7cgvt33, Ikoto1ge923bq, I53vlfub8vbal3, Iaqh0vk9puj2m1, Iaub8vq6tggv2c, Idkdd97l7v4t7o, Iamlqp3gs21baf, Ib8jf5ko4vdfjl, I16tfgdl00n6tj, Iff5tmm38ba750, I61ut5ekco112k, I8sqvh22141fr8, I8vcp3s3t1r7ti, I94c4ugqtmf885, I5g2ic5lk6jvap, I6aqijved7jgk9, I962vs596sggoi, I8ln2e9k7mblim, I1pqjsjhm82q1i, I8rn283dnm6h0f, Ibu6i8jb58o30n, I8jm0ov76tih8s, Ic7aob2k1l1jfu, I4qh6vjmbpl1a6, I6dlum3cbrie3d, Iecuv9eudhio5i, I2s4o8aq49k18a, I2i20t4file901, Inp8hn3mu8c5j, I68o6mdp1r65np, Iaba972j3va7k, Iffj0b5herq802, I8ja7ceebpen3k, Icikcphjk1igug, Ibnl8raecejsmo, I1ufkvgdurghbk, I1q1g69il2fc15, I9ltv8jlv2map8, Idlhavidu7pq4f, I203ivdv9ll218, Id37b9l6bk2ii9, I58caqa2hcp37r, I9thv3jvjv8nr9, I5lkkn2erim0mo, Idlqnrhkqn6quh, Id57q643bc33er, I3tgr4mij0dq9t, Ic6tc8uub7lssk, I7dim4s22d4cc, I9adoavqh7j1qm, I2cnb8psb4ovvm, Ibks2bt6flju9r, Icr6e14pl04enu, I4dnvv5a59mp30, Ii1jr958aef3t, Ier970hnn9pgrj, I8gmi4rbjvdjpn, Ido82tngjj5jid, Ial5va0b0vs25o, Icm2mv7tlmp1c3, I821qafgn89idd, Icn7fuqv1aq0de, Ifift2upjktcjs, I8mu9fcao6hkeb, Ibmoqhjadutned, Idtq61tuc2ualk, I6e7p4l5e6t7n6, Ieob0gouehce57, I8eo9r9va149i7, Iaeor8vejoqk4d, I6d2fsv919ackd, I65sao41nc2u5n, I3glt55ja41fqv, I6jagi4fq1m7jf, Ibktnbt7atrk9i, Iapol5cojcq8jr, Iarqih3rei93nj, I9tgq173mqotfi, I4q8h00pii12o3, I5odhhedphq5gh, Iej62b4o01n76s, Icni4v52b04265, Icj3kkh24tpu43, I3e52d3k39di8p, I5c3b80onqg2es, If0uionjq98ocd, I4o0j96irr71sk, I3ame4u9k81am7, Iepipqemga7ede, I3u441vu8an9al, I21asuar23h6m2, I7u9oegj4csj51, I6s65kicknm51n, Ifuaakr3i6qaje, I792urf76hgnm9, I7j4i782lpafvm, I22tnv4gs7kfkn, I8hrio8nd5ielu, Iddd2a11b8876r, I8bvk21lpmah75, I449n3riv6jbum, I72edo3nnc5ukn, I7m1ou0telopf8, I4r3lr1hp3q5vu, Ibqd4ibtu385pg, Id846uvbhv0ups, Iel8d6vl7kun8s, Ia5vm4875s01on, I1io386vc3pmlf, Idnoja8d5k0dtr, I95j99jsac0h95, Idti8pnde3jga2, Icu74rtf3kd9gd, I8v7akpi7cdcp5, I7826235520epg, Iaj42ghmtrj594, Ibtoub2npklubb, Iefli0cgm44m3b, Iaij9kantm3v0b, I8l8g9smisvqei, I2ce5d3bnbbfhi, Ifuh1k8nfv6s7l, I5uf09856s8hsn, I2lb07lr6m4m1b, Ienmtmhvu9c5gc, I3qt1hgg4djhgb, I153e8dbo2i3pv, Ilat0prj8bnun, Ic9p67gsdqt1ro, I158shpkf1icfg, I2kudr318ju7fu, I3chmoe7ts2vks, I533e8jlem55p4, Iene1sabvs33in, I1j0vp2lik6fqa, Ifgt33ij9dem7c, Ibt8nqfprp1t99, Iap9nfjdhnmblj, Ie5efe5gkg0kqs, I5hb3jd6s8k4qo, I3jqe98jp6jqj5, Idea758kkrtvus, I7am60vl6fh2ak, Id4du8qeonl5uo, Ib73p6n69t2jsn, I69nisu7k9olcl, Ievk931u2c7sqn, Ie2jvm478jd2jv, Ibfeiifn3uif9a, I59ijflfqmnqm2, Ifor98fsce0gmh, If3e7sroj6atgl, Iem9ho9292gh8o, Iacnhot5uh80ka, Idngfiicpu7gh9, I3qd17rh5f6jv7, Ia0dlb4pduq2i4, Ie74pabtv0ktd0, I8kr5s6u6ue9e7, Ia82mnkmeo2rhc, Iegg8ak569f003, I855j4i3kr8ko1, Idd7hd99u0ho0n, Iafscmv8tjf0ou, I100l07kaehdlp, I6gnbnvip5vvdi, Icv68aq8841478, Ic262ibdoec56a, Iflcfm9b6nlmdd, Ijrsf4mnp3eka, Id5fm4p8lj5qgi, I8tjvj9uq4b7hi, I4fooe9dun9o0t, Ier2cke86dqbr2, I39t01nnod9109, I6v8sm60vvkmk7, I1qmtmbe5so8r3, Ih99m6ehpcar7, Idgorhsbgdq2ap, I9ubb2kqevnu6t, I2hq50pu2kdjpo, I3peh714diura8, I62ffgu6q2478o, I10r7il4gvbcae, I2c00i2bngegk9, Iet7kfijhihjik, I2vrbos7ogo6ps, Iffeo46j957abe, I4ljshcevmm3p2, Ift6f10887nk72, I7qc53b1tvqjg2, I4s25thrhpiql, Iak7fhrgb9jnnq, Iaofef34v2445a, Ie3gphha4ejh40, I4b66js88p45m8, I50d9r8lrdga93, I27avf13g71mla, I2na29tt2afp0j, I229ijht536qdu, I62nte77gksm0f, I9cg2delv92pvq, Ilhp45uime5tp, I4f1hv034jf1dt, I6kg7bhenahr1c, I137t1cld92pod, I2aatv5i0cb96a, Ib9msr5sr8t3dn, I3le5tr7ugg6l2, I2uqmls7kcdnii, Idg69klialbkb8, I13jboebjcbglr, I30pg328m00nr3, I381dkhrurdhrs, Ic8hi3qr11vngc, Ibjdlecumfu7q7, Ia9ems1kg7laoc, I92fq0fa45vi3, Id01dpp0dn2cj0, I6nu8k62ck9o8o, I6s1nbislhk619, Iea25i7vqm7ot3, I1rvj4ubaplho0, Ia3uu7lqcc1q1i, I7crucfnonitkn, I7tmrp94r9sq4n, Ie048vclmk114d, Ieenot9p3du2jq, I9dtcee8vhssnd, I7itflu6klchel, Ia3c82eadg79bj, Ienusoeb625ftq, Ifvd7v8crj3oo6, I2ur0oeqg495j8, I4jaa15tfvpb9p, Iep27ialq4a7o7, Iasu5jvoqr43mv, I9lma4rgq3f10u, I5qolde99acmd1, Iep1lmt6q3s6r3, I1fac16213rie2, Ifjt77oc391o43, Itvt1jsipv0lc, Ick3mveut33f44, I2rg5btjrsqec0, Ibdqerrooruuq9, I8u2ba9jeiu6q0, I7ieadb293k6b4, Ievr89968437gm, I44hc4lgsn4o1j, I8iksqi3eani0a, I16enopmju1p0q, Ifgqhle2413de7, I43kq8qudg7pq9, I76riseemre533, I38bmcrmh852rk, I4hcillge8de5f, I8usdc6tg7829p, Iea4g5ovhnolus, Ifmc9boeeia623, I8363i1h1dgh0n, Ibqjgs3foip9fb, Ic04t5m0ihvrp5, I3d8ss06imalrs, I1452l7htqmdul, I5k7trgmhddpc9, Ifg1v23kle5pvs, Idog3297nuhubu, I7aphsup25pr8u, Id9ivc2gke7kda, I7id9rd759h17f, Id3ajno3thjgec, I1kmrn95024uj4, Ibianp5jdpolv7, I9e73asfoaqs2i, I9ugpnf3tjcb6b, Idg56vb718jpor, Icjttivfuq4kl0, I7aqqpfb5d3acb, I67tkv8m7b9as3, I53hhk4qo3m9a6, I73e059ch622rh, I8s0297rim8oc1, Ibanc5bru9o3gt, Ia9haecbvl560l, Inkkt4kut4uln, I7c48q22j7l1q8, I51jchdmsddl7g, Ifrnnpj83g127a, I6k4ii4m9s9088, Ic4lis4f2abd9o, I7fcree6lak6uv, I4ojmnsk1dchql, Icl5s4108hio7m, I93gagnlb9gm3u, Idn2ghub1o4i40, I37r4bdai8o9mp, Ij8p6ct1brfmo, I7utese4puubr9, Id66lun10a9rk8, Ic8qh6l1k7b980, I9k1n93h3cgo9c, I2926g4h7p9e6b, I58ljmqqpidpgt, Ie5hdgsdibkjpr, I5t937m0prpjtt, I3qnba6688atis, Ibost4cg9esf17, Iab17gup71picv, I2p503tvhr95gj, I9grg7g6ua578n, I6umd4hgu2puph, I44127qd8nvu47, I5tdcum59p9pac, I2dgahqu6ln4jl, I1hn8tvlbussv, I96on68vm4ih94, Idgas9g0pc3k9g, Iaevo3h2jsoemi, Iep8a74k7e6r72, Ib6t0ubljgp22u, I3rgoh4223434f, I2vfuukfl5d6al, I9ns66h5mcst21, I5ch6hqvso9cfc, I81p9lds919n0g, I87hura2cobcv1, I3lbtb6q8ittcg, I788n87nobc2o6, I99tkds5qdlj77, Ian267bdq9joaf, I91fa8tnsgpjgh, Iemo1133hhf28q, I8o6tg2fcd6krf, Iouj49kqoegp1, Ife8sj002g6s56, I400tsccl54f69, I95l2k9b1re95f, I7i2rquf9o1sc4, I41epceuu5tcos, I44sdvnu7uoqf6, I75rts6phosqgv, Icb02sf8acip7e, Icuvu3196vt9at, Ibjg5nv0nue710, Ic7bjpulvng8ff, I821hq5m5igcn, I1fd2u5ls04lpi, If0231b9rdj4o8, I2d67dgvoue7rb, I2sfpbn9h49adg, I1fb7qva1sdhbi, I87f6s7muvahou, Idmkbek876hj4c, Icglvublte8208, Iee34otfoboion, I3096t0on20q3r, I1s5stmgs1hmpi, Im4b2ikida3i9, Ia6mtguicisar7, I98o48iiltrobs, I2p9m6o5aeern2, Ia1c7uq2ou2f8e, I8d3b6ni041b6h, I9l001vgvntb06, Ie17kej7hsdmmu, Ie9o1s2mbkduq7, I583v57rub6gg, I9f6jrn22qs7ek, I1ufpmtovuj4nl, I4e0mai1r79fau, I6nbgq3m8fo4u0, Iaitah9dps9he1, Ifq82osotbtg30, Ifoig06hjqh9bp, Idqdin6cl9bl0g, I240tht746522h, I9rh8nddi47gn0, Ih1mephl4egav, Im1pm2vf6llcn, I21jsoeb0o6476, Ier6ck0tpfo7, Ic6ecdcp9ut7jd, I27notaksll8qt, I54dj4621btbog, I8eeivtdimg5sg, I2i1mj9dta3f5r, Ie26sa5pkqc7lh, I5a9b1h9uneb16, It3rcku7atiln, I2e6ar36i5p9qo, Ifssptimng3fig, I2d4kqt7h8dvva, I6ou90sd9g7cje, I3dqh1v95db76q, Iec84e3i3f9e7f, Id99ueqaguc9dv, I931cottvong90, I1u6hbnc76ae0b, Ie8i2nun6vrn79, Ib3hb8lrtttf9v, Iet09kgtjdhfi9, Icfr2n5s5aokru, I82kd33a80644k, Ibnls8eh7606j5, I2jen5a002vjo5, I7gtc6jb6l82np, Icj4504vnoorlb, Iedc2b32l00pnc, I1eml7ojrir0mf, I89qbh680n32tc, I9ah39ggsni5h8, I64s470272rog7, Ifq40td50oojcr, I4pgd6mkjk426o, I98hpr879arfv5, I7rjrrm2njpd6g, Ielfbmscl7ukmv, I673slhfrj1s4r, Iedejl9np3oh6e, I59j15t8ardoqh, Id5kb2ocrab7gs, Ie0kb5p5oqesib, Ic8tdmoaknl87u, I1iscme8538ekh, Ia9at2kloifkm, Ic5ic29aibpkll, I6v3aulqfb3eps, I3o2122ij3mdp9, Idu9ifj08mb2m9, I8li5p36kd4j17, I5cje8jfnlum3t, I4a5vjmsc51gru, If29otd3i8i2c4, Idev1fo623d8sp, If5g8vooff6dhr, Idedks09iikehk, TransactionValidityTransactionSource, Iajbob6uln5jct, Iaqet9jc3ihboe, Ic952bubvq4k7d, I2v50gu3s1aqk6, Iekmidcnfe7b26, If7uv525tdvv7a, I2an1fs2eiebjp, If08sfhqn8ujfr, Ic4rgfgksgmm3e, I3dj14b7k3rkm5, I23mlhpams6hq8, I20378a9b4hdds, Ifogockjiq4b3, I2r0n4gcrs974b, Ie6kgk6f04rsvk, Ibkook56hopvp8, I1fl9qh2r1hf29, I4arjljr6dpflb, I45rl58hfs7m0h, I6fr2mqud652ga, Ihfphjolmsqq1, I6spmpef2c7svf, Iei2mvq0mjvt81, Iabpgqcjikia83, Icerf8h8pdu8ss, Ic1d4u2opv3fst, I42esqb0jrl6ka, I5vv5n03oo8gas, I1lb0fd61s4rqa, I1eg5d6kb1j7n, I6nubnsvttl6ea, I1c99t35ku3g7a, I49rvbh60t0d1, Ie9sr1iqcg3cgm, I1mqgk2tmnn9i2, I6lr8sctk0bi4e, I8vqm6ghktndjq } from "./common-types";
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
        Events: StorageDescriptor<[], Anonymize<I9c7e78u1qjnal>, false>;
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
    Indices: {
        /**
         * The lookup from index to account.
         */
        Accounts: StorageDescriptor<[Key: number], Anonymize<Iff9heri56m1mb>, true>;
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
    TxPause: {
        /**
         * The set of calls that are explicitly paused.
         */
        PausedCalls: StorageDescriptor<[Key: Anonymize<Idkbvh6dahk1v7>], undefined, true>;
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
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I1iu0bu1rp17tr>, true>;
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
         * The prime member that helps determine the default vote behavior in case of abstentions.
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
        ProposalOf: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I1iu0bu1rp17tr>, true>;
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
         * The prime member that helps determine the default vote behavior in case of abstentions.
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
    CouncilMembership: {
        /**
         * The current membership, stored as an ordered Vec.
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The current prime member, if one exists.
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
    ConvictionVoting: {
        /**
         * All voting for a particular voter in a particular voting class. We store the balance for the
         * number of votes that we have recorded.
         */
        VotingFor: StorageDescriptor<Anonymize<I6ouflveob4eli>, ConvictionVotingVoteVoting, false>;
        /**
         * The voting classes which have a non-zero lock requirement and the lock amounts which they
         * require. The actual amount locked on behalf of this pallet should always be the maximum of
         * this list.
         */
        ClassLocksFor: StorageDescriptor<[Key: SS58String], Anonymize<If9jidduiuq7vv>, false>;
    };
    Referenda: {
        /**
         * The next free referendum index, aka the number of referenda started so far.
         */
        ReferendumCount: StorageDescriptor<[], number, false>;
        /**
         * Information concerning any given referendum.
         */
        ReferendumInfoFor: StorageDescriptor<[Key: number], Anonymize<Ibs6u72covsi5f>, true>;
        /**
         * The sorted list of referenda ready to be decided but not yet being decided, ordered by
         * conviction-weighted approvals.
         *
         * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
         */
        TrackQueue: StorageDescriptor<[Key: number], Anonymize<If9jidduiuq7vv>, false>;
        /**
         * The number of referenda being decided currently.
         */
        DecidingCount: StorageDescriptor<[Key: number], number, false>;
        /**
         * The metadata is a general information concerning the referendum.
         * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         */
        MetadataOf: StorageDescriptor<[Key: number], FixedSizeBinary<32>, true>;
    };
    Whitelist: {
        /**
        
         */
        WhitelistedCall: StorageDescriptor<[Key: FixedSizeBinary<32>], undefined, true>;
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
    Scheduler: {
        /**
        
         */
        IncompleteSince: StorageDescriptor<[], number, true>;
        /**
         * Items to be executed, indexed by the block number that they should be executed on.
         */
        Agenda: StorageDescriptor<[Key: number], Anonymize<I9o4npulmafg3s>, false>;
        /**
         * Retry configurations for items to be executed, indexed by task address.
         */
        Retries: StorageDescriptor<[Key: Anonymize<I9jd27rnpm8ttv>], Anonymize<I56u24ncejr5kt>, true>;
        /**
         * Lookup from a name to the block number and index of the task.
         *
         * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
         * identities.
         */
        Lookup: StorageDescriptor<[Key: FixedSizeBinary<32>], Anonymize<I9jd27rnpm8ttv>, true>;
    };
    Proxy: {
        /**
         * The set of account proxies. Maps the account which has delegated to the accounts
         * which are being delegated to, together with the amount held on deposit.
         */
        Proxies: StorageDescriptor<[Key: SS58String], Anonymize<Ieg7k9e6jbge4a>, false>;
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
    Vesting: {
        /**
         * Start at
         */
        VestingStartAt: StorageDescriptor<[], number, true>;
        /**
         * Cliff vesting
         */
        Cliff: StorageDescriptor<[Key: SS58String], number, true>;
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
    DynamicFee: {
        /**
        
         */
        MinGasPrice: StorageDescriptor<[], Anonymize<I4totqt881mlti>, false>;
        /**
        
         */
        TargetMinGasPrice: StorageDescriptor<[], Anonymize<I4totqt881mlti>, true>;
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
    Tokens: {
        /**
         * The total issuance of a token type.
         */
        TotalIssuance: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Any liquidity locks of a token type under an account.
         * NOTE: Should only be accessed when setting, changing and freeing a lock.
         */
        Locks: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<Ia7pdug7cdsg8g>, false>;
        /**
         * The balance of a token type under an account.
         *
         * NOTE: If the total is ever zero, decrease account ref account.
         *
         * NOTE: This is only used in the case that this module is used to store
         * balances.
         */
        Accounts: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<Ic02kut0350gb0>, false>;
        /**
         * Named reserves on some account balances.
         */
        Reserves: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<Ia7pdug7cdsg8g>, false>;
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
    ZenlinkProtocol: {
        /**
         * Foreign foreign storage
         * The number of units of assets held by any given account.
         */
        ForeignLedger: StorageDescriptor<[Key: Anonymize<Iettgnma0t3a0g>], bigint, false>;
        /**
         * TWOX-NOTE: `AssetId` is trusted, so this is safe.
         */
        ForeignMeta: StorageDescriptor<[Key: Anonymize<Icu3qllmbdnj89>], bigint, false>;
        /**
        
         */
        ForeignList: StorageDescriptor<[], Anonymize<Idhafor8sovqeu>, false>;
        /**
         * Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
         * Last unliquidated protocol fee;
         */
        KLast: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<I4totqt881mlti>, false>;
        /**
         * (Option<fee_receiver>, fee_point)
         */
        FeeMeta: StorageDescriptor<[], Anonymize<I3t5icadd1rvs1>, false>;
        /**
         * AssetId => fee_receiver
         */
        FeeReceiver: StorageDescriptor<[Key: Anonymize<Icu3qllmbdnj89>], SS58String, true>;
        /**
        
         */
        LiquidityPairs: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<I76qpl5pst2d4o>, false>;
        /**
         * (T::AssetId, T::AssetId) -> PairStatus
         */
        PairStatuses: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<Ik66om7cc050c>, false>;
        /**
        
         */
        BootstrapPersonalSupply: StorageDescriptor<[Key: Anonymize<Iaa4kemhg4eh7v>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * End status of bootstrap
         *
         * BootstrapEndStatus: map bootstrap pair => pairStatus
         */
        BootstrapEndStatus: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<Ik66om7cc050c>, false>;
        /**
        
         */
        BootstrapRewards: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<I6sn46nd9sjbst>, false>;
        /**
        
         */
        BootstrapLimits: StorageDescriptor<[Key: Anonymize<I84fmreorpmm3e>], Anonymize<I6sn46nd9sjbst>, false>;
    };
    MerkleDistributor: {
        /**
        
         */
        MerkleDistributorMetadata: StorageDescriptor<[Key: number], Anonymize<I9d86her21jvp8>, true>;
        /**
        
         */
        NextMerkleDistributorId: StorageDescriptor<[], number, false>;
        /**
        
         */
        ClaimedBitMap: StorageDescriptor<Anonymize<I9jd27rnpm8ttv>, number, false>;
        /**
         * Accounts in the whitelist can create merkle distributor.
         */
        CreateWhiteSet: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
    };
    FlexibleFee: {
        /**
         * Universal fee currency order list for all users
         */
        UniversalFeeCurrencyOrderList: StorageDescriptor<[], Anonymize<I6ae21pstqk9et>, false>;
        /**
         * User default fee currency, if set, will be used as the first fee currency, and then use the
         * universal fee currency order list
         */
        UserDefaultFeeCurrency: StorageDescriptor<[Key: SS58String], Anonymize<Iebirugq1dbhv6>, true>;
    };
    Salp: {
        /**
         * Multisig confirm account
         */
        MultisigConfirmAccount: StorageDescriptor<[], SS58String, true>;
        /**
         * Tracker for the next available fund index
         */
        CurrentTrieIndex: StorageDescriptor<[], number, false>;
        /**
         * Tracker for the next nonce index
         */
        CurrentNonce: StorageDescriptor<[Key: number], number, false>;
        /**
         * Record contribution
         */
        QueryIdContributionInfo: StorageDescriptor<[Key: bigint], Anonymize<Icsknfl0f6r973>, true>;
        /**
         * Info on all of the funds.
         */
        Funds: StorageDescriptor<[Key: number], Anonymize<I2j3o5sgk562ak>, false>;
        /**
         * The balance can be redeemed to users.
         */
        RedeemPool: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        FailedFundsToRefund: StorageDescriptor<Anonymize<Ielgh4t8o7rcvt>, Anonymize<I2j3o5sgk562ak>, false>;
        /**
        
         */
        ReserveInfos: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I2q82ekqn8jp9r>, false>;
    };
    AssetRegistry: {
        /**
         * Next available Foreign AssetId ID.
         *
         * NextForeignAssetId: ForeignAssetId
         */
        NextForeignAssetId: StorageDescriptor<[], number, false>;
        /**
         * Next available TokenId ID.
         *
         * NextTokenId: TokenId
         */
        NextTokenId: StorageDescriptor<[], number, false>;
        /**
         * The storages for Locations.
         *
         * CurrencyIdToLocations: map CurrencyId => Option<Location>
         */
        CurrencyIdToLocations: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I4c0s5cioidn76>, true>;
        /**
         * The storages for CurrencyIds.
         *
         * LocationToCurrencyIds: map Location => Option<CurrencyId>
         */
        LocationToCurrencyIds: StorageDescriptor<[Key: Anonymize<I4c0s5cioidn76>], Anonymize<Iebirugq1dbhv6>, true>;
        /**
        
         */
        CurrencyIdToWeights: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I4q39t5hn830vp>, true>;
        /**
         * The storages for AssetMetadatas.
         *
         * AssetMetadatas: map AssetIds => Option<AssetMetadata>
         */
        AssetMetadatas: StorageDescriptor<[Key: Anonymize<I810b83nplvppm>], Anonymize<Ievgjq5dn6rae7>, true>;
        /**
         * The storages for AssetMetadata.
         *
         * CurrencyMetadatas: map CurrencyId => Option<AssetMetadata>
         */
        CurrencyMetadatas: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ievgjq5dn6rae7>, true>;
    };
    VtokenMinting: {
        /**
        
         */
        Fees: StorageDescriptor<[], Anonymize<I9jd27rnpm8ttv>, false>;
        /**
        
         */
        TokenPool: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
        
         */
        UnlockDuration: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Id6ihttoi261us>, true>;
        /**
        
         */
        OngoingTimeUnit: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Id6ihttoi261us>, true>;
        /**
        
         */
        MinimumMint: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
        
         */
        MinimumRedeem: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
        
         */
        TokenUnlockNextId: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, false>;
        /**
        
         */
        TokenUnlockLedger: StorageDescriptor<Anonymize<I3thiua0nporjs>, Anonymize<Ia9o9frjhn49u0>, true>;
        /**
        
         */
        UserUnlockLedger: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<I9v3gj6frc0u13>, true>;
        /**
        
         */
        TimeUnitUnlockLedger: StorageDescriptor<Anonymize<I8d057oj36rajf>, Anonymize<Iapmb49b0eddb4>, true>;
        /**
        
         */
        TokenToRebond: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
        /**
        
         */
        MinTimeUnit: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Id6ihttoi261us>, false>;
        /**
        
         */
        UnlockingTotal: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
        
         */
        HookIterationLimit: StorageDescriptor<[], number, false>;
        /**
        
         */
        MintWithLockBlocks: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
        /**
        
         */
        VtokenIncentiveCoef: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
        /**
        
         */
        VtokenLockLedger: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<I2eq26k0hguoqq>, true>;
    };
    Slp: {
        /**
         * One operate origin(can be a multisig account) for a currency. An operating origins are
         * normal account in Bifrost chain.
         */
        OperateOrigins: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], SS58String, true>;
        /**
         * Origins and Amounts for the staking operating account fee supplement. An operating account
         * is identified in MultiLocation format.
         */
        FeeSources: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Iadrpn9mhdu2rp>, true>;
        /**
         * Hosting fee percentage and beneficiary account for different chains
         */
        HostingFees: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I7uhs5s0pidt2q>, true>;
        /**
         * Delegators in service. A delegator is identified in MultiLocation format.
         * Currency Id + Sub-account index => MultiLocation
         */
        DelegatorsIndex2Multilocation: StorageDescriptor<Anonymize<I3thiua0nporjs>, Anonymize<I4c0s5cioidn76>, true>;
        /**
         * Delegators in service. Currency Id + MultiLocation => Sub-account index
         */
        DelegatorsMultilocation2Index: StorageDescriptor<Anonymize<I6ge61lbhbulha>, number, true>;
        /**
         * Next index of different currency delegators.
         */
        DelegatorNextIndex: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, false>;
        /**
         * (VWL) Validator in service. A validator is identified in MultiLocation format.
         */
        Validators: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ia88a8r9e89e2p>, true>;
        /**
         * (VBL) Validator Boost List -> (validator multilocation, due block number)
         */
        ValidatorBoostList: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I4qitokr7lpmpu>, true>;
        /**
         * Validators for each delegator. CurrencyId + Delegator => Vec<Validator>
         */
        ValidatorsByDelegator: StorageDescriptor<Anonymize<I6ge61lbhbulha>, Anonymize<Ia88a8r9e89e2p>, true>;
        /**
        
         */
        ValidatorsByDelegatorXcmUpdateQueue: StorageDescriptor<[Key: bigint], Anonymize<I34jhssnacefoe>, true>;
        /**
         * Delegator ledgers. A delegator is identified in MultiLocation format.
         */
        DelegatorLedgers: StorageDescriptor<Anonymize<I6ge61lbhbulha>, Anonymize<I65gcqchov0ds9>, true>;
        /**
        
         */
        DelegatorLedgerXcmUpdateQueue: StorageDescriptor<[Key: bigint], Anonymize<I9egg64gafs7r7>, true>;
        /**
         * Minimum and Maximum constraints for different chains.
         */
        MinimumsAndMaximums: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Idmnfldthdnj8h>, true>;
        /**
         * TimeUnit delay params for different chains.
         */
        CurrencyDelays: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I98pjho0jvtfaa>, true>;
        /**
         * A delegator's tuning record of exchange rate for the current time unit.
         * Currency Id + Delegator Id => latest tuned TimeUnit
         */
        DelegatorLatestTuneRecord: StorageDescriptor<Anonymize<I6ge61lbhbulha>, Anonymize<Id6ihttoi261us>, true>;
        /**
         * Currency's tuning record of exchange rate for the current time unit.
         * Currency Id => (latest tuned TimeUnit, number of tuning times)
         */
        CurrencyLatestTuneRecord: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I69hlrlj6ggqgm>, true>;
        /**
         * For each currencyId: how many times that a Currency's all delegators can tune the exchange
         * rate for a single time unit, and how much at most each time can tune the
         * exchange rate
         */
        CurrencyTuneExchangeRateLimit: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I9jd27rnpm8ttv>, true>;
        /**
         * reflect if all delegations are on a decrease/revoke status. If yes, then new user redeeming
         * is unaccepted.
         */
        DelegationsOccupied: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], boolean, true>;
        /**
        
         */
        LastTimeUpdatedOngoingTimeUnit: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
        /**
        
         */
        OngoingTimeUnitUpdateInterval: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
        /**
        
         */
        SupplementFeeAccountWhitelist: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I7t012gg35hgm4>, true>;
    };
    XcmInterface: {
        /**
         * The dest weight limit and fee for execution XCM msg sent by XcmInterface. Must be
         * sufficient, otherwise the execution of XCM msg on relaychain will fail.
         *
         * XcmWeightAndFee: map: XcmOperationType => (Weight, Balance)
         */
        XcmWeightAndFee: StorageDescriptor<Anonymize<Ib8nbo9p8dn6s1>, Anonymize<I1js2aelrc7fbg>, true>;
        /**
        
         */
        CurrentNonce: StorageDescriptor<[Key: number], number, false>;
    };
    TokenConversion: {
        /**
        
         */
        RelaychainLease: StorageDescriptor<[], number, false>;
        /**
        
         */
        ExchangeRate: StorageDescriptor<[Key: number], Anonymize<Icq8st9st73vh1>, false>;
        /**
         * exchange fee
         */
        ExchangeFee: StorageDescriptor<[], Anonymize<I8pl16po8ngde>, false>;
    };
    Farming: {
        /**
        
         */
        PoolNextId: StorageDescriptor<[], number, false>;
        /**
        
         */
        GaugePoolNextId: StorageDescriptor<[], number, false>;
        /**
        
         */
        RetireLimit: StorageDescriptor<[], number, false>;
        /**
         * Record reward pool info.
         *
         * map PoolId => PoolInfo
         */
        PoolInfos: StorageDescriptor<[Key: number], Anonymize<I4kcv5272ambf0>, true>;
        /**
         * Record gauge farming pool info.
         *
         * map PoolId => GaugePoolInfo
         */
        GaugePoolInfos: StorageDescriptor<[Key: number], Anonymize<I970q50juj0l2>, true>;
        /**
        
         */
        GaugeInfos: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Ifpaals567gacp>, true>;
        /**
         * Record share amount, reward currency and withdrawn reward amount for
         * specific `AccountId` under `PoolId`.
         *
         * double_map (PoolId, AccountId) => ShareInfo
         */
        SharesAndWithdrawnRewards: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<Ilivuv1vkc02s>, true>;
        /**
        
         */
        BoostPoolInfos: StorageDescriptor<[], Anonymize<Ianombrc3en111>, false>;
        /**
        
         */
        UserBoostInfos: StorageDescriptor<[Key: SS58String], Anonymize<I1755v7kcv6nfl>, true>;
        /**
        
         */
        BoostWhitelist: StorageDescriptor<[Key: number], undefined, true>;
        /**
        
         */
        BoostNextRoundWhitelist: StorageDescriptor<[Key: number], undefined, true>;
        /**
        
         */
        BoostVotingPools: StorageDescriptor<[Key: number], bigint, true>;
        /**
        
         */
        BoostBasicRewards: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, bigint, true>;
    };
    SystemStaking: {
        /**
         * Current Round Information
         */
        Round: StorageDescriptor<[], Anonymize<Ial6i7mt9utr8>, true>;
        /**
         * The tokenInfo for each currency
         */
        TokenStatus: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I84h6f3k470m6q>, true>;
        /**
         * All token sets
         */
        TokenList: StorageDescriptor<[], Anonymize<I6ae21pstqk9et>, false>;
    };
    SystemMaker: {
        /**
        
         */
        Infos: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I17n1fg1r6mg6q>, true>;
    };
    FeeShare: {
        /**
         * The distribution information
         */
        DistributionInfos: StorageDescriptor<[Key: number], Anonymize<Ifm7mj15s63a8e>, true>;
        /**
         * The proportion of the token distribution
         */
        TokensProportions: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>;
        /**
         * USD Standard Accumulation Logic Configuration
         */
        DollarStandardInfos: StorageDescriptor<[Key: number], Anonymize<Ieqteqhnicu2mf>, true>;
        /**
         * The next distribution ID
         */
        DistributionNextId: StorageDescriptor<[], number, false>;
        /**
         * The era length and the next era
         */
        AutoEra: StorageDescriptor<[], Anonymize<I9jd27rnpm8ttv>, false>;
    };
    CrossInOut: {
        /**
         * To store currencies that support indirect cross-in and cross-out.
         */
        CrossCurrencyRegistry: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], undefined, true>;
        /**
         * Accounts in the whitelist can issue the corresponding Currency.
         */
        IssueWhiteList: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ia2lhg7l2hilo3>, true>;
        /**
         * Accounts in the whitelist can register the mapping between a multilocation and an accountId.
         */
        RegisterWhiteList: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ia2lhg7l2hilo3>, true>;
        /**
         * Mapping a Bifrost account to a multilocation of a outer chain
         */
        AccountToOuterMultilocation: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, Anonymize<I4frqunb5hj2km>, true>;
        /**
         * Mapping a multilocation of a outer chain to a Bifrost account
         */
        OuterMultilocationToAccount: StorageDescriptor<Anonymize<I9t45q0sd1h16t>, SS58String, true>;
        /**
         * minimum crossin and crossout amount【crossinMinimum, crossoutMinimum】
         */
        CrossingMinimumAmount: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I200n1ov5tbcvr>, true>;
    };
    BbBNC: {
        /**
        
         */
        Supply: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        VeConfigs: StorageDescriptor<[], Anonymize<Iaa6gfhcgert4g>, false>;
        /**
        
         */
        Epoch: StorageDescriptor<[], Anonymize<I4totqt881mlti>, false>;
        /**
        
         */
        Locked: StorageDescriptor<[Key: bigint], Anonymize<I93ot7g316idsl>, false>;
        /**
        
         */
        UserLocked: StorageDescriptor<[Key: SS58String], bigint, false>;
        /**
        
         */
        PointHistory: StorageDescriptor<[Key: Anonymize<I4totqt881mlti>], Anonymize<I393gnb7kgq98v>, false>;
        /**
        
         */
        UserPointHistory: StorageDescriptor<Anonymize<Ifvilitm1tdmqi>, Anonymize<I393gnb7kgq98v>, false>;
        /**
        
         */
        UserPointEpoch: StorageDescriptor<[Key: bigint], Anonymize<I4totqt881mlti>, false>;
        /**
        
         */
        SlopeChanges: StorageDescriptor<[Key: number], bigint, false>;
        /**
        
         */
        IncentiveConfigs: StorageDescriptor<[Key: number], Anonymize<Iei9bnssh84mli>, false>;
        /**
        
         */
        UserRewardPerTokenPaid: StorageDescriptor<[Key: SS58String], Anonymize<I2dbamvpq4935>, false>;
        /**
        
         */
        Rewards: StorageDescriptor<[Key: SS58String], Anonymize<I2dbamvpq4935>, true>;
        /**
        
         */
        UserMarkupInfos: StorageDescriptor<[Key: SS58String], Anonymize<Iarr20ag9rpg5c>, true>;
        /**
        
         */
        LockedTokens: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, Anonymize<I5o39ti65l0u4e>, true>;
        /**
        
         */
        TotalLock: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
        
         */
        MarkupCoefficient: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ic7uu02ss1ah16>, true>;
        /**
        
         */
        Position: StorageDescriptor<[], bigint, false>;
        /**
        
         */
        UserPositions: StorageDescriptor<[Key: SS58String], Anonymize<Iafqnechp3omqg>, false>;
        /**
         * The pool ID of the user participating in the farming pool.
         */
        UserFarmingPool: StorageDescriptor<[Key: SS58String], Anonymize<Icgljjb6j82uhn>, false>;
    };
    Slpx: {
        /**
         * Contract whitelist
         */
        WhitelistAccountId: StorageDescriptor<[Key: Anonymize<I3em9l2q88o7if>], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * Charge corresponding fees for different CurrencyId
         */
        ExecutionFee: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
        /**
         * XCM fee for transferring to Moonbeam(BNC)
         */
        TransferToFee: StorageDescriptor<[Key: Anonymize<I3em9l2q88o7if>], bigint, true>;
        /**
        
         */
        XcmEthereumCallConfiguration: StorageDescriptor<[], Anonymize<Imng78fk88871>, true>;
        /**
        
         */
        CurrencyIdList: StorageDescriptor<[], Anonymize<I6ae21pstqk9et>, false>;
        /**
        
         */
        SupportXcmFeeList: StorageDescriptor<[], Anonymize<I6ae21pstqk9et>, false>;
        /**
        
         */
        OrderQueue: StorageDescriptor<[], Anonymize<Ifaba2nbbb02cs>, false>;
        /**
        
         */
        DelayBlock: StorageDescriptor<[], number, false>;
    };
    FellowshipCollective: {
        /**
         * The number of members in the collective who have at least the rank according to the index
         * of the vec.
         */
        MemberCount: StorageDescriptor<[Key: number], number, false>;
        /**
         * The current members of the collective.
         */
        Members: StorageDescriptor<[Key: SS58String], number, true>;
        /**
         * The index of each ranks's member into the group of members who have at least that rank.
         */
        IdToIndex: StorageDescriptor<Anonymize<I7svnfko10tq2e>, number, true>;
        /**
         * The members in the collective by index. All indices in the range `0..MemberCount` will
         * return `Some`, however a member's index is not guaranteed to remain unchanged over time.
         */
        IndexToId: StorageDescriptor<Anonymize<I5g2vv0ckl2m8b>, SS58String, true>;
        /**
         * Votes on a given proposal, if it is ongoing.
         */
        Voting: StorageDescriptor<Anonymize<I7svnfko10tq2e>, Anonymize<I3gg47bgkgq9tr>, true>;
        /**
        
         */
        VotingCleanup: StorageDescriptor<[Key: number], Binary, true>;
    };
    FellowshipReferenda: {
        /**
         * The next free referendum index, aka the number of referenda started so far.
         */
        ReferendumCount: StorageDescriptor<[], number, false>;
        /**
         * Information concerning any given referendum.
         */
        ReferendumInfoFor: StorageDescriptor<[Key: number], Anonymize<Ic080st7mqo0d7>, true>;
        /**
         * The sorted list of referenda ready to be decided but not yet being decided, ordered by
         * conviction-weighted approvals.
         *
         * This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
         */
        TrackQueue: StorageDescriptor<[Key: number], Anonymize<I95g6i7ilua7lq>, false>;
        /**
         * The number of referenda being decided currently.
         */
        DecidingCount: StorageDescriptor<[Key: number], number, false>;
        /**
         * The metadata is a general information concerning the referendum.
         * The `Hash` refers to the preimage of the `Preimages` provider which can be a JSON
         * dump or IPFS hash of a JSON file.
         *
         * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
         * large preimages.
         */
        MetadataOf: StorageDescriptor<[Key: number], FixedSizeBinary<32>, true>;
    };
    StableAsset: {
        /**
        
         */
        PoolCount: StorageDescriptor<[], number, false>;
        /**
        
         */
        Pools: StorageDescriptor<[Key: number], Anonymize<Ibe2akds4krf80>, true>;
        /**
        
         */
        TokenRateCaches: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, Anonymize<I200n1ov5tbcvr>, true>;
        /**
        
         */
        TokenRateHardcap: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
    };
    VtokenVoting: {
        /**
         * Information concerning any given referendum.
         */
        ReferendumInfoFor: StorageDescriptor<Anonymize<I3thiua0nporjs>, Anonymize<I5m768sb1iam8f>, true>;
        /**
         * All voting for a particular voter in a particular voting class. We store the balance for the
         * number of votes that we have recorded.
         */
        VotingFor: StorageDescriptor<[Key: SS58String], Anonymize<I2uhe6v3aqlo79>, false>;
        /**
         * The voting classes which have a non-zero lock requirement and the lock amounts which they
         * require. The actual amount locked on behalf of this pallet should always be the maximum of
         * this list.
         */
        ClassLocksFor: StorageDescriptor<[Key: SS58String], Anonymize<I2dbamvpq4935>, false>;
        /**
        
         */
        PendingReferendumInfo: StorageDescriptor<[Key: bigint], Anonymize<I3thiua0nporjs>, true>;
        /**
        
         */
        PendingVotingInfo: StorageDescriptor<[Key: bigint], Anonymize<If5lnhvjis90k>, true>;
        /**
        
         */
        PendingRemoveDelegatorVote: StorageDescriptor<[Key: bigint], Anonymize<I22oifipsnuvk4>, true>;
        /**
        
         */
        VoteLockingPeriod: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
        /**
        
         */
        UndecidingTimeout: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, true>;
        /**
        
         */
        Delegators: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Icgljjb6j82uhn>, false>;
        /**
        
         */
        VoteCapRatio: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, false>;
        /**
        
         */
        DelegatorVotes: StorageDescriptor<Anonymize<I3thiua0nporjs>, Anonymize<I42jj1su7asrm9>, false>;
        /**
        
         */
        PendingDelegatorVotes: StorageDescriptor<Anonymize<I3thiua0nporjs>, Anonymize<I42jj1su7asrm9>, false>;
        /**
        
         */
        ReferendumTimeout: StorageDescriptor<[Key: number], Anonymize<I7p4is2lmk8vmo>, false>;
        /**
        
         */
        VoteDelegatorFor: StorageDescriptor<Anonymize<I3udg9qslb775f>, number, true>;
    };
    LendMarket: {
        /**
         * The timestamp of the last calculation of accrued interest
         */
        LastAccruedInterestTime: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Liquidation free collateral.
         */
        LiquidationFreeCollaterals: StorageDescriptor<[], Anonymize<I6ae21pstqk9et>, false>;
        /**
         * Total number of collateral tokens in circulation
         * CollateralType -> Balance
         */
        TotalSupply: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Total amount of outstanding borrows of the underlying in this market
         * CurrencyId -> Balance
         */
        TotalBorrows: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Total amount of reserves of the underlying held in this market
         * CurrencyId -> Balance
         */
        TotalReserves: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Mapping of account addresses to outstanding borrow balances
         * CurrencyId -> Owner -> BorrowSnapshot
         */
        AccountBorrows: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, Anonymize<Iavngg6vh7nl2j>, false>;
        /**
         * Mapping of account addresses to deposit details
         * CollateralType -> Owner -> Deposits
         */
        AccountDeposits: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, Anonymize<Iao359lc45ru9s>, false>;
        /**
         * Mapping of account addresses to total deposit interest accrual
         * CurrencyId -> Owner -> EarnedSnapshot
         */
        AccountEarned: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, Anonymize<I1ifiaqhtj7c9>, false>;
        /**
         * Accumulator of the total earned interest rate since the opening of the market
         * CurrencyId -> u128
         */
        BorrowIndex: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * The exchange rate from the underlying to the internal collateral
         */
        ExchangeRate: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Mapping of borrow rate to currency type
         */
        BorrowRate: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Mapping of supply rate to currency type
         */
        SupplyRate: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Borrow utilization ratio
         */
        UtilizationRatio: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], number, false>;
        /**
         * Mapping of asset id to its market
         */
        Markets: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I1i2kfunpgo63g>, true>;
        /**
         * Mapping of lend token id to asset id
         * `lend token id`: voucher token id
         * `asset id`: underlying token id
         */
        UnderlyingAssetId: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Iebirugq1dbhv6>, true>;
        /**
         * Mapping of token id to supply reward speed
         */
        RewardSupplySpeed: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Mapping of token id to borrow reward speed
         */
        RewardBorrowSpeed: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * The Reward market supply state for each market
         */
        RewardSupplyState: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I6km05m2f6usv7>, false>;
        /**
         * The Reward market borrow state for each market
         */
        RewardBorrowState: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I6km05m2f6usv7>, false>;
        /**
         *  The Reward index for each market for each supplier as of the last time they accrued Reward
         */
        RewardSupplierIndex: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, bigint, false>;
        /**
         *  The Reward index for each market for each borrower as of the last time they accrued Reward
         */
        RewardBorrowerIndex: StorageDescriptor<Anonymize<Ifptjqqj04qat7>, bigint, false>;
        /**
         * The reward accrued but not yet transferred to each user.
         */
        RewardAccured: StorageDescriptor<[Key: SS58String], bigint, false>;
        /**
        
         */
        MarketBond: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I6ae21pstqk9et>, true>;
        /**
         * Storage version of the pallet.
         */
        StorageVersion: StorageDescriptor<[], Anonymize<I39fnrtffbq76n>, false>;
    };
    Prices: {
        /**
         * Mapping from currency id to it's emergency price
         */
        EmergencyPrice: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
        /**
         * Mapping from foreign vault token to our's vault token
         */
        ForeignToNativeAsset: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Iebirugq1dbhv6>, true>;
    };
    Oracle: {
        /**
         * Raw values for each oracle operators
         */
        RawValues: StorageDescriptor<Anonymize<Icoe72r8pkf564>, Anonymize<I9055m3udr8982>, true>;
        /**
         * Up to date combined value from Raw Values
         */
        Values: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I9055m3udr8982>, true>;
        /**
         * If an oracle operator has fed a value in this block
         */
        HasDispatched: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
    };
    OracleMembership: {
        /**
         * The current membership, stored as an ordered Vec.
         */
        Members: StorageDescriptor<[], Anonymize<Ia2lhg7l2hilo3>, false>;
        /**
         * The current prime member, if one exists.
         */
        Prime: StorageDescriptor<[], SS58String, true>;
    };
    ChannelCommission: {
        /**
         * Auto increment channel id
         */
        ChannelNextId: StorageDescriptor<[], number, false>;
        /**
         * Mapping a channel id to a receive account and a name, 【channel_id =>(receive_account,
         * name)】
         */
        Channels: StorageDescriptor<[Key: number], Anonymize<I92tce08cbhnmn>, true>;
        /**
         * Mapping a vtoken to a commission token, 【vtoken => commission_token】
         */
        CommissionTokens: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Iebirugq1dbhv6>, true>;
        /**
         * Mapping a channel + vtoken to corresponding commission rate, 【(channel_id, vtoken) =>
         * commission rate】
         */
        ChannelCommissionTokenRates: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, number, false>;
        /**
         * Mapping a channel + vtoken to corresponding channel share, 【(channel_id, vtoken) => share】
         */
        ChannelVtokenShares: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, number, false>;
        /**
         * 【vtoken => (old_issuance, new_issuance)】,old_issuance is the vtoken issuance at last
         * clearing point,  new_issuance is the ongoing accumulative issuance the last clearing point
         */
        VtokenIssuanceSnapshots: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * Vtoken total minted amount in the ongoing period for the chain, 【vtoken => (old_total_mint,
         * new_total_mint)】
         */
        PeriodVtokenTotalMint: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * Vtoken total redeemed amount in the ongoing period for the chain, 【vtoken =>
         * (old_total_redeem, new_total_redeem)】
         */
        PeriodVtokenTotalRedeem: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * Vtoken minted amount in the ongoing period for the channel, 【(channel_id, vtoken) =>
         * (old_mint_amount, new_mint_amount)】
         */
        PeriodChannelVtokenMint: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * Commission pool for last period and ongoing period, 【commission token => (old_amount,
         * new_amount)】
         */
        PeriodTotalCommissions: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<I200n1ov5tbcvr>, false>;
        /**
         * Commission amount that has been cleared for the current clearing process, 【commission token
         * => amount】
         */
        PeriodClearedCommissions: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, false>;
        /**
         * Commission amount to be claimed by channels, 【channel id + commission token => amount】
         */
        ChannelClaimableCommissions: StorageDescriptor<Anonymize<I26t6htp1ghfm3>, bigint, false>;
    };
    BuyBack: {
        /**
        
         */
        Infos: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], Anonymize<Ilqs3opgrh80o>, true>;
        /**
        
         */
        SwapOutMin: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
        /**
        
         */
        AddLiquiditySwapOutMin: StorageDescriptor<[Key: Anonymize<Iebirugq1dbhv6>], bigint, true>;
    };
    SlpV2: {
        /**
         * Configuration for different staking protocols.
         */
        ConfigurationByStakingProtocol: StorageDescriptor<[Key: Anonymize<I60rdchrdlh152>], Anonymize<Iamub7qfj1haap>, true>;
        /**
         * StakingProtocol + DelegatorIndex => Delegator
         */
        DelegatorByStakingProtocolAndDelegatorIndex: StorageDescriptor<Anonymize<Ihtnsu0oqpkmt>, Anonymize<Ickhdoqhl8bqbi>, true>;
        /**
         * StakingProtocol + Delegator => DelegatorIndex
         */
        DelegatorIndexByStakingProtocolAndDelegator: StorageDescriptor<Anonymize<I1ia1mr5j8i0fe>, number, true>;
        /**
         * StakingProtocol + DelegatorIndex => Delegator
         */
        LedgerByStakingProtocolAndDelegator: StorageDescriptor<Anonymize<I1ia1mr5j8i0fe>, Anonymize<I3ifohh97v7oqs>, true>;
        /**
         * Validators for different staking protocols.
         */
        ValidatorsByStakingProtocolAndDelegator: StorageDescriptor<Anonymize<I1ia1mr5j8i0fe>, Anonymize<I7p8qimonpk9dr>, false>;
        /**
         * Next index of different staking protocols.
         */
        NextDelegatorIndexByStakingProtocol: StorageDescriptor<[Key: Anonymize<I60rdchrdlh152>], number, false>;
        /**
         * Pending status for different query id.
         */
        PendingStatusByQueryId: StorageDescriptor<[Key: bigint], Anonymize<I9p3c3ohdngoau>, true>;
        /**
         * Last update ongoing time unit block number for different staking protocols.
         */
        LastUpdateOngoingTimeUnitBlockNumber: StorageDescriptor<[Key: Anonymize<I60rdchrdlh152>], number, false>;
        /**
         * Last update token exchange rate block number for different staking protocols.
         */
        LastUpdateTokenExchangeRateBlockNumber: StorageDescriptor<Anonymize<I1ia1mr5j8i0fe>, number, false>;
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
    Indices: {
        /**
         *Assign an previously unassigned index.
         *
         *Payment: `Deposit` is reserved from the sender account.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `index`: the index to be claimed. This must not be in use.
         *
         *Emits `IndexAssigned` if successful.
         *
         *## Complexity
         *- `O(1)`.
         */
        claim: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Assign an index already owned by the sender to another account. The balance reservation
         *is effectively transferred to the new account.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *- `index`: the index to be re-assigned. This must be owned by the sender.
         *- `new`: the new owner of the index. This function is a no-op if it is equal to sender.
         *
         *Emits `IndexAssigned` if successful.
         *
         *## Complexity
         *- `O(1)`.
         */
        transfer: TxDescriptor<Anonymize<I1u3ac7lafvv5b>>;
        /**
         *Free up an index owned by the sender.
         *
         *Payment: Any previous deposit placed for the index is unreserved in the sender account.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must own the index.
         *
         *- `index`: the index to be freed. This must be owned by the sender.
         *
         *Emits `IndexFreed` if successful.
         *
         *## Complexity
         *- `O(1)`.
         */
        free: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Force an index to an account. This doesn't require a deposit. If the index is already
         *held, then any deposit is reimbursed to its current owner.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *- `index`: the index to be (re-)assigned.
         *- `new`: the new owner of the index. This function is a no-op if it is equal to sender.
         *- `freeze`: if set to `true`, will freeze the index so it cannot be transferred.
         *
         *Emits `IndexAssigned` if successful.
         *
         *## Complexity
         *- `O(1)`.
         */
        force_transfer: TxDescriptor<Anonymize<I5teebeg0opib2>>;
        /**
         *Freeze an index so it will always point to the sender account. This consumes the
         *deposit.
         *
         *The dispatch origin for this call must be _Signed_ and the signing account must have a
         *non-frozen account `index`.
         *
         *- `index`: the index to be frozen in place.
         *
         *Emits `IndexFrozen` if successful.
         *
         *## Complexity
         *- `O(1)`.
         */
        freeze: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
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
    TxPause: {
        /**
         *Pause a call.
         *
         *Can only be called by [`Config::PauseOrigin`].
         *Emits an [`Event::CallPaused`] event on success.
         */
        pause: TxDescriptor<Anonymize<Iba7pefg0d11kh>>;
        /**
         *Un-pause a call.
         *
         *Can only be called by [`Config::UnpauseOrigin`].
         *Emits an [`Event::CallUnpaused`] event on success.
         */
        unpause: TxDescriptor<Anonymize<I2pjehun5ehh5i>>;
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
        transfer_allow_death: TxDescriptor<Anonymize<I65i612een2ak>>;
        /**
         *Exactly as `transfer_allow_death`, except the origin must be root and the source account
         *may be specified.
         */
        force_transfer: TxDescriptor<Anonymize<I5vvf47ira6s09>>;
        /**
         *Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
         *kill the origin account.
         *
         *99% of the time you want [`transfer_allow_death`] instead.
         *
         *[`transfer_allow_death`]: struct.Pallet.html#method.transfer
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I65i612een2ak>>;
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
        transfer_all: TxDescriptor<Anonymize<I5ns79ftlq8cnl>>;
        /**
         *Unreserve some balance from a user by force.
         *
         *Can only be called by ROOT.
         */
        force_unreserve: TxDescriptor<Anonymize<I59ofijoau4bjh>>;
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
        force_set_balance: TxDescriptor<Anonymize<Ieka2e164ntfss>>;
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
    Democracy: {
        /**
         *Propose a sensitive action to be taken.
         *
         *The dispatch origin of this call must be _Signed_ and the sender must
         *have funds to cover the deposit.
         *
         *- `proposal_hash`: The hash of the proposal preimage.
         *- `value`: The amount of deposit (must be at least `MinimumDeposit`).
         *
         *Emits `Proposed`.
         */
        propose: TxDescriptor<Anonymize<I1moso5oagpiea>>;
        /**
         *Signals agreement with a particular proposal.
         *
         *The dispatch origin of this call must be _Signed_ and the sender
         *must have funds to cover the deposit, equal to the original deposit.
         *
         *- `proposal`: The index of the proposal to second.
         */
        second: TxDescriptor<Anonymize<Ibeb4n9vpjefp3>>;
        /**
         *Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
         *otherwise it is a vote to keep the status quo.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `ref_index`: The index of the referendum to vote for.
         *- `vote`: The vote configuration.
         */
        vote: TxDescriptor<Anonymize<Id7murq9s9fg6h>>;
        /**
         *Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
         *referendum.
         *
         *The dispatch origin of this call must be `CancellationOrigin`.
         *
         *-`ref_index`: The index of the referendum to cancel.
         *
         *Weight: `O(1)`.
         */
        emergency_cancel: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *Schedule a referendum to be tabled once it is legal to schedule an external
         *referendum.
         *
         *The dispatch origin of this call must be `ExternalOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         */
        external_propose: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule a majority-carries referendum to be tabled next once it is legal to schedule
         *an external referendum.
         *
         *The dispatch of this call must be `ExternalMajorityOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         *
         *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         *pre-scheduled `external_propose` call.
         *
         *Weight: `O(1)`
         */
        external_propose_majority: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
         *schedule an external referendum.
         *
         *The dispatch of this call must be `ExternalDefaultOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal.
         *
         *Unlike `external_propose`, blacklisting has no effect on this and it may replace a
         *pre-scheduled `external_propose` call.
         *
         *Weight: `O(1)`
         */
        external_propose_default: TxDescriptor<Anonymize<I4f7jul8ljs54r>>;
        /**
         *Schedule the currently externally-proposed majority-carries referendum to be tabled
         *immediately. If there is no externally-proposed referendum currently, or if there is one
         *but it is not a majority-carries referendum then it fails.
         *
         *The dispatch of this call must be `FastTrackOrigin`.
         *
         *- `proposal_hash`: The hash of the current external proposal.
         *- `voting_period`: The period that is allowed for voting on this proposal. Increased to
         *	Must be always greater than zero.
         *	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
         *- `delay`: The number of block after voting has ended in approval and this should be
         *  enacted. This doesn't have a minimum amount.
         *
         *Emits `Started`.
         *
         *Weight: `O(1)`
         */
        fast_track: TxDescriptor<Anonymize<I5agg650597e49>>;
        /**
         *Veto and blacklist the external proposal hash.
         *
         *The dispatch origin of this call must be `VetoOrigin`.
         *
         *- `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
         *
         *Emits `Vetoed`.
         *
         *Weight: `O(V + log(V))` where V is number of `existing vetoers`
         */
        veto_external: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Remove a referendum.
         *
         *The dispatch origin of this call must be _Root_.
         *
         *- `ref_index`: The index of the referendum to cancel.
         *
         *# Weight: `O(1)`.
         */
        cancel_referendum: TxDescriptor<Anonymize<Ied9mja4bq7va8>>;
        /**
         *Delegate the voting power (with some given conviction) of the sending account.
         *
         *The balance delegated is locked for as long as it's delegated, and thereafter for the
         *time appropriate for the conviction's lock period.
         *
         *The dispatch origin of this call must be _Signed_, and the signing account must either:
         *  - be delegating already; or
         *  - have no voting activity (if there is, then it will need to be removed/consolidated
         *    through `reap_vote` or `unvote`).
         *
         *- `to`: The account whose voting the `target` account's voting power will follow.
         *- `conviction`: The conviction that will be attached to the delegated votes. When the
         *  account is undelegated, the funds will be locked for the corresponding period.
         *- `balance`: The amount of the account's balance to be used in delegating. This must not
         *  be more than the account's current balance.
         *
         *Emits `Delegated`.
         *
         *Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *  voted on. Weight is charged as if maximum votes.
         */
        delegate: TxDescriptor<Anonymize<I1736r1jp6plpc>>;
        /**
         *Undelegate the voting power of the sending account.
         *
         *Tokens may be unlocked following once an amount of time consistent with the lock period
         *of the conviction with which the delegation was issued.
         *
         *The dispatch origin of this call must be _Signed_ and the signing account must be
         *currently delegating.
         *
         *Emits `Undelegated`.
         *
         *Weight: `O(R)` where R is the number of referendums the voter delegating to has
         *  voted on. Weight is charged as if maximum votes.
         */
        undelegate: TxDescriptor<undefined>;
        /**
         *Clears all public proposals.
         *
         *The dispatch origin of this call must be _Root_.
         *
         *Weight: `O(1)`.
         */
        clear_public_proposals: TxDescriptor<undefined>;
        /**
         *Unlock tokens that have an expired lock.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `target`: The account to remove the lock on.
         *
         *Weight: `O(R)` with R number of vote of target.
         */
        unlock: TxDescriptor<Anonymize<If31vrl50nund3>>;
        /**
         *Remove a vote for a referendum.
         *
         *If:
         *- the referendum was cancelled, or
         *- the referendum is ongoing, or
         *- the referendum has ended such that
         *  - the vote of the account was in opposition to the result; or
         *  - there was no conviction to the account's vote; or
         *  - the account made a split vote
         *...then the vote is removed cleanly and a following call to `unlock` may result in more
         *funds being available.
         *
         *If, however, the referendum has ended and:
         *- it finished corresponding to the vote of the account, and
         *- the account made a standard vote with conviction, and
         *- the lock period of the conviction is not over
         *...then the lock will be aggregated into the overall account's lock, which may involve
         **overlocking* (where the two locks are combined into a single lock that is the maximum
         *of both the amount locked and the time is it locked for).
         *
         *The dispatch origin of this call must be _Signed_, and the signer must have a vote
         *registered for referendum `index`.
         *
         *- `index`: The index of referendum of the vote to be removed.
         *
         *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_vote: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Remove a vote for a referendum.
         *
         *If the `target` is equal to the signer, then this function is exactly equivalent to
         *`remove_vote`. If not equal to the signer, then the vote must have expired,
         *either because the referendum was cancelled, because the voter lost the referendum or
         *because the conviction period is over.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `target`: The account of the vote to be removed; this account must have voted for
         *  referendum `index`.
         *- `index`: The index of referendum of the vote to be removed.
         *
         *Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_other_vote: TxDescriptor<Anonymize<I6s1n1athh0bbq>>;
        /**
         *Permanently place a proposal into the blacklist. This prevents it from ever being
         *proposed again.
         *
         *If called on a queued public or external proposal, then this will result in it being
         *removed. If the `ref_index` supplied is an active referendum with the proposal hash,
         *then it will be cancelled.
         *
         *The dispatch origin of this call must be `BlacklistOrigin`.
         *
         *- `proposal_hash`: The proposal hash to blacklist permanently.
         *- `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
         *cancelled.
         *
         *Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
         *  reasonable value).
         */
        blacklist: TxDescriptor<Anonymize<I3v9h9f3mpm1l8>>;
        /**
         *Remove a proposal.
         *
         *The dispatch origin of this call must be `CancelProposalOrigin`.
         *
         *- `prop_index`: The index of the proposal to cancel.
         *
         *Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
         */
        cancel_proposal: TxDescriptor<Anonymize<I9mnj4k4u8ls2c>>;
        /**
         *Set or clear a metadata of a proposal or a referendum.
         *
         *Parameters:
         *- `origin`: Must correspond to the `MetadataOwner`.
         *    - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
         *      threshold.
         *    - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
         *      threshold.
         *    - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
         *      threshold.
         *    - `Signed` by a creator for a public proposal.
         *    - `Signed` to clear a metadata for a finished referendum.
         *    - `Root` to set a metadata for an ongoing referendum.
         *- `owner`: an identifier of a metadata owner.
         *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
         */
        set_metadata: TxDescriptor<Anonymize<I2kt2u1flctk2q>>;
    };
    Council: {
        /**
         *Set the collective's membership.
         *
         *- `new_members`: The new member list. Be nice to the chain and provide it sorted.
         *- `prime`: The prime member whose vote sets the default.
         *- `old_count`: The upper bound for the previous number of members in storage. Used for
         *  weight estimation.
         *
         *The dispatch of this call must be `SetMembersOrigin`.
         *
         *NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
         *      the weight estimations rely on it to estimate dispatchable weight.
         *
         *# WARNING:
         *
         *The `pallet-collective` can also be managed by logic outside of the pallet through the
         *implementation of the trait [`ChangeMembers`].
         *Any call to `set_members` must be careful that the member set doesn't get out of sync
         *with other logic managing the member set.
         *
         *## Complexity:
         *- `O(MP + N)` where:
         *  - `M` old-members-count (code- and governance-bounded)
         *  - `N` new-members-count (code- and governance-bounded)
         *  - `P` proposals-count (code-bounded)
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *Dispatch a proposal from a member using the `Member` origin.
         *
         *Origin must be a member of the collective.
         *
         *## Complexity:
         *- `O(B + M + P)` where:
         *- `B` is `proposal` size in bytes (length-fee-bounded)
         *- `M` members-count (code-bounded)
         *- `P` complexity of dispatching `proposal`
         */
        execute: TxDescriptor<Anonymize<I7j6tqsqukhnri>>;
        /**
         *Add a new proposal to either be voted on or executed directly.
         *
         *Requires the sender to be member.
         *
         *`threshold` determines whether `proposal` is executed directly (`threshold < 2`)
         *or put up for voting.
         *
         *## Complexity
         *- `O(B + M + P1)` or `O(B + M + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - branching is influenced by `threshold` where:
         *    - `P1` is proposal execution complexity (`threshold < 2`)
         *    - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
         */
        propose: TxDescriptor<Anonymize<I59de8grgi0rgo>>;
        /**
         *Add an aye or nay vote for the sender to the given proposal.
         *
         *Requires the sender to be a member.
         *
         *Transaction fees will be waived if the member is voting on any particular proposal
         *for the first time and the call is successful. Subsequent vote changes will charge a
         *fee.
         *## Complexity
         *- `O(M)` where `M` is members-count (code- and governance-bounded)
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *Disapprove a proposal, close, and remove it from the system, regardless of its current
         *state.
         *
         *Must be called by the Root origin.
         *
         *Parameters:
         ** `proposal_hash`: The hash of the proposal that should be disapproved.
         *
         *## Complexity
         *O(P) where P is the number of max proposals
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Close a vote that is either approved, disapproved or whose voting period has ended.
         *
         *May be called by any signed account in order to finish voting and close the proposal.
         *
         *If called before the end of the voting period it will only close the vote if it is
         *has enough votes to be approved or disapproved.
         *
         *If called after the end of the voting period abstentions are counted as rejections
         *unless there is a prime member set and the prime member cast an approval.
         *
         *If the close operation completes successfully with disapproval, the transaction fee will
         *be waived. Otherwise execution of the approved operation will be charged to the caller.
         *
         *+ `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         *proposal.
         *+ `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         *`storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         *
         *## Complexity
         *- `O(B + M + P1 + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - `P1` is the complexity of `proposal` preimage.
         *  - `P2` is proposal-count (code-bounded)
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    TechnicalCommittee: {
        /**
         *Set the collective's membership.
         *
         *- `new_members`: The new member list. Be nice to the chain and provide it sorted.
         *- `prime`: The prime member whose vote sets the default.
         *- `old_count`: The upper bound for the previous number of members in storage. Used for
         *  weight estimation.
         *
         *The dispatch of this call must be `SetMembersOrigin`.
         *
         *NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
         *      the weight estimations rely on it to estimate dispatchable weight.
         *
         *# WARNING:
         *
         *The `pallet-collective` can also be managed by logic outside of the pallet through the
         *implementation of the trait [`ChangeMembers`].
         *Any call to `set_members` must be careful that the member set doesn't get out of sync
         *with other logic managing the member set.
         *
         *## Complexity:
         *- `O(MP + N)` where:
         *  - `M` old-members-count (code- and governance-bounded)
         *  - `N` new-members-count (code- and governance-bounded)
         *  - `P` proposals-count (code-bounded)
         */
        set_members: TxDescriptor<Anonymize<I38jfk5li8iang>>;
        /**
         *Dispatch a proposal from a member using the `Member` origin.
         *
         *Origin must be a member of the collective.
         *
         *## Complexity:
         *- `O(B + M + P)` where:
         *- `B` is `proposal` size in bytes (length-fee-bounded)
         *- `M` members-count (code-bounded)
         *- `P` complexity of dispatching `proposal`
         */
        execute: TxDescriptor<Anonymize<I7j6tqsqukhnri>>;
        /**
         *Add a new proposal to either be voted on or executed directly.
         *
         *Requires the sender to be member.
         *
         *`threshold` determines whether `proposal` is executed directly (`threshold < 2`)
         *or put up for voting.
         *
         *## Complexity
         *- `O(B + M + P1)` or `O(B + M + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - branching is influenced by `threshold` where:
         *    - `P1` is proposal execution complexity (`threshold < 2`)
         *    - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
         */
        propose: TxDescriptor<Anonymize<I59de8grgi0rgo>>;
        /**
         *Add an aye or nay vote for the sender to the given proposal.
         *
         *Requires the sender to be a member.
         *
         *Transaction fees will be waived if the member is voting on any particular proposal
         *for the first time and the call is successful. Subsequent vote changes will charge a
         *fee.
         *## Complexity
         *- `O(M)` where `M` is members-count (code- and governance-bounded)
         */
        vote: TxDescriptor<Anonymize<I2dtrijkm5601t>>;
        /**
         *Disapprove a proposal, close, and remove it from the system, regardless of its current
         *state.
         *
         *Must be called by the Root origin.
         *
         *Parameters:
         ** `proposal_hash`: The hash of the proposal that should be disapproved.
         *
         *## Complexity
         *O(P) where P is the number of max proposals
         */
        disapprove_proposal: TxDescriptor<Anonymize<I2ev73t79f46tb>>;
        /**
         *Close a vote that is either approved, disapproved or whose voting period has ended.
         *
         *May be called by any signed account in order to finish voting and close the proposal.
         *
         *If called before the end of the voting period it will only close the vote if it is
         *has enough votes to be approved or disapproved.
         *
         *If called after the end of the voting period abstentions are counted as rejections
         *unless there is a prime member set and the prime member cast an approval.
         *
         *If the close operation completes successfully with disapproval, the transaction fee will
         *be waived. Otherwise execution of the approved operation will be charged to the caller.
         *
         *+ `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
         *proposal.
         *+ `length_bound`: The upper bound for the length of the proposal in storage. Checked via
         *`storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
         *
         *## Complexity
         *- `O(B + M + P1 + P2)` where:
         *  - `B` is `proposal` size in bytes (length-fee-bounded)
         *  - `M` is members-count (code- and governance-bounded)
         *  - `P1` is the complexity of `proposal` preimage.
         *  - `P2` is proposal-count (code-bounded)
         */
        close: TxDescriptor<Anonymize<Ib2obgji960euh>>;
    };
    PhragmenElection: {
        /**
         *Vote for a set of candidates for the upcoming round of election. This can be called to
         *set the initial votes, or update already existing votes.
         *
         *Upon initial voting, `value` units of `who`'s balance is locked and a deposit amount is
         *reserved. The deposit is based on the number of votes and can be updated over time.
         *
         *The `votes` should:
         *  - not be empty.
         *  - be less than the number of possible candidates. Note that all current members and
         *    runners-up are also automatically candidates for the next round.
         *
         *If `value` is more than `who`'s free balance, then the maximum of the two is used.
         *
         *The dispatch origin of this call must be signed.
         *
         *### Warning
         *
         *It is the responsibility of the caller to **NOT** place all of their balance into the
         *lock and keep some for further operations.
         */
        vote: TxDescriptor<Anonymize<Iaa13icjlsj13d>>;
        /**
         *Remove `origin` as a voter.
         *
         *This removes the lock and returns the deposit.
         *
         *The dispatch origin of this call must be signed and be a voter.
         */
        remove_voter: TxDescriptor<undefined>;
        /**
         *Submit oneself for candidacy. A fixed amount of deposit is recorded.
         *
         *All candidates are wiped at the end of the term. They either become a member/runner-up,
         *or leave the system while their deposit is slashed.
         *
         *The dispatch origin of this call must be signed.
         *
         *### Warning
         *
         *Even if a candidate ends up being a member, they must call [`Call::renounce_candidacy`]
         *to get their deposit back. Losing the spot in an election will always lead to a slash.
         *
         *The number of current candidates must be provided as witness data.
         *## Complexity
         *O(C + log(C)) where C is candidate_count.
         */
        submit_candidacy: TxDescriptor<Anonymize<I98vh5ccjtf1ev>>;
        /**
         *Renounce one's intention to be a candidate for the next election round. 3 potential
         *outcomes exist:
         *
         *- `origin` is a candidate and not elected in any set. In this case, the deposit is
         *  unreserved, returned and origin is removed as a candidate.
         *- `origin` is a current runner-up. In this case, the deposit is unreserved, returned and
         *  origin is removed as a runner-up.
         *- `origin` is a current member. In this case, the deposit is unreserved and origin is
         *  removed as a member, consequently not being a candidate for the next round anymore.
         *  Similar to [`remove_member`](Self::remove_member), if replacement runners exists, they
         *  are immediately used. If the prime is renouncing, then no prime will exist until the
         *  next round.
         *
         *The dispatch origin of this call must be signed, and have one of the above roles.
         *The type of renouncing must be provided as witness data.
         *
         *## Complexity
         *  - Renouncing::Candidate(count): O(count + log(count))
         *  - Renouncing::Member: O(1)
         *  - Renouncing::RunnerUp: O(1)
         */
        renounce_candidacy: TxDescriptor<Anonymize<I3al0eab2u0gt2>>;
        /**
         *Remove a particular member from the set. This is effective immediately and the bond of
         *the outgoing member is slashed.
         *
         *If a runner-up is available, then the best runner-up will be removed and replaces the
         *outgoing member. Otherwise, if `rerun_election` is `true`, a new phragmen election is
         *started, else, nothing happens.
         *
         *If `slash_bond` is set to true, the bond of the member being removed is slashed. Else,
         *it is returned.
         *
         *The dispatch origin of this call must be root.
         *
         *Note that this does not affect the designated block number of the next election.
         *
         *## Complexity
         *- Check details of remove_and_replace_member() and do_phragmen().
         */
        remove_member: TxDescriptor<Anonymize<Ib3prtfc334m1t>>;
        /**
         *Clean all voters who are defunct (i.e. they do not serve any purpose at all). The
         *deposit of the removed voters are returned.
         *
         *This is an root function to be used only for cleaning the state.
         *
         *The dispatch origin of this call must be root.
         *
         *## Complexity
         *- Check is_defunct_voter() details.
         */
        clean_defunct_voters: TxDescriptor<Anonymize<I6fuug4i4r04hi>>;
    };
    CouncilMembership: {
        /**
         *Add a member `who` to the set.
         *
         *May only be called from `T::AddOrigin`.
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove a member `who` from the set.
         *
         *May only be called from `T::RemoveOrigin`.
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Swap out one member `remove` for another `add`.
         *
         *May only be called from `T::SwapOrigin`.
         *
         *Prime membership is *not* passed from `remove` to `add`, if extant.
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
         *Change the membership to a new set, disregarding the existing membership. Be nice and
         *pass `members` pre-sorted.
         *
         *May only be called from `T::ResetOrigin`.
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *Swap out the sending member for some other key `new`.
         *
         *May only be called from `Signed` origin of a current member.
         *
         *Prime membership is passed from the origin account to `new`, if extant.
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
         *Set the prime member. Must be a current member.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove the prime member if it exists.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        clear_prime: TxDescriptor<undefined>;
    };
    TechnicalMembership: {
        /**
         *Add a member `who` to the set.
         *
         *May only be called from `T::AddOrigin`.
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove a member `who` from the set.
         *
         *May only be called from `T::RemoveOrigin`.
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Swap out one member `remove` for another `add`.
         *
         *May only be called from `T::SwapOrigin`.
         *
         *Prime membership is *not* passed from `remove` to `add`, if extant.
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
         *Change the membership to a new set, disregarding the existing membership. Be nice and
         *pass `members` pre-sorted.
         *
         *May only be called from `T::ResetOrigin`.
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *Swap out the sending member for some other key `new`.
         *
         *May only be called from `Signed` origin of a current member.
         *
         *Prime membership is passed from the origin account to `new`, if extant.
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
         *Set the prime member. Must be a current member.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove the prime member if it exists.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        clear_prime: TxDescriptor<undefined>;
    };
    ConvictionVoting: {
        /**
         *Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
         *otherwise it is a vote to keep the status quo.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `poll_index`: The index of the poll to vote for.
         *- `vote`: The vote configuration.
         *
         *Weight: `O(R)` where R is the number of polls the voter has voted on.
         */
        vote: TxDescriptor<Anonymize<Idnsr2pndm36h0>>;
        /**
         *Delegate the voting power (with some given conviction) of the sending account for a
         *particular class of polls.
         *
         *The balance delegated is locked for as long as it's delegated, and thereafter for the
         *time appropriate for the conviction's lock period.
         *
         *The dispatch origin of this call must be _Signed_, and the signing account must either:
         *  - be delegating already; or
         *  - have no voting activity (if there is, then it will need to be removed through
         *    `remove_vote`).
         *
         *- `to`: The account whose voting the `target` account's voting power will follow.
         *- `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
         *  to this function are required.
         *- `conviction`: The conviction that will be attached to the delegated votes. When the
         *  account is undelegated, the funds will be locked for the corresponding period.
         *- `balance`: The amount of the account's balance to be used in delegating. This must not
         *  be more than the account's current balance.
         *
         *Emits `Delegated`.
         *
         *Weight: `O(R)` where R is the number of polls the voter delegating to has
         *  voted on. Weight is initially charged as if maximum votes, but is refunded later.
         */
        delegate: TxDescriptor<Anonymize<Iam6m7eerh6h6v>>;
        /**
         *Undelegate the voting power of the sending account for a particular class of polls.
         *
         *Tokens may be unlocked following once an amount of time consistent with the lock period
         *of the conviction with which the delegation was issued has passed.
         *
         *The dispatch origin of this call must be _Signed_ and the signing account must be
         *currently delegating.
         *
         *- `class`: The class of polls to remove the delegation from.
         *
         *Emits `Undelegated`.
         *
         *Weight: `O(R)` where R is the number of polls the voter delegating to has
         *  voted on. Weight is initially charged as if maximum votes, but is refunded later.
         */
        undelegate: TxDescriptor<Anonymize<I8steo882k7qns>>;
        /**
         *Remove the lock caused by prior voting/delegating which has expired within a particular
         *class.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `class`: The class of polls to unlock.
         *- `target`: The account to remove the lock on.
         *
         *Weight: `O(R)` with R number of vote of target.
         */
        unlock: TxDescriptor<Anonymize<Ic8m623qbgr5mp>>;
        /**
         *Remove a vote for a poll.
         *
         *If:
         *- the poll was cancelled, or
         *- the poll is ongoing, or
         *- the poll has ended such that
         *  - the vote of the account was in opposition to the result; or
         *  - there was no conviction to the account's vote; or
         *  - the account made a split vote
         *...then the vote is removed cleanly and a following call to `unlock` may result in more
         *funds being available.
         *
         *If, however, the poll has ended and:
         *- it finished corresponding to the vote of the account, and
         *- the account made a standard vote with conviction, and
         *- the lock period of the conviction is not over
         *...then the lock will be aggregated into the overall account's lock, which may involve
         **overlocking* (where the two locks are combined into a single lock that is the maximum
         *of both the amount locked and the time is it locked for).
         *
         *The dispatch origin of this call must be _Signed_, and the signer must have a vote
         *registered for poll `index`.
         *
         *- `index`: The index of poll of the vote to be removed.
         *- `class`: Optional parameter, if given it indicates the class of the poll. For polls
         *  which have finished or are cancelled, this must be `Some`.
         *
         *Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_vote: TxDescriptor<Anonymize<I5f178ab6b89t3>>;
        /**
         *Remove a vote for a poll.
         *
         *If the `target` is equal to the signer, then this function is exactly equivalent to
         *`remove_vote`. If not equal to the signer, then the vote must have expired,
         *either because the poll was cancelled, because the voter lost the poll or
         *because the conviction period is over.
         *
         *The dispatch origin of this call must be _Signed_.
         *
         *- `target`: The account of the vote to be removed; this account must have voted for poll
         *  `index`.
         *- `index`: The index of poll of the vote to be removed.
         *- `class`: The class of the poll.
         *
         *Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
         *  Weight is calculated for the maximum number of vote.
         */
        remove_other_vote: TxDescriptor<Anonymize<Ieg7p9mojce0qk>>;
    };
    Referenda: {
        /**
         *Propose a referendum on a privileged action.
         *
         *- `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
         *  available.
         *- `proposal_origin`: The origin from which the proposal should be executed.
         *- `proposal`: The proposal.
         *- `enactment_moment`: The moment that the proposal should be enacted.
         *
         *Emits `Submitted`.
         */
        submit: TxDescriptor<Anonymize<Iaur73da4vrh3b>>;
        /**
         *Post the Decision Deposit for a referendum.
         *
         *- `origin`: must be `Signed` and the account must have funds available for the
         *  referendum's track's Decision Deposit.
         *- `index`: The index of the submitted referendum whose Decision Deposit is yet to be
         *  posted.
         *
         *Emits `DecisionDepositPlaced`.
         */
        place_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Refund the Decision Deposit for a closed referendum back to the depositor.
         *
         *- `origin`: must be `Signed` or `Root`.
         *- `index`: The index of a closed referendum whose Decision Deposit has not yet been
         *  refunded.
         *
         *Emits `DecisionDepositRefunded`.
         */
        refund_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Cancel an ongoing referendum.
         *
         *- `origin`: must be the `CancelOrigin`.
         *- `index`: The index of the referendum to be cancelled.
         *
         *Emits `Cancelled`.
         */
        cancel: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Cancel an ongoing referendum and slash the deposits.
         *
         *- `origin`: must be the `KillOrigin`.
         *- `index`: The index of the referendum to be cancelled.
         *
         *Emits `Killed` and `DepositSlashed`.
         */
        kill: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Advance a referendum onto its next logical state. Only used internally.
         *
         *- `origin`: must be `Root`.
         *- `index`: the referendum to be advanced.
         */
        nudge_referendum: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Advance a track onto its next logical state. Only used internally.
         *
         *- `origin`: must be `Root`.
         *- `track`: the track to be advanced.
         *
         *Action item for when there is now one fewer referendum in the deciding phase and the
         *`DecidingCount` is not yet updated. This means that we should either:
         *- begin deciding another referendum (and leave `DecidingCount` alone); or
         *- decrement `DecidingCount`.
         */
        one_fewer_deciding: TxDescriptor<Anonymize<Icbio0e1f0034b>>;
        /**
         *Refund the Submission Deposit for a closed referendum back to the depositor.
         *
         *- `origin`: must be `Signed` or `Root`.
         *- `index`: The index of a closed referendum whose Submission Deposit has not yet been
         *  refunded.
         *
         *Emits `SubmissionDepositRefunded`.
         */
        refund_submission_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Set or clear metadata of a referendum.
         *
         *Parameters:
         *- `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
         *  metadata of a finished referendum.
         *- `index`:  The index of a referendum to set or clear metadata for.
         *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
         */
        set_metadata: TxDescriptor<Anonymize<I8c0vkqjjipnuj>>;
    };
    Whitelist: {
        /**
        
         */
        whitelist_call: TxDescriptor<Anonymize<I1adbcfi5uc62r>>;
        /**
        
         */
        remove_whitelisted_call: TxDescriptor<Anonymize<I1adbcfi5uc62r>>;
        /**
        
         */
        dispatch_whitelisted_call: TxDescriptor<Anonymize<Ibf6ucefn8fh49>>;
        /**
        
         */
        dispatch_whitelisted_call_with_preimage: TxDescriptor<Anonymize<I6ktbtrls224jl>>;
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
         *- `remote_fees_id`: One of the included `assets` to be be used to pay fees.
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
        batch: TxDescriptor<Anonymize<Ifgf2lv1kbqov7>>;
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
        as_derivative: TxDescriptor<Anonymize<I1ucinofptavlh>>;
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
        batch_all: TxDescriptor<Anonymize<Ifgf2lv1kbqov7>>;
        /**
         *Dispatches a function call with a provided origin.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *## Complexity
         *- O(1).
         */
        dispatch_as: TxDescriptor<Anonymize<Ifcksl2knoosec>>;
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
        force_batch: TxDescriptor<Anonymize<Ifgf2lv1kbqov7>>;
        /**
         *Dispatch a function call with a specified weight.
         *
         *This function does not check the weight of the call, and instead allows the
         *Root origin to specify the weight of the call.
         *
         *The dispatch origin for this call must be _Root_.
         */
        with_weight: TxDescriptor<Anonymize<I946f5igftuiau>>;
    };
    Scheduler: {
        /**
         *Anonymously schedule a task.
         */
        schedule: TxDescriptor<Anonymize<I2mguj9c7439e8>>;
        /**
         *Cancel an anonymously scheduled task.
         */
        cancel: TxDescriptor<Anonymize<I5n4sebgkfr760>>;
        /**
         *Schedule a named task.
         */
        schedule_named: TxDescriptor<Anonymize<Ish5gp6f54bck>>;
        /**
         *Cancel a named scheduled task.
         */
        cancel_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
        /**
         *Anonymously schedule a task after a delay.
         */
        schedule_after: TxDescriptor<Anonymize<I7l3dpep93imqm>>;
        /**
         *Schedule a named task after a delay.
         */
        schedule_named_after: TxDescriptor<Anonymize<Iea1arudhpnpah>>;
        /**
         *Set a retry configuration for a task so that, in case its scheduled run fails, it will
         *be retried after `period` blocks, for a total amount of `retries` retries or until it
         *succeeds.
         *
         *Tasks which need to be scheduled for a retry are still subject to weight metering and
         *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
         *normally while the task is retrying.
         *
         *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
         *clones of the original task. Their retry configuration will be derived from the
         *original task's configuration, but will have a lower value for `remaining` than the
         *original `total_retries`.
         */
        set_retry: TxDescriptor<Anonymize<Ieg3fd8p4pkt10>>;
        /**
         *Set a retry configuration for a named task so that, in case its scheduled run fails, it
         *will be retried after `period` blocks, for a total amount of `retries` retries or until
         *it succeeds.
         *
         *Tasks which need to be scheduled for a retry are still subject to weight metering and
         *agenda space, same as a regular task. If a periodic task fails, it will be scheduled
         *normally while the task is retrying.
         *
         *Tasks scheduled as a result of a retry for a periodic task are unnamed, non-periodic
         *clones of the original task. Their retry configuration will be derived from the
         *original task's configuration, but will have a lower value for `remaining` than the
         *original `total_retries`.
         */
        set_retry_named: TxDescriptor<Anonymize<I8kg5ll427kfqq>>;
        /**
         *Removes the retry configuration of a task.
         */
        cancel_retry: TxDescriptor<Anonymize<I467333262q1l9>>;
        /**
         *Cancel the retry configuration of a named task.
         */
        cancel_retry_named: TxDescriptor<Anonymize<Ifs1i5fk9cqvr6>>;
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
        proxy: TxDescriptor<Anonymize<I4h9fg0e30t24s>>;
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
        add_proxy: TxDescriptor<Anonymize<Ic8921q56j7e76>>;
        /**
         *Unregister a proxy account for the sender.
         *
         *The dispatch origin for this call must be _Signed_.
         *
         *Parameters:
         *- `proxy`: The account that the `caller` would like to remove as a proxy.
         *- `proxy_type`: The permissions currently enabled for the removed proxy account.
         */
        remove_proxy: TxDescriptor<Anonymize<Ic8921q56j7e76>>;
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
        create_pure: TxDescriptor<Anonymize<I2egj4q248jk1a>>;
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
        kill_pure: TxDescriptor<Anonymize<Ic0caeuh81btl>>;
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
        announce: TxDescriptor<Anonymize<Idj9faf6hgsdur>>;
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
        remove_announcement: TxDescriptor<Anonymize<Idj9faf6hgsdur>>;
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
        reject_announcement: TxDescriptor<Anonymize<I8mj1nm903hpts>>;
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
        proxy_announced: TxDescriptor<Anonymize<Ifun0ood196g9n>>;
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
        as_multi_threshold_1: TxDescriptor<Anonymize<Isqlsstl7j1o4>>;
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
        as_multi: TxDescriptor<Anonymize<I3u4d2ab3msvn8>>;
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
        add_registrar: TxDescriptor<Anonymize<I73kffnn32g4c7>>;
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
        set_identity: TxDescriptor<Anonymize<I2kds5jji7slh8>>;
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
         *Self::registrars().get(reg_index).unwrap().fee
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
        set_account_id: TxDescriptor<Anonymize<I1u3ac7lafvv5b>>;
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
        provide_judgement: TxDescriptor<Anonymize<I9h4cqmadpj7l0>>;
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
        kill_identity: TxDescriptor<Anonymize<If31vrl50nund3>>;
        /**
         *Add the given account to the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        add_sub: TxDescriptor<Anonymize<I29bkdd7n16li1>>;
        /**
         *Alter the associated name of the given sub-account.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        rename_sub: TxDescriptor<Anonymize<I29bkdd7n16li1>>;
        /**
         *Remove the given account from the sender's subs.
         *
         *Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
         *to the sender.
         *
         *The dispatch origin for this call must be _Signed_ and the sender must have a registered
         *sub identity of `sub`.
         */
        remove_sub: TxDescriptor<Anonymize<I9jb9hqm18runn>>;
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
        add_username_authority: TxDescriptor<Anonymize<I85htvo8b885h>>;
        /**
         *Remove `authority` from the username authorities.
         */
        remove_username_authority: TxDescriptor<Anonymize<I95j99om5qfj06>>;
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
        set_username_for: TxDescriptor<Anonymize<Ifh75tbmlqktju>>;
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
        vest_other: TxDescriptor<Anonymize<If31vrl50nund3>>;
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
        vested_transfer: TxDescriptor<Anonymize<I3usr0jpt8ovnk>>;
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
        force_vested_transfer: TxDescriptor<Anonymize<I5a5fh6anhjgu7>>;
        /**
        
         */
        init_vesting_start_at: TxDescriptor<Anonymize<I3atr9j3ums3m2>>;
        /**
        
         */
        set_vesting_per_block: TxDescriptor<Anonymize<I2bvdo47pdo59f>>;
        /**
        
         */
        force_set_cliff: TxDescriptor<Anonymize<I2okmh2c5ub01c>>;
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
    };
    Treasury: {
        /**
         *Put forward a suggestion for spending.
         *
         *## Dispatch Origin
         *
         *Must be signed.
         *
         *## Details
         *A deposit proportional to the value is reserved and slashed if the proposal is rejected.
         *It is returned once the proposal is awarded.
         *
         *### Complexity
         *- O(1)
         *
         *## Events
         *
         *Emits [`Event::Proposed`] if successful.
         */
        propose_spend: TxDescriptor<Anonymize<I12ng1otu7kekg>>;
        /**
         *Reject a proposed spend.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::RejectOrigin`].
         *
         *## Details
         *The original deposit will be slashed.
         *
         *### Complexity
         *- O(1)
         *
         *## Events
         *
         *Emits [`Event::Rejected`] if successful.
         */
        reject_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *Approve a proposal.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::ApproveOrigin`].
         *
         *## Details
         *
         *At a later time, the proposal will be allocated to the beneficiary and the original
         *deposit will be returned.
         *
         *### Complexity
         * - O(1).
         *
         *## Events
         *
         *No events are emitted from this dispatch.
         */
        approve_proposal: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *Propose and approve a spend of treasury funds.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::SpendOrigin`] with the `Success` value being at least `amount`.
         *
         *### Details
         *NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
         *beneficiary.
         *
         *### Parameters
         *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         *- `beneficiary`: The destination account for the transfer.
         *
         *## Events
         *
         *Emits [`Event::SpendApproved`] if successful.
         */
        spend_local: TxDescriptor<Anonymize<I7fcl4aua07ato>>;
        /**
         *Force a previously approved proposal to be removed from the approval queue.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::RejectOrigin`].
         *
         *## Details
         *
         *The original deposit will no longer be returned.
         *
         *### Parameters
         *- `proposal_id`: The index of a proposal
         *
         *### Complexity
         *- O(A) where `A` is the number of approvals
         *
         *### Errors
         *- [`Error::ProposalNotApproved`]: The `proposal_id` supplied was not found in the
         *  approval queue, i.e., the proposal has not been approved. This could also mean the
         *  proposal does not exist altogether, thus there is no way it would have been approved
         *  in the first place.
         */
        remove_approval: TxDescriptor<Anonymize<Icm9m0qeemu66d>>;
        /**
         *Propose and approve a spend of treasury funds.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::SpendOrigin`] with the `Success` value being at least
         *`amount` of `asset_kind` in the native asset. The amount of `asset_kind` is converted
         *for assertion using the [`Config::BalanceConverter`].
         *
         *## Details
         *
         *Create an approved spend for transferring a specific `amount` of `asset_kind` to a
         *designated beneficiary. The spend must be claimed using the `payout` dispatchable within
         *the [`Config::PayoutPeriod`].
         *
         *### Parameters
         *- `asset_kind`: An indicator of the specific asset class to be spent.
         *- `amount`: The amount to be transferred from the treasury to the `beneficiary`.
         *- `beneficiary`: The beneficiary of the spend.
         *- `valid_from`: The block number from which the spend can be claimed. It can refer to
         *  the past if the resulting spend has not yet expired according to the
         *  [`Config::PayoutPeriod`]. If `None`, the spend can be claimed immediately after
         *  approval.
         *
         *## Events
         *
         *Emits [`Event::AssetSpendApproved`] if successful.
         */
        spend: TxDescriptor<Anonymize<I6qq5nnbjegi8u>>;
        /**
         *Claim a spend.
         *
         *## Dispatch Origin
         *
         *Must be signed.
         *
         *## Details
         *
         *Spends must be claimed within some temporal bounds. A spend may be claimed within one
         *[`Config::PayoutPeriod`] from the `valid_from` block.
         *In case of a payout failure, the spend status must be updated with the `check_status`
         *dispatchable before retrying with the current function.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::Paid`] if successful.
         */
        payout: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Check the status of the spend and remove it from the storage if processed.
         *
         *## Dispatch Origin
         *
         *Must be signed.
         *
         *## Details
         *
         *The status check is a prerequisite for retrying a failed payout.
         *If a spend has either succeeded or expired, it is removed from the storage by this
         *function. In such instances, transaction fees are refunded.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::PaymentFailed`] if the spend payout has failed.
         *Emits [`Event::SpendProcessed`] if the spend payout has succeed.
         */
        check_status: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Void previously approved spend.
         *
         *## Dispatch Origin
         *
         *Must be [`Config::RejectOrigin`].
         *
         *## Details
         *
         *A spend void is only possible if the payout has not been attempted yet.
         *
         *### Parameters
         *- `index`: The spend index.
         *
         *## Events
         *
         *Emits [`Event::AssetSpendVoided`] if successful.
         */
        void_spend: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    Preimage: {
        /**
         *Register a preimage on-chain.
         *
         *If the preimage was previously requested, no fees or deposits are taken for providing
         *the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
         */
        note_preimage: TxDescriptor<Anonymize<I82nfqfkd48n10>>;
        /**
         *Clear an unrequested preimage from the runtime storage.
         *
         *If `len` is provided, then it will be a much cheaper operation.
         *
         *- `hash`: The hash of the preimage to be removed from the store.
         *- `len`: The length of the preimage of `hash`.
         */
        unnote_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Request a preimage be uploaded to the chain without paying any fees or deposits.
         *
         *If the preimage requests has already been provided on-chain, we unreserve any deposit
         *a user may have paid, and take the control of the preimage out of their hands.
         */
        request_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Clear a previously made request for a preimage.
         *
         *NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
         */
        unrequest_preimage: TxDescriptor<Anonymize<I1jm8m1rh9e20v>>;
        /**
         *Ensure that the a bulk of pre-images is upgraded.
         *
         *The caller pays no fee if at least 90% of pre-images were successfully updated.
         */
        ensure_updated: TxDescriptor<Anonymize<I3o5j3bli1pd8e>>;
    };
    Ethereum: {
        /**
         *Transact an Ethereum transaction.
         */
        transact: TxDescriptor<Anonymize<Ia8ogbeici6lip>>;
    };
    EVM: {
        /**
         *Withdraw balance from EVM into currency/balances pallet.
         */
        withdraw: TxDescriptor<Anonymize<Idcabvplu05lea>>;
        /**
         *Issue an EVM call operation. This is similar to a message call transaction in Ethereum.
         */
        call: TxDescriptor<Anonymize<I2ncccle6pmhd9>>;
        /**
         *Issue an EVM create operation. This is similar to a contract creation transaction in
         *Ethereum.
         */
        create: TxDescriptor<Anonymize<I92bnd3pe0civj>>;
        /**
         *Issue an EVM create2 operation.
         */
        create2: TxDescriptor<Anonymize<Ic84i538n8bl8j>>;
    };
    DynamicFee: {
        /**
        
         */
        note_min_gas_price_target: TxDescriptor<Anonymize<I6v8kghkt0dksl>>;
    };
    EVMAccounts: {
        /**
         *Binds a Substrate address to EVM address.
         *After binding, the EVM is able to convert an EVM address to the original Substrate
         *address. Without binding, the EVM converts an EVM address to a truncated Substrate
         *address, which doesn't correspond to the origin address.
         *
         *Binding an address is not necessary for interacting with the EVM.
         *
         *Parameters:
         *- `origin`: Substrate account binding an address
         *
         *Emits `EvmAccountBound` event when successful.
         */
        bind_evm_address: TxDescriptor<undefined>;
        /**
         *Adds an EVM address to the list of addresses that are allowed to deploy smart contracts.
         *
         *Parameters:
         *- `origin`: Substrate account whitelisting an address. Must be `ControllerOrigin`.
         *- `address`: EVM address that is whitelisted
         *
         *Emits `DeployerAdded` event when successful.
         */
        add_contract_deployer: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *Removes an EVM address from the list of addresses that are allowed to deploy smart
         *contracts.
         *
         *Parameters:
         *- `origin`: Substrate account removing the EVM address from the whitelist. Must be
         *  `ControllerOrigin`.
         *- `address`: EVM address that is removed from the whitelist
         *
         *Emits `DeployerRemoved` event when successful.
         */
        remove_contract_deployer: TxDescriptor<Anonymize<Itmchvgqfl28g>>;
        /**
         *Removes the account's EVM address from the list of addresses that are allowed to deploy
         *smart contracts. Based on the best practices, this extrinsic can be called by any
         *whitelisted account to renounce their own permission.
         *
         *Parameters:
         *- `origin`: Substrate account removing their EVM address from the whitelist.
         *
         *Emits `DeployerRemoved` event when successful.
         */
        renounce_contract_deployer: TxDescriptor<undefined>;
    };
    XTokens: {
        /**
         *Transfer native currencies.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer: TxDescriptor<Anonymize<I5culoml3m3hc5>>;
        /**
         *Transfer `Asset`.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiasset: TxDescriptor<Anonymize<Idu1ujel33jksu>>;
        /**
         *Transfer native currencies specifying the fee and amount as
         *separate.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee` is the amount to be spent to pay for execution in destination
         *chain. Both fee and amount will be subtracted form the callers
         *balance.
         *
         *If `fee` is not high enough to cover for the execution costs in the
         *destination chain, then the assets will be trapped in the
         *destination chain
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_with_fee: TxDescriptor<Anonymize<Icmdiibb69taq4>>;
        /**
         *Transfer `Asset` specifying the fee and amount as separate.
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee` is the Asset to be spent to pay for execution in
         *destination chain. Both fee and amount will be subtracted form the
         *callers balance For now we only accept fee and asset having the same
         *`Location` id.
         *
         *If `fee` is not high enough to cover for the execution costs in the
         *destination chain, then the assets will be trapped in the
         *destination chain
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiasset_with_fee: TxDescriptor<Anonymize<I40fog3d0qlub1>>;
        /**
         *Transfer several currencies specifying the item to be used as fee
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee_item` is index of the currencies tuple that we want to use for
         *payment
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multicurrencies: TxDescriptor<Anonymize<I2vqbh54f2cif2>>;
        /**
         *Transfer several `Asset` specifying the item to be used as fee
         *
         *`dest_weight_limit` is the weight for XCM execution on the dest
         *chain, and it would be charged from the transferred assets. If set
         *below requirements, the execution may fail and assets wouldn't be
         *received.
         *
         *`fee_item` is index of the Assets that we want to use for
         *payment
         *
         *It's a no-op if any error on local XCM execution or message sending.
         *Note sending assets out per se doesn't guarantee they would be
         *received. Receiving depends on if the XCM message could be delivered
         *by the network, and if the receiving chain would handle
         *messages correctly.
         */
        transfer_multiassets: TxDescriptor<Anonymize<Iaif2nhfhk9qc0>>;
    };
    Tokens: {
        /**
         *Transfer some liquid free balance to another account.
         *
         *`transfer` will set the `FreeBalance` of the sender and receiver.
         *It will decrease the total issuance of the system by the
         *`TransferFee`. If the sender's account is below the existential
         *deposit as a result of the transfer, the account will be reaped.
         *
         *The dispatch origin for this call must be `Signed` by the
         *transactor.
         *
         *- `dest`: The recipient of the transfer.
         *- `currency_id`: currency type.
         *- `amount`: free balance amount to tranfer.
         */
        transfer: TxDescriptor<Anonymize<I302t0ook7k95n>>;
        /**
         *Transfer all remaining balance to the given account.
         *
         *NOTE: This function only attempts to transfer _transferable_
         *balances. This means that any locked, reserved, or existential
         *deposits (when `keep_alive` is `true`), will not be transferred by
         *this function. To ensure that this function results in a killed
         *account, you might need to prepare the account by removing any
         *reference counters, storage deposits, etc...
         *
         *The dispatch origin for this call must be `Signed` by the
         *transactor.
         *
         *- `dest`: The recipient of the transfer.
         *- `currency_id`: currency type.
         *- `keep_alive`: A boolean to determine if the `transfer_all`
         *  operation should send all of the funds the account has, causing
         *  the sender account to be killed (false), or transfer everything
         *  except at least the existential deposit, which will guarantee to
         *  keep the sender account alive (true).
         */
        transfer_all: TxDescriptor<Anonymize<If84l0hb2pbh5j>>;
        /**
         *Same as the [`transfer`] call, but with a check that the transfer
         *will not kill the origin account.
         *
         *99% of the time you want [`transfer`] instead.
         *
         *The dispatch origin for this call must be `Signed` by the
         *transactor.
         *
         *- `dest`: The recipient of the transfer.
         *- `currency_id`: currency type.
         *- `amount`: free balance amount to tranfer.
         */
        transfer_keep_alive: TxDescriptor<Anonymize<I302t0ook7k95n>>;
        /**
         *Exactly as `transfer`, except the origin must be root and the source
         *account may be specified.
         *
         *The dispatch origin for this call must be _Root_.
         *
         *- `source`: The sender of the transfer.
         *- `dest`: The recipient of the transfer.
         *- `currency_id`: currency type.
         *- `amount`: free balance amount to tranfer.
         */
        force_transfer: TxDescriptor<Anonymize<I7td476oj5kt2h>>;
        /**
         *Set the balances of a given account.
         *
         *This will alter `FreeBalance` and `ReservedBalance` in storage. it
         *will also decrease the total issuance of the system
         *(`TotalIssuance`). If the new free or reserved balance is below the
         *existential deposit, it will reap the `AccountInfo`.
         *
         *The dispatch origin for this call is `root`.
         */
        set_balance: TxDescriptor<Anonymize<I1o4mqqd02b5sj>>;
    };
    OrmlXcm: {
        /**
         *Send an XCM message as parachain sovereign.
         */
        send_as_sovereign: TxDescriptor<Anonymize<I9paqujeb1fpv6>>;
    };
    ZenlinkProtocol: {
        /**
         *Set the new receiver of the protocol fee.
         *
         *# Arguments
         *
         *- `send_to`:
         *(1) Some(receiver): it turn on the protocol fee and the new receiver account.
         *(2) None: it turn off the protocol fee.
         */
        set_fee_receiver: TxDescriptor<Anonymize<Id3v70nvrro0hv>>;
        /**
         *Set the protocol fee point.
         *
         *# Arguments
         *
         *- `fee_point`:
         *0 means that all exchange fees belong to the liquidity provider.
         *30 means that all exchange fees belong to the fee receiver.
         */
        set_fee_point: TxDescriptor<Anonymize<I6msvbss3ktmnu>>;
        /**
         *Move some assets from one holder to another.
         *
         *# Arguments
         *
         *- `asset_id`: The foreign id.
         *- `target`: The receiver of the foreign.
         *- `amount`: The amount of the foreign to transfer.
         */
        transfer: TxDescriptor<Anonymize<Ifbs87e8855hrh>>;
        /**
         *Create pair by two assets.
         *
         *The order of foreign dot effect result.
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up Pair
         *- `asset_1`: Asset which make up Pair
         */
        create_pair: TxDescriptor<Anonymize<Ibugemvm1fr87g>>;
        /**
         *Provide liquidity to a pair.
         *
         *The order of foreign dot effect result.
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up pair
         *- `asset_1`: Asset which make up pair
         *- `amount_0_desired`: Maximum amount of asset_0 added to the pair
         *- `amount_1_desired`: Maximum amount of asset_1 added to the pair
         *- `amount_0_min`: Minimum amount of asset_0 added to the pair
         *- `amount_1_min`: Minimum amount of asset_1 added to the pair
         *- `deadline`: Height of the cutoff block of this transaction
         */
        add_liquidity: TxDescriptor<Anonymize<I11kqb3hb93c3c>>;
        /**
         *Extract liquidity.
         *
         *The order of foreign dot effect result.
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up pair
         *- `asset_1`: Asset which make up pair
         *- `amount_asset_0_min`: Minimum amount of asset_0 to exact
         *- `amount_asset_1_min`: Minimum amount of asset_1 to exact
         *- `recipient`: Account that accepts withdrawal of assets
         *- `deadline`: Height of the cutoff block of this transaction
         */
        remove_liquidity: TxDescriptor<Anonymize<Ici6p55173o3kg>>;
        /**
         *Sell amount of foreign by path.
         *
         *# Arguments
         *
         *- `amount_in`: Amount of the foreign will be sold
         *- `amount_out_min`: Minimum amount of target foreign
         *- `path`: path can convert to pairs.
         *- `recipient`: Account that receive the target foreign
         *- `deadline`: Height of the cutoff block of this transaction
         */
        swap_exact_assets_for_assets: TxDescriptor<Anonymize<Ib7tkro61h34d2>>;
        /**
         *Buy amount of foreign by path.
         *
         *# Arguments
         *
         *- `amount_out`: Amount of the foreign will be bought
         *- `amount_in_max`: Maximum amount of sold foreign
         *- `path`: path can convert to pairs.
         *- `recipient`: Account that receive the target foreign
         *- `deadline`: Height of the cutoff block of this transaction
         */
        swap_assets_for_exact_assets: TxDescriptor<Anonymize<Ig5896f16psh3>>;
        /**
         *Create bootstrap pair
         *
         *The order of asset don't affect result.
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         *- `target_supply_0`: Target amount of asset_0 total contribute
         *- `target_supply_0`: Target amount of asset_1 total contribute
         *- `capacity_supply_0`: The max amount of asset_0 total contribute
         *- `capacity_supply_1`: The max amount of asset_1 total contribute
         *- `end`: The earliest ending block.
         */
        bootstrap_create: TxDescriptor<Anonymize<Ibsib3ed5u1164>>;
        /**
         *Contribute some asset to a bootstrap pair
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         *- `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
         *- `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
         *- `deadline`: Height of the cutoff block of this transaction
         */
        bootstrap_contribute: TxDescriptor<Anonymize<I6g1lhais855g9>>;
        /**
         *Claim lp asset from a bootstrap pair
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         *- `deadline`: Height of the cutoff block of this transaction
         */
        bootstrap_claim: TxDescriptor<Anonymize<I52cpe8da8o62l>>;
        /**
         *End a bootstrap pair
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         */
        bootstrap_end: TxDescriptor<Anonymize<I7h9e3cbrb3kaa>>;
        /**
         *update a bootstrap pair
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         *- `min_contribution_0`: The new min amount of asset_0 contribute
         *- `min_contribution_0`: The new min amount of asset_1 contribute
         *- `target_supply_0`: The new target amount of asset_0 total contribute
         *- `target_supply_0`: The new target amount of asset_1 total contribute
         *- `capacity_supply_0`: The new max amount of asset_0 total contribute
         *- `capacity_supply_1`: The new max amount of asset_1 total contribute
         *- `end`: The earliest ending block.
         */
        bootstrap_update: TxDescriptor<Anonymize<Ibsib3ed5u1164>>;
        /**
         *Contributor refund from disable bootstrap pair
         *
         *# Arguments
         *
         *- `asset_0`: Asset which make up bootstrap pair
         *- `asset_1`: Asset which make up bootstrap pair
         */
        bootstrap_refund: TxDescriptor<Anonymize<I7h9e3cbrb3kaa>>;
        /**
        
         */
        bootstrap_charge_reward: TxDescriptor<Anonymize<Ieaqa57prka9ld>>;
        /**
        
         */
        bootstrap_withdraw_reward: TxDescriptor<Anonymize<Iedoc1ioirjto2>>;
        /**
        
         */
        set_new_fee_receiver: TxDescriptor<Anonymize<Idqd6j83jfa92q>>;
    };
    MerkleDistributor: {
        /**
        
         */
        add_to_create_whitelist: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        remove_from_create_whitelist: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
         *`create_merkle_distributor` will create a merkle distributor,
         * which allow specified users claim asset.
         *
         *The dispatch origin for this call must be `Signed` by root.
         *
         *- `merkle_root`: The root of a merkle tree.
         *- `description`: About the purpose of this distribution.
         *- `distribute_currency`: The id of currency about this distribution.
         *- `distribute_amount`: The total currency amount of this distribution.
         */
        create_merkle_distributor: TxDescriptor<Anonymize<I1kid1a77qaur7>>;
        /**
         *`claim` Claim rewards through user information and merkle proof.
         *
         *- `merkle_distributor_id`: ID of a merkle distributor.
         *- `index`: The index of the merkle tree leaf.
         *- `account`: The owner's account of merkle proof.
         *- `merkle_proof`: The hashes with merkle tree leaf can get merkle tree root.
         */
        claim: TxDescriptor<Anonymize<Ics6651m6a7vef>>;
        /**
         *Charge currency to the account of merkle distributor
         *
         *`merkle_distributor_id`: ID of a merkle distributor.
         */
        charge: TxDescriptor<Anonymize<Ie4g7upp74eu13>>;
        /**
        
         */
        emergency_withdraw: TxDescriptor<Anonymize<I5gmbd5ouh8to0>>;
    };
    FlexibleFee: {
        /**
         *Set user default fee currency
         */
        set_user_default_fee_currency: TxDescriptor<Anonymize<Idosag2hho5h9d>>;
        /**
         *Set universal fee currency order list
         */
        set_universal_fee_currency_order_list: TxDescriptor<Anonymize<I59jcdm11snp4p>>;
    };
    Salp: {
        /**
        
         */
        set_multisig_confirm_account: TxDescriptor<Anonymize<Icbccs0ug47ilf>>;
        /**
        
         */
        fund_success: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        fund_fail: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        continue_fund: TxDescriptor<Anonymize<I1d28k4v5qap3a>>;
        /**
        
         */
        fund_retire: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        fund_end: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Create a new crowdloaning campaign for a parachain slot deposit for the current auction.
         */
        create: TxDescriptor<Anonymize<Ick23c1oi70vti>>;
        /**
         *Edit the configuration for an in-progress crowdloan.
         *
         *Can only be called by Root origin.
         */
        edit: TxDescriptor<Anonymize<I50dt84l38nc68>>;
        /**
         *Contribute to a crowd sale. This will transfer some balance over to fund a parachain
         *slot. It will be withdrawable in two instances: the parachain becomes retired; or the
         *slot is unable to be purchased and the timeout expires.
         */
        contribute: TxDescriptor<Anonymize<I1j6hllalj2epr>>;
        /**
         *Confirm contribute
         */
        confirm_contribute: TxDescriptor<Anonymize<Ieha9i74pbfov3>>;
        /**
         *Unlock the reserved vsToken/vsBond after fund success
         */
        unlock: TxDescriptor<Anonymize<Ia1u3jll6a06ae>>;
        /**
        
         */
        unlock_by_vsbond: TxDescriptor<Anonymize<Idqhqtsjlrcjh1>>;
        /**
        
         */
        unlock_vstoken: TxDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *Unlock the reserved vsToken/vsBond after fund success
         */
        batch_unlock: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Withdraw full balance of the parachain.
         *- `index`: The parachain to whose crowdloan the contribution was made.
         */
        withdraw: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        refund: TxDescriptor<Anonymize<I87diq5b0qic4c>>;
        /**
        
         */
        redeem: TxDescriptor<Anonymize<I1j6hllalj2epr>>;
        /**
         *Remove a fund after the retirement period has ended and all funds have been returned.
         */
        dissolve_refunded: TxDescriptor<Anonymize<I1d28k4v5qap3a>>;
        /**
         *Remove a fund after the retirement period has ended and all funds have been returned.
         */
        dissolve: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        buyback: TxDescriptor<Anonymize<Ie5v6njpckr05b>>;
        /**
        
         */
        confirm_contribution: TxDescriptor<Anonymize<I3iun9sig164po>>;
        /**
        
         */
        buyback_vstoken_by_stable_pool: TxDescriptor<Anonymize<Iv901693moogd>>;
        /**
        
         */
        reserve: TxDescriptor<Anonymize<Ic9o893ack6tuk>>;
        /**
        
         */
        batch_handle_reserve: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        cancel_reservation: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
    };
    AssetRegistry: {
        /**
        
         */
        register_native_asset: TxDescriptor<Anonymize<I48uhm2mc8gk2s>>;
        /**
        
         */
        update_native_asset: TxDescriptor<Anonymize<I48uhm2mc8gk2s>>;
        /**
        
         */
        register_token_metadata: TxDescriptor<Anonymize<I1n28f4ceil09b>>;
        /**
        
         */
        register_vtoken_metadata: TxDescriptor<Anonymize<Ieq8j5nmk3i7o0>>;
        /**
        
         */
        register_vstoken_metadata: TxDescriptor<Anonymize<Ieq8j5nmk3i7o0>>;
        /**
        
         */
        register_vsbond_metadata: TxDescriptor<Anonymize<Icpcfc9lhh4mbr>>;
        /**
        
         */
        register_location: TxDescriptor<Anonymize<I9jict5bcuu8ag>>;
        /**
        
         */
        force_set_location: TxDescriptor<Anonymize<I9jict5bcuu8ag>>;
        /**
        
         */
        update_currency_metadata: TxDescriptor<Anonymize<I110m02ast38uc>>;
    };
    VtokenMinting: {
        /**
        
         */
        mint: TxDescriptor<Anonymize<I8apnhdjfa68oh>>;
        /**
        
         */
        redeem: TxDescriptor<Anonymize<Ia0bl64soc0sol>>;
        /**
        
         */
        rebond: TxDescriptor<Anonymize<I78qlfm7cgvt33>>;
        /**
        
         */
        rebond_by_unlock_id: TxDescriptor<Anonymize<Ikoto1ge923bq>>;
        /**
        
         */
        set_unlock_duration: TxDescriptor<Anonymize<I53vlfub8vbal3>>;
        /**
        
         */
        set_minimum_mint: TxDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        set_minimum_redeem: TxDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        add_support_rebond_token: TxDescriptor<Anonymize<Iaub8vq6tggv2c>>;
        /**
        
         */
        remove_support_rebond_token: TxDescriptor<Anonymize<Iaub8vq6tggv2c>>;
        /**
        
         */
        set_fees: TxDescriptor<Anonymize<Idkdd97l7v4t7o>>;
        /**
        
         */
        set_hook_iteration_limit: TxDescriptor<Anonymize<Iamlqp3gs21baf>>;
        /**
        
         */
        set_unlocking_total: TxDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        set_min_time_unit: TxDescriptor<Anonymize<Ib8jf5ko4vdfjl>>;
        /**
        
         */
        recreate_currency_ongoing_time_unit: TxDescriptor<Anonymize<Ib8jf5ko4vdfjl>>;
        /**
        
         */
        mint_with_lock: TxDescriptor<Anonymize<I8apnhdjfa68oh>>;
        /**
        
         */
        unlock_incentive_minted_vtoken: TxDescriptor<Anonymize<I16tfgdl00n6tj>>;
        /**
        
         */
        set_incentive_coef: TxDescriptor<Anonymize<Iff5tmm38ba750>>;
        /**
        
         */
        set_vtoken_incentive_lock_blocks: TxDescriptor<Anonymize<I61ut5ekco112k>>;
    };
    Slp: {
        /**
         ******************************
         ******* Outer Calls ******
         ******************************
         *
         *Delegator initialization work. Generate a new delegator and return its ID.
         */
        initialize_delegator: TxDescriptor<Anonymize<I8sqvh22141fr8>>;
        /**
         *First time bonding some amount to a delegator.
         */
        bond: TxDescriptor<Anonymize<I8vcp3s3t1r7ti>>;
        /**
         *Bond extra amount to a delegator.
         */
        bond_extra: TxDescriptor<Anonymize<I8vcp3s3t1r7ti>>;
        /**
         *Decrease some amount to a delegator. Leave no less than the minimum delegator
         *requirement.
         */
        unbond: TxDescriptor<Anonymize<I8vcp3s3t1r7ti>>;
        /**
         *Unbond all the active amount of a delegator.
         */
        unbond_all: TxDescriptor<Anonymize<I94c4ugqtmf885>>;
        /**
         *Rebond some unlocking amount to a delegator.
         */
        rebond: TxDescriptor<Anonymize<I5g2ic5lk6jvap>>;
        /**
         *Delegate to some validator set.
         */
        delegate: TxDescriptor<Anonymize<I6aqijved7jgk9>>;
        /**
         *Re-delegate existing delegation to a new validator set.
         */
        undelegate: TxDescriptor<Anonymize<I6aqijved7jgk9>>;
        /**
         *Re-delegate existing delegation to a new validator set.
         */
        redelegate: TxDescriptor<Anonymize<I962vs596sggoi>>;
        /**
         *Initiate payout for a certain delegator.
         */
        payout: TxDescriptor<Anonymize<I8ln2e9k7mblim>>;
        /**
         *Withdraw the due payout into free balance.
         */
        liquidize: TxDescriptor<Anonymize<I1pqjsjhm82q1i>>;
        /**
         *Initiate payout for a certain delegator.
         */
        chill: TxDescriptor<Anonymize<I94c4ugqtmf885>>;
        /**
        
         */
        transfer_back: TxDescriptor<Anonymize<I8rn283dnm6h0f>>;
        /**
        
         */
        transfer_to: TxDescriptor<Anonymize<Ibu6i8jb58o30n>>;
        /**
        
         */
        convert_asset: TxDescriptor<Anonymize<I8jm0ov76tih8s>>;
        /**
        
         */
        increase_token_pool: TxDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        decrease_token_pool: TxDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        update_ongoing_time_unit: TxDescriptor<Anonymize<I4qh6vjmbpl1a6>>;
        /**
        
         */
        refund_currency_due_unbond: TxDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        supplement_fee_reserve: TxDescriptor<Anonymize<Iecuv9eudhio5i>>;
        /**
         *Charge staking host fee, tune vtoken/token exchange rate, and update delegator ledger
         *for single delegator.
         */
        charge_host_fee_and_tune_vtoken_exchange_rate: TxDescriptor<Anonymize<I2s4o8aq49k18a>>;
        /**
         ******************************
         ******* Storage Setters ******
         ******************************
         *Update storage OperateOrigins<T>.
         */
        set_operate_origin: TxDescriptor<Anonymize<I2i20t4file901>>;
        /**
         *Update storage FeeSources<T>.
         */
        set_fee_source: TxDescriptor<Anonymize<Inp8hn3mu8c5j>>;
        /**
         *Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
         */
        add_delegator: TxDescriptor<Anonymize<I68o6mdp1r65np>>;
        /**
         *Update storage DelegatorsIndex2Multilocation<T> 和 DelegatorsMultilocation2Index<T>.
         */
        remove_delegator: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
         *Update storage Validators<T>.
         */
        add_validator: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
         *Update storage Validators<T>.
         */
        remove_validator: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
         *Update storage ValidatorsByDelegator<T>.
         */
        set_validators_by_delegator: TxDescriptor<Anonymize<Iffj0b5herq802>>;
        /**
         *Update storage DelegatorLedgers<T>.
         */
        set_delegator_ledger: TxDescriptor<Anonymize<I8ja7ceebpen3k>>;
        /**
         *Update storage MinimumsAndMaximums<T>.
         */
        set_minimums_and_maximums: TxDescriptor<Anonymize<Icikcphjk1igug>>;
        /**
         *Update storage Delays<T>.
         */
        set_currency_delays: TxDescriptor<Anonymize<Ibnl8raecejsmo>>;
        /**
         *Set HostingFees storage.
         */
        set_hosting_fees: TxDescriptor<Anonymize<I1ufkvgdurghbk>>;
        /**
         *Set  CurrencyTuneExchangeRateLimit<T> storage.
         */
        set_currency_tune_exchange_rate_limit: TxDescriptor<Anonymize<I1q1g69il2fc15>>;
        /**
         *Set  OngoingTimeUnitUpdateInterval<T> storage.
         */
        set_ongoing_time_unit_update_interval: TxDescriptor<Anonymize<I9ltv8jlv2map8>>;
        /**
        
         */
        add_supplement_fee_account_to_whitelist: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
        
         */
        remove_supplement_fee_account_from_whitelist: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
         *********************************************************************
         **************Outer Confirming Xcm queries functions ****************
         *********************************************************************
         */
        confirm_delegator_ledger_query_response: TxDescriptor<Anonymize<Idlhavidu7pq4f>>;
        /**
        
         */
        fail_delegator_ledger_query_response: TxDescriptor<Anonymize<Idlhavidu7pq4f>>;
        /**
        
         */
        confirm_validators_by_delegator_query_response: TxDescriptor<Anonymize<Idlhavidu7pq4f>>;
        /**
        
         */
        fail_validators_by_delegator_query_response: TxDescriptor<Anonymize<Idlhavidu7pq4f>>;
        /**
        
         */
        confirm_delegator_ledger: TxDescriptor<Anonymize<I203ivdv9ll218>>;
        /**
        
         */
        confirm_validators_by_delegator: TxDescriptor<Anonymize<I203ivdv9ll218>>;
        /**
         *Reset the whole storage Validators<T>.
         */
        reset_validators: TxDescriptor<Anonymize<Id37b9l6bk2ii9>>;
        /**
         *Reset the whole storage Validator_boost_list<T>.
         */
        set_validator_boost_list: TxDescriptor<Anonymize<Id37b9l6bk2ii9>>;
        /**
        
         */
        add_to_validator_boost_list: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
         *Update storage Validator_boost_list<T>.
         */
        remove_from_validator_boot_list: TxDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
        
         */
        convert_treasury_vtoken: TxDescriptor<Anonymize<I58caqa2hcp37r>>;
        /**
        
         */
        clean_outdated_validator_boost_list: TxDescriptor<Anonymize<I9thv3jvjv8nr9>>;
    };
    XcmInterface: {
        /**
         *Sets the xcm_dest_weight and fee for XCM operation of XcmInterface.
         *
         *Parameters:
         *- `updates`: vec of tuple: (XcmOperationType, WeightChange, FeeChange).
         */
        update_xcm_dest_weight_and_fee: TxDescriptor<Anonymize<I5lkkn2erim0mo>>;
        /**
        
         */
        transfer_statemine_assets: TxDescriptor<Anonymize<Idlqnrhkqn6quh>>;
        /**
        
         */
        transfer_ethereum_assets: TxDescriptor<Anonymize<Id57q643bc33er>>;
    };
    TokenConversion: {
        /**
        
         */
        vsbond_convert_to_vstoken: TxDescriptor<Anonymize<I3tgr4mij0dq9t>>;
        /**
        
         */
        vstoken_convert_to_vsbond: TxDescriptor<Anonymize<Ic6tc8uub7lssk>>;
        /**
        
         */
        set_exchange_fee: TxDescriptor<Anonymize<I7dim4s22d4cc>>;
        /**
        
         */
        set_exchange_rate: TxDescriptor<Anonymize<I9adoavqh7j1qm>>;
        /**
        
         */
        set_relaychain_lease: TxDescriptor<Anonymize<I2cnb8psb4ovvm>>;
    };
    Farming: {
        /**
        
         */
        create_farming_pool: TxDescriptor<Anonymize<Ibks2bt6flju9r>>;
        /**
        
         */
        charge: TxDescriptor<Anonymize<Icr6e14pl04enu>>;
        /**
        
         */
        deposit: TxDescriptor<Anonymize<I4dnvv5a59mp30>>;
        /**
        
         */
        withdraw: TxDescriptor<Anonymize<Ii1jr958aef3t>>;
        /**
        
         */
        claim: TxDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        withdraw_claim: TxDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        force_retire_pool: TxDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        set_retire_limit: TxDescriptor<Anonymize<Iamlqp3gs21baf>>;
        /**
        
         */
        close_pool: TxDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        reset_pool: TxDescriptor<Anonymize<I8gmi4rbjvdjpn>>;
        /**
        
         */
        kill_pool: TxDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        edit_pool: TxDescriptor<Anonymize<Ido82tngjj5jid>>;
        /**
        
         */
        gauge_withdraw: TxDescriptor<Anonymize<Ial5va0b0vs25o>>;
        /**
        
         */
        force_gauge_claim: TxDescriptor<Anonymize<Ial5va0b0vs25o>>;
        /**
        
         */
        add_boost_pool_whitelist: TxDescriptor<Anonymize<Icm2mv7tlmp1c3>>;
        /**
        
         */
        set_next_round_whitelist: TxDescriptor<Anonymize<Icm2mv7tlmp1c3>>;
        /**
        
         */
        vote: TxDescriptor<Anonymize<I821qafgn89idd>>;
        /**
        
         */
        start_boost_round: TxDescriptor<Anonymize<Icn7fuqv1aq0de>>;
        /**
        
         */
        end_boost_round: TxDescriptor<undefined>;
        /**
        
         */
        charge_boost: TxDescriptor<Anonymize<Ifift2upjktcjs>>;
    };
    SystemStaking: {
        /**
         *Update token config，take effect when next round begins
         */
        token_config: TxDescriptor<Anonymize<I8mu9fcao6hkeb>>;
        /**
         *Update token config，take effect when next round begins
         */
        delete_token: TxDescriptor<Anonymize<Ibmoqhjadutned>>;
        /**
         *refresh token info，query farming pallet, and update TokenInfo, change to new
         *config，ignore exec_delay, execute immediately
         */
        refresh_token_info: TxDescriptor<Anonymize<Ibmoqhjadutned>>;
        /**
         *payout to treasury
         */
        payout: TxDescriptor<Anonymize<Ibmoqhjadutned>>;
    };
    SystemMaker: {
        /**
        
         */
        set_config: TxDescriptor<Anonymize<Idtq61tuc2ualk>>;
        /**
        
         */
        charge: TxDescriptor<Anonymize<I6e7p4l5e6t7n6>>;
        /**
        
         */
        close: TxDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        payout: TxDescriptor<Anonymize<I6e7p4l5e6t7n6>>;
    };
    FeeShare: {
        /**
         *Create a distribution
         *
         *- `token_type`: The token types involved in this distribution
         *- `tokens_proportion`: The proportion of the token distribution
         *- `if_auto`: Whether the distribution is automatic
         */
        create_distribution: TxDescriptor<Anonymize<Ieob0gouehce57>>;
        /**
         *Edit the distribution
         *
         *- `distribution_id`: Distribution ID
         *- `token_type`: The token types involved in this distribution
         *- `tokens_proportion`: The proportion of the token distribution
         *- `if_auto`: Whether the distribution is automatic
         */
        edit_distribution: TxDescriptor<Anonymize<I8eo9r9va149i7>>;
        /**
         *Set the era length
         *
         *- `era_length`: The interval between distribution executions
         */
        set_era_length: TxDescriptor<Anonymize<Iaeor8vejoqk4d>>;
        /**
         *Execute the distribution
         *
         *- `distribution_id`: Distribution ID
         */
        execute_distribute: TxDescriptor<Anonymize<I6d2fsv919ackd>>;
        /**
         *Delete the distribution
         *
         *- `distribution_id`: Distribution ID
         */
        delete_distribution: TxDescriptor<Anonymize<I6d2fsv919ackd>>;
        /**
         *USD Standard Accumulation Logic Configuration, can be overridden by the governance
         *
         *- `distribution_id`: Distribution ID
         *- `target_value`: Target's USD based value
         *- `interval`: The interval of the cumulative clearing operation
         *- `target_account_id`: When the cumulative dollar value falls below the target_value,
         *  the funds will be transferred to the target_account_id
         */
        set_usd_config: TxDescriptor<Anonymize<I65sao41nc2u5n>>;
    };
    CrossInOut: {
        /**
        
         */
        cross_in: TxDescriptor<Anonymize<I3glt55ja41fqv>>;
        /**
         *Destroy some balance from an account and issue cross-out event.
         */
        cross_out: TxDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        register_linked_account: TxDescriptor<Anonymize<I6jagi4fq1m7jf>>;
        /**
        
         */
        change_outer_linked_account: TxDescriptor<Anonymize<Ibktnbt7atrk9i>>;
        /**
        
         */
        register_currency_for_cross_in_out: TxDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        deregister_currency_for_cross_in_out: TxDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        add_to_issue_whitelist: TxDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        remove_from_issue_whitelist: TxDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        add_to_register_whitelist: TxDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        remove_from_register_whitelist: TxDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        set_crossing_minimum_amount: TxDescriptor<Anonymize<Iarqih3rei93nj>>;
    };
    BbBNC: {
        /**
        
         */
        set_config: TxDescriptor<Anonymize<I9tgq173mqotfi>>;
        /**
        
         */
        create_lock: TxDescriptor<Anonymize<I4q8h00pii12o3>>;
        /**
        
         */
        increase_amount: TxDescriptor<Anonymize<I5odhhedphq5gh>>;
        /**
        
         */
        increase_unlock_time: TxDescriptor<Anonymize<Iej62b4o01n76s>>;
        /**
        
         */
        withdraw: TxDescriptor<Anonymize<Icni4v52b04265>>;
        /**
        
         */
        notify_rewards: TxDescriptor<Anonymize<Icj3kkh24tpu43>>;
        /**
        
         */
        get_rewards: TxDescriptor<undefined>;
        /**
        
         */
        redeem_unlock: TxDescriptor<Anonymize<Icni4v52b04265>>;
        /**
        
         */
        set_markup_coefficient: TxDescriptor<Anonymize<I3e52d3k39di8p>>;
        /**
        
         */
        deposit_markup: TxDescriptor<Anonymize<I5c3b80onqg2es>>;
        /**
        
         */
        withdraw_markup: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
        
         */
        refresh: TxDescriptor<Anonymize<If0uionjq98ocd>>;
    };
    Slpx: {
        /**
         *vtoken mint and transfer to target chain
         */
        mint: TxDescriptor<Anonymize<I4o0j96irr71sk>>;
        /**
         *Swap and transfer to target chain
         */
        zenlink_swap: TxDescriptor<Anonymize<I3ame4u9k81am7>>;
        /**
         *Redeem
         */
        redeem: TxDescriptor<Anonymize<Iepipqemga7ede>>;
        /**
         *Stable pool swap
         */
        stable_pool_swap: TxDescriptor<Anonymize<I3u441vu8an9al>>;
        /**
        
         */
        add_whitelist: TxDescriptor<Anonymize<I21asuar23h6m2>>;
        /**
        
         */
        remove_whitelist: TxDescriptor<Anonymize<I21asuar23h6m2>>;
        /**
        
         */
        set_execution_fee: TxDescriptor<Anonymize<I7u9oegj4csj51>>;
        /**
        
         */
        set_transfer_to_fee: TxDescriptor<Anonymize<I6s65kicknm51n>>;
        /**
        
         */
        set_currency_ethereum_call_switch: TxDescriptor<Anonymize<Ifuaakr3i6qaje>>;
        /**
        
         */
        set_ethereum_call_configration: TxDescriptor<Anonymize<I792urf76hgnm9>>;
        /**
        
         */
        set_currency_support_xcm_fee: TxDescriptor<Anonymize<Ifuaakr3i6qaje>>;
        /**
        
         */
        set_delay_block: TxDescriptor<Anonymize<I7j4i782lpafvm>>;
        /**
        
         */
        force_add_order: TxDescriptor<Anonymize<I22tnv4gs7kfkn>>;
        /**
        
         */
        mint_with_channel_id: TxDescriptor<Anonymize<I8hrio8nd5ielu>>;
    };
    FellowshipCollective: {
        /**
         *Introduce a new member.
         *
         *- `origin`: Must be the `AddOrigin`.
         *- `who`: Account of non-member which will become a member.
         *
         *Weight: `O(1)`
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Increment the rank of an existing member by one.
         *
         *- `origin`: Must be the `PromoteOrigin`.
         *- `who`: Account of existing member.
         *
         *Weight: `O(1)`
         */
        promote_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Decrement the rank of an existing member by one. If the member is already at rank zero,
         *then they are removed entirely.
         *
         *- `origin`: Must be the `DemoteOrigin`.
         *- `who`: Account of existing member of rank greater than zero.
         *
         *Weight: `O(1)`, less if the member's index is highest in its rank.
         */
        demote_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove the member entirely.
         *
         *- `origin`: Must be the `RemoveOrigin`.
         *- `who`: Account of existing member of rank greater than zero.
         *- `min_rank`: The rank of the member or greater.
         *
         *Weight: `O(min_rank)`.
         */
        remove_member: TxDescriptor<Anonymize<Iddd2a11b8876r>>;
        /**
         *Add an aye or nay vote for the sender to the given proposal.
         *
         *- `origin`: Must be `Signed` by a member account.
         *- `poll`: Index of a poll which is ongoing.
         *- `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
         *
         *Transaction fees are be waived if the member is voting on any particular proposal
         *for the first time and the call is successful. Subsequent vote changes will charge a
         *fee.
         *
         *Weight: `O(1)`, less if there was no previous vote on the poll by the member.
         */
        vote: TxDescriptor<Anonymize<I8bvk21lpmah75>>;
        /**
         *Remove votes from the given poll. It must have ended.
         *
         *- `origin`: Must be `Signed` by any account.
         *- `poll_index`: Index of a poll which is completed and for which votes continue to
         *  exist.
         *- `max`: Maximum number of vote items from remove in this call.
         *
         *Transaction fees are waived if the operation is successful.
         *
         *Weight `O(max)` (less if there are fewer items to remove than `max`).
         */
        cleanup_poll: TxDescriptor<Anonymize<I449n3riv6jbum>>;
        /**
         *Exchanges a member with a new account and the same existing rank.
         *
         *- `origin`: Must be the `ExchangeOrigin`.
         *- `who`: Account of existing member of rank greater than zero to be exchanged.
         *- `new_who`: New Account of existing member of rank greater than zero to exchanged to.
         */
        exchange_member: TxDescriptor<Anonymize<I72edo3nnc5ukn>>;
    };
    FellowshipReferenda: {
        /**
         *Propose a referendum on a privileged action.
         *
         *- `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
         *  available.
         *- `proposal_origin`: The origin from which the proposal should be executed.
         *- `proposal`: The proposal.
         *- `enactment_moment`: The moment that the proposal should be enacted.
         *
         *Emits `Submitted`.
         */
        submit: TxDescriptor<Anonymize<Iaur73da4vrh3b>>;
        /**
         *Post the Decision Deposit for a referendum.
         *
         *- `origin`: must be `Signed` and the account must have funds available for the
         *  referendum's track's Decision Deposit.
         *- `index`: The index of the submitted referendum whose Decision Deposit is yet to be
         *  posted.
         *
         *Emits `DecisionDepositPlaced`.
         */
        place_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Refund the Decision Deposit for a closed referendum back to the depositor.
         *
         *- `origin`: must be `Signed` or `Root`.
         *- `index`: The index of a closed referendum whose Decision Deposit has not yet been
         *  refunded.
         *
         *Emits `DecisionDepositRefunded`.
         */
        refund_decision_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Cancel an ongoing referendum.
         *
         *- `origin`: must be the `CancelOrigin`.
         *- `index`: The index of the referendum to be cancelled.
         *
         *Emits `Cancelled`.
         */
        cancel: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Cancel an ongoing referendum and slash the deposits.
         *
         *- `origin`: must be the `KillOrigin`.
         *- `index`: The index of the referendum to be cancelled.
         *
         *Emits `Killed` and `DepositSlashed`.
         */
        kill: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Advance a referendum onto its next logical state. Only used internally.
         *
         *- `origin`: must be `Root`.
         *- `index`: the referendum to be advanced.
         */
        nudge_referendum: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Advance a track onto its next logical state. Only used internally.
         *
         *- `origin`: must be `Root`.
         *- `track`: the track to be advanced.
         *
         *Action item for when there is now one fewer referendum in the deciding phase and the
         *`DecidingCount` is not yet updated. This means that we should either:
         *- begin deciding another referendum (and leave `DecidingCount` alone); or
         *- decrement `DecidingCount`.
         */
        one_fewer_deciding: TxDescriptor<Anonymize<Icbio0e1f0034b>>;
        /**
         *Refund the Submission Deposit for a closed referendum back to the depositor.
         *
         *- `origin`: must be `Signed` or `Root`.
         *- `index`: The index of a closed referendum whose Submission Deposit has not yet been
         *  refunded.
         *
         *Emits `SubmissionDepositRefunded`.
         */
        refund_submission_deposit: TxDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *Set or clear metadata of a referendum.
         *
         *Parameters:
         *- `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
         *  metadata of a finished referendum.
         *- `index`:  The index of a referendum to set or clear metadata for.
         *- `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
         */
        set_metadata: TxDescriptor<Anonymize<I8c0vkqjjipnuj>>;
    };
    StablePool: {
        /**
        
         */
        create_pool: TxDescriptor<Anonymize<I7m1ou0telopf8>>;
        /**
        
         */
        add_liquidity: TxDescriptor<Anonymize<I4r3lr1hp3q5vu>>;
        /**
        
         */
        swap: TxDescriptor<Anonymize<Ibqd4ibtu385pg>>;
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
        /**
        
         */
        edit_token_rate: TxDescriptor<Anonymize<Idti8pnde3jga2>>;
        /**
        
         */
        config_vtoken_auto_refresh: TxDescriptor<Anonymize<Icu74rtf3kd9gd>>;
        /**
        
         */
        remove_vtoken_auto_refresh: TxDescriptor<Anonymize<I8v7akpi7cdcp5>>;
    };
    VtokenVoting: {
        /**
        
         */
        vote: TxDescriptor<Anonymize<I7826235520epg>>;
        /**
        
         */
        unlock: TxDescriptor<Anonymize<Iaj42ghmtrj594>>;
        /**
        
         */
        remove_delegator_vote: TxDescriptor<Anonymize<Ibtoub2npklubb>>;
        /**
        
         */
        kill_referendum: TxDescriptor<Anonymize<Iaj42ghmtrj594>>;
        /**
        
         */
        add_delegator: TxDescriptor<Anonymize<Iefli0cgm44m3b>>;
        /**
        
         */
        set_referendum_status: TxDescriptor<Anonymize<Iaij9kantm3v0b>>;
        /**
        
         */
        set_vote_locking_period: TxDescriptor<Anonymize<I8l8g9smisvqei>>;
        /**
        
         */
        set_undeciding_timeout: TxDescriptor<Anonymize<I2ce5d3bnbbfhi>>;
        /**
        
         */
        notify_vote: TxDescriptor<Anonymize<I3iun9sig164po>>;
        /**
        
         */
        notify_remove_delegator_vote: TxDescriptor<Anonymize<I3iun9sig164po>>;
        /**
        
         */
        set_vote_cap_ratio: TxDescriptor<Anonymize<Ifuh1k8nfv6s7l>>;
    };
    LendMarket: {
        /**
         *Stores a new market and its related currency. Returns `Err` if a currency
         *is not attached to an existent market.
         *
         *All provided market states must be `Pending`, otherwise an error will be returned.
         *
         *If a currency is already attached to a market, then the market will be replaced
         *by the new provided value.
         *
         *The lend token id and asset id are bound, the lend token id of new provided market
         *cannot be duplicated with the existing one, otherwise it will return
         *`InvalidLendTokenId`.
         *
         *- `asset_id`: Market related currency
         *- `market`: The market that is going to be stored
         */
        add_market: TxDescriptor<Anonymize<I5uf09856s8hsn>>;
        /**
         *Activates a market. Returns `Err` if the market currency does not exist.
         *
         *If the market is already activated, does nothing.
         *
         *- `asset_id`: Market related currency
         */
        activate_market: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
         *Updates the rate model of a stored market. Returns `Err` if the market
         *currency does not exist or the rate model is invalid.
         *
         *- `asset_id`: Market related currency
         *- `rate_model`: The new rate model to be updated
         */
        update_rate_model: TxDescriptor<Anonymize<I2lb07lr6m4m1b>>;
        /**
         *Updates a stored market. Returns `Err` if the market currency does not exist.
         *
         *- `asset_id`: market related currency
         *- `collateral_factor`: the collateral utilization ratio
         *- `reserve_factor`: fraction of interest currently set aside for reserves
         *- `close_factor`: maximum liquidation ratio at one time
         *- `liquidate_incentive`: liquidation incentive ratio
         *- `cap`: market capacity
         */
        update_market: TxDescriptor<Anonymize<Ienmtmhvu9c5gc>>;
        /**
         *Force updates a stored market. Returns `Err` if the market currency
         *does not exist.
         *
         *- `asset_id`: market related currency
         *- `market`: the new market parameters
         */
        force_update_market: TxDescriptor<Anonymize<I5uf09856s8hsn>>;
        /**
         *Add reward for the pallet account.
         *
         *- `amount`: Reward amount added
         */
        add_reward: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
        /**
         *Withdraw reward token from pallet account.
         *
         *The origin must conform to `UpdateOrigin`.
         *
         *- `target_account`: account receive reward token.
         *- `amount`: Withdraw amount
         */
        withdraw_missing_reward: TxDescriptor<Anonymize<I153e8dbo2i3pv>>;
        /**
         *Updates reward speed for the specified market
         *
         *The origin must conform to `UpdateOrigin`.
         *
         *- `asset_id`: Market related currency
         *- `reward_per_block`: reward amount per block.
         */
        update_market_reward_speed: TxDescriptor<Anonymize<Ilat0prj8bnun>>;
        /**
         *Claim reward from all market.
         */
        claim_reward: TxDescriptor<undefined>;
        /**
         *Claim reward from the specified market.
         *
         *- `asset_id`: Market related currency
         */
        claim_reward_for_market: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
         *Sender supplies assets into the market and receives internal supplies in exchange.
         *
         *- `asset_id`: the asset to be deposited.
         *- `mint_amount`: the amount to be deposited.
         */
        mint: TxDescriptor<Anonymize<Ic9p67gsdqt1ro>>;
        /**
         *Sender redeems some of internal supplies in exchange for the underlying asset.
         *
         *- `asset_id`: the asset to be redeemed.
         *- `redeem_amount`: the amount to be redeemed.
         */
        redeem: TxDescriptor<Anonymize<I158shpkf1icfg>>;
        /**
         *Sender redeems all of internal supplies in exchange for the underlying asset.
         *
         *- `asset_id`: the asset to be redeemed.
         */
        redeem_all: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
         *Sender borrows assets from the protocol to their own address.
         *
         *- `asset_id`: the asset to be borrowed.
         *- `borrow_amount`: the amount to be borrowed.
         */
        borrow: TxDescriptor<Anonymize<I2kudr318ju7fu>>;
        /**
         *Sender repays some of their debts.
         *
         *- `asset_id`: the asset to be repaid.
         *- `repay_amount`: the amount to be repaid.
         */
        repay_borrow: TxDescriptor<Anonymize<I3chmoe7ts2vks>>;
        /**
         *Sender repays all of their debts.
         *
         *- `asset_id`: the asset to be repaid.
         */
        repay_borrow_all: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
         *Set the collateral asset.
         *
         *- `asset_id`: the asset to be set.
         *- `enable`: turn on/off the collateral option.
         */
        collateral_asset: TxDescriptor<Anonymize<I533e8jlem55p4>>;
        /**
         *The sender liquidates the borrower's collateral.
         *
         *- `borrower`: the borrower to be liquidated.
         *- `liquidation_asset_id`: the assert to be liquidated.
         *- `repay_amount`: the amount to be repaid borrow.
         *- `collateral_asset_id`: The collateral to seize from the borrower.
         */
        liquidate_borrow: TxDescriptor<Anonymize<Iene1sabvs33in>>;
        /**
         *Add reserves by transferring from payer.
         *
         *May only be called from `T::ReserveOrigin`.
         *
         *- `payer`: the payer account.
         *- `asset_id`: the assets to be added.
         *- `add_amount`: the amount to be added.
         */
        add_reserves: TxDescriptor<Anonymize<I1j0vp2lik6fqa>>;
        /**
         *Reduces reserves by transferring to receiver.
         *
         *May only be called from `T::ReserveOrigin`.
         *
         *- `receiver`: the receiver account.
         *- `asset_id`: the assets to be reduced.
         *- `reduce_amount`: the amount to be reduced.
         */
        reduce_reserves: TxDescriptor<Anonymize<Ifgt33ij9dem7c>>;
        /**
         *Sender redeems some of internal supplies in exchange for the underlying asset.
         *
         *- `asset_id`: the asset to be redeemed.
         *- `redeem_amount`: the amount to be redeemed.
         */
        reduce_incentive_reserves: TxDescriptor<Anonymize<Ibt8nqfprp1t99>>;
        /**
         *Update liquidation free collateral.
         *
         *The `assets` won't be counted when do general
         */
        update_liquidation_free_collateral: TxDescriptor<Anonymize<Iap9nfjdhnmblj>>;
        /**
        
         */
        add_market_bond: TxDescriptor<Anonymize<Ie5efe5gkg0kqs>>;
    };
    Prices: {
        /**
         *Set emergency price
         */
        set_price: TxDescriptor<Anonymize<I5hb3jd6s8k4qo>>;
        /**
         *Reset emergency price
         */
        reset_price: TxDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
         *Set foreign vault token mapping
         */
        set_foreign_asset: TxDescriptor<Anonymize<I3jqe98jp6jqj5>>;
    };
    Oracle: {
        /**
         *Feed the external value.
         *
         *Require authorized operator.
         */
        feed_values: TxDescriptor<Anonymize<Idea758kkrtvus>>;
    };
    OracleMembership: {
        /**
         *Add a member `who` to the set.
         *
         *May only be called from `T::AddOrigin`.
         */
        add_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove a member `who` from the set.
         *
         *May only be called from `T::RemoveOrigin`.
         */
        remove_member: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Swap out one member `remove` for another `add`.
         *
         *May only be called from `T::SwapOrigin`.
         *
         *Prime membership is *not* passed from `remove` to `add`, if extant.
         */
        swap_member: TxDescriptor<Anonymize<Id09aqt1ca773l>>;
        /**
         *Change the membership to a new set, disregarding the existing membership. Be nice and
         *pass `members` pre-sorted.
         *
         *May only be called from `T::ResetOrigin`.
         */
        reset_members: TxDescriptor<Anonymize<I3c63j6sh3evqn>>;
        /**
         *Swap out the sending member for some other key `new`.
         *
         *May only be called from `Signed` origin of a current member.
         *
         *Prime membership is passed from the origin account to `new`, if extant.
         */
        change_key: TxDescriptor<Anonymize<I79cmnv5q6b3p>>;
        /**
         *Set the prime member. Must be a current member.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        set_prime: TxDescriptor<Anonymize<Icu8seopr711dn>>;
        /**
         *Remove the prime member if it exists.
         *
         *May only be called from `T::PrimeOrigin`.
         */
        clear_prime: TxDescriptor<undefined>;
    };
    LeverageStaking: {
        /**
        
         */
        flash_loan_deposit: TxDescriptor<Anonymize<I7am60vl6fh2ak>>;
    };
    ChannelCommission: {
        /**
        
         */
        register_channel: TxDescriptor<Anonymize<Id4du8qeonl5uo>>;
        /**
        
         */
        remove_channel: TxDescriptor<Anonymize<Ib73p6n69t2jsn>>;
        /**
        
         */
        update_channel_receive_account: TxDescriptor<Anonymize<I69nisu7k9olcl>>;
        /**
        
         */
        set_channel_commission_token: TxDescriptor<Anonymize<Ievk931u2c7sqn>>;
        /**
        
         */
        set_commission_tokens: TxDescriptor<Anonymize<Ie2jvm478jd2jv>>;
        /**
        
         */
        claim_commissions: TxDescriptor<Anonymize<Ib73p6n69t2jsn>>;
        /**
        
         */
        set_channel_vtoken_shares: TxDescriptor<Anonymize<Ibfeiifn3uif9a>>;
    };
    CloudsConvert: {
        /**
        
         */
        clouds_to_vebnc: TxDescriptor<Anonymize<I59ijflfqmnqm2>>;
        /**
        
         */
        charge_vbnc: TxDescriptor<Anonymize<I3qt1hgg4djhgb>>;
    };
    BuyBack: {
        /**
         *Configuration for setting up buybacks and adding liquidity.
         */
        set_vtoken: TxDescriptor<Anonymize<Ifor98fsce0gmh>>;
        /**
         *Charge the buyback account.
         */
        charge: TxDescriptor<Anonymize<I6e7p4l5e6t7n6>>;
        /**
         *Remove the configuration of the buyback.
         */
        remove_vtoken: TxDescriptor<Anonymize<I6dlum3cbrie3d>>;
    };
    SlpV2: {
        /**
         *Set the XCM fee for a specific XCM task.
         *
         *Can only be called by governance
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `configuration`: The staking protocol configuration.
         */
        set_protocol_configuration: TxDescriptor<Anonymize<If3e7sroj6atgl>>;
        /**
         *Add a delegator to the staking protocol.
         *
         *Can only be called by governance
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: If delegator is None, the delegator will be derived from sovereign
         *  account.
         */
        add_delegator: TxDescriptor<Anonymize<Iem9ho9292gh8o>>;
        /**
         *Remove a delegator from the staking protocol.
         *
         *Can only be called by governance
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Delegator that need to be removed.
         */
        remove_delegator: TxDescriptor<Anonymize<Iacnhot5uh80ka>>;
        /**
         *Add a validator to the staking protocol.
         *
         *Can only be called by governance
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `validator`: Validator that need to be added.
         */
        add_validator: TxDescriptor<Anonymize<Idngfiicpu7gh9>>;
        /**
         *Remove a validator from the staking protocol.
         *
         *Can only be called by governance
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `validator`: Validator that need to be removed.
         */
        remove_validator: TxDescriptor<Anonymize<Idngfiicpu7gh9>>;
        /**
         *Set the update token exchange rate limit for a specific staking protocol.
         *
         *Can only be called by governance.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `ledger`: Ledger that need to be set.
         */
        set_ledger: TxDescriptor<Anonymize<I3qd17rh5f6jv7>>;
        /**
         *Transfer the staking token to remote chain.
         *Transfer the free balance of the Entrance Account to the selected delegator.
         *
         *Can be called by governance or staking protocol operator.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         */
        transfer_to: TxDescriptor<Anonymize<Iacnhot5uh80ka>>;
        /**
         *Transfer the staking token back from remote chain.
         *Transfer the amount of tokens from the selected delegator back to the entrance account.
         *
         *Can be called by governance or staking protocol operator.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `amount`: The amount of tokens to transfer back.
         */
        transfer_back: TxDescriptor<Anonymize<Ia0dlb4pduq2i4>>;
        /**
         *Update the ongoing time unit for a specific staking protocol.
         *Update frequency controlled by update_time_unit_interval.
         *Less than update_time_unit_interval will report an error.
         *
         *Can be called by governance or staking protocol operator.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `time_uint_option`: If time_uint is None, the ongoing time unit will be increased by
         *  one. Otherwise, the ongoing time unit will be updated to the specified time unit.
         */
        update_ongoing_time_unit: TxDescriptor<Anonymize<Ie74pabtv0ktd0>>;
        /**
         *Update the token exchange rate for a specific staking protocol.
         *Update frequency controlled by update_exchange_rate_interval.
         *Amount max update for token pool * max_update_token_exchange_rate.
         *
         *Can be called by governance or staking protocol operator.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `amount`: The amount of tokens to update the token exchange rate.
         */
        update_token_exchange_rate: TxDescriptor<Anonymize<Ia0dlb4pduq2i4>>;
        /**
         *Manipulate a delegator to perform Dapp staking related operations.
         *
         *Can be called by governance or staking protocol operator.
         *
         *Parameters
         *- `staking_protocol`: Slp supports staking protocols.
         *- `delegator`: Select the delegator which is existed.
         *- `task`: The Dapp staking task.
         */
        astar_dapp_staking: TxDescriptor<Anonymize<I8kr5s6u6ue9e7>>;
        /**
         *Processing Xcm message execution results.
         *
         *Can be called by governance or xcm origin.
         */
        notify_astar_dapp_staking: TxDescriptor<Anonymize<I3iun9sig164po>>;
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
        ExtrinsicFailed: PlainDescriptor<Anonymize<Iegg8ak569f003>>;
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
    Indices: {
        /**
         *A account index was assigned.
         */
        IndexAssigned: PlainDescriptor<Anonymize<Ia1u3jll6a06ae>>;
        /**
         *A account index has been freed up (unassigned).
         */
        IndexFreed: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A account index has been frozen to its current account ID.
         */
        IndexFrozen: PlainDescriptor<Anonymize<Ia1u3jll6a06ae>>;
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
    TxPause: {
        /**
         *This pallet, or a specific call is now paused.
         */
        CallPaused: PlainDescriptor<Anonymize<Iba7pefg0d11kh>>;
        /**
         *This pallet, or a specific call is now unpaused.
         */
        CallUnpaused: PlainDescriptor<Anonymize<Iba7pefg0d11kh>>;
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
         *An account has seconded a proposal
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
        Executed: PlainDescriptor<Anonymize<I4s25thrhpiql>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I4s25thrhpiql>>;
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
        Executed: PlainDescriptor<Anonymize<I4s25thrhpiql>>;
        /**
         *A single member did some action; result will be `Ok` if it returned without error.
         */
        MemberExecuted: PlainDescriptor<Anonymize<I4s25thrhpiql>>;
        /**
         *A proposal was closed because its threshold was reached or after its duration was up.
         */
        Closed: PlainDescriptor<Anonymize<Iak7fhrgb9jnnq>>;
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
    CouncilMembership: {
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
    ConvictionVoting: {
        /**
         *An account has delegated their vote to another account. \[who, target\]
         */
        Delegated: PlainDescriptor<Anonymize<I2na29tt2afp0j>>;
        /**
         *An \[account\] has cancelled a previous delegation operation.
         */
        Undelegated: PlainDescriptor<SS58String>;
    };
    Referenda: {
        /**
         *A referendum has been submitted.
         */
        Submitted: PlainDescriptor<Anonymize<I229ijht536qdu>>;
        /**
         *The decision deposit has been placed.
         */
        DecisionDepositPlaced: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *The decision deposit has been refunded.
         */
        DecisionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *A deposit has been slashed.
         */
        DepositSlashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *A referendum has moved into the deciding phase.
         */
        DecisionStarted: PlainDescriptor<Anonymize<I9cg2delv92pvq>>;
        /**
        
         */
        ConfirmStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        ConfirmAborted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A referendum has ended its confirmation phase and is ready for approval.
         */
        Confirmed: PlainDescriptor<Anonymize<Ilhp45uime5tp>>;
        /**
         *A referendum has been approved and its proposal has been scheduled.
         */
        Approved: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A proposal has been rejected by referendum.
         */
        Rejected: PlainDescriptor<Anonymize<Ilhp45uime5tp>>;
        /**
         *A referendum has been timed out without being decided.
         */
        TimedOut: PlainDescriptor<Anonymize<Ilhp45uime5tp>>;
        /**
         *A referendum has been cancelled.
         */
        Cancelled: PlainDescriptor<Anonymize<Ilhp45uime5tp>>;
        /**
         *A referendum has been killed.
         */
        Killed: PlainDescriptor<Anonymize<Ilhp45uime5tp>>;
        /**
         *The submission deposit has been refunded.
         */
        SubmissionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *Metadata for a referendum has been set.
         */
        MetadataSet: PlainDescriptor<Anonymize<I4f1hv034jf1dt>>;
        /**
         *Metadata for a referendum has been cleared.
         */
        MetadataCleared: PlainDescriptor<Anonymize<I4f1hv034jf1dt>>;
    };
    Whitelist: {
        /**
        
         */
        CallWhitelisted: PlainDescriptor<Anonymize<I1adbcfi5uc62r>>;
        /**
        
         */
        WhitelistedCallRemoved: PlainDescriptor<Anonymize<I1adbcfi5uc62r>>;
        /**
        
         */
        WhitelistedCallDispatched: PlainDescriptor<Anonymize<I6kg7bhenahr1c>>;
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
        BatchInterrupted: PlainDescriptor<Anonymize<Ie048vclmk114d>>;
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
        ItemFailed: PlainDescriptor<Anonymize<Ieenot9p3du2jq>>;
        /**
         *A call was dispatched.
         */
        DispatchedAs: PlainDescriptor<Anonymize<I9dtcee8vhssnd>>;
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
        Dispatched: PlainDescriptor<Anonymize<I7itflu6klchel>>;
        /**
         *Set a retry configuration for some task.
         */
        RetrySet: PlainDescriptor<Anonymize<Ia3c82eadg79bj>>;
        /**
         *Cancel a retry configuration for some task.
         */
        RetryCancelled: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The call for the provided hash was not found so the task has been aborted.
         */
        CallUnavailable: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task was unable to be renewed since the agenda is full at that block.
         */
        PeriodicFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task was unable to be retried since the agenda is full at that block or there
         *was not enough weight to reschedule it.
         */
        RetryFailed: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
        /**
         *The given task can never be executed since it is overweight.
         */
        PermanentlyOverweight: PlainDescriptor<Anonymize<Ienusoeb625ftq>>;
    };
    Proxy: {
        /**
         *A proxy was executed correctly, with the given.
         */
        ProxyExecuted: PlainDescriptor<Anonymize<I9dtcee8vhssnd>>;
        /**
         *A pure account has been created by new proxy with given
         *disambiguation index and proxy type.
         */
        PureCreated: PlainDescriptor<Anonymize<Ifvd7v8crj3oo6>>;
        /**
         *An announcement was placed to make a call in the future.
         */
        Announced: PlainDescriptor<Anonymize<I2ur0oeqg495j8>>;
        /**
         *A proxy was added.
         */
        ProxyAdded: PlainDescriptor<Anonymize<I4jaa15tfvpb9p>>;
        /**
         *A proxy was removed.
         */
        ProxyRemoved: PlainDescriptor<Anonymize<I4jaa15tfvpb9p>>;
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
        MultisigExecuted: PlainDescriptor<Anonymize<I9lma4rgq3f10u>>;
        /**
         *A multisig operation has been cancelled.
         */
        MultisigCancelled: PlainDescriptor<Anonymize<I5qolde99acmd1>>;
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
    Ethereum: {
        /**
         *An ethereum transaction was successfully executed.
         */
        Executed: PlainDescriptor<Anonymize<Iea4g5ovhnolus>>;
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
    XTokens: {
        /**
         *Transferred `Asset` with fee.
         */
        TransferredAssets: PlainDescriptor<Anonymize<Ic04t5m0ihvrp5>>;
    };
    Tokens: {
        /**
         *An account was created with some free balance.
         */
        Endowed: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *An account was removed whose balance was non-zero but below
         *ExistentialDeposit, resulting in an outright loss.
         */
        DustLost: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Transfer succeeded.
         */
        Transfer: PlainDescriptor<Anonymize<I1452l7htqmdul>>;
        /**
         *Some balance was reserved (moved from free to reserved).
         */
        Reserved: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Some balance was unreserved (moved from reserved to free).
         */
        Unreserved: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Some reserved balance was repatriated (moved from reserved to
         *another account).
         */
        ReserveRepatriated: PlainDescriptor<Anonymize<I5k7trgmhddpc9>>;
        /**
         *A balance was set by root.
         */
        BalanceSet: PlainDescriptor<Anonymize<Ifg1v23kle5pvs>>;
        /**
         *The total issuance of an currency has been set
         */
        TotalIssuanceSet: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
         *Some balances were withdrawn (e.g. pay for transaction fee)
         */
        Withdrawn: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Some balances were slashed (e.g. due to mis-behavior)
         */
        Slashed: PlainDescriptor<Anonymize<Idog3297nuhubu>>;
        /**
         *Deposited some balance into an account
         */
        Deposited: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Some funds are locked
         */
        LockSet: PlainDescriptor<Anonymize<I7aphsup25pr8u>>;
        /**
         *Some locked funds were unlocked
         */
        LockRemoved: PlainDescriptor<Anonymize<Id9ivc2gke7kda>>;
        /**
         *Some free balance was locked.
         */
        Locked: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
         *Some locked balance was freed.
         */
        Unlocked: PlainDescriptor<Anonymize<I3d8ss06imalrs>>;
        /**
        
         */
        Issued: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        Rescinded: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
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
    OrmlXcm: {
        /**
         *XCM message sent. \[to, message\]
         */
        Sent: PlainDescriptor<Anonymize<Id3ajno3thjgec>>;
    };
    ZenlinkProtocol: {
        /**
         *Foreign Asset
         *Some assets were transferred. \[asset_id, owner, target, amount\]
         */
        Transferred: PlainDescriptor<Anonymize<I1kmrn95024uj4>>;
        /**
         *Some assets were burned. \[asset_id, owner, amount\]
         */
        Burned: PlainDescriptor<Anonymize<Ibianp5jdpolv7>>;
        /**
         *Some assets were minted. \[asset_id, owner, amount\]
         */
        Minted: PlainDescriptor<Anonymize<Ibianp5jdpolv7>>;
        /**
         *Swap
         *Create a trading pair. \[asset_0, asset_1\]
         */
        PairCreated: PlainDescriptor<Anonymize<I84fmreorpmm3e>>;
        /**
         *Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
         *mint_balance_lp\]
         */
        LiquidityAdded: PlainDescriptor<Anonymize<I9e73asfoaqs2i>>;
        /**
         *Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
         *burn_balance_lp\]
         */
        LiquidityRemoved: PlainDescriptor<Anonymize<I9ugpnf3tjcb6b>>;
        /**
         *Transact in trading \[owner, recipient, swap_path, balances\]
         */
        AssetSwap: PlainDescriptor<Anonymize<Idg56vb718jpor>>;
        /**
         *Transfer by xcm
         *Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
         */
        TransferredToParachain: PlainDescriptor<Anonymize<Icjttivfuq4kl0>>;
        /**
         *Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
         */
        BootstrapContribute: PlainDescriptor<Anonymize<I7aqqpfb5d3acb>>;
        /**
         *A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
         *total_lp_supply]
         */
        BootstrapEnd: PlainDescriptor<Anonymize<I67tkv8m7b9as3>>;
        /**
         *Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
         *total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
         */
        BootstrapCreated: PlainDescriptor<Anonymize<I53hhk4qo3m9a6>>;
        /**
         *Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
         *asset_0_refund, asset_1_refund, lp_amount\]
         */
        BootstrapClaim: PlainDescriptor<Anonymize<I73e059ch622rh>>;
        /**
         *Update a bootstrap pair. \[caller, asset_0, asset_1,
         *total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
         */
        BootstrapUpdate: PlainDescriptor<Anonymize<I53hhk4qo3m9a6>>;
        /**
         *Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
         *asset_0_refund, asset_1_refund\]
         */
        BootstrapRefund: PlainDescriptor<Anonymize<I8s0297rim8oc1>>;
        /**
         *Bootstrap distribute some rewards to contributors.
         */
        DistributeReward: PlainDescriptor<Anonymize<Ibanc5bru9o3gt>>;
        /**
         *Charge reward into a bootstrap.
         */
        ChargeReward: PlainDescriptor<Anonymize<Ibanc5bru9o3gt>>;
        /**
         *Withdraw all reward from a bootstrap.
         */
        WithdrawReward: PlainDescriptor<Anonymize<Ia9haecbvl560l>>;
    };
    MerkleDistributor: {
        /**
         *create a merkle distributor. \ [merkle distributor id, merkle tree root, total reward
         *balance]
         */
        Create: PlainDescriptor<Anonymize<Inkkt4kut4uln>>;
        /**
         *claim reward. \[merkle distributor id, account, balance]
         */
        Claim: PlainDescriptor<Anonymize<Icsknfl0f6r973>>;
        /**
         *withdraw reward. \ [merkle distributor id, account, balance]
         */
        Withdraw: PlainDescriptor<Anonymize<Icsknfl0f6r973>>;
        /**
         *add account who can create merkle distributor. \ [account]
         */
        AddToWhiteList: PlainDescriptor<SS58String>;
        /**
         *remove account from the set who can create merkle distributor. \ [account]
         */
        RemoveFromWhiteList: PlainDescriptor<SS58String>;
    };
    FlexibleFee: {
        /**
        
         */
        TransferTo: PlainDescriptor<Anonymize<I7c48q22j7l1q8>>;
        /**
        
         */
        FlexibleFeeExchanged: PlainDescriptor<Anonymize<I51jchdmsddl7g>>;
        /**
        
         */
        FixedRateFeeExchanged: PlainDescriptor<Anonymize<Ifrnnpj83g127a>>;
        /**
        
         */
        ExtraFeeDeducted: PlainDescriptor<Anonymize<I6k4ii4m9s9088>>;
    };
    Salp: {
        /**
         *Create a new crowdloaning campaign. [fund_index]
         */
        Created: PlainDescriptor<number>;
        /**
         *Contributing to a crowd sale. [who, fund_index, amount]
         */
        Contributing: PlainDescriptor<Anonymize<Ic4lis4f2abd9o>>;
        /**
         *Contributed to a crowd sale. [who, fund_index, amount]
         */
        Contributed: PlainDescriptor<Anonymize<I7fcree6lak6uv>>;
        /**
         *Fail on contribute to crowd sale. [who, fund_index, amount]
         */
        ContributeFailed: PlainDescriptor<Anonymize<I7fcree6lak6uv>>;
        /**
         *Withdrew full balance of a contributor. [who, fund_index, amount]
         */
        Withdrew: PlainDescriptor<Anonymize<I4ojmnsk1dchql>>;
        /**
         *refund to account. [who, fund_index,value]
         */
        Refunded: PlainDescriptor<Anonymize<Icl5s4108hio7m>>;
        /**
         *all refund
         */
        AllRefunded: PlainDescriptor<number>;
        /**
         *redeem to account. [who, fund_index, first_slot, last_slot, value]
         */
        Redeemed: PlainDescriptor<Anonymize<Icl5s4108hio7m>>;
        /**
         *Fund is edited. [fund_index]
         */
        Edited: PlainDescriptor<number>;
        /**
         *Fund is dissolved. [fund_index]
         */
        Dissolved: PlainDescriptor<number>;
        /**
         *The vsToken/vsBond was be unlocked. [who, fund_index, value]
         */
        Unlocked: PlainDescriptor<Anonymize<I7fcree6lak6uv>>;
        /**
        
         */
        AllUnlocked: PlainDescriptor<number>;
        /**
         *Fund status change
         */
        Failed: PlainDescriptor<number>;
        /**
        
         */
        Success: PlainDescriptor<number>;
        /**
        
         */
        Retired: PlainDescriptor<number>;
        /**
        
         */
        End: PlainDescriptor<number>;
        /**
        
         */
        Continued: PlainDescriptor<Anonymize<Ielgh4t8o7rcvt>>;
        /**
        
         */
        RefundedDissolved: PlainDescriptor<Anonymize<Ielgh4t8o7rcvt>>;
        /**
        
         */
        Buyback: PlainDescriptor<bigint>;
        /**
        
         */
        VstokenUnlocked: PlainDescriptor<SS58String>;
        /**
        
         */
        BuybackByStablePool: PlainDescriptor<Anonymize<Iv901693moogd>>;
        /**
        
         */
        Reserved: PlainDescriptor<Anonymize<I93gagnlb9gm3u>>;
        /**
        
         */
        ReservationCancelled: PlainDescriptor<Anonymize<Idn2ghub1o4i40>>;
        /**
        
         */
        ReservationFullyHandled: PlainDescriptor<Anonymize<I37r4bdai8o9mp>>;
        /**
        
         */
        ReservationHandled: PlainDescriptor<Anonymize<I37r4bdai8o9mp>>;
    };
    AssetRegistry: {
        /**
         *The asset registered.
         */
        AssetRegistered: PlainDescriptor<Anonymize<Ij8p6ct1brfmo>>;
        /**
         *The asset updated.
         */
        AssetUpdated: PlainDescriptor<Anonymize<Ij8p6ct1brfmo>>;
        /**
         *The CurrencyId registered.
         */
        CurrencyIdRegistered: PlainDescriptor<Anonymize<I7utese4puubr9>>;
        /**
         *Location Force set.
         */
        LocationSet: PlainDescriptor<Anonymize<Id66lun10a9rk8>>;
        /**
         *The CurrencyId updated.
         */
        CurrencyIdUpdated: PlainDescriptor<Anonymize<I7utese4puubr9>>;
    };
    VtokenMinting: {
        /**
        
         */
        Minted: PlainDescriptor<Anonymize<Ic8qh6l1k7b980>>;
        /**
        
         */
        Redeemed: PlainDescriptor<Anonymize<I9k1n93h3cgo9c>>;
        /**
        
         */
        RedeemSuccess: PlainDescriptor<Anonymize<I2926g4h7p9e6b>>;
        /**
        
         */
        Rebonded: PlainDescriptor<Anonymize<I58ljmqqpidpgt>>;
        /**
        
         */
        RebondedByUnlockId: PlainDescriptor<Anonymize<I9k1n93h3cgo9c>>;
        /**
        
         */
        UnlockDurationSet: PlainDescriptor<Anonymize<I53vlfub8vbal3>>;
        /**
        
         */
        MinimumMintSet: PlainDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        MinimumRedeemSet: PlainDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        SupportRebondTokenAdded: PlainDescriptor<Anonymize<Iaub8vq6tggv2c>>;
        /**
        
         */
        SupportRebondTokenRemoved: PlainDescriptor<Anonymize<Iaub8vq6tggv2c>>;
        /**
         *Several fees has been set.
         */
        FeeSet: PlainDescriptor<Anonymize<Idkdd97l7v4t7o>>;
        /**
        
         */
        HookIterationLimitSet: PlainDescriptor<Anonymize<Iamlqp3gs21baf>>;
        /**
        
         */
        UnlockingTotalSet: PlainDescriptor<Anonymize<Iaqh0vk9puj2m1>>;
        /**
        
         */
        MinTimeUnitSet: PlainDescriptor<Anonymize<Ib8jf5ko4vdfjl>>;
        /**
        
         */
        FastRedeemFailed: PlainDescriptor<Anonymize<Ie5hdgsdibkjpr>>;
        /**
        
         */
        CurrencyTimeUnitRecreated: PlainDescriptor<Anonymize<Ib8jf5ko4vdfjl>>;
        /**
        
         */
        IncentivizedMinting: PlainDescriptor<Anonymize<I5t937m0prpjtt>>;
        /**
        
         */
        VtokenIncentiveCoefSet: PlainDescriptor<Anonymize<I3qnba6688atis>>;
        /**
        
         */
        VtokenIncentiveLockBlocksSet: PlainDescriptor<Anonymize<Ibost4cg9esf17>>;
    };
    Slp: {
        /**
        
         */
        DelegatorInitialized: PlainDescriptor<Anonymize<Iab17gup71picv>>;
        /**
        
         */
        DelegatorBonded: PlainDescriptor<Anonymize<I2p503tvhr95gj>>;
        /**
        
         */
        DelegatorBondExtra: PlainDescriptor<Anonymize<I9grg7g6ua578n>>;
        /**
        
         */
        DelegatorUnbond: PlainDescriptor<Anonymize<I6umd4hgu2puph>>;
        /**
        
         */
        DelegatorUnbondAll: PlainDescriptor<Anonymize<I44127qd8nvu47>>;
        /**
        
         */
        DelegatorRebond: PlainDescriptor<Anonymize<I5tdcum59p9pac>>;
        /**
        
         */
        Delegated: PlainDescriptor<Anonymize<I2dgahqu6ln4jl>>;
        /**
        
         */
        Undelegated: PlainDescriptor<Anonymize<I1hn8tvlbussv>>;
        /**
        
         */
        Payout: PlainDescriptor<Anonymize<I96on68vm4ih94>>;
        /**
        
         */
        Liquidize: PlainDescriptor<Anonymize<Idgas9g0pc3k9g>>;
        /**
        
         */
        Chill: PlainDescriptor<Anonymize<I44127qd8nvu47>>;
        /**
        
         */
        TransferBack: PlainDescriptor<Anonymize<Ibu6i8jb58o30n>>;
        /**
        
         */
        TransferTo: PlainDescriptor<Anonymize<Ibu6i8jb58o30n>>;
        /**
        
         */
        ConvertAsset: PlainDescriptor<Anonymize<Iaevo3h2jsoemi>>;
        /**
        
         */
        DelegatorAdded: PlainDescriptor<Anonymize<Iep8a74k7e6r72>>;
        /**
        
         */
        DelegatorRemoved: PlainDescriptor<Anonymize<Iab17gup71picv>>;
        /**
        
         */
        ValidatorsAdded: PlainDescriptor<Anonymize<Ib6t0ubljgp22u>>;
        /**
        
         */
        ValidatorsRemoved: PlainDescriptor<Anonymize<Ib6t0ubljgp22u>>;
        /**
        
         */
        Refund: PlainDescriptor<Anonymize<I3rgoh4223434f>>;
        /**
        
         */
        FundMoveFromExitToEntrance: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        TimeUnitUpdated: PlainDescriptor<Anonymize<I2vfuukfl5d6al>>;
        /**
        
         */
        PoolTokenIncreased: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        HostingFeeCharged: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        PoolTokenDecreased: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
        /**
        
         */
        FeeSupplemented: PlainDescriptor<Anonymize<Ibu6i8jb58o30n>>;
        /**
        
         */
        ValidatorsByDelegatorSet: PlainDescriptor<Anonymize<I9ns66h5mcst21>>;
        /**
        
         */
        OperateOriginSet: PlainDescriptor<Anonymize<I5ch6hqvso9cfc>>;
        /**
        
         */
        FeeSourceSet: PlainDescriptor<Anonymize<Inp8hn3mu8c5j>>;
        /**
        
         */
        DelegatorLedgerSet: PlainDescriptor<Anonymize<I81p9lds919n0g>>;
        /**
        
         */
        DelegatorLedgerQueryResponseConfirmed: PlainDescriptor<Anonymize<I87hura2cobcv1>>;
        /**
        
         */
        DelegatorLedgerQueryResponseFailed: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
        
         */
        ValidatorsByDelegatorQueryResponseConfirmed: PlainDescriptor<Anonymize<I3lbtb6q8ittcg>>;
        /**
        
         */
        ValidatorsByDelegatorQueryResponseFailed: PlainDescriptor<Anonymize<I30pg328m00nr3>>;
        /**
        
         */
        MinimumsMaximumsSet: PlainDescriptor<Anonymize<I788n87nobc2o6>>;
        /**
        
         */
        CurrencyDelaysSet: PlainDescriptor<Anonymize<I99tkds5qdlj77>>;
        /**
        
         */
        HostingFeesSet: PlainDescriptor<Anonymize<Ian267bdq9joaf>>;
        /**
        
         */
        CurrencyTuneExchangeRateLimitSet: PlainDescriptor<Anonymize<I91fa8tnsgpjgh>>;
        /**
        
         */
        OngoingTimeUnitUpdateIntervalSet: PlainDescriptor<Anonymize<Iemo1133hhf28q>>;
        /**
        
         */
        SupplementFeeAccountWhitelistAdded: PlainDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
        
         */
        SupplementFeeAccountWhitelistRemoved: PlainDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
        
         */
        ValidatorsReset: PlainDescriptor<Anonymize<Id37b9l6bk2ii9>>;
        /**
        
         */
        ValidatorBoostListSet: PlainDescriptor<Anonymize<I8o6tg2fcd6krf>>;
        /**
        
         */
        ValidatorBoostListAdded: PlainDescriptor<Anonymize<Iouj49kqoegp1>>;
        /**
        
         */
        RemovedFromBoostList: PlainDescriptor<Anonymize<Iaba972j3va7k>>;
        /**
        
         */
        OutdatedValidatorBoostListCleaned: PlainDescriptor<Anonymize<Ife8sj002g6s56>>;
        /**
        
         */
        BurnFeeFailed: PlainDescriptor<Anonymize<Ic7aob2k1l1jfu>>;
    };
    XcmInterface: {
        /**
        
         */
        XcmDestWeightAndFeeUpdated: PlainDescriptor<Anonymize<I400tsccl54f69>>;
        /**
        
         */
        TransferredStatemineMultiAsset: PlainDescriptor<Anonymize<I95l2k9b1re95f>>;
        /**
        
         */
        TransferredEthereumAssets: PlainDescriptor<Anonymize<I7i2rquf9o1sc4>>;
    };
    TokenConversion: {
        /**
        
         */
        VsbondConvertToVsksm: PlainDescriptor<Anonymize<I41epceuu5tcos>>;
        /**
        
         */
        VsksmConvertToVsbond: PlainDescriptor<Anonymize<I41epceuu5tcos>>;
        /**
        
         */
        VsbondConvertToVsdot: PlainDescriptor<Anonymize<I44sdvnu7uoqf6>>;
        /**
        
         */
        VsdotConvertToVsbond: PlainDescriptor<Anonymize<I44sdvnu7uoqf6>>;
        /**
        
         */
        VsbondConvertToVstoken: PlainDescriptor<Anonymize<I75rts6phosqgv>>;
        /**
        
         */
        VstokenConvertToVsbond: PlainDescriptor<Anonymize<I75rts6phosqgv>>;
        /**
        
         */
        ExchangeFeeSet: PlainDescriptor<Anonymize<I7dim4s22d4cc>>;
        /**
        
         */
        ExchangeRateSet: PlainDescriptor<Anonymize<I9adoavqh7j1qm>>;
        /**
        
         */
        RelaychainLeaseSet: PlainDescriptor<Anonymize<I2cnb8psb4ovvm>>;
    };
    Farming: {
        /**
        
         */
        FarmingPoolCreated: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        FarmingPoolReset: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        FarmingPoolClosed: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        FarmingPoolKilled: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        FarmingPoolEdited: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        Charged: PlainDescriptor<Anonymize<Icb02sf8acip7e>>;
        /**
        
         */
        Deposited: PlainDescriptor<Anonymize<Icuvu3196vt9at>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<Ibjg5nv0nue710>>;
        /**
        
         */
        Claimed: PlainDescriptor<Anonymize<Ic7bjpulvng8ff>>;
        /**
        
         */
        WithdrawClaimed: PlainDescriptor<Anonymize<Ic7bjpulvng8ff>>;
        /**
        
         */
        GaugeWithdrawn: PlainDescriptor<Anonymize<I821hq5m5igcn>>;
        /**
        
         */
        AllForceGaugeClaimed: PlainDescriptor<Anonymize<Ial5va0b0vs25o>>;
        /**
        
         */
        PartiallyForceGaugeClaimed: PlainDescriptor<Anonymize<Ial5va0b0vs25o>>;
        /**
        
         */
        AllRetired: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        PartiallyRetired: PlainDescriptor<Anonymize<Ier970hnn9pgrj>>;
        /**
        
         */
        RetireLimitSet: PlainDescriptor<Anonymize<Iamlqp3gs21baf>>;
        /**
        
         */
        RoundEnd: PlainDescriptor<Anonymize<I1fd2u5ls04lpi>>;
        /**
        
         */
        RoundStartError: PlainDescriptor<Anonymize<If0231b9rdj4o8>>;
        /**
        
         */
        RoundStart: PlainDescriptor<Anonymize<Icn7fuqv1aq0de>>;
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I2d67dgvoue7rb>>;
        /**
        
         */
        BoostCharged: PlainDescriptor<Anonymize<I2sfpbn9h49adg>>;
    };
    SystemStaking: {
        /**
        
         */
        NewRound: PlainDescriptor<Anonymize<Ial6i7mt9utr8>>;
        /**
        
         */
        TokenConfigChanged: PlainDescriptor<Anonymize<I1fb7qva1sdhbi>>;
        /**
        
         */
        DepositFailed: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        MintSuccess: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        MintFailed: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        WithdrawSuccess: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        WithdrawFailed: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        Redeemed: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        RedeemFailed: PlainDescriptor<Anonymize<I87f6s7muvahou>>;
        /**
        
         */
        VtokenNotFound: PlainDescriptor<Anonymize<Ibmoqhjadutned>>;
        /**
        
         */
        TokenInfoRefreshed: PlainDescriptor<Anonymize<Ibmoqhjadutned>>;
        /**
        
         */
        Payout: PlainDescriptor<Anonymize<Idmkbek876hj4c>>;
    };
    SystemMaker: {
        /**
        
         */
        Charged: PlainDescriptor<Anonymize<Icglvublte8208>>;
        /**
        
         */
        ConfigSet: PlainDescriptor<Anonymize<Idtq61tuc2ualk>>;
        /**
        
         */
        Closed: PlainDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        Paid: PlainDescriptor<Anonymize<I6e7p4l5e6t7n6>>;
        /**
        
         */
        RedeemFailed: PlainDescriptor<Anonymize<Iee34otfoboion>>;
    };
    FeeShare: {
        /**
         *A successful call of the `CreateDistribution` extrinsic will create this event.
         */
        Created: PlainDescriptor<Anonymize<I3096t0on20q3r>>;
        /**
         *A successful call of the `EditDistribution` extrinsic will create this event.
         */
        Edited: PlainDescriptor<Anonymize<I3096t0on20q3r>>;
        /**
         *A successful call of the `SetEraLength` extrinsic will create this event.
         */
        EraLengthSet: PlainDescriptor<Anonymize<I1s5stmgs1hmpi>>;
        /**
         *A successful call of the `ExecuteDistribute` extrinsic will create this event.
         */
        Executed: PlainDescriptor<Anonymize<I6d2fsv919ackd>>;
        /**
         *A successful call of the `DeleteDistribution` extrinsic will create this event.
         */
        Deleted: PlainDescriptor<Anonymize<I6d2fsv919ackd>>;
        /**
         *A failed call of the `ExecuteDistribute` extrinsic will create this event.
         */
        ExecuteFailed: PlainDescriptor<Anonymize<Im4b2ikida3i9>>;
        /**
         *A successful call of the `SetUSDConfig` extrinsic will create this event.
         */
        USDConfigSet: PlainDescriptor<Anonymize<Ia6mtguicisar7>>;
    };
    CrossInOut: {
        /**
        
         */
        CrossedOut: PlainDescriptor<Anonymize<I98o48iiltrobs>>;
        /**
        
         */
        CrossedIn: PlainDescriptor<Anonymize<I2p9m6o5aeern2>>;
        /**
        
         */
        CurrencyRegistered: PlainDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        CurrencyDeregistered: PlainDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
        
         */
        AddedToIssueList: PlainDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        RemovedFromIssueList: PlainDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        LinkedAccountRegistered: PlainDescriptor<Anonymize<I6jagi4fq1m7jf>>;
        /**
        
         */
        AddedToRegisterList: PlainDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        RemovedFromRegisterList: PlainDescriptor<Anonymize<Iapol5cojcq8jr>>;
        /**
        
         */
        CrossingMinimumAmountSet: PlainDescriptor<Anonymize<Iarqih3rei93nj>>;
    };
    BbBNC: {
        /**
        
         */
        ConfigSet: PlainDescriptor<Anonymize<Ia1c7uq2ou2f8e>>;
        /**
        
         */
        Minted: PlainDescriptor<Anonymize<I8d3b6ni041b6h>>;
        /**
        
         */
        Supply: PlainDescriptor<Anonymize<I9l001vgvntb06>>;
        /**
        
         */
        LockCreated: PlainDescriptor<Anonymize<Ie17kej7hsdmmu>>;
        /**
        
         */
        UnlockTimeIncreased: PlainDescriptor<Anonymize<Ie9o1s2mbkduq7>>;
        /**
        
         */
        AmountIncreased: PlainDescriptor<Anonymize<I583v57rub6gg>>;
        /**
        
         */
        Withdrawn: PlainDescriptor<Anonymize<I9f6jrn22qs7ek>>;
        /**
        
         */
        IncentiveSet: PlainDescriptor<Anonymize<I1ufpmtovuj4nl>>;
        /**
        
         */
        RewardAdded: PlainDescriptor<Anonymize<Ifift2upjktcjs>>;
        /**
        
         */
        Rewarded: PlainDescriptor<Anonymize<I4e0mai1r79fau>>;
        /**
        
         */
        AllRefreshed: PlainDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
        
         */
        PartiallyRefreshed: PlainDescriptor<Anonymize<If0uionjq98ocd>>;
        /**
        
         */
        NotifyRewardFailed: PlainDescriptor<Anonymize<Ifift2upjktcjs>>;
    };
    Slpx: {
        /**
        
         */
        AddWhitelistAccountId: PlainDescriptor<Anonymize<I21asuar23h6m2>>;
        /**
        
         */
        RemoveWhitelistAccountId: PlainDescriptor<Anonymize<I21asuar23h6m2>>;
        /**
        
         */
        XcmMint: PlainDescriptor<Anonymize<I6nbgq3m8fo4u0>>;
        /**
        
         */
        XcmMintFailed: PlainDescriptor<Anonymize<I6nbgq3m8fo4u0>>;
        /**
        
         */
        XcmZenlinkSwap: PlainDescriptor<Anonymize<Iaitah9dps9he1>>;
        /**
        
         */
        XcmZenlinkSwapFailed: PlainDescriptor<Anonymize<Ifq82osotbtg30>>;
        /**
        
         */
        XcmStablePoolSwap: PlainDescriptor<Anonymize<Ifoig06hjqh9bp>>;
        /**
        
         */
        XcmStablePoolSwapFailed: PlainDescriptor<Anonymize<Idqdin6cl9bl0g>>;
        /**
        
         */
        XcmRedeem: PlainDescriptor<Anonymize<I240tht746522h>>;
        /**
        
         */
        XcmRedeemFailed: PlainDescriptor<Anonymize<I240tht746522h>>;
        /**
        
         */
        SetTransferToFee: PlainDescriptor<Anonymize<I6s65kicknm51n>>;
        /**
        
         */
        SetExecutionFee: PlainDescriptor<Anonymize<I7u9oegj4csj51>>;
        /**
        
         */
        SetCurrencyEthereumCallSwitch: PlainDescriptor<Anonymize<Ifuaakr3i6qaje>>;
        /**
        
         */
        SetEthereumCallConfiguration: PlainDescriptor<Anonymize<I792urf76hgnm9>>;
        /**
        
         */
        XcmSetTokenAmount: PlainDescriptor<Anonymize<I9rh8nddi47gn0>>;
        /**
        
         */
        SetCurrencyToSupportXcmFee: PlainDescriptor<Anonymize<Ifuaakr3i6qaje>>;
        /**
        
         */
        SetDelayBlock: PlainDescriptor<Anonymize<I7j4i782lpafvm>>;
        /**
        
         */
        CreateOrder: PlainDescriptor<Anonymize<Ih1mephl4egav>>;
        /**
        
         */
        OrderHandled: PlainDescriptor<Anonymize<Ih1mephl4egav>>;
        /**
        
         */
        OrderFailed: PlainDescriptor<Anonymize<Ih1mephl4egav>>;
        /**
        
         */
        InsufficientAssets: PlainDescriptor<undefined>;
    };
    FellowshipCollective: {
        /**
         *A member `who` has been added.
         */
        MemberAdded: PlainDescriptor<Anonymize<I4cbvqmqadhrea>>;
        /**
         *The member `who`se rank has been changed to the given `rank`.
         */
        RankChanged: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
        /**
         *The member `who` of given `rank` has been removed from the collective.
         */
        MemberRemoved: PlainDescriptor<Anonymize<Im1pm2vf6llcn>>;
        /**
         *The member `who` has voted for the `poll` with the given `vote` leading to an updated
         *`tally`.
         */
        Voted: PlainDescriptor<Anonymize<I21jsoeb0o6476>>;
        /**
         *The member `who` had their `AccountId` changed to `new_who`.
         */
        MemberExchanged: PlainDescriptor<Anonymize<Ier6ck0tpfo7>>;
    };
    FellowshipReferenda: {
        /**
         *A referendum has been submitted.
         */
        Submitted: PlainDescriptor<Anonymize<I229ijht536qdu>>;
        /**
         *The decision deposit has been placed.
         */
        DecisionDepositPlaced: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *The decision deposit has been refunded.
         */
        DecisionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *A deposit has been slashed.
         */
        DepositSlashed: PlainDescriptor<Anonymize<Id5fm4p8lj5qgi>>;
        /**
         *A referendum has moved into the deciding phase.
         */
        DecisionStarted: PlainDescriptor<Anonymize<Ic6ecdcp9ut7jd>>;
        /**
        
         */
        ConfirmStarted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
        
         */
        ConfirmAborted: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A referendum has ended its confirmation phase and is ready for approval.
         */
        Confirmed: PlainDescriptor<Anonymize<I27notaksll8qt>>;
        /**
         *A referendum has been approved and its proposal has been scheduled.
         */
        Approved: PlainDescriptor<Anonymize<I666bl2fqjkejo>>;
        /**
         *A proposal has been rejected by referendum.
         */
        Rejected: PlainDescriptor<Anonymize<I27notaksll8qt>>;
        /**
         *A referendum has been timed out without being decided.
         */
        TimedOut: PlainDescriptor<Anonymize<I27notaksll8qt>>;
        /**
         *A referendum has been cancelled.
         */
        Cancelled: PlainDescriptor<Anonymize<I27notaksll8qt>>;
        /**
         *A referendum has been killed.
         */
        Killed: PlainDescriptor<Anonymize<I27notaksll8qt>>;
        /**
         *The submission deposit has been refunded.
         */
        SubmissionDepositRefunded: PlainDescriptor<Anonymize<I62nte77gksm0f>>;
        /**
         *Metadata for a referendum has been set.
         */
        MetadataSet: PlainDescriptor<Anonymize<I4f1hv034jf1dt>>;
        /**
         *Metadata for a referendum has been cleared.
         */
        MetadataCleared: PlainDescriptor<Anonymize<I4f1hv034jf1dt>>;
    };
    StableAsset: {
        /**
        
         */
        CreatePool: PlainDescriptor<Anonymize<I54dj4621btbog>>;
        /**
        
         */
        LiquidityAdded: PlainDescriptor<Anonymize<I8eeivtdimg5sg>>;
        /**
        
         */
        TokenSwapped: PlainDescriptor<Anonymize<I2i1mj9dta3f5r>>;
        /**
        
         */
        RedeemedProportion: PlainDescriptor<Anonymize<Ie26sa5pkqc7lh>>;
        /**
        
         */
        RedeemedSingle: PlainDescriptor<Anonymize<I5a9b1h9uneb16>>;
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
        /**
        
         */
        TokenRateSet: PlainDescriptor<Anonymize<Id99ueqaguc9dv>>;
        /**
        
         */
        TokenRateHardcapConfigured: PlainDescriptor<Anonymize<Icu74rtf3kd9gd>>;
        /**
        
         */
        TokenRateHardcapRemoved: PlainDescriptor<Anonymize<I8v7akpi7cdcp5>>;
        /**
        
         */
        TokenRateRefreshFailed: PlainDescriptor<Anonymize<I931cottvong90>>;
    };
    VtokenVoting: {
        /**
        
         */
        Voted: PlainDescriptor<Anonymize<I1u6hbnc76ae0b>>;
        /**
        
         */
        Unlocked: PlainDescriptor<Anonymize<Ie8i2nun6vrn79>>;
        /**
        
         */
        DelegatorVoteRemoved: PlainDescriptor<Anonymize<Ib3hb8lrtttf9v>>;
        /**
        
         */
        DelegatorAdded: PlainDescriptor<Anonymize<Iefli0cgm44m3b>>;
        /**
        
         */
        ReferendumInfoCreated: PlainDescriptor<Anonymize<Iaij9kantm3v0b>>;
        /**
        
         */
        ReferendumInfoSet: PlainDescriptor<Anonymize<Iaij9kantm3v0b>>;
        /**
        
         */
        VoteLockingPeriodSet: PlainDescriptor<Anonymize<I8l8g9smisvqei>>;
        /**
        
         */
        UndecidingTimeoutSet: PlainDescriptor<Anonymize<I2ce5d3bnbbfhi>>;
        /**
        
         */
        ReferendumKilled: PlainDescriptor<Anonymize<Iaj42ghmtrj594>>;
        /**
        
         */
        VoteNotified: PlainDescriptor<Anonymize<Iet09kgtjdhfi9>>;
        /**
        
         */
        DelegatorVoteRemovedNotified: PlainDescriptor<Anonymize<Iet09kgtjdhfi9>>;
        /**
        
         */
        ResponseReceived: PlainDescriptor<Anonymize<Icfr2n5s5aokru>>;
        /**
        
         */
        VoteCapRatioSet: PlainDescriptor<Anonymize<Ifuh1k8nfv6s7l>>;
    };
    LendMarket: {
        /**
         *Enable collateral for certain asset
         *[sender, asset_id]
         */
        CollateralAssetAdded: PlainDescriptor<Anonymize<Icoe72r8pkf564>>;
        /**
         *Disable collateral for certain asset
         *[sender, asset_id]
         */
        CollateralAssetRemoved: PlainDescriptor<Anonymize<Icoe72r8pkf564>>;
        /**
         *Event emitted when assets are deposited
         *[sender, asset_id, amount]
         */
        Deposited: PlainDescriptor<Anonymize<I82kd33a80644k>>;
        /**
         *Event emitted when assets are redeemed
         *[sender, asset_id, amount]
         */
        Redeemed: PlainDescriptor<Anonymize<I82kd33a80644k>>;
        /**
         *Event emitted when cash is borrowed
         *[sender, asset_id, amount]
         */
        Borrowed: PlainDescriptor<Anonymize<I82kd33a80644k>>;
        /**
         *Event emitted when a borrow is repaid
         *[sender, asset_id, amount]
         */
        RepaidBorrow: PlainDescriptor<Anonymize<I82kd33a80644k>>;
        /**
         *Event emitted when a borrow is liquidated
         *[liquidator, borrower, liquidation_asset_id, collateral_asset_id, repay_amount,
         *collateral_amount]
         */
        LiquidatedBorrow: PlainDescriptor<Anonymize<Ibnls8eh7606j5>>;
        /**
         *Event emitted when the reserves are reduced
         *[admin, asset_id, reduced_amount, total_reserves]
         */
        ReservesReduced: PlainDescriptor<Anonymize<I2jen5a002vjo5>>;
        /**
         *Event emitted when the reserves are added
         *[admin, asset_id, added_amount, total_reserves]
         */
        ReservesAdded: PlainDescriptor<Anonymize<I2jen5a002vjo5>>;
        /**
         *New market is set
         *[new_interest_rate_model]
         */
        NewMarket: PlainDescriptor<Anonymize<I7gtc6jb6l82np>>;
        /**
         *Event emitted when a market is activated
         *[admin, asset_id]
         */
        ActivatedMarket: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
         *New market parameters is updated
         *[admin, asset_id]
         */
        UpdatedMarket: PlainDescriptor<Anonymize<I7gtc6jb6l82np>>;
        /**
         *Reward added
         */
        RewardAdded: PlainDescriptor<Anonymize<I95l2k9b1re95f>>;
        /**
         *Reward withdrawed
         */
        RewardWithdrawn: PlainDescriptor<Anonymize<I95l2k9b1re95f>>;
        /**
         *Event emitted when market reward speed updated.
         */
        MarketRewardSpeedUpdated: PlainDescriptor<Anonymize<Icj4504vnoorlb>>;
        /**
         *Deposited when Reward is distributed to a supplier
         */
        DistributedSupplierReward: PlainDescriptor<Anonymize<Iedc2b32l00pnc>>;
        /**
         *Deposited when Reward is distributed to a borrower
         */
        DistributedBorrowerReward: PlainDescriptor<Anonymize<Iedc2b32l00pnc>>;
        /**
         *Reward Paid for user
         */
        RewardPaid: PlainDescriptor<Anonymize<I95l2k9b1re95f>>;
        /**
         *Event emitted when the incentive reserves are redeemed and transfer to receiver's
         *account [receive_account_id, asset_id, reduced_amount]
         */
        IncentiveReservesReduced: PlainDescriptor<Anonymize<I82kd33a80644k>>;
        /**
         *Liquidation free collaterals has been updated
         */
        LiquidationFreeCollateralsUpdated: PlainDescriptor<Anonymize<I6ae21pstqk9et>>;
        /**
        
         */
        MarketBonded: PlainDescriptor<Anonymize<Ie5efe5gkg0kqs>>;
    };
    Prices: {
        /**
         *Set emergency price. \[asset_id, price_detail\]
         */
        SetPrice: PlainDescriptor<Anonymize<Ifrnnpj83g127a>>;
        /**
         *Reset emergency price. \[asset_id\]
         */
        ResetPrice: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
    };
    Oracle: {
        /**
         *New feed data is submitted.
         */
        NewFeedData: PlainDescriptor<Anonymize<I1eml7ojrir0mf>>;
        /**
        
         */
        FeedTimestampReachingLimit: PlainDescriptor<Anonymize<I89qbh680n32tc>>;
        /**
        
         */
        FeedValueReachingLimit: PlainDescriptor<Anonymize<I9ah39ggsni5h8>>;
    };
    OracleMembership: {
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
    LeverageStaking: {
        /**
        
         */
        FlashLoanDeposited: PlainDescriptor<Anonymize<I64s470272rog7>>;
    };
    ChannelCommission: {
        /**
        
         */
        ChannelRegistered: PlainDescriptor<Anonymize<Ifq40td50oojcr>>;
        /**
        
         */
        ChannelRemoved: PlainDescriptor<Anonymize<Ib73p6n69t2jsn>>;
        /**
        
         */
        ChannelReceiveAccountUpdated: PlainDescriptor<Anonymize<I4pgd6mkjk426o>>;
        /**
        
         */
        CommissionTokenSet: PlainDescriptor<Anonymize<I98hpr879arfv5>>;
        /**
        
         */
        ChannelCommissionSet: PlainDescriptor<Anonymize<Ievk931u2c7sqn>>;
        /**
        
         */
        CommissionClaimed: PlainDescriptor<Anonymize<I7rjrrm2njpd6g>>;
        /**
        
         */
        ChannelVtokenSharesUpdated: PlainDescriptor<Anonymize<Ielfbmscl7ukmv>>;
        /**
        
         */
        VtokenIssuanceSnapshotUpdated: PlainDescriptor<Anonymize<I673slhfrj1s4r>>;
        /**
        
         */
        PeriodVtokenTotalMintUpdated: PlainDescriptor<Anonymize<Iedejl9np3oh6e>>;
        /**
        
         */
        PeriodVtokenTotalRedeemUpdated: PlainDescriptor<Anonymize<I59j15t8ardoqh>>;
        /**
        
         */
        PeriodChannelVtokenMintUpdated: PlainDescriptor<Anonymize<Id5kb2ocrab7gs>>;
        /**
        
         */
        PeriodTotalCommissionsUpdated: PlainDescriptor<Anonymize<Ie0kb5p5oqesib>>;
        /**
        
         */
        ChannelClaimableCommissionUpdated: PlainDescriptor<Anonymize<I7rjrrm2njpd6g>>;
        /**
         *Emitted when a Permill calculation fails.
         *This event carries the numerator and denominator that caused the failure.
         */
        CalculationFailed: PlainDescriptor<Anonymize<Ic8tdmoaknl87u>>;
        /**
         *Bifrost commission transfer failed.
         *Parameters are the commission token and the amount that failed to transfer.
         */
        BifrostCommissionTransferFailed: PlainDescriptor<Anonymize<I1iscme8538ekh>>;
        /**
         *Error event indicating that the removal process of clearing was not completed.
         */
        RemovalNotCompleteError: PlainDescriptor<Anonymize<Ia9at2kloifkm>>;
    };
    CloudsConvert: {
        /**
        
         */
        CloudsConverted: PlainDescriptor<Anonymize<Ic5ic29aibpkll>>;
        /**
        
         */
        VbncCharged: PlainDescriptor<Anonymize<I6v3aulqfb3eps>>;
    };
    BuyBack: {
        /**
         *A successful call of the `Charge` extrinsic will create this event.
         */
        Charged: PlainDescriptor<Anonymize<Icglvublte8208>>;
        /**
         *A successful call of the `SetVtoken` extrinsic will create this event.
         */
        ConfigSet: PlainDescriptor<Anonymize<I3o2122ij3mdp9>>;
        /**
         *A successful call of the `RemoveVtoken` extrinsic will create this event.
         */
        Removed: PlainDescriptor<Anonymize<I6dlum3cbrie3d>>;
        /**
         *A failed call of the `BuyBack` extrinsic will create this event.
         */
        BuyBackFailed: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
        /**
         *A successful call of the `BuyBack` extrinsic will create this event.
         */
        BuyBackSuccess: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
        /**
         *A failed call of the `AddLiquidity` extrinsic will create this event.
         */
        AddLiquidityFailed: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
        /**
         *A successful call of the `AddLiquidity` extrinsic will create this event.
         */
        AddLiquiditySuccess: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
        /**
         *A failed call of the `SetSwapOutMin` extrinsic will create this event.
         */
        SetSwapOutMinFailed: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
        /**
         *A successful call of the `SetSwapOutMin` extrinsic will create this event.
         */
        SetSwapOutMinSuccess: PlainDescriptor<Anonymize<Idu9ifj08mb2m9>>;
    };
    SlpV2: {
        /**
         *Add a delegator to the staking protocol.
         */
        AddDelegator: PlainDescriptor<Anonymize<I8li5p36kd4j17>>;
        /**
         *Remove a delegator from the staking protocol.
         */
        RemoveDelegator: PlainDescriptor<Anonymize<I8li5p36kd4j17>>;
        /**
         *Add a validator to the staking protocol.
         */
        AddValidator: PlainDescriptor<Anonymize<Idngfiicpu7gh9>>;
        /**
         *Remove a validator from the staking protocol.
         */
        RemoveValidator: PlainDescriptor<Anonymize<Idngfiicpu7gh9>>;
        /**
         *Set configuration for a specific staking protocol.
         */
        SetConfiguration: PlainDescriptor<Anonymize<If3e7sroj6atgl>>;
        /**
         *Set ledger for a specific delegator.
         */
        SetLedger: PlainDescriptor<Anonymize<I3qd17rh5f6jv7>>;
        /**
         *Send xcm task.
         */
        SendXcmTask: PlainDescriptor<Anonymize<I5cje8jfnlum3t>>;
        /**
         *Xcm task response received.
         */
        NotifyResponseReceived: PlainDescriptor<Anonymize<I4a5vjmsc51gru>>;
        /**
         *Time unit updated.
         */
        TimeUnitUpdated: PlainDescriptor<Anonymize<If29otd3i8i2c4>>;
        /**
         *Token exchange rate updated.
         */
        TokenExchangeRateUpdated: PlainDescriptor<Anonymize<Idev1fo623d8sp>>;
        /**
         *Transfer the staking token to remote chain.
         */
        TransferTo: PlainDescriptor<Anonymize<If5g8vooff6dhr>>;
        /**
         *Transfer the staking token back from remote chain.
         */
        TransferBack: PlainDescriptor<Anonymize<Idedks09iikehk>>;
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
    Indices: {
        /**
         *The index was not already assigned.
         */
        NotAssigned: PlainDescriptor<undefined>;
        /**
         *The index is assigned to another account.
         */
        NotOwner: PlainDescriptor<undefined>;
        /**
         *The index was not available.
         */
        InUse: PlainDescriptor<undefined>;
        /**
         *The source and destination accounts are identical.
         */
        NotTransfer: PlainDescriptor<undefined>;
        /**
         *The index is permanent and may not be freed/changed.
         */
        Permanent: PlainDescriptor<undefined>;
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
    TxPause: {
        /**
         *The call is paused.
         */
        IsPaused: PlainDescriptor<undefined>;
        /**
         *The call is unpaused.
         */
        IsUnpaused: PlainDescriptor<undefined>;
        /**
         *The call is whitelisted and cannot be paused.
         */
        Unpausable: PlainDescriptor<undefined>;
        /**
        
         */
        NotFound: PlainDescriptor<undefined>;
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
    CouncilMembership: {
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
    ConvictionVoting: {
        /**
         *Poll is not ongoing.
         */
        NotOngoing: PlainDescriptor<undefined>;
        /**
         *The given account did not vote on the poll.
         */
        NotVoter: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action right now but will do in the future.
         */
        NoPermissionYet: PlainDescriptor<undefined>;
        /**
         *The account is already delegating.
         */
        AlreadyDelegating: PlainDescriptor<undefined>;
        /**
         *The account currently has votes attached to it and the operation cannot succeed until
         *these are removed through `remove_vote`.
         */
        AlreadyVoting: PlainDescriptor<undefined>;
        /**
         *Too high a balance was provided that the account cannot afford.
         */
        InsufficientFunds: PlainDescriptor<undefined>;
        /**
         *The account is not currently delegating.
         */
        NotDelegating: PlainDescriptor<undefined>;
        /**
         *Delegation to oneself makes no sense.
         */
        Nonsense: PlainDescriptor<undefined>;
        /**
         *Maximum number of votes reached.
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
         *The class must be supplied since it is not easily determinable from the state.
         */
        ClassNeeded: PlainDescriptor<undefined>;
        /**
         *The class ID supplied is invalid.
         */
        BadClass: PlainDescriptor<undefined>;
    };
    Referenda: {
        /**
         *Referendum is not ongoing.
         */
        NotOngoing: PlainDescriptor<undefined>;
        /**
         *Referendum's decision deposit is already paid.
         */
        HasDeposit: PlainDescriptor<undefined>;
        /**
         *The track identifier given was invalid.
         */
        BadTrack: PlainDescriptor<undefined>;
        /**
         *There are already a full complement of referenda in progress for this track.
         */
        Full: PlainDescriptor<undefined>;
        /**
         *The queue of the track is empty.
         */
        QueueEmpty: PlainDescriptor<undefined>;
        /**
         *The referendum index provided is invalid in this context.
         */
        BadReferendum: PlainDescriptor<undefined>;
        /**
         *There was nothing to do in the advancement.
         */
        NothingToDo: PlainDescriptor<undefined>;
        /**
         *No track exists for the proposal origin.
         */
        NoTrack: PlainDescriptor<undefined>;
        /**
         *Any deposit cannot be refunded until after the decision is over.
         */
        Unfinished: PlainDescriptor<undefined>;
        /**
         *The deposit refunder is not the depositor.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The deposit cannot be refunded since none was made.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The referendum status is invalid for this operation.
         */
        BadStatus: PlainDescriptor<undefined>;
        /**
         *The preimage does not exist.
         */
        PreimageNotExist: PlainDescriptor<undefined>;
        /**
         *The preimage is stored with a different length than the one provided.
         */
        PreimageStoredWithDifferentLength: PlainDescriptor<undefined>;
    };
    Whitelist: {
        /**
         *The preimage of the call hash could not be loaded.
         */
        UnavailablePreImage: PlainDescriptor<undefined>;
        /**
         *The call could not be decoded.
         */
        UndecodableCall: PlainDescriptor<undefined>;
        /**
         *The weight of the decoded call was higher than the witness.
         */
        InvalidCallWeightWitness: PlainDescriptor<undefined>;
        /**
         *The call was not whitelisted.
         */
        CallIsNotWhitelisted: PlainDescriptor<undefined>;
        /**
         *The call was already whitelisted; No-Op.
         */
        CallAlreadyWhitelisted: PlainDescriptor<undefined>;
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
        /**
         *change to the same per_block param
         */
        SamePerBlock: PlainDescriptor<undefined>;
        /**
         *VestingStartAt storage is not set
         */
        VestingStartAtNotSet: PlainDescriptor<undefined>;
        /**
         *Wrong amount
         */
        WrongLockedAmount: PlainDescriptor<undefined>;
        /**
         *Wrong vesting during cliff period
         */
        WrongCliffVesting: PlainDescriptor<undefined>;
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
         *Undefined error.
         */
        Undefined: PlainDescriptor<undefined>;
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
    ZenlinkProtocol: {
        /**
         *Require the admin who can reset the admin and receiver of the protocol fee.
         */
        RequireProtocolAdmin: PlainDescriptor<undefined>;
        /**
         *Require the admin candidate who can become new admin after confirm.
         */
        RequireProtocolAdminCandidate: PlainDescriptor<undefined>;
        /**
         *Invalid fee_point
         */
        InvalidFeePoint: PlainDescriptor<undefined>;
        /**
         *Unsupported AssetId by this ZenlinkProtocol Version.
         */
        UnsupportedAssetType: PlainDescriptor<undefined>;
        /**
         *Account balance must be greater than or equal to the transfer amount.
         */
        InsufficientAssetBalance: PlainDescriptor<undefined>;
        /**
         *Account native currency balance must be greater than ExistentialDeposit.
         */
        NativeBalanceTooLow: PlainDescriptor<undefined>;
        /**
         *Trading pair can't be created.
         */
        DeniedCreatePair: PlainDescriptor<undefined>;
        /**
         *Trading pair already exists.
         */
        PairAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Trading pair does not exist.
         */
        PairNotExists: PlainDescriptor<undefined>;
        /**
         *Asset does not exist.
         */
        AssetNotExists: PlainDescriptor<undefined>;
        /**
         *Liquidity is not enough.
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Trading pair does have enough foreign.
         */
        InsufficientPairReserve: PlainDescriptor<undefined>;
        /**
         *Get target amount is less than exception.
         */
        InsufficientTargetAmount: PlainDescriptor<undefined>;
        /**
         *Sold amount is more than exception.
         */
        ExcessiveSoldAmount: PlainDescriptor<undefined>;
        /**
         *Can't find pair though trading path.
         */
        InvalidPath: PlainDescriptor<undefined>;
        /**
         *Incorrect foreign amount range.
         */
        IncorrectAssetAmountRange: PlainDescriptor<undefined>;
        /**
         *Overflow.
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *Transaction block number is larger than the end block number.
         */
        Deadline: PlainDescriptor<undefined>;
        /**
         *Location given was invalid or unsupported.
         */
        AccountIdBadLocation: PlainDescriptor<undefined>;
        /**
         *XCM execution failed.
         */
        ExecutionFailed: PlainDescriptor<undefined>;
        /**
         *Transfer to self by XCM message.
         */
        DeniedTransferToSelf: PlainDescriptor<undefined>;
        /**
         *Not in ZenlinkRegistedParaChains.
         */
        TargetChainNotRegistered: PlainDescriptor<undefined>;
        /**
         *Can't pass the K value check
         */
        InvariantCheckFailed: PlainDescriptor<undefined>;
        /**
         *Created pair can't create now
         */
        PairCreateForbidden: PlainDescriptor<undefined>;
        /**
         *Pair is not in bootstrap
         */
        NotInBootstrap: PlainDescriptor<undefined>;
        /**
         *Amount of contribution is invalid.
         */
        InvalidContributionAmount: PlainDescriptor<undefined>;
        /**
         *Amount of contribution is invalid.
         */
        UnqualifiedBootstrap: PlainDescriptor<undefined>;
        /**
         *Zero contribute in bootstrap
         */
        ZeroContribute: PlainDescriptor<undefined>;
        /**
         *Bootstrap deny refund
         */
        DenyRefund: PlainDescriptor<undefined>;
        /**
         *Bootstrap is disable
         */
        DisableBootstrap: PlainDescriptor<undefined>;
        /**
         *Not eligible to contribute
         */
        NotQualifiedAccount: PlainDescriptor<undefined>;
        /**
         *Reward of bootstrap is not set.
         */
        NoRewardTokens: PlainDescriptor<undefined>;
        /**
         *Charge bootstrap extrinsic args has error,
         */
        ChargeRewardParamsError: PlainDescriptor<undefined>;
        /**
         *Exist some reward in bootstrap,
         */
        ExistRewardsInBootstrap: PlainDescriptor<undefined>;
    };
    MerkleDistributor: {
        /**
         *Invalid metadata given.
         */
        BadDescription: PlainDescriptor<undefined>;
        /**
         *The id is not exist.
         */
        InvalidMerkleDistributorId: PlainDescriptor<undefined>;
        /**
         *The proof is invalid
         */
        MerkleVerifyFailed: PlainDescriptor<undefined>;
        /**
         *The reward is already distributed.
         */
        Claimed: PlainDescriptor<undefined>;
        /**
         *The reward is already charged.
         */
        Charged: PlainDescriptor<undefined>;
        /**
         *Withdraw amount exceed charge amount.
         */
        WithdrawAmountExceed: PlainDescriptor<undefined>;
        /**
         *
         */
        BadChargeAccount: PlainDescriptor<undefined>;
        /**
         *Account has already in the set who can create merkle distributor
         */
        AlreadyInWhiteList: PlainDescriptor<undefined>;
        /**
         *Account is no in the set who can create merkle distributor
         */
        NotInWhiteList: PlainDescriptor<undefined>;
    };
    FlexibleFee: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        Overflow: PlainDescriptor<undefined>;
        /**
        
         */
        ConversionError: PlainDescriptor<undefined>;
        /**
        
         */
        WrongListLength: PlainDescriptor<undefined>;
        /**
        
         */
        WeightAndFeeNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        DexFailedToGetAmountInByPath: PlainDescriptor<undefined>;
        /**
        
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
        
         */
        XcmExecutionFailed: PlainDescriptor<undefined>;
        /**
         *Maximum number of currencies reached.
         */
        MaxCurrenciesReached: PlainDescriptor<undefined>;
        /**
        
         */
        CurrencyNotSupport: PlainDescriptor<undefined>;
    };
    Salp: {
        /**
         *The first slot needs to at least be less than 3 `max_value`.
         */
        FirstSlotTooFarInFuture: PlainDescriptor<undefined>;
        /**
         *Last slot must be greater than first slot.
         */
        LastSlotBeforeFirstSlot: PlainDescriptor<undefined>;
        /**
         *The last slot cannot be more then 3 slots after the first slot.
         */
        LastSlotTooFarInFuture: PlainDescriptor<undefined>;
        /**
         *There was an overflow.
         */
        Overflow: PlainDescriptor<undefined>;
        /**
         *The contribution was below the minimum, `MinContribution`.
         */
        ContributionTooSmall: PlainDescriptor<undefined>;
        /**
         *The account doesn't have any contribution to the fund.
         */
        ZeroContribution: PlainDescriptor<undefined>;
        /**
         *Invalid fund index.
         */
        InvalidParaId: PlainDescriptor<undefined>;
        /**
         *Invalid fund status.
         */
        InvalidFundStatus: PlainDescriptor<undefined>;
        /**
         *Invalid contribution status.
         */
        InvalidContributionStatus: PlainDescriptor<undefined>;
        /**
         *Contributions exceed maximum amount.
         */
        CapExceeded: PlainDescriptor<undefined>;
        /**
         *The fund has been registered.
         */
        FundAlreadyCreated: PlainDescriptor<undefined>;
        /**
         *Crosschain xcm failed
         */
        XcmFailed: PlainDescriptor<undefined>;
        /**
         *Don't have enough vsToken/vsBond to refund
         */
        NotEnoughReservedAssetsToRefund: PlainDescriptor<undefined>;
        /**
         *Don't have enough token to refund by users
         */
        NotEnoughBalanceInRefundPool: PlainDescriptor<undefined>;
        /**
         *Don't have enough vsToken/vsBond to unlock
         */
        NotEnoughBalanceToUnlock: PlainDescriptor<undefined>;
        /**
         *The vsBond is expired now
         */
        VSBondExpired: PlainDescriptor<undefined>;
        /**
         *The vsBond cannot be redeemed by now
         */
        UnRedeemableNow: PlainDescriptor<undefined>;
        /**
         *Dont have enough vsToken/vsBond to redeem
         */
        NotEnoughFreeAssetsToRedeem: PlainDescriptor<undefined>;
        /**
         *Don't have enough token to redeem by users
         */
        NotEnoughBalanceInRedeemPool: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughBalanceInFund: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidFundSameSlot: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidFundNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidRefund: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughBalanceToContribute: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportTokenType: PlainDescriptor<undefined>;
        /**
         *Responder is not a relay chain
         */
        ResponderNotRelayChain: PlainDescriptor<undefined>;
        /**
         *No contribution record found
         */
        NotFindContributionValue: PlainDescriptor<undefined>;
        /**
        
         */
        ArgumentsError: PlainDescriptor<undefined>;
    };
    AssetRegistry: {
        /**
         *The given location could not be used (e.g. because it cannot be expressed in the
         *desired version of XCM).
         */
        BadLocation: PlainDescriptor<undefined>;
        /**
         *Location existed
         */
        LocationExisted: PlainDescriptor<undefined>;
        /**
         *AssetId not exists
         */
        AssetIdNotExists: PlainDescriptor<undefined>;
        /**
         *AssetId exists
         */
        AssetIdExisted: PlainDescriptor<undefined>;
        /**
         *CurrencyId not exists
         */
        CurrencyIdNotExists: PlainDescriptor<undefined>;
        /**
         *CurrencyId exists
         */
        CurrencyIdExisted: PlainDescriptor<undefined>;
    };
    VtokenMinting: {
        /**
        
         */
        BelowMinimumMint: PlainDescriptor<undefined>;
        /**
        
         */
        BelowMinimumRedeem: PlainDescriptor<undefined>;
        /**
         *Invalid token to rebond.
         */
        InvalidRebondToken: PlainDescriptor<undefined>;
        /**
         *Token type not support.
         */
        NotSupportTokenType: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughBalanceToUnlock: PlainDescriptor<undefined>;
        /**
        
         */
        TokenToRebondNotZero: PlainDescriptor<undefined>;
        /**
        
         */
        OngoingTimeUnitNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        TokenUnlockLedgerNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        UserUnlockLedgerNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        TimeUnitUnlockLedgerNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        UnlockDurationNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        Unexpected: PlainDescriptor<undefined>;
        /**
        
         */
        CalculationOverflow: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedMaximumUnlockId: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyRedeems: PlainDescriptor<undefined>;
        /**
        
         */
        CanNotRedeem: PlainDescriptor<undefined>;
        /**
        
         */
        CanNotRebond: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        VeBNCCheckingError: PlainDescriptor<undefined>;
        /**
        
         */
        IncentiveCoefNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        TooManyLocks: PlainDescriptor<undefined>;
        /**
        
         */
        ConvertError: PlainDescriptor<undefined>;
        /**
        
         */
        NoUnlockRecord: PlainDescriptor<undefined>;
        /**
        
         */
        FailToRemoveLock: PlainDescriptor<undefined>;
        /**
        
         */
        BalanceZero: PlainDescriptor<undefined>;
        /**
        
         */
        IncentiveLockBlocksNotSet: PlainDescriptor<undefined>;
    };
    Slp: {
        /**
        
         */
        OperateOriginNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        NotAuthorized: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportedCurrencyId: PlainDescriptor<undefined>;
        /**
        
         */
        FailToAddDelegator: PlainDescriptor<undefined>;
        /**
        
         */
        OverFlow: PlainDescriptor<undefined>;
        /**
        
         */
        UnderFlow: PlainDescriptor<undefined>;
        /**
        
         */
        NotExist: PlainDescriptor<undefined>;
        /**
        
         */
        LowerThanMinimum: PlainDescriptor<undefined>;
        /**
        
         */
        GreaterThanMaximum: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyBonded: PlainDescriptor<undefined>;
        /**
        
         */
        AccountNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        XcmFailure: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorNotBonded: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedActiveMaximum: PlainDescriptor<undefined>;
        /**
        
         */
        ProblematicLedger: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughToUnbond: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedUnlockingRecords: PlainDescriptor<undefined>;
        /**
        
         */
        RebondExceedUnlockingAmount: PlainDescriptor<undefined>;
        /**
        
         */
        DecodingError: PlainDescriptor<undefined>;
        /**
        
         */
        EncodingError: PlainDescriptor<undefined>;
        /**
        
         */
        VectorEmpty: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorSetNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidTimeUnit: PlainDescriptor<undefined>;
        /**
        
         */
        AmountZero: PlainDescriptor<undefined>;
        /**
        
         */
        AmountNotZero: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyExist: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorStillInUse: PlainDescriptor<undefined>;
        /**
        
         */
        TimeUnitNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        FeeSourceNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        WeightAndFeeNotExists: PlainDescriptor<undefined>;
        /**
        
         */
        MinimumsAndMaximumsNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        QueryNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        DelaysNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        Unexpected: PlainDescriptor<undefined>;
        /**
        
         */
        QueryResponseRemoveError: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidHostingFee: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAccount: PlainDescriptor<undefined>;
        /**
        
         */
        IncreaseTokenPoolError: PlainDescriptor<undefined>;
        /**
        
         */
        TuneExchangeRateLimitNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        CurrencyLatestTuneRecordNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidTransferSource: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorNotProvided: PlainDescriptor<undefined>;
        /**
        
         */
        Unsupported: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorNotBonded: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyRequested: PlainDescriptor<undefined>;
        /**
        
         */
        RequestNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyLeaving: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorNotLeaving: PlainDescriptor<undefined>;
        /**
        
         */
        RequestNotDue: PlainDescriptor<undefined>;
        /**
        
         */
        LeavingNotDue: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorSetNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorLeaving: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorAlreadyLeaving: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorError: PlainDescriptor<undefined>;
        /**
        
         */
        AmountNone: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidDelays: PlainDescriptor<undefined>;
        /**
        
         */
        OngoingTimeUnitUpdateIntervalNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        LastTimeUpdatedOngoingTimeUnitNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        TooFrequent: PlainDescriptor<undefined>;
        /**
        
         */
        DestAccountNotValid: PlainDescriptor<undefined>;
        /**
        
         */
        WhiteListNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        DelegatorAlreadyTuned: PlainDescriptor<undefined>;
        /**
        
         */
        FeeTooHigh: PlainDescriptor<undefined>;
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        VectorTooLong: PlainDescriptor<undefined>;
        /**
        
         */
        MultiCurrencyError: PlainDescriptor<undefined>;
        /**
        
         */
        NotDelegateValidator: PlainDescriptor<undefined>;
        /**
        
         */
        DividedByZero: PlainDescriptor<undefined>;
        /**
        
         */
        SharePriceNotValid: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidAmount: PlainDescriptor<undefined>;
        /**
        
         */
        ValidatorMultilocationNotvalid: PlainDescriptor<undefined>;
        /**
        
         */
        AmountNotProvided: PlainDescriptor<undefined>;
        /**
        
         */
        FailToConvert: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedMaxLengthLimit: PlainDescriptor<undefined>;
        /**
         *Transfer to failed
         */
        TransferToError: PlainDescriptor<undefined>;
        /**
        
         */
        StablePoolNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        StablePoolTokenIndexNotFound: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedLimit: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPageNumber: PlainDescriptor<undefined>;
        /**
        
         */
        NoMoreValidatorBoostListForCurrency: PlainDescriptor<undefined>;
    };
    XcmInterface: {
        /**
        
         */
        FeeConvertFailed: PlainDescriptor<undefined>;
        /**
        
         */
        XcmExecutionFailed: PlainDescriptor<undefined>;
        /**
        
         */
        XcmSendFailed: PlainDescriptor<undefined>;
        /**
        
         */
        OperationWeightAndFeeNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        FailToConvert: PlainDescriptor<undefined>;
        /**
        
         */
        UnweighableMessage: PlainDescriptor<undefined>;
        /**
        
         */
        LocalExecutionIncomplete: PlainDescriptor<undefined>;
    };
    TokenConversion: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportTokenType: PlainDescriptor<undefined>;
        /**
        
         */
        CalculationOverflow: PlainDescriptor<undefined>;
    };
    Farming: {
        /**
        
         */
        NotNullable: PlainDescriptor<undefined>;
        /**
        
         */
        PoolDoesNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        GaugePoolNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        GaugeInfoNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidPoolState: PlainDescriptor<undefined>;
        /**
        
         */
        LastGaugeNotClaim: PlainDescriptor<undefined>;
        /**
         *claim_limit_time exceeded
         */
        CanNotClaim: PlainDescriptor<undefined>;
        /**
         *gauge pool max_block exceeded
         */
        GaugeMaxBlockOverflow: PlainDescriptor<undefined>;
        /**
         *withdraw_limit_time exceeded
         */
        WithdrawLimitCountExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        ShareInfoNotExists: PlainDescriptor<undefined>;
        /**
        
         */
        CanNotDeposit: PlainDescriptor<undefined>;
        /**
        
         */
        WhitelistEmpty: PlainDescriptor<undefined>;
        /**
        
         */
        RoundNotOver: PlainDescriptor<undefined>;
        /**
        
         */
        RoundLengthNotSet: PlainDescriptor<undefined>;
        /**
        
         */
        WhitelistLimitExceeded: PlainDescriptor<undefined>;
        /**
        
         */
        NobodyVoting: PlainDescriptor<undefined>;
        /**
        
         */
        NotInWhitelist: PlainDescriptor<undefined>;
        /**
        
         */
        PercentOverflow: PlainDescriptor<undefined>;
        /**
        
         */
        PoolNotCleared: PlainDescriptor<undefined>;
    };
    SystemStaking: {
        /**
         *Invalid token config params
         */
        InvalidTokenConfig: PlainDescriptor<undefined>;
        /**
         *exceed max token len
         */
        ExceedMaxTokenLen: PlainDescriptor<undefined>;
        /**
         *exceed max poolid len
         */
        ExceedMaxFarmingPoolidLen: PlainDescriptor<undefined>;
        /**
         *Token info not found
         */
        TokenInfoNotFound: PlainDescriptor<undefined>;
        /**
         *payout error
         */
        PayoutFailed: PlainDescriptor<undefined>;
    };
    SystemMaker: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportTokenType: PlainDescriptor<undefined>;
        /**
        
         */
        CalculationOverflow: PlainDescriptor<undefined>;
    };
    FeeShare: {
        /**
         *Not support proportion
         */
        NotSupportProportion: PlainDescriptor<undefined>;
        /**
         *Existential deposit
         */
        ExistentialDeposit: PlainDescriptor<undefined>;
        /**
         *Distribution not exist
         */
        DistributionNotExist: PlainDescriptor<undefined>;
        /**
         *Price oracle not ready
         */
        PriceOracleNotReady: PlainDescriptor<undefined>;
        /**
         *Price is zero
         */
        PriceIsZero: PlainDescriptor<undefined>;
        /**
         *Interval is zero
         */
        IntervalIsZero: PlainDescriptor<undefined>;
        /**
         *Value is zero
         */
        ValueIsZero: PlainDescriptor<undefined>;
        /**
         *Tokens proportions not cleared
         */
        TokensProportionsNotCleared: PlainDescriptor<undefined>;
    };
    CrossInOut: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        NotExist: PlainDescriptor<undefined>;
        /**
        
         */
        NotAllowed: PlainDescriptor<undefined>;
        /**
        
         */
        CurrencyNotSupportCrossInAndOut: PlainDescriptor<undefined>;
        /**
        
         */
        NoMultilocationMapping: PlainDescriptor<undefined>;
        /**
        
         */
        NoAccountIdMapping: PlainDescriptor<undefined>;
        /**
        
         */
        AlreadyExist: PlainDescriptor<undefined>;
        /**
        
         */
        NoCrossingMinimumSet: PlainDescriptor<undefined>;
        /**
        
         */
        AmountLowerThanMinimum: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedMaxLengthLimit: PlainDescriptor<undefined>;
        /**
        
         */
        FailedToConvert: PlainDescriptor<undefined>;
    };
    BbBNC: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        Expired: PlainDescriptor<undefined>;
        /**
        
         */
        BelowMinimumMint: PlainDescriptor<undefined>;
        /**
        
         */
        LockNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        LockExist: PlainDescriptor<undefined>;
        /**
        
         */
        ArgumentsError: PlainDescriptor<undefined>;
        /**
        
         */
        ExceedsMaxPositions: PlainDescriptor<undefined>;
        /**
        
         */
        NoController: PlainDescriptor<undefined>;
        /**
        
         */
        UserFarmingPoolOverflow: PlainDescriptor<undefined>;
    };
    Slpx: {
        /**
         *Token not found in vtoken minting
         */
        TokenNotFoundInVtokenMinting: PlainDescriptor<undefined>;
        /**
         *Token not found in zenlink
         */
        TokenNotFoundInZenlink: PlainDescriptor<undefined>;
        /**
         *Contract Account already exists in the whitelist
         */
        AccountIdAlreadyInWhitelist: PlainDescriptor<undefined>;
        /**
         *Contract Account is not in the whitelist
         */
        AccountIdNotInWhitelist: PlainDescriptor<undefined>;
        /**
         *The maximum number of whitelist addresses is 10
         */
        ExceededWhitelistMaxNumber: PlainDescriptor<undefined>;
        /**
         *Execution fee not set
         */
        NotSetExecutionFee: PlainDescriptor<undefined>;
        /**
         *Insufficient balance to execute the fee
         */
        FreeBalanceTooLow: PlainDescriptor<undefined>;
        /**
         *ArgumentsError
         */
        ArgumentsError: PlainDescriptor<undefined>;
        /**
        
         */
        ErrorConvertVtoken: PlainDescriptor<undefined>;
        /**
        
         */
        ErrorValidating: PlainDescriptor<undefined>;
        /**
        
         */
        ErrorDelivering: PlainDescriptor<undefined>;
        /**
        
         */
        Unsupported: PlainDescriptor<undefined>;
    };
    FellowshipCollective: {
        /**
         *Account is already a member.
         */
        AlreadyMember: PlainDescriptor<undefined>;
        /**
         *Account is not a member.
         */
        NotMember: PlainDescriptor<undefined>;
        /**
         *The given poll index is unknown or has closed.
         */
        NotPolling: PlainDescriptor<undefined>;
        /**
         *The given poll is still ongoing.
         */
        Ongoing: PlainDescriptor<undefined>;
        /**
         *There are no further records to be removed.
         */
        NoneRemaining: PlainDescriptor<undefined>;
        /**
         *Unexpected error in state.
         */
        Corruption: PlainDescriptor<undefined>;
        /**
         *The member's rank is too low to vote.
         */
        RankTooLow: PlainDescriptor<undefined>;
        /**
         *The information provided is incorrect.
         */
        InvalidWitness: PlainDescriptor<undefined>;
        /**
         *The origin is not sufficiently privileged to do the operation.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The new member to exchange is the same as the old member
         */
        SameMember: PlainDescriptor<undefined>;
    };
    FellowshipReferenda: {
        /**
         *Referendum is not ongoing.
         */
        NotOngoing: PlainDescriptor<undefined>;
        /**
         *Referendum's decision deposit is already paid.
         */
        HasDeposit: PlainDescriptor<undefined>;
        /**
         *The track identifier given was invalid.
         */
        BadTrack: PlainDescriptor<undefined>;
        /**
         *There are already a full complement of referenda in progress for this track.
         */
        Full: PlainDescriptor<undefined>;
        /**
         *The queue of the track is empty.
         */
        QueueEmpty: PlainDescriptor<undefined>;
        /**
         *The referendum index provided is invalid in this context.
         */
        BadReferendum: PlainDescriptor<undefined>;
        /**
         *There was nothing to do in the advancement.
         */
        NothingToDo: PlainDescriptor<undefined>;
        /**
         *No track exists for the proposal origin.
         */
        NoTrack: PlainDescriptor<undefined>;
        /**
         *Any deposit cannot be refunded until after the decision is over.
         */
        Unfinished: PlainDescriptor<undefined>;
        /**
         *The deposit refunder is not the depositor.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The deposit cannot be refunded since none was made.
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *The referendum status is invalid for this operation.
         */
        BadStatus: PlainDescriptor<undefined>;
        /**
         *The preimage does not exist.
         */
        PreimageNotExist: PlainDescriptor<undefined>;
        /**
         *The preimage is stored with a different length than the one provided.
         */
        PreimageStoredWithDifferentLength: PlainDescriptor<undefined>;
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
        /**
        
         */
        TokenRateNotCleared: PlainDescriptor<undefined>;
    };
    StablePool: {
        /**
        
         */
        SwapUnderMin: PlainDescriptor<undefined>;
        /**
        
         */
        MintUnderMin: PlainDescriptor<undefined>;
        /**
        
         */
        CantMint: PlainDescriptor<undefined>;
        /**
        
         */
        RedeemOverMax: PlainDescriptor<undefined>;
        /**
        
         */
        TokenRateNotSet: PlainDescriptor<undefined>;
    };
    VtokenVoting: {
        /**
         *XCM execution Failure
         */
        XcmFailure: PlainDescriptor<undefined>;
        /**
         *The given currency is not supported.
         */
        VTokenNotSupport: PlainDescriptor<undefined>;
        /**
         *Derivative index occupied.
         */
        DerivativeIndexOccupied: PlainDescriptor<undefined>;
        /**
         *Another vote is pending.
         */
        PendingVote: PlainDescriptor<undefined>;
        /**
         *Another update referendum status is pending.
         */
        PendingUpdateReferendumStatus: PlainDescriptor<undefined>;
        /**
         *No data available in storage.
         */
        NoData: PlainDescriptor<undefined>;
        /**
         *Poll is not ongoing.
         */
        NotOngoing: PlainDescriptor<undefined>;
        /**
         *Poll is not completed.
         */
        NotCompleted: PlainDescriptor<undefined>;
        /**
         *Poll is not killed.
         */
        NotKilled: PlainDescriptor<undefined>;
        /**
         *Poll is not expired.
         */
        NotExpired: PlainDescriptor<undefined>;
        /**
         *The given account did not vote on the poll.
         */
        NotVoter: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action.
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *The actor has no permission to conduct the action right now but will do in the future.
         */
        NoPermissionYet: PlainDescriptor<undefined>;
        /**
         *The account is already delegating.
         */
        AlreadyDelegating: PlainDescriptor<undefined>;
        /**
         *Too high a balance was provided that the account cannot afford.
         */
        InsufficientFunds: PlainDescriptor<undefined>;
        /**
         *Maximum number of votes reached.
         */
        MaxVotesReached: PlainDescriptor<undefined>;
        /**
         *Maximum number of items reached.
         */
        TooMany: PlainDescriptor<undefined>;
        /**
         *The given vote is not Standard vote.
         */
        NotStandardVote: PlainDescriptor<undefined>;
        /**
         *The given conviction is not valid.
         */
        InvalidConviction: PlainDescriptor<undefined>;
        /**
         *The given value is out of range.
         */
        OutOfRange: PlainDescriptor<undefined>;
    };
    LendMarket: {
        /**
         *Insufficient liquidity to borrow more or disable collateral
         */
        InsufficientLiquidity: PlainDescriptor<undefined>;
        /**
         *Insufficient deposit to redeem
         */
        InsufficientDeposit: PlainDescriptor<undefined>;
        /**
         *Repay amount greater than allowed
         */
        TooMuchRepay: PlainDescriptor<undefined>;
        /**
         *Asset already enabled/disabled collateral
         */
        DuplicateOperation: PlainDescriptor<undefined>;
        /**
         *No deposit asset
         */
        NoDeposit: PlainDescriptor<undefined>;
        /**
         *Repay amount more than collateral amount
         */
        InsufficientCollateral: PlainDescriptor<undefined>;
        /**
         *Liquidator is same as borrower
         */
        LiquidatorIsBorrower: PlainDescriptor<undefined>;
        /**
         *Deposits are not used as a collateral
         */
        DepositsAreNotCollateral: PlainDescriptor<undefined>;
        /**
         *Insufficient shortfall to repay
         */
        InsufficientShortfall: PlainDescriptor<undefined>;
        /**
         *Insufficient reserves
         */
        InsufficientReserves: PlainDescriptor<undefined>;
        /**
         *Invalid rate model params
         */
        InvalidRateModelParam: PlainDescriptor<undefined>;
        /**
         *Market not activated
         */
        MarketNotActivated: PlainDescriptor<undefined>;
        /**
         *Oracle price not ready
         */
        PriceOracleNotReady: PlainDescriptor<undefined>;
        /**
         *Oracle price is zero
         */
        PriceIsZero: PlainDescriptor<undefined>;
        /**
         *Invalid asset id
         */
        InvalidCurrencyId: PlainDescriptor<undefined>;
        /**
         *Invalid lend token id
         */
        InvalidLendTokenId: PlainDescriptor<undefined>;
        /**
         *Market does not exist
         */
        MarketDoesNotExist: PlainDescriptor<undefined>;
        /**
         *Market already exists
         */
        MarketAlreadyExists: PlainDescriptor<undefined>;
        /**
         *New markets must have a pending state
         */
        NewMarketMustHavePendingState: PlainDescriptor<undefined>;
        /**
         *Upper bound of supplying is exceeded
         */
        SupplyCapacityExceeded: PlainDescriptor<undefined>;
        /**
         *Upper bound of borrowing is exceeded
         */
        BorrowCapacityExceeded: PlainDescriptor<undefined>;
        /**
         *Insufficient cash in the pool
         */
        InsufficientCash: PlainDescriptor<undefined>;
        /**
         *The factor should be greater than 0% and less than 100%
         */
        InvalidFactor: PlainDescriptor<undefined>;
        /**
         *The supply cap cannot be zero
         */
        InvalidSupplyCap: PlainDescriptor<undefined>;
        /**
         *The exchange rate should be greater than 0.02 and less than 1
         */
        InvalidExchangeRate: PlainDescriptor<undefined>;
        /**
         *Amount cannot be zero
         */
        InvalidAmount: PlainDescriptor<undefined>;
        /**
         *Payer cannot be signer
         */
        PayerIsSigner: PlainDescriptor<undefined>;
        /**
         *Codec error
         */
        CodecError: PlainDescriptor<undefined>;
        /**
         *Collateral is reserved and cannot be liquidated
         */
        CollateralReserved: PlainDescriptor<undefined>;
        /**
         *Market bond does not exist
         */
        MarketBondDoesNotExist: PlainDescriptor<undefined>;
    };
    Oracle: {
        /**
         *Sender does not have permission
         */
        NoPermission: PlainDescriptor<undefined>;
        /**
         *Feeder has already feeded at this block
         */
        AlreadyFeeded: PlainDescriptor<undefined>;
    };
    OracleMembership: {
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
    LeverageStaking: {
        /**
        
         */
        ArgumentsError: PlainDescriptor<undefined>;
        /**
        
         */
        NotSupportTokenType: PlainDescriptor<undefined>;
    };
    ChannelCommission: {
        /**
        
         */
        Overflow: PlainDescriptor<undefined>;
        /**
        
         */
        ChannelNameTooLong: PlainDescriptor<undefined>;
        /**
        
         */
        ConversionError: PlainDescriptor<undefined>;
        /**
        
         */
        ChannelNotExist: PlainDescriptor<undefined>;
        /**
        
         */
        TransferError: PlainDescriptor<undefined>;
        /**
        
         */
        VtokenNotConfiguredForCommission: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidCommissionRate: PlainDescriptor<undefined>;
        /**
        
         */
        CommissionTokenAlreadySet: PlainDescriptor<undefined>;
        /**
        
         */
        InvalidVtoken: PlainDescriptor<undefined>;
        /**
         *Error indicating that no changes were made during a modification operation.
         */
        NoChangesMade: PlainDescriptor<undefined>;
        /**
         *Represents an error that occurs when a division operation encounters a divisor of zero.
         *This is a critical error, as division by zero is undefined and cannot be performed.
         */
        DivisionByZero: PlainDescriptor<undefined>;
        /**
         *Error indicating that the removal operation was not completed successfully.
         */
        RemovalNotComplete: PlainDescriptor<undefined>;
    };
    CloudsConvert: {
        /**
        
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
        
         */
        CalculationOverflow: PlainDescriptor<undefined>;
        /**
        
         */
        LessThanExpected: PlainDescriptor<undefined>;
        /**
        
         */
        LessThanExistentialDeposit: PlainDescriptor<undefined>;
    };
    BuyBack: {
        /**
         *Insufficient balance.
         */
        NotEnoughBalance: PlainDescriptor<undefined>;
        /**
         *Currency does not exist.
         */
        CurrencyIdNotExists: PlainDescriptor<undefined>;
        /**
         *Currency is not supported.
         */
        CurrencyIdError: PlainDescriptor<undefined>;
        /**
         *Duration can't be zero.
         */
        ZeroDuration: PlainDescriptor<undefined>;
        /**
         *Field min_swap_value can't be zero.
         */
        ZeroMinSwapValue: PlainDescriptor<undefined>;
    };
    SlpV2: {
        /**
         *Delegator index has exceeded the maximum allowed value of 65535.
         */
        DelegatorIndexOverflow: PlainDescriptor<undefined>;
        /**
         *The maximum number of validators has been reached.
         */
        ValidatorsOverflow: PlainDescriptor<undefined>;
        /**
         *UnlockRecordOverflow
         */
        UnlockRecordOverflow: PlainDescriptor<undefined>;
        /**
         *The staking protocol is not supported.
         */
        UnsupportedStakingProtocol: PlainDescriptor<undefined>;
        /**
         *The delegator index was not found.
         */
        DelegatorIndexNotFound: PlainDescriptor<undefined>;
        /**
         *The Configuration was not found.
         */
        ConfigurationNotFound: PlainDescriptor<undefined>;
        /**
         *The delegator was not found.
         */
        DelegatorNotFound: PlainDescriptor<undefined>;
        /**
         *The ledger was not found.
         */
        LedgerNotFound: PlainDescriptor<undefined>;
        /**
         *The validator was not found.
         */
        ValidatorNotFound: PlainDescriptor<undefined>;
        /**
         *Missing XCM fee value.
         */
        XcmFeeNotFound: PlainDescriptor<undefined>;
        /**
         *Missing pending status.
         */
        PendingStatusNotFound: PlainDescriptor<undefined>;
        /**
         *The specified time unit does not exist.
         */
        TimeUnitNotFound: PlainDescriptor<undefined>;
        /**
         *The delegator already exists.
         */
        DelegatorAlreadyExists: PlainDescriptor<undefined>;
        /**
         *The delegator index already exists.
         */
        DelegatorIndexAlreadyExists: PlainDescriptor<undefined>;
        /**
         *The validator already exists.
         */
        ValidatorAlreadyExists: PlainDescriptor<undefined>;
        /**
         *Failed to derive the derivative account ID.
         */
        DerivativeAccountIdFailed: PlainDescriptor<undefined>;
        /**
         *Error during validation.
         */
        ValidatingFailed: PlainDescriptor<undefined>;
        /**
         *Error during delivery.
         */
        DeliveringFailed: PlainDescriptor<undefined>;
        /**
         *calculate protocol fee failed.
         */
        CalculateProtocolFeeFailed: PlainDescriptor<undefined>;
        /**
         *IncreaseTokenPoolFailed
         */
        IncreaseTokenPoolFailed: PlainDescriptor<undefined>;
        /**
         *The update interval is too short.
         */
        UpdateIntervalTooShort: PlainDescriptor<undefined>;
        /**
         *The specified token exchange rate amount is too large.
         */
        UpdateTokenExchangeRateAmountTooLarge: PlainDescriptor<undefined>;
        /**
         *Invalid parameter.
         */
        InvalidParameter: PlainDescriptor<undefined>;
        /**
         *Not authorized.
         */
        NotAuthorized: PlainDescriptor<undefined>;
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
    Indices: {
        /**
         * The deposit needed for reserving an index.
         */
        Deposit: PlainDescriptor<bigint>;
    };
    ParachainSystem: {
        /**
         * Returns the parachain ID we are running with.
         */
        SelfParaId: PlainDescriptor<number>;
    };
    TxPause: {
        /**
         * Maximum length for pallet name and call name SCALE encoded string names.
         *
         * TOO LONG NAMES WILL BE TREATED AS PAUSED.
         */
        MaxNameLen: PlainDescriptor<number>;
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
    ConvictionVoting: {
        /**
         * The maximum number of concurrent votes an account may have.
         *
         * Also used to compute weight, an overly large value can lead to extrinsics with large
         * weight estimation: see `delegate` for instance.
         */
        MaxVotes: PlainDescriptor<number>;
        /**
         * The minimum period of vote locking.
         *
         * It should be no shorter than enactment period to ensure that in the case of an approval,
         * those successful voters are locked into the consequences that their votes entail.
         */
        VoteLockingPeriod: PlainDescriptor<number>;
    };
    Referenda: {
        /**
         * The minimum amount to be used as a deposit for a public referendum proposal.
         */
        SubmissionDeposit: PlainDescriptor<bigint>;
        /**
         * Maximum size of the referendum queue for a single track.
         */
        MaxQueued: PlainDescriptor<number>;
        /**
         * The number of blocks after submission that a referendum must begin being decided by.
         * Once this passes, then anyone may cancel the referendum.
         */
        UndecidingTimeout: PlainDescriptor<number>;
        /**
         * Quantization level for the referendum wakeup scheduler. A higher number will result in
         * fewer storage reads/writes needed for smaller voters, but also result in delays to the
         * automatic referendum status changes. Explicit servicing instructions are unaffected.
         */
        AlarmInterval: PlainDescriptor<number>;
        /**
         * Information concerning the different referendum tracks.
         */
        Tracks: PlainDescriptor<Anonymize<Ibafpkl9hhno69>>;
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
    Vesting: {
        /**
         * The minimum amount transferred to call `vested_transfer`.
         */
        MinVestedTransfer: PlainDescriptor<bigint>;
        /**
        
         */
        MaxVestingSchedules: PlainDescriptor<number>;
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
    EVMAccounts: {
        /**
         * Fee multiplier for the binding of addresses.
         */
        FeeMultiplier: PlainDescriptor<number>;
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
        GetNativeCurrencyId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
    };
    ZenlinkProtocol: {
        /**
         * This pallet id.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    MerkleDistributor: {
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The maximum length of a merkel description stored on-chain.
         */
        StringLimit: PlainDescriptor<number>;
    };
    FlexibleFee: {
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        MaxFeeCurrencyOrderListLen: PlainDescriptor<number>;
        /**
        
         */
        MinAssetHubExecutionFee: PlainDescriptor<bigint>;
        /**
        
         */
        MinRelaychainExecutionFee: PlainDescriptor<bigint>;
        /**
         * The currency id of the RelayChain
         */
        RelaychainCurrencyId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Salp: {
        /**
         * ModuleID for the crowdloan module. An appropriate value could be
         * ```ModuleId(*b"py/cfund")```
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * The minimum amount that may be contributed into a crowdloan. Should almost certainly be
         * at least ExistentialDeposit.
         */
        MinContribution: PlainDescriptor<bigint>;
        /**
        
         */
        RelayChainToken: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
         * The number of blocks over which a single period lasts.
         */
        LeasePeriod: PlainDescriptor<number>;
        /**
        
         */
        VSBondValidPeriod: PlainDescriptor<number>;
        /**
         * The time interval from 1:1 redeem-pool to bancor-pool to release.
         */
        ReleaseCycle: PlainDescriptor<number>;
        /**
         * The release ratio from the 1:1 redeem-pool to the bancor-pool per cycle.
         *
         * **NOTE: THE RELEASE RATIO MUST BE IN [0, 1].**
         */
        ReleaseRatio: PlainDescriptor<number>;
        /**
        
         */
        RemoveKeysLimit: PlainDescriptor<number>;
        /**
        
         */
        SlotLength: PlainDescriptor<number>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        BuybackPalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        LockId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        BatchLimit: PlainDescriptor<number>;
    };
    VtokenMinting: {
        /**
         * The amount of mint
         */
        MaximumUnlockIdOfUser: PlainDescriptor<number>;
        /**
        
         */
        MaximumUnlockIdOfTimeUnit: PlainDescriptor<number>;
        /**
        
         */
        MaxLockRecords: PlainDescriptor<number>;
        /**
        
         */
        EntranceAccount: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        ExitAccount: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        FeeAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        RedeemFeeAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        IncentivePoolAccount: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        RelayChainToken: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        MoonbeamChainId: PlainDescriptor<number>;
    };
    Slp: {
        /**
        
         */
        MaxTypeEntryPerBlock: PlainDescriptor<number>;
        /**
        
         */
        MaxRefundPerBlock: PlainDescriptor<number>;
        /**
        
         */
        MaxLengthLimit: PlainDescriptor<number>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
    };
    XcmInterface: {
        /**
         * The currency id of the RelayChain
         */
        RelaychainCurrencyId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
         * The account of parachain on the relaychain.
         */
        ParachainSovereignAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        RelayNetwork: PlainDescriptor<XcmV3JunctionNetworkId>;
        /**
        
         */
        ParachainId: PlainDescriptor<number>;
        /**
        
         */
        CallBackTimeOut: PlainDescriptor<number>;
    };
    TokenConversion: {
        /**
        
         */
        RelayCurrencyId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        VsbondAccount: PlainDescriptor<FixedSizeBinary<8>>;
    };
    Farming: {
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
         * ModuleID for creating sub account
         */
        Keeper: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        RewardIssuer: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        FarmingBoost: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        WhitelistMaximumLimit: PlainDescriptor<number>;
        /**
        
         */
        GaugeRewardIssuer: PlainDescriptor<FixedSizeBinary<8>>;
    };
    SystemStaking: {
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
         * Max token length 500
         */
        MaxTokenLen: PlainDescriptor<number>;
        /**
         * Max farming poolid length
         */
        MaxFarmingPoolIdLen: PlainDescriptor<number>;
        /**
         * ModuleID for creating sub account
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * 1500
         */
        BlocksPerRound: PlainDescriptor<number>;
    };
    SystemMaker: {
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        RelayChainToken: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        SystemMakerPalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    FeeShare: {
        /**
        
         */
        FeeSharePalletId: PlainDescriptor<FixedSizeBinary<8>>;
    };
    CrossInOut: {
        /**
        
         */
        MaxLengthLimit: PlainDescriptor<number>;
    };
    BbBNC: {
        /**
        
         */
        TokenType: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        IncentivePalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        BuyBackAccount: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        Week: PlainDescriptor<number>;
        /**
        
         */
        MaxBlock: PlainDescriptor<number>;
        /**
        
         */
        Multiplier: PlainDescriptor<bigint>;
        /**
        
         */
        VoteWeightMultiplier: PlainDescriptor<bigint>;
        /**
         * The maximum number of positions that should exist on an account.
         */
        MaxPositions: PlainDescriptor<number>;
        /**
        
         */
        MarkupRefreshLimit: PlainDescriptor<number>;
    };
    Slpx: {
        /**
         * TreasuryAccount
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        ParachainId: PlainDescriptor<number>;
    };
    FellowshipReferenda: {
        /**
         * The minimum amount to be used as a deposit for a public referendum proposal.
         */
        SubmissionDeposit: PlainDescriptor<bigint>;
        /**
         * Maximum size of the referendum queue for a single track.
         */
        MaxQueued: PlainDescriptor<number>;
        /**
         * The number of blocks after submission that a referendum must begin being decided by.
         * Once this passes, then anyone may cancel the referendum.
         */
        UndecidingTimeout: PlainDescriptor<number>;
        /**
         * Quantization level for the referendum wakeup scheduler. A higher number will result in
         * fewer storage reads/writes needed for smaller voters, but also result in delays to the
         * automatic referendum status changes. Explicit servicing instructions are unaffected.
         */
        AlarmInterval: PlainDescriptor<number>;
        /**
         * Information concerning the different referendum tracks.
         */
        Tracks: PlainDescriptor<Anonymize<Ibafpkl9hhno69>>;
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
    VtokenVoting: {
        /**
        
         */
        ParachainId: PlainDescriptor<number>;
        /**
         * The maximum number of concurrent votes an account may have.
         */
        MaxVotes: PlainDescriptor<number>;
        /**
        
         */
        QueryTimeout: PlainDescriptor<number>;
        /**
        
         */
        ReferendumCheckInterval: PlainDescriptor<number>;
    };
    LendMarket: {
        /**
         * The loan's module id, keep all collaterals of CDPs.
         */
        PalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Reward asset id.
         */
        RewardAssetId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
        /**
        
         */
        LiquidationFreeAssetId: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
    };
    Prices: {
        /**
         * Relay currency
         */
        RelayCurrency: PlainDescriptor<Anonymize<Iebirugq1dbhv6>>;
    };
    Oracle: {
        /**
         * The root operator account id, record all sudo feeds on this account.
         */
        RootOperatorAccountId: PlainDescriptor<SS58String>;
        /**
         * Maximum size of HasDispatched
         */
        MaxHasDispatchedSize: PlainDescriptor<number>;
        /**
         * Maximum size the vector used for feed values
         */
        MaxFeedValues: PlainDescriptor<number>;
    };
    ChannelCommission: {
        /**
        
         */
        ClearingDuration: PlainDescriptor<number>;
        /**
        
         */
        NameLengthLimit: PlainDescriptor<number>;
    };
    CloudsConvert: {
        /**
         * locked blocks for veBNC converted from clouds
         */
        LockedBlocks: PlainDescriptor<number>;
    };
    BuyBack: {
        /**
        
         */
        TreasuryAccount: PlainDescriptor<SS58String>;
        /**
        
         */
        BuyBackAccount: PlainDescriptor<FixedSizeBinary<8>>;
        /**
        
         */
        LiquidityAccount: PlainDescriptor<FixedSizeBinary<8>>;
    };
    SlpV2: {
        /**
         * The query timeout.
         */
        QueryTimeout: PlainDescriptor<number>;
        /**
         * Commission master Pallet Id to get the commission master account
         */
        CommissionPalletId: PlainDescriptor<FixedSizeBinary<8>>;
        /**
         * Bifrost parachain id.
         */
        ParachainId: PlainDescriptor<number>;
        /**
         * Maximum validators
         */
        MaxValidators: PlainDescriptor<number>;
    };
};
type IRuntimeCalls = {
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
     * The `BlockBuilder` api trait that provides the required functionality for building a block.
     */
    BlockBuilder: {
        /**
         * Apply the given extrinsic.
         *
         * Returns an inclusion outcome which specifies if this extrinsic is included in
         * this block or not.
         */
        apply_extrinsic: RuntimeDescriptor<[extrinsic: Binary], Anonymize<Iekmidcnfe7b26>>;
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
     * The API to query account nonce.
     */
    AccountNonceApi: {
        /**
         * Get current account nonce of given `AccountId`.
         */
        account_nonce: RuntimeDescriptor<[account: SS58String], number>;
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
        call: RuntimeDescriptor<[from: FixedSizeBinary<20>, to: FixedSizeBinary<20>, data: Binary, value: Anonymize<I4totqt881mlti>, gas_limit: Anonymize<I4totqt881mlti>, max_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, max_priority_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, nonce: Anonymize<Ic4rgfgksgmm3e>, estimate: boolean, access_list: Anonymize<I3dj14b7k3rkm5>], Anonymize<I23mlhpams6hq8>>;
        /**
        
         */
        create: RuntimeDescriptor<[from: FixedSizeBinary<20>, data: Binary, value: Anonymize<I4totqt881mlti>, gas_limit: Anonymize<I4totqt881mlti>, max_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, max_priority_fee_per_gas: Anonymize<Ic4rgfgksgmm3e>, nonce: Anonymize<Ic4rgfgksgmm3e>, estimate: boolean, access_list: Anonymize<I3dj14b7k3rkm5>], Anonymize<I20378a9b4hdds>>;
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
    
     */
    FlexibleFeeRuntimeApi: {
        /**
         * get flexible fee token and amount to be deducted
         */
        get_fee_token_and_amount: RuntimeDescriptor<[who: SS58String, fee: bigint, utx: Binary], Anonymize<Ifrnnpj83g127a>>;
    };
    /**
    
     */
    ZenlinkProtocolApi: {
        /**
        
         */
        get_balance: RuntimeDescriptor<[asset_id: Anonymize<Icu3qllmbdnj89>, owner: SS58String], bigint>;
        /**
        
         */
        get_pair_by_asset_id: RuntimeDescriptor<[asset_0: Anonymize<Icu3qllmbdnj89>, asset_1: Anonymize<Icu3qllmbdnj89>], Anonymize<I42esqb0jrl6ka>>;
        /**
        
         */
        get_amount_in_price: RuntimeDescriptor<[supply: bigint, path: Anonymize<Idhafor8sovqeu>], bigint>;
        /**
        
         */
        get_amount_out_price: RuntimeDescriptor<[supply: bigint, path: Anonymize<Idhafor8sovqeu>], bigint>;
        /**
        
         */
        get_estimate_lptoken: RuntimeDescriptor<[asset_0: Anonymize<Icu3qllmbdnj89>, asset_1: Anonymize<Icu3qllmbdnj89>, amount_0_desired: bigint, amount_1_desired: bigint, amount_0_min: bigint, amount_1_min: bigint], bigint>;
        /**
        
         */
        calculate_remove_liquidity: RuntimeDescriptor<[asset_0: Anonymize<Icu3qllmbdnj89>, asset_1: Anonymize<Icu3qllmbdnj89>, amount: bigint], Anonymize<I5vv5n03oo8gas>>;
    };
    /**
    
     */
    SalpRuntimeApi: {
        /**
        
         */
        get_contribution: RuntimeDescriptor<[index: number, who: SS58String], Anonymize<I1lb0fd61s4rqa>>;
    };
    /**
    
     */
    FarmingRuntimeApi: {
        /**
        
         */
        get_farming_rewards: RuntimeDescriptor<[who: SS58String, pid: number], Anonymize<I2dbamvpq4935>>;
        /**
        
         */
        get_gauge_rewards: RuntimeDescriptor<[who: SS58String, pid: number], Anonymize<I2dbamvpq4935>>;
    };
    /**
    
     */
    BbBNCRuntimeApi: {
        /**
        
         */
        balance_of: RuntimeDescriptor<[who: SS58String, t: Anonymize<I4arjljr6dpflb>], bigint>;
        /**
        
         */
        total_supply: RuntimeDescriptor<[t: number], bigint>;
        /**
        
         */
        find_block_epoch: RuntimeDescriptor<[block: number, max_epoch: Anonymize<I4totqt881mlti>], Anonymize<I4totqt881mlti>>;
    };
    /**
    
     */
    LendMarketApi: {
        /**
        
         */
        get_account_liquidity: RuntimeDescriptor<[account: SS58String], Anonymize<I1eg5d6kb1j7n>>;
        /**
        
         */
        get_market_status: RuntimeDescriptor<[asset_id: Anonymize<Iebirugq1dbhv6>], Anonymize<I6nubnsvttl6ea>>;
        /**
        
         */
        get_liquidation_threshold_liquidity: RuntimeDescriptor<[account: SS58String], Anonymize<I1eg5d6kb1j7n>>;
    };
    /**
    
     */
    StablePoolRuntimeApi: {
        /**
        
         */
        get_swap_output: RuntimeDescriptor<[pool_id: number, currency_id_in: number, currency_id_out: number, amount: bigint], bigint>;
        /**
        
         */
        add_liquidity_amount: RuntimeDescriptor<[pool_id: number, amounts: Anonymize<Iafqnechp3omqg>], bigint>;
    };
    /**
    
     */
    VtokenMintingRuntimeApi: {
        /**
        
         */
        get_exchange_rate: RuntimeDescriptor<[token_id: Anonymize<I1c99t35ku3g7a>], Anonymize<I49rvbh60t0d1>>;
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
type IAsset = PlainDescriptor<void>;
export type BifrostDotDispatchError = Anonymize<I8vqm6ghktndjq>;
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
export type BifrostDotQueries = QueryFromPalletsDef<PalletsTypedef>;
export type BifrostDotCalls = TxFromPalletsDef<PalletsTypedef>;
export type BifrostDotEvents = EventsFromPalletsDef<PalletsTypedef>;
export type BifrostDotErrors = ErrorsFromPalletsDef<PalletsTypedef>;
export type BifrostDotConstants = ConstFromPalletsDef<PalletsTypedef>;
export type BifrostDotCallData = Anonymize<I1iu0bu1rp17tr> & {
    value: {
        type: string;
    };
};
export type BifrostDotWhitelistEntry = PalletKey | ApiKey<IRuntimeCalls> | `query.${NestedKey<PalletsTypedef['__storage']>}` | `tx.${NestedKey<PalletsTypedef['__tx']>}` | `event.${NestedKey<PalletsTypedef['__event']>}` | `error.${NestedKey<PalletsTypedef['__error']>}` | `const.${NestedKey<PalletsTypedef['__const']>}`;
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
