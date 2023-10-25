const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ");

const [A, B, V] = input.map(Number);

function solution(a, b, v) {
  // (v - b - 1): 목표 지점 v에서 b만큼 뺴서 덜가더라도 도착하도록 한다
  // 이때 1을 뺸 이유는 딱 나눠 떨어지지 않으면 +1을 해줘야 하는데 항상 딱 나눠떨어지지 않도록 -1을 뺴준것이다.
  return Math.floor((v - b - 1) / (a - b)) + 1;
}

console.log(solution(A, B, V));
