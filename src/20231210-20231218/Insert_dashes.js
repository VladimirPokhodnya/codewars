function insertDash(num) {
  //code me
  res = []
  buff = [...num.toString()].map(Number);

  res.push(buff[0]);
  for (let i = 1; i < buff.length; i++) {
    if (buff[i - 1] % 2 != 0 && buff[i] % 2 != 0) {
      res.push('-');
    }
    res.push(buff[i]);
  }



  return res.join('');
}