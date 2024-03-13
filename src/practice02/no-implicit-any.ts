{
  /**
   * NoImplicitAny
   */
  function anyFunc(x:string,y:string) {
    console.log(`x:${x}, y:${y}`);
    // returnがない場合は戻り値はvoid型となる（省略可）
  }
}