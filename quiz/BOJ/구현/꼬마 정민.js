const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ");

console.log(input.reduce((acc, cur) => acc + Number(cur), 0));
