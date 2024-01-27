function invert(array) {
  return array.map((el) => {
    if (el > 0) {
      return Number("-" + el);
    } else {
      return Math.abs(el);
    }
  });
}
// console.log(invert([1, -2, 3, -4, 5]));
