const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

input.slice(1).forEach((s) => {
	const [n, str] = s.split(" ");

	let answer = "";

	for (let i = 0; i < str.length; i++) {
		answer += str[i].repeat(Number(n));
	}

	console.log(answer);
});
