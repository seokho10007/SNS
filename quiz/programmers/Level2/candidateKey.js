const solution = (relation) => {
	const cols = relation[0].length;
	const check = 1 << cols;

	console.log(1 << 3);

	const answer = new Set();
	for (let i = 1; i < check; i++) {
		let temp = relation.map((x) => x.filter((_, col) => i & (1 << col)).join(''));
		const set = new Set(temp);

		temp.length === set.size && answer.add(i);
	}

	for (let x of answer) {
		for (let y of answer) {
			if (x >= y) continue;
			if ((x & y) === x) answer.delete(y);
		}
	}
	return answer.size;
};

const r = [
	['100', 'ryan', 'music', '2'],
	['200', 'apeach', 'math', '2'],
	['300', 'tube', 'computer', '3'],
	['400', 'con', 'computer', '4'],
	['500', 'muzi', 'music', '3'],
	['600', 'apeach', 'music', '2'],
];

console.log(solution(r));
