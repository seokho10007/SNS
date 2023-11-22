class Node {
  constructor(age) {
    this.age = age;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(age) {
    const newNode = new Node(age);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) return -1;
    const del = this.first.age;
    this.length--;
    if (this.isEmpty()) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.first.prev = null;
    }
    return del;
  }
}

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const nutrients = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const trees = input.slice(1 + n).map((line) => line.split(" ").map(Number));

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

function solution(n, m, k, nutrients, trees) {
  const mapToTree = Array.from({ length: n }, () => Array.from({ length: n }, () => new Queue()));
  const mapToNutrient = Array.from(new Array(n), () => new Array(n).fill(5));

  trees.sort((a, b) => b[2] - a[2]);

  for (let i = 0; i < m; i++) {
    const [x, y, z] = trees[i];

    mapToTree[x - 1][y - 1].enqueue(z);
  }

  for (let i = 0; i < k; i++) {
    const deadTrees = spring(mapToTree, mapToNutrient);
    summer(mapToTree, mapToNutrient, deadTrees);
    autumn(mapToTree);
    winter(mapToNutrient, nutrients);
  }

  return mapToTree.reduce((acc, row) => {
    row.forEach((q) => {
      acc += q.length;
    });
    return acc;
  }, 0);
}

// 봄
// 나무 성장
// 양분이 충분하다면 나이만큼 양분을 먹고 나이 증가
// 충분하지 않다면 죽은 배열에 추가
function spring(mapToTree, mapToNutrient) {
  const deadTrees = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const trees = mapToTree[i][j];

      if (!trees.length) continue;

      let node = trees.last;

      while (node) {
        const age = node.age;
        const nutrient = mapToNutrient[i][j];

        if (age > nutrient) {
          deadTrees[i][j] += 1;
        } else {
          node.age += 1;
          mapToNutrient[i][j] -= age;
        }

        node = node.prev;
      }
    }
  }

  return deadTrees;
}

// 여름
// 성장하지 못한 값 제거
function summer(mapToTree, mapToNutrient, deadTrees) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < deadTrees[i][j]; k++) {
        const age = mapToTree[i][j].dequeue();
        mapToNutrient[i][j] += Math.floor(age / 2);
      }
    }
  }
}

// 가을
// 번식하는 나무는 나이 % 5 일 때 번식
// 인접한 8개 칸에 나이가 1인 나무 생성
function autumn(mapToTree) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const trees = mapToTree[i][j];

      let node = trees.first;

      while (node) {
        const age = node.age;
        node = node.next;

        if (age < 5 || age % 5 !== 0) continue;

        for (let k = 0; k < 8; k++) {
          const [nx, ny] = [dx[k] + i, dy[k] + j];

          if (!mapToTree[nx]?.[ny]) continue;
          mapToTree[nx][ny].enqueue(1);
        }
      }
    }
  }
}

// 겨울
// 양분주기
function winter(mapToNutrient, nutrients) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mapToNutrient[i][j] += nutrients[i][j];
    }
  }
}

console.log(solution(n, m, k, nutrients, trees));
