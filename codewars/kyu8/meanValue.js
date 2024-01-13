/****** Calculate the mean value ******/
function findAverage(array) {
  let sum = 0;
  let result = 0;
  for (const el of array) {
    sum += el;
    result = sum / array.length;
  }
  return result;
}
// console.log(findAverage([1, 2, 3]));
