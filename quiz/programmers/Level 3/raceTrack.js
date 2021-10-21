function solution(board) {
	// 아래 위 우 좌
	const dx = [0, 0, 1, -1];
	const dy = [1, -1, 0, 0];

	const n = board.length;
	let answer = n * n * 600;

	const dp = Array.from({ length: n }, () => Array(n).fill(Infinity));

	// x, y, 값, 코너, 방향
	const q = [[0, 0, 0, 0]];
	dp[0][0] = 0;

	while (q.length) {
		const [x, y, cost, loc] = q.shift();

		// 목표지점 도착했을 때
		if (x === n - 1 && y === n - 1) {
			// 도착한 값이 저장된 값보다 작다면 저장
			if (answer > cost) answer = cost;
			continue;
		}

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dx[i], y + dy[i]];

			if (checkDist(nx, ny, n) && !board[nx][ny]) {
				const sum = x === 0 && y === 0 ? cost + 100 : loc === i ? cost + 100 : cost + 600;

				if (dp[nx][ny] >= sum) {
					dp[nx][ny] = sum;
					q.push([nx, ny, sum, i]);
				}
			}
		}
		q.sort((a, b) => a[3] - b[3]);
	}

	return answer;
}

const checkDist = (x, y, n) => x >= 0 && x < n && y >= 0 && y < n;
