const solution = (board, moves) => {
	let answer = 0;

	const result = [];

	moves.forEach((move) => {
		for (const value of board) {
			if (value[move - 1] !== 0) {
				result.push(value[move - 1]);
				value[move - 1] = 0;
				break;
			}
		}

		result.forEach((v, i) => {
			// 첫번째 요소가 아니고
			if (i !== 0 && v === result[i - 1]) {
				answer += 2;
				result.splice(i, 1);
				result.splice(i - 1, 1);
			}
		});
	});
};

const b1 = [
	[0, 0, 0, 0, 0],
	[0, 0, 1, 0, 3],
	[0, 2, 5, 0, 1],
	[4, 2, 4, 4, 2],
	[3, 5, 1, 3, 1],
];
const m1 = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(b1, m1));
