function getAnagrams(list) {
  let result = [];
  for (let i = 0; i < Math.floor(list.length / 2); i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[i] !== list[j]) {
        let first = list[i]
          .split("")
          .sort()
          .join("");
        let second = list[j]
          .split("")
          .sort()
          .join("");
        if (first === second) {
          result.push([list[i], list[j]]);
        }
      }
    }
  }
  return result;
}

const inputList = [
  "listen",
  "elbow",
  "cider",
  "dusty",
  "silent",
  "hello",
  "below",
  "cried",
  "study"
];

console.log(getAnagrams(inputList));
