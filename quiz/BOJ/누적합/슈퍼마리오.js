const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = input.map(Number);

function solution(nums) {
	let answer = 0;

	const sums = [0];

	for (let i = 1; i <= nums.length; i++) {
		sums.push(nums[i - 1] + sums[i - 1]);
	}

	sums.sort((a, b) => {
		const aAbs = Math.abs(100 - a);
		const bAbs = Math.abs(100 - b);

		if (aAbs === bAbs) return -1;

		return aAbs - bAbs;
	});

	return sums[0];
}

console.log(solution(nums));
