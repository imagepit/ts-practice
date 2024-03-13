{
    // コンソールからの入力
    var input = require('prompt-sync')({ sigint: true });
    // 文字を入力
    var value = parseInt(input('文字を入力: '));
    console.log("\u5165\u529B\u3055\u308C\u305F\u6587\u5B57: ".concat(value * 100));
}
