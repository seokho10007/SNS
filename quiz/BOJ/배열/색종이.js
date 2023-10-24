const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input.shift());
const board = Array.from({ length: 100 }, () => Array(100).fill(-1));

for (let i = 0; i < N; i++) {
  const [x, y] = input[i].split(" ").map((n) => +n - 1);

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      if (board[j][k] !== -1) continue;

      board[j][k] = 100;
    }
  }
}

let result = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (board[i][j] === -1) continue;

    result += 1;
  }
}

console.log(result);
