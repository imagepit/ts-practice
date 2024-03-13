{
    /**
     * nullとundefinedの違い
     */
    var nullValue = null;
    var undefinedValue = undefined;
    console.log("nullValue: ".concat(nullValue)); // null
    console.log("undefinedValue: ".concat(undefinedValue)); // undefined
    console.log("\u53B3\u5BC6\u7B49\u4FA1\u6027\u6BD4\u8F03: ".concat(nullValue === undefinedValue)); // false
    console.log("\u62BD\u8C61\u7684\u7B49\u4FA1\u6027\u6BD4\u8F03: ".concat(nullValue == undefinedValue)); // true
}
