const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

function solution(n, m) {
  let answer = 0;

  const q = [[n, 0]];

  const max = 100000 + n;

  const visit = Array(max).fill(false);

  while (q.length) {
    const [pos, count] = q.shift();

    if (pos === m) {
      answer = count;
      break;
    }

    [pos + 1, pos - 1, pos * 2].forEach((next) => {
      if (next < 0 || next > max || visit[next]) return;

      visit[next] = true;
      q.push([next, count + 1]);
    });
  }

  return answer;
}

console.log(solution(n, m));
