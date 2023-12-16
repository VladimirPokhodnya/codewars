function checkExam(array1, array2) {
  let scope = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array2[i] == "") {
      continue;
    }

    if (array1[i] == array2[i]) {
      scope += 4;
    } else {
      scope--;
    }
  }

  if (scope < 0) {
    scope = 0;
  }

  return scope;
}