const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

function solution(n) {
	let answer = 0;

	let start = 1;
	let end = 1;

	let sum = 1;

	// 시간 복잡도: O(N)
	// 해당 반복문 내부에서 누적합을 구한다.
	while (start <= end && start <= n && end <= n) {
		if (sum === n) {
			answer++;
		}

		if (sum < n) {
			sum += ++end;
		} else {
			sum -= start++;
		}
	}

	return answer;
}

console.log(solution(n));
