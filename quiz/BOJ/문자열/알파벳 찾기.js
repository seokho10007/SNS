const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = input.length;

const start = "a".charCodeAt();
const end = "z".charCodeAt();

const alphabet = Array(end - start + 1).fill(-1);

for (let i = 0; i < n; i++) {
	const s = input[i].charCodeAt() - start;

	if (alphabet[s] !== -1) continue;

	alphabet[s] = i;
}

console.log(alphabet.join(" "));
