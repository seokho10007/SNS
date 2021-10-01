const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

r1.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const n = Number(input.shift());
	const list = input.map((v) => v.split(' ').map((el) => Number(el)));

	const max = Math.max(...list.flat());

	const board = Array.from({ length: max }, () => Array(max).fill(0));

	list.forEach((el, idx) => {
		const [x, y, ylen, xlen] = el;

		for (let i = x; i < x + xlen; i++) {
			for (let j = y; j < y + ylen; j++) {
				board[max - 1 - i][max - 1 - j] = idx + 1;
			}
		}
	});

	console.log(board);

	process.exit();
});
