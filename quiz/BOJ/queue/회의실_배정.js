const path = require('path');

const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '../input.txt');
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input.shift());
const list = input.map((v) => v.split(' ').map(Number));

function solution(n, list) {
	let answer = 0;

	list.sort((a, b) => (b[1] === a[1] ? a[0] - b[0] : a[1] - b[1]));

	let endtime = -1;

	for (let i = 0; i < n; i++) {
		const times = list[i];

		if (times[0] < endtime) continue;

		endtime = times[1];
		answer++;
	}

	return answer;
}

console.log(solution(n, list));
