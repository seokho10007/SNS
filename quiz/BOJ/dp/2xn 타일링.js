const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

function solution(n) {
	const dp = [0, 1, 2];

	for (let i = 3; i <= n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;

	return dp[n] % 10007;
}

console.log(solution(n));
