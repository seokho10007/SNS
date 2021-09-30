const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];
rl.on('line', function (x) {
	input.push(x);
	rl.close();
}).on('close', function () {
	const n = Number(input.shift());

	const dp = Array(n + 1).fill(0);
	dp[0] = 1;

	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}
	console.log(dp);

	process.exit();
});
