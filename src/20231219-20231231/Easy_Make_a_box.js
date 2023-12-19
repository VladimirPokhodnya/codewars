function box(number) {
  //your code here
  let result = [];
  for (let i = 0; i < number; i++) {
    let buffer = []
    for (let j = 0; j < number; j++) {
      if (i == 0 || i == number - 1) {
        buffer.push("-");
      } else {
        if (j == 0 || j == number - 1) {
          buffer.push("-");
        } else {
          buffer.push(" ")
        }
      }
    }
    result.push(buffer.join(""));
  }
  return result;
}



console.log(box(5));
console.log(box(2));
console.log(box(4));
console.log(box(6));
console.log(box(3));
