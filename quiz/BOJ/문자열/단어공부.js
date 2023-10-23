const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().toUpperCase();

const n = input.length;

const obj = {};

for (let i = 0; i < n; i++) {
	const s = input[i];

	if (!obj[s]) obj[s] = 0;

	obj[s] += 1;
}

const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

console.log(arr[0][1] === arr[1]?.[1] ? "?" : arr[0][0]);
