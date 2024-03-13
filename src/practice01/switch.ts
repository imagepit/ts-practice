{
  /**
   * 演習1-5 switch文
   */
  const input = require("prompt-sync")({ sigint: true });
  const num = parseInt(input("数値を入力:"));
  // switch文を使って値を3で割った剰余に応じて結果を表示する
  // 3で割り切れる場合は「3で割り切れます」と表示する
  // 3で割り切れないが余りがある場合は「3で割るとx余ります」と表示する
  switch(num % 3){
    case 0:
      console.log("3で割り切れます");
      break;
    default:
      console.log(`3で割ると${num % 3}余ります`);
      break;
  }
}