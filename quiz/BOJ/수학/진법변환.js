const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString();

const [N, decimal] = input.split(" ");

const arr = N.split("").reverse();

let result = 0;

for (let i = 0; i < N.length; i++) {
  const n = isNaN(Number(arr[i])) ? arr[i].charCodeAt(0) - 65 + 10 : Number(arr[i]);

  result += Number(decimal) ** i * n;
}

console.log(result);

const a = 60466175;

console.log(a.toString(36));
