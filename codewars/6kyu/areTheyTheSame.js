function comp(a, b) {
  if (a === null || b === null) {
    return false;
  }
  const sortA = a.sort((a, b) => a - b);
  const sortB = b.sort((a, b) => a - b).map((e) => Math.sqrt(e));
  return sortA.toString() === sortB.toString() ? true : false;
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
// console.log(comp(a1, a2));
