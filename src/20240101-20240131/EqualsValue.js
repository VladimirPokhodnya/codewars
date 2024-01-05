function indexEqualsValue(a) {
  let lo = 0;
  let hi = a.length - 1;

  while (lo <= hi) {
    let md = Math.floor((lo + hi) / 2);
    if (a[md] < md) {
      lo = md + 1;
    } else if ((a[md] == md) && ((md == 0) || (a[md - 1] < (md - 1)))) {
      return md;
    } else {
      hi = md - 1;
    }
  }
  return -1;
}


console.log(indexEqualsValue([-1, 0, 1, 3, 4]))
console.log(indexEqualsValue([1, 2, 3, 4]))