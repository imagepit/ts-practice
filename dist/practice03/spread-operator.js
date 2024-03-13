var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var input = require("prompt-sync")({ sigint: true });
    var title = input("タイトルを入力:");
    var contents = input("内容を入力:");
    var progressRate = parseInt(input("進捗率を入力:"));
    var todo = {
        title: "TODOのタイトル",
        contents: "TODOの内容",
        progressRate: 40
    };
    // スプレッド構文を使って、入力された値を使ってtodoを元に新しいオブジェクトを作成する
    // 未入力だった場合には元の値を使う
    var newTodo = __assign(__assign({}, todo), { title: title || todo.title, contents: contents || todo.contents, progressRate: progressRate || todo.progressRate });
    // 作成した新しいオブジェクトを出力する
    console.log("元のオブジェクト:");
    console.log(todo);
    console.log("新しいオブジェクト:");
    console.log(newTodo);
}
