function validParentheses(parenStr) {
  if (parenStr.length == 0) {
    return true
  }
  let res = true
  let count = 0
  for (let a of parenStr) {
    if (a == '(') {
      count++
    } else {
      count--
    }
    if (count < 0) {
      return false
    }
  }
  return !count
}

console.log(validParentheses(""));
console.log(validParentheses("()()()"));
console.log(validParentheses("((())"));
console.log(validParentheses("()()()"));
console.log(validParentheses("(()())()"));
console.log(validParentheses("()(())((()))(())()"));