{
  /**
   * 配列操作
   */
  // 配列の宣言
  const stations: string[] = [];
  while (true) {
    // コンソール入力を受け取る
    const input = require("prompt-sync")({ sigint: true });
    const station = input("駅名を入力:");
    // コンソール入力がexitの場合、処理を終了する
    if (station === "exit") {
      console.log("終了")
      break;
    }
    // コンソール入力を配列に格納
    stations.push(station);
    // 配列の要素をコンソール出力
    console.log(stations);
  }
}