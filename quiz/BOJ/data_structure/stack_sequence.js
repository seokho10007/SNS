let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
	const [n, ...list] = input.map((el) => Number(el));
	const stack = [];
	const result = [];
	const sequence = [];
	let num = 1;
	let idx = 0;

	while (num <= n || stack.length) {
		if (num <= n) {
			const rear = stack[stack.length - 1];
			if (rear === list[idx]) {
				idx++;
				sequence.push(stack.pop());
				result.push('-');
			} else {
				stack.push(num++);
				result.push('+');
			}
		} else {
			sequence.push(stack.pop());
			result.push('-');
		}
	}

	return list.join(' ') === sequence.join(' ') ? result.join('\n') : 'NO';
};

console.log(solution(input));
