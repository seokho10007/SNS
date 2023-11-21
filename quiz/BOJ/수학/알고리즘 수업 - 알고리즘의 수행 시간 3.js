const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input);

function solution(n) {
  return [n ** 2, 2].join("\n");
}

console.log(solution(n));
