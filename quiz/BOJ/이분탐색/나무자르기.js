const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

function solution(n, m, trees) {
	let answer = 0;

	trees = trees.sort((a, b) => a - b);

	let s = 1;
	let e = trees[n - 1];

	while (s <= e) {
		const mid = Math.floor((s + e) / 2);

		const slicedTrees = trees.reduce((acc, tree) => {
			const sub = tree - mid;

			if (sub > 0) acc += sub;

			return acc;
		}, 0);

		if (slicedTrees >= m) {
			answer = mid;
			s = mid + 1;
		} else {
			e = mid - 1;
		}
	}

	return answer;
}

console.log(solution(n, m, trees));
