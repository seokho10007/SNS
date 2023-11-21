const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const lines = input.map(Number);

function solution(n, m) {
  const primes = [];

  for (let i = n; i <= m; i++) {
    if (isPrime(i)) primes.push(i);
  }

  if (primes.length === 0) return -1;

  return [primes.reduce((acc, prime) => acc + prime, 0), Math.min(...primes)].join("\n");
}

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i !== 0) continue;

    return false;
  }

  return true;
}

console.log(solution(...lines));
