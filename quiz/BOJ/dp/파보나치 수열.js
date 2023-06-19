const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const t = Number(input[0]);
const list = input.slice(1).map(Number);

const solution = (n, list) => {
	const answer = [];

	const dp = [0, 1];

	for (let i = 0; i < n; i++) {
		const k = list[i];

		for (let i = 2; i <= k; i++) {
			dp[i] = dp[i - 1] + dp[i - 2];
		}

		answer.push(`${dp[k - 1] ?? 1} ${dp[k]} `);
	}

	return answer.join('\n');
};

console.log(solution(t, list));
