function filter_list(l) {
  // Return a new array with the strings filtered out
  let res = []
  for (let i = 0; i < l.length; i++) {
    let test = typeof l[i]
    if (test != "string") {
      res.push(l[i])
    }
  }

  return res

}


console.log(filter_list([1, 2, "asda", "asda", 3, 15]))