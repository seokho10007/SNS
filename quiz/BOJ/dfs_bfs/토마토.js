const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const BOX = input.slice(1).map((line) => line.split(" ").map(Number));

const xpos = [0, 0, -1, 1];
const ypos = [-1, 1, 0, 0];

function solution(n, m, board) {
  let answer = 0;

  let tomatoCount = 0;

  const q = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const status = board[i][j];

      if (status === 1) q.push([i, j, 0]);
      if (status === 0) tomatoCount++;
    }
  }

  let idx = 0;

  while (q.length > idx) {
    const [x, y, count] = q[idx];

    board[x][y] = 1;
    answer = Math.max(answer, count);
    idx++;

    // 현재 박스의 상하 좌우 위아래
    for (let i = 0; i < xpos.length; i++) {
      const [nx, ny] = [xpos[i] + x, ypos[i] + y];

      if (!isRange(nx, ny, M, N) || board[nx][ny] !== 0) {
        continue;
      }

      board[nx][ny] = 1;
      tomatoCount--;
      answer = Math.max(answer, count + 1);

      q.push([nx, ny, count + 1]);
    }
  }

  return tomatoCount ? -1 : answer;
}

function isRange(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

console.log(solution(N, M, BOX));
