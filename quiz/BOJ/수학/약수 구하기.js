const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const [N, K] = input.split(" ").map(Number);

function solution(n, k) {
  const divisors = [];

  for (let i = 1; i <= N; i++) {
    if (n % i === 0) divisors.push(i);
  }

  return divisors[k - 1] ?? 0;
}

console.log(solution(N, K));
