function solution(maps) {
	var answer = -1;

	const queue = [];
	const xpos = [0, 0, 1, -1];
	const ypos = [1, -1, 0, 0];

	// [x좌표, y좌표, 방문한 노드 개수]
	queue.push([0, 0, 1]);

	while (queue.length !== 0) {
		const [x, y, price] = queue.shift();
		maps[x][y] = 2;

		if (x === maps.length - 1 && y === maps[0].length - 1) return price;

		for (let i = 0; i < 4; i++) {
			const [nextX, nextY] = [x + xpos[i], y + ypos[i]];

			if (nextX >= 0 && nextX < maps.length && nextY >= 0 && nextY < maps[0].length) {
				if (maps[nextX][nextY] === 1) {
					queue.push([nextX, nextY, price + 1]);
					maps[nextX][nextY] = 2;
				}
			}
		}
	}

	return answer;
}
