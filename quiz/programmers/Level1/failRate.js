const solution = (N, stages) => {
	const result = [];

	for (let i = 1; i <= N; i++) {
		let user = 0;
		let nonPassed = 0;

		stages.forEach((v) => {
			if (v >= i) {
				user++;
				v === i && nonPassed++;
			}
		});

		result.push([i, nonPassed / user]);
	}
	result.sort((a, b) => b[1] - a[1]);
	return result.map((v) => v[0]);
};

const n1 = 5;
const s1 = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(n1, s1));
