const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

function solution(n, k, list) {
	let answer = -101 * 100000;

	const dp = [0];

	for (let i = 1; i <= n; i++) {
		dp.push(list[i - 1] + dp[i - 1]);
	}

	let start = 1;
	let end = k;

	while (end <= n) {
		answer = Math.max(answer, dp[end++] - dp[start++ - 1]);
	}

	return answer;
}

console.log(solution(n, k, list));
