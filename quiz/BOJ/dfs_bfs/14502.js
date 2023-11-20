const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = input.slice(1).map((line) => line.split(" "));

const FIXED_NUMBER = 3;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function solution(n, m, board) {
  let answer = 0;

  const zeroCount = board.reduce((acc, line) => {
    const zero = line.filter((s) => s === "0").length;
    return acc + zero;
  }, 0);

  const coordinates = getCoordinates(board);
  const combination = getCombination(coordinates, 0, [], []);

  for (let i = 0; i < combination.length; i++) {
    const pillars = combination[i];
    const newBoard = Array.from({ length: n }, (_, i) => board[i].slice());

    pillars.forEach(([x, y]) => (newBoard[x][y] = "1"));

    let count = 0;

    // 바이러스 전파
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < m; k++) {
        const now = newBoard[j][k];

        if (now !== "2") continue;

        count += dfs(j, k, 0, newBoard);
      }
    }

    answer = Math.max(answer, zeroCount - count - 3);
  }

  return answer;
}

function getCoordinates(board) {
  const arr = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "0") arr.push([i, j]);
    }
  }

  return arr;
}

function getCombination(coordinates, idx, list, result) {
  // 3이면
  if (list.length === FIXED_NUMBER) {
    result.push(list);
    return result;
  }

  for (let i = idx; i < coordinates.length; i++) {
    getCombination(coordinates, i + 1, [...list, coordinates[i]], result);
  }

  return result;
}

function dfs(x, y, count, board) {
  board[x][y] = "2";

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) continue;
    if (board[nx]?.[ny] !== "0") continue;

    count = dfs(nx, ny, count + 1, board);
  }

  return count;
}

console.log(solution(n, m, board));
