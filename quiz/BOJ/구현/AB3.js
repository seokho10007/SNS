const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

console.log(N + M);
console.log(N - M);
console.log(N * M);
console.log(Math.floor(N / M));
console.log(N % M);
