{
  /**
   * 関数の型
   */
  type StringOperation = (a: string, b: string) => string;

  const concatenate: StringOperation = (a, b) => {
      return a + " " + b;
  };

  const concatenateWithReverse: StringOperation = (a, b) => {
      return b + " " + a;
  };

  const input = require("prompt-sync")({ sigint: true });
  
  const str1 = input("文字列1を入力してくだい > ");
  const str2 = input("文字列2を入力してくだい > ");
  console.log(`concatenate: ${concatenate(str1, str2)}`);
  console.log(`concatenateWithReverse: ${concatenateWithReverse(str1, str2)}`);
}