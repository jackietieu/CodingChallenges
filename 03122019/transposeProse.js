function transposeProse(lines) {
  // how many rows there are currently
  const rowLen = lines.length;
  // how many cols there are currently
  const columnLen = lines[0].length; 
  //prefill transposed array with empty strings
  const result = new Array(columnLen).fill(''); 

  for (let i = 0; i < columnLen; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (columnLen === 1) {
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