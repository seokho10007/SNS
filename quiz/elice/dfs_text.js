const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', function (x) {
	input.push(x);
}).on('close', function () {
	const [n, m] = input[0].split(' ').map((el) => parseInt(el));

	const result = [];

	const dfs = (now) => {
		if (now.length === m) return result.push(now.join(' '));

		for (let i = 0; i < n; i++) dfs([...now, i + 1]);
	};
	dfs([]);
	console.log(result.join('\n'));
});
