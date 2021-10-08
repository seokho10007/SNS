function solution(rows, columns, queries) {
	var answer = [];

	const matrix = Array.from(new Array(rows + 1), () => new Array(columns + 1).fill(0));

	for (let i = 1; i <= rows; i++) {
		for (let j = 1; j <= columns; j++) {
			matrix[i][j] = (i - 1) * columns + j;
		}
	}

	const len = queries.length;
	for (let i = 0; i < len; i++) {
		const query = queries.shift();
		const [row1, column1, row2, column2] = [query[0], query[1], query[2], query[3]];
		const result = [];

		let prev = matrix[row1][column1];

		for (let i = column1 + 1; i <= column2; i++) {
			result.push(prev);
			[prev, matrix[row1][i]] = [matrix[row1][i], prev];
		}

		for (let i = row1 + 1; i <= row2; i++) {
			result.push(prev);
			[prev, matrix[i][column2]] = [matrix[i][column2], prev];
		}

		for (let i = column2 - 1; i >= column1; i--) {
			result.push(prev);
			[prev, matrix[row2][i]] = [matrix[row2][i], prev];
		}

		for (let i = row2 - 1; i >= row1; i--) {
			result.push(prev);
			[prev, matrix[i][column1]] = [matrix[i][column1], prev];
		}

		answer.push(Math.min(...result));
	}

	return answer;
}
