function findMagic(arr) {
  let magic = -1;
  for (let i = 0; i < arr.length; i++) {
    if (i == arr[i]) {
      magic = i;
      break;
    }
  }
  return magic;
}
