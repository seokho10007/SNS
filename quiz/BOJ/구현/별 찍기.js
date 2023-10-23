const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = 1; i <= N; i++) console.log(" ".repeat(N - i) + "*".repeat(i));
