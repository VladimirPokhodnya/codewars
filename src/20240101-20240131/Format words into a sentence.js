function formatWords(words) {
  if (words == null) {
    return ""
  }

  return words
    .join(',')
    .split(',')
    .filter((a) => a.length != 0)
    .reverse()
    .join(', ')
    .replace(', ', ' and ')
    .split(', ')
    .map((a) => a.split(' and ').reverse().join(' and '))
    .reverse()
    .join(', ')
}


console.log(formatWords(['one', 'two', 'three', 'four']), "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
console.log(formatWords(['one']), "formatWords(['one']) should return 'one'")
console.log(formatWords(['one', '', 'three']), "formatWords(['one', '', 'three']) should return 'one and three'")
console.log(formatWords(['', '', 'three']), "formatWords(['', '', 'three']) should return 'three'")
console.log(formatWords(['one', 'two', '']), "formatWords(['one', 'two', '']) should return 'one and two'")
console.log(formatWords([]), 'formatWords([]) should return ""')
console.log(formatWords(null), 'formatWords(null) should return ""')
console.log(formatWords(['']), 'formatWords([""]) should return ""')