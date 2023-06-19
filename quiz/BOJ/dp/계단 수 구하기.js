const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

function solution(n) {
	const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 11 }, () => 0));

	for (let i = 1; i <= 9; i++) {
		dp[1][i] = 1;
	}

	for (let i = 2; i <= n; i++) {
		dp[i][0] = dp[i - 1][1];
		for (let j = 1; j <= 9; j++) {
			dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
		}
	}

	let answer = 0;

	for (let i = 0; i < 10; i++) {
		answer += dp[n][i];
	}

	return answer % 1000000000;
}

console.log(solution(n));
