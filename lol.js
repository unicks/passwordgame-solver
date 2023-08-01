const youtubeInfo = {
    "10:00": "sBehb_Fa_qgTsAg",
    "10:01": "zg1HB_fPvtQTsY",
    "10:02": "pbxvhASkYwkOgBe",
    "10:03": "pbxvhASkYwkOgBe",
    "10:04": "wzziKyoo-aoBhSb",
    "10:05": "_fdAeTdlBpwTsSb",
    "10:06": "_fdAeTdlBpwTsSb",
    "10:07": "Al_xpzOZtggTsY",
    "10:08": "wpAwdsubl1wTsBa",
    "10:09": "pHTwllpq4oAFlSm",
    "10:10": "pHTwllpq4oAFlSm",
    "10:11": "vrjAIBgxm_wOgH",
    "10:12": "vrjAIBgxm_wOgH",
    "10:13": "vNlaEFc_qrgOgTc",
    "10:14": "vNlaEFc_qrgOgTc",
    "10:15": "qQ1celvPNzsHsAg",
    "10:16": "GTfyvmfTzzgFlEu",
    "10:17": "GTfyvmfTzzgFlEu",
    "10:18": "fmwZyqtmopYTsSc",
    "10:19": "fmwZyqtmopYTsSc",
    "10:20": "Ktbp-aoETEYOgH",
    "10:21": "G_tqJoog-tYTsSc",
    "10:22": "vypvgkmZxkgFlEu",
    "10:23": "cjlpEtzxhTIHsS",
    "10:24": "cjlpEtzxhTIHsS",
    "10:25": "Av-jbmBPEgwOgY",
    "10:26": "Av-jbmBPEgwOgY",
    "10:27": "uTkQbSQpJewOgTc",
    "10:28": "uTkQbSQpJewOgTc",
    "10:29": "iFE1bkuBotkBhBa",
    "10:30": "ObOEc_J-mHETsTc",
    "10:31": "ObOEc_J-mHETsTc",
    "10:32": "F13ec-aTdRwTsSb",
    "10:33": "xAjjipdlrHQFlSm",
    "10:34": "bOoHTxjJufYHsSc",
    "10:35": "bOoHTxjJufYHsSc",
    "10:36": "ywgKfdBmAfsFlY",
    "10:37": "ywgKfdBmAfsFlY",
    "10:38": "wvoQmf_QplcFlEu",
    "10:39": "wvoQmf_QplcFlEu",
    "10:40": "_w-lhmbhnQcFlEu",
    "10:41": "fcARdYz1rrwTsSc",
    "10:42": "fcARdYz1rrwTsSc",
    "10:43": "r1aodO2-SEgFlY",
    "10:44": "r1aodO2-SEgFlY",
    "10:45": "nuATcGhzExEOgS",
    "10:46": "zBn3bdNONnwOgGe",
    "10:47": "zBn3bdNONnwOgGe",
    "10:48": "yxzaFgu4_fETsSb",
    "10:49": "yxzaFgu4_fETsSb",
    "10:50": "RsvF_BcggPcTsGa",
    "10:51": "yeg_YGpxlikTsSc",
    "10:52": "yeg_YGpxlikTsSc",
    "10:53": "wAaov-ubjfEFlEu",
    "10:54": "wAaov-ubjfEFlEu",
    "10:55": "viiEHzz2EkAFlSm",
    "10:56": "viiEHzz2EkAFlSm",
    "10:57": "He1RzEIxptEOgBe",
    "10:58": "K2xjowl_iQEBhSb",
    "10:59": "sxtbcOEtpoEOgAg",
    "11:00": "sxtbcOEtpoEOgAg",
    "11:01": "wITJjjnyejgHsS",
    "11:02": "wITJjjnyejgHsS",
    "11:03": "lmrcqtbeppQFlEu",
    "11:04": "lmrcqtbeppQFlEu",
    "11:05": "wRPAqxJY3loOgB",
    "11:06": "yycbqNcvHE_qOgAg",
    "11:07": "yycbqNcvHE_qOgAg",
    "11:08": "uZuzsBHBmvQFlTe",
    "11:09": "uZuzsBHBmvQFlTe",
    "11:10": "tbqarAFGspETsSb",
    "11:11": "tbqarAFGspETsSb",
    "11:12": "uPZplwAtynwOsH",
    "11:13": "vxF1osPkplAFlY",
    "11:14": "iuuFivEbHusBhBa",
    "11:15": "iuuFivEbHusBhBa",
    "11:16": "F-wlKiaP-GoOgS",
    "11:17": "qvdHvb_uR_QFlSm",
    "11:18": "qvdHvb_uR_QFlSm",
    "11:19": "byxEledFpEETsAg",
    "11:20": "byxEledFpEETsAg",
    "11:21": "pSatdrqfgjsOgTc",
    "11:22": "_GrBFSNsfmoOgTi",
    "11:23": "iBjhQ4kddyIOgH",
    "11:24": "oyrNH_megrsOgSb",
    "11:25": "v2Aeto_oxjgFlEu",
    "11:26": "vf_2eGRBllAHsGd",
    "11:27": "vf_2eGRBllAHsGd",
    "11:28": "TpeTyjhtkggFlEu",
    "11:29": "nGylcQTShacOgTc",
    "11:30": "wEQvx-wpcrcFlEu",
    "11:31": "wEQvx-wpcrcFlEu",
    "11:32": "GlSqTuuvfdgOgTc",
    "11:33": "GlSqTuuvfdgOgTc",
    "11:34": "BQ-koxE_Q_YTsS",
    "11:35": "xcknq-wQn3EFlEu",
    "11:36": "JavlibhEfgAFlEu",
    "11:37": "JavlibhEfgAFlEu",
    "11:38": "NTicAwls-cAOgFe",
    "11:39": "NTicAwls-cAOgFe",
    "11:40": "mvw-ohFc_GYTsO",
    "11:41": "mvw-ohFc_GYTsO",
    "11:42": "JOpauE_EEjEOgSb",
    "11:43": "JOpauE_EEjEOgSb",
    "11:44": "steK1_mu1SEHsSe",
    "11:45": "tFRidwwRlJYHsSc",
    "11:46": "he_P_a_EbAkSgBa",
    "11:47": "he_P_a_EbAkSgBa",
    "11:48": "wxGRGpBaaAoTsBe",
    "11:49": "wxGRGpBaaAoTsBe",
    "11:50": "jfNyBYJxx2gOgO",
    "11:51": "yjOx-dpY-_oTsAl",
    "11:52": "yjOx-dpY-_oTsAl",
    "11:53": "ljd-_rAay4AFlEu",
    "11:54": "ym1QkZgY3-wTsSc",
    "11:55": "ym1QkZgY3-wTsSc",
    "11:56": "wBgqAKxujkEFlY",
    "11:57": "wBgqAKxujkEFlY",
    "11:58": "EvwudGaJS4cTsAl",
    "11:59": "nBGOYJTEN2AOg",
    "12:00": "xdqQquPvKBQTsSc",
    "12:01": "xdqQquPvKBQTsSc",
    "12:02": "jNsPTgA4ndsHsAg",
    "12:03": "i-FYgfgn4_kHsSc",
    "12:04": "pt4-OubbcJcOgSb",
    "12:05": "pt4-OubbcJcOgSb",
    "12:06": "htsjQHeFyTEFlTe",
    "12:07": "htsjQHeFyTEFlTe",
    "12:08": "fqyZ2SidAfYHsS",
    "12:09": "teJcxglGzesFlEu",
    "12:10": "mYqSotmAkegOgBe",
    "12:11": "mYqSotmAkegOgBe",
    "12:12": "hsxz3uHPlOQFlY",
    "12:13": "t4OumncEiKoOgGe",
    "12:14": "t4OumncEiKoOgGe",
    "12:15": "qSQRx1gveFEOgSe",
    "12:16": "suhfO-m4QGYTsAl",
    "12:17": "suhfO-m4QGYTsAl",
    "12:18": "oFGggkdppcoTsSb",
    "12:19": "taQtqlwpoRsFlEu",
    "12:20": "taQtqlwpoRsFlEu",
    "12:21": "gQwxngpah-sFlEu",
    "12:22": "gQwxngpah-sFlEu",
    "12:23": "eeklduOaEt8OgSb",
    "12:24": "ffutRhsopwoOgSi",
    "12:25": "ffutRhsopwoOgSi",
    "12:26": "vnfqhGPyOF4FlGa",
    "12:27": "v1dph3AJ-ckFlEu",
    "12:28": "v1dph3AJ-ckFlEu",
    "12:29": "PhtcaxqzFcAFlY",
    "12:30": "PhtcaxqzFcAFlY",
    "12:31": "nxNBKdKn-EwOgF",
    "12:32": "tfxdonEmtTcTsAl",
    "12:33": "tfxdonEmtTcTsAl",
    "12:34": "gjvkyHhhAyYSgGa",
    "12:35": "NaFeEcpxobAFlTi",
    "12:36": "NaFeEcpxobAFlTi",
    "12:37": "zzKpFHEqO4wOgTi",
    "12:38": "lvkwizbyBBYFlSi",
    "12:39": "zSdqfvwFGmQOgSe",
    "12:40": "zSdqfvwFGmQOgSe",
    "12:41": "wP1moQm40yESgBa",
    "12:42": "kn4mpvbmdywFlEu",
    "12:43": "kn4mpvbmdywFlEu",
    "12:44": "xtkyztGmPQsSgBa",
    "12:45": "-HiGJJsghyAFlSm",
    "12:46": "-HiGJJsghyAFlSm",
    "12:47": "zkokOkg1piQOgSb",
    "12:48": "ylbQeBpp3QkHsGd",
    "12:49": "ylbQeBpp3QkHsGd",
    "12:50": "jBuqOyGuGlATsAg",
    "12:51": "jBuqOyGuGlATsAg",
    "12:52": "gKxcjqgHiFoTsGa",
    "12:53": "zapJeJZvyAgTsAl",
    "12:54": "tvmFomyhEYsTsO",
    "12:55": "tvmFomyhEYsTsO",
    "12:56": "fj3iywbEb1QFlEu",
    "12:57": "vqloAjgr3moFlEu",
    "12:58": "yxuFZiwzHG4FmHo",
    "12:59": "uNq_Q-bgq_gOgTe",
    "13:00": "uNq_Q-bgq_gOgTe",
    "13:01": "oaJf2uxK_uABhSb",
    "13:02": "q_yoh-KbqQYOgH",
    "13:03": "q_yoh-KbqQYOgH",
    "13:04": "xGiS2ZQirdoOgTc",
    "13:05": "y3GkxuJyYcsTsSc",
    "13:06": "y3GkxuJyYcsTsSc",
    "13:07": "kwSTiTkuhf4OgSc",
    "13:08": "whlRToeJ1bAFlEu",
    "13:09": "whlRToeJ1bAFlEu",
    "13:10": "PF-RHtRc2GoOgSe",
    "13:11": "PF-RHtRc2GoOgSe",
    "13:12": "Kl4oomaSlloHsSe",
    "13:13": "eqP1P1PQpJcOgSi",
    "13:14": "eqP1P1PQpJcOgSi",
    "13:15": "H-mJEc_2_TgFlSm",
    "13:16": "A-eARjipxOEOgSb",
    "13:17": "PTtgupSquxgFlGe",
    "13:18": "PTtgupSquxgFlGe",
    "13:19": "G-aPgqpjGEcSgBa",
    "13:20": "G-aPgqpjGEcSgBa",
    "13:21": "xxSFFpeTpdQTsFe",
    "13:22": "xxSFFpeTpdQTsFe",
    "13:23": "oEmsYnkqFnsHsSc",
    "13:24": "TibAhnZTAqgHsAg",
    "13:25": "TibAhnZTAqgHsAg",
    "13:26": "zH51oPE0Q-IHs",
    "13:27": "bwIlGZodBfwOgH",
    "13:28": "bwIlGZodBfwOgH",
    "13:29": "pZl2rOvRxscOgSb",
    "13:30": "wSRcydgxkxgOgTc",
    "13:31": "wSRcydgxkxgOgTc",
    "13:32": "vhw_inkc-AEFlEu",
    "13:33": "zpvZJOOAbbAOgTc",
    "13:34": "zpvZJOOAbbAOgTc",
    "13:35": "-wrAwGKqeusBhSb",
    "13:36": "wStBid4mknoOsHe",
    "13:37": "x_uliInbqhkFlSi",
    "13:38": "x_uliInbqhkFlSi",
    "13:39": "hlGid_tskJkFlEu",
    "13:40": "wFHHjGkxFGYOg",
    "13:41": "wFHHjGkxFGYOg",
    "13:42": "zaumyfPx3AoSgBa",
    "13:43": "zaumyfPx3AoSgBa",
    "13:44": "Gv3ucNH1zYETsAl",
    "13:45": "Gv3ucNH1zYETsAl",
    "13:46": "ZcEAoZEoohEFlEu",
    "13:47": "ZcEAoZEoohEFlEu",
    "13:48": "oNxGFNaJBygFlGa",
    "13:49": "uZ4tdfqYxNsOgAl",
    "13:50": "udQRhdf4uQsOgSi",
    "13:51": "udQRhdf4uQsOgSi",
    "13:52": "ndK-itPSvBsOgBe",
    "13:53": "gykmon_em2AFlEu",
    "13:54": "p_xhAqbiz3AFlEu",
    "13:55": "yqdlruxh1tIHsS",
    "13:56": "yhdmgjJ_QSEOgTc",
    "13:57": "yhdmgjJ_QSEOgTc",
    "13:58": "ebTEOGvnuwcOgAg",
    "13:59": "ebTEOGvnuwcOgAg",
    "14:00": "PvPTuiHcTygHsSe",
    "14:01": "kvdu3GlqiAQFlEu",
    "14:02": "miqZIZzHtwEOgB",
    "14:03": "miqZIZzHtwEOgB",
    "14:04": "evvumjwAvTQFlEu",
    "14:05": "evvumjwAvTQFlEu",
    "14:06": "vemghwoyAJIHsS",
    "14:07": "vemghwoyAJIHsS",
    "14:08": "zz1qITOyxScAm",
    "14:09": "cGyyQfsvN-YOgAl",
    "14:10": "cGyyQfsvN-YOgAl",
    "14:11": "wSTxws1kAdoOgTc",
    "14:12": "wSTxws1kAdoOgTc",
    "14:13": "fmvdtJetwbQFlEu",
    "14:14": "fmvdtJetwbQFlEu",
    "14:15": "gsF-BQP-bQoTsGa",
    "14:16": "rrPhAsiRiQQHsSc",
    "14:17": "rrPhAsiRiQQHsSc",
    "14:18": "EigOKPTqpmQFlSc",
    "14:19": "EigOKPTqpmQFlSc",
    "14:20": "GBouxGf-T-wTsSb",
    "14:21": "qHPjiduaSEoFlGa",
    "14:22": "qHPjiduaSEoFlGa",
    "14:23": "ydt_pRraJOcOgSb",
    "14:24": "fPHQQzJPlhcFlGe",
    "14:25": "fPHQQzJPlhcFlGe",
    "14:26": "ce1udO-OGQAOgTc",
    "14:27": "NF1gdujhPlsFlGe",
    "14:28": "Px4vnbuelxsBhSb",
    "14:29": "tGjoqjbOusgOgSb",
    "14:30": "tGjoqjbOusgOgSb",
    "14:31": "luRyhE2rwugFlEu",
    "14:32": "yu_aBPlGRBcOgSe",
    "14:33": "yu_aBPlGRBcOgSe",
    "14:34": "ExPqGQyJPJwFlAs",
    "14:35": "ExPqGQyJPJwFlAs",
    "14:36": "sitHTBQPsRcTsY",
    "14:37": "sitHTBQPsRcTsY",
    "14:38": "lAyGvbBxwhcTsSb",
    "14:39": "qciqozxAgaQTsAl",
    "14:40": "qciqozxAgaQTsAl",
    "14:41": "nsNynguyBGkOgAg",
    "14:42": "feOqpcJ-zTAOgSb",
    "14:43": "FzEewEh_EHwFmHo",
    "14:44": "FzEewEh_EHwFmHo",
    "14:45": "4_ayqZGs_qzTsBa",
    "14:46": "TKPqu-wktBwTsSc",
    "14:47": "TKPqu-wktBwTsSc",
    "14:48": "31ojdfiHblAFlSm",
    "14:49": "nFElHizOHu4BhSb",
    "14:50": "fboozhIoyEwHsS",
    "14:51": "lcYpf-_tqZcTsSc",
    "14:52": "lcYpf-_tqZcTsSc",
    "14:53": "xSdlAkwhEEkOgTc",
    "14:54": "xSdlAkwhEEkOgTc",
    "14:55": "-wxjxtxGYhkTsSc",
    "14:56": "BfPT4ixsxjAOgY",
    "14:57": "yeZuyI1m2JgHsS",
    "14:58": "sffqPRiApScHsAs",
    "14:59": "sffqPRiApScHsAs",
    "15:00": "_bHpmaF-qtsFmHo",
    "15:01": "hegAK-TNNggOgFe",
    "15:02": "cPivZQZpbfASgBa",
    "15:03": "cPivZQZpbfASgBa",
    "15:04": "wYxcdqyBl3cTsS",
    "15:05": "EGhcZlE-4HkFlSm",
    "15:06": "tsistTTK1YQOgH",
    "15:07": "tsistTTK1YQOgH",
    "15:08": "oEdhYqfs3hgTsSc",
    "15:09": "oEdhYqfs3hgTsSc",
    "15:10": "S-KZ4BbEKcoOg",
    "15:11": "zuTd2fUxHygBiH",
    "15:12": "prakKhiPfvETsFe",
    "15:13": "RoFSqtrivFsTsFe",
    "15:14": "RoFSqtrivFsTsFe",
    "15:15": "qeJ-undA_iIHsS",
    "15:16": "duOFuPFbGGQFlTi",
    "15:17": "duOFuPFbGGQFlTi",
    "15:18": "Jdo2Kqusdw_jkqBhAg",
    "15:19": "Tv1QbjNyPJAHsAg",
    "15:20": "Ouivipy-ZNESgBa",
    "15:21": "zJTJ3HYxySwTsBe",
    "15:22": "KkdBEBKuabkHsSc",
    "15:23": "olhcjYtFxmgHsSc",
    "15:24": "olhcjYtFxmgHsSc",
    "15:25": "emFaiNYr-dEOgBe",
    "15:26": "zwdvQbUhsq0At",
    "15:27": "giOBEZvZQoETsAg",
    "15:28": "giOBEZvZQoETsAg",
    "15:29": "Pkl_lA1j_EoSgBa",
    "15:30": "Pkl_lA1j_EoSgBa",
    "15:31": "vwiOoTNvtBQOgY",
    "15:32": "vwiOoTNvtBQOgY",
    "15:33": "OlnmOBHwjNgTsGa",
    "15:34": "a2rKgybGP_wTsFe",
    "15:35": "rRrSaNH-R-AFlY",
    "15:36": "rRrSaNH-R-AFlY",
    "15:37": "cZGZYn2qq1QTsSc",
    "15:38": "cZGZYn2qq1QTsSc",
    "15:39": "seakAbF1JfoTsSb",
    "15:40": "xzGBZudNwOYOg",
    "15:41": "xzGBZudNwOYOg",
    "15:42": "tfnFNvmwJxYOgBe",
    "15:43": "i-mwGpGvfjYTsSc",
    "15:44": "i-mwGpGvfjYTsSc",
    "15:45": "qTuF2ljzJlATsSb",
    "15:46": "tS6m2kY-EpkOgBe",
    "15:47": "tS6m2kY-EpkOgBe",
    "15:48": "cf2T_Skq1xcOgTc",
    "15:49": "mGHmYgkmJFsFlSi",
    "15:50": "bEOEQYiGFGsTsBe",
    "15:51": "bEOEQYiGFGsTsBe",
    "15:52": "sveFnwpKmPwOgS",
    "15:53": "r2mlfuaebxcFlEu",
    "15:54": "ibddibakbSsOgTc",
    "15:55": "ibddibakbSsOgTc",
    "15:56": "dAztcH-zZQgFlSm",
    "15:57": "SpRvSR_oJJ4FlGa",
    "15:58": "uPHlSrR1kbEOgB",
    "15:59": "oyah-NEt_BYOgBe",
    "16:00": "oyah-NEt_BYOgBe",
    "16:01": "qcugnluNcfoOgTe",
    "16:02": "qcugnluNcfoOgTe",
    "16:03": "lakfertrSTQOgTc",
    "16:04": "GlQBnTgGousHsGd",
    "16:05": "b-yQwvPetQYOgB",
    "16:06": "b-yQwvPetQYOgB",
    "16:07": "otolHzENH3wTsSb",
    "16:08": "otolHzENH3wTsSb",
    "16:09": "uly-adxeZGkFlEu",
    "16:10": "uly-adxeZGkFlEu",
    "16:11": "zeOmSyiJqq4FlY",
    "16:12": "zeOmSyiJqq4FlY",
    "16:13": "HmaTAbyR-zEFlSm",
    "16:14": "ds_qcOBjtioTsAg",
    "16:15": "ds_qcOBjtioTsAg",
    "16:16": "dkHyH_t3_PgTsTc",
    "16:17": "dkHyH_t3_PgTsTc",
    "16:18": "jjIHvGAGwQ4OgB",
    "16:19": "jjIHvGAGwQ4OgB",
    "16:20": "EanOeKoT__EOgGe",
    "16:21": "EanOeKoT__EOgGe",
    "16:22": "rtHwxdBaEoAOgHe",
    "16:23": "rtHwxdBaEoAOgHe",
    "16:24": "lz-aAipGlZEFlEu",
    "16:25": "qn3srYvQpbsTsSc",
    "16:26": "e2ZnNfl_aeEOgTi",
    "16:27": "whkmB2trAakHsGd",
    "16:28": "whkmB2trAakHsGd",
    "16:29": "ougmhvyA_d4TsBa",
    "16:30": "tIimjsilduEHsS",
    "16:31": "tIimjsilduEHsS",
    "16:32": "v2QuiEZilasFlEu",
    "16:33": "v2QuiEZilasFlEu",
    "16:34": "I31dZqBJswwOgH",
    "16:35": "_vSBqlplZEoTsY",
    "16:36": "_vSBqlplZEoTsY",
    "16:37": "zjhhBdusfmYTsS",
    "16:38": "xtu-3oecteoTsBa",
    "16:39": "xtu-3oecteoTsBa",
    "16:40": "rZlGStO_EPsTsSc",
    "16:41": "rZlGStO_EPsTsSc",
    "16:42": "laGttpuPnwQSgBa",
    "16:43": "laGttpuPnwQSgBa",
    "16:44": "jkcydFx_gYoHsSc",
    "16:45": "zAyqABGsZqQHsGd",
    "16:46": "zAyqABGsZqQHsGd",
    "16:47": "qgqwHOwbntsTsSb",
    "16:48": "phmPJqJwoecSgBa",
    "16:49": "ob-oZqxtUusAt",
    "16:50": "sNsSnwg2loEFlHe",
    "16:51": "_EjtpIBQ-_sOgH",
    "16:52": "_EjtpIBQ-_sOgH",
    "16:53": "dEeYr_GGAdwTsSc",
    "16:54": "dEeYr_GGAdwTsSc",
    "16:55": "vtKiOZthsosOgGe",
    "16:56": "msAitFgarpcTsSb",
    "16:57": "msAitFgarpcTsSb",
    "16:58": "i22rHpjBHjEOgTe",
    "16:59": "u_melFtiOmQTsTc",
    "17:00": "u_melFtiOmQTsTc",
    "17:01": "p1mluujFcvcTsSb",
    "17:02": "p1mluujFcvcTsSb",
    "17:03": "yfmZ4ohlBGIOgH",
    "17:04": "yfmZ4ohlBGIOgH",
    "17:05": "GsK_bYcxjyEOgH",
    "17:06": "roq8cUcw_HkBiH",
    "17:07": "yxx3Bkmv3ckHg",
    "17:08": "lYHepOyyzm4FlSi",
    "17:09": "lYHepOyyzm4FlSi",
    "17:10": "v0m4ZF2qAQ0TsSb",
    "17:11": "fcQQcpbkvJsFlEu",
    "17:12": "fcQQcpbkvJsFlEu",
    "17:13": "R_wIkowrET4HsS",
    "17:14": "jtIxpdbdHbEOgB",
    "17:15": "jtIxpdbdHbEOgB",
    "17:16": "-wwp_Zi_ezoFlEu",
    "17:17": "-wwp_Zi_ezoFlEu",
    "17:18": "gJbmR3I1iBsOgH",
    "17:19": "xsgguhFelKsOgSi",
    "17:20": "xsgguhFelKsOgSi",
    "17:21": "hTgxxmRvxygFlEu",
    "17:22": "OqQOaScdTJwOgTi",
    "17:23": "EyTtBHlxIysFl",
    "17:24": "EyTtBHlxIysFl",
    "17:25": "zsoOuQStd-kFlY",
    "17:26": "1ocONrEwhlcSgBa",
    "17:27": "ddzTZBfuaBYFlSi",
    "17:28": "ddzTZBfuaBYFlSi",
    "17:29": "QpQpsGrvlEYTsSc",
    "17:30": "QpQpsGrvlEYTsSc",
    "17:31": "wltEkq1BjTcHsSc",
    "17:32": "sohfOvslPAsTs",
    "17:33": "sohfOvslPAsTs",
    "17:34": "rhedpNtqsQoOgTe",
    "17:35": "rhedpNtqsQoOgTe",
    "17:36": "BscAT_iQI1AOgH",
    "17:37": "oSkiN_sdg1QBhAg",
    "17:38": "wFhqqOE_dKgHsAs",
    "17:39": "wFhqqOE_dKgHsAs",
    "17:40": "w4kygohyojIHsS",
    "17:41": "Zbkil4kutwIHsS",
    "17:42": "Zbkil4kutwIHsS",
    "17:43": "vGP_ABzmk1gOgY",
    "17:44": "vGP_ABzmk1gOgY",
    "17:45": "qcuc3rgwZAEFlEu",
    "17:46": "qcuc3rgwZAEFlEu",
    "17:47": "fHJchOtb2_ATsSb",
    "17:48": "fHJchOtb2_ATsSb",
    "17:49": "yWZ4mdOhhukAm",
    "17:50": "h2yicpQqvdsFlEu",
    "17:51": "h2yicpQqvdsFlEu",
    "17:52": "govSEaEP4HAHsAs",
    "17:53": "qkyPvhapxQsSgBa",
    "17:54": "qkyPvhapxQsSgBa",
    "17:55": "tvmFEPiyJPkTsSc",
    "17:56": "qFHxkZdz4HAFlTe",
    "17:57": "tcbfqfgqigoFlEu",
    "17:58": "tcbfqfgqigoFlEu",
    "17:59": "aQiab_-xtKgBhSb",
    "18:00": "aQiab_-xtKgBhSb",
    "18:01": "oBRt3ZAadBYFlSi",
    "18:02": "swATo0S6PS0OgO",
    "18:03": "qQkb-BmSsQgTsY",
    "18:04": "qQkb-BmSsQgTsY",
    "18:05": "s3ihrKGvyrEBhSb",
    "18:06": "sPiFysaglcsOgGa",
    "18:07": "sPiFysaglcsOgGa",
    "18:08": "lkbftbfHdKgOgY",
    "18:09": "rSob4c-1hEwOgTc",
    "18:10": "dB4JmyaooesHsGd",
    "18:11": "sOBAdKipu4cFlGa",
    "18:12": "aiAbwmzbGyAFlEu",
    "18:13": "aiAbwmzbGyAFlEu",
    "18:14": "eiA3byGTejATsO",
    "18:15": "eiA3byGTejATsO",
    "18:16": "ieOSRiRdG_cFlY",
    "18:17": "ieOSRiRdG_cFlY",
    "18:18": "bfevcsANSr4OgSi",
    "18:19": "bfevcsANSr4OgSi",
    "18:20": "zAP5dlvzqo0SgBa",
    "18:21": "muvcqunRN6EOgTe",
    "18:22": "uGtwBZ1vq2wHsGd",
    "18:23": "uGtwBZ1vq2wHsGd",
    "18:24": "sigIJw_-AacHsS",
    "18:25": "sigIJw_-AacHsS",
    "18:26": "kt3b-FvOTxoTsTc",
    "18:27": "kwFkkrRHrQoFmHo",
    "18:28": "xR2ZmPqG_-sSgBa",
    "18:29": "xR2ZmPqG_-sSgBa",
    "18:30": "kcgaKASuBqcSgGa",
    "18:31": "kcgaKASuBqcSgGa",
    "18:32": "ymi-oFkx_rQTsSb",
    "18:35": "oAopav-lHxEHsGd",
    "18:36": "oAopav-lHxEHsGd",
    "18:37": "G1wgGRcmxIEHsS",
    "18:38": "nb_qho0heJUAt",
    "18:39": "zEwSPecezJYBh",
    "18:40": "EvfqdqPloBQOgY",
    "18:41": "EvfqdqPloBQOgY",
    "18:42": "laQRlb4bnhsFlEu",
    "18:43": "laQRlb4bnhsFlEu",
    "18:44": "jQApnbths3oFlEu",
    "18:45": "_EzZiv-jt4YTsSc",
    "18:46": "_aR_qwbBOxwTsAg",
    "18:47": "_aR_qwbBOxwTsAg",
    "18:48": "ySzxfuHqilwTsTc",
    "18:49": "ySzxfuHqilwTsTc",
    "18:50": "tFtZ1jJqFfwHsSb",
    "18:51": "ScsfxTgGkHQHsAg",
    "18:52": "tlS-SF_ctOQFlSi",
    "18:53": "tlS-SF_ctOQFlSi",
    "18:54": "OnsnZTYoe-cTsAl",
    "18:55": "OnsnZTYoe-cTsAl",
    "18:56": "vvw-8fnecwQFlEu",
    "18:57": "pxO3p-bJivoOgSb",
    "18:58": "pxO3p-bJivoOgSb",
    "18:59": "OKpwPljtEAEFlSc",
    "19:00": "zoiwSs1inZEOgTc",
    "19:01": "zoiwSs1inZEOgTc",
    "19:02": "zAv3xfg_sfAFlEu",
    "19:03": "zAv3xfg_sfAFlEu",
    "19:04": "lvZABH3nuocHsEu",
    "19:05": "v-omnt_qPfkSgBa",
    "19:06": "lPq_btcQiOEBhAg",
    "19:07": "lPq_btcQiOEBhAg",
    "19:08": "wZ3oGTHUesABiH",
    "19:09": "e_cuRyq-mlcFlEu",
    "19:10": "e_cuRyq-mlcFlEu",
    "19:11": "EQQcOKfHpsQOgGa",
    "19:12": "EQQcOKfHpsQOgGa",
    "19:13": "ssHdFvOaz7AHsSb",
    "19:14": "m-aayo7wgpoTsBa",
    "19:15": "piFAQ4iPwgEFlY",
    "19:16": "yvf-AhkpyEoFlEu",
    "19:17": "yvf-AhkpyEoFlEu",
    "19:18": "zAqmGcH-izAFlSm",
    "19:19": "zAqmGcH-izAFlSm",
    "19:20": "qipkv3siQloFlEu",
    "19:21": "qipkv3siQloFlEu",
    "19:22": "GjbqybEAYfcTsSc",
    "19:23": "ovjcpbIGjBAOgH",
    "19:24": "ovjcpbIGjBAOgH",
    "19:25": "f4IZBffdGQkOgH",
    "19:26": "dvY1jiftQFAHsSc",
    "19:27": "spsE1To_wjsFlEu",
    "19:28": "spsE1To_wjsFlEu",
    "19:29": "ev2obEw4IHkOgB",
    "19:30": "wJxxZP-EjbESgBa",
    "19:31": "PEhbRdQ-QyESgBa",
    "19:32": "PEhbRdQ-QyESgBa",
    "19:33": "lcmcgOvvER4OgSb",
    "19:34": "jIsq_fugwsEHsS",
    "19:35": "jIsq_fugwsEHsS",
    "19:36": "FkaFcvAyvmgHsSb",
    "19:37": "FkaFcvAyvmgHsSb",
    "19:38": "eZJgTYylglETsSc",
    "19:39": "vwYoYtEBAlEOsH",
    "19:40": "cwaZTg4hIoAHsS",
    "19:41": "iA4Khfro_KwOgSc",
    "19:42": "sAIjBAZoghAOgH",
    "19:43": "wgixEn3EtNEFlTe",
    "19:44": "wgixEn3EtNEFlTe",
    "19:45": "ozbem_kh4-AFlEu",
    "19:46": "rqQApxshzYETsSc",
    "19:47": "ORxdRFssc-oTsTc",
    "19:48": "_TfHy_aEpmYTsS",
    "19:49": "_TfHy_aEpmYTsS",
    "19:50": "PpqfczkfqlgSgBa",
    "19:51": "eadoBji_JEEHsGd",
    "19:52": "eadoBji_JEEHsGd",
    "19:53": "cmfpdAhBYaAHsSc",
    "19:54": "_lPHPHAxltoHsAs",
    "19:55": "_lPHPHAxltoHsAs",
    "19:56": "m_d3BsoaQhEHsGd",
    "19:57": "b1fRZh2GiScTsY",
    "19:58": "lybsZGEotRwFlEu",
    "19:59": "lybsZGEotRwFlEu",
    "20:00": "dNcqAeEgohwOgTe",
    "20:01": "dNcqAeEgohwOgTe",
    "20:02": "ydiGAdjtvgsFlEu",
    "20:03": "ydiGAdjtvgsFlEu",
    "20:04": "sHJiOZTvOccTsTc",
    "20:05": "sHJiOZTvOccTsTc",
    "20:06": "y-FqyZjpSyAOgSe",
    "20:07": "y-FqyZjpSyAOgSe",
    "20:08": "mtysglpb-BIFlH",
    "20:09": "mtysglpb-BIFlH",
    "20:10": "wmu-nzbHH-QHsHo",
    "20:11": "_iQR_YlsxdETsSc",
    "20:12": "_iQR_YlsxdETsSc",
    "20:13": "EbAwbFbrueYHsSc",
    "20:14": "fpEedKmOxxEOgGe",
    "20:15": "fpEedKmOxxEOgGe",
    "20:16": "HuF-uozGz_AFmHo",
    "20:17": "yuBARdwxxowHsGd",
    "20:18": "yuBARdwxxowHsGd",
    "20:19": "d-sbT_zwQSEOgTc",
    "20:20": "vABphmpqOQsTsAg",
    "20:21": "vABphmpqOQsTsAg",
    "20:22": "dRdrTOBohsoTsAg",
    "20:23": "BqpsycrqTwAHsGd",
    "20:24": "pRWPR0JdyFEAu",
    "20:25": "HnsuuTqGPewOgTc",
    "20:26": "QqwdNwwQPqQHsAg",
    "20:27": "gHEKsekTyKoTsSc",
    "20:28": "gHEKsekTyKoTsSc",
    "20:29": "rgAgqry-cokTsAl",
    "20:30": "rgAgqry-cokTsAl",
    "20:31": "pyaF-jSZeiQOgSe",
    "20:32": "mKj-t2JoBJcFlY",
    "20:33": "whmqtpFfpdwTsSb",
    "20:34": "whmqtpFfpdwTsSb",
    "20:35": "oEbTS4lzQOQFlY",
    "20:36": "oEbTS4lzQOQFlY",
    "20:37": "fdHmRkHS_ioHsSb",
    "20:38": "xiB1eejdgdQHsGd",
    "20:39": "TdetZOGwwQEOgSb",
    "20:40": "lHiuGOHpmnoBhBa",
    "20:41": "lHiuGOHpmnoBhBa",
    "20:42": "upkfmifpZ4IHsS",
    "20:43": "upkfmifpZ4IHsS",
    "20:44": "bsQmoj2m2YkTsSc",
    "20:45": "dFpqSnv_avwOg",
    "20:46": "dFpqSnv_avwOg",
    "20:47": "cGqEBvlmFAQBhBa",
    "20:48": "cGqEBvlmFAQBhBa",
    "20:49": "miwdmscuFfETsAg",
    "20:50": "miwdmscuFfETsAg",
    "20:51": "lcozsZuvatQFlEu",
    "20:52": "ze-yx_ZgpecFlEu",
    "20:53": "ze-yx_ZgpecFlEu",
    "20:54": "mdwv-PzyeqESgBa",
    "20:55": "mdwv-PzyeqESgBa",
    "20:56": "vknsNgdKpdAOgAs",
    "20:57": "fxieKFowcjEOgGa",
    "20:58": "fxieKFowcjEOgGa",
    "20:59": "nOQNAzvZQnASgBa",
    "21:00": "yasAwfAkcBgHsGd",
    "21:01": "yasAwfAkcBgHsGd",
    "21:02": "qYupippGfGcTsSc",
    "21:03": "qYupippGfGcTsSc",
    "21:04": "-tB_adyqijAHsGd",
    "21:05": "bgAwgI1HZacOgB",
    "21:06": "ukTHyklqyiEFlSm",
    "21:07": "ukTHyklqyiEFlSm",
    "21:08": "lmmh4lkvrToFlEu",
    "21:09": "AntcEmvgqeYTsSc",
    "21:10": "AntcEmvgqeYTsSc",
    "21:11": "mivaYecxmzATsSc",
    "21:12": "mivaYecxmzATsSc",
    "21:13": "gfITTrl2b1wHsS",
    "21:14": "cclcJoqpaSQOgTc",
    "21:15": "cclcJoqpaSQOgTc",
    "21:16": "ycelvHNQSwcFlY",
    "21:17": "ycelvHNQSwcFlY",
    "21:18": "v12tbjdoHIQOgB",
    "21:19": "_kawt2AFceQTsSb",
    "21:20": "vfa_2iRcTKsBhSb",
    "21:21": "apsFhzbOatATsTc",
    "21:22": "apsFhzbOatATsTc",
    "21:23": "wmJxKjiodxkBhSb",
    "21:24": "gyp2q2G_GkQFlEu",
    "21:25": "zeoovSB1dqkTsY",
    "21:26": "zeoovSB1dqkTsY",
    "21:27": "gQifzqaTTZgFlEu",
    "21:28": "zQgyou_zIQsHsS",
    "21:29": "zQgyou_zIQsHsS",
    "21:30": "jJBa-JyxlzgTsBe",
    "21:31": "kgtuHlpn_IEOgB",
    "21:32": "qPZhwyvA4OcBhAg",
    "21:33": "qPZhwyvA4OcBhAg",
    "21:34": "oJjNvxhmj1sOgTe",
    "21:35": "avuHvnsRQrsFlSm",
    "21:36": "t3_uK-HElhkOgY",
    "21:37": "cOmgslHwgpcTsAg",
    "21:38": "cOmgslHwgpcTsAg",
    "21:39": "PHwast_nGsYOg",
    "21:40": "OSod_P_thiAOgS",
    "21:41": "1Aam-YszHxsSgGa",
    "21:42": "RbcbpqFA_cQOgAl",
    "21:43": "RbcbpqFA_cQOgAl",
    "21:44": "To1plZGqg2cFlEu",
    "21:45": "BPZ4f-dKm_sTsSc",
    "21:46": "v3PHeGEvbvQTsTc",
    "21:47": "v3PHeGEvbvQTsTc",
    "21:48": "rhP4mj_xScwHsAs",
    "21:49": "SzGOyHbi-jwOgSe",
    "21:50": "N-nIQQuAhu4Ts",
    "21:51": "N-nIQQuAhu4Ts",
    "21:52": "hqaYlNBcpAwOgO",
    "21:53": "hqaYlNBcpAwOgO",
    "21:54": "jqQ1ltgp-tIHsS",
    "21:55": "hlZhxpdxmPwSgBa",
    "21:56": "hlZhxpdxmPwSgBa",
    "21:57": "zSt2I-ekZ-EHs",
    "21:58": "bt-YsloklakTsSc",
    "21:59": "bt-YsloklakTsSc",
    "22:00": "bHqiYQqclHkFlTi",
    "22:01": "bHqiYQqclHkFlTi",
    "22:02": "tigocuoyJx4FlEu",
    "22:03": "gdOpyudgjmwOgSb",
    "22:04": "qpudqbOdKSQOgS",
    "22:05": "qpudqbOdKSQOgS",
    "22:06": "x__qGOHP-1AFlY",
    "22:07": "x__qGOHP-1AFlY",
    "22:08": "s1iZ1-e1SfAOgTc",
    "22:09": "dkoqvlGuzvQFlEu",
    "22:10": "SyFxF4NryfoFlTi",
    "22:11": "SyFxF4NryfoFlTi",
    "22:12": "yxx3FhyzbFYOgHe",
    "22:13": "yxx3FhyzbFYOgHe",
    "22:14": "aiBRpdb1HxYOgSi",
    "22:15": "ipzshwvHcnsFlSm",
    "22:16": "ipzshwvHcnsFlSm",
    "22:17": "leTjElxNQEYOgAl",
    "22:18": "leTjElxNQEYOgAl",
    "22:19": "1bKHmmyfSwQHsAs",
    "22:20": "fI_AQntrgicHsS",
    "22:21": "n-dQdPeid_QSgBa",
    "22:22": "n-dQdPeid_QSgBa",
    "22:23": "TypFkTfl_wwTsSb",
    "22:24": "TypFkTfl_wwTsSb",
    "22:25": "TIif3wgdeaEOgHe",
    "22:26": "TIif3wgdeaEOgHe",
    "22:27": "RQ3odzdbB-AHsGd",
    "22:28": "v1x2_KHNTwAOgGe",
    "22:29": "v1x2_KHNTwAOgGe",
    "22:30": "knNvkGHbkQYTsAl",
    "22:31": "rJaqTGR3ARYTsSc",
    "22:32": "rJaqTGR3ARYTsSc",
    "22:33": "Zv-Y4cqvEhETsSc",
    "22:34": "ugcozgEZv_gFlEu",
    "22:35": "ugcozgEZv_gFlEu",
    "22:36": "uvtoGPEAdswBhSb",
    "22:37": "uvtoGPEAdswBhSb",
    "22:38": "eyA4xxyydEoTsBa",
    "22:39": "eyA4xxyydEoTsBa",
    "22:40": "s2qrnT60AvgFlEu",
    "22:41": "y-OGGubZd1QOgSb",
    "22:42": "OiHpu-mdcrQTsSb",
    "22:43": "OiHpu-mdcrQTsSb",
    "22:44": "q1uTYkOlGvETsAl",
    "22:45": "GQRu_ltP-ucOg",
    "22:46": "GQRu_ltP-ucOg",
    "22:47": "ANeexOuTnAQHsSb",
    "22:48": "ANeexOuTnAQHsSb",
    "22:49": "w4qEBBRBmOcBhAg",
    "22:50": "w4qEBBRBmOcBhAg",
    "22:51": "w_rhiQaGKbQBhSb",
    "22:52": "w_rhiQaGKbQBhSb",
    "22:53": "lY-llZ2OAbETsAl",
    "22:54": "lY-llZ2OAbETsAl",
    "22:55": "azuQtpF-AnQTsSb",
    "22:56": "bHaAeSnO_HEHsB",
    "22:57": "bHaAeSnO_HEHsB",
    "22:58": "geRymtZtmOoOgSb",
    "22:59": "geRymtZtmOoOgSb",
    "23:00": "wSGuy3-uGGoOgY",
    "23:01": "BpetlIualbkOgH",
    "23:02": "deqfqFgGKkEOgGa",
    "23:03": "unHlaSxOHwgFlAs",
    "23:04": "unHlaSxOHwgFlAs",
    "23:05": "xYq4vZsy_psTsSc",
    "23:06": "xYq4vZsy_psTsSc",
    "23:07": "vKTulaBSkJ4SgGa",
    "23:08": "vKTulaBSkJ4SgGa",
    "23:09": "vzk4xFyFfTEHsSb",
    "23:10": "vzk4xFyFfTEHsSb",
    "23:11": "PsSFiv-yobwTsS",
    "23:12": "PsSFiv-yobwTsS",
    "23:13": "tnAztNll2-AOgTe",
    "23:14": "yhPRkihs-YgOgB",
    "23:15": "yhPRkihs-YgOgB",
    "23:16": "uHtRju2EcsQFlSm",
    "23:17": "uHtRju2EcsQFlSm",
    "23:18": "o2bwsqvkKaoBhSb",
    "23:19": "axi2khkpnHIOgB",
    "23:20": "vovohmoiSSwHsAs",
    "23:21": "vovohmoiSSwHsAs",
    "23:22": "NlN-_yB1kacBhSb",
    "23:23": "-eb-fTTSiA4HsSb",
    "23:24": "wSTyK-b-tuoHsSe",
    "23:25": "wSTyK-b-tuoHsSe",
    "23:26": "rsixtgYdzeETsSc",
    "23:27": "rsixtgYdzeETsSc",
    "23:28": "3TtaBEabN_sOgTc",
    "23:29": "3TtaBEabN_sOgTc",
    "23:30": "FswnzwvOo1wTsTc",
    "23:31": "GF4HTGEpnlQFmHo",
    "23:32": "OG2ZZbcxxTEOgSb",
    "23:33": "OG2ZZbcxxTEOgSb",
    "23:34": "vpcvxqrarF0TsSb",
    "23:35": "OTrYiQc3qjoTsAl",
    "23:36": "OTrYiQc3qjoTsAl",
    "23:37": "QObQcP_QlKQFlSc",
    "23:38": "QObQcP_QlKQFlSc",
    "23:39": "sJhsmqFQejgTsSb",
    "23:40": "sJhsmqFQejgTsSb",
    "23:42": "oPGOawtaNNkOgTi",
    "23:43": "z0FjBPzYdpcHsH",
    "23:44": "FnRS4dtyaoAOgSe",
    "23:45": "vaGmqdNcteEOgTe",
    "23:46": "vaGmqdNcteEOgTe",
    "23:47": "wPwqTSxhzr4FlGe",
    "23:48": "QijnwafQxeAFlEu",
    "23:49": "kHEgqFihe_oFmHo",
    "23:50": "kHEgqFihe_oFmHo",
    "23:51": "rQcav-3UblQAt",
    "23:52": "fskFoqloxKkOgGa",
    "23:53": "fskFoqloxKkOgGa",
    "23:54": "xQlBew-mRdkTsBa",
    "23:55": "xQlBew-mRdkTsBa",
    "23:56": "rwbhtdKTEeEBhSb",
    "23:57": "AHuhzhtZT3EFlSm",
    "23:58": "iHyqvFgPRzAOgSe",
    "23:59": "txcxtmHvx1sHsGd",
    "24:00": "y1Ek-yBSlAwTsY",
    "24:01": "y1Ek-yBSlAwTsY",
    "24:02": "SxAHRwt-tAkTsTc",
    "24:03": "SxAHRwt-tAkTsTc",
    "24:04": "y0gFJaSBQEIUHe",
    "24:05": "PqzlpzP-hvwFlAs",
    "24:06": "_spoyklAkggFlEu",
    "24:07": "_spoyklAkggFlEu",
    "24:08": "wdhtpZ2JZewFlEu",
    "24:09": "wdhtpZ2JZewFlEu",
    "24:10": "E2xBw2rrjroHsGd",
    "24:11": "E2xBw2rrjroHsGd",
    "24:12": "xxAQwd5bWlgEsBe",
    "24:13": "ZAqwFZFv4scHsSb",
    "24:14": "xiKYv1rhqGgOgH",
    "24:15": "ggsqvFsgoKkOgGa",
    "24:16": "ggsqvFsgoKkOgGa",
    "24:17": "aYAHGKtQqcQOg",
    "24:18": "HbstbqnpwfIOgB",
    "24:19": "HbstbqnpwfIOgB",
    "24:20": "ujRImvE-Ou8FlHe",
    "24:21": "ujRImvE-Ou8FlHe",
    "24:22": "BcAZA2YREdgTsS",
    "24:23": "BcAZA2YREdgTsS",
    "24:24": "zUidhf6svZQAt",
    "24:25": "Jt3xtStOnsoFlY",
    "24:26": "Jt3xtStOnsoFlY",
    "24:27": "mSjvsS-HdwAOgFe",
    "24:28": "mSjvsS-HdwAOgFe",
    "24:29": "_ciSdcldorQOgTc",
    "24:30": "_ciSdcldorQOgTc",
    "24:31": "1NlxBbBN-mEOgGa",
    "24:32": "QKHFbeQmHQQFlAs",
    "24:33": "QKHFbeQmHQQFlAs",
    "24:34": "ikctfKEwZZwBhSb",
    "24:35": "tOpEJR0_Ho0FmHe",
    "24:36": "mGsafpPhe2kSgBa",
    "24:37": "cynqY_iFBwAHsS",
    "24:38": "cynqY_iFBwAHsS",
    "24:39": "uQ3bbgbmkrIHsS",
    "24:40": "uQ3bbgbmkrIHsS",
    "24:41": "aypEx5gvOrEOgSb",
    "24:42": "ZcZfxuhqfqoFlEu",
    "24:43": "ZcZfxuhqfqoFlEu",
    "24:44": "cAN-aQHElEEOgSb",
    "24:45": "tdzetylTHFEFmHo",
    "24:46": "tdzetylTHFEFmHo",
    "24:47": "ebf2Gg2bsmwTsBa",
    "24:48": "v_asAv8u-vETsBa",
    "24:49": "agASFFHpZswHsSe",
    "24:50": "mxmKuTqp_dgBhSb",
    "24:51": "mxmKuTqp_dgBhSb",
    "24:52": "xIyt6smw1vEOgHe",
    "24:53": "TzZSsyw3pPcFlGe",
    "24:55": "tjwzSAOm_lEFlY",
    "24:56": "tjwzSAOm_lEFlY",
    "24:57": "iBHE-l2NOKwSgGa",
    "24:58": "_bKgeqmmqNcOgAs",
    "24:59": "_bKgeqmmqNcOgAs",
    "25:00": "gifrBZb_1tYTsS",
    "25:01": "Pltaqfkpi-oSgBa",
    "25:02": "Pltaqfkpi-oSgBa",
    "25:03": "hdeuzHdtZAYSgGa",
    "25:04": "hdeuzHdtZAYSgGa",
    "25:05": "vSQrriirSNwTsSc",
    "25:06": "vSQrriirSNwTsSc",
    "25:07": "jqHFfe4Zj1AFmHo",
    "25:08": "dkhbdRhtaooOgSi",
    "25:09": "sptjBekF-mgTsAg",
    "25:10": "sptjBekF-mgTsAg",
    "25:11": "hzekdsxBs2AHsGd",
    "25:12": "GsmtrGG4_bwFlEu",
    "25:13": "wpfneYne41EOgS",
    "25:14": "tkTTgoHhkbQFlSm",
    "25:15": "tkTTgoHhkbQFlSm",
    "25:16": "slmbfx4SodgOgY",
    "25:17": "tOJ_BdGsekcTsAg",
    "25:18": "sQjwvJuhOPEBhAg",
    "25:19": "sQjwvJuhOPEBhAg",
    "25:20": "xo4KGRldu-oBhSb",
    "25:21": "xo4KGRldu-oBhSb",
    "25:22": "oxmpUQ5AqNAOsHe",
    "25:23": "yBE8dmhtNdwHs",
    "25:24": "x-jEObj1EOAOgTc",
    "25:25": "x-jEObj1EOAOgTc",
    "25:26": "usFszlBw_GEBhBa",
    "25:27": "usFszlBw_GEBhBa",
    "25:28": "tpeqpfAowYYEs",
    "25:29": "oixhtoEYBQYUHe",
    "25:30": "dz-3plw5dbUAt",
    "25:31": "dz-3plw5dbUAt",
    "25:32": "mhh4bAjryGcFlEu",
    "25:33": "gQAeuqq_ydEFlEu",
    "25:34": "gQAeuqq_ydEFlEu",
    "25:35": "SaJbbfvviQYOgBe",
    "25:36": "GwhKpaqOHxcOgGa",
    "25:37": "GwhKpaqOHxcOgGa",
    "25:38": "eHKoSEg_QqcHsAs",
    "25:39": "eHKoSEg_QqcHsAs",
    "25:40": "ocbx1cmOrOQOgTc",
    "25:41": "ouQ121eGhosFlEu",
    "25:42": "ouQ121eGhosFlEu",
    "25:43": "-eenfpvEIHEOgH",
    "25:44": "-eenfpvEIHEOgH",
    "25:45": "q-rhmug3zywFlEu",
    "25:46": "q-rhmug3zywFlEu",
    "25:47": "_indnHwaTkoFlSm",
    "25:48": "_indnHwaTkoFlSm",
    "25:49": "BerRrzmeyicTsBa",
    "25:50": "BerRrzmeyicTsBa",
    "25:51": "rgOfiabA-gEOgSb",
    "25:52": "rgOfiabA-gEOgSb",
    "25:53": "vJorcluiylgFlEu",
    "25:54": "xphr-1B2iaoHsGd",
    "25:55": "xphr-1B2iaoHsGd",
    "25:56": "JugwkGHpkbYSgGa",
    "25:57": "JugwkGHpkbYSgGa",
    "25:58": "IbbtzGz2nucHsS",
    "25:59": "tHt-tEB-hdYFlSi",
    "26:00": "tHt-tEB-hdYFlSi",
    "26:01": "nJ4w1yaxTccOgS",
    "26:02": "nJ4w1yaxTccOgS",
    "26:03": "qoqmwz-PkwkSgBa",
    "26:04": "qoqmwz-PkwkSgBa",
    "26:05": "kuOhihQcASsFlY",
    "26:06": "kuOhihQcASsFlY",
    "26:07": "lmheIgzq2kkHsS",
    "26:08": "ydxufx7yxNAFlTe",
    "26:09": "Ha-TFa-wxZwFmHo",
    "26:10": "Ha-TFa-wxZwFmHo",
    "26:11": "ycsFelfskpwOgAs",
    "26:12": "ycsFelfskpwOgAs",
    "26:13": "wcPzTr-BbAAOgY",
    "26:14": "uawjxcKHkJYOg",
    "26:15": "oZeptvEaQwgFlEu",
    "26:16": "oZeptvEaQwgFlEu",
    "26:17": "pipoQkmbEPwSgBa",
    "26:18": "pipoQkmbEPwSgBa",
    "26:19": "sGftP2f-nqoSgBa",
    "26:20": "sGftP2f-nqoSgBa",
    "26:21": "stQSmj5xHPkEs",
    "26:22": "stQSmj5xHPkEs",
    "26:23": "wA4abGiOigEOgAg",
    "26:24": "RSplw-dOuasFlY",
    "26:25": "RSplw-dOuasFlY",
    "26:26": "xzSEjPm_J4QFm",
    "26:27": "woxrN2rrc6QOgTe",
    "26:28": "3-fNPvlwkKoFlTi",
    "26:29": "KvAoGq21KscOgSc",
    "26:30": "KvAoGq21KscOgSc",
    "26:31": "QgEROTolbQAOgSb",
    "26:32": "QgEROTolbQAOgSb",
    "26:33": "pqY-rBBytAoFlSi",
    "26:34": "pqY-rBBytAoFlSi",
    "26:35": "jE2txaRhfrsOgSi",
    "26:36": "jE2txaRhfrsOgSi",
    "26:37": "zf-sRhp3wtwOgSi",
    "26:38": "xi-fdglSKwkHsSe",
    "26:39": "xi-fdglSKwkHsSe",
    "26:40": "phA_mGxR4-AFlEu",
    "26:41": "-PhHceAvzJQOgTc",
    "26:42": "lNqqlaucRsoOgTe",
    "26:43": "lNqqlaucRsoOgTe",
    "26:44": "YlTr3wglbpkTsSc",
    "26:45": "wOwqd3PlEiABhAg",
    "26:46": "gdli-TTBElATsSb",
    "26:47": "gdli-TTBElATsSb",
    "26:48": "lAaoYTBzFGsHsS",
    "26:49": "lAaoYTBzFGsHsS",
    "26:50": "zvbtc31oEnQFlEu",
    "26:51": "zvbtc31oEnQFlEu",
    "26:52": "ydP_bOGskbwBhAg",
    "26:53": "ydP_bOGskbwBhAg",
    "26:54": "nboTFkNFqGAOgSe",
    "26:55": "_rSFP_rlS_ATsBe",
    "26:56": "_rSFP_rlS_ATsBe",
    "26:57": "yxoZNb3wHPwOgHe",
    "26:58": "yxoZNb3wHPwOgHe",
    "26:59": "tFnp_0lwo2kTsSb",
    "27:00": "vF5_g0NShYgFmHe",
    "27:01": "wldg-SSIw7sBiB",
    "27:02": "jQAEOaARj3sOgSb",
    "27:03": "dSBsjQJvwcsTsY",
    "27:04": "pntwvOdBenoOgTc",
    "27:05": "pntwvOdBenoOgTc",
    "27:06": "axKH2_wwqjAOgY",
    "27:07": "-piTrbowbYsTsSc",
    "27:08": "-piTrbowbYsTsSc",
    "27:09": "qPvhIyG5EAQHsH",
    "27:10": "ikdG0QTlPR0Tl",
    "27:11": "gnERtvheF2wTsSb",
    "27:12": "s3cBOlHBEAEBhAg",
    "27:13": "s3cBOlHBEAEBhAg",
    "27:14": "t_iJQbFbe7oTsSb",
    "27:15": "GaAiOelrQwATsSc",
    "27:16": "GaAiOelrQwATsSc",
    "27:17": "qPgmRcBZyqcOgY",
    "27:18": "qPgmRcBZyqcOgY",
    "27:19": "vH3YBFshA1AOgH",
    "27:20": "vH3YBFshA1AOgH",
    "27:21": "ozBmSa2lBeoOgSe",
    "27:22": "fRpfuTQAyhIHsS",
    "27:23": "fRpfuTQAyhIHsS",
    "27:24": "mAd3etGsySQOgTc",
    "27:25": "GNa_gaq-2FQOgY",
    "27:26": "f2zjujSEPFESgGa",
    "27:27": "yfmRxiPynNQHsAg",
    "27:28": "yfmRxiPynNQHsAg",
    "27:29": "lFng3sdevyoTsAg",
    "27:30": "lFng3sdevyoTsAg",
    "27:31": "Zd-xwwyiuYcTsSc",
    "27:32": "Zd-xwwyiuYcTsSc",
    "27:33": "zqblBq-fUJcHg",
    "27:34": "zqblBq-fUJcHg",
    "27:35": "w0OPewyNePATsO",
    "27:36": "ScvbulGKgdQSgGa",
    "27:37": "siOxNGAx_TQSgBa",
    "27:38": "siOxNGAx_TQSgBa",
    "27:39": "fPja-_dOPPgHsS",
    "27:40": "ABBp-ikv_GQFmHo",
    "27:41": "vBxO0mncNQAOgY",
    "27:42": "fQlPJmHZeYAOgBe",
    "27:43": "fQlPJmHZeYAOgBe",
    "27:44": "Evf3uJNxSTABhAg",
    "27:45": "bc1kYKAfwhgOgH",
    "27:46": "bc1kYKAfwhgOgH",
    "27:47": "yhqKiH4b3hEOgY",
    "27:48": "targHvzwy5IOgB",
    "27:49": "hBwFOrndQ2QHsAg",
    "27:50": "hBwFOrndQ2QHsAg",
    "27:51": "dNzvA-7ZNwsBhBa",
    "27:52": "huH-PzYKOaAAm",
    "27:53": "IH2mx1edoEkOgB",
    "27:54": "waOkpHJc2PgFlY",
    "27:55": "waOkpHJc2PgFlY",
    "27:56": "K_autmceJFoOgGa",
    "27:57": "yNN-SsfbB4ATsSc",
    "27:58": "yNN-SsfbB4ATsSc",
    "27:59": "FsuvimkuckQTsSb",
    "28:00": "FsuvimkuckQTsSb",
    "28:01": "llTOyPxaeooOgGe",
    "28:02": "llTOyPxaeooOgGe",
    "28:03": "nhE0ymwciHgUH",
    "28:04": "t4Fp2pQwgNgOgTc",
    "28:05": "J_jQtQyPJOEBhAg",
    "28:06": "J_jQtQyPJOEBhAg",
    "28:07": "r_uBHmAhnfoHsEu",
    "28:08": "r_uBHmAhnfoHsEu",
    "28:09": "eiretQENyr4OgTe",
    "28:10": "eiretQENyr4OgTe",
    "28:11": "aefvthRIt7AHsS",
    "28:12": "aefvthRIt7AHsS",
    "28:13": "OwbTq_4-jGgOgSb",
    "28:14": "vspaa1GAzbcFlEu",
    "28:15": "vspaa1GAzbcFlEu",
    "28:16": "PjpyfyETHaEOgTc",
    "28:17": "PjpyfyETHaEOgTc",
    "28:18": "xRKgGw0Yf7wOgH",
    "28:19": "O-1gxufhyioOgAg",
    "28:20": "O-1gxufhyioOgAg",
    "28:21": "xId34mpqxBcOgH",
    "28:22": "oKq3lhGwzdYOgH",
    "28:23": "oKq3lhGwzdYOgH",
    "28:24": "HaenjNBfphcTsAg",
    "28:25": "-xZpxtgg_JIHsS",
    "28:26": "woQHJO-HQioFmHo",
    "28:27": "woQHJO-HQioFmHo",
    "28:28": "TSyHqgSq_agOgFe",
    "28:29": "TSyHqgSq_agOgFe",
    "28:30": "y5NtZN_pbcQBhBa",
    "28:31": "OfQQvjSHmbgOgSe",
    "28:32": "OfQQvjSHmbgOgSe",
    "28:33": "yFp_BN4mkbYTs",
    "28:34": "_NYcqEqyOpkOgB",
    "28:35": "_qolnm2dA-YTsSc",
    "28:36": "_qolnm2dA-YTsSc",
    "28:37": "tutZSvauyhEOgTc",
    "28:38": "tutZSvauyhEOgTc",
    "28:39": "ghgBTOvJhwETsAg",
    "28:40": "_awtaymTJBQHsGd",
    "28:41": "_awtaymTJBQHsGd",
    "28:42": "13TTFhcRwmQTsSb",
    "28:43": "ttqEsg7qf_wOsHe",
    "28:44": "sak-taOOyYgOgBe",
    "28:45": "sak-taOOyYgOgBe",
    "28:46": "qZwzwmTdedYTsSc",
    "28:47": "qJHtyjTgHYAFlTi",
    "28:48": "qJHtyjTgHYAFlTi",
    "28:49": "AyeeJYx_wHcSgGa",
    "28:50": "AyeeJYx_wHcSgGa",
    "28:51": "-vGlrcayloEFlEu",
    "28:52": "-vGlrcayloEFlEu",
    "28:53": "hvRQyR1NricOgTe",
    "28:54": "hvRQyR1NricOgTe",
    "28:55": "whvHz4azNOAOgTc",
    "28:56": "whvHz4azNOAOgTc",
    "28:57": "TdJA3dtmh-AFlEu",
    "28:58": "YRld_AKievgOgH",
    "28:59": "-ndwmvIwQmoHsS",
    "29:00": "-ndwmvIwQmoHsS",
    "29:01": "j0wSohites0OgTc",
    "29:02": "zmPbzgu_Gn4Am",
    "29:03": "zmPbzgu_Gn4Am",
    "29:04": "pHv3phv3yNAOgAg",
    "29:05": "wpT3w2QWbkwEsBe",
    "29:06": "rqbc4nTivlgHsAg",
    "29:07": "rqbc4nTivlgHsAg",
    "29:08": "mbFkqanETTkTsSb",
    "29:09": "mbFkqanETTkTsSb",
    "29:10": "ctaaN1dJccITs",
    "29:11": "qx_vmZbh8BgHsGd",
    "29:12": "_kxwbilQIyAHsS",
    "29:13": "_kxwbilQIyAHsS",
    "29:14": "xbH1owYAz7ASgGa",
    "29:15": "BmNbZygqHpETsAl",
    "29:16": "BmNbZygqHpETsAl",
    "29:17": "v4T2xWgRZGwEsBe",
    "29:18": "lfd_gtrdgGgFlEu",
    "29:19": "lfd_gtrdgGgFlEu",
    "29:20": "1n-to3ahKtABhSb",
    "29:21": "vaHOFd-KStkHsS",
    "29:22": "vaHOFd-KStkHsS",
    "29:23": "xm_-EYgQvlcTsSc",
    "29:24": "xm_-EYgQvlcTsSc",
    "29:25": "rr3bYslx-ecTsSc",
    "29:26": "IqZlim_yowwHsS",
    "29:27": "IqZlim_yowwHsS",
    "29:28": "luA4GtJxE20FlEu",
    "29:29": "srScJAs2i1cOgB",
    "29:30": "srScJAs2i1cOgB",
    "29:31": "yTg1EPJa1_sSgBa",
    "29:32": "yTg1EPJa1_sSgBa",
    "29:33": "spvbAObyqwoOgSb",
    "29:34": "spvbAObyqwoOgSb",
    "29:35": "mf2keggHpycFlSm",
    "29:36": "kuAviEmmoP4SgBa",
    "29:37": "kuAviEmmoP4SgBa",
    "29:38": "-sdJ2JdtlGYTsSc",
    "29:39": "zmaRs5Q3gOwOgSb",
    "29:40": "AaGezzEkEagFlGa",
    "29:41": "aFuiJhcff3QTsSb",
    "29:42": "ozqlcZqtgrgFlEu",
    "29:43": "grefAhSvcvcOgTc",
    "29:44": "grefAhSvcvcOgTc",
    "29:45": "qSeotyOZEZAFlSc",
    "29:46": "qSeotyOZEZAFlSc",
    "29:47": "zfhna4WuxdcEsBe",
    "29:48": "-scOr4rmGNcSgBa",
    "29:49": "-scOr4rmGNcSgBa",
    "29:50": "qZb_rxOlRs4OgSb",
    "29:51": "qZb_rxOlRs4OgSb",
    "29:52": "ewdeEGoaANIHsB",
    "29:53": "ewdeEGoaANIHsB",
    "29:54": "tcl2oe1-pxIOgHe",
    "29:55": "tcl2oe1-pxIOgHe",
    "29:56": "v_QqpeRbc_kOgTi",
    "29:57": "v_QqpeRbc_kOgTi",
    "29:58": "mai_uYRTgxQTsSc",
    "29:59": "mai_uYRTgxQTsSc",
    "30:00": "oJ-Be8vJPbAThH",
    "30:01": "Rxgf2s-QJYATsSc",
    "30:02": "Rxgf2s-QJYATsSc",
    "30:03": "FG1QnwBBP2ETsFe",
    "30:04": "Qhoq_-Hl4gYSgGa",
    "30:05": "Qhoq_-Hl4gYSgGa",
    "30:06": "xHiBtaBuhI4HsH",
    "30:07": "y8jcgyBpnPoBiB",
    "30:08": "svb1JvgxAOwOgSb",
    "30:09": "svb1JvgxAOwOgSb",
    "30:10": "vlsSQwsjvEkOgTc",
    "30:11": "vlsSQwsjvEkOgTc",
    "30:12": "KhlBziyisdgFlY",
    "30:13": "BOoG1FoqynAHsAg",
    "30:14": "BOoG1FoqynAHsAg",
    "30:15": "fOqO2yiqnscOgTc",
    "30:16": "zQxixvjQBOYTsO",
    "30:17": "zQxixvjQBOYTsO",
    "30:18": "lAbStfySPlcOgO",
    "30:19": "lAbStfySPlcOgO",
    "30:20": "Q-BcAB3JeGkFmHo",
    "30:21": "xfvGpm-ERQUAt",
    "30:22": "wA1K5oRdsvkBhSb",
    "30:23": "pxImOyJq1x4FlHe",
    "30:24": "tArFzilwatwOgGe",
    "30:25": "tArFzilwatwOgGe",
    "30:26": "gycjSHbdwScOgSc",
    "30:27": "tcpplFkwSokOgSe",
    "30:28": "tcpplFkwSokOgSe",
    "30:29": "kpo_hmKhB3gFlY",
    "30:30": "wOvY-lq4TBETsO",
    "30:31": "wOvY-lq4TBETsO",
    "30:32": "wxkYqltzm_ATsSc",
    "30:33": "ckGupKeisQwBhSb",
    "30:34": "ckGupKeisQwBhSb",
    "30:35": "ANeyxntEQxQFmHo",
    "30:36": "ANeyxntEQxQFmHo",
    "30:37": "tHmlEylrO1ETsSb",
    "30:38": "xxabxIt2oowOgHe",
    "30:39": "xxabxIt2oowOgHe",
    "30:40": "fl4txxhlpFETsAg",
    "30:41": "xiuEx5pQkRcFlEu",
    "30:42": "aBmvxiP-PNwOgAl",
    "30:43": "dlmpmtHnnEIOgH",
    "30:44": "dlmpmtHnnEIOgH",
    "30:45": "Hh3BAyAjxkwHsEu",
    "30:46": "GwinnRsBQR4HsGd",
    "30:47": "GwinnRsBQR4HsGd",
    "30:48": "ooj4cOBSHaQFlAs",
    "30:49": "uuwsyqp-wwkFlEu",
    "30:50": "uuwsyqp-wwkFlEu",
    "30:51": "pAkjkG-E4dEFlEu",
    "30:52": "sssqc1QokncFlEu",
    "30:53": "Km-us_xvamYOgH",
    "30:54": "Km-us_xvamYOgH",
    "30:55": "aAwkEgIQvyoHsS",
    "30:56": "aAwkEgIQvyoHsS",
    "30:57": "mdNsjoQ-iO4SgBa",
    "30:58": "FKuObKhqQrAOgBe",
    "30:59": "FKuObKhqQrAOgBe",
    "31:00": "tPAjY_lZzYoBiH",
    "31:01": "ElanOZfZGsQOgSb",
    "31:02": "ElanOZfZGsQOgSb",
    "31:03": "pHiK4sAzeKcTsSc",
    "31:04": "pHiK4sAzeKcTsSc",
    "31:05": "v4wohAa-dPgBhSb",
    "31:06": "v4wohAa-dPgBhSb",
    "31:07": "KKawRlBeftEFlSc",
    "31:08": "kamyxB-yKrcFlTi",
    "31:09": "kamyxB-yKrcFlTi",
    "31:10": "bpnwRGpbhnoFlEu",
    "31:11": "bpnwRGpbhnoFlEu",
    "31:12": "j_E1_j0dHqkFlSm",
    "31:13": "ZPImchaxn2QHsH",
    "31:14": "-jyEahOy4TgOgSb",
    "31:15": "HyHGATyynmIOg",
    "31:16": "HyHGATyynmIOg",
    "31:17": "xPA5juzIEZsHsH",
    "31:18": "aHOmfbngyBsHsSb",
    "31:19": "aHOmfbngyBsHsSb",
    "31:20": "G3E1AjGw_PcSgBa",
    "31:21": "G3E1AjGw_PcSgBa",
    "31:22": "FEclp1gba1ETsAg",
    "31:23": "FEclp1gba1ETsAg",
    "31:24": "-1eKoQGjjhEBhSb",
    "31:25": "sugfhgIkwacHsS",
    "31:26": "sugfhgIkwacHsS",
    "31:27": "nxOjtihOl-sOgTc",
    "31:28": "ccNbsxeetdcOgSi",
    "31:29": "jqvFxJEJbtgTsSb",
    "31:30": "jqvFxJEJbtgTsSb",
    "31:31": "wbR4fJ_e_vwFlEu",
    "31:32": "QdGBr3yzaggHsSe",
    "31:33": "aJpljm-mziYTsSc",
    "31:34": "aJpljm-mziYTsSc",
    "31:35": "wHv_af-ScFwHsSe",
    "31:36": "xzBGEAdG-TgHsGd",
    "31:37": "xzBGEAdG-TgHsGd",
    "31:38": "rztcb-sbEE4FlEu",
    "31:39": "nilQjgsEGN4OgTe",
    "31:40": "qBOHvRQ3orEBhBa",
    "31:41": "qBOHvRQ3orEBhBa",
    "31:42": "uKnoo-s1c2IFmB",
    "31:43": "wQWygif5dckEsBe",
    "31:44": "wQWygif5dckEsBe",
    "31:45": "iQA0sfA3ZEcFlEu",
    "31:46": "I1sfslgQ_mwHsS",
    "31:47": "I1sfslgQ_mwHsS",
    "31:48": "IwJbb0tQq7sHsS",
    "31:49": "wune-PzwoQgSgBa",
    "31:50": "wune-PzwoQgSgBa",
    "31:51": "jOdkbOPiqsEFlGe",
    "31:52": "4jgoAfPWFzoAu",
    "31:53": "wrNAF5pbFNcFlGa",
    "31:54": "wrNAF5pbFNcFlGa",
    "31:55": "eEoSwgeBqhYTs",
    "31:56": "eEoSwgeBqhYTs",
    "31:57": "IqwzZwTyeyoHsS",
    "31:58": "wfnEO1E2hsUTa",
    "31:59": "FokvtHumQagFmHo",
    "32:00": "FokvtHumQagFmHo",
    "32:01": "cSZFdJfT-soOgSe",
    "32:02": "cSZFdJfT-soOgSe",
    "32:03": "uQRS-Jqp0oAOgTc",
    "32:04": "pkbkTTtmhhwFlEu",
    "32:05": "pkbkTTtmhhwFlEu",
    "32:06": "u_HcNlmOSwgHsAs",
    "32:07": "u_HcNlmOSwgHsAs",
    "32:08": "draqd3ETFPEFlY",
    "32:09": "SRjg_Aaq3bgOgTc",
    "32:10": "FzbQh-d4TtoTsSb",
    "32:11": "vqkcyp_tI-AHsS",
    "32:12": "vqkcyp_tI-AHsS",
    "32:13": "OwJngGTwn2oOgSb",
    "32:14": "p4qEHZlzHogHsH",
    "32:15": "p4qEHZlzHogHsH",
    "32:16": "ngOaItfq-6kFlHe",
    "32:17": "Ee-QEJndBJEHsGd",
    "32:18": "Ee-QEJndBJEHsGd",
    "32:19": "wZohsGGmtEkFlEu",
    "32:20": "wZohsGGmtEkFlEu",
    "32:21": "G3GEJpvkEmcFlEu",
    "32:22": "wcTxGTwceJoFlEu",
    "32:23": "wcTxGTwceJoFlEu",
    "32:24": "qbSJzHQYolsTsBe",
    "32:25": "k4pZg-Q_PHcOgTc",
    "32:26": "f1hqHvR3FdEFmHo",
    "32:27": "xrbuhOuTKFkHsAs",
    "32:28": "xrbuhOuTKFkHsAs",
    "32:29": "lrpmEejhTAwFlEu",
    "32:30": "HkthxdutBnAHsEu",
    "32:31": "um3_QAQcwP4SgBa",
    "32:32": "laaQdZbsGZEFlEu",
    "32:33": "laaQdZbsGZEFlEu",
    "32:34": "glZYGy2ouSEOgBe",
    "32:35": "glZYGy2ouSEOgBe",
    "32:36": "yEi3aKJdeO0OgGe",
    "32:37": "yEi3aKJdeO0OgGe",
    "32:38": "pbsnuJq1Wq4EsBe",
    "32:39": "pbsnuJq1Wq4EsBe",
    "32:40": "YshJBTypvEATsS",
    "32:41": "beKfByBlAhQTsGa",
    "32:42": "beKfByBlAhQTsGa",
    "32:43": "hfhY_BwB7fsHsS",
    "32:44": "QihseRRApI4HsS",
    "32:45": "QihseRRApI4HsS",
    "32:46": "y8nhcmwyoqQFlEu",
    "32:47": "q3dqiRpGgGsFlEu",
    "32:48": "q3dqiRpGgGsFlEu",
    "32:49": "j1tbcogawSQOgTc",
    "32:50": "yq0pt_Y_frkTsSc",
    "32:51": "zGgwahbqahUAt",
    "32:52": "zGgwahbqahUAt",
    "32:53": "ggRPnFuu-QsFlY",
    "32:54": "ggRPnFuu-QsFlY",
    "32:55": "_QhqbbmP4ucSgBa",
    "32:56": "_QhqbbmP4ucSgBa",
    "32:57": "ngf2GoEFJPEFlY",
    "32:58": "ngf2GoEFJPEFlY",
    "32:59": "uG_tQKQbjAYOgH",
    "33:00": "uG_tQKQbjAYOgH",
    "33:01": "wHJmcFvEnTAFmHo",
    "33:02": "NTocsiSFfysHsAs",
    "33:03": "NTocsiSFfysHsAs",
    "33:04": "-J_ihyPlOxwBhAg",
    "33:05": "rexKPqsy5vQTsFe",
    "33:06": "JmhZfYJSuqsOgBe",
    "33:07": "ncmiFPhxiroFlY",
    "33:08": "mauh_YQKhgEOgH",
    "33:09": "mauh_YQKhgEOgH",
    "33:10": "pj-B-SbpJiATsBe",
    "33:11": "pj-B-SbpJiATsBe",
    "33:12": "QyaGi1wYQgcTsSc",
    "33:13": "QyaGi1wYQgcTsSc",
    "33:14": "Nihjfvmx_soOgGa",
    "33:15": "_jaqSimTYjkHsS",
    "33:16": "uJTG2OQOl-wOgTc",
    "33:17": "uJTG2OQOl-wOgTc",
    "33:18": "nvu_IgvoGE4OgHe",
    "33:19": "xfp_n5TyrywFlEu",
    "33:20": "lTPPipSAenwOgF",
    "33:21": "lTPPipSAenwOgF",
    "33:22": "rrNat-3H-EwOgAg",
    "33:23": "rrNat-3H-EwOgAg",
    "33:24": "hTj2SGPkKtgOgF",
    "33:25": "kx_larKYpAQOgH",
    "33:26": "kx_larKYpAQOgH",
    "33:27": "slauSOa5-QwFlY",
    "33:28": "2v-_TGTklFQTsSb",
    "33:29": "2v-_TGTklFQTsSb",
    "33:30": "hnTGzYgumaIAt",
    "33:31": "tchOzeivZo0OgSb",
    "33:32": "lPlR-_ocdTQSgBa",
    "33:33": "wAxyheoixmcTsBa",
    "33:34": "wAxyheoixmcTsBa",
    "33:35": "wPp7jbuJOHoAtHe",
    "33:36": "wKq2kbqtf3ABhSb",
    "33:37": "HFtTSPjpj_cFlTi",
    "33:38": "HFtTSPjpj_cFlTi",
    "33:39": "wFvzs2P1hHQOgSe",
    "33:40": "wFvzs2P1hHQOgSe",
    "33:41": "ZebJ2PE1ztgSgBa",
    "33:42": "T_BtuitQh_wHsGd",
    "33:43": "T_BtuitQh_wHsGd",
    "33:44": "ry4Kkuxx4F0OgGa",
    "33:45": "YduEfbzpdOQTsAl",
    "33:46": "YduEfbzpdOQTsAl",
    "33:47": "dqdRKFgoPfcOgS",
    "33:48": "dqdRKFgoPfcOgS",
    "33:49": "bHmAqtibTiIFmH",
    "33:50": "ouYqANH8hlATsAl",
    "33:51": "y7UZHEHhdekBi",
    "33:52": "RopkEy-EycAFlEu",
    "33:53": "RopkEy-EycAFlEu",
    "33:54": "qBw1hEEqZS0TsY",
    "33:55": "xmg5axAQiywFlEu",
    "33:56": "xmg5axAQiywFlEu",
    "33:57": "plUsAQuaBZ0Hg",
    "33:58": "plUsAQuaBZ0Hg",
    "33:59": "hcB-w_3FHxQSgBa",
    "34:00": "hcB-w_3FHxQSgBa",
    "34:01": "Bs1HxF2zuzkSgBa",
    "34:02": "bnNI-cdxirQTs",
    "34:03": "ppAPdFagHzETsBe",
    "34:04": "ppAPdFagHzETsBe",
    "34:05": "aZgdFncg1ssTsSb",
    "34:06": "wfNJmNGcsEQBhBa",
    "34:07": "wfNJmNGcsEQBhBa",
    "34:08": "lucajYNfFc8OgBe",
    "34:09": "B6AQhpFkgfQBhBa",
    "34:10": "q4tGzHNuONQBhAg",
    "34:11": "q4tGzHNuONQBhAg",
    "34:12": "sKrdk4xwdBoFlTi",
    "34:13": "sKrdk4xwdBoFlTi",
    "34:14": "fx1do3YRPsEOgB",
    "34:15": "fx1do3YRPsEOgB",
    "34:16": "eFnlOA8-jdATsTc",
    "34:17": "OtA4AEl_KJkOgGe",
    "34:18": "OtA4AEl_KJkOgGe",
    "34:19": "u1AjQxdb3HcFlSm",
    "34:20": "u1AjQxdb3HcFlSm",
    "34:21": "dQKotAHphKETsSc",
    "34:22": "dQKotAHphKETsSc",
    "34:23": "fQQJr-tEaJEFlEu",
    "34:24": "ln0ff5dZe0cFlEu",
    "34:25": "wx3wr2ZrSYATlH",
    "34:26": "wx3wr2ZrSYATlH",
    "34:27": "vQRiJthf6a0FlEu",
    "34:28": "yw7AfY0fihAOgS",
    "34:29": "yw7AfY0fihAOgS",
    "34:30": "xj3b3_GpiusFlEu",
    "34:31": "wiGjv-aOlhEOgSb",
    "34:32": "wiGjv-aOlhEOgSb",
    "34:33": "IAfz1PcxAyoHsH",
    "34:34": "bdAxwEApy_QFlEu",
    "34:35": "bdAxwEApy_QFlEu",
    "34:36": "yuoq_YeIBxcHg",
    "34:37": "rTaE_HS_2ikAtHe",
    "34:38": "NP-bZmvOzhAFlAs",
    "34:39": "NP-bZmvOzhAFlAs",
    "34:40": "PBqjFihluagTsGa",
    "34:41": "PBqjFihluagTsGa",
    "34:42": "zNdQy3yyBgQHsBe",
    "34:43": "ougEbiPYG2cOgH",
    "34:44": "yn2bGA-nZAAFlEu",
    "34:45": "yn2bGA-nZAAFlEu",
    "34:46": "qqsZ_J3fm-AFlEu",
    "34:47": "Zf0lOv_ZIn4OgHe",
    "34:48": "ZAgZv10jIboOsH",
    "34:49": "gOqe2olOSucFlGa",
    "34:50": "gOqe2olOSucFlGa",
    "34:51": "ciZ0v8rGaboFlGe",
    "34:52": "ciZ0v8rGaboFlGe",
    "34:53": "xgwc4fsipJsFlEu",
    "34:54": "xgwc4fsipJsFlEu",
    "34:55": "k3Odpd3EFAETsTc",
    "34:56": "FS6cFHTI1ukAc",
    "34:57": "FS6cFHTI1ukAc",
    "34:58": "zOh06yNebocHsSb",
    "34:59": "zOh06yNebocHsSb",
    "35:00": "O-RRxsorbPgBhAg",
    "35:01": "ladYOoihTHkHsSc",
    "35:02": "ladYOoihTHkHsSc",
    "35:03": "IBElwAz3O5sBhBe",
    "35:04": "kS2sGozZxZcOgTc",
    "35:05": "PpzFEyFxtooOgFe",
    "35:06": "PpzFEyFxtooOgFe",
    "35:07": "rxTt2yY31csTsSc",
    "35:08": "wZmc7EgwfpcFlEu",
    "35:09": "wZmc7EgwfpcFlEu",
    "35:10": "YhBwhuqFqjwHsS",
    "35:11": "YhBwhuqFqjwHsS",
    "35:12": "hRp2iaks_fgFlEu",
    "35:13": "peGgwq7uJ_UAt",
    "35:14": "idhgcpHBvuoFmHo",
    "35:15": "idhgcpHBvuoFmHo",
    "35:16": "dfYKdPPxG_oAc",
    "35:17": "NNmy-vuwxrcBhBa",
    "35:18": "NNmy-vuwxrcBhBa",
    "35:19": "OEo_ug8EQbUOsH",
    "35:20": "SfkphhQtEysOgTc",
    "35:21": "SfkphhQtEysOgTc",
    "35:22": "vwrTyHPe2QEOgTc",
    "35:23": "geFJKtFisPATsO",
    "35:24": "geFJKtFisPATsO",
    "35:25": "zowrvPh6xcsSgBa",
    "35:26": "ukbiPBR2-GIFmBe",
    "35:27": "hW-ynfpmcj4EsBe",
    "35:28": "hW-ynfpmcj4EsBe",
    "35:29": "HArS1HmjruQHsAs",
    "35:30": "HArS1HmjruQHsAs",
    "35:31": "ediic2HnGcoHsGd",
    "35:32": "ediic2HnGcoHsGd",
    "35:33": "qQiwgEQNfQsOgTe",
    "35:34": "qQiwgEQNfQsOgTe",
    "35:35": "GGGrmu_cYtoTsSc",
    "35:36": "yZiWeGlNHugAm",
    "35:37": "GZFuHnwGZNcTsTc",
    "35:38": "GZFuHnwGZNcTsTc",
    "35:39": "swiSjPF_ii4SgGa",
    "35:40": "yn_lOfckS4oFlY",
    "35:41": "yn_lOfckS4oFlY",
    "35:42": "snNs6WeqtzwAmH",
    "35:43": "IlppNGAeafEHsB",
    "35:44": "nn_OOeNcPnwFlSc",
    "35:45": "nn_OOeNcPnwFlSc",
    "35:46": "4dK-BcpcnGwFlY",
    "35:47": "a3FJiyeRrewTsSb",
    "35:48": "a3FJiyeRrewTsSb",
    "35:49": "H4_TtauZHawHsHo",
    "35:50": "4kT-Ggvygc0FlEu",
    "35:51": "nGEO_aozx8wOgSb",
    "35:52": "nGEO_aozx8wOgSb",
    "35:53": "vgmYHte2GrsSgGa",
    "35:54": "vgmYHte2GrsSgGa",
    "35:55": "PsyZzsKcvicTsFe",
    "35:56": "PsyZzsKcvicTsFe",
    "35:57": "AiOzg_qNuT4SgBa",
    "35:58": "AiOzg_qNuT4SgBa",
    "35:59": "oOBPSkdqZZoTsS",
    "36:00": "oOBPSkdqZZoTsS",
    "36:01": "HO_uATipTtgHsSe",
    "36:02": "iA_liuSEKwkHsSe",
    "36:03": "iA_liuSEKwkHsSe",
    "36:04": "AbBF-faYffcOgHe",
    "36:05": "vzZH-OoHuyoFmHo",
    "36:06": "vzZH-OoHuyoFmHo",
    "36:07": "mir7GitnpuEFlEu",
    "36:08": "swcjch2KKIoAtH",
    "36:09": "swcjch2KKIoAtH",
    "36:10": "f-2EezHkGOsFm",
    "36:11": "f-2EezHkGOsFm",
    "36:12": "hPGtjxFKc50OgS",
    "36:13": "quk0P8dl_OYFlH",
    "36:14": "hNmFAeHOeBETsFe",
    "36:15": "hNmFAeHOeBETsFe",
    "36:16": "mvlwbkW-p0AEsBe",
    "36:17": "jsEhj-cjrPESgBa",
    "36:18": "jsEhj-cjrPESgBa",
    "36:19": "qtaQjlsquwcFlEu",
    "36:20": "qtaQjlsquwcFlEu",
    "03:01": "y2frxNQgsOQSgBa",
    "03:02": "y2frxNQgsOQSgBa",
    "03:03": "wtqzSTi4zQQOgSc",
    "03:04": "wtqzSTi4zQQOgSc",
    "03:05": "J2I2vQQwiyEHsS",
    "03:06": "xwuyBTTuUrQHg",
    "03:07": "tPSBj4QuuwkHsAs",
    "03:08": "HPlBcPvJQewHsAs",
    "03:09": "vqlcBxgYnFoHsS",
    "03:10": "vqlcBxgYnFoHsS",
    "03:11": "Zx_iiQAH-TwFlSm",
    "03:12": "uawO3-tjP1cBhAg",
    "03:13": "uawO3-tjP1cBhAg",
    "03:14": "xepkylNIenwTs",
    "03:15": "xepkylNIenwTs",
    "03:16": "krqmxbffbTEFlEu",
    "03:17": "t-3-guBJswYTsS",
    "03:18": "t-3-guBJswYTsS",
    "03:19": "ZSv1iiT3jlcOgTc",
    "03:20": "HduubRTdko4FlSm",
    "03:21": "yRQ1QZs7Q0wFlEu",
    "03:22": "AedxizpHQ4AFlSm",
    "03:23": "J_QEigiJcsQFlEu",
    "03:24": "J_QEigiJcsQFlEu",
    "03:25": "yFfcsmK2TOAHsAs",
    "03:26": "z2bqfIdTtwEHsS",
    "03:27": "z2bqfIdTtwEHsS",
    "03:28": "tk2O_dPRSqwTsSc",
    "03:29": "u-oIZfasENgTs",
    "03:30": "u-oIZfasENgTs",
    "03:31": "cdnOG2TQwHATsSb",
    "03:32": "ahBmRREpqiIOgH",
    "03:33": "ahBmRREpqiIOgH",
    "03:34": "KEFs4o-uGEAOgGa",
    "03:35": "Q-GEwZGu_OAOgSb",
    "03:36": "Q-GEwZGu_OAOgSb",
    "03:37": "lZwt3xbuEJQFlEu",
    "03:38": "bm-ummtKNOwTsFe",
    "03:39": "itBuZqROGocTsAg",
    "03:40": "y_fzxkP1YscOgB",
    "03:41": "ygHP_BmszQ_qzOgSe",
    "03:42": "ygHP_BmszQ_qzOgSe",
    "03:43": "e1cpwxneseQFlEu",
    "03:44": "ompeR1pJlaQFlEu",
    "03:45": "rbREmmg1wRcFlEu",
    "03:46": "aTwhiJfyoOEOgSb",
    "03:47": "aTwhiJfyoOEOgSb",
    "03:48": "rdIiiwhasyQHsS",
    "03:49": "rdIiiwhasyQHsS",
    "03:50": "zo1Hd3tozKsOgY",
    "03:51": "evdgGExIgioOgHe",
    "03:52": "evdgGExIgioOgHe",
    "03:53": "xeTZz1dh3_wFlEu",
    "03:54": "uephBmkupvQHsGd",
    "03:55": "uephBmkupvQHsGd",
    "03:56": "xiuuKQroPHcHsSe",
    "03:57": "xiuuKQroPHcHsSe",
    "03:58": "lfGwR1gaQYoTsSc",
    "03:59": "t4gkmcmwBrwHsSe",
    "04:00": "sxssAArYRGAOgHe",
    "04:01": "sxssAArYRGAOgHe",
    "04:02": "obTE4aTynIoOgHe",
    "04:03": "obTE4aTynIoOgHe",
    "04:04": "3ucrwgmeBtkHsGd",
    "04:05": "OxwNHQplFpoOgSe",
    "04:06": "OxwNHQplFpoOgSe",
    "04:07": "pEoYAeJ_gOkTsAl",
    "04:08": "m2cOKpkvN2cTsFe",
    "04:09": "oueYkBT22PwOg",
    "04:10": "zYsPTBq2aEwOg",
    "04:11": "zYsPTBq2aEwOg",
    "04:12": "wivuhAAxlecTsBa",
    "04:13": "wivuhAAxlecTsBa",
    "04:14": "QRqiOaiwteEOgSb",
    "04:15": "yPwOl5BIjosAmH",
    "04:16": "vx2Q1Nas1QsFlTe",
    "04:17": "vx2Q1Nas1QsFlTe",
    "04:18": "mmQ1akRwxBsHsGd",
    "04:19": "-bcANEglbI_TsHsBe",
    "04:20": "-bcANEglbI_TsHsBe",
    "04:21": "uxzBq4Y_fNwOgO",
    "04:22": "v_xPZuAfg1kSgBa",
    "04:23": "edHesrFRpQgFlTe",
    "04:24": "edHesrFRpQgFlTe",
    "04:25": "tpmAholHR1wFlSm",
    "04:26": "xsJopwNT2fsOgTe",
    "04:27": "xsJopwNT2fsOgTe",
    "04:28": "hZARIbmubgoHsS",
    "04:29": "zydZQOR_lwQOgSb",
    "04:30": "ccQAgyqxqQQTsAl",
    "04:31": "ccQAgyqxqQQTsAl",
    "04:32": "xGcyrucn3fIHsS",
    "04:33": "xGcyrucn3fIHsS",
    "04:34": "jJdZJ1GwjxAFlEu",
    "04:35": "jJdZJ1GwjxAFlEu",
    "04:36": "dSxxsnOc3w0OgGa",
    "04:37": "ugcPtZyxZ6EEs",
    "04:38": "zW8fpEOOw0wAtHe",
    "04:39": "zW8fpEOOw0wAtHe",
    "04:40": "cyTxxEhS4ucOgY",
    "04:41": "OGkQQ_q_HYgHsSc",
    "04:42": "OGkQQ_q_HYgHsSc",
    "04:43": "wP-O4JlKclcFlSc",
    "04:44": "w-s3NTuw-ToFlTe",
    "04:45": "w-s3NTuw-ToFlTe",
    "04:46": "vNExj-bJIgsTs",
    "04:47": "vNExj-bJIgsTs",
    "04:48": "bxbPOqJBjFoOgTi",
    "04:49": "bxbPOqJBjFoOgTi",
    "04:50": "zpu2JwTxf_oFlEu",
    "04:51": "zpu2JwTxf_oFlEu",
    "04:52": "xohyFEGR2hgTsSb",
    "04:53": "sEZ_dHGN4ywOgSb",
    "04:54": "stsnuh3kFGETsSb",
    "04:55": "uukzTxpfYygTsSc",
    "04:56": "uukzTxpfYygTsSc",
    "04:57": "vgSbuFawtfwHsB",
    "04:58": "vgSbuFawtfwHsB",
    "04:59": "wnO0H8sBgRYHsS",
    "05:00": "-_drvG3kKw_BhAg",
    "05:01": "Bbl-AnunGpcTsSb",
    "05:02": "Bbl-AnunGpcTsSb",
    "05:03": "lnFHlfwRSysOgAs",
    "05:04": "cTAntdHvbYwTsS",
    "05:05": "cTAntdHvbYwTsS",
    "05:06": "zEhfHOZQjocTsSb",
    "05:07": "zEhfHOZQjocTsSb",
    "05:08": "b4vmFxGpvucTsAg",
    "05:09": "b4vmFxGpvucTsAg",
    "05:10": "kA4bGJmAEhcFlEu",
    "05:11": "acmwKwchOPgFlSc",
    "05:12": "acmwKwchOPgFlSc",
    "05:13": "uKzp_cyvwv4BhSb",
    "05:14": "jiEvibbf-hIHsS",
    "05:15": "jiEvibbf-hIHsS",
    "05:16": "ZqcSccSchg_qzOgAl",
    "05:17": "iskjEgwj4uQFlEu",
    "05:18": "bwBQPpGPvesHsSe",
    "05:19": "bwBQPpGPvesHsSe",
    "05:20": "bAff-sGw-KkBhSb",
    "05:21": "PjF11baJ2ewFlY",
    "05:22": "z_e1slzjAowFlEu",
    "05:23": "z_e1slzjAowFlEu",
    "05:24": "zd1hk3vxwZUAt",
    "05:25": "wpbsaypZlhgFlEu",
    "05:26": "wpbsaypZlhgFlEu",
    "05:27": "eyupkrpm1ocFlEu",
    "05:28": "GowJeGcf_KkBhSb",
    "05:29": "OtKmFttytQ_SgGa",
    "05:30": "pOQfqiEdKKwOgAl",
    "05:31": "pOQfqiEdKKwOgAl",
    "05:32": "djmec-BweegHsGd",
    "05:33": "djmec-BweegHsGd",
    "05:34": "wBytqPGninQOgY",
    "05:35": "wBytqPGninQOgY",
    "05:36": "yTOaO2T2lPAHsSe",
    "05:37": "uff1toooAxkFlEu",
    "05:38": "nduA4gTkKgcBhSb",
    "05:39": "ltfPxiTGaukOgAl",
    "05:40": "ltfPxiTGaukOgAl",
    "05:41": "RAimv4eiwxsFlEu",
    "05:42": "ylcscJNBm_YOgO",
    "05:43": "ylcscJNBm_YOgO",
    "05:44": "gjQ4vaYySkwOgBe",
    "05:45": "gjQ4vaYySkwOgBe",
    "05:46": "ysjYp1NBFywTs",
    "05:47": "ysjYp1NBFywTs",
    "05:48": "rudzYPHuewcOgBe",
    "05:49": "qo3iQvnisTkFlEu",
    "05:50": "hslYEQ-Rx1sTsSc",
    "05:51": "PrJJdJummvAOg",
    "05:52": "wFPvPA1afrQTsSc",
    "05:53": "wFPvPA1afrQTsSc",
    "05:54": "uw4IkdcjpggHsS",
    "05:55": "Nau-vgnHuHATsTc",
    "05:56": "Nau-vgnHuHATsTc",
    "05:57": "PyPf-KsGqjsFlSi",
    "05:58": "neHuNY-w2fgOgO",
    "05:59": "igtvbriAYmcTsSc",
    "06:00": "igtvbriAYmcTsSc",
    "06:01": "fJaEmBTZj_sHsGd",
    "06:02": "OeHlFSiTAPkTsAl",
    "06:03": "OeHlFSiTAPkTsAl",
    "06:04": "yKb_hZQFgKATsAl",
    "06:05": "yKb_hZQFgKATsAl",
    "06:06": "hcEk_zmwImgHsS",
    "06:07": "prt1bk2B-gsHsGd",
    "06:08": "ebTrld_dRpAFlEu",
    "06:09": "pKwsPBeSiOcTs",
    "06:10": "pKwsPBeSiOcTs",
    "06:11": "mlqAvhjxAjoFlEu",
    "06:12": "mlqAvhjxAjoFlEu",
    "06:13": "sPcghmmjxioSgBa",
    "06:14": "sPcghmmjxioSgBa",
    "06:15": "GcHOn-EEiBcHsSb",
    "06:16": "kGp_vJq-2awFlEu",
    "06:17": "cT-jGQ2bpggFlEu",
    "06:18": "gQSabq2fGhYOgBe",
    "06:19": "oQbOHPHwPxQSgGa",
    "06:20": "oQbOHPHwPxQSgGa",
    "06:21": "cglhnfbbSdgOgY",
    "06:22": "cglhnfbbSdgOgY",
    "06:23": "kkbbeWggqsQEsBe",
    "06:24": "o-swhAjntvAFlEu",
    "06:25": "o-swhAjntvAFlEu",
    "06:26": "xp1u2RlpoxQFlEu",
    "06:27": "QtsElPKywqgTsFe",
    "06:28": "QtsElPKywqgTsFe",
    "06:29": "kg1_uS_bZigOgTc",
    "06:30": "kg1_uS_bZigOgTc",
    "06:31": "PKtnafFtfEoOgS",
    "06:32": "NfOAAf4kFOoFlGa",
    "06:33": "auHEjieszAoFlSm",
    "06:34": "qoxjzGypOAAOgSb",
    "06:35": "wQidAZQhxbAFlEu",
    "06:36": "wQidAZQhxbAFlEu",
    "06:37": "KoTfcR2QKGsOgSc",
    "06:38": "vu_BusuilosTsSb",
    "06:39": "yqaQJ_tmbPASgBa",
    "06:40": "yqaQJ_tmbPASgBa",
    "06:41": "wdiolszkeioFlEu",
    "06:42": "wdiolszkeioFlEu",
    "06:43": "zS4mavnAaiQOgTc",
    "06:44": "codpbgGpcqQFlEu",
    "06:45": "codpbgGpcqQFlEu",
    "06:46": "NffmujESqNwFlAs",
    "06:47": "O3GBsa1-dKsFlGa",
    "06:48": "O3GBsa1-dKsFlGa",
    "06:49": "o2rn1bwHHREHsHo",
    "06:50": "qh-hkHuc_wEFlSm",
    "06:51": "qh-hkHuc_wEFlSm",
    "06:52": "fpaxvjFh-qATsSb",
    "06:53": "EqHKcpvxllcOgY",
    "06:54": "hgZelygG_qYTsSc",
    "06:55": "hgZelygG_qYTsSc",
    "06:56": "rekcqRG1wmYTsSc",
    "06:57": "GtQPsyEHHZQTsTc",
    "06:58": "GtQPsyEHHZQTsTc",
    "06:59": "YHrbH2dQHEcFlSc",
    "07:00": "YHrbH2dQHEcFlSc",
    "07:01": "x5KeK3ARrPYAt",
    "07:02": "cofteQs2RyAFlEu",
    "07:03": "cofteQs2RyAFlEu",
    "07:04": "j-gtbGpTteQFlEu",
    "07:05": "j-gtbGpTteQFlEu",
    "07:06": "lSs-ubhPGQEFlGe",
    "07:07": "lSs-ubhPGQEFlGe",
    "07:08": "QBbelnfEeHEHsEu",
    "07:09": "s_alotsHliAHsGd",
    "07:10": "s_alotsHliAHsGd",
    "07:11": "sPBJihaYspgOg",
    "07:12": "sPBJihaYspgOg",
    "07:13": "bfFfvgqtoyETsSb",
    "07:14": "GTtce3rJxhcFlEu",
    "07:15": "ooBvzeguzBcFmHo",
    "07:16": "ooBvzeguzBcFmHo",
    "07:17": "dtNbOpGOjmwOgHe",
    "07:18": "dtNbOpGOjmwOgHe",
    "07:19": "hGiNRlmpidsOgTe",
    "07:20": "hGiNRlmpidsOgTe",
    "07:21": "QdJzibQuyHEFlSm",
    "07:22": "wwr6EgxeevEFlEu",
    "07:23": "ayh_QbtJftIHsS",
    "07:24": "ayh_QbtJftIHsS",
    "07:25": "sfP1OqtggSkTsSc",
    "07:26": "fbxyqeIylHEOgB",
    "07:27": "ttldaEHlZZsFlSm",
    "07:28": "ttldaEHlZZsFlSm",
    "07:29": "IgRrcpwwzE4HsS",
    "07:30": "IgRrcpwwzE4HsS",
    "07:31": "khOZ_EtkhOYOgBe",
    "07:32": "khOZ_EtkhOYOgBe",
    "07:33": "eeeGsxpOjNQSgBa",
    "07:34": "vw2uOljxgTAOgSb",
    "07:35": "vw2uOljxgTAOgSb",
    "07:36": "yyyhxRztamEFlEu",
    "07:37": "yyyhxRztamEFlEu",
    "07:38": "zRyHGy4rFqYFlSi",
    "07:39": "zRyHGy4rFqYFlSi",
    "07:40": "QjealGtlKjQBhSb",
    "07:41": "suN_4cZN-aoBhBa",
    "07:42": "suN_4cZN-aoBhBa",
    "07:43": "To4xdjsxQAgTsAl",
    "07:44": "Nev2-f2cfjoFmHo",
    "07:45": "jG-zo_oA2joFlEu",
    "07:46": "jG-zo_oA2joFlEu",
    "07:47": "ryFvH4EjaxoFmHo",
    "07:48": "ryFvH4EjaxoFmHo",
    "07:49": "d1kwJtkFtwATsSb",
    "07:50": "kiTTAbeqQKYOgH",
    "07:51": "kiTTAbeqQKYOgH",
    "07:52": "QPhcbZriB4oTs",
    "07:53": "bdiGlNbz_QcFlTi",
    "07:54": "bdiGlNbz_QcFlTi",
    "07:55": "l_GAF_fy2SATsGa",
    "07:56": "l_GAF_fy2SATsGa",
    "07:57": "nYcnhe_y21gOgS",
    "07:58": "nYcnhe_y21gOgS",
    "07:59": "ZqGesno_FiQFlTi",
    "08:00": "TZOmpbGz-vsOgSb",
    "08:01": "qommxIcfoosHsS",
    "08:02": "qommxIcfoosHsS",
    "08:03": "JxvG4rBQePsOgY",
    "08:04": "dnFSRNgtH2QOgFe",
    "08:05": "dnFSRNgtH2QOgFe",
    "08:06": "-pFKsqGyu_sOgGa",
    "08:07": "-pFKsqGyu_sOgGa",
    "08:08": "1tseQzv3_IEHsS",
    "08:09": "wNN-TRirvHYOgB",
    "08:10": "wNN-TRirvHYOgB",
    "08:11": "bthHZpjdJi4FlSm",
    "08:12": "bthHZpjdJi4FlSm",
    "08:13": "qrfnaR4adiIHsS",
    "08:14": "qrfnaR4adiIHsS",
    "08:17": "KFwOQ4_nv-cHsAs",
    "08:18": "ZEwAkZq1ZsAFlEu",
    "08:19": "ZEwAkZq1ZsAFlEu",
    "08:20": "SfJc-FB4dbQFlAs",
    "08:21": "hYJJHvwitfESgGa",
    "08:22": "hYJJHvwitfESgGa",
    "08:23": "QBgqntNfsToOgAg",
    "08:24": "QBgqntNfsToOgAg",
    "08:25": "HQavntn-sncFlSm",
    "08:26": "dvq-ixRvwGAFlEu",
    "08:27": "dvq-ixRvwGAFlEu",
    "08:28": "bZ2FxmxpotsTsSb",
    "08:29": "bZ2FxmxpotsTsSb",
    "08:30": "hgfzxaFOyqwTsTc",
    "08:31": "hgfzxaFOyqwTsTc",
    "08:32": "brcBPJj2QgwOgY",
    "08:33": "xeK-B4iPxvoTsSc",
    "08:34": "bqtqltqcQhwFlEu",
    "08:35": "bqtqltqcQhwFlEu",
    "08:36": "OBGFxlkfOdEFlAs",
    "08:37": "OBGFxlkfOdEFlAs",
    "08:38": "gAEOeYkfG_wTsAl",
    "08:39": "gAEOeYkfG_wTsAl",
    "08:40": "lJJvcG4_vSAOgTc",
    "08:41": "Ymqkj3hlqGATsSc",
    "08:42": "Ymqkj3hlqGATsSc",
    "08:43": "szE4qGfdHzEFlSm",
    "08:44": "szE4qGfdHzEFlSm",
    "08:45": "lROkdtcGFHwHsSb",
    "08:46": "mQqRtaoyAdwFlEu",
    "08:47": "mQqRtaoyAdwFlEu",
    "08:48": "RGhydvSY_AwOgBe",
    "08:49": "RGhydvSY_AwOgBe",
    "08:50": "FgvATdNQeOcFlY",
    "08:51": "FgvATdNQeOcFlY",
    "08:52": "FtBfPQymvdETsGa",
    "08:53": "FtBfPQymvdETsGa",
    "08:54": "u3qbwIl1l-QHsS",
    "08:55": "u3qbwIl1l-QHsS",
    "08:56": "haaqZflhemoFlEu",
    "08:57": "vwuQPfvSSloTsAl",
    "08:58": "vwuQPfvSSloTsAl",
    "08:59": "qroAEArkSPkFlSi",
    "09:00": "qroAEArkSPkFlSi",
    "09:01": "ia__-tHQPvcOgTc",
    "09:02": "ia__-tHQPvcOgTc",
    "09:03": "lhAgaRzAEGgTsAl",
    "09:04": "xPEjZYQaxusOgB",
    "09:05": "iwTOEASFyfkOgFe",
    "09:06": "iwTOEASFyfkOgFe",
    "09:07": "qytSTZ_ebyQOgTc",
    "09:08": "qytSTZ_ebyQOgTc",
    "09:09": "osgjyexGTEoFlEu",
    "09:10": "osgjyexGTEoFlEu",
    "09:11": "dZbu_Qe-tdgFlEu",
    "09:12": "oT3uuggQqcgFlEu",
    "09:13": "roRHdPhvjaoOgTc",
    "09:14": "roRHdPhvjaoOgTc",
    "09:15": "dNxyFtqcNssBhAg",
    "09:16": "dNxyFtqcNssBhAg",
    "09:17": "johRpvcEmQcFlEu",
    "09:18": "johRpvcEmQcFlEu",
    "09:19": "paaz_y-v1eQFlEu",
    "09:20": "paaz_y-v1eQFlEu",
    "09:21": "fRouYd-o_EwTsSc",
    "09:22": "fRouYd-o_EwTsSc",
    "09:23": "cOmh_YqpqtsTsAl",
    "09:24": "yfTiSyiAj3kOgSc",
    "09:25": "yfTiSyiAj3kOgSc",
    "09:26": "va-YHeytvFQOgF",
    "09:27": "va-YHeytvFQOgF",
    "09:28": "tysZObbs4YoTsAl",
    "09:29": "tQiiaFE1e-YHsSc",
    "09:30": "qiNcEguuFSAFlGa",
    "09:31": "qiNcEguuFSAFlGa",
    "09:32": "mBbHfjoz1owFm",
    "09:33": "iNuzxoz50ZEOgTe",
    "09:34": "j2_dJY_mIysAt",
    "09:35": "tK1npHenAScFlSc",
    "09:36": "sYiP-nqdwaAOgB",
    "09:37": "sYiP-nqdwaAOgB",
    "09:38": "RS_TrEbaizgOgTc",
    "09:39": "npTphztFoacTsSb",
    "09:40": "fGhp_dvtjQYTsSc",
    "09:41": "qkdBEwfQBxQFmHo",
    "09:42": "qkdBEwfQBxQFmHo",
    "09:43": "mxeqhcEbySwOgTc",
    "09:44": "mxeqhcEbySwOgTc",
    "09:45": "qpsuEjycnFoTsSb",
    "09:46": "ZlAd-KK_T-sOgSc",
    "09:47": "ohJPiBdbbbAOgY",
    "09:48": "ohJPiBdbbbAOgY",
    "09:49": "pvxe21suhGwTsBa",
    "09:50": "xlpqeREimKgBhSb",
    "09:51": "xlpqeREimKgBhSb",
    "09:52": "fjEB_wbemQAHsGd",
    "09:53": "fjEB_wbemQAHsGd",
    "09:54": "q-zcIvdJxooHsS",
    "09:55": "q-zcIvdJxooHsS",
    "09:56": "opRzhzxwamcFlEu",
    "09:57": "fh-pnqjnuywFlEu",
    "09:58": "fh-pnqjnuywFlEu",
    "09:59": "sBehb_Fa_qgTsAg"
}

