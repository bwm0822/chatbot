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

function getPrompts_old()
{
    // let prompts=[{title:'聊天', content: "你是一個性感風騷、溫柔體貼的女僕，用繁中回答"}];
    let prompts=[{title:'聊天', content: "你是一個可愛風趣的語音助理-小雯，用繁中回答"}];
    sets.forEach((set) => {
        prompts.push({
            "title": set.title,
            "content": [
                {
                    "title": `複習`,
                    "content": prompt_review(set.content)
                },
                {
                    "title": `測驗`,
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

async function getPrompts() {
    try {
        const response = await fetch('words.json');
        const data = await response.json();

        let words = data;
        let prompts = [
            { title: '聊天', content: "你是一個可愛風趣的語音助理-小雯，用繁中回答" }
        ];

        words.forEach((set) => {
            prompts.push({
                "title": set.title,
                "content": [
                    {
                        "title": `複習`,
                        // "content": prompt_review(set.content)
                        "content": set.content
                    },
                    {
                        "title": `測驗`,
                        // "content": prompt_review(set.content)
                        "content": set.content
                    },
                    // {
                    //     "title": `對話`,
                    //     "content": prompt_dialog(set.content)
                    // }
                ]
            });
        });

        return prompts;
    } catch (error) {
        console.error('哎呀，讀取失敗了呢：', error);
        return []; // 出錯時回傳空陣列
    }
}


function prompt_review(content)
{
    return `
        你是一位英文老師，你要幫學生複習以下的的單字/例句，
        1. 從頭依序列出來，一次只列出一個單字+1-2例句，不要一次列出所有的。
        2. 內容不要作任何修改，也不要加任何說明文字。
            單字 (單字中文翻譯)
            例句 例句中文翻譯

        ${content}
    `;
}


function prompt_dialog(content)
{
    return `
        你是一個英文老師，要跟一個小學生練習英文對話。
        1. 請用小學生程度的英文問問題。
        2. 不要出現中文，不要使用太難的單字，也不要用太長的句子。
        3. 讓他們可以用以下的單字來回答問題。

        ${content}

        `;
}



let sets = 
[
    {
        "title": "冬日活動與學習時光",
        "content": `
            1. sledding (滑雪橇)  
            I like sledding. 我喜歡滑雪橇。

            2. skating (滑冰)  
            She is skating on the ice. 她正在冰上滑冰。

            3. before (之前)  
            I ate lunch before school. 我在上學前吃了午餐。

            4. practice (練習)  
            We practice karate every day. 我們每天練習空手道。

            5. karate (空手道)  
            He is good at karate. 他很擅長空手道。

            6. partner (夥伴)  
            My karate partner is very strong. 我的空手道夥伴很強壯。

            7. ski (滑雪)  
            They ski in the mountains. 他們在山上滑雪。

            8. snowboard (滑雪板)  
            I like to snowboard with my friends. 我喜歡和朋友一起滑雪板。

            9. student (學生)  
            She is a good student. 她是一個好學生。

            10. study (讀書)  
                I study English every night. 我每晚讀英文。

            11. swing (盪鞦韆)  
                We swing at the playground. 我們在遊樂場盪鞦韆。

            12. yesterday (昨天)  
                I went to the beach yesterday. 我昨天去了海邊。

            13. beach (海灘)  
                The beach is fun. 海灘很好玩。

            14. lightning (閃電)  
                I saw lightning in the sky. 我看到天空有閃電。

            15. thunder (雷聲)  
                Thunder is loud. 雷聲很大。

            16. hat (帽子)  
                I wear a hat on sunny days. 晴天我會戴帽子。

            17. swim trunks (泳褲)  
                He wears swim trunks to the pool. 他穿著泳褲去游泳池。

            18. swimsuit (泳裝)  
                She has a pink swimsuit. 她有一件粉紅色的泳裝。

            19. sand (沙子)  
                We played in the sand. 我們在沙子裡玩。

            20. pants (長褲)  
                I wear pants in winter. 我冬天穿長褲。

            21. ocean (海洋)  
                The ocean is very big. 海洋非常大。

            22. shorts (短褲)  
                He wears shorts in summer. 他夏天穿短褲。

            23. favorite (最喜歡的)  
                Ice cream is my favorite snack. 冰淇淋是我最喜歡的點心。

            24. zookeeper (動物園管理員)  
                The zookeeper feeds the lions. 動物園管理員餵獅子。
            `
    },
    {
        "title": "天氣與自然現象",
        "content": `
            1. breeze (微風)  
            A breeze is blowing. 有微風吹來。

            2. breezy (有微風的)  
            Today is a breezy day. 今天是有微風的一天。

            3. storm (暴風雨)  
            The storm is coming. 暴風雨要來了。

            4. stormy (暴風雨的)  
            It’s a stormy night. 今晚有暴風雨。

            5. weather (天氣)  
            The weather is nice today. 今天天氣很好。

            6. warm (溫暖的)  
            This jacket is warm. 這件外套很溫暖。

            7. store (商店)  
            I go to the store with my mom. 我和媽媽一起去商店。

            8. tree (樹)  
            There is a big tree in the yard. 院子裡有一棵大樹。

            9. great big rock (超大的岩石)  
            We sat on a great big rock. 我們坐在一塊超大的岩石上。

            10. here (這裡)  
                I am here. 我在這裡。

            11. fog (霧)  
                The fog is thick. 霧很濃。

            12. foggy (有霧的)  
                It’s foggy this morning. 今天早上有霧。

            13. chill (寒意)  
                I feel a chill. 我覺得有點冷。

            14. chilly (寒冷的)  
                It’s chilly outside. 外面很冷。

            15. hooray (萬歲)  
                Hooray! We won! 萬歲！我們贏了！

            16. cloud (雲)  
                That cloud looks like a bunny. 那朵雲看起來像兔子。

            17. cloudy (多雲的)  
                It’s cloudy today. 今天多雲。

            18. rain (雨)  
                The rain is falling. 雨正在下。

            19. rainy (下雨的)  
                It’s a rainy afternoon. 這是一個下雨的下午。

            20. where (哪裡)  
                Where are you? 你在哪裡？

            21. how (如何)  
                How do you do that? 你怎麼做到的？

            22. what (什麼)  
                What is this? 這是什麼？

            23. who (誰)  
                Who is calling me? 誰在叫我？
            `
    },
    {
        "title": "四季與常見場所",
        "content": `
            1. spring (春天)  
            Flowers bloom in spring. 春天花朵盛開。

            2. summer (夏天)  
            We go swimming in summer. 我們夏天去游泳。

            3. fall (秋天)  
            Leaves fall in fall. 秋天落葉飄落。

            4. winter (冬天)  
            It snows in winter. 冬天會下雪。

            5. season (季節)  
            There are four seasons. 有四個季節。

            6. breezy (有微風的)  
            It’s a breezy afternoon. 這是一個有微風的午後。

            7. circus (馬戲團)  
            We saw a circus show. 我們看了一場馬戲表演。

            8. restaurant (餐廳)  
            We eat at a restaurant. 我們在餐廳吃飯。

            9. theater (戲院)  
            The movie theater is big. 電影院很大。

            10. yesterday (昨天)  
                I saw a play yesterday. 我昨天看了一齣戲。

            11. airport (機場)  
                We went to the airport. 我們去了機場。

            12. hospital (醫院)  
                He is in the hospital. 他在醫院。

            13. library (圖書館)  
                I read books at the library. 我在圖書館看書。

            14. mall (購物中心)  
                Let’s go to the mall. 我們去購物中心吧。

            15. amusement park (遊樂園)  
                I love the amusement park. 我喜歡遊樂園。
            `
    },
    {
        "title": "可愛動物與戶外事物",
        "content": `
            1. nest (鳥巢)  
            There is a nest in the tree. 樹上有一個鳥巢。

            2. sloth (樹懶)  
            A sloth moves slowly. 樹懶動作很慢。

            3. popcorn (爆米花)  
            I like to eat popcorn. 我喜歡吃爆米花。

            4. snail (蝸牛)  
            The snail is crawling. 蝸牛正在爬行。

            5. bite (咬)  
            Don’t bite your pencil. 不要咬鉛筆。

            6. pet (寵物)  
            I have a pet cat. 我有一隻寵物貓。

            7. snowflake (雪花)  
            Each snowflake is unique. 每一片雪花都不同。

            8. roller skating (溜冰鞋滑行)  
            She loves roller skating. 她喜歡穿溜冰鞋滑行。

            9. ice skating (溜冰)  
            He is good at ice skating. 他很會溜冰。

            10. in-line skates (直排輪)  
                I got new in-line skates. 我有一雙新的直排輪鞋。

            11. sled (雪橇)  
                We rode the sled down the hill. 我們坐著雪橇從山坡滑下來。

            12. branch (樹枝)  
                The bird is on the branch. 鳥停在樹枝上。

            13. tree (樹)  
                That tree is very tall. 那棵樹很高。

            14. leaf (樹葉)  
                A leaf fell on the ground. 一片樹葉掉在地上。

            15. flower (花)  
                She picked a flower. 她摘了一朵花。
            `
    },
    {
        "title": "疑問詞與位置",
        "content": `
            1. there (那裡)  
            The book is over there. 書在那邊。

            2. these (這些)  
            These are my toys. 這些是我的玩具。

            3. those (那些)  
            Those are her shoes. 那些是她的鞋子。

            4. far (遠的)  
            The mountain is far away. 山很遠。

            5. near (近的)  
            The store is near my house. 商店在我家附近。

            6. here (這裡)  
            Come here! 過來這裡！

            7. where (哪裡)  
            Where is my backpack? 我的背包在哪裡？

            8. how (如何)  
            How do you ride a bike? 你怎麼騎腳踏車？

            9. what (什麼)  
            What is your name? 你叫什麼名字？

            10. who (誰)  
                Who is your friend? 誰是你的朋友？

            11. which (哪一個)  
                Which color do you like? 你喜歡哪一個顏色？

            12. why (為什麼)  
                Why are you sad? 你為什麼難過？

            13. when (什麼時候)  
                When do you sleep? 你什麼時候睡覺？

            14. how many (多少個)  
                How many apples do you have? 你有多少顆蘋果？

            15. how much (多少錢)  
                How much is this toy? 這個玩具多少錢？

            16. how old (幾歲)  
                How old are you? 你幾歲？

            17. how long (多久)  
                How long is the movie? 電影有多長？

            18. how often (多常)  
                How often do you brush your teeth? 你多久刷一次牙？

            19. how far (多遠)  
                How far is the zoo? 動物園有多遠？

            20. how big (多大)  
                How big is your house? 你的房子多大？
            `
    },
    {
        "title": "家居空間與家具",
        "content": `
            1. bathroom (浴室)  
            I take a bath in the bathroom. 我在浴室洗澡。

            2. bedroom (臥室)  
            I sleep in my bedroom. 我在臥室睡覺。

            3. dining room (餐廳)  
            We eat in the dining room. 我們在餐廳吃飯。

            4. garage (車庫)  
            Dad parks the car in the garage. 爸爸把車停在車庫。

            5. kitchen (廚房)  
            Mom cooks in the kitchen. 媽媽在廚房煮飯。

            6. bathtub (浴缸)  
            The bathtub is full of water. 浴缸裡裝滿了水。

            7. dining table (餐桌)  
            Dinner is on the dining table. 晚餐在餐桌上。

            8. dining chair (餐椅)  
            I sit on the dining chair. 我坐在餐椅上。

            9. refrigerator (冰箱)  
            The refrigerator is cold. 冰箱很冷。

            10. fridge (冰箱)  
                I put milk in the fridge. 我把牛奶放進冰箱。
            `
    },
    {
        "title": "日常物品與客廳",
        "content": `
            1. scooter (滑板車)  
            I ride my scooter to the park. 我騎滑板車去公園。

            2. look for (尋找)  
            I look for my lost toy. 我在找我丟失的玩具。

            3. find (找到)  
            I find my toy under the bed. 我在床下找到我的玩具。

            4. hope (希望)  
            I hope it doesn’t rain. 我希望不要下雨。

            5. toilet (馬桶)  
            The toilet is in the bathroom. 馬桶在浴室裡。

            6. sink (洗手台)  
            Wash your hands in the sink. 在洗手台洗手。

            7. fork (叉子)  
            I eat salad with a fork. 我用叉子吃沙拉。

            8. spoon (湯匙)  
            Use a spoon for the soup. 用湯匙喝湯。

            9. plate (盤子)  
            Put your food on the plate. 把食物放在盤子上。

            10. living room (客廳)  
                We watch TV in the living room. 我們在客廳看電視。

            11. sofa (沙發)  
                I sit on the sofa. 我坐在沙發上。

            12. couch (沙發)  
                The couch is soft. 沙發很柔軟。

            13. armchair (單人椅)  
                Grandpa sits on the armchair. 爺爺坐在單人椅上。

            14. television / TV (電視)  
                The television is loud. 電視聲音很大。

            15. lamp (檯燈)  
                I read with the lamp on. 我開著檯燈看書。

            16. light (燈光)  
                Turn off the light. 關掉燈。

            17. window (窗戶)  
                I look out the window. 我從窗戶看出去。

            18. curtain (窗簾)  
                Close the curtain. 拉上窗簾。

            19. door (門)  
                Open the door, please. 請開門。
            `
    },
    {
        "title": "動詞變化與感受表達",
        "content": `
            1. eat (吃) / ate (吃了)  
            I eat apples every day. 我每天吃蘋果。  
            I ate an apple yesterday. 我昨天吃了一顆蘋果。

            2. talk (說話) / talked (說過話)  
            We talk at school. 我們在學校說話。  
            We talked last night. 我們昨晚聊過天。

            3. play (玩) / played (玩過)  
            They play soccer. 他們踢足球。  
            They played soccer yesterday. 他們昨天踢了足球。

            4. do (做) / did (做了)  
            I do my homework. 我做作業。  
            I did my homework yesterday. 我昨天做了作業。

            5. watch (觀看) / watched (看過)  
            She watches TV every evening. 她每天晚上看電視。  
            She watched a movie last night. 她昨晚看了一部電影。

            6. ride (騎) / rode (騎了)  
            He rides his bike to school. 他騎腳踏車上學。  
            He rode his bike yesterday. 他昨天騎了腳踏車。

            7. fly (飛) / flew (飛了)  
            Birds fly in the sky. 鳥兒在天空中飛翔。  
            The bird flew away. 那隻鳥飛走了。

            8. go (去) / went (去了)  
            I go to the park every Sunday. 我每週日都去公園。  
            I went to the zoo yesterday. 我昨天去了動物園。

            9. visit (拜訪) / visited (拜訪過)  
            We visit our grandma every week. 我們每週拜訪奶奶。  
            We visited her last weekend. 我們上週末拜訪過她。

            10. sleep (睡覺) / slept (睡著了)  
                The baby sleeps a lot. 嬰兒睡很多。  
                The baby slept well last night. 嬰兒昨晚睡得很好。

            11. smile (微笑)  
                She always smiles at me. 她總是對我微笑。

            12. frown (皺眉)  
                He frowned when he was angry. 他生氣的時候皺起眉頭。

            13. scary (可怕的)  
                That movie is so scary. 那部電影好可怕。

            14. small (小的)  
                This dog is small. 這隻狗很小。
            `
    }
]