function proofread(str) {
  return str.split('. ')
    // .filter((a) => a != '')
    .map((a) => a.toLowerCase().trim().replace(/ie/g, 'ei'))
    .map((a, i) => a = a.substring(0, 1).toUpperCase() + a.substring(1))
    .join('. ')
}


console.log(proofread("ShE deCIeved HiM."));
console.log(proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT."));