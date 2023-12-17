function filterHomogenous(arrays) {
  // Alea iacta est, code legionary!
  let buff = [];
  let flag = true;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > 0) {
      let el_t = typeof arrays[i][0];
      for (let j = 1; j < arrays[i].length; j++) {
        let el2_t = typeof arrays[i][j];
        if (el_t != el2_t) {
          flag = false;
          break;
        }
      }
      if (flag) {
        buff.push(arrays[i]);
      }
      flag = true;
    }
  }

  return buff;
}

console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
