const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const coordinates = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, coordinates) {
  return coordinates
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((nums) => nums.join(" "))
    .join("\n");
}

console.log(solution(n, coordinates));
