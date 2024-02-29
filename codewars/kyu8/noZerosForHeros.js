function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = Math.floor(n / 10);
  }
  console.log(n);
}

// noBoringZeros(960);
