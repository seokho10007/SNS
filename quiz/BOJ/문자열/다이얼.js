const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const len = input.length;

let answer = 0;

for (let i = 0; i < len; i++) {
	answer += caseNumber(input[i]);
}

console.log(answer);

function caseNumber(s) {
	let time = 0;

	switch (s) {
		case "A":
		case "B":
		case "C":
			time = 3;
			break;
		case "D":
		case "E":
		case "F":
			time = 4;
			break;
		case "G":
		case "H":
		case "I":
			time = 5;
			break;
		case "J":
		case "K":
		case "L":
			time = 6;
			break;
		case "M":
		case "N":
		case "O":
			time = 7;
			break;
		case "P":
		case "Q":
		case "R":
		case "S":
			time = 8;
			break;
		case "T":
		case "U":
		case "V":
			time = 9;
			break;
		case "W":
		case "X":
		case "Y":
		case "Z":
			time = 10;
			break;
		default:
			time = 0;
			break;
	}

	return time;
}
