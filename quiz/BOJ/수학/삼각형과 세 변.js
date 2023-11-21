const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

function solution(numbers) {
  const max = Math.max(...numbers);
  const sum = numbers.reduce((acc, n) => acc + n, 0);

  // 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.
  if (max >= sum - max) return "Invalid";

  const [a, b, c] = numbers;

  // 세 변의 길이가 모두 같을때
  if (a === b && b === c) return "Equilateral";

  // 두 변의 길이만 같을 때
  if (a === b || b === c || a === c) return "Isosceles";

  return "Scalene";
}

for (let i = 0; i < input.length - 1; i++) {
  const line = input[i].split(" ").map(Number);

  console.log(solution(line));
}
