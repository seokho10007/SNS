const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const N = Number(input);

let start = 2;

for (let i = 0; i < N; i++) {
  start = start * 2 - 1;
}

console.log(start ** 2);

// 1, 7, 13, 19
