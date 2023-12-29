function getLengthOfMissingArray(arrayOfArrays) {
  let temp = [];

  if (arrayOfArrays == [] || arrayOfArrays == null) {
    return 0;
  }

  for (arr of arrayOfArrays) {
    if (arr == null || arr.length == 0) {
      return 0;
    }
    temp.push(arr.length);
  }

  if (temp.length == 0) {
    return 0
  }

  for (let i = Math.min(...temp); i < Math.max(...temp); i++) {
    if (!temp.includes(i)) {
      return i;
    }
  }

  return 0;
}



console.log(getLengthOfMissingArray([]));

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]));
console.log(getLengthOfMissingArray([]));

