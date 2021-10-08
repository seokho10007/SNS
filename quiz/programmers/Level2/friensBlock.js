function solution(m, n, board) {
	let answer = 0;
	const visited = Array(m)
		.fill(0)
		.map((_) => Array(n).fill(1));
	const xpos = [-1, -1, 0, 0];
	const ypos = [-1, 0, -1, 0];

	board = board.map((v) => v.split(''));
	let check = true;

	while (check) {
		check = false;
		for (let i = 1; i < m; i++) {
			for (let j = 1; j < n; j++) {
				const [x, y, w, z] = [board[i - 1][j - 1], board[i - 1][j], board[i][j - 1], board[i][j]];

				if (x !== ' ' && x === y && w === z && y === w) {
					check = true;
					for (let k = 0; k < xpos.length; k++) {
						if (visited[i + xpos[k]][j + ypos[k]] !== 0) {
							visited[i + xpos[k]][j + ypos[k]] = 0;
							answer++;
						}
					}
				}
			}
		}
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (visited[i][j] === 0) {
					board[i][j] = ' ';
				}
			}
		}

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				// 1 이며 아래가 0일때 (아래로 내려감)
				if (j + 1 < m && visited[j][i] === 1 && visited[j + 1][i] === 0) {
					for (let k = j; k < m; k++) {
						if (k + 1 < m && visited[k + 1][i] === 0) {
							[visited[k][i], visited[k + 1][i]] = [visited[k + 1][i], visited[k][i]];
							[board[k][i], board[k + 1][i]] = [board[k + 1][i], board[k][i]];
						} else break;
					}
					j = -1;
				}
			}
		}
	}

	return answer;
}
