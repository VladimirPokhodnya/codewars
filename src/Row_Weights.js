function rowWeights(array) {
  //your code here
  let first = 0
  let second = 0
  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1] != undefined) {
      second += array[i + 1]
    }
    first += array[i]
  }

  return [first, second]
}

console.log(rowWeights([82, 98, 75, 66, 115]))