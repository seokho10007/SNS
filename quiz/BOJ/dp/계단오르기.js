const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const list = input.map(Number);

function solution(n, list) {
	const dp = Array(n).fill(0);

	dp[0] = list[0];
	dp[1] = list[0] + list[1];
	dp[2] = Math.max(list[0], list[1]) + list[2];

	for (let i = 3; i < n; i++) {
		// 두칸 전 + 현재칸 vs 세칸전 + 한칸전 + 현재칸
		dp[i] = Math.max(dp[i - 2] + list[i], dp[i - 3] + list[i - 1] + list[i]);
	}

	return dp[n - 1];
}

console.log(solution(n, list));
