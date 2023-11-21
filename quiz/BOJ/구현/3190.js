const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, k] = [Number(input.shift()), Number(input.shift())];
const apples = Array.from({ length: k }, () =>
  input
    .shift()
    .split(" ")
    .map((n) => Number(n)),
);

const l = Number(input.shift());
const moves = input.reduce((acc, info) => {
  const [n, d] = info.split(" ");

  acc[n] = d;

  return acc;
}, {});

// [0, -1] = D: [-1, 0], L: [1, 0]
// [0, 1] = D: [1, 0], L: [-1, 0]
// [-1, 0] = D: [0, 1], L: [0, -1]
// [1, 0] = D: [0, -1], L: [0, 1]

// x, y의 위치를 바꾸고 d라면 * 1, l 이라면 * -1

const DIR = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

function solution(n, k, apples, l, moves) {
  let answer = 0;
  // 꼬리가 늘어나는 부분 줄어드는 부분 체크
  const map = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < k; i++) {
    const [x, y] = apples[i];
    map[x - 1][y - 1] = 1;
  }

  // 뱀
  map[0][0] = 2;

  let count = 0;
  let dir = [0, 1];

  let head = [0, 0];

  const queue = [[0, 0]];

  while (true) {
    count += 1;

    const [nx, ny] = [dir[0] + head[0], dir[1] + head[1]];

    const value = map[nx]?.[ny];

    // 바깥으로 나갔거나 자신의 몸이 있는 위치일 경우
    if (value === undefined || value === 2) {
      answer = count;
      break;
    }

    map[nx][ny] = 2;

    queue.push([nx, ny]);

    if (value !== 1) {
      const tail = queue.shift();

      map[tail[0]][tail[1]] = 0;
    }
    head = [nx, ny];

    const nextDir = moves[count];

    if (nextDir) {
      let cal;

      if (nextDir === "D") {
        cal = dir[0] === 0 ? 1 : -1;
      } else {
        cal = dir[0] === 0 ? -1 : 1;
      }

      dir = [dir[1] * cal, dir[0] * cal];
    }
  }

  return answer;
}

console.log(solution(n, k, apples, l, moves));
