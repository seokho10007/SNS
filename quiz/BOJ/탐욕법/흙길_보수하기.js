const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, L] = input.shift().split(' ').map(Number);
const pools = input.map((item) => item.split(' ').map(Number));

function solution(n, l, pools) {
	let answer = 0;

	pools.sort((a, b) => a[1] - b[1]);

	let pos = 0;

	for (let i = 0; i < n; i++) {
		const [start, end] = pools[i];

		// 이미 널판지가 존재한다면
		if (end <= pos) continue;

		// 현재 시작지점에 널판지가 존재한다면
		const max = Math.max(pos, start);

		// 시작지점부터 끝지점 까지 몇개의 널판지가 필요한지
		const count = Math.ceil((end - max) / l);

		// 널판지 더하기
		answer += count;
		// 시작지점부터 널판지 개수만큼
		pos = max + count * l;
	}

	return answer;
}

console.log(solution(N, L, pools));
