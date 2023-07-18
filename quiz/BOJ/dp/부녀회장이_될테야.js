const path = require('path');

const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '../input.txt');
const input = require('fs').readFileSync(filePath).toString().split('\n');

// a층 b호에 살기 위해선 a - 1층의 1호부터 b호까지 사람의 수를 합한 만큼 사람들을 데려와 살아야한다.
// n = 호, k = 층
function solution(k, n) {
	const dp = [];

	dp.push(Array.from(Array(n + 1), (_, i) => i));

	for (let i = 1; i <= k; i++) {
		const floor = [0];

		let sum = 0;

		for (let j = 1; j <= n; j++) {
			sum += dp[i - 1][j];
			floor.push(sum);
		}

		dp.push(floor);
	}

	return dp[k][n];
}

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
	const [K, N] = [Number(input.shift()), Number(input.shift())];

	console.log(solution(K, N));
}
