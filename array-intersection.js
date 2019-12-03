function intersection(left, rigth) {
  const temp = {};
  const result = [];
  left.forEach(i => (temp[i] = 1));
  rigth.forEach(i => (temp[i] ? (temp[i] += 1) : false));
  for (let key in temp) {
    if (temp[key] > 1) {
      result.push(key);
    }
  }
  return result;
}

console.log(intersection(
    [2, 5, 6, 4, 8, 3],
    [5, 4, 3, 7, 2, 8, 9]
))