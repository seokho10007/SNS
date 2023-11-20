const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const BOARD = input.slice(1).map((line) => line.split(" ").map(Number));

const xpos = [1, -1, 0, 0];
const ypos = [0, 0, 1, -1];

function solution(n, m, board) {
  let count = 0;
  let maxSize = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) continue;

      count++;

      const visit = dfs(i, j, board, []);
      maxSize = Math.max(maxSize, visit.length);
    }
  }
  console.log([count, maxSize].join("\n"));
}

function dfs(x, y, board, result) {
  board[x][y] = 0;
  result.push(1);

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [xpos[i] + x, ypos[i] + y];

    if (!board[nx]?.[ny]) continue;

    dfs(nx, ny, board, result);
  }

  return result;
}

solution(N, M, BOARD);