// These arrays are shit, better to find a way to access them dynamically
const chessGames = [{
    sol: "Nf6+",
    black: !1,
    fen: "r2qkb1r/pp2nppp/3p4/2pNN1B1/2BnP3/3P4/PPP2PPP/R2bK2R w KQkq - 1 0"
}, {
    sol: "Qd5+",
    black: !1,
    fen: "1rb4r/pkPp3p/1b1P3n/1Q6/N3Pp2/8/P1P3PP/7K w - - 1 0"
}, {
    sol: "Qb8+",
    black: !1,
    fen: "4kb1r/p2n1ppp/4q3/4p1B1/4P3/1Q6/PPP2PPP/2KR4 w k - 1 0"
}, {
    sol: "Qd8+",
    black: !1,
    fen: "r1b2k1r/ppp1bppp/8/1B1Q4/5q2/2P5/PPP2PPP/R3R1K1 w - - 1 0"
}, {
    sol: "Qxg6+",
    black: !1,
    fen: "5rkr/pp2Rp2/1b1p1Pb1/3P2Q1/2n3P1/2p5/P4P2/4R1K1 w - - 1 0"
}, {
    sol: "Qxd7+",
    black: !1,
    fen: "1r1kr3/Nbppn1pp/1b6/8/6Q1/3B1P2/Pq3P1P/3RR1K1 w - - 1 0"
}, {
    sol: "Qxf8+",
    black: !1,
    fen: "5rk1/1p1q2bp/p2pN1p1/2pP2Bn/2P3P1/1P6/P4QKP/5R2 w - - 1 0"
}, {
    sol: "Qd7+",
    black: !1,
    fen: "r1nk3r/2b2ppp/p3b3/3NN3/Q2P3q/B2B4/P4PPP/4R1K1 w - - 1 0"
}, {
    sol: "Qg6+",
    black: !1,
    fen: "r4br1/3b1kpp/1q1P4/1pp1RP1N/p7/6Q1/PPB3PP/2KR4 w - - 1 0"
}, {
    sol: "Qxh6+",
    black: !1,
    fen: "r1b2k1r/ppppq3/5N1p/4P2Q/4PP2/1B6/PP5P/n2K2R1 w - - 1 0"
}, {
    sol: "Qg4+",
    black: !1,
    fen: "r2q1b1r/1pN1n1pp/p1n3k1/4Pb2/2BP4/8/PPP3PP/R1BQ1RK1 w - - 1 0"
}, {
    sol: "Qxh6+",
    black: !1,
    fen: "3q2r1/4n2k/p1p1rBpp/PpPpPp2/1P3P1Q/2P3R1/7P/1R5K w - - 1 0"
}, {
    sol: "Qg6+",
    black: !1,
    fen: "r2qk2r/pb4pp/1n2Pb2/2B2Q2/p1p5/2P5/2B2PPP/RN2R1K1 w - - 1 0"
}, {
    sol: "Rg1+",
    black: !0,
    fen: "6k1/pp4p1/2p5/2bp4/8/P5Pb/1P3rrP/2BRRN1K b - - 0 1"
}, {
    sol: "Qxh5+",
    black: !1,
    fen: "rnbqkbn1/ppppp3/7r/6pp/3P1p2/3BP1B1/PPP2PPP/RN1QK1NR w - - 1 0"
}, {
    sol: "Ne7",
    black: !1,
    fen: "r2qrb2/p1pn1Qp1/1p4Nk/4PR2/3n4/7N/P5PP/R6K w - - 1 0"
}, {
    sol: "Qc3+",
    black: !0,
    fen: "8/2r5/1k5p/1pp4P/8/K2P4/PR2QB2/2q5 b - - 0 1"
}, {
    sol: "Qf5+",
    black: !1,
    fen: "r1b3nr/ppqk1Bbp/2pp4/4P1B1/3n4/3P4/PPP2QPP/R4RK1 w - - 1 0"
}, {
    sol: "Bf6+",
    black: !1,
    fen: "3k1r1r/pb3p2/1p4p1/1B2B3/3qn3/6QP/P4RP1/2R3K1 w - - 1 0"
}, {
    sol: "Qc8+",
    black: !1,
    fen: "rn2kb1r/1pQbpppp/1p6/qp1N4/6n1/8/PPP3PP/2KR2NR w - - 1 0"
}, {
    sol: "Re8+",
    black: !1,
    fen: "r2k2nr/pp1b1Q1p/2n4b/3N4/3q4/3P4/PPP3PP/4RR1K w - - 1 0"
}, {
    sol: "Rc1+",
    black: !0,
    fen: "7k/1p4p1/p4b1p/3N3P/2p5/2rb4/PP2r3/K2R2R1 b - - 0 1"
}, {
    sol: "Bf4+",
    black: !1,
    fen: "r2q2nr/5p1p/p1Bp3b/1p1NkP2/3pP1p1/2PP2P1/PP5P/R1Bb1RK1 w - - 1 0"
}, {
    sol: "Ne6+",
    black: !1,
    fen: "r2q1k1r/ppp1bB1p/2np4/6N1/3PP1bP/8/PPP5/RNB2RK1 w - - 1 0"
}, {
    sol: "Qf8+",
    black: !1,
    fen: "6k1/1p1r1pp1/p1r3b1/3pPqB1/2pP4/Q1P4R/P3P2K/6R1 w - - 1 0"
}, {
    sol: "Bf5+",
    black: !0,
    fen: "r1b3k1/ppp3pp/8/3pB3/1P1P4/3K1P2/PP1n1q1P/R2Q3R b - - 0 1"
}, {
    sol: "Qxc6+",
    black: !1,
    fen: "2kr1b1r/pp3ppp/2p1b2q/4B3/4Q3/2PB2R1/PPP2PPP/3R2K1 w - - 1 0"
}, {
    sol: "Qxb8+",
    black: !1,
    fen: "rn2kb1r/pp3ppp/4p1qn/1p4B1/2B5/3P2QP/PPP2PP1/R3K2R w - - 1 0"
}, {
    sol: "Qxd6+",
    black: !1,
    fen: "rnb2b1r/p3kBp1/3pNn1p/2pQN3/1p2PP2/4B3/Pq5P/4K3 w - - 1 0"
}, {
    sol: "Rd8+",
    black: !1,
    fen: "r1b1k2r/ppQ1q2n/2p2p2/P3p2p/N3P1pP/1B4P1/1PP2P2/3R1NK1 w - - 1 0"
}, {
    sol: "Nd3+",
    black: !0,
    fen: "r6k/pp4pp/1b1P4/8/1n4Q1/2N1RP2/PPq3p1/1RB1K3 b - - 0 1"
}, {
    sol: "Rxb6+",
    black: !1,
    fen: "8/1r5p/kpQ3p1/p3rp2/P6P/8/4bPPK/1R6 w - - 1 0"
}, {
    sol: "Qxf7+",
    black: !1,
    fen: "r1b2rk1/2p2ppp/p7/1p6/3P3q/1BP3bP/PP3QP1/RNB1R1K1 w - - 1 0"
}, {
    sol: "Nf6+",
    black: !1,
    fen: "r2qkb1r/2p1nppp/p2p4/np1NN3/4P3/1BP5/PP1P1PPP/R1B1K2R w - - 1 0"
}, {
    sol: "Qe7+",
    black: !1,
    fen: "rnbkn2r/pppp1Qpp/5b2/3NN3/3Pp3/8/PPP1KP1P/R1B4q w - - 1 0"
}, {
    sol: "Rg8+",
    black: !1,
    fen: "4rk2/2pQn2p/p4p2/1p2pN1P/4q3/2P3R1/5PPK/8 w - - 1 0"
}, {
    sol: "Qxf7+",
    black: !1,
    fen: "r1b2rk1/pp3ppp/3p4/3Q1nq1/2B1R3/8/PP3PPP/R5K1 w - - 1 0"
}, {
    sol: "Be3+",
    black: !0,
    fen: "7r/p3ppk1/3p4/2p1P1Kp/2Pb4/3P1QPq/PP5P/R6R b - - 0 1"
}, {
    sol: "Nh4+",
    black: !0,
    fen: "rn2kb1r/ppp1pppp/8/8/4q3/3P1N1b/PPP1BPnP/RNBQ1K1R b kq - 0 1"
}, {
    sol: "Qxe6+",
    black: !1,
    fen: "r1b1kb1r/pp1n1pp1/1qp1p2p/6B1/2PPQ3/3B1N2/P4PPP/R4RK1 w - - 1 0"
}, {
    sol: "Qf8+",
    black: !1,
    fen: "6k1/5p2/1p5p/p4Np1/5q2/Q6P/PPr5/3R3K w - - 1 0"
}, {
    sol: "Qf6+",
    black: !1,
    fen: "r3q3/ppp3k1/3p3R/5b2/2PR3Q/2P1PrP1/P7/4K3 w - - 1 0"
}, {
    sol: "Nb5+",
    black: !0,
    fen: "r3k2r/1Bp2ppp/8/4q1b1/pP1n4/P1KP3P/1BP5/R2Q3R b - - 0 1"
}, {
    sol: "Qxh7+",
    black: !1,
    fen: "r1bq2rk/pp3pbp/2p1p1pQ/7P/3P4/2PB1N2/PP3PPR/2KR4 w - - 1 0"
}, {
    sol: "Qxb7+",
    black: !1,
    fen: "k1n3rr/Pp3p2/3q4/3N4/3Pp2p/1Q2P1p1/3B1PP1/R4RK1 w - - 1 0"
}, {
    sol: "Qg1+",
    black: !0,
    fen: "8/1p3k2/4p1rp/p3Pp1Q/3qnP2/1P6/P6P/2R2R1K b - - 0 1"
}, {
    sol: "Bh6+",
    black: !1,
    fen: "r1bq3r/ppp1b1kp/2n3p1/3B3Q/3p4/8/PPP2PPP/RNB2RK1 w - - 1 0"
}, {
    sol: "Rxf6+",
    black: !1,
    fen: "4r3/pbpn2n1/1p1prp1k/8/2PP2PB/P5N1/2B2R1P/R5K1 w - - 1 0"
}, {
    sol: "Qxh6+",
    black: !1,
    fen: "1q5r/1b1r1p1k/2p1pPpb/p1Pp4/3B1P1Q/1P4P1/P4KB1/2RR4 w - - 1 0"
}, {
    sol: "h5+",
    black: !1,
    fen: "r4R2/1b2n1pp/p2Np1k1/1pn5/4pP1P/8/PPP1B1P1/2K4R w - - 1 0"
}, {
    sol: "Nxd7+",
    black: !1,
    fen: "r1bqk2r/bppp1ppp/8/PB2N3/3n4/B7/2PPQnPP/RN2K2R w KQkq - 1 0"
}, {
    sol: "Rxh2+",
    black: !0,
    fen: "1r4k1/3b2pp/1b1pP2r/pp1P4/4q3/8/PP4RP/2Q2R1K b - - 0 1"
}, {
    sol: "Bb5+",
    black: !0,
    fen: "8/2k2p2/2b3p1/P1p1Np2/1p3b2/1P1K4/5r2/R3R3 b - - 0 1"
}, {
    sol: "Rg8+",
    black: !1,
    fen: "r4r1k/2qb3p/p2p1p2/1pnPN3/2p1Pn2/2P1N3/PPB1QPR1/6RK w - - 1 0"
}, {
    sol: "Qh8+",
    black: !1,
    fen: "1r2q3/1R6/3p1kp1/1ppBp1b1/p3Pp2/2PP4/PP3P2/5K1Q w - - 1 0"
}, {
    sol: "Bh5+",
    black: !1,
    fen: "r3kb1r/pb6/2p2p1p/1p2pq2/2pQ3p/2N2B2/PP3PPP/3RR1K1 w - - 1 0"
}, {
    sol: "Qh7+",
    black: !1,
    fen: "4r3/2q1rpk1/p3bN1p/2p3p1/4QP2/2N4P/PP4P1/5RK1 w - - 1 0"
}, {
    sol: "Qxh7+",
    black: !1,
    fen: "r5rk/pp1np1bn/2pp2q1/3P1bN1/2P1N2Q/1P6/PB2PPBP/3R1RK1 w - - 1 0"
}, {
    sol: "Ne5+",
    black: !1,
    fen: "rn1qkb1r/4p2p/2p2nN1/p4p1Q/PpBP4/8/1P3PPP/R1B1K2R w - - 1 0"
}, {
    sol: "Qxg7+",
    black: !1,
    fen: "r1b2rk1/ppppbpp1/7p/4R3/6Qq/2BB4/PPP2PPP/R5K1 w - - 1 0"
}, {
    sol: "Rh8+",
    black: !1,
    fen: "1r3k2/2n1p1b1/3p2QR/p1pq1pN1/bp6/7P/2P2PP1/4RBK1 w - - 1 0"
}, {
    sol: "Rxh6+",
    black: !1,
    fen: "5b2/1p3rpk/p1b3Rp/4B1RQ/3P1p1P/7q/5P2/6K1 w - - 1 0"
}, {
    sol: "Qxe8+",
    black: !1,
    fen: "r2Rnk1r/1p2q1b1/7p/6pQ/4Ppb1/1BP5/PP3BPP/2K4R w - - 1 0"
}, {
    sol: "Rxe8+",
    black: !1,
    fen: "r2qr2k/pp1b3p/2nQ4/2pB1p1P/3n1PpR/2NP2P1/PPP5/2K1R1N1 w - - 1 0"
}, {
    sol: "Qxh6+",
    black: !1,
    fen: "4r3/p2r1p1k/3q1Bpp/4P3/1PppR3/P5P1/5P1P/2Q3K1 w - - 1 0"
}, {
    sol: "Qxh7+",
    black: !1,
    fen: "r3n1rk/q3NQ1p/p2pbP2/1p4p1/1P1pP1P1/3R4/P1P4P/3B2K1 w - - 1 0"
}, {
    sol: "Kh6",
    black: !0,
    fen: "8/2r2pk1/3p2p1/3Pb3/2P1P2K/6r1/1R2B3/1R6 b - - 0 1"
}, {
    sol: "Be1+",
    black: !1,
    fen: "8/8/p3p3/3b1pR1/1B3P1k/8/4r1PK/8 w - - 1 0"
}, {
    sol: "Rxg7+",
    black: !1,
    fen: "Q7/2r2rpk/2p4p/7N/3PpN2/1p2P3/1K4R1/5q2 w - - 1 0"
}, {
    sol: "Qxg7+",
    black: !1,
    fen: "r3rknQ/1p1R1pb1/p3pqBB/2p5/8/6P1/PPP2P1P/4R1K1 w - - 1 0"
}, {
    sol: "Rg7",
    black: !1,
    fen: "4rr2/1p5R/3p1p2/p2Bp3/P2bPkP1/1P5R/1P2K3/8 w - - 1 0"
}, {
    sol: "Bd6+",
    black: !1,
    fen: "r4kr1/pbNn1q1p/1p6/2p2BPQ/5B2/8/P6P/b4RK1 w - - 1 0"
}, {
    sol: "Ng6+",
    black: !1,
    fen: "6rk/6pp/5p2/p7/P2Q1N2/4P1P1/2r2n1P/6K1 w - - 1 0"
}, {
    sol: "Qh3+",
    black: !1,
    fen: "1n6/p3q2p/2pNk3/1pP1p3/1P2P2Q/2P3P1/6K1/8 w - - 1 0"
}, {
    sol: "Rg1+",
    black: !0,
    fen: "6rk/p3p2p/1p2Pp2/2p2P2/2P1nBr1/1P6/P6P/3R1R1K b - - 0 1"
}, {
    sol: "Qg1+",
    black: !0,
    fen: "3rk3/1p3p2/2p5/7P/1P1qpp1R/P5P1/2Q5/3BK3 b - - 0 1"
}, {
    sol: "Rh8+",
    black: !1,
    fen: "2QR4/6b1/1p4pk/7p/5n1P/4rq2/5P2/5BK1 w - - 1 0"
}, {
    sol: "Rf6",
    black: !1,
    fen: "r3q1k1/5p2/3P2pQ/Ppp5/1pnbN2R/8/1P4PP/5R1K w - - 1 0"
}, {
    sol: "Re7+",
    black: !1,
    fen: "5b2/R4p1p/1r2kp2/1p2pN2/2r1P3/P1P3P1/1PK4P/3R4 w - - 1 0"
}, {
    sol: "Qh6+",
    black: !1,
    fen: "r3q1r1/1p2bNkp/p3n3/2PN1B1Q/PP1P1p2/7P/5PP1/6K1 w - - 1 0"
}, {
    sol: "Qxh7+",
    black: !1,
    fen: "1r2q2k/4N2p/3p1Pp1/2p1n1P1/2P5/p2P2KQ/P3R3/8 w - - 1 0"
}, {
    sol: "Rf6+",
    black: !1,
    fen: "5R2/4r1r1/1p4k1/p1pB2Bp/P1P4K/2P1p3/1P6/8 w - - 1 0"
}, {
    sol: "Qf7+",
    black: !1,
    fen: "2bq1rk1/r1p1b1pn/p2pP1Np/1p1B1Q2/4P3/2P4P/PP3PP1/R1B1R1K1 w - - 1 0"
}, {
    sol: "Bb6+",
    black: !1,
    fen: "1nbk1b1r/1r6/p2P2pp/1B2PpN1/2p2P2/2P1B3/7P/R3K2R w - - 1 0"
}, {
    sol: "Rxg6+",
    black: !1,
    fen: "3r2k1/p1p2p2/bp2p1nQ/4PB1P/2pr3q/6R1/PP3PP1/3R2K1 w - - 1 0"
}, {
    sol: "Qh8+",
    black: !1,
    fen: "6k1/3r3p/p1q3pP/1p1p4/3Q4/4R1P1/P4PK1/8 w - - 1 0"
}, {
    sol: "Rxh3+",
    black: !0,
    fen: "2k4r/ppp5/4bqp1/3p2Q1/6n1/2NB3P/PPP2bP1/R1B2R1K b - - 0 1"
}, {
    sol: "Rxh7+",
    black: !1,
    fen: "r2r3k/b1qn2pp/1p2Bp2/2p2P2/PP1pQ3/7R/1B3PPP/5RK1 w - - 1 0"
}, {
    sol: "Nf5+",
    black: !1,
    fen: "8/1p3Qb1/p5pk/P1p1p1p1/1P2P1P1/2P1N2n/5P1P/4qB1K w - - 1 0"
}, {
    sol: "Rxf7+",
    black: !1,
    fen: "3rrk2/2p2pR1/p4n2/1p1PpP2/2p2q1P/3P1BQ1/PPP5/6RK w - - 1 0"
}, {
    sol: "Rf7+",
    black: !1,
    fen: "r4kr1/1b2R1n1/pq4p1/4Q3/1p4P1/5P2/PPP4P/1K2R3 w - - 1 0"
}, {
    sol: "f5+",
    black: !1,
    fen: "3n4/1R6/p5k1/2B5/1P3PK1/r7/8/8 w - - 1 0"
}, {
    sol: "Rh8+",
    black: !1,
    fen: "1r3rk1/1pnnq1bR/p1pp2B1/P2P1p2/1PP1pP2/2B3P1/5PK1/2Q4R w - - 1 0"
}, {
    sol: "Qxf2+",
    black: !0,
    fen: "b3r1k1/5ppp/p2p4/p4qN1/Q2b4/6R1/5PPP/5RK1 b - - 0 1"
}, {
    sol: "Qxf8+",
    black: !1,
    fen: "5r1k/pp1n1p1p/5n1Q/3p1pN1/3P4/1P4RP/P1r1qPP1/R5K1 w - - 1 0"
}, {
    sol: "Re8+",
    black: !1,
    fen: "5k2/p3Rr2/1p4pp/q4p2/1nbQ1P2/6P1/5N1P/3R2K1 w - - 1 0"
}, {
    sol: "Rxf6+",
    black: !1,
    fen: "4rk2/pp2N1bQ/5p2/8/2q5/P7/3r2PP/4RR1K w - - 1 0"
}, {
    sol: "Qh3+",
    black: !0,
    fen: "r4rk1/4bp2/1Bppq1p1/4p1n1/2P1Pn2/3P2N1/P2Q1PBK/1R5R b - - 0 1"
}, {
    sol: "Nf3",
    black: !1,
    fen: "2q1r3/4pR2/3rQ1pk/p1pnN2p/Pn5B/8/1P4PP/3R3K w - - 1 0"
}, {
    sol: "Qxe6+",
    black: !1,
    fen: "q2br1k1/1b4pp/3Bp3/p6n/1p3R2/3B1N2/PP2QPPP/6K1 w - - 1 0"
}, {
    sol: "Rg8+",
    black: !1,
    fen: "5r1k/p2n1p1p/5P1N/1p1p4/2pP3P/8/PP4RK/8 w - - 1 0"
}, {
    sol: "Qe8+",
    black: !1,
    fen: "8/7p/5pk1/3n2pq/3N1nR1/1P3P2/P6P/4QK2 w - - 1 0 "
}, {
    sol: "Rxf5+",
    black: !1,
    fen: "2Q5/pp2rk1p/3p2pq/2bP1r2/5RR1/1P2P3/PB3P1P/7K w - - 1 0"
}, {
    sol: "Qxh2+",
    black: !0,
    fen: "4r1k1/pQ3pp1/7p/4q3/4r3/P7/1P2nPPP/2BR1R1K b - - 0 1"
}, {
    sol: "Rxf8+",
    black: !1,
    fen: "3R1rk1/1pp2pp1/1p6/8/8/P7/1q4BP/3Q2K1 w - - 1 0"
}, {
    sol: "Rxg6+",
    black: !1,
    fen: "6k1/5p2/p3bRpQ/4q3/2r3P1/6NP/P1p2R1K/1r6 w - - 1 0"
}, {
    sol: "Bf2+",
    black: !0,
    fen: "rnb1k2r/pp3ppp/1qp2B2/2bPp3/4P3/2N5/PPP3PP/R2QKBNR b KQkq - 0 1"
}, {
    sol: "Qxc3+",
    black: !0,
    fen: "r2r4/pp2ppkp/2P3p1/q1p5/4PQ2/2P2b2/P4PPP/2R1KB1R b - - 0 1"
}, {
    sol: "Nd4+",
    black: !1,
    fen: "8/8/2N1P3/1P6/4Q3/4b2K/4k3/4q3 w - - 1 0"
}, {
    sol: "Qxh3+",
    black: !0,
    fen: "1b2r1k1/3n2p1/p3p2p/1p3r2/3PNp1q/3BnP1P/PP1BQP1K/R6R b - - 0 1"
}, {
    sol: "Nf4+",
    black: !1,
    fen: "5b2/q4r1p/p3k1p1/2pNppP1/1P6/3Q1P1P/P7/1K1R4 w - - 1 0"
}, {
    sol: "Qg2+",
    black: !0,
    fen: "8/2p5/Q4pk1/p1Pp4/5n2/PP3PK1/2q4N/8 b - - 0 1"
}, {
    sol: "Qxh7+",
    black: !1,
    fen: "r3nr1k/1b2Nppp/pn6/q3p1P1/P1p4Q/R7/1P2PP1P/2B2RK1 w - - 1 0"
}, {
    sol: "Qh2+",
    black: !0,
    fen: "r1b3nr/ppp1kB1p/3p4/8/3PPBnb/1Q3p2/PPP2q2/RN4RK b - - 0 1"
}, {
    sol: "Qh1+",
    black: !0,
    fen: "q5k1/5rb1/r6p/1Np1n1p1/3p1Pn1/1N4P1/PP5P/R1BQRK2 b - - 0 1"
}, {
    sol: "Qxh3+",
    black: !0,
    fen: "8/2P2pk1/3Q4/4pq2/7p/6pP/2r3P1/6RK b - - 0 1"
}, {
    sol: "Rxg7+",
    black: !1,
    fen: "8/p1R3p1/4p1kn/3p3N/3Pr2P/6P1/PP3K2/8 w - - 1 0"
}, {
    sol: "Qd8+",
    black: !1,
    fen: "r1b1k2r/1p2bppp/p3q3/1p2p1B1/8/3Q1N2/PPP2PPP/3R1RK1 w kq - 1 0"
}, {
    sol: "Rd8+",
    black: !1,
    fen: "rn2k2r/pp2b2p/2p1Q1p1/5B2/1q3B2/8/PPP3PP/3RR2K w kq - 1 0"
}, {
    sol: "Rd8+",
    black: !1,
    fen: "r1b1k2r/pp3ppp/2n1p3/6B1/2p1q3/Q7/PP2PPPP/3RKB1R w Kkq - 1 0"
}, {
    sol: "Nd5+",
    black: !0,
    fen: "2k4r/1pp1n1pp/p1pr1pb1/4p3/Nq2P1P1/1P1PKN1P/2P1QP2/3R3R b - - 0 1"
}, {
    sol: "Rc8+",
    black: !1,
    fen: "5k1r/4npp1/p3p2p/3nP2P/3P3Q/3N4/qB2KPP1/2R5 w - - 1 0"
}, {
    sol: "g5+",
    black: !1,
    fen: "2r5/2R5/3npkpp/3bN3/p4PP1/4K3/P1B4P/8 w - - 1 0"
}, {
    sol: "Rh4+",
    black: !1,
    fen: "5r1r/1p6/p1p2p2/2P1bPpk/4R3/6PP/P2B2K1/3R4 w - - 1 0"
}, {
    sol: "Ng6+",
    black: !1,
    fen: "5qrk/5p1n/pp3p1Q/2pPp3/2P1P1rN/2P4R/P5P1/2B3K1 w - - 1 0"
}, {
    sol: "Qxe6+",
    black: !1,
    fen: "3rk2r/p1qn1pp1/1p2pb1p/7P/2Pp4/B1P1QP2/P1B1KP2/3R3R w k - 1 0"
}, {
    sol: "Bf7+",
    black: !1,
    fen: "r3kb1r/q5pp/p1p1Bnn1/1p2Q3/8/2N2PBP/PPP5/2KRR3 w - - 1 0"
}, {
    sol: "Ne7+",
    black: !1,
    fen: "rq3rk1/3n1pp1/pb4n1/3N2P1/1pB1QP2/4B3/PP6/2KR3R w - - 1 0"
}, {
    sol: "Nh8+",
    black: !1,
    fen: "3q2r1/p2b1k2/1pnBp1N1/3p1pQP/6P1/5R2/2r2P2/4RK2 w - - 1 0"
}, {
    sol: "Rxf1+",
    black: !0,
    fen: "8/p4pk1/6p1/3R4/3nqN1P/2Q3P1/5P2/3r1BK1 b - - 0 1"
}, {
    sol: "Bxg6+",
    black: !1,
    fen: "2r5/3nbkp1/2q1p1p1/1p1n2P1/3P4/2p1P1NQ/1P1B1P2/1B4KR w - - 1 0"
}, {
    sol: "Nxf7+",
    black: !1,
    fen: "r1bq1rkb/ppp2n1p/5n2/4p1NN/5pQ1/1BP5/PP3PPP/R1B1K2R w KQ - 1 0"
}, {
    sol: "Re5+",
    black: !1,
    fen: "4r3/1b2r2p/p2p2k1/P1pP1R1N/3b4/1P1B3P/3n2P1/5R1K w - - 1 0"
}, {
    sol: "Rf8+",
    black: !1,
    fen: "2b3k1/1p5p/2p1n1pQ/3qB3/3P4/3B3P/r5P1/5RK1 w - - 1 0"
}, {
    sol: "Rxe6+",
    black: !1,
    fen: "3rk2r/1pR2p2/b2BpPp1/p2p4/8/1P6/P4PPP/4R1K1 w - - 1 0"
}, {
    sol: "Rxh7+",
    black: !1,
    fen: "4nr1k/1bq3pp/5p2/1p2pNQ1/3pP3/1B1P3R/1PP3PP/6K1 w - - 1 0"
}, {
    sol: "Nxb7+",
    black: !1,
    fen: "r1bk1r2/pp1n2pp/3NQ3/1P6/8/2n2PB1/q1B3PP/3R1RK1 w - - 1 0"
}, {
    sol: "Qg8+",
    black: !1,
    fen: "1rb2k2/pp3ppQ/7q/2p1n1N1/2p5/2N5/P3BP1P/K2R4 w - - 1 0"
}, {
    sol: "Qxh6+",
    black: !1,
    fen: "4r3/5p1k/2p1nBpp/q2p4/P1bP4/2P1R2Q/2B2PPP/6K1 w - - 1 0"
}, {
    sol: "Ra1+",
    black: !0,
    fen: "2r3k1/6pp/4pp2/3bp3/1Pq5/3R1P2/r1PQ2PP/1K1RN3 b - - 0 1"
}, {
    sol: "Rh8+",
    black: !1,
    fen: "6R1/5r1k/p6b/1pB1p2q/1P6/5rQP/5P1K/6R1 w - - 1 0"
}, {
    sol: "Bg6+",
    black: !1,
    fen: "r5q1/pp1b1kr1/2p2p2/2Q5/2PpB3/1P4NP/P4P2/4RK2 w - - 1 0"
}, {
    sol: "Qd8+",
    black: !1,
    fen: "2r1kb1r/p2b1ppp/3p4/Q2Np1B1/4P2P/8/PP4P1/4KB1n w k - 1 0"
}, {
    sol: "Qh5+",
    black: !0,
    fen: "5rk1/ppp2pbp/3p2p1/1q6/4r1P1/1NP1B3/PP2nPP1/R2QR2K b - - 0 1"
}, {
    sol: "Qxg6+",
    black: !1,
    fen: "r2q1bk1/5n1p/2p3pP/p7/3Br3/1P3PQR/P5P1/2KR4 w - - 1 0"
}, {
    sol: "Qxa3+",
    black: !0,
    fen: "2b5/k2n1p2/p2q4/5R1B/2p4P/P1b5/KPQ1R3/6r1 b - - 0 1"
}, {
    sol: "Bg6+",
    black: !1,
    fen: "4Q3/r4ppk/3p3p/4pPbB/2P1P3/1q5P/6P1/3R3K w - - 1 0"
}, {
    sol: "Nf4+",
    black: !1,
    fen: "rn5r/p4pp1/3n3p/qB1k4/3P4/4P3/PP2NPPP/R4K1R w - - 1 0"
}, {
    sol: "Qxc3+",
    black: !0,
    fen: "r2r2k1/pp2bppp/2p1p3/4qb1P/8/1BP1BQ2/PP3PP1/2KR3R b - - 0 1"
}, {
    sol: "Ne6+",
    black: !1,
    fen: "5R2/6k1/3K4/p6r/1p1NB3/1P4r1/8/8 w - - 1 0"
}, {
    sol: "Nxf7+",
    black: !1,
    fen: "5r2/1qp2pp1/bnpk3p/4NQ2/2P5/1P5P/5PP1/4R1K1 w - - 1 0"
}, {
    sol: "Rxd8+",
    black: !1,
    fen: "3nk1r1/1pq4p/p3PQpB/5p2/2r5/8/P4PPP/3RR1K1 w - - 1 0"
}, {
    sol: "Ng3+",
    black: !0,
    fen: "5rk1/5ppp/pq6/1r3n2/2Q2P2/1P1N4/P1P1R1PP/4R2K b - - 0 1"
}, {
    sol: "Re8+",
    black: !1,
    fen: "1k3r2/4R1Q1/p2q1r2/8/2p1Bb2/5R2/pP5P/K7 w - - 1 0"
}, {
    sol: "Bxf3+",
    black: !0,
    fen: "2k1r2r/ppp3p1/3b4/3pq2b/7p/2NP1P2/PPP2Q1P/R5RK b - - 0 1"
}, {
    sol: "Rh2+",
    black: !0,
    fen: "3k4/1p3Bp1/p5r1/2b5/P3P1N1/5Pp1/1P1r4/2R4K b - - 0 1"
}, {
    sol: "Re8+",
    black: !1,
    fen: "6k1/1r4np/pp1p1R1B/2pP2p1/P1P5/1n5P/6P1/4R2K w - - 1 0"
}, {
    sol: "Bh6",
    black: !1,
    fen: "8/p2q1p1k/4pQp1/1p1b2Bp/7P/8/5PP1/6K1 w - - 1 0"
}, {
    sol: "Qb5+",
    black: !1,
    fen: "r7/6R1/ppkqrn1B/2pp3p/P6n/2N5/8/1Q1R1K2 w - - 1 0"
}, {
    sol: "Qh6+",
    black: !1,
    fen: "r2q1k1r/3bnp2/p1n1pNp1/3pP1Qp/Pp1P4/2PB4/5PPP/R1B2RK1 w - - 1 0"
}, {
    sol: "Rxh7+",
    black: !1,
    fen: "6rk/1r2pR1p/3pP1pB/2p1p3/P6Q/P1q3P1/7P/5BK1 w - - 1 0"
}, {
    sol: "Rxf7+",
    black: !1,
    fen: "1r2Rr2/3P1p1k/5Rpp/qp6/2pQ4/7P/5PPK/8 w - - 1 0"
}, {
    sol: "Rxf8+",
    black: !1,
    fen: "r4rk1/5Rbp/p1qN2p1/P1n1P3/8/1Q3N1P/5PP1/5RK1 w - - 1 0"
}, {
    sol: "Rh6",
    black: !1,
    fen: "7R/3r4/8/3pkp1p/5N1P/b3PK2/5P2/8 w - - 1 0"
}, {
    sol: "Bf5+",
    black: !1,
    fen: "8/1R3p2/3rk2p/p2p2p1/P2P2P1/3B1PN1/5K1P/r7 w - - 1 0"
}, {
    sol: "Rxh6+",
    black: !1,
    fen: "8/5prk/p5rb/P3N2R/1p1PQ2p/7P/1P3RPq/5K2 w - - 1 0"
}, {
    sol: "Qe6+",
    black: !1,
    fen: "rqb2bk1/3n2pr/p1pp2Qp/1p6/3BP2N/2N4P/PPP3P1/2KR3R w - - 1 0"
}, {
    sol: "Rxa7+",
    black: !1,
    fen: "1Q6/r3R2p/k2p2pP/p1q5/Pp4P1/5P2/1PP3K1/8 w - - 1 0"
}, {
    sol: "Rg2+",
    black: !0,
    fen: "N5k1/5p2/6p1/6Pp/4bb1P/P5r1/7K/2R3R1 b - - 0 1"
}, {
    sol: "Qg4+",
    black: !1,
    fen: "3R4/3Q1p2/q1rn2kp/4p3/4P3/2N3P1/5P1P/6K1 w - - 1 0"
}, {
    sol: "Qh1+",
    black: !0,
    fen: "6R1/2k2P2/1n5r/3p1p2/3P3b/1QP2p1q/3R4/6K1 b - - 0 1"
}, {
    sol: "g4+",
    black: !1,
    fen: "5r2/7p/3R4/p3pk2/1p2N2p/1P2BP2/6PK/4r3 w - - 1 0"
}, {
    sol: "Qc6+",
    black: !1,
    fen: "7r/3kbp1p/1Q3R2/3p3q/p2P3B/1P5K/P6P/8 w - - 1 0"
}, {
    sol: "Rg8+",
    black: !1,
    fen: "r4r1k/p2p3p/bp1Np3/4P3/2P2nR1/3B1q2/P1PQ4/2K3R1 w - - 1 0"
}, {
    sol: "Bf6+",
    black: !1,
    fen: "1r3b2/1bp2pkp/p1q4N/1p1n1pBn/8/2P3QP/PPB2PP1/4R1K1 w - - 1 0"
}, {
    sol: "Qc6",
    black: !1,
    fen: "8/k1p1q3/Pp5Q/4p3/2P1P2p/3P4/4K3/8 w - - 1 0"
}, {
    sol: "f2+",
    black: !0,
    fen: "8/pp2k3/7r/2P1p1p1/4P3/5pq1/2R3N1/1R3BK1 b - - 0 1"
}, {
    sol: "Ne2+",
    black: !0,
    fen: "7k/p5b1/1p4Bp/2q1p1p1/1P1n1r2/P2Q2N1/6P1/3R2K1 b - - 0 1"
}, {
    sol: "Rh6+",
    black: !1,
    fen: "8/p4q2/6k1/1p3rP1/3Q4/8/PPP5/K6R w - - 1 0"
}, {
    sol: "Rc1+",
    black: !0,
    fen: "2r3k1/1p3ppp/p3p3/7P/P4P2/1R2QbP1/6q1/1B2K3 b - - 0 1"
}, {
    sol: "Ne4+",
    black: !0,
    fen: "6r1/p6k/Bp3n1r/2pP1P2/P4q1P/2P2Q2/5K2/2R2R2 b - - 0 1"
}, {
    sol: "Ng4",
    black: !0,
    fen: "8/8/8/5P2/R2p1N2/4n1r1/PP6/5k1K b - - 0 1"
}, {
    sol: "Rf7+",
    black: !1,
    fen: "r7/4k1Pp/2n1p2P/q2pp1N1/1p4P1/1P6/P4R2/1K1R4 w - - 1 0"
}, {
    sol: "Qd8+",
    black: !1,
    fen: "2Q5/1p3p2/3b1k1p/3Pp3/4B1R1/4q1P1/r4PK1/8 w - - 1 0"
}, {
    sol: "Rxh6+",
    black: !1,
    fen: "8/5Qpk/p1R4p/P2p4/6P1/2rq4/5PPK/8 w - - 1 0"
}, {
    sol: "Qg7+",
    black: !1,
    fen: "3n1k2/5p2/2p1bb2/1p2pN1q/1P2P3/2P3Q1/5PB1/3R2K1 w - - 1 0"
}, {
    sol: "Be5+",
    black: !1,
    fen: "rnR5/p3p1kp/4p1pn/bpP5/5BP1/5N1P/2P2P2/2K5 w - - 1 0"
}, {
    sol: "Rxh6+",
    black: !1,
    fen: "6rk/6p1/4R2p/p2pP2b/5Q2/2P2PB1/1q4PK/8 w - - 1 0"
}, {
    sol: "Re4+",
    black: !0,
    fen: "1Q6/8/3p1pk1/2pP4/1p3K2/5R2/5qP1/4r3 b - - 0 1"
}, {
    sol: "Nf7+",
    black: !1,
    fen: "r4r1k/pp5p/n5p1/1q2Np1n/1Pb5/6P1/PQ2PPBP/1RB3K1 w - - 1 0"
}, {
    sol: "Rxh6+",
    black: !1,
    fen: "7k/p1p2bp1/3q1N1p/4rP2/4pQ2/2P4R/P2r2PP/4R2K w - - 1 0"
}, {
    sol: "Rf1+",
    black: !0,
    fen: "7k/2p3pp/p7/1p1p4/PP2pr2/B1P3qP/4N1B1/R1Qn2K1 b - - 0 1"
}, {
    sol: "Rg8+",
    black: !1,
    fen: "r1b2k2/1p1p1r1B/n4p2/p1qPp3/2P4N/4P1R1/PPQ3PP/R5K1 w - - 1 0"
}]

