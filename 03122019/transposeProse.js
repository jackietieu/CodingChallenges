function transposeProse(lines) {
  let newColumnLen = lines.length;
  let newRowLen = lines[0].length;
  let result = new Array(newRowLen).fill('');

  for (let i = 0; i < newRowLen; i++) {
    for (let j = 0; j < newColumnLen; j++) {
      if (newRowLen === 1) {
        result[0] += lines[i];
      } else {
        result[i] += lines[j][i];
      }
    }
  }

  return result;
}

let test = 
  ["AAA",
  "BBB",
  "CCC"]

let test2 = ["AAAAAAAAAAAAA"]

let test3 = 
  ["A",
  "A",
  "A",
  "A",
  "A"]

let test4 = 
["AAAA",
"BBBB"]

console.log(transposeProse(test));
console.log(transposeProse(test2));
console.log(transposeProse(test3));
console.log(transposeProse(test4));