const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const map = input.slice(1).map((line) => line.split("").map((s) => Number(s === "T")));

function solution(n, map) {
  let answer = n * n;

  for (let bit = 0; bit < (1 << n) - 1; bit++) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      let tail = 0;
      // console.log({ i, bit });

      for (let j = 0; j < n; j++) {
        let num = map[j][i];
        // console.log({
        //   j,
        //   bit,
        //   "bit.toString": "0".repeat(3 - bit.toString(2).length) + bit.toString(2),
        //   "1 << j": 1 << j,
        //   "1 << j.toString": "0".repeat(3 - (1 << j).toString(2).length) + (1 << j).toString(2),
        //   "bit & (1 << j)": bit & (1 << j),
        //   "bit & (1 << j).toString":
        //     "0".repeat(3 - (bit & (1 << j)).toString(2).length) + (bit & (1 << j)).toString(2),
        // });

        // 비트 연산을 진행시 H가 존재한다면 뒤집어줌
        // ex)
        // bit: 3 === "011"
        // 1 << j: 1 << 3 === 1 << "011" === "110"
        // bit & (1 << j): 011 & 110 === 010 === 2
        // 현재 행이 기준점이 되는 bit와 같지 않다면 뒤집는다
        if ((bit & (1 << j)) !== 0) {
          num = num ^ 1;
        }

        if (num === 1) {
          tail += 1;
        }
      }
      sum += Math.min(tail, n - tail);
    }
    answer = Math.min(sum, answer);
  }

  return answer;
}

console.log(solution(n, map));
