function rgb(r, g, b) {

  return [r, g, b]
    .map((a) => a)
    .map((a) => a > 255 ? 'FF' : a)
    .map((a) => a <= 0 ? '00' : a.toString(16).toUpperCase())
    .map((a) => a.length == 1 ? '0' + a : a)
    .join('')

}


console.log(rgb(184, 9, -15));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));