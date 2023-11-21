const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const numbers = input.split(" ").map(Number);

function solution(numbers) {
  const [a, b, c, d, e, f] = numbers;

  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j !== c || d * i + e * j !== f) continue;

      return [i, j].join(" ");
    }
  }
}

console.log(solution(numbers));
