const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.shift()
	.map((v) => v.split(' ').map((el) => Number(el)));
input.shift();
console.log(
	input
		.map(([x1, y1], i) =>
			input.reduce((acc, [x2, y2], j) => {
				if (i !== j && x1 < x2 && y1 < y2) acc += 1;
				return acc;
			}, 1),
		)
		.join(' '),
);
