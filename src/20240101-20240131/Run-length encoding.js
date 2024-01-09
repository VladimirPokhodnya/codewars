var runLengthEncoding = function (str) {
  let res = []
  let count = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) {
      count++
    } else {
      res.push([count, str[i]])
      count = 1
    }
  }

  return res
}


console.log(runLengthEncoding(""));
console.log(runLengthEncoding("abc"));
console.log(runLengthEncoding("aab"));
console.log(runLengthEncoding("hello world!"));
console.log(runLengthEncoding("aaaaabbbb"));

