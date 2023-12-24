function scrollingText(text) {
  let result = Array(text.length).fill(text.toUpperCase());
  console.log(result[0]);

  for (let j = 0; j < result[0].length; j++) {
    for (let k = 0; k < j; k++) {
      temp = result[j][result[j].length - 1];
      result[j] = result[j].slice(1, result[j].length) + result[j][0];
    }
  }

  return result;
}

console.log(scrollingText("abc"));

