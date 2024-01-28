function sumArray(array) {
  if (array === null || array.length <= 1) {
    return "Nothing10";
  }

  let max = Math.max(...array);
  let min = Math.min(...array);
  let sum = 0;

  array.forEach((el) => {
    if (el !== max && el !== min) {
      sum += el;
    }
  });

  return sum;
}
// console.log(sumArray([0, 1, 6, 10, 10]));
