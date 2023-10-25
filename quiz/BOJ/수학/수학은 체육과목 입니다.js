const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const n = Number(input);

console.log(n * 4);

// 1 2 3 4
// 4 8 12 16
