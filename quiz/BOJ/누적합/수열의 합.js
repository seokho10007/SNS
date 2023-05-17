const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString();

const [n, l] = input.split(' ').map(Number);

function solution(n, l) {
	let answer = [];

	for (let i = l; i <= 100; i++) {
		let x = n - (i * (i + 1)) / 2;

		if (x % i !== 0) continue;

		x = x / i;

		if (x < -1) continue;

		for (let j = 1; j <= i; j++) answer.push(x + j);
		break;
	}

	return answer.join(' ') || -1;
}

console.log(solution(n, l));
