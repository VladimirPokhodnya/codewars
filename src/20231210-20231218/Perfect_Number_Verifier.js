function isPerfect(n) {
  // Your code here
  sum = 1

  for (let i = 2; i < n ** .5; i++) {
    if ((n % i) == 0) {
      sum += i + n / i
    }
  }

  return sum == n && n > 1


}