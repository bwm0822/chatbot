models = [
    {
        "title": "llama3.2",
        "content": "llama3.2"
    },
    {
        "title": "gemma3:4b",
        "content": "gemma3:4b"
    },
    {
        "title": "mistral",
        "content": "mistral"
    },
    {
        "title": "deepseek-r1:7b",
        "content": "deepseek-r1:7b"
    },
]

function getPrompts()
{
    let prompts=[{title:'聊天', content: "你是一個性感風騷、溫柔體貼的女僕，用繁中回答"}];
    sets.forEach((set) => {
        prompts.push({
            "title": set.title,
            "content": [
                {
                    "title": `複習`,
                    "content": prompt_review(set.content)
                },
                {
                    "title": `對話`,
                    "content": prompt_dialog(set.content)
                }
            ]
        });
    });
    return prompts;
}

function prompt_review(content)
{
    return `
        你是一位英文老師，你要幫學生複習以下的的單字/例句，
        一次只列出一個單字/例句，不要全部列出，依序列出，
        內容要有:
            單字 (單字中文翻譯)
            例句 例句中文翻譯
        要跟複習的內容一模一樣，不得作任何修改，也不要加任何說明文字。

        ${content}

        1.請參考範例:
            範例:
            單字號碼. 單字 (單字中文翻譯)
                        例句 例句中文翻譯
    `;
}


function prompt_dialog(content)
{
    return `
        你是一個英文老師，你在跟一個小學生練習英文對話。
        請用小學生程度的英文問問題，不要使用太難的單字，也不要用太長的句子。
        讓他們可以用以下的單字來回答問題:

        ${content}

        `;
}




