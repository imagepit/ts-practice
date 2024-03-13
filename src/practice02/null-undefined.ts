{
  /**
   * nullとundefinedの違い
   */
  const nullValue: null  = null;
  const undefinedValue: undefined = undefined;
  console.log(`nullValue: ${nullValue}`); // null
  console.log(`undefinedValue: ${undefinedValue}`); // undefined
  console.log(`厳密等価性比較: ${nullValue === undefinedValue}`); // false
  console.log(`抽象的等価性比較: ${nullValue == undefinedValue}`); // true
}