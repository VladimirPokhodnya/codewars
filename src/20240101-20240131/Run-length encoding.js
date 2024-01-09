var runLengthEncoding = function (str) {

  tmp = str.split('')
  tmp = [...new Set(tmp)].map(a => a.split(""))

  for (let a of tmp) {
    a.unshift(str.split(a).length - 1)
  }

  return tmp
}


console.log(runLengthEncoding(""));
console.log(runLengthEncoding("abc"));
console.log(runLengthEncoding("aab"));
console.log(runLengthEncoding("hello world"));
