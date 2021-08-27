function solution(places) {
	var answer = [];

	places.forEach((el) => {
		let check = true;
		for (let i = 0; i < el.length; i++) {
			for (let j = 0; j < el[i].length; j++) {
				const visited = Array(5)
					.fill(0)
					.map((_) => Array(5).fill(0));
				if (el[i][j] === 'P') {
					if (!dfs([i, j], el, 0, visited)) {
						check = false;
						break;
					}
				}
			}
			if (!check) break;
		}
		answer.push(check ? 1 : 0);
	});

	return answer;
}

const distance = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];

const dfs = (xy, board, man, visited) => {
	if (man > 2) return true;
	const [x, y] = xy;
	let check = true;
	visited[x][y] = true;

	if (man !== 0 && board[x][y] === 'P') return false;

	for (let i = 0; i < distance.length; i++) {
		const [nextX, nextY] = [x + distance[i][0], y + distance[i][1]];

		if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5) {
			if (board[nextX][nextY] !== 'X' && !visited[nextX][nextY])
				check = dfs([nextX, nextY], board, man + 1, visited);
			if (!check) return false;
		}
	}

	return check;
};
