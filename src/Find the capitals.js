var capitals = function (word) {
  // Write your code here
  res = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) {
      res.push(i)
    }
  }
  return res;
};