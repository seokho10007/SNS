const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const lines = input.slice(1);

function solution(strings) {
  const set = new Set(strings);

  return Array.from(set)
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join("\n");
}

console.log(solution(lines));
