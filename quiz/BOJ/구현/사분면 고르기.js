const input = require("fs").readFileSync(0).toString().split("\n");

const [a, b] = input.map(Number);

console.log(a > 0 && b > 0 ? 1 : a > 0 && b < 0 ? 4 : a < 0 && b > 0 ? 2 : 3);
