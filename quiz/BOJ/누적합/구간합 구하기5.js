const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);

const board = input.slice(0, n).map((str) => str.split(' ').map(Number));
const list = input.slice(n).map((str) => str.split(' ').map(Number));

function solution(n, m, board, list) {
	const answer = [];
	const sums = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			sums[i][j] = board[i - 1][j - 1] + sums[i][j - 1] + sums[i - 1][j] - sums[i - 1][j - 1];
		}
	}

	for (let i = 0; i < m; i++) {
		const [x1, y1, x2, y2] = list[i];

		const result = sums[x2][y2] - sums[x1 - 1][y2] - sums[x2][y1 - 1] + sums[x1 - 1][y1 - 1];

		answer.push(result);
	}

	return answer.join('\n');
}

console.log(solution(n, m, board, list));
