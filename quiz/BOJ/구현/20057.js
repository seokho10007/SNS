const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const board = input.slice(1).map((a) => a.split(" ").map(Number));

const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];

const xdx = [
  [-1, 1, -1, 1, -1, 1, -2, 2, 0, 0],
  [0, 0, 1, 1, 2, 2, 1, 1, 3, 2],
  [-1, 1, -1, 1, -1, 1, -2, 2, 0, 0],
  [0, 0, -1, -1, -2, -2, -1, -1, -3, -2],
];
const ydy = [
  [0, 0, -1, -1, -2, -2, -1, -1, -3, -2],
  [-1, 1, -1, 1, -1, 1, -2, 2, 0, 0],
  [0, 0, 1, 1, 2, 2, 1, 1, 3, 2],
  [-1, 1, -1, 1, -1, 1, -2, 2, 0, 0],
];
const percent = [1, 1, 7, 7, 10, 10, 2, 2, 5];

function solution(n, board) {
  let answer = 0;
  let [x, y] = Array(2).fill(Math.floor(n / 2));
  let dir = 0;
  let count = 1;

  while (count !== n) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < count; j++) {
        answer += spreadSend(x, y, dir, board);
        x += dx[dir];
        y += dy[dir];
      }
      dir = (dir + 1) % 4;
    }

    count++;

    if (count !== n) continue;

    for (let j = 0; j < count; j++) {
      answer += spreadSend(x, y, dir, board);
      x += dx[dir];
      y += dy[dir];
    }
  }

  return answer;
}

function spreadSend(x, y, dir, board) {
  let out = 0;

  let nx = x + dx[dir];
  let ny = y + dy[dir];

  let send = board[nx]?.[ny];

  if (!send) return out;

  let temp = send;

  for (let i = 0; i < 9; i++) {
    let xx = x + xdx[dir][i];
    let yy = y + ydy[dir][i];
    let per = percent[i];

    let p = Math.floor((temp * per) / 100);

    if (xx < 0 || yy < 0 || xx >= board.length || yy >= board.length) out += p;
    else board[xx][yy] += p;

    send -= p;
  }

  let xx = x + xdx[dir][9];
  let yy = y + ydy[dir][9];

  if (xx < 0 || yy < 0 || xx >= board.length || yy >= board.length) out += send;
  else board[xx][yy] += send;

  board[nx][ny] = 0;

  return out;
}

console.log(solution(n, board));
