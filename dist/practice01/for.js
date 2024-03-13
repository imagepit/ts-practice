{
    /**
     * 演習1-6 for文
     */
    var arr = ['a', 'b', 'c'];
    // カウンタ変数を使ったfor文
    console.log("カウンタ変数を使ったfor文の繰り返し");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    // for-ofを使った繰り返し
    console.log("for-ofを使った繰り返し");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var value = arr_1[_i];
        console.log(value);
    }
    // forEachを使った繰り返し
    console.log("forEachを使った繰り返し");
    arr.forEach(function (value) {
        console.log(value);
    });
    // mapを使った繰り返し
    console.log("mapを使った繰り返し");
    arr.map(function (value) {
        console.log(value);
    });
}
