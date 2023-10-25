const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const lines = input.map(Number);

function solution(angles) {
  const sum = angles.reduce((acc, angle) => acc + angle, 0);

  if (sum !== 180) return "Error";

  // 같은 각의 갯수를 검사하며, 세 각이 같은 경우는 길이가 2, 두 각이 같은 경우는 1, 모두 다른 경우는 0이 출력됨
  const duplicatedAngle = angles.filter(
    (angle, angleIdx) => angles.indexOf(angle) !== angleIdx,
  ).length;

  if (duplicatedAngle === 2) {
    return "Equilateral";
  } else if (duplicatedAngle === 1) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

solution(lines);
