function remove(s, n) {
  let res = "";
  for (let c of s) {
    if (c == '!' && n > 0) {
      n--;
      continue;
    }
    res += c;
  }

  return res;
}


console.log(remove("Hi!", 1))
console.log(remove("Hi!", 100))
console.log(remove("Hi!!!", 1))
console.log(remove("Hi!!!", 100))
console.log(remove("!Hi", 1))
console.log(remove("!Hi!", 1))
console.log(remove("!Hi!", 100))
console.log(remove("!!!Hi !!hi!!! !hi", 1))
console.log(remove("!!!Hi !!hi!!! !hi", 3))
console.log(remove("!!!Hi !!hi!!! !hi", 5))
console.log(remove("!!!Hi !!hi!!! !hi", 100))