function expressionMatter(a, b, c) {
  const var1 = a * (b + c);
  const var2 = a * b * c;
  const var3 = a + b * c;
  const var4 = (a + b) * c;
  const var5 = a + b + c;

  return Math.max(var1, var2, var3, var4, var5);
}
console.log(expressionMatter(1, 3, 1));
