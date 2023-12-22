function expandedForm(num) {
  let res = [];
  let tmp;
  let mul = 1
  let tmp2 = num.toString().split('.');
  while (num >= 1) {
    tmp = (num - Math.floor(num / 10) * 10) * mul;
    mul *= 10;
    if (tmp != 0) {
      res.push(Math.floor(tmp));
    }
    num = Math.floor(num / 10);
  }

  res = res.filter((a) => a != 0).reverse().join(' + ');
  if (tmp2[0] != 0) {
    res += ' + ';
  }

  if (tmp2[1] != 0) {
    const expandedForm2 = n => n.toString().split('').map((a, i) => a += '/' + Math.pow(10, i) * 10).filter((a) => a.split('/')[0] != '0').join(' + ');
    res += expandedForm2(tmp2[1]);
  }
  return res;
}

console.log(expandedForm(70.154486));


