function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i == j) {
        continue
      }
      if (numbers[i] + numbers[j] == target) {
        return [i, j]
      }
    }
  }
  return [0, 1];
}


console.log(twoSum([566, 597, -877, 803, 52, -74, -987, 28, -53, -515, 350, 905, -561, 962, 516, 529, 355, 654, -683, -4, -482, -226, -712, 681, -95, 965, 974, 976], 562))