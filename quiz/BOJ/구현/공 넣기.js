const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const problem = input.slice(1).map((s) => s.split(" ").map(Number));

const baskets = Array(N).fill(0);

for (let idx = 0; idx < M; idx++) {
	const [i, j, k] = problem[idx];

	for (let idx2 = i; idx2 <= j; idx2++) baskets[idx2 - 1] = k;
}

console.log(baskets.join(" "));
