function diamondsAndToads(sentence, fairy) {
  if (fairy == 'good') {
    return {
      'ruby': (sentence.match(/r/g) || []).length + (sentence.match(/R/g) || []).length * 2,
      'crystal': (sentence.match(/c/g) || []).length + (sentence.match(/C/g) || []).length * 2
    };
  } else {
    return {
      'python': (sentence.match(/p/g) || []).length + (sentence.match(/P/g) || []).length * 2,
      'squirrel': (sentence.match(/s/g) || []).length + (sentence.match(/S/g) || []).length * 2
    };
  }
};

console.log(diamondsAndToads("Ruby and Crystal", "good"));
console.log(diamondsAndToads("This string contain some Ruby and some Crystal in it", "good"));
console.log(diamondsAndToads("Python and Squirrel", "evil"));
console.log(diamondsAndToads("This string contain some Python and some Squirrel in it", "evil"));