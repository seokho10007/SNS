const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);

let answer = 0;

for (let i = 0; i < N; i++) {
  let isGroupWord = true;

  const str = input[1 + i];

  const set = [...new Set(str.split(""))];

  for (let j = 0; j < set.length; j++) {
    const replacedStr = str.replaceAll(set[j], " ").replaceAll(/\s+/g, "0");
    const zeroCount = replacedStr.split("").filter((v) => v === "0").length;

    if (zeroCount === 1) continue;

    isGroupWord = false;
    break;
  }

  if (isGroupWord) answer++;
}

console.log(answer);
