const originalParse = JSON.parse;

JSON.parse = function (e, t) {
    let body = originalParse(e, t);
    try {
        if (body?.data) {
            Object.keys(body.data).forEach(key => {
                const data = body.data[key];
                if (features.showAnswers && key === "assessmentItem" && data?.item) {
                    const itemData = JSON.parse(data.item.itemData);
                    if (itemData.question && itemData.question.widgets && itemData.question.content[0] === itemData.question.content[0].toUpperCase()) {
                        Object.keys(itemData.question.widgets).forEach(widgetKey => {
                            const widget = itemData.question.widgets[widgetKey];
                            if (widget.options && widget.options.choices) {
                                widget.options.choices.forEach(choice => {
                                    if (choice.correct) {
                                        choice.content = "705 " + choice.content;
                                        sendToast("f513 Respostas reveladas.", 1000);                
                                    }
                                });
                            }
                        });
                        data.item.itemData = JSON.stringify(itemData);
                    }
                }
            });
        }
    } catch (e) { debug(`f6a8 Error @ answerRevealer.js\n${e}`); }
    return body;
}; 