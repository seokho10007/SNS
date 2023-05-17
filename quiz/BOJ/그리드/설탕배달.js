const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString();

const n = Number(input);
function solution(n) {
	let answer = 0;

	while (n > 0) {
		if (n % 5 === 0) {
			answer += Math.floor(n / 5);
			n = 0;
		} else {
			n -= 3;
			answer++;
		}

		if (n < 0) return -1;
	}

	return answer;
}

console.log(solution(n));
