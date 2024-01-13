/****** Reversed sequence ******/

const reverseSeq = (n) => {
  const array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array.reverse();
};
// console.log(reverseSeq(5));
