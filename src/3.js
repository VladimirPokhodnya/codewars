function generateShape(integer) {
  let res = []
  for (let i = 0; i < integer; i++) {
    for (let j = 0; j < integer; j++) {
      res.push('+')
    }
    res.push('\n')
  }

  console.log(res.length)

  res = res.slice(0, - 1)

  console.log(res.length)


  console.log(res.join(''))


}

generateShape(10)