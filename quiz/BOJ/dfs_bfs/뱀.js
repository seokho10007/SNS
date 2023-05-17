// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `6
3
3 4
2 5
5 3
3
3 D
15 L
17 D`.split('\n');

const [n, k] = [Number(input.shift()), Number(input.shift())];
const apples = Array.from({ length: k }, () =>
	input
		.shift()
		.split(' ')
		.map((n) => Number(n)),
);

const l = Number(input.shift());
const moves = input.map((info) => {
	const [n, d] = info.split(' ');

	return [Number(n), d];
});

const DIR = {
	U: [-1, 0],
	D: [1, 0],
	L: [0, -1],
	R: [0, 1],
};

function solution(n, k, apples, l, moves) {
	let answer = 0;

	const rotations = moves.reduce((acc, [time, direction]) => {
		acc[time] = direction === 'L' ? -1 : 1;
		return acc;
	}, {});

	// 머리의 이동 방향과 꼬리의 이동방향을 체크해야함
	const board = Array.from({ length: n }, () => Array(n).fill(0));

	for (let i = 0; i < k; i++) {
		const [x, y] = apples[i];
		board[x - 1][y - 1] = 2;

		board[0][0] = 1;
	}
	const offset = [
		[0, 1],
		[1, 0],
		[0, -1],
		[-1, 0],
	];

	const snake = [[0, 0]];
	let direction = 0;
	let tailIndex = 0;

	while (true) {
		answer++;

		const [x, y] = snake[snake.length - 1];
		const [dx, dy] = offset[direction];
		const [nx, ny] = [x + dx, y + dy];

		if (nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1) break;

		if (board[nx][ny] !== 2) {
			const [tx, ty] = snake[tailIndex];
			board[tx][ty] = 0;
			tailIndex++;
		}

		snake.push([nx, ny]);
		board[nx][ny] = 1;

		direction = (direction + 4 + (rotations[answer] ?? 0)) % 4;

		console.log(dx, dy);
	}

	return answer;
}

console.log(solution(n, k, apples, l, moves));
