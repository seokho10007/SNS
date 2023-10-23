const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const problem = input.slice(1).map((s) => s.split(" ").map(Number));

const baskets = Array.from({ length: N }, (_, i) => i + 1);

problem.forEach(([a, b]) => {
	[baskets[a - 1], baskets[b - 1]] = [baskets[b - 1], baskets[a - 1]];
});

console.log(baskets.join(" "));
