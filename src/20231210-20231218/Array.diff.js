function arrayDiff(a, b) {
  let res = [];
  let flag = true;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      res.push(a[i]);
    }
    flag = true;
  }

  return res;
}