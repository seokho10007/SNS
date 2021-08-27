function solution(expression) {
	let answer = 0;

	const signList = expression.match(/[-*+]/g);
	const defaultSign = new Set(signList);

	const combination = [];

	for (let i = 0; i < defaultSign.size; i++) {
		const arr = [...defaultSign];
		const sign = arr.splice(i, 1).join('');
		combination.push(...getCombination(sign, arr, [sign], []));
	}

	const arr = expression.split(/(\D)/);

	combination.forEach((el) => {
		let formula = [...arr];
		for (let i = 0; i < el.length; i++) {
			while (formula.indexOf(el[i]) !== -1) {
				const index = formula.indexOf(el[i]);
				const sum = eval(formula.slice(index - 1, index + 2).join(''));
				formula = [...formula.slice(0, index - 1), String(sum), ...formula.slice(index + 2)];
			}
		}
		Math.abs(formula[0]) > answer && (answer = Math.abs(formula[0]));
	});

	return answer;
}

const getCombination = (sign, arr, list, result) => {
	if (arr.length === 0) {
		result.push(list);
		return result;
	}

	for (let i = 0; i < arr.length; i++) {
		const a = [...arr];
		const nextSign = a.splice(i, 1).join('');
		result = getCombination(nextSign, a, [...list, nextSign], result);
	}

	return result;
};
