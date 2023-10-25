const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const CHANGES = [25, 10, 5, 1];

for (let i = 1; i <= N; i++) {
  solution(Number(input[i]));
}

function solution(number) {
  let result = [];

  for (let i = 0; i < CHANGES.length; i++) {
    result.push(Math.floor(number / CHANGES[i]));
    number %= CHANGES[i];
  }

  console.log(result.join(" "));
}
