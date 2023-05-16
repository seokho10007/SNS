const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...nums] = input.map(Number);

function solution(n, nums) {
	const answer = [];

	const stack = [];

	let count = 1;

	for (let i = 0; i < n; i++) {
		const num = nums[i];

		while (count <= num) {
			stack.push(count++);
			answer.push('+');
		}

		const popNum = stack.pop();

		if (popNum > num) {
			return 'NO';
		}

		answer.push('-');
	}

	return answer.join('\n');
}

console.log(solution(n, nums));
