const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

let answer = 0;

for (let i = 1; i <= N; i++) answer += i;

console.log(answer);
