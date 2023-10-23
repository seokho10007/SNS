const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
input.slice(1).forEach((s) => {
	console.log(`${s[0]}${s[s.length - 1]}`);
});
