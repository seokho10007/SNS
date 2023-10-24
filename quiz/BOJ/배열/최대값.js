const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const arr = input
  .map((line, i) =>
    line
      .split(" ")
      .map((n, j) => [i + 1, j + 1, +n])
      .sort((a, b) => b[2] - a[2]),
  )
  .sort((a, b) => b[0][2] - a[0][2]);

const max = arr[0][0];
console.log(max.pop());
console.log(max.join(" "));
