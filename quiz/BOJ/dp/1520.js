const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const BOARD = input.slice(1).map((line) => line.split(" ").map(Number));

const xpos = [-1, 1, 0, 0];
const ypos = [0, 0, -1, 1];

function solution(n, m, board) {
  const dp = Array.from({ length: n }, () => Array(m).fill(-1));
  dp[n - 1][m - 1] = 1;

  function dfs(x, y) {
    if (dp[x][y] !== -1) {
      return dp[x][y];
    }

    dp[x][y] = 0;

    const now = board[x][y];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [xpos[i] + x, ypos[i] + y];

      const next = board[nx]?.[ny];

      if (!next || next >= now) continue;

      dp[x][y] += dfs(nx, ny);
    }

    return dp[x][y];
  }

  return dfs(0, 0);
}

console.log(solution(N, M, BOARD));
