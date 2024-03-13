{
  /**
   * 演習1-6 for文
   */
  const arr = ['a','b','c'];
  // カウンタ変数を使ったfor文
  console.log("カウンタ変数を使ったfor文の繰り返し");
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
  // for-ofを使った繰り返し
  console.log("for-ofを使った繰り返し");
  for(let value of arr){
    console.log(value);
  }
  // forEachを使った繰り返し
  console.log("forEachを使った繰り返し");
  arr.forEach((value) => {
    console.log(value);
  });
  // mapを使った繰り返し
  console.log("mapを使った繰り返し");
  arr.map((value) => {
    console.log(value);
  });
}