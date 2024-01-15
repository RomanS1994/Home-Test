function grow(x) {
  let result = 1;
  for (const el of x) {
    result *= el;
  }
  return result;
}
// console.log(grow([4, 1, 1, 1, 4]));

// function grow(x) {
//   return x.reduce((a, b) => a * b);
// }
// console.log(grow([4, 3, 5, 2, 4]));
