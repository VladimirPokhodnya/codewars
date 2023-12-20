const arrCheck = value => {
  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i]) != true) {
      console.log(value[i]);
      return false;
    }
  }
  return true;
};


let arr = [[]];
console.log(arrCheck(arr));

