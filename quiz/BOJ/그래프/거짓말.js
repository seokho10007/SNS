const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const [k, ...ts] = input.shift().split(" ").map(Number);
const list = input.map((v) => v.split(" ").map(Number));

// 사람 수, 파티수, 진실을 아는 사람 수, 진실 배열, 파티에 오는 사람 배열
function solution(n, m, k, ts, list) {
  // 진실을 아는 사람이 없을땐 파티의 수만큼 거짓을 말할 수 있음
  if (k === 0) return m;

  let answer = 0;

  const trust = Array.from({ length: n + 1 }, (_, i) => false);

  for (let i = 0; i < k; i++) {
    trust[ts[i]] = true;
  }

  // 각 인덱스로 연결
  const arr = Array.from({ length: n + 1 }, (_, i) => i);

  // 진실을 아는 사람이 있다면 배열에 체크하고
  // 없다면 넘어감
  function union(args) {
    const index = args.findIndex((v) => trust[find(v)]);

    if (index < 0) {
      for (let i = 0; i < args.length - 1; i++) {
        const r1 = find(args[i]);
        const r2 = find(args[i + 1]);

        if (r1 === r2) return;

        if (r1 > r2) arr[r1] = r2;
        else arr[r2] = r1;
      }
      return;
    }

    const target = args[index];

    for (let i = 0; i < args.length; i++) {
      if (args[i] === target) continue;

      const r1 = find(args[i]);
      const r2 = find(target);

      // 이미 진실을 아는 사람과 연결되어 있다면
      if (trust[r1]) continue;

      arr[r1] = r2;
    }
  }

  function find(node) {
    const target = arr[node];

    if (target === node) return node;

    arr[node] = find(target);

    return arr[node];
  }

  for (let i = 0; i < m; i++) {
    const [num, ...par] = list[i];

    union(par);
  }

  for (let i = 0; i < m; i++) {
    const [num, ...par] = list[i];

    // 진실을 아는 사람이 한명이라도 있다면
    const isTrust = par.some((v) => trust[arr[find(v)]]);

    if (isTrust) continue;

    answer++;
  }

  return answer;
}

console.log(solution(n, m, k, ts, list));
