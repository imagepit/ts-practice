{
    /**
     * 配列操作
     */
    // 配列の宣言
    var stations = [];
    while (true) {
        // コンソール入力を受け取る
        var input = require("prompt-sync")({ sigint: true });
        var station = input("駅名を入力:");
        // コンソール入力がexitの場合、処理を終了する
        if (station === "exit") {
            console.log("終了");
            break;
        }
        // コンソール入力を配列に格納
        stations.push(station);
        // 配列の要素をコンソール出力
        console.log(stations);
    }
}
