const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const arr = input.map((v) => v.split(' ').map((el) => el * 1));

const solution = (n, arr) => {
	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				console.log(`${i}에서 ${k}를 거쳐 ${j}로 가는 경로: ${arr[i][k] && arr[k][j] ? '연결됨' : '연결안됨'}`);
				if (arr[i][k] && arr[k][j]) arr[i][j] = 1;
			}
		}
	}

	return arr.reduce((a, c) => a + c.join(' ') + '\n', '');
};

console.log(solution(n, arr));
