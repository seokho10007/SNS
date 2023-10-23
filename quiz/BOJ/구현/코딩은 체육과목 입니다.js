const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

const count = N / 4;

console.log(`${"long ".repeat(count)}int`);
