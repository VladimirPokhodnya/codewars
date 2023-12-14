function countSmileys(arr) {
  let eyes = ":;";
  let nose = "-~";
  let mouth = ")D";
  let count = 0;

  for (let smille of arr) {

    if (smille.length == 3 && (eyes.indexOf(smille[0]) > -1) && (nose.indexOf(smille[1]) > -1) && (mouth.indexOf(smille[2]) > -1)) {
      count++;
    }

    if (smille.length == 2 && (eyes.indexOf(smille[0]) > -1) && (mouth.indexOf(smille[1]) > -1)) {
      count++;
    }
  }

  return count;
};


console.log(countSmileys([]));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));