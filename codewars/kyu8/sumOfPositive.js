function positiveSum(arr) {
  let result = 0;
  for (const el of arr) {
    if (el > 0) {
      result += el;
    }
  }
  return result;
}
// console.log(positiveSum([1, -2, 3, 4, 5]));
