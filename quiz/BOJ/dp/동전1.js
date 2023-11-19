const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const COINS = input.slice(1).map(Number);

function solution(n, k, coins) {
  const dp = Array(k + 1).fill(0);

  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    const coin = coins[i];

    for (let j = coin; j < k + 1; j++) {
      dp[j] += dp[j - coin];
    }
  }

  return dp[k];
}

console.log(solution(N, K, COINS));
