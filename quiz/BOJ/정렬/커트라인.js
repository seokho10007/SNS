const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

function solution(n, k, numbers) {
  numbers.sort((a, b) => b - a);

  return numbers[k - 1];
}

console.log(solution(n, k, numbers));
