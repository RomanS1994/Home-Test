function getDivisorsCnt(n) {
  let value = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      value++;
    }
  }
  return value;
}

// console.log(getDivisorsCnt());
