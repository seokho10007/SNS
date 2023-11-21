const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const list = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, list) {
  const dp = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [t, p] = list[i];

    if (i + t > n) dp[i] = dp[i + 1];
    else dp[i] = Math.max(dp[i + 1], p + dp[i + t]);
  }

  return dp[0];
}

// function solution(n, list) {
//   const dp = Array(n + 1).fill(0);

//   for (let i = 0; i < n; i++) {
//     const [t, p] = list[i];

//     for (let j = i + t; j <= n; j++) {
//       const total = dp[i] + p;

//       // 기존 이득이 현재 이전 + 현재 상담을 해서 얻는 이득보다 작다면 현재 이득으로 변경
//       if (dp[j] >= dp[i] + p) continue;

//       dp[j] = total;
//     }
//   }

//   return dp[n];
// }

// function solution(n, list) {
//   let answer = 0;

//   function dfs(idx, count) {
//     for (let i = idx; i < n; i++) {
//       const [t, p] = list[i];

//       if (i + t > n) continue;

//       dfs(i + t, count + p);
//     }

//     answer = Math.max(answer, count);

//     return;
//   }

//   dfs(0, 0);

//   return answer;
// }

console.log(solution(n, list));
