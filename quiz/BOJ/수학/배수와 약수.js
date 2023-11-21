const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.pop();

for (let i = 0; i < input.length; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  console.log(solution(a, b));
}

function solution(a, b) {
  if (b % a === 0) return "factor";
  else if (a % b === 0) return "multiple";
  else return "neither";
}
