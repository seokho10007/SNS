const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split('').map(Number));

const end_point = [N - 1, M - 1];
const pos = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

function solution(n, m, board) {
	let answer = 0;

	const q = [[0, 0, 1]];

	while (q.length) {
		const [x, y, count] = q.shift();

		if (x === end_point[0] && y === end_point[1]) {
			answer = count;
			break;
		}

		for (let i = 0; i < 4; i++) {
			const xy = pos[i];
			const [nx, ny] = [x + xy[0], y + xy[1]];

			if (checkPos(nx, ny, n, m) && board[nx][ny]) {
				board[nx][ny] = 0;
				q.push([nx, ny, count + 1]);
			}
		}
	}

	return answer;
}

function checkPos(x, y, n, m) {
	return x >= 0 && x < n && y >= 0 && y < m;
}

console.log(solution(N, M, map));
