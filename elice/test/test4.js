const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', function (x) {
	input.push(x);
}).on('close', function () {
	const t = Number(input.shift());
	const n = Number(input.shift());

	const money = input
		.shift()
		.split(' ')
		.map((v) => Number(v));

	const arr = Array.from({ length: n + 1 }, () => 0);
	arr[0] = 1;

	money.forEach((v) => {
		for (let i = v; i <= n; ++i) arr[i] += arr[i - v];
		console.log(arr);
	});

	console.log(arr[n]);

	process.exit();
});
