const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 0; i < T; i++) {
  const N = Number(input[1 + 3 * i]);
  const line1 = input[2 + 3 * i].split(" ").map(Number);
  const line2 = input[3 + 3 * i].split(" ").map(Number);

  console.log(solution(N, [line1, line2]));
}

function solution(n, lines) {
  const MAX_LINES = 2;

  // 주변에 나보다 높은 점수를 가진 친구가있는지 검사
  const dp = Array.from({ length: MAX_LINES }, () => Array(n).fill(0));
  dp[0][0] = lines[0][0];
  dp[1][0] = lines[1][0];

  if (n === 1) return Math.max(dp[0][0], dp[1][0]);

  dp[0][1] = dp[1][0] + lines[0][1];
  dp[1][1] = dp[0][0] + lines[1][1];

  for (let i = 2; i < n; i++) {
    for (let j = 0; j < MAX_LINES; j++) {
      dp[j][i] = Math.max(dp[j ^ 1][i - 1], dp[j ^ 1][i - 2]) + lines[j][i];
    }
  }

  return Math.max(dp[0][n - 1], dp[1][n - 1]);
}
