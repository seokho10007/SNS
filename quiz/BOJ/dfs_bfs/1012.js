const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const t = Number(input.shift());

for (let i = 0; i < t; i++) {
  const [m, n, k] = input.shift().split(" ").map(Number);
  const cabbages = input.splice(0, k).map((v) => v.split(" ").map(Number));

  console.log(solution(m, n, k, cabbages));
}

function solution(n, m, k, cabbages) {
  let answer = 0;

  const field = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < k; i++) {
    const [x, y] = cabbages[i];

    field[x][y] = 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const cabbage = field[i][j];

      if (!cabbage) continue;

      dfs(i, j, field);
      answer += 1;
    }
  }

  return answer;
}

function dfs(x, y, board) {
  board[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];

    if (!board[nx]?.[ny]) continue;

    dfs(nx, ny, board);
  }
}
