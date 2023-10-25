const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [a, b] = input.map(Number);

console.log(a * b);
