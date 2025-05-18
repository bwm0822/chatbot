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
