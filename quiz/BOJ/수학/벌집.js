const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const N = Number(input);

function solution(n) {
  let answer = 1;
  let rooms = 1;

  while (rooms < n) {
    rooms += answer * 6;
    answer++;
  }

  return answer;
}

console.log(solution(N));
