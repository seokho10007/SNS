const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.splice(0, n).map((str) => str.split(' ').map(Number));

const k = input.shift();
const list = input.map((str) => str.split(' ').map(Number));

function solution(n, m, board, k, list) {
	const answer = [];

	const dp = Array.from({ length: n + 1 }, () => Array.from({ length: m + 1 }, () => 0));

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			dp[i][j] = board[i - 1][j - 1] + dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1];
		}
	}

	for (let i = 0; i < k; i++) {
		const [x1, y1, x2, y2] = list[i];

		const result = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];

		answer.push(result);
	}

	return answer.join('\n');
}

console.log(solution(n, m, board, k, list));
