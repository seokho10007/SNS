const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lines = input.slice(1).map(Number);

function solution(n, m, numbers) {
  let answer = Number.MAX_SAFE_INTEGER;

  let start = 0;
  let end = 0;

  numbers.sort((a, b) => a - b);

  while (start <= end && end < n) {
    if (start === end) {
      end += 1;
      continue;
    }

    const diff = numbers[end] - numbers[start];

    if (diff >= m) {
      answer = Math.min(diff, answer);
      start += 1;
    } else {
      end += 1;
    }
  }

  return answer;
}

console.log(solution(n, m, lines));
