function findShort(s) {
  let str = s.split(' ')
  let min = str[0].length
  for (let i = 1; i < str.length; i++) {
    if (min > str[i].length) {
      min = str[i].length;
    }
  }

  return min
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))