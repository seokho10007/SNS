const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

function solution(strs) {
	const answer = [];

	const info = {
		')': '(',
		']': '[',
	};

	for (let i = 0; i < strs.length; i++) {
		const stack = [];
		const str = strs[i];

		if (str[0] === '.' && str.length === 1) {
			break;
		}

		let isSuccess = true;

		for (let j = 0; j < str.length; j++) {
			const s = str[j];

			if (s === '(' || s === '[') {
				stack.push(s);
			}

			if (s === ')' || s === ']') {
				if (info[s] && stack[stack.length - 1] === info[s]) {
					stack.pop();
				} else {
					isSuccess = false;
				}
			}
		}

		if (isSuccess && stack.length === 0) answer.push('yes');
		else answer.push('no');
	}

	return answer.join('\n');
}

console.log(solution(input));
