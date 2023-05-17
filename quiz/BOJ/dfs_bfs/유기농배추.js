const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const t = Number(input.shift());

const xpos = [0, 0, 1, -1];
const ypos = [1, -1, 0, 0];

for (let i = 0; i < t; i++) {
	const [n, m, k] = input.shift().split(' ').map(Number);
	const list = input.splice(0, k).map((v) => v.split(' ').map(Number));

	console.log(solution(n, m, k, list));
}

function solution(n, m, k, list) {
	let answer = 0;

	const board = Array.from({ length: n }, () => Array(m).fill(0));

	for (let i = 0; i < k; i++) {
		const [x, y] = list[i];
		board[x][y] = 1;
	}

	const checkCb = checkBoard(n, m);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (board[i][j] === 0) continue;

			dfs([i, j], board, checkCb);
			answer++;
		}
	}

	return answer;
}

function checkBoard(n, m) {
	return (x, y) => x >= 0 && x < n && y >= 0 && y < m;
}

function dfs(pos, board, checkCb) {
	const [x, y] = pos;

	if (board[x][y] === 0) return;

	board[x][y] = 0;

	for (let i = 0; i < 4; i++) {
		const [nx, ny] = [x + xpos[i], y + ypos[i]];

		if (!checkCb(nx, ny) || board[nx][ny] === 0) continue;

		dfs([nx, ny], board, checkCb);
	}
}
