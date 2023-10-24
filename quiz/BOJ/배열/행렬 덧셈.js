const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const arr1 = generateArray(N);
const arr2 = generateArray(N);

const result = Array.from({ length: N }, () => Array(M).fill());

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    result[i][j] = arr1[i][j] + arr2[i][j];
  }
}

console.log(result.map((nums) => nums.join(" ")).join("\n"));

function generateArray(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const nums = input.shift().split(" ").map(Number);

    arr.push(nums);
  }

  return arr;
}
