function findMultiples(integer, limit) {
  const value = Math.floor(limit / integer);
  const arr = [];
  let number = 0;
  for (let i = 0; i < value; i++) {
    number += integer;
    if (number) {
      arr.push(number);
    }
  }

  return arr;
}
// console.log(findMultiples(5, 25));
