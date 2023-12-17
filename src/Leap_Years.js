function isLeapYear(year) {
  // TODO
  if (Math.floor(year / 400) * 400 == year) {
    return true;
  } else if (Math.floor(year / 100) * 100 == year) {
    return false;
  } else if (Math.floor(year / 4) * 4 == year) {
    return true;
  } else {
    return false;
  }
}