const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, q] = input.shift().split(" ").map(Number);

const relation = [];
const question = [];

for (let i = 0; i < n - 1; i++) {
  relation.push(input.shift().split(" ").map(Number));
}
for (let i = 0; i < q; i++) {
  question.push(input.shift().split(" ").map(Number));
}

function solution(n, q, relation, question) {
  // 모든 노드의 관계를 미리 정해야함
  const map = new Map();
  const info = relation.reduce((acc, cur) => {
    const [x, y, k] = cur;

    map.set(`${x},${y}`, k);
    map.set(`${y},${x}`, k);

    if (!acc[x]) acc[x] = [];
    if (!acc[y]) acc[y] = [];

    acc[x].push(y);
    acc[y].push(x);

    return acc;
  }, {});

  for (let i = 1; i <= n; i++) {
    let min = Infinity;
  }

  console.log(info, map);
}

solution(n, q, relation, question);
