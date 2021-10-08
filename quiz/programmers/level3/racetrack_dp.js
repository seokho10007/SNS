function solution(board) {
	const n = board.length;

	const map = Array.from({ length: n }, () =>
		Array.from({ length: n }, () => Array.from({ length: 4 }, () => Infinity)),
	);
	map[0][0] = [0, 0, 0, 0];

	for (let i = 0; i < n * n; i++) {
		for (let r = 0; r < n; r++) {
			for (let c = 0; c < n; c++) {
				if (r - 1 > -1 && !board[r - 1][c]) {
					map[r - 1][c][1] = Math.min(map[r - 1][c][1], map[r][c][0] + 600, map[r][c][1] + 100, map[r][c][2] + 600, map[r][c][3] + 600);
				}
				if (r + 1 < n && !board[r + 1][c]) {
					map[r + 1][c][0] = Math.min(map[r + 1][c][0], map[r][c][0] + 100, map[r][c][1] + 600, map[r][c][2] + 600, map[r][c][3] + 600);
				}
				if (c - 1 > -1 && !board[r][c - 1]) {
					map[r][c - 1][3] = Math.min(map[r][c - 1][3],map[r][c][0] + 600, map[r][c][1] + 600, map[r][c][2] + 600, map[r][c][3] + 100);
				}
				if (c + 1 < n && !board[r][c + 1]) {
					map[r][c + 1][2] = Math.min(map[r][c + 1][2], map[r][c][0] + 600, map[r][c][1] + 600, map[r][c][2] + 100,map[r][c][3] + 600);
				}
			}
		}
	}

	return Math.min(...map[n - 1][n - 1]);
}
