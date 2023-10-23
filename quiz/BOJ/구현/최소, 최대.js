const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1]
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);

console.log(nums[0], nums[N - 1]);
