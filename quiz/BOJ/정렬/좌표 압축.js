const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

function solution(numbers) {
  const answer = [];

  const sortedNumber = Array.from(numbers.map((n, i) => [i, n])).sort((a, b) => a[1] - b[1]);

  let idx = 0;
  let prev = sortedNumber[idx][1];

  for (let i = 0; i < numbers.length; i++) {
    const [ii, n] = sortedNumber[i];

    if (n !== prev) idx++;

    prev = n;

    answer.push([ii, idx, n]);
  }

  return answer
    .sort((a, b) => a[0] - b[0])
    .map(([, idx]) => idx)
    .join(" ");
}

console.log(solution(numbers));
