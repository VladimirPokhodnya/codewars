function deleteDigit(n) {

  let res = [];

  const numbers = ([...String(n)])

  let temp = numbers.join(',').split(',');
  for (let i = 0; i < temp.length; i++) {
    temp.splice(i, 1);
    res.push(temp);
    temp = numbers.join(',').split(',');
  }

  res = res.map((a) => Number(a.join('')))

  return Math.max(...res)
}

console.log(deleteDigit(152))
console.log(deleteDigit(1001))
console.log(deleteDigit(10))