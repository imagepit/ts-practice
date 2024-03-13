{
    /**
     * 演習1-5 switch文
     */
    var input = require("prompt-sync")({ sigint: true });
    var num = parseInt(input("数値を入力:"));
    // switch文を使って値を3で割った剰余に応じて結果を表示する
    // 3で割り切れる場合は「3で割り切れます」と表示する
    // 3で割り切れないが余りがある場合は「3で割るとx余ります」と表示する
    switch (num % 3) {
        case 0:
            console.log("3で割り切れます");
            break;
        default:
            console.log("3\u3067\u5272\u308B\u3068".concat(num % 3, "\u4F59\u308A\u307E\u3059"));
            break;
    }
}
