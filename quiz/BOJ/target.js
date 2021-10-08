function solution(n, info) {
	var answer = [];

	const arr = Array(11).fill(0);

	const result = dfs(n, 0, arr, info, []);

	for (let i = 0; i < result.length; i++) {
		let ryan = 0;
		let apeach = 0;

		for (let j = 0; j < result[i].length; j++) {
			// 어피치가 맞춘갯수보다 라이언이 맞춘 갯수가 작거나 같을 경우
			if (result[i][j] === 0 && info[j] === 0) continue;
			if (result[i][j] <= info[j]) apeach += 11 - j - 1;
			else ryan += 11 - j - 1;
		}

		if (ryan > apeach) answer.push([ryan - apeach, result[i]]);
	}

	if (!answer.length) return [-1];

	let re = [0, []];

	for (let i = 0; i < answer.length; i++) {
		if (answer[i][0] > re[0]) re = answer[i];
		else if (answer[i][0] === re[0]) {
			for (let j = re[1].length - 1; j >= 0; j--) {
				if (answer[i][1][j] === 0 && re[1][j] === 0) continue;

				if (answer[i][1][j] > re[1][j]) {
					re = answer[i];
					break;
				} else if (answer[i][1][j] < re[1][j]) break;
			}
		}
	}

	return re[1];
}

// 남은 화살, 맞춘 점수, 내가 맞춘 과녁, 상대 과녁, 결과
const dfs = (n, count, my, opp, result) => {
	if (n === 0) {
		result.push(my);
		return;
	}
	if (count >= my.length) return;

	for (let i = 0; i <= opp[count] + 1; i++) {
		if (n - i >= 0) {
			const a = [...my];
			a[count] = i;

			dfs(n - i, count + 1, a, opp, result);
		}
	}

	return result;
};
