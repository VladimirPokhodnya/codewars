function scrollingText(text) {
  let result = Array(text.length).fill(text.toUpperCase()).map((str, i, arr) => str = i != 0 ? str[str.length - 1] + str.slice(1, str.length - 1) + str[0] : str);
  return result;
}

console.log(scrollingText("abc"));

