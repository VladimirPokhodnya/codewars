function calculateExpression(expression) {
  const tokens = expression.split(" ");

  function evaluateExpression(tokens) {
    const token = tokens.shift();

    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const a = evaluateExpression(tokens);
      const b = evaluateExpression(tokens);

      if (token === "+") {
        return a + b;
      } else if (token === "-") {
        return a - b;
      } else if (token === "*") {
        return a * b;
      } else if (token === "/") {
        return a / b;
      }
    } else {
      return parseFloat(token);
    }
  }

  return evaluateExpression(tokens);
}


console.log(calculateExpression('+ 3 5'))
console.log(calculateExpression('* + 2 2 3'))
console.log(calculateExpression('/ + 3 5 * 2 2'))