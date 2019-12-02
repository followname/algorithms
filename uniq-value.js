function uniq(values) {
  let temp = {};
  let uniqVal = [];
  for (let i = 0; i < values.length; i++) {
    let current = values[i];
    if (temp[current]) {
      temp[values[i]] += 1;
    } else {
      temp[values[i]] = 1;
    }
  }
  for (let key in temp) {
    if (temp[key] === 1) {
      uniqVal.push(key);
    }
  }
  return uniqVal;
}

console.log(uniq([2, 4, 5, 2, 6, 4, 7, 3, 7, 2, 7, 4, 9, 7, 0]))