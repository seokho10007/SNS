const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const coins = input.map(Number);

function solution(n, k, coins) {
	let answer = 0;

	for (let i = n - 1; i >= 0; i--) {
		answer += Math.floor(k / coins[i]);

		if (Math.floor(k / coins[i]) > 0) k = k % coins[i];
	}

	return answer;
}

console.log(solution(n, k, coins));
