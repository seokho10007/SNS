const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const N = Number(input.shift());
const nums = input.map((s) => s.split(" ").map(Number));

for (let i = 0; i < N; i++) {
	const [n1, n2] = nums[i];

	console.log(n1 + n2);
}
