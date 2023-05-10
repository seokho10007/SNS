const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const nums = input[1].split(' ').map(Number);

const list = input.slice(2).map((sec) => sec.split(' ').map((n) => Number(n) - 1));

function solution(n, m, nums, list) {
	const answer = [];
	const sums = [nums[0]];

	// 누적합 구하기, 시간 복잡도: O(n)
	for (let i = 1; i < n; i++) {
		sums.push(nums[i] + sums[i - 1]);
	}

	// 구간합 구하기, 시간 복잡도: O(n)
	for (let j = 0; j < m; j++) {
		const [start, end] = list[j];

		const endSum = sums[end];

		const startSum = start === 0 ? 0 : sums[start - 1];

		answer.push(endSum - startSum);
	}

	return answer.join('\n');
}

console.log(solution(n, m, nums, list));
