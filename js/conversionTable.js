var conversionTable = [
        {romaji: 'kkya', hiragana: 'っきゃ', katakana: 'ッキャ'},
        {romaji: 'kkyu', hiragana: 'っきゅ', katakana: 'ッキュ'},
        {romaji: 'kkyo', hiragana: 'っきょ', katakana: 'ッキョ'},
        {romaji: 'ssha', hiragana: 'っしゃ', katakana: 'ッシャ'},
        {romaji: 'sshu', hiragana: 'っしゅ', katakana: 'ッシュ'},
        {romaji: 'ssho', hiragana: 'っしょ', katakana: 'ッショ'},
        {romaji: 'ccha', hiragana: 'っちゃ', katakana: 'ッチャ'},
        {romaji: 'cchu', hiragana: 'っちゅ', katakana: 'ッチュ'},
        {romaji: 'ccho', hiragana: 'っちょ', katakana: 'ッチョ'},
        {romaji: 'hhya', hiragana: 'っひゃ', katakana: 'ッヒャ'},
        {romaji: 'hhyu', hiragana: 'っひゅ', katakana: 'ッヒュ'},
        {romaji: 'hhyo', hiragana: 'っひょ', katakana: 'ッヒョ'},
        {romaji: 'mmya', hiragana: 'っみゃ', katakana: 'ッミャ'},
        {romaji: 'mmyu', hiragana: 'っみゅ', katakana: 'ッミュ'},
        {romaji: 'mmyo', hiragana: 'っみょ', katakana: 'ッミョ'},
        {romaji: 'rrya', hiragana: 'っりゃ', katakana: 'ッリャ'},
        {romaji: 'rryu', hiragana: 'っりゅ', katakana: 'ッリュ'},
        {romaji: 'rryo', hiragana: 'っりょ', katakana: 'ッリョ'},
        {romaji: 'ggya', hiragana: 'っぎゃ', katakana: 'ッギャ'},
        {romaji: 'ggyu', hiragana: 'っぎゅ', katakana: 'ッギュ'},
        {romaji: 'ggyo', hiragana: 'っぎょ', katakana: 'ッギョ'},
        {romaji: 'jja', hiragana: 'っじゃ', katakana: 'ッジャ'},
        {romaji: 'jju', hiragana: 'っじゅ', katakana: 'ッジュ'},
        {romaji: 'jjo', hiragana: 'っじょ', katakana: 'ッジョ'},
        {romaji: 'bbya', hiragana: 'っびゃ', katakana: 'ッビャ'},
        {romaji: 'bbyu', hiragana: 'っびゅ', katakana: 'ッビュ'},
        {romaji: 'bbyo', hiragana: 'っびょ', katakana: 'ッビョ'},
        {romaji: 'ppya', hiragana: 'っぴゃ', katakana: 'ッピャ'},
        {romaji: 'ppyu', hiragana: 'っぴゅ', katakana: 'ッピュ'},
        {romaji: 'ppyo', hiragana: 'っぴょ', katakana: 'ッピョ'},
        {romaji: 'yye', hiragana: 'っいぇ', katakana: 'ッイェ'},
        {romaji: 'wwi', hiragana: 'っわぃ', katakana: 'ッウィ'},
        {romaji: 'wwe', hiragana: 'っわぇ', katakana: 'ッウェ'},
        {romaji: 'wwo', hiragana: 'っわぉ', katakana: 'ッウォ'},
        {romaji: 'vva', hiragana: 'っゔぁ', katakana: 'ッヴァ'},
        {romaji: 'vvi', hiragana: 'っゔぃ', katakana: 'ッヴィ'},
        {romaji: 'vve', hiragana: 'っゔぇ', katakana: 'ッヴェ'},
        {romaji: 'vvo', hiragana: 'っゔぉ', katakana: 'ッヴォ'},
        {romaji: 'ssi', hiragana: 'っすぃ', katakana: 'ッスィ'},
        {romaji: 'zzi', hiragana: 'っずぃ', katakana: 'ッズィ'},
        {romaji: 'sshe', hiragana: 'っしぇ', katakana: 'ッシェ'},
        {romaji: 'jje', hiragana: 'っじぇ', katakana: 'ッジェ'},
        {romaji: 'tti', hiragana: 'っとぃ', katakana: 'ッティ'},
        {romaji: 'ttu', hiragana: 'っとぅ', katakana: 'ットゥ'},
        {romaji: 'ddi', hiragana: 'っでぅ', katakana: 'ッディ'},
        {romaji: 'ddu', hiragana: 'っどぅ', katakana: 'ッドゥ'},
        {romaji: 'ttsa', hiragana: 'っつぁ', katakana: 'ッツァ'},
        {romaji: 'ttsi', hiragana: 'っつぃ', katakana: 'ッツィ'},
        {romaji: 'ttse', hiragana: 'っつぇ', katakana: 'ッツェ'},
        {romaji: 'ttso', hiragana: 'っつぉ', katakana: 'ッツォ'},
        {romaji: 'ffa', hiragana: 'っふぁ', katakana: 'ッファ'},
        {romaji: 'ffi', hiragana: 'っふぃ', katakana: 'ッフィ'},
        {romaji: 'ffe', hiragana: 'っふぇ', katakana: 'ッフェ'},
        {romaji: 'ffo', hiragana: 'っふぉ', katakana: 'ッフォ'},
        {romaji: 'ffyu', hiragana: 'っふゅ', katakana: 'ッフュ'},
        {romaji: 'hhye', hiragana: 'っひぇ', katakana: 'ッヒェ'},
        {romaji: 'kya', hiragana: 'きゃ', katakana: 'キャ'},
        {romaji: 'kyu', hiragana: 'きゅ', katakana: 'キュ'},
        {romaji: 'kyo', hiragana: 'きょ', katakana: 'キョ'},
        {romaji: 'sha', hiragana: 'しゃ', katakana: 'シャ'},
        {romaji: 'shu', hiragana: 'しゅ', katakana: 'シュ'},
        {romaji: 'sho', hiragana: 'しょ', katakana: 'ショ'},
        {romaji: 'cha', hiragana: 'ちゃ', katakana: 'チャ'},
        {romaji: 'chu', hiragana: 'ちゅ', katakana: 'チュ'},
        {romaji: 'cho', hiragana: 'ちょ', katakana: 'チョ'},
        {romaji: 'nya', hiragana: 'にゃ', katakana: 'ニャ'},
        {romaji: 'nyu', hiragana: 'にゅ', katakana: 'ニュ'},
        {romaji: 'nyo', hiragana: 'にょ', katakana: 'ニョ'},
        {romaji: 'hya', hiragana: 'ひゃ', katakana: 'ヒャ'},
        {romaji: 'hyu', hiragana: 'ひゅ', katakana: 'ヒュ'},
        {romaji: 'hyo', hiragana: 'ひょ', katakana: 'ヒョ'},
        {romaji: 'mya', hiragana: 'みゃ', katakana: 'ミャ'},
        {romaji: 'myu', hiragana: 'みゅ', katakana: 'ミュ'},
        {romaji: 'myo', hiragana: 'みょ', katakana: 'ミョ'},
        {romaji: 'rya', hiragana: 'りゃ', katakana: 'リャ'},
        {romaji: 'ryu', hiragana: 'りゅ', katakana: 'リュ'},
        {romaji: 'ryo', hiragana: 'りょ', katakana: 'リョ'},
        {romaji: 'gya', hiragana: 'ぎゃ', katakana: 'ギャ'},
        {romaji: 'gyu', hiragana: 'ぎゅ', katakana: 'ギュ'},
        {romaji: 'gyo', hiragana: 'ぎょ', katakana: 'ギョ'},
        {romaji: 'ja', hiragana: 'じゃ', katakana: 'ジャ'},
        {romaji: 'ju', hiragana: 'じゅ', katakana: 'ジュ'},
        {romaji: 'jo', hiragana: 'じょ', katakana: 'ジョ'},
        {romaji: 'bya', hiragana: 'びゃ', katakana: 'ビャ'},
        {romaji: 'byu', hiragana: 'びゅ', katakana: 'ビュ'},
        {romaji: 'byo', hiragana: 'びょ', katakana: 'ビョ'},
        {romaji: 'pya', hiragana: 'ぴゃ', katakana: 'ピャ'},
        {romaji: 'pyu', hiragana: 'ぴゅ', katakana: 'ピュ'},
        {romaji: 'pyo', hiragana: 'ぴょ', katakana: 'ピョ'},
        {romaji: 'ye', hiragana: 'いぇ', katakana: 'イェ'},
        {romaji: 'wi', hiragana: 'わぃ', katakana: 'ウィ'},
        {romaji: 'we', hiragana: 'わぇ', katakana: 'ウェ'},
        {romaji: 'wo', hiragana: 'わぉ', katakana: 'ウォ'},
        {romaji: 'va', hiragana: 'ゔぁ', katakana: 'ヴァ'},
        {romaji: 'vi', hiragana: 'ゔぃ', katakana: 'ヴィ'},
        {romaji: 've', hiragana: 'ゔぇ', katakana: 'ヴェ'},
        {romaji: 'vo', hiragana: 'ゔぉ', katakana: 'ヴォ'},
        {romaji: 'si', hiragana: 'すぃ', katakana: 'スィ'},
        {romaji: 'zi', hiragana: 'ずぃ', katakana: 'ズィ'},
        {romaji: 'she', hiragana: 'しぇ', katakana: 'シェ'},
        {romaji: 'je', hiragana: 'じぇ', katakana: 'ジェ'},
        {romaji: 'ti', hiragana: 'とぃ', katakana: 'ティ'},
        {romaji: 'tu', hiragana: 'とぅ', katakana: 'トゥ'},
        {romaji: 'di', hiragana: 'でぅ', katakana: 'ディ'},
        {romaji: 'du', hiragana: 'どぅ', katakana: 'ドゥ'},
        {romaji: 'tsa', hiragana: 'つぁ', katakana: 'ツァ'},
        {romaji: 'tsi', hiragana: 'つぃ', katakana: 'ツィ'},
        {romaji: 'tse', hiragana: 'つぇ', katakana: 'ツェ'},
        {romaji: 'tso', hiragana: 'つぉ', katakana: 'ツォ'},
        {romaji: 'fa', hiragana: 'ふぁ', katakana: 'ファ'},
        {romaji: 'fi', hiragana: 'ふぃ', katakana: 'フィ'},
        {romaji: 'fe', hiragana: 'ふぇ', katakana: 'フェ'},
        {romaji: 'fo', hiragana: 'ふぉ', katakana: 'フォ'},
        {romaji: 'fyu', hiragana: 'ふゅ', katakana: 'フュ'},
        {romaji: 'hye', hiragana: 'ひぇ', katakana: 'ヒェ'},
        {romaji: 'kka', hiragana: 'っか', katakana: 'ッカ'},
        {romaji: 'kki', hiragana: 'っき', katakana: 'ッキ'},
        {romaji: 'kku', hiragana: 'っく', katakana: 'ック'},
        {romaji: 'kke', hiragana: 'っけ', katakana: 'ッケ'},
        {romaji: 'kko', hiragana: 'っこ', katakana: 'ッコ'},
        {romaji: 'ssa', hiragana: 'っさ', katakana: 'ッサ'},
        {romaji: 'sshi', hiragana: 'っし', katakana: 'ッシ'},
        {romaji: 'ssu', hiragana: 'っす', katakana: 'ッス'},
        {romaji: 'sse', hiragana: 'っせ', katakana: 'ッセ'},
        {romaji: 'sso', hiragana: 'っそ', katakana: 'ッソ'},
        {romaji: 'tta', hiragana: 'った', katakana: 'ッタ'},
        {romaji: 'cchi', hiragana: 'っち', katakana: 'ッチ'},
        {romaji: 'ttsu', hiragana: 'っつ', katakana: 'ッツ'},
        {romaji: 'tte', hiragana: 'って', katakana: 'ッテ'},
        {romaji: 'tto', hiragana: 'っと', katakana: 'ット'},
        {romaji: 'hha', hiragana: 'っは', katakana: 'ッハ'},
        {romaji: 'hhi', hiragana: 'っひ', katakana: 'ッヒ'},
        {romaji: 'ffu', hiragana: 'っふ', katakana: 'ッフ'},
        {romaji: 'hhe', hiragana: 'っへ', katakana: 'ッヘ'},
        {romaji: 'hho', hiragana: 'っほ', katakana: 'ッホ'},
        {romaji: 'mma', hiragana: 'っま', katakana: 'ッマ'},
        {romaji: 'mmi', hiragana: 'っみ', katakana: 'ッミ'},
        {romaji: 'mmu', hiragana: 'っむ', katakana: 'ッム'},
        {romaji: 'mme', hiragana: 'っめ', katakana: 'ッメ'},
        {romaji: 'mmo', hiragana: 'っも', katakana: 'ッモ'},
        {romaji: 'yya', hiragana: 'っや', katakana: 'ッヤ'},
        {romaji: 'yyu', hiragana: 'っゆ', katakana: 'ッユ'},
        {romaji: 'yyo', hiragana: 'っよ', katakana: 'ッヨ'},
        {romaji: 'rra', hiragana: 'っら', katakana: 'ッラ'},
        {romaji: 'rri', hiragana: 'っり', katakana: 'ッリ'},
        {romaji: 'rru', hiragana: 'っる', katakana: 'ッル'},
        {romaji: 'rre', hiragana: 'っれ', katakana: 'ッレ'},
        {romaji: 'rro', hiragana: 'っろ', katakana: 'ッロ'},
        {romaji: 'wwa', hiragana: 'っわ', katakana: 'ッワ'},
        {romaji: 'wwi', hiragana: 'っゐ', katakana: 'ッヰ'},
        {romaji: 'wwe', hiragana: 'っゑ', katakana: 'ッヱ'},
        {romaji: 'wwo', hiragana: 'っを', katakana: 'ッヲ'},
        {romaji: 'gga', hiragana: 'っが', katakana: 'ッガ'},
        {romaji: 'ggi', hiragana: 'っぎ', katakana: 'ッギ'},
        {romaji: 'ggu', hiragana: 'っぐ', katakana: 'ッグ'},
        {romaji: 'gge', hiragana: 'っげ', katakana: 'ッゲ'},
        {romaji: 'ggo', hiragana: 'っご', katakana: 'ッゴ'},
        {romaji: 'zza', hiragana: 'っざ', katakana: 'ッザ'},
        {romaji: 'jji', hiragana: 'っじ', katakana: 'ッジ'},
        {romaji: 'zzu', hiragana: 'っず', katakana: 'ッズ'},
        {romaji: 'zze', hiragana: 'っぜ', katakana: 'ッゼ'},
        {romaji: 'zzo', hiragana: 'っぞ', katakana: 'ッゾ'},
        {romaji: 'dda', hiragana: 'っだ', katakana: 'ッダ'},
        {romaji: 'jji', hiragana: 'っぢ', katakana: 'ッヂ'},
        {romaji: 'ddzu', hiragana: 'っづ', katakana: 'ッヅ'},
        {romaji: 'dde', hiragana: 'っで', katakana: 'ッデ'},
        {romaji: 'ddo', hiragana: 'っど', katakana: 'ッド'},
        {romaji: 'bba', hiragana: 'っば', katakana: 'ッバ'},
        {romaji: 'bbi', hiragana: 'っび', katakana: 'ッビ'},
        {romaji: 'bbu', hiragana: 'っぶ', katakana: 'ッブ'},
        {romaji: 'bbe', hiragana: 'っべ', katakana: 'ッベ'},
        {romaji: 'bbo', hiragana: 'っぼ', katakana: 'ッボ'},
        {romaji: 'ppa', hiragana: 'っぱ', katakana: 'ッパ'},
        {romaji: 'ppi', hiragana: 'っぴ', katakana: 'ッパ'},
        {romaji: 'ppu', hiragana: 'っぷ', katakana: 'ップ'},
        {romaji: 'ppe', hiragana: 'っぺ', katakana: 'ッペ'},
        {romaji: 'ppo', hiragana: 'っぽ', katakana: 'ッポ'},
        {romaji: 'vvu', hiragana: 'っゔ', katakana: 'ッヴ'},
        {romaji: 'a', hiragana: 'あ', katakana: 'ア'},
        {romaji: 'i', hiragana: 'い', katakana: 'イ'},
        {romaji: 'u', hiragana: 'う', katakana: 'ウ'},
        {romaji: 'e', hiragana: 'え', katakana: 'エ'},
        {romaji: 'o', hiragana: 'お', katakana: 'オ'},
        {romaji: 'ka', hiragana: 'か', katakana: 'カ'},
        {romaji: 'ki', hiragana: 'き', katakana: 'キ'},
        {romaji: 'ku', hiragana: 'く', katakana: 'ク'},
        {romaji: 'ke', hiragana: 'け', katakana: 'ケ'},
        {romaji: 'ko', hiragana: 'こ', katakana: 'コ'},
        {romaji: 'sa', hiragana: 'さ', katakana: 'サ'},
        {romaji: 'shi', hiragana: 'し', katakana: 'シ'},
        {romaji: 'su', hiragana: 'す', katakana: 'ス'},
        {romaji: 'se', hiragana: 'せ', katakana: 'セ'},
        {romaji: 'so', hiragana: 'そ', katakana: 'ソ'},
        {romaji: 'ta', hiragana: 'た', katakana: 'タ'},
        {romaji: 'chi', hiragana: 'ち', katakana: 'チ'},
        {romaji: 'tsu', hiragana: 'つ', katakana: 'ツ'},
        {romaji: 'te', hiragana: 'て', katakana: 'テ'},
        {romaji: 'to', hiragana: 'と', katakana: 'ト'},
        {romaji: 'na', hiragana: 'な', katakana: 'ナ'},
        {romaji: 'ni', hiragana: 'に', katakana: 'ニ'},
        {romaji: 'nu', hiragana: 'ぬ', katakana: 'ヌ'},
        {romaji: 'ne', hiragana: 'ね', katakana: 'ネ'},
        {romaji: 'no', hiragana: 'の', katakana: 'ノ'},
        {romaji: 'ha', hiragana: 'は', katakana: 'ハ'},
        {romaji: 'hi', hiragana: 'ひ', katakana: 'ヒ'},
        {romaji: 'fu', hiragana: 'ふ', katakana: 'フ'},
        {romaji: 'he', hiragana: 'へ', katakana: 'ヘ'},
        {romaji: 'ho', hiragana: 'ほ', katakana: 'ホ'},
        {romaji: 'ma', hiragana: 'ま', katakana: 'マ'},
        {romaji: 'mi', hiragana: 'み', katakana: 'ミ'},
        {romaji: 'mu', hiragana: 'む', katakana: 'ム'},
        {romaji: 'me', hiragana: 'め', katakana: 'メ'},
        {romaji: 'mo', hiragana: 'も', katakana: 'モ'},
        {romaji: 'ya', hiragana: 'や', katakana: 'ヤ'},
        {romaji: 'yu', hiragana: 'ゆ', katakana: 'ユ'},
        {romaji: 'yo', hiragana: 'よ', katakana: 'ヨ'},
        {romaji: 'ra', hiragana: 'ら', katakana: 'ラ'},
        {romaji: 'ri', hiragana: 'り', katakana: 'リ'},
        {romaji: 'ru', hiragana: 'る', katakana: 'ル'},
        {romaji: 're', hiragana: 'れ', katakana: 'レ'},
        {romaji: 'ro', hiragana: 'ろ', katakana: 'ロ'},
        {romaji: 'wa', hiragana: 'わ', katakana: 'ワ'},
        {romaji: 'wi', hiragana: 'ゐ', katakana: 'ヰ'},
        {romaji: 'we', hiragana: 'ゑ', katakana: 'ヱ'},
        {romaji: 'wo', hiragana: 'を', katakana: 'ヲ'},
        {romaji: 'n', hiragana: 'ん', katakana: 'ン'},
        {romaji: 'ga', hiragana: 'が', katakana: 'ガ'},
        {romaji: 'gi', hiragana: 'ぎ', katakana: 'ギ'},
        {romaji: 'gu', hiragana: 'ぐ', katakana: 'グ'},
        {romaji: 'ge', hiragana: 'げ', katakana: 'ゲ'},
        {romaji: 'go', hiragana: 'ご', katakana: 'ゴ'},
        {romaji: 'za', hiragana: 'ざ', katakana: 'ザ'},
        {romaji: 'ji', hiragana: 'じ', katakana: 'ジ'},
        {romaji: 'zu', hiragana: 'ず', katakana: 'ズ'},
        {romaji: 'ze', hiragana: 'ぜ', katakana: 'ゼ'},
        {romaji: 'zo', hiragana: 'ぞ', katakana: 'ゾ'},
        {romaji: 'da', hiragana: 'だ', katakana: 'ダ'},
        {romaji: 'ji', hiragana: 'ぢ', katakana: 'ヂ'},
        {romaji: 'dzu', hiragana: 'づ', katakana: 'ヅ'},
        {romaji: 'de', hiragana: 'で', katakana: 'デ'},
        {romaji: 'do', hiragana: 'ど', katakana: 'ド'},
        {romaji: 'ba', hiragana: 'ば', katakana: 'バ'},
        {romaji: 'bi', hiragana: 'び', katakana: 'ビ'},
        {romaji: 'bu', hiragana: 'ぶ', katakana: 'ブ'},
        {romaji: 'be', hiragana: 'べ', katakana: 'ベ'},
        {romaji: 'bo', hiragana: 'ぼ', katakana: 'ボ'},
        {romaji: 'pa', hiragana: 'ぱ', katakana: 'パ'},
        {romaji: 'pi', hiragana: 'ぴ', katakana: 'パ'},
        {romaji: 'pu', hiragana: 'ぷ', katakana: 'プ'},
        {romaji: 'pe', hiragana: 'ぺ', katakana: 'ペ'},
        {romaji: 'po', hiragana: 'ぽ', katakana: 'ポ'},
        {romaji: 'vu', hiragana: 'ゔ', katakana: 'ヴ'},
        {romaji: ',', hiragana: '、', katakana: '、'},
        {romaji: '.', hiragana: '。', katakana: '。'}
    ]

	// https://codereview.stackexchange.com/questions/111480/three-way-conversion-between-japanese-writing-systems