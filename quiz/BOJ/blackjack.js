const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const example = input.map((v) => v.split(' ').map((el) => Number(el)));

const [n, m] = example.shift();
const list = example[0];
const result = [];

const checkList = (sum, cnt, idx) => {
	// 숫자 3개를 합했을 때
	if (cnt === 3) {
		if (sum > m) return;
		return result.push(sum);
	}
	if (idx >= n) return;

	for (let i = idx; i < n; i++) checkList(sum + list[i], cnt + 1, i + 1);

	return;
};

// 합, 합한 숫자 개수, 인덱스
checkList(0, 0, 0);

console.log(result.sort((a, b) => b - a)[0]);
