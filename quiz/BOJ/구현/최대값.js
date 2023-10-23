const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const nums = input.map((s, i) => [Number(s), i + 1]).sort((a, b) => b[0] - a[0]);

console.log(nums[0].join("\n"));
