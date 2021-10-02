const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = 0;

r1.on('line', function (line) {
	input = Number(line);
	r1.close();
}).on('close', function () {
	let n = input;

	if (n === 1) return console.log(4);

	let result = n;

	while (n > 1) {
		if (result < n) result = n;

		if (n % 2 === 0) n = n / 2;
		else n = n * 3 + 1;
		console.log(n, result);
	}

	console.log(result);

	process.exit();
});
