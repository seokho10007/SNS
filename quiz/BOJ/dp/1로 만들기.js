const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

function solution1(n) {
	const dp = [0, 0, 1, 1];

	function makeOne(x) {
		if (x === 1) return 0;

		// 이미 기록되어 있다면
		if (dp[x] > 0) return dp[x];

		// 1을 빼서 계산한 값을 확인
		dp[x] = makeOne(x - 1) + 1;

		if (x % 2 === 0) {
			const temp = makeOne(Math.floor(x / 2)) + 1;

			// 기존 값보다 새로 계산한 값이 작다면
			if (dp[x] > temp) dp[x] = temp;
		}
		if (x % 3 === 0) {
			const temp = makeOne(Math.floor(x / 3)) + 1;
			if (dp[x] > temp) dp[x] = temp;
		}

		return dp[x];
	}

	for (let i = 4; i <= n; i++) makeOne(i);

	return dp[n];
}

function solution(n) {
	// 1일때: 0번의 연산으로 1, 2일떄: 1번의 연산으로 1, 3일때: 1번의 연산으로 1
	const dp = [0, 0, 1, 1];

	// 점화식: dp[x] = Math.min(dp[x - 1], dp[x / 2], dp[x / 3])
	// bottom-up 으로 풀어야함
	for (let i = 4; i <= n; i++) {
		const r1 = dp[i - 1] + 1;
		const r2 = i % 2 === 0 ? dp[i / 2] + 1 : Infinity;
		const r3 = i % 3 === 0 ? dp[i / 3] + 1 : Infinity;

		dp[i] = Math.min(r1, r2, r3);
	}

	return dp[n];
}

console.log(solution(n));
