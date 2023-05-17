const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString();

function solution(str) {
	let answer = 0;
	const arr = str.split('-');

	for (let i = 0; i < arr.length; i++) {
		const sum = arr[i].split('+').reduce((acc, n) => acc + Number(n), 0);

		if (i === 0) answer += sum;
		else answer -= sum;
	}

	return answer;
}

console.log(solution(input));
