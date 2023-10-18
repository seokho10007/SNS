const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let [N, M] = input.map(Number);

let sum = 0;

let cnt = 0;

while (M > 0) {
	const num = M % 10;
	const mul = N * num;

	console.log(mul);

	sum += mul * 10 ** cnt;

	M = Math.floor(M / 10);
	cnt++;
}

console.log(sum);
