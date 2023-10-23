const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = input.length;

for (let i = 0; i < N; i++) {
	const [a, b] = input[i].split(" ").map(Number);

	console.log(a + b);
}
