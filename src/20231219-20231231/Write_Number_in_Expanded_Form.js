function expandedForm(num) {
  let res = [];
  let tmp;
  let mul = 1
  while (num >= 1) {
    tmp = (num - Math.floor(num / 10) * 10) * mul;
    mul *= 10;
    res.push(tmp);
    num = Math.floor(num / 10);
  }
  return res.reverse().join(' + ');
}

console.log(expandedForm(70304));