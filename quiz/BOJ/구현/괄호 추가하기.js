const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const FORMULA = input[1].split("").map((value) => (isNaN(Number(value)) ? value : Number(value)));

function solution(n, formula) {
  const result = dfs(0, formula[0], formula, []);

  return Math.max(...result);
}

function dfs(idx, value, arr, result) {
  if (idx === arr.length - 1) {
    result.push(value);
    return result;
  }

  if (idx + 2 < arr.length) {
    const calculated = calculate(value, arr[idx + 1], arr[idx + 2]);
    result = dfs(idx + 2, calculated, arr, result);
  }

  if (idx + 4 < arr.length) {
    const calculated = calculate(
      value,
      arr[idx + 1],
      calculate(arr[idx + 2], arr[idx + 3], arr[idx + 4]),
    );

    result = dfs(idx + 4, calculated, arr, result);
  }

  return result;
}

function calculate(n1, sign, n2) {
  if (sign === "+") {
    return n1 + n2;
  }
  if (sign === "-") {
    return n1 - n2;
  }
  if (sign === "*") {
    return n1 * n2;
  }
}

console.log(solution(N, FORMULA));
