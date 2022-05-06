function solution(board, skill) {
	var answer = 0;
	const nlen = board.length;
	const mlen = board[0].length;

	const de = Array.from({ length: nlen + 1 }, () => Array(mlen + 1).fill(0));

	for (let i = 0; i < skill.length; i++) {
		let [type, r1, c1, r2, c2, degree] = skill[i];

		degree *= type === 2 ? 1 : -1;

		de[r1][c1] += degree;
		de[r1][c2 + 1] += degree * -1;
		de[r2 + 1][c1] += degree * -1;
		de[r2 + 1][c2 + 1] += degree;
	}

	for (let i = 0; i < de.length; i++) {
		for (let j = 0; j < de[0].length; j++) {
			const x = i - 1 >= 0 ? de[i - 1][j] : 0;
			const y = j - 1 >= 0 ? de[i][j - 1] : 0;
			const xy = i - 1 >= 0 && j - 1 >= 0 ? de[i - 1][j - 1] : 0;

			de[i][j] += x + y - xy;
		}
	}

	for (let i = 0; i < nlen; i++) {
		for (let j = 0; j < mlen; j++) {
			if (board[i][j] + de[i][j] > 0) answer++;
		}
	}

	return answer;
}

const b = [
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
	[5, 5, 5, 5, 5],
];
const s = [
	[1, 0, 0, 3, 4, 4],
	[1, 2, 0, 2, 3, 2],
	[2, 1, 0, 3, 1, 2],
	[1, 0, 1, 3, 3, 1],
];

console.log(solution(b, s));
