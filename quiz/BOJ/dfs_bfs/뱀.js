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

const [N, K] = [Number(input.shift()), Number(input.shift())];
const APPLES = Array.from({ length: K }, () =>
	input
		.shift()
		.split(' ')
		.map((n) => Number(n)),
);

const L = Number(input.shift());
const DIRECTIONS = input.map((info) => {
	const [n, d] = info.split(' ');

	return [Number(n), d];
});

const DIR = {
	U: [-1, 0],
	D: [1, 0],
	L: [0, -1],
	R: [0, 1],
};

function solution(n, k, apples, l, directions) {
	let answer = 1;

	const board = getBoard(n, apples);
	const dirInfo = getDirectionInfo(directions);

	let hdt = [0, 1];
	let tdt = [[0, 1]];

	let head = [0, 0];
	let tail = [0, 0];

	while (true) {
		const d = dirInfo[answer];

		// 방향전환
		if (d) {
			hdt = DIR[d];
			tdt.push(DIR[d]);
		}

		console.log(tdt, d);

		const newHead = [head[0] + hdt[0], head[1] + hdt[1]];

		if (checkBoard(...newHead, n)) break;

		const [hx, hy] = newHead;

		const isApple = board[hx][hy] === 2;

		board[hx][hy] = 1;
		head = newHead;

		// 꼬리가 줄어들어야함
		if (!isApple) {
			console.log(board, tail);
			board[tail[0]][tail[1]] = 0;

			const tailDir = tdt[0];

			let [tx, ty] = [tail[0] + tailDir[0], tail[1] + tailDir[1]];

			// 벗어났거나 다믕 이동경로가 지나간 방향이 아니라면
			if (checkBoard(tx, ty, n) || board[tx][ty] === 0) {
				tdt.shift();

				const newTaildir = tailDir[0];

				[tx, ty] = [tail[0] + newTaildir[0], tail[1] + newTaildir[1]];
			}
			tail = [tx, ty];
		}

		answer++;
	}

	// 머리: 방향진행, 방향 바뀔시 변경
	// 꼬리 방향 진홰 방향 바뀔시 변경
}

const getBoard = (n, apples) => {
	const board = Array.from({ length: n }, () => Array(n).fill(0));

	board[0][0] = 1;
	apples.forEach(([n, m]) => (board[n][m] = 2));

	return board;
};

const getDirectionInfo = (directions) => {
	return directions.reduce((acc, [s, d]) => {
		acc[s] = d;

		return acc;
	}, {});
};

const checkBoard = (x, y, n) => x < 0 || x >= n || y < 0 || y >= n;

console.log(solution(N, K, APPLES, L, DIRECTIONS));
