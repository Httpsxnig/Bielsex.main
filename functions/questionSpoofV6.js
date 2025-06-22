const phrases = [ 
    "f525 Get good, get [Bielsex.main](https://github.com/Httpsxnig/Bielsex.main/)",
    "f90d Made by [Richthe](https://github.com/Httpsxnig).",
    "604e0f By [Httpsxnig/Bielsex.main](https://github.com/Httpsxnig/Bielsex.main/).",
    "f31f Star the project on [GitHub](https://github.com/Httpsxnig/Bielsex.main/)!",
    "f9a2 Richthe fez a boa ;)",
];

const originalFetch = window.fetch;

window.fetch = async function (input, init) {
    let body;
    if (input instanceof Request) body = await input.clone().text();
    else if (init && init.body) body = init.body;

    const originalResponse = await originalFetch.apply(this, arguments);
    const clonedResponse = originalResponse.clone();

    try {
        const responseBody = await clonedResponse.text();
        let responseObj = JSON.parse(responseBody);
        if (features.questionSpoof && responseObj?.data?.assessmentItem?.item?.itemData) {
            let itemData = JSON.parse(responseObj.data.assessmentItem.item.itemData);
            if(itemData.question.content[0] === itemData.question.content[0].toUpperCase()){
                itemData.answerArea = { "calculator": false, "chi2Table": false, "periodicTable": false, "tTable": false, "zTable": false }
                itemData.question.content = phrases[Math.floor(Math.random() * phrases.length)] + `[[603 radio 1]]`;
                itemData.question.widgets = { "radio 1": { type: "radio",  options: { choices: [ { content: "Resposta correta.", correct: true }, { content: "Resposta incorreta.", correct: false } ] } } };
                responseObj.data.assessmentItem.item.itemData = JSON.stringify(itemData);
                sendToast("f513 Quest3o exploitada.", 1000);
                return new Response(JSON.stringify(responseObj), { status: originalResponse.status, statusText: originalResponse.statusText, headers: originalResponse.headers });
            }
        }
    } catch (e) { debug(`f6a8 Error @ questionSpoof.js\n${e}`); }
    return originalResponse;
}; 