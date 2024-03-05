function enough(cap, on, wait) {
  const bas = on + wait - cap;
  return bas > 0 ? 0 : bas;
}
// console.log(enough(100, 60, 50));
