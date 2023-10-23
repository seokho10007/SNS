const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const list = input.slice(1);

const arr = Array.from({ length: N }, (_, i) => i + 1);

for (let i = 0; i < M; i++) {
	const [a, b] = list[i].split(" ").map((n) => Number(n) - 1);

	for (let j = 0; j < Math.ceil((b - a) / 2); j++) {
		[arr[a + j], arr[b - j]] = [arr[b - j], arr[a + j]];
	}
}

console.log(arr.join(" "));
