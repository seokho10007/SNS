const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
const v = Number(input.pop());
const nums = input[0].split(" ").map(Number);

console.log(nums.filter((n) => n === v).length);
