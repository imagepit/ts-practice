{
    /**
     * 演習1-3 if文
     */
    var input = require("prompt-sync")({ sigint: true });
    var num = parseInt(input("数値を入力:"));
    // if文を使って偶数の場合には数値を10倍にして出力する
    // 奇数の場合にはそのまま出力する
    if (num % 2 === 0) {
        // シングルクォーテーションで囲むと変数部分を${}で囲こって出力できる
        console.log("\u7D50\u679C:".concat(num * 10));
    }
    else {
        console.log("\u7D50\u679C:".concat(num));
    }
}
