const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

console.timeLog(NM);

console.log(solution(N));

function solution(n) {
  const dp = Array(n + 1).fill(0);

  dp[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    // 기존 모양의 패턴의 경우의 수 * 3 + 유니크 패턴 2개
    dp[i] = dp[i - 2] * 3 + 2;

    for (let j = 4; j <= i; j += 2) {
      // n === 8일때
      dp[i] += dp[i - j] * 2;
    }
  }
  return dp[n];
}
