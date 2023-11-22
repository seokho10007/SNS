const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const list = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const MAX = 101;

function solution(n, list) {
  let answer = 0;

  const map = Array.from({ length: MAX }, () => Array(MAX).fill(0));

  for (let i = 0; i < n; i++) {
    let [x, y, d, g] = list[i];

    map[x][y] = 1;

    const move = [d];

    for (let j = 0; j < g; j++) {
      const temp = [];

      for (let k = move.length - 1; k >= 0; k--) {
        temp.push((move[k] + 1) % 4);
      }

      move.push(...temp);
    }

    for (let k = 0; k < move.length; k++) {
      const nd = move[k];
      const [nx, ny] = [dx[nd] + x, dy[nd] + y];

      [x, y] = [nx, ny];
      map[nx][ny] = 1;
    }
  }

  for (let i = 0; i < MAX - 1; i++) {
    for (let j = 0; j < MAX - 1; j++) {
      if (!map[i][j] || !map[i + 1][j] || !map[i][j + 1] || !map[i + 1][j + 1]) continue;

      answer += 1;
    }
  }

  return answer;
}

console.log(solution(n, list));
