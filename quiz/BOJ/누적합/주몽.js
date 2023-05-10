const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = [Number(input[0]), Number(input[1])];

const nums = input[2].split(' ').map(Number);

// 해당 함수의 시간복잡도: O(nlogn)
// 투포인터의 시간복잡도: O(n)
// 정렬의 시간복잡도: O(nlogn)
// 따라서 가장 큰 시간복잡도인 O(nlogn)이 해당 함수의 시간복잡도로 설정됨
function solution(n, m, nums) {
	let answer = 0;

	// 데이터의 크기가 15000이기 떄문에 정렬 알고리즘의 시간복잡도인 O(nlogn)이 큰 영향을 미치지 않는다
	nums = nums.sort((a, b) => a - b);

	let start = 0;
	let end = n - 1;

	// 투 포인터의 시간복잡도: O(n)
	while (start < end && start < n && end < n) {
		const sum = nums[start] + nums[end];

		if (sum === m && start !== end) {
			answer++;
		}

		if (sum > m) {
			end--;
		} else {
			start++;
		}
	}

	return answer;
}

console.log(solution(n, m, nums));
