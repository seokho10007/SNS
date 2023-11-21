const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = Number(input);

function solution(n) {
  let answer = "";

  let number = 666;
  let count = 0;

  while (count !== n) {
    const str = String(number);

    if (str.includes("666")) {
      count++;
      answer = str;
    }

    number++;
  }

  return answer;
}

console.log(solution(n));
