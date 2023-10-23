const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const str = input.trim().split(" ");

console.log(str == "" ? 0 : str.length);
