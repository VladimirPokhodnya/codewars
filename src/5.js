function min(arr, toReturn) {
  // TODO
  let value = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (value > arr[i]) {
      value = arr[i];
      index = i;
    }
  }

  if (toReturn === 'value') {
    return value;
  }

  return index;
}

console.log(min([5, 4, 3, 6, 2, 7], 'value'))