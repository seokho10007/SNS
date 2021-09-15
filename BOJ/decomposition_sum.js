const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const solution = (n) => {
	for (let i = 1; i <= n; i++) {
		const list = i.toString().split('');
		const sum = list.reduce((a, c) => a + Number(c), i);

		if (sum === n) return i;
	}
	return 0;
};

console.log(solution(Number(input)));
