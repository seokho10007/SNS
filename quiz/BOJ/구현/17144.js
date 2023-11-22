const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [r, c, t] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(" ").map(Number));
// const [r, c, t] = [50, 50, 1000];
// const map = Array.from({ length: 50 }, () => Array.from({ length: 50 }, (_, i) => i + 1));

map[2][0] = -1;
map[2][1] = -1;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const upDir = [
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 0],
];

const downDir = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

function solution(r, c, t, map) {
  const cleanerPos = getCleanerPos(map);

  for (let i = 0; i < t; i++) {
    spreadFineDust(r, c, map);

    operateCleaner(r, c, cleanerPos[0], map, upDir);
    operateCleaner(r, c, cleanerPos[1], map, downDir);
  }

  return map.reduce((acc, line) => {
    line.forEach((dust) => {
      if (dust === -1) return;
      acc += dust;
    });

    return acc;
  }, 0);
}

function spreadFineDust(r, c, map) {
  const subMap = Array.from({ length: r }, () => Array(c).fill(0));

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const dust = map[i][j];

      if (dust <= 0) continue;

      let count = 0;

      for (let k = 0; k < 4; k++) {
        const [nx, ny] = [dx[k] + i, dy[k] + j];

        if (!isRange(nx, ny, r, c) || map[nx][ny] === -1) continue;

        count += 1;
        subMap[nx][ny] += Math.floor(dust / 5);
      }

      subMap[i][j] -= Math.floor(dust / 5) * count;
    }
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      map[i][j] += subMap[i][j];
    }
  }

  return map;
}

function getCleanerPos(map) {
  const pos = [];

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (map[i][j] !== -1) continue;
      pos.push([i, j]);
    }
  }

  return pos;
}

function operateCleaner(r, c, cleanerPos, map, dir) {
  let pos = [cleanerPos[0], cleanerPos[1] + 1];

  const subMap = Array.from({ length: r }, () => Array(c).fill(0));

  let idx = 0;

  while (isRange(...pos, r, c) && map[pos[0]][pos[1]] !== -1) {
    const [x, y] = pos;

    let [nx, ny] = [dir[idx][0] + x, dir[idx][1] + y];

    if (!isRange(nx, ny, r, c)) {
      idx += 1;
      [nx, ny] = [dir[idx][0] + x, dir[idx][1] + y];
    }

    if (isRange(nx, ny, r, c) && map[nx][ny] !== -1) {
      subMap[nx][ny] = map[x][y];
    }

    map[x][y] = 0;

    pos = [nx, ny];
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      map[i][j] += subMap[i][j];
    }
  }
}

function isRange(x, y, n, m) {
  return x >= 0 && y >= 0 && x < n && y < m;
}

console.log(solution(r, c, t, map));