const periodicTable = [{
    num: "1",
    symbol: "H"
}, {
    num: "2",
    symbol: "He"
}, {
    num: "3",
    symbol: "Li"
}, {
    num: "4",
    symbol: "Be"
}, {
    num: "5",
    symbol: "B"
}, {
    num: "6",
    symbol: "C"
}, {
    num: "7",
    symbol: "N"
}, {
    num: "8",
    symbol: "O"
}, {
    num: "9",
    symbol: "F"
}, {
    num: "10",
    symbol: "Ne"
}, {
    num: "11",
    symbol: "Na"
}, {
    num: "12",
    symbol: "Mg"
}, {
    num: "13",
    symbol: "Al"
}, {
    num: "14",
    symbol: "Si"
}, {
    num: "15",
    symbol: "P"
}, {
    num: "16",
    symbol: "S"
}, {
    num: "17",
    symbol: "Cl"
}, {
    num: "18",
    symbol: "Ar"
}, {
    num: "19",
    symbol: "K"
}, {
    num: "20",
    symbol: "Ca"
}, {
    num: "21",
    symbol: "Sc"
}, {
    num: "22",
    symbol: "Ti"
}, {
    num: "23",
    symbol: "V"
}, {
    num: "24",
    symbol: "Cr"
}, {
    num: "25",
    symbol: "Mn"
}, {
    num: "26",
    symbol: "Fe"
}, {
    num: "27",
    symbol: "Co"
}, {
    num: "28",
    symbol: "Ni"
}, {
    num: "29",
    symbol: "Cu"
}, {
    num: "30",
    symbol: "Zn"
}, {
    num: "31",
    symbol: "Ga"
}, {
    num: "32",
    symbol: "Ge"
}, {
    num: "33",
    symbol: "As"
}, {
    num: "34",
    symbol: "Se"
}, {
    num: "35",
    symbol: "Br"
}, {
    num: "36",
    symbol: "Kr"
}, {
    num: "37",
    symbol: "Rb"
}, {
    num: "38",
    symbol: "Sr"
}, {
    num: "39",
    symbol: "Y"
}, {
    num: "40",
    symbol: "Zr"
}, {
    num: "41",
    symbol: "Nb"
}, {
    num: "42",
    symbol: "Mo"
}, {
    num: "43",
    symbol: "Tc"
}, {
    num: "44",
    symbol: "Ru"
}, {
    num: "45",
    symbol: "Rh"
}, {
    num: "46",
    symbol: "Pd"
}, {
    num: "47",
    symbol: "Ag"
}, {
    num: "48",
    symbol: "Cd"
}, {
    num: "49",
    symbol: "In"
}, {
    num: "50",
    symbol: "Sn"
}, {
    num: "51",
    symbol: "Sb"
}, {
    num: "52",
    symbol: "Te"
}, {
    num: "53",
    symbol: "I"
}, {
    num: "54",
    symbol: "Xe"
}, {
    num: "55",
    symbol: "Cs"
}, {
    num: "56",
    symbol: "Ba"
}, {
    num: "57",
    symbol: "La"
}, {
    num: "58",
    symbol: "Ce"
}, {
    num: "59",
    symbol: "Pr"
}, {
    num: "60",
    symbol: "Nd"
}, {
    num: "61",
    symbol: "Pm"
}, {
    num: "62",
    symbol: "Sm"
}, {
    num: "63",
    symbol: "Eu"
}, {
    num: "64",
    symbol: "Gd"
}, {
    num: "65",
    symbol: "Tb"
}, {
    num: "66",
    symbol: "Dy"
}, {
    num: "67",
    symbol: "Ho"
}, {
    num: "68",
    symbol: "Er"
}, {
    num: "69",
    symbol: "Tm"
}, {
    num: "70",
    symbol: "Yb"
}, {
    num: "71",
    symbol: "Lu"
}, {
    num: "72",
    symbol: "Hf"
}, {
    num: "73",
    symbol: "Ta"
}, {
    num: "74",
    symbol: "W"
}, {
    num: "75",
    symbol: "Re"
}, {
    num: "76",
    symbol: "Os"
}, {
    num: "77",
    symbol: "Ir"
}, {
    num: "78",
    symbol: "Pt"
}, {
    num: "79",
    symbol: "Au"
}, {
    num: "80",
    symbol: "Hg"
}, {
    num: "81",
    symbol: "Tl"
}, {
    num: "82",
    symbol: "Pb"
}, {
    num: "83",
    symbol: "Bi"
}, {
    num: "84",
    symbol: "Po"
}, {
    num: "85",
    symbol: "At"
}, {
    num: "86",
    symbol: "Rn"
}, {
    num: "87",
    symbol: "Fr"
}, {
    num: "88",
    symbol: "Ra"
}, {
    num: "89",
    symbol: "Ac"
}, {
    num: "90",
    symbol: "Th"
}, {
    num: "91",
    symbol: "Pa"
}, {
    num: "92",
    symbol: "U"
}, {
    num: "93",
    symbol: "Np"
}, {
    num: "94",
    symbol: "Pu"
}, {
    num: "95",
    symbol: "Am"
}, {
    num: "96",
    symbol: "Cm"
}, {
    num: "97",
    symbol: "Bk"
}, {
    num: "98",
    symbol: "Cf"
}, {
    num: "99",
    symbol: "Es"
}, {
    num: "100",
    symbol: "Fm"
}, {
    num: "101",
    symbol: "Md"
}, {
    num: "102",
    symbol: "No"
}, {
    num: "103",
    symbol: "Lr"
}, {
    num: "104",
    symbol: "Rf"
}, {
    num: "105",
    symbol: "Db"
}, {
    num: "106",
    symbol: "Sg"
}, {
    num: "107",
    symbol: "Bh"
}, {
    num: "108",
    symbol: "Hs"
}, {
    num: "109",
    symbol: "Mt"
}, {
    num: "110",
    symbol: "Ds"
}, {
    num: "111",
    symbol: "Rg"
}, {
    num: "112",
    symbol: "Cn"
}, {
    num: "113",
    symbol: "Nh"
}, {
    num: "114",
    symbol: "Fl"
}, {
    num: "115",
    symbol: "Mc"
}, {
    num: "116",
    symbol: "Lv"
}, {
    num: "117",
    symbol: "Ts"
}, {
    num: "118",
    symbol: "Og"
}]  

