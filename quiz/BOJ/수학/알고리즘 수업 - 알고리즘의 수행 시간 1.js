const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

function solution(n) {
  return [1, 0].join("\n");
}

console.log(solution(n));
