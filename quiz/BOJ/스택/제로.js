const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [k, ...nums] = input.map((v) => Number(v));

function solution(k, nums) {
	const stack = [];

	for (let i = 0; i < k; i++) {
		if (nums[i] === 0) stack.pop();
		else stack.push(nums[i]);
	}

	return stack.reduce((acc, cur) => (acc += cur), 0);
}

console.log(solution(k, nums));
