const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const lines = input.map((line) => line.split(" ").map(Number));

function solution(numbers) {
  const x = new Set();
  const y = new Set();

  for (let i = 0; i < numbers.length; i++) {
    const nx = numbers[i][0];
    const ny = numbers[i][1];

    controller(nx, x);
    controller(ny, y);
  }

  return `${[...x][0]} ${[...y][0]}`;
}

function controller(value, set) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

console.log(solution(lines));
