const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

function solution(n) {
  const num = BigInt(n);

  return [String((num * (num - BigInt(1)) * (num - BigInt(2))) / BigInt(6)), 3].join("\n");
}

console.log(solution(n));
