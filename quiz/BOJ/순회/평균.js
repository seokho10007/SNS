const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, nums] = [input[0], input[1].split(' ').map((n) => Number(n))];

function solution(n, nums) {
	let answer = 0;
	const max = Math.max(...nums);

	for (let i = 0; i < n; i++) {
		answer += (nums[i] / max) * 100;
	}

	return answer / n;
}

console.log(solution(n, nums));
