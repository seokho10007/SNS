const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let result = "";

const max = input.reduce((acc, cur) => {
  acc = Math.max(acc, cur.length);

  return acc;
}, 0);

for (let i = 0; i < max; i++) {
  for (let j = 0; j < input.length; j++) {
    const str = input[j][i];

    if (!str) continue;

    result += str;
  }
}

console.log(result);
