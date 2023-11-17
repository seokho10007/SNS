const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input);
const lines = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, numbers) {
  return numbers
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])
    .map((v) => v.join(" "))
    .join("\n");
}

console.log(solution(n, lines));
