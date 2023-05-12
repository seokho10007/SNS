const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

function solution(n, m, nums) {
	let answer = 0;

	const dp = [0];

	for (let i = 1; i <= n; i++) {
		dp.push(nums[i - 1] + dp[i - 1]);
	}

	let start = 1;
	let end = 1;

	while (start <= end && end <= n) {
		const segment = dp[end] - dp[start - 1];

		if (segment === m) {
			answer++;
		}

		// start와 end가 같은 경우에 만약 부분합이 m보다 크다면 start가 증가해 반복문이 끝나버리는 문제 발생
		if (start === end) {
			end++;
		} else if (segment > m) {
			start++;
		} else {
			end++;
		}
	}

	return answer;
}

console.log(solution(n, m, nums));
