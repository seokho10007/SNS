const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const BOARD = input.slice(1).map((line) => line.split("").map(Number));

const xpos = [0, 0, 1, -1];
const ypos = [1, -1, 0, 0];

function solution(n, board) {
  let count = 0;
  const housingCounts = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isHousing = board[i][j];

      if (isHousing !== 1) continue;

      const result = [];

      dfs(i, j, board, result);

      count += 1;
      housingCounts.push(result.length);
    }
  }

  console.log(count);
  housingCounts.length && console.log(housingCounts.sort((a, b) => a - b).join("\n"));
}

function dfs(x, y, board, result) {
  const n = board.length;

  board[x][y] = 2;
  result.push(1);

  for (let i = 0; i < 4; i++) {
    const nx = xpos[i] + x;
    const ny = ypos[i] + y;

    if (!isRange(nx, ny, n) || board[nx][ny] !== 1) continue;

    dfs(nx, ny, board, result);
  }
}

function isRange(x, y, n) {
  return x >= 0 && x < n && y >= 0 && y < N;
}

solution(N, BOARD);
