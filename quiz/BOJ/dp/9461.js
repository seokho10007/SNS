const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const N = Number(input[i]);

  console.log(solution(N));
}

function solution(n) {
  const dp = [1, 1, 1];

  for (let i = 3; i < n; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }

  return dp[n - 1];
}
