const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

function solution(n, numbers) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    const num = numbers[i];

    if (isPrime(num)) answer++;
  }

  return answer;
}

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i !== 0) continue;

    return false;
  }

  return true;
}

console.log(solution(n, numbers));
