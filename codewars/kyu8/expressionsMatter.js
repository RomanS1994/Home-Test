// function basicOp(operation, value1, value2) {
//   switch (true) {
//     case operation === "-":
//       return value1 - value2;
//       break;
//     case operation === "+":
//       return value1 + value2;
//       break;
//     case operation === "/":
//       return value1 / value2;
//       break;
//     case operation === "*":
//       return value1 * value2;
//       break;
//   }
//   return eval(value1 + operation + value2);
// }
// console.log(basicOp("*", 15, 18));

function expressionMatter(a, b, c) {
  const var1 = a * (b + c);
  const var2 = a * b * c;
  const var3 = a + b * c;
  const var4 = (a + b) * c;
  const var5 = a + b + c;

  return Math.max(var1, var2, var3, var4, var5);
}
// console.log(expressionMatter(1, 3, 1));
