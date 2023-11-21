const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, map) {
  const dp = Array.from({ length: n }, () => Array(3).fill(Infinity));

  for (let i = 0; i < 3; i++) {
    dp[0][i] = map[0][i];
  }

  for (let i = 1; i < n; i++) {
    const costs = map[i];

    for (let j = 0; j < costs.length; j++) {
      const cost = costs[j];

      for (let k = 0; k < 3; k++) {
        if (j === k) continue;

        dp[i][j] = Math.min(dp[i][j], cost + dp[i - 1][k]);
      }
    }
  }

  return dp[n - 1].sort((a, b) => a - b)[0];
}

console.log(solution(n, map));
