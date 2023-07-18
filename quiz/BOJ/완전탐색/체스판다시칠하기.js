const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const board = input.map((v) => v.split(''));

function solution(n, m, board) {
	let answer = 64;

	for (let i = 0; i <= n - 8; i++) {
		for (let j = 0; j <= m - 8; j++) {
			let count1 = 0;
			let count2 = 0;

			for (let k = i; k < i + 8; k++) {
				for (let l = j; l < j + 8; l++) {
					const str = (k - i + l - j) % 2 === 0 ? 'W' : 'B';
					if (board[k][l] !== str) count1++;
					if (board[k][l] === str) count2++;
				}
			}

			answer = Math.min(answer, count1, count2);
		}
	}

	return answer;
}

console.log(solution(n, m, board));
