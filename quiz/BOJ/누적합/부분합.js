const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// 데이터 개수: 100000
// 시간제한: 0.5
// logn ~ nlogn 까지가 허용범위
function solution(n, m, nums) {
	let answer = Infinity;

	let sum = nums[0];

	let start = 0;
	let end = 0;

	// 시간복잡도: O(n)
	while (start <= end && start < n && end < n) {
		// 작다면 숫자를 하나 더 늘려서 더해보자
		// 크다면 숫자를 하나 줄이자
		if (sum >= m) {
			answer = Math.min(answer, end - start + 1);
		}

		if (sum >= m) {
			sum -= nums[start++];
		} else {
			sum += nums[++end];
		}
	}

	return answer === Infinity ? 0 : answer;
}

console.log(solution(n, m, nums));
