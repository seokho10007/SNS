const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = Number(require("fs").readFileSync(filePath).toString().trim());

const N = Math.floor(input / 10);

console.log(N === 10 || N === 9 ? "A" : N === 8 ? "B" : N === 7 ? "C" : N === 6 ? "D" : "F");
