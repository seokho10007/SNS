const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ");

const [A, B, C] = input.map(Number);

console.log((A + B) % C);
console.log((A + B) % C);
console.log((A * B) % C);
console.log((A * B) % C);
