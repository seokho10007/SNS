const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const PEOPLE = input[1].split(" ").map(Number);
const M = Number(input[2]);
const RELATION = input.slice(3).map((line) => line.split(" ").map(Number));

function solution(n, people, m, relations) {
  let result = -1;

  const [start, end] = people;

  const info = calculateRelationship(relations);

  const visit = Array(n).fill(false);

  const q = [[start, 0]];

  visit[start - 1] = true;

  while (q.length) {
    const [p, count] = q.shift();

    if (p === end) {
      result = count;
      break;
    }

    const relations = info[p];

    for (let i = 0; i < relations.length; i++) {
      const next = relations[i];

      if (visit[next - 1]) continue;

      visit[next - 1] = true;
      q.push([next, count + 1]);
    }
  }

  return result;
}

function calculateRelationship(relation) {
  return relation.reduce((acc, [p, c]) => {
    if (!acc[p]) acc[p] = [];
    if (!acc[c]) acc[c] = [];

    acc[p].push(c);
    acc[c].push(p);

    return acc;
  }, {});
}

console.log(solution(N, PEOPLE, M, RELATION));