const romanNumerals = ['I','V','X','L','C','D','M']

usefulComponent = window.$nuxt.$children[2].$children[0].$children[0]

async function waitMs() {
    await new Promise(resolve => setTimeout(resolve,200))
}

function sacrificeLetters(password) {
    var sacrificedAmount = 0
    var sacrificeComponent = usefulComponent.$children[2].$children[0].$children[24].$children[0]
    var uPassword = password.toUpperCase()
    for(i = 25; i >= 0 && sacrificedAmount < 2; i--) {
        c = String.fromCharCode(i + 65)
        if(!uPassword.includes(c)) {
            sacrificedAmount++
            sacrificeComponent.toggle(c)
        }
    }
    waitMs(100)
    sacrificeComponent.makeSacrifice()
}

function updatePassword(newPassword) {
    newPassword = getBaseDigits(newPassword) + getElements(newPassword) + newPassword
    usefulComponent.editor.commands.setContent(newPassword)
    makeVolwelsBold(newPassword)
}

function forceGoodCaptcha() {
    var currCaptcha = usefulComponent.currCaptcha
    
    while (currCaptcha != "cnwyc") {
        usefulComponent.refreshCaptcha()
        currCaptcha = usefulComponent.currCaptcha
    } 
}

function getGoodMoon() {
    return ["🌓", "🌕", "🌓", "🌑", "🌒", "🌔", "🌒"].find((moon) => {
        return usefulComponent.rules[12].test(moon).isValid
    })
}

