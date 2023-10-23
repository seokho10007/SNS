const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

console.log(nums.filter((n) => n < X).join(" "));
