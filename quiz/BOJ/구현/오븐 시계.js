const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

let [HH, MM] = input[0].split(" ").map(Number);
const N = Number(input[1]);

const h = (HH + Math.floor((MM + N) / 60)) % 24;
const m = (MM + N) % 60;

console.log(h, m);
