function findEvenIndex(arr) {

  let res = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((partialSum, a) => partialSum + a, 0) ==
      arr.slice(i + 1, arr.length).reduce((partialSum, a) => partialSum + a, 0)) {
      res = Number(arr.slice(i, i + 1))
      return i
    }
  }

  return res;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]));
console.log(findEvenIndex([]));
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));