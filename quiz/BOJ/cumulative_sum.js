const solution = (board, skill) => {
	const col = board.length;
	const row = board[0].length;

	const dp = Array.from({ length: col }, () => Array(row).fill(0));

	skill.forEach((el) => {
		const [type, r1, c1, r2, c2, de] = el;

		if (type === 1) {
			dp[r1][c1] -= de;

			if (r2 + 1 < col) dp[r2 + 1][c1] += de;
			if (c2 + 1 < row) dp[r1][c2 + 1] += de;
			if (r2 + 1 < col && c2 + 1 < row) dp[r2 + 1][c2 + 1] -= de;
		} else {
			dp[r1][c1] += de;

			if (r2 + 1 < col) dp[r2 + 1][c1] -= de;
			if (c2 + 1 < row) dp[r1][c2 + 1] -= de;
			if (r2 + 1 < col && c2 + 1 < row) dp[r2 + 1][c2 + 1] += de;
		}
	});

	for (let i = 0; i < col; i++) {
		for (let j = 0; j < row; j++) {
			const a = i - 1 < 0 ? 0 : dp[i - 1][j];
			const b = j - 1 < 0 ? 0 : dp[i][j - 1];
			const c = i - 1 < 0 || j - 1 < 0 ? 0 : dp[i - 1][j - 1];
			dp[i][j] += a + b - c;
		}
	}

	let result = 0;
	let str = '';

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			const sum = board[i][j] + dp[i][j];
			board[i][j] = sum;

			if (sum > 0) result++;
		}
		str += `${board[i].join(' ')}\n`;
	}

	return result;
};
