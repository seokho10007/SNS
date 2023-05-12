const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// 실패
function solution(n, m, nums) {
	let answer = 0;

	const sums = [0];
	const count = Array(m).fill(0);

	for (let i = 1; i <= n; i++) {
		sums.push((nums[i - 1] + sums[i - 1]) % m);

		if (sums[i] === 0) answer++;

		count[sums[i]]++;
	}

	for (let i = 0; i < m; i++) {
		if (count[i] > 1) {
			answer += (count[i] * (count[i] - 1)) / 2;
		}
	}

	return answer;
}

console.log(solution(n, m, nums));
