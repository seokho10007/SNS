function solution(enter, leave) {
	const answer = Array(enter.length).fill(0);

	const info = {};
	enter.forEach((v) => (info[v] = []));

	const stack = new Set();

	for (let i = 0, j = 0; i < enter.length; i++) {
		stack.add(enter[i]);

		while (stack.has(leave[j])) {
			const n = leave[j];
			stack.delete(leave[j]);

			info[n].push(...stack);
			j++;
		}
	}

	for (const n in info) {
		answer[n - 1] += info[n].length;
		info[n].forEach((v) => (answer[v - 1] += 1));
	}

	return answer;
}
