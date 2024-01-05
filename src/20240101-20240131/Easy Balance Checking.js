function balance(book) {

  let res = book
    .replace(/[^a-zA-Z0-9 .'\r\n']+/g, '')
    .split('\n')
    .filter((a) => a != "")
    .map((a, i) => (i != 0) ? a += " Balance"
      : "Original Balance: " + a)
    .map((a) => a.split(' '))
    .map((a) => (a.map((b, i) => (i == 2) ? Number(b) : b)))

  res[1].push(((res[0][2] - res[1][2])).toFixed(2))
  for (let i = 2; i < res.length; i++) {
    res[i].push((res[i - 1][4] - res[i][2]).toFixed(2))
  }

  let total_expense = 0
  let average_expense = 0
  for (let i = 1; i < res.length; i++) {
    total_expense += res[i][2]
    res[i][2] = (res[i][2]).toFixed(2)
  }

  average_expense = total_expense / (res.length - 1)
  res[0][2] = (res[0][2]).toFixed(2)

  return res
    .map((a) => a.join(' '))
    .join("\r\n")
    + "\r\nTotal expense  " + total_expense.toFixed(2) + "\r\n" + "Average expense  " + average_expense.toFixed(2)
}


var b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

var b2 = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

var b1sol = `Original Balance: 1000.00\r
125 Market 125.45 Balance 874.55\r
126 Hardware 34.95 Balance 839.60\r
127 Video 7.45 Balance 832.15\r
128 Book 14.32 Balance 817.83\r
129 Gasoline 16.10 Balance 801.73\r
Total expense  198.27\r
Average expense  39.65`

var b2sol = `Original Balance: 1233.00\r
125 Hardware 24.80 Balance 1208.20\r
123 Flowers 93.50 Balance 1114.70\r
127 Meat 120.90 Balance 993.80\r
120 Picture 34.00 Balance 959.80\r
124 Gasoline 11.00 Balance 948.80\r
123 Photos 71.40 Balance 877.40\r
122 Picture 93.50 Balance 783.90\r
132 Tyres 19.00 Balance 764.90\r
129 Stamps 13.60 Balance 751.30\r
129 Fruits 17.60 Balance 733.70\r
129 Market 128.00 Balance 605.70\r
121 Gasoline 13.60 Balance 592.10\r
Total expense  640.90\r
Average expense  53.41`

console.log(balance(b1))
console.log(balance(b1) === b1sol)
console.log(balance(b2))
console.log(balance(b2) == b2sol)