function getBaseDigits(password) {
    digitSum = 0
    for (var digit of password.matchAll(/[\d]{1}/g)) {
        digitSum += parseInt(digit)
    }
    
    baseDigits = []
    if (digitSum >= 25)
        return ''
    
    digitRemainder = 25 - digitSum
    while (digitRemainder > 9) {
        baseDigits.push(9)
        digitRemainder -= 9
    }

    baseDigits.push(digitRemainder)
    return baseDigits.map(String).join('')
}

function getElements(password) {
    periodicSum = 0

    // Reverse order to mimic neals logic
    periodicTable.slice().reverse().forEach((element) => {
        password = password.replaceAll(element.symbol, () => {
            periodicSum += parseInt(element.num)
            return ''
        })
    })
    
    elements = ''
    if (periodicSum > 200) {
        return elements
    }

    while (periodicSum != 200) {
        var hasReachedEnd = periodicTable.slice().reverse().every((element) => {
            if (periodicSum + parseInt(element.num) <= 200 &&
                !romanNumerals.some((numeral) => {return element.symbol.includes(numeral)})) {
                elements += element.symbol
                periodicSum += parseInt(element.num)
                return false
            }
            return true
        })
        
        if (hasReachedEnd)
            break
    }

    return elements
}

function makeVolwelsBold(password) {
    usefulComponent.editor.chain().setTextSelection({from: 0, to: password.length}).unsetBold().run();
    [...password.matchAll(/[aeiouy]/gi)].forEach((v) => {
        usefulComponent.editor.chain().setTextSelection({from: v.index + 1, to: v.index + 2}).setBold().run()
    })

}

