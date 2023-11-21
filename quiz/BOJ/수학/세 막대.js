const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const numbers = input.split(" ").map(Number);

function solution(numbers) {
  numbers.sort((a, b) => b - a);

  const [a, b, c] = numbers;

  // 두변의 길이의 합이 가장 큰 변보다 크다면 삼각형
  // 만약 두변의 길이의 합이 가장 큰 변보다 작다면 가장 큰 변의 길이를 (두 변의 길이의 합 - 1) 로 변경

  if (a < b + c) return a + b + c;

  return 2 * b + 2 * c - 1;
}

console.log(solution(numbers));
