function solution(board) {
	let answer = 987654321;
	const dy = [1, 0, -1, 0];
	const dx = [0, 1, 0, -1];
	const len = board.length;
	const arr = Array.from(Array(board.length), () => Array(board.length).fill(0));
	const queue = [];

	const bfs = () => {
		queue.push([0, 0, 1, 0]);
		queue.push([0, 0, 0, 0]);
		while (queue.length) {
			let now = queue.shift();
			let y = now[0],
				x = now[1],
				dir = now[2],
				cost = now[3];
			if (y === len - 1 && x === len - 1) answer = answer > cost ? cost : answer;
			for (let i = 0; i < 4; i++) {
				let ny = y + dy[i],
					nx = x + dx[i];
				if (ny < 0 || nx < 0 || ny > len - 1 || nx > len - 1 || board[ny][nx]) continue;
				let charge = dir === i ? cost + 100 : cost + 600;
				if (!arr[ny][nx] || arr[ny][nx] >= charge) {
					arr[ny][nx] = charge;
					queue.push([ny, nx, i, charge]);
				}
			}
		}
	};

	bfs();
	return answer;
}

const b1 = [
	[0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 0],
	[0, 0, 1, 0, 0, 0],
	[1, 0, 0, 1, 0, 1],
	[0, 1, 0, 0, 0, 1],
	[0, 0, 0, 0, 0, 0],
];

const b2 = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
];

console.log(solution(b1));
