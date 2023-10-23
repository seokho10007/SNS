const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const X = Number(input[0]);
const N = Number(input[1]);
const nums = input.slice(2).map((s) => s.split(" ").map(Number));

let sum = 0;

for (let i = 0; i < N; i++) sum += nums[i][0] * nums[i][1];

console.log(sum === X ? "Yes" : "No");
