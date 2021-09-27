const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (n, list) => {
	let answer = 0;

	list.sort((a, b) => {
		if (a[1] === b[1]) return a[0] - b[0];
		return a[1] - b[1];
	});

	for (let i = 1; i < n - 1; i++) {
		const now = list[i];

		const left = list[i - 1];
		const right = list[i + 1];

		const len1 = checkLen(now, left);
		const len2 = checkLen(now, right);

		if (!len1 && !len2) return 'FAIL';

		answer = Math.max(answer, len1, len2);
	}

	return `SUCCESS\n${answer}`;
};

const checkLen = (now, other) => {
	if (now[1] !== other[1]) return 0;

	return Math.abs(now[0] - other[0]);
};

console.log(
	solution(
		Number(n),
		arr.map((el) => el.split(' ').map((v) => Number(v))),
	),
);
