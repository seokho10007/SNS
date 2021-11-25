let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (input) => {
	let stack = [];
	let result = '';

	for (let i = 0; i < input.length; i++) {
		let s = input[i];

		if (s >= 'A' && s <= 'Z') result += s;
		else if (s === '(') stack.push(s);
		else if (s === ')') {
			while (stack.length && stack[stack.length - 1] !== '(') result += stack.pop();
			stack.pop();
		} else if (s === '+' || s === '-') {
			while (stack.length && stack[stack.length - 1] !== '(') result += stack.pop();
			stack.push(s);
		} else if (s === '*' || s === '/') {
			while (
				stack.length &&
				(stack[stack.length - 1] === '*' || stack[stack.length - 1] === '/')
			)
				result += stack.pop();

			stack.push(s);
		}
	}

	while (stack.length) result += stack.pop();

	return result;
};

console.log(solution(input));