sets = [
  {
    "title": "冬季活動",
    "content": `
    1. sledding (滑雪橇)  
        I like sledding. 我喜歡滑雪橇。
    2. skating (溜冰)  
        She loves skating in the winter. 她喜歡在冬天溜冰。
    3. before (在...之前)  
        We should eat before we go. 我們應該在出發前吃飯。
    4. practice (練習)  
        He practices playing the piano every day. 他每天練習彈鋼琴。
    5. karate (空手道)  
        I want to learn karate. 我想學空手道。
    6. partner (夥伴)  
        She is my partner in the game. 她是我在遊戲中的夥伴。
    7. ski (滑雪)  
        We will go skiing in the mountains. 我們將去山上滑雪。
    8. snowboard (單板滑雪)  
        Snowboarding is so much fun. 單板滑雪非常有趣。
    9. student (學生)  
        The student is reading a book. 那位學生正在讀書。
    10. study (學習)  
        I need to study for the test. 我需要為測驗學習。
    11. swing (秋千)  
        She is playing on the swing. 她在玩秋千。
    12. yesterday (昨天)  
        Yesterday was a great day. 昨天是個很棒的日子。
    13. beach (海灘)  
        We are going to the beach. 我們要去海灘。
    14. lightning (閃電)  
        There was lightning during the storm. 在暴風雨中有閃電。
    15. thunder (雷聲)  
        I am afraid of thunder. 我害怕雷聲。
    16. hat (帽子)  
        He is wearing a red hat. 他戴著一頂紅色的帽子。
    17. swim trunks (泳褲)  
        I need to buy swim trunks for the beach. 我需要為海灘買泳褲。
    18. swimsuit (泳衣)  
        She wore a new swimsuit to the pool. 她穿著新泳衣去游泳池。
    19. sand (沙子)  
        The sand is very warm. 沙子很溫暖。
    20. pants (褲子)  
        I need to buy new pants. 我需要買新褲子。
    21. ocean (海洋)  
        The ocean is very beautiful. 海洋非常美麗。
    22. shorts (短褲)  
        He is wearing shorts today. 他今天穿著短褲。
    23. favorite (最喜歡的)  
        Pizza is my favorite food. 比薩是我最喜歡的食物。
    24. zookeeper (動物園管理員)  
        The zookeeper feeds the animals every day. 動物園管理員每天餵食動物。
    
    範例:
    1. sledding (滑雪橇)  
        I like sledding. 我喜歡滑雪橇。
    `
  },
  {
    "title": "天氣與自然",
    "content": `
    1. breeze (微風)  
        There is a nice breeze today. 今天有一陣宜人的微風。
    2. breezy (有微風的)  
        It is a breezy day at the beach. 今天海灘上有微風。
    3. storm (暴風雨)  
        A storm is coming tonight. 一場暴風雨今晚將來臨。
    4. stormy (暴風雨的)  
        The weather is stormy this afternoon. 今天下午天氣暴風雨。
    5. weather (天氣)  
        The weather is hot today. 今天的天氣很熱。
    6. warm (溫暖的)  
        It is a warm day. 今天是個溫暖的日子。
    7. store (商店)  
        I will go to the store later. 我待會要去商店。
    8. tree (樹)  
        The tree is tall. 那棵樹很高。
    9. great big rock (大石頭)  
        There is a great big rock in the park. 公園裡有一塊大石頭。
    10. here (這裡)  
        I am here at the park. 我在公園這裡。
    11. fog (霧)  
        The fog is thick today. 今天霧很濃。
    12. foggy (有霧的)  
        It is foggy in the morning. 早上有霧。
    13. chill (寒冷)  
        There is a chill in the air. 空氣中有一股寒冷感。
    14. chilly (寒冷的)  
        It is chilly outside. 外面很冷。
    15. hooray (好極了)  
        Hooray! We won the game! 好極了！我們贏了比賽！
    16. cloud (雲)  
        The cloud is white and fluffy. 雲朵是白色且蓬鬆的。
    17. cloudy (多雲的)  
        The sky is cloudy today. 今天的天空多雲。
    18. rain (雨)  
        I don't like the rain. 我不喜歡下雨。
    19. rainy (下雨的)  
        It is rainy this morning. 今天早上下雨了。
    20. where (在哪裡)  
        Where is the nearest store? 最近的商店在哪裡？
    21. how (如何)  
        How are you today? 你今天怎麼樣？
    22. what (什麼)  
        What is your name? 你叫什麼名字？
    23. who (誰)  
        Who is that person? 那個人是誰？
    
    範例:
    1. breeze (微風)  
        There is a nice breeze today. 今天有一陣宜人的微風。
    `
  },
  {
    "title": "四季與日常",
    "content": `
    1. spring (春天)  
        Spring is my favorite season. 春天是我最喜歡的季節。
    2. summer (夏天)  
        Summer is hot and sunny. 夏天又熱又陽光明媚。
    3. fall (秋天)  
        Fall is when the leaves change color. 秋天是樹葉變色的時候。
    4. winter (冬天)  
        Winter is cold and snowy. 冬天又冷又下雪。
    5. season (季節)  
        There are four seasons in a year. 一年有四個季節。
    6. breezy (有微風的)  
        It is a breezy day. 今天有微風。
    7. circus (馬戲團)  
        We went to the circus last night. 我們昨晚去了馬戲團。
    8. restaurant (餐廳)  
        I like to eat at the restaurant. 我喜歡在餐廳吃飯。
    9. theater (劇院)  
        Let's go to the theater to watch a movie. 我們去劇院看電影吧。
    10. yesterday (昨天)  
        Yesterday was a busy day. 昨天是忙碌的一天。
    11. airport (機場)  
        We will meet at the airport. 我們會在機場見面。
    12. hospital (醫院)  
        She is in the hospital. 她在醫院。
    13. library (圖書館)  
        I borrowed a book from the library. 我從圖書館借了一本書。
    14. mall (購物中心)  
        We went shopping at the mall. 我們在購物中心購物。
    15. amusement park (遊樂園)  
        The amusement park is fun! 遊樂園很好玩！
    
    範例:
    1. spring (春天)  
        Spring is my favorite season. 春天是我最喜歡的季節。
    `
  },
  {
    "title": "動物與活動",
    "content": `
    1. nest (巢)  
        The bird built a nest in the tree. 那隻鳥在樹上築了巢。
    2. sloth (樹懶)  
        A sloth moves very slowly. 樹懶移動非常慢。
    3. popcorn (爆米花)  
        We eat popcorn while watching movies. 我們在看電影時吃爆米花。
    4. snail (蝸牛)  
        The snail is moving slowly. 那隻蝸牛在慢慢爬行。
    5. bite (咬)  
        The dog bit the ball. 狗咬了球。
    6. pet (寵物)  
        I have a pet cat. 我有一隻寵物貓。
    7. snowflake (雪花)  
        Each snowflake is unique. 每一片雪花都是獨一無二的。
    8. roller skating (溜直排輪)  
        She loves roller skating in the park. 她喜歡在公園裡溜直排輪。
    9. ice skating (溜冰)  
        Ice skating is fun in the winter. 冬天溜冰很好玩。
    10. branch (樹枝)  
        The bird is sitting on the branch. 鳥正坐在樹枝上。
    11. tree (樹)  
        The tree is tall and green. 那棵樹又高又綠。
    12. leaf (葉子)  
        The leaf turned yellow in the fall. 這片葉子在秋天變黃了。
    13. flower (花)  
        The flowers are blooming in the garden. 花在花園裡開放。
    
    範例:
    1. nest (巢)  
        The bird built a nest in the tree. 那隻鳥在樹上築了巢。
    `
  },
  {
    "title": "方位與疑問",
    "content": `
    1. there (那裡)  
        There is a park nearby. 那裡有個公園。
    2. these (這些)  
        These are my books. 這些是我的書。
    3. those (那些)  
        Those are my shoes. 那些是我的鞋子。
    4. far (遠)  
        The store is far from here. 商店離這裡很遠。
    5. near (近)  
        The school is near my house. 學校離我家很近。
    6. here (這裡)  
        I am here at the park. 我在公園這裡。
    7. where (在哪裡)  
        Where is the nearest store? 最近的商店在哪裡？
    8. how (如何)  
        How are you today? 你今天怎麼樣？
    9. what (什麼)  
        What is your name? 你叫什麼名字？
    10. who (誰)  
        Who is that person? 那個人是誰？
    11. which (哪一個)  
        Which one do you want? 你想要哪一個？
    12. why (為什麼)  
        Why are you sad? 你為什麼難過？
    13. when (何時)  
        When is your birthday? 你的生日是何時？
    14. how many (多少)  
        How many apples do you have? 你有多少顆蘋果？
    15. how much (多少錢)  
        How much is this shirt? 這件襯衫多少錢？
    16. how old (幾歲)  
        How old are you? 你幾歲了？
    17. how long (多久)  
        How long does it take to get there? 到那裡要多久？
    18. how often (多常)  
        How often do you go to the gym? 你多久去一次健身房？
    19. how far (多遠)  
        How far is it from here to the store? 從這裡到商店有多遠？
    20. how big (多大)  
        How big is your house? 你的房子有多大？
    
    範例:
    1. there (那裡)  
        There is a park nearby. 那裡有個公園。
    `
  },
  {
    "title": "家庭與居家",
    "content": `
    1. bathroom (浴室)  
        I need to go to the bathroom. 我需要去浴室。
    2. bedroom (臥室)  
        My bedroom is upstairs. 我的臥室在樓上。
    3. dining room (餐廳)  
        We eat dinner in the dining room. 我們在餐廳吃晚餐。
    4. garage (車庫)  
        The car is in the garage. 車子停在車庫裡。
    5. kitchen (廚房)  
        She is cooking in the kitchen. 她在廚房做飯。
    6. bathtub (浴缸)  
        I like to relax in the bathtub. 我喜歡在浴缸裡放鬆。
    7. dining table (餐桌)  
        The dining table is made of wood. 餐桌是木製的。
    8. dining chair (餐椅)  
        We have six dining chairs. 我們有六把餐椅。
    9. refrigerator (冰箱)  
        The food is in the refrigerator. 食物在冰箱裡。
    10. fridge (冰箱)  
        The fridge is very cold. 冰箱非常冷。
    
    範例:
    1. bathroom (浴室)  
        I need to go to the bathroom. 我需要去浴室。
    `
  },
  {
    "title": "生活用品與家居",
    "content": `
    1. scooter (滑板車)  
        He rides a scooter to school. 他騎滑板車上學。
    2. look for (尋找)  
        She is looking for her keys. 她在尋找她的鑰匙。
    3. find (找到)  
        I found my lost wallet. 我找到了丟失的錢包。
    4. hope (希望)  
        I hope to see you soon. 我希望很快見到你。
    5. toilet (馬桶)  
        The toilet is in the bathroom. 馬桶在浴室裡。
    6. sink (水槽)  
        The sink is next to the stove. 水槽在爐子旁邊。
    7. fork (叉子)  
        I need a fork to eat. 我需要一把叉子來吃東西。
    8. spoon (湯匙)  
        Use a spoon to eat the soup. 用湯匙來吃湯。
    9. plate (盤子)  
        The plate is on the table. 盤子在桌子上。
    10. living room (客廳)  
        We watch TV in the living room. 我們在客廳看電視。
    11. sofa (沙發)  
        The sofa is very comfortable. 沙發非常舒服。
    12. couch (沙發)  
        I like to nap on the couch. 我喜歡在沙發上打瞌睡。
    13. armchair (扶手椅)  
        The armchair is next to the window. 扶手椅在窗戶旁邊。
    14. television (電視)  
        We watch television every night. 我們每晚看電視。
    15. TV (電視)  
        The TV is broken. 電視壞了。
    16. lamp (燈)  
        The lamp is on the table. 燈在桌子上。
    17. light (燈光)  
        Turn off the light before bed. 睡覺前關掉燈。
    18. window (窗戶)  
        The window is open. 窗戶打開了。
    19. curtain (窗簾)  
        The curtain is blue. 窗簾是藍色的。
    20. door (門)  
        The door is closed. 門是關著的。
    
    範例:
    1. scooter (滑板車)  
        He rides a scooter to school. 他騎滑板車上學。
    `
  }
]