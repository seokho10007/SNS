function solution(board, r, c) {
	var answer = 0;

	const now = board[r][c];
	console.log(now);

	return answer;
}

const b1 = [
	[1, 0, 0, 3],
	[2, 0, 0, 0],
	[0, 0, 0, 2],
	[3, 0, 1, 0],
];
const r1 = 1;
const c1 = 0;

const b2 = [
	[1, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 1, 0],
	[0, 0, 0, 0],
];
const r2 = 1;
const c2 = 0;

console.log(solution(b1, r1, c1));

// < . _ > . - . < _ . > - . ^ > .
