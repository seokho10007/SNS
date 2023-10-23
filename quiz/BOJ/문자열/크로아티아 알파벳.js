const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const ALPHABET = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

let answer = input;

ALPHABET.forEach((v) => {
	answer = answer.replaceAll(v, "0");
});

console.log(answer.length);
