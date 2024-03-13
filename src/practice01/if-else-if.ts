{
  /**
   * 演習1-4 if-else-if文
   */
  const input = require("prompt-sync")({ sigint: true });
  const num = parseInt(input("数値を入力:"));
  // if文を使ってnumが負の数の場合は「負の数です」と表示する
  // 正の数の場合は「正の数です」と表示する
  // 0の場合は「0です」と表示する
  if(num < 0){
    console.log("負の数です");
  } else if(num > 0){
    console.log("正の数です");
  } else{
    console.log("0です");
  }
}