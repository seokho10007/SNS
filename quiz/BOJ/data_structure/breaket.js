let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...list] = input;

const checkStr = (str) => {
	const stack = [];
	let check = true;

	for (let i = 0; i < str.length; i++) {
		if (!check) break;
		if (str[i] === '(') stack.push(str[i]);
		else {
			if (stack.length) stack.pop();
			else check = false;
		}
	}

	if (check && stack.length === 0) return 'YES';
	else return 'NO';
};

const result = list.reduce((a, c) => {
	a.push(checkStr(c));
	return a;
}, []);

console.log(result.join('\n'));
