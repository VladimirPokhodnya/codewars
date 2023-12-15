function isNotNumber(str) {
  return /\D/.test(str);
}

function isValidIP(str) {
  ip = str.split(".");

  if (ip.length == 4) {

    for (let el of ip) {
      if ((el.length > 1 && Number(el[0]) == 0) || isNotNumber(el) || el[0] == '.') {
        return false;
      }

      if (Number(el) < 0 || Number(el) > 255) {
        return false;
      }


    }

    return true;
  }
  return false;
}



console.log(isValidIP("0.0.0.0") + " " + "1");
console.log(isValidIP("12.255.56.1") + " " + "2");
console.log(isValidIP("137.255.156.100") + " " + "3");
console.log(isValidIP('') + " " + "4");
console.log(isValidIP('abc.def.ghi.jkl') + " " + "5");
console.log(isValidIP('123.456.789.0') + " " + "6");
console.log(isValidIP('12.34.56') + " " + "7");
console.log(isValidIP('01.02.03.04') + " " + "8");
console.log(isValidIP('256.1.2.3') + " " + "9");
console.log(isValidIP('1.2.3.4.5') + " " + "10");
console.log(isValidIP('123,45,67,89') + " " + "11");