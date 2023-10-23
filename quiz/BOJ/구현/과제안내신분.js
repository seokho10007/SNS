const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const nums = input.map(Number).sort((a, b) => a - b);

let count = 1;
let i = 0;

while (count <= 30) {
	const n = nums[i];

	if (count !== n) console.log(count);
	else i++;

	count++;
}
