const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const [x, y, w, h] = input.split(" ").map(Number);

// 4개를 구해야함
// x: 0과의 거리, w와의 거리
// y: 0과의 거리, h와의 거리
// 4개중 가장 가까운 곳으로
function solution(x, y, w, h) {
  return Math.min(x, y, w - x, h - y);
}

console.log(solution(x, y, w, h));
