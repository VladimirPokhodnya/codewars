function bingo(ticket, win) {
  let miniwin = 0;
  let count = 0
  for (let i = 0; i < ticket.length; i++) {
    for (let j = 0; j < ticket[i][0].length; j++) {
      if (ticket[i][0][j].charCodeAt(0) == ticket[i][1]) {
        miniwin += 1
      }
    }
    if (miniwin == 1) {
      count += 1
    }
    miniwin = 0;
  }

  if (count >= win) {
    return 'Winner!'
  }

  return 'Loser!'
}

console.log(bingo([['IUODI', 86], ['QQKSIK', 81]], 1))
console.log(bingo([['GPOAQWL', 87], ['QPPNPHSF', 88], ['DEGIWO', 88], ['GMKM', 71], ['FOKTP', 76], ['AHKNZUB', 72], ['IMSYIVKS', 86], ['QGBDXFY', 78], ['DQCFSPMV', 69], ['OYQIYU', 77]], 1));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));