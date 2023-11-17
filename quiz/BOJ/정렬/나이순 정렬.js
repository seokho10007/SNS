const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const lines = input.slice(1).map((line) => line.split(" "));

function solution(info) {
  return info
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((line) => line.join(" "))
    .join("\n");
}

console.log(solution(lines));
