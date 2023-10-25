const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const [N, decimal] = input.split(" ").map(Number);

let quotient = N;
let result = [];

const n = 35 + 65 - 10;

while (quotient !== 0) {
  const remain = quotient % decimal;

  const str = remain < 10 ? remain : String.fromCharCode(remain + 65 - 10);

  result.push(str);
  quotient = Math.floor(quotient / decimal);
}

console.log(result.reverse().join(""));
