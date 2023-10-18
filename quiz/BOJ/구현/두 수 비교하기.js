const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const [A, B] = require("fs").readFileSync(filePath).toString().split(" ").map(Number);

console.log(A > B ? ">" : A < B ? "<" : "==");
