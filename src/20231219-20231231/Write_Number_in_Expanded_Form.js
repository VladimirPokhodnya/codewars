function expandedForm(num) {
  let res = [];
  let tmp;
  let mul = 1
  while (num >= 1) {
    tmp = (num - Math.floor(num / 10) * 10) * mul;
    mul *= 10;
    if (tmp != 0) {
      res.push(Math.floor(tmp));
    }
    num = Math.floor(num / 10);
  }
  console.log(tmp);
  res = res.reverse().join(' + ');
  return res;
}

// console.log(expandedForm(70304));
console.log(expandedForm(70304.23056));