const DIRECTIONS = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
];

function solution(board) {
	board = board.map((v) => v.split(''));

	const n = board.length,
		m = board[0].length;

	const q = [];
	const checkBoard = (x, y) => x >= 0 && x < n && y >= 0 && y < m && board[x][y] !== 'D';

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 'R') {
				q.push([i, j, 0]);
				board[i][j] = 'O';
			}
		}
	}

	while (q.length) {
		const size = q.length;

		for (let i = 0; i < size; i++) {
			const [x, y, cnt] = q.shift();

			for (let j = 0; j < 4; j++) {
				let [nx, ny] = [x + DIRECTIONS[j][0], y + DIRECTIONS[j][1]];

				while (checkBoard(nx, ny)) {
					nx += DIRECTIONS[j][0];
					ny += DIRECTIONS[j][1];
				}

				nx -= DIRECTIONS[j][0];
				ny -= DIRECTIONS[j][1];

				if (board[nx][ny] === 'G') return cnt + 1;
				if (board[nx][ny] !== 'O') {
					board[nx][ny] = 'O';
					q.push([nx, ny, cnt + 1]);
				}
			}
		}
	}
	return -1;
}

const board = ['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....'];

console.log(solution(board));
