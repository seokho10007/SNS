const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const n = Number(input[0]);
const lines = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, lines) {
  // 상하좌우 가장 크고 작은 좌표
  const xPoints = [];
  const yPoints = [];

  for (let i = 0; i < n; i++) {
    const [x, y] = lines[i];

    xPoints.push(x);
    yPoints.push(y);
  }

  const horizontal = Math.max(...xPoints) - Math.min(...xPoints);
  const vertical = Math.max(...yPoints) - Math.min(...yPoints);

  return horizontal * vertical;
}

console.log(solution(n, lines));
