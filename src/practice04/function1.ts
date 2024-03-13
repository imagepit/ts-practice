{
  /**
   * 関数
   */
  function numCheck(input: string): string {
    const num = parseInt(input);
    if(num < 0){
      return "負の数です";
    } else if(num > 0){
      return "正の数です";
    } else{
      return "0です";
    }
  }
  const input = require("prompt-sync")({ sigint: true });
  const num = input("数値を入力:");
  console.log(numCheck(num));
}