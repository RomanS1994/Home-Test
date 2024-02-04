function doubleChar(str) {
  const arr = [];
  str.split("").map((el) => arr.push(el, el));
  return arr.join("");
}
// console.log(doubleChar("Adidas"));
