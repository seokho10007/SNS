const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const COINS = input.slice(1).map(Number);

console.log(solution(N, K, COINS));

function solution(n, k, coins) {
  // 몇개기 필요한지 기록
  const dp = Array(k + 1).fill(10001);

  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const coin = coins[i];

    for (let j = coin; j < k + 1; j += 1) {
      const count = dp[j - coin] + 1;

      dp[j] = Math.min(dp[j], count);
    }
  }

  return dp[k] === 10001 ? -1 : dp[k];
}
