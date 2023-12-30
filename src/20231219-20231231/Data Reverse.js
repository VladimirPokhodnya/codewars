function dataReverse(data) {
  if (data.length == 0) {
    return data
  }
  let res = "";
  for (let i = data.length; i >= 8; i -= 8) {
    res += data.slice(i - 8, i)
    if (i > 8) {
      res += ','
    }
  }
  return res.split(',').map(Number)
}



const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]

console.log(dataReverse(data1));
console.log(dataReverse(data2));
console.log(dataReverse(data3));
console.log(dataReverse(data4));
console.log(dataReverse([]));
