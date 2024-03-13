{
  /**
   * 様々な関数宣言
   */
  // 基本の関数宣言
  function addNumbers(a: number, b: number): number {
    return a + b;
  }
  // 関数式
  const subtractNumbers = function(a: number, b: number): number {
    return a - b;
  };
  // アロー関数
  const multiplyNumbers = (a: number, b: number): number => a * b;
  // 関数を呼び出して出力
  // addNumbers: 3（1+2）
  // subtractNumbers: 1（3-2）
  // multiplyNumbers: 6（3*2）
  const a = 1;
  const b = 2;
  console.log(`addNumbers: ${addNumbers(1, 2)} (${a}+${b})`);
  const c = 3;
  const d = 2;
  console.log(`subtractNumbers: ${subtractNumbers(3, 2)} (${c}-${d})`);
  const e = 3;
  const f = 2;
  console.log(`multiplyNumbers: ${multiplyNumbers(3, 2)} (${e}*${f})`);
}