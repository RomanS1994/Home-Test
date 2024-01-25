function basicOp(operation, value1, value2) {
  let result;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
    default:
      return "Недопустима операція";
  }

  return result;
}

// console.log(basicOp("-", 15, 18));