(async() => {
    // Preparations
    forceGoodCaptcha()
    
    var basePassword = '!'
    
    while (!usefulComponent.wordleAnswer) {
        await waitMs(200)
    }
    var month = 'July'
    var leapYear = '0'
    var romanNumerals = 'XXXV'
    var sponsor = 'shell'
    var captcha = 'cnwyc'
    var wordleAnswer = usefulComponent.wordleAnswer.toLowerCase()
    var goodPlace = usefulComponent.currPlace.title.toLowerCase().replace(/\s+/g, '')
    var goodMoon = getGoodMoon()
    
    // Up to Lvl 15, needed to render the chess game
    password = basePassword + month + leapYear + romanNumerals + sponsor + captcha +
               wordleAnswer + goodMoon + goodPlace 
    updatePassword(password)
    
    
    var chessSolution = chessGames[usefulComponent.currChessPuzzle].sol
    password = month + leapYear + romanNumerals + sponsor + captcha +
               wordleAnswer + goodMoon + goodPlace + chessSolution + '🥚'
    updatePassword(password)

    // Again to stop the fire
    updatePassword(password)

    youtubeLength = new Date(usefulComponent.randomYoutubeDuration * 1000).toISOString().slice(14, 19)
    password = '🏋️‍♂️🏋️‍♂️🏋️‍♂️' + 'iamloved' + 'youtube.com/watch?v=' + youtubeInfo[youtubeLength] +
               password + '🐛🐛🐛🐛🐛🐛🐛🐛'

    updatePassword(password)

    while (usefulComponent.$children[2].$children[0].$children.length < 25) {
        await waitMs(200)
    }

    sacrificeLetters(password + getElements(password))
})()
