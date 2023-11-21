const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const n = Number(input[i]);

  console.log(solution(n));
}

function solution(n) {
  const divisors = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 0) divisors.push(i);
  }

  const sum = divisors.reduce((acc, divisor) => acc + divisor, 0);

  if (sum === n) return `${n} = ${divisors.join(" + ")}`;

  return `${n} is NOT perfect.`;
}
