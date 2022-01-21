const { rawListeners } = require('process');
const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let k = 0;

r1.on('line', function (l) {
	k = Number(l);
	r1.close();
}).on('close', function () {
  const result = [0, 0];
	let choco = 1;
  
	while (choco < k) choco *= 2;
  result[0] = choco;

	if (choco === k) result[1] = 0;
	else {
		while (k > 0) {
			choco = parseInt(choco / 2);
			result[1]++;
			if (k >= choco) k -= choco;
		}
	}
  console.log(result.join(' '))

	process.exit();
});
