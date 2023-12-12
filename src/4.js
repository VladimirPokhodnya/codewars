function getCount(str) {
  let sum = 0;
  const index = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (index.indexOf(str[i]) > -1) {
      sum++;
      console.log(str[i])
    }
  }


  return sum;
}

console.log(getCount("abracadabra"));