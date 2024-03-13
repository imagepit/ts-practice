{
  /**
   * 演習1-1 型注釈・型推論
   */
  // 数値型のage変数を宣言
  const age:number = 20;
  // 文字列型のname変数を宣言
  const name:string = "太郎";
  const isStudent = true; // 型推論によりboolean型となる
  // コンソールに出力
  console.log("age:", age);
  console.log("name:", name);
  console.log("isStudent:", isStudent);
}
