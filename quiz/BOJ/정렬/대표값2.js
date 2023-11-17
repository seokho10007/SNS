const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const lines = input.map(Number);

function solution(numbers) {
  numbers.sort((a, b) => a - b);

  const average = numbers.reduce((acc, num) => acc + num) / numbers.length;
  const mid = numbers[2];

  return [average, mid].join("\n");
}

console.log(solution(lines));
