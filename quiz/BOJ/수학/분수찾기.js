const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const N = Number(input);

function solution(n) {
  let idx = 0;
  let values = 0;

  while (values < n) {
    idx++;
    values += idx;
  }

  const count = n - (values - idx);

  const numerator = 1 + (count - 1);
  const denominator = idx - (count - 1);

  return idx % 2 === 1 ? `${denominator}/${numerator}` : `${numerator}/${denominator}`;
}

console.log(solution(N));
