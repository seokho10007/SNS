const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const line = input[i].split(" ").map(Number);

  console.log(solution(line));
}

function solution(numbers) {
  numbers = numbers.sort((a, b) => b - a);

  const [a, b, c] = numbers;

  if (a >= b + c) return "Invalid";

  const isEquilateral = a === b && b === c;
  const isIsosceles = a === b || b === c || a === c;

  if (isEquilateral) return "Equilateral";
  else if (isIsosceles) return "Isosceles";
  else return "Scalene";
}
