function squareDigits(num) {
  return Number(
    `${num}`
      .split("")
      .map((el) => Math.pow(el, 2))
      .join("")
  );
}
// console.log(squareDigits(2112));
