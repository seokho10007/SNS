function solution(enter, leave) {
	var answer = Array(enter.length).fill(0);

	const info = {};
	enter.forEach((v) => (info[v] = []));

	const stack = [];
	stack.push(enter.shift());

	while (stack.length) {
		if (stack[0] === leave[0]) {
			const n = stack.shift();
			leave.shift();

			if (stack.length) info[n].push(...stack);
		} else if (stack[stack.length - 1] === leave[0]) {
			const n = stack.pop();
			leave.shift();

			if (stack.length) info[n].push(...stack);
		} else if (enter.length) stack.push(enter.shift());

		if (!stack.length && enter.length) stack.push(enter.shift());
	}

	for (const n in info) {
		answer[n - 1] += info[n].length;
		info[n].forEach((v) => (answer[v - 1] += 1));
	}

	return answer;
}
