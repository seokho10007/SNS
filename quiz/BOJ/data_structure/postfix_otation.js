let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
	let [n, str, ...nums] = input;
	const stack = [];

	for (let i = 0; i < str.length; i++) {
		const params = str[i];

		if (params >= 'A' && params <= 'Z')
			stack.push(nums[params.charCodeAt(0) - 65]);
		else {
			const n2 = stack.pop();
			const n1 = stack.pop();
			stack.push(eval(n1 + params + n2));
		}
	}

	return stack[0].toFixed(2);
};

console.log(solution(input));
