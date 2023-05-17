const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const lines = input.map(Number);

function solution(n, m, lines) {
	lines = lines.sort((a, b) => a - b);

	let start = 1;
	let end = Math.max(...lines);

	// 시간복잡도 O(N * logN)
	while (start <= end) {
		const mid = parseInt((start + end) / 2);

		const sum = lines.reduce((a, b) => a + parseInt(b / mid), 0);

		if (sum >= m) {
			answer = mid;
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return end;
}

console.log(solution(n, m, lines));
