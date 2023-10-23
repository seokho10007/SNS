const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs")
	.readFileSync(filePath)
	.toString()
	.trim()
	.split(" ")
	.map((s) => Number(s.split("").reverse().join("")))
	.sort((a, b) => b - a);

console.log(input[0]);
