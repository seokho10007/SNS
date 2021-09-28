const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

r1.on('line', function (line) {
	input = line.split(' ').map((v) => Number(v));
	r1.close();
}).on('close', function () {
	// n 현재위치 k 목표 위치
	let [n, k] = input;
	let answer = 0;

	console.log(answer, n, k);

	while (n !== k) {
		if (n * 3 <= k) {
			n *= 3;
			answer++;
		} else {
			// 걸어서 가는 거리보다 범인의 위치를 넘어 순간이동을 하더라도 거리가 가까울 경우
			if (Math.abs(k - n) > Math.abs(n * 3 - k)) {
				n *= 3;
				answer++;
			} else {
				if (n > k) n -= 1;
				else n += 1;
				answer++;
			}
		}
		console.log(answer, n, k);
	}

	console.log(answer);

	process.exit();
});
