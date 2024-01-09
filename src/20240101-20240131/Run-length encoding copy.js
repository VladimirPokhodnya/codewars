var runLengthEncoding = function (str) {

  res = str
    .split('')
    .map(a => a.split(""))
    .flatMap(a => [[1, a[0]]])

  let count = 0
  for (let i = 1; i < res.length; i++) {
    if (res[i][1] == res[i - 1][1]) {
      res[i][0] += ++count
      res[i - 1].push('del')
    } else {
      count = 0
    }
  }

  return res.filter(a => a.length != 3);
}


console.log(runLengthEncoding(""));
console.log(runLengthEncoding("abc"));
console.log(runLengthEncoding("aab"));
console.log(runLengthEncoding("hello world!"));
console.log(runLengthEncoding("aaaaabbbb"));

