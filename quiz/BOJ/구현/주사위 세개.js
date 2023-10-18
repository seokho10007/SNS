const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ").map(Number).sort();

let dup = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
	const n = input[i];
	for (let j = i + 1; j < input.length; j++) {
		const m = input[j];

		if (n !== m) break;

		count++;
	}

	dup = n;

	if (count !== 0) break;
}

console.log(count === 2 ? 10000 + 1000 * dup : count === 1 ? 1000 + 100 * dup : 100 * dup);
