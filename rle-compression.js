function rle(value) {
  let result = "";
  let i = 0;
  let counter = 1;
  while (i < value.length) {
    if (value[i] === value[i + 1]) {
      counter += 1;
    } else if (counter === 1) {
      result += value[i];
      counter = 1;
    } else {
      result += value[i] + counter;
      counter = 1;
    }
    i++;
  }
  return result;
}

console.log(rle("AAABBAARRKKEEEEEEEEEEEEEADAFFFFGGGTTT"));
