const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, str] = [Number(input[0]), input[1]];

function solution(n, str) {
	let answer = 0;

	for (let i = 0; i < n; i++) {
		answer += Number(str[i]);
	}

	return answer;
}

console.log(solution(n, str));
