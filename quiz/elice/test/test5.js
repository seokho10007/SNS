const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

const bfs = (loc, board, visit) => {
	let [o, v] = [0, 0];

	const xlen = board.length;
	const ylen = board[0].length;

	const xpos = [1, -1, 0, 0];
	const ypos = [0, 0, 1, -1];

	const q = [];
	q.push([loc[0], loc[1]]);

	while (q.length) {
		const [x, y] = q.shift();

		visit[x][y] = true;
		if (board[x][y] === 'o') o++;
		else if (board[x][y] === 'v') v++;

		for (let i = 0; i < xpos.length; i++) {
			const [nx, ny] = [xpos[i] + x, ypos[i] + y];
			if (checkDist(nx, ny, xlen, ylen)) {
				if (!visit[nx][ny] && board[nx][ny] !== '#') {
					visit[nx][ny] = true;
					q.push([nx, ny]);
				}
			}
		}
	}

	if (o > v) return [o, 0];
	else return [0, v];
};

const checkDist = (x, y, xlen, ylen) => x >= 0 && x < xlen && y >= 0 && y < ylen;

rl.on('line', function (x) {
	input.push(x);
}).on('close', function () {
	const [r, c] = input
		.shift()
		.split(' ')
		.map((v) => Number(v));
	const board = input.map((el) => el.split(''));

	const visit = Array.from({ length: r }, () => Array(c).fill(false));
	const result = [];

	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (board[i][j] !== '#' && !visit[i][j]) {
				result.push(bfs([i, j], board, visit));
			}
		}
	}

	let [o, v] = [0, 0];
	result.forEach(([a, b]) => {
		o += a;
		v += b;
	});
	console.log(`${o} ${v}`);

	process.exit();
});
