// 가장 큰 숫자와 반대되는 면이 (n * n) * 2 개를 가짐
// 해당 면과 붙어 있는 4면 중 가장 작은 숫자가 (n * n) * 2 개를 가짐
// 그 다음 작은 숫자가 (n * n)의 면을 가짐

// 2
// 1 2 3 4 5 6
// 일때
// 6이 가장 크므로 마주 보고 있는 숫자인 1이 (2*2)*2 개의 면을 가짐: 8 * 1 = 8
// 1과 붙어있는 면중 첫번째로 작은 숫자인 2가 (2*2)*2 개의 면을 가짐: 8 * 2 = 16
// 1과 붙어있는 면 중 두번째로 작은 숫자인 3이 (2*2) 개의 면을 가짐: 4 * 3 = 12
// 16 + 12 + 8 = 36

// const input = require('fs')
// 	.readFileSync('/dev/stdin')
// 	.toString()
// 	.trim()
// 	.split('\n')

const input = `2
1 2 3 4 5 6`.split('\n');

const n = Number(input.shift());
const arr = input[0].split(' ').map(Number);

console.log(n, arr);

function solution(n, arr) {
	let max = -1,
		maxIdx = -1;

	for (let i = 0; i < 6; i++) {
		if (max < arr[i]) {
			max = arr[i];
			maxIdx = i;
		}
	}

	// 반댓면
	const beforeIdx = 5 - maxIdx;

	// 반댓면에 맞닿아 있는 면중 가장 작은 면
	// 해당 면과 반갯면에

	for (let i = 0; i < 6; i++) {
		if (i === maxIdx) continue;
	}
}

console.log(solution(n, arr));

//   3
// 4 0 1 5
//   2
