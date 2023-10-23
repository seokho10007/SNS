const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const N = Number(input);

for (let i = 1; i < N; i++) {
	const blank = " ".repeat(N - i);
	const stars = "*".repeat(i + (i - 1));
	console.log(blank + stars);
}

/* 3. N부터 1까지 공백과 별 찍기 */
for (let j = N; j > 0; j--) {
	const blank = " ".repeat(N - j);
	const stars = "*".repeat(j + (j - 1));
	console.log(blank + stars);
}
