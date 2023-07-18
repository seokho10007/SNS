const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, list] = [Number(input.shift()), input.map((v) => v.split(' ').map(Number))];

function solution(n, list) {
	const answer = [];

	// 두수의 최대 공약수를 구하고
	// 두수를 곱한 값에 최대공약수를 나눈 값이 최소 공배수
	for (let i = 0; i < n; i++) {
		const [num1, num2] = list[i];
		answer.push((num1 * num2) / gcd(num1, num2));
	}

	return answer.join('\n');
}

function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}

console.log(solution(n, list));
