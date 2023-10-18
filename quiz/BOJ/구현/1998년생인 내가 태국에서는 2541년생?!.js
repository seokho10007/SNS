const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const TAIWAN = 543;
const N = Number(input);

console.log(N - TAIWAN);
