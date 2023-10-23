const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const n = input.length;
const SCORE = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let sumOfGrades = 0;
let sumOfSubject = 0;

for (let i = 0; i < n; i++) {
  const info = input[i].split(" ");

  if (info[2] === "P") continue;

  const grades = parseFloat(info[1]);
  const subject = SCORE[info[2]];

  sumOfGrades += grades;
  sumOfSubject += grades * subject;
}

console.log(sumOfSubject / sumOfGrades);
