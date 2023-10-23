const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

const arr = [1, 1, 2, 2, 2, 8];

const result = arr.map((v, i) => v - input[i]);

console.log(result.join(" "));
