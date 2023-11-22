const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, g, r] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));

function solution(n, m, g, r, map) {
  let answer = 0;

  const pos = getPosition(map);
  console.log(pos);

  const list = [...Array(g).fill("G"), ...Array(r).fill("R")];
  console.log(list);
  const combination = getCombinations(list, g + r);
  console.log(combination);

  return answer;
}

function getPosition(map) {
  const result = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] !== 2) continue;

      result.push([i, j]);
    }
  }

  return result;
}

function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getCombinations(rest, selectNumber - 1);
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]);
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached);
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

console.log(solution(n, m, g, r, map));
