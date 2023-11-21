const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

function solution(n) {
  if (n === 1) return;

  const answer = [];

  let i = 2;

  while (n !== 1) {
    const quotient = Math.floor(n / i);
    const remain = n % i;

    if (remain === 0) {
      answer.push(i);
      n = quotient;
    } else {
      i++;
    }
  }

  console.log(answer.join("\n"));
}

solution(n);
