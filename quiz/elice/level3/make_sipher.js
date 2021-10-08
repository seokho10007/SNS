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
	const list = input.slice();

	list.forEach((el) => {
		let str = '';

		for (let i = 0; i < el.length; i++) {
			const codeNum = el[i].charCodeAt(0);

			if (codeNum === 90) str += String.fromCharCode(65);
			else str += String.fromCharCode(codeNum + 1);
		}
		console.log(str);
	});

	process.exit();
});
