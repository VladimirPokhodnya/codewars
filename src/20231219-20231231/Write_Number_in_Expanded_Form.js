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
  console.log(res);

  res = res.filter((a) => a != 0).reverse().join(' + ');
  return res;
}

// console.log(expandedForm(70304));
console.log(expandedForm(700.23056));