const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const t = Number(input[0]);
const list = input.slice(1).map(Number);

function solution(n, list) {
	const answer = [];

	// 점화식: dp[n] = dp[n - 1] + dp[n - 2] + dp[n - 3]
	for (let i = 0; i < n; i++) {
		const k = list[i];
		const dp = [0, 1, 2, 4];

		for (let j = 4; j <= k; j++) dp[j] = dp[j - 1] + dp[j - 2] + dp[j - 3];

		answer.push(dp[k]);
	}

	return answer.join('\n');
}

console.log(solution(t, list));
