function maskify(cc) {

  if (cc.length > 4) {
    let arr = cc.split("")
    for (let i = 0; i < arr.length - 4; ++i) {
      arr[i] = "#"
    }
    cc = arr.join('')
  }

  return cc
}