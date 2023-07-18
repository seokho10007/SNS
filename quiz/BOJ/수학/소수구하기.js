const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString();

const [n, m] = input.split(' ').map(Number);

function solution(n, m) {
	const result = [];

	const arr = Array(m + 1).fill(true);
	arr[0] = false;
	arr[1] = false;

	for (let i = 2; i <= Math.sqrt(m); i++) {
		if (!arr[i]) continue;

		for (let j = 2; j <= m / i; j++) arr[i * j] = false;
	}

	for (let i = n; i <= m; i++) {
		if (arr[i]) result.push(i);
	}

	return result.join('\n');
}

console.log(solution(n, m));
