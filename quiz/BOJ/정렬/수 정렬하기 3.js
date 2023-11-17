const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

function solution(numbers) {
  const arr = [...numbers];

  heapSort(arr);

  return arr.join("\n");
}

console.log(solution(numbers));

function swap(input, i, j) {
  [input[j], input[i]] = [input[i], input[j]];
}

function heapRoot(input, i, arrLen) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;

  if (left < arrLen && input[left] > input[max]) max = left;
  if (right < arrLen && input[right] > input[max]) max = right;

  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max, arrLen);
  }
}

function heapSort(input) {
  let arrLen = input.length;

  for (let i = Math.floor(arrLen / 2); i >= 0; i--) heapRoot(input, i, arrLen);

  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLen--;
    heapRoot(input, 0, arrLen);
  }
}
