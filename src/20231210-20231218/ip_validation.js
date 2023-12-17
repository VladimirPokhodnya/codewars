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


