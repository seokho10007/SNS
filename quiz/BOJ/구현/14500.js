const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(" ").map(Number));

// 도형
const FIGURE = [
  [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
  ],
  [
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
  ],
  [
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
  ],
  [
    [0, 1, 0],
    [1, 1, 0],
    [1, 0, 0],
  ],
];

function solution(n, m, board) {
  let answer = 0;

  const list = [];

  for (let h = 0; h < FIGURE.length; h++) {
    const figure = rotate(FIGURE[h]);

    for (let i = 0; i < figure.length; i++) {
      const f = figure[i];
      const arr = [];

      let xmin = Infinity;
      let ymin = Infinity;

      for (let j = 0; j < f.length; j++) {
        for (let k = 0; k < f[j].length; k++) {
          if (!f[j][k]) continue;
          arr.push([j, k]);
          xmin = Math.min(xmin, j);
          ymin = Math.min(ymin, k);
        }
      }

      list.push(arr.map(([x, y]) => [x - xmin, y - ymin]));
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < list.length; k++) {
        const f = list[k];
        let sum = 0;

        for (let h = 0; h < f.length; h++) {
          const [x, y] = f[h];
          const score = board[x + i]?.[y + j];

          if (score === undefined) {
            sum = Number.MAX_SAFE_INTEGER * -1;
            break;
          }

          sum += score;
        }

        if (sum < 0) continue;

        answer = Math.max(answer, sum);
      }
    }
  }

  return answer;
}

function rotate(figure) {
  const arr = [];

  for (let i = 0; i < 4; i++) {
    for (let y = 0; y < figure.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [figure[x][y], figure[y][x]] = [figure[y][x], figure[x][y]];
      }
    }

    figure.forEach((element) => {
      element.reverse();
    });

    const slice = figure.map((line) => line.slice());
    arr.push(slice);
  }

  return arr;
}

console.log(solution(n, m, board));
