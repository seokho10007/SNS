const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', function (x) {
	input.push(x);
}).on('close', function () {
	const n = input.shift();
	const result = [];

	for (let i = 0; i < n; i++) {
		const str = input[i];
		const len = Math.floor(str.length / 2);

		const s1 = str.length % 2 === 0 ? str.substring(0, len) : str.substring(0, len + 1);
		const s2 = str.substring(len).split('').reverse().join('');
		if (s1 === s2) result.push('NO');
		else result.push('YES');
	}

	console.log(result.join('\n'));

	process.exit();
});
