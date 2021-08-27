function solution(orders, course) {
	var answer = [];
	const info = {};
	const maxList = {};

	for (let i = 0; i < orders.length; i++) {
		course.forEach((el) => {
			if (!(orders.length < el)) {
				if (!(el in maxList)) maxList[el] = 0;

				const combinations = getCombination(orders[i].split('').sort(), el);
				combinations.forEach((v) => {
					const str = v.join('');
					if (!(str in info)) info[str] = 0;
					info[str] += 1;
					if (maxList[el] < info[str]) maxList[el] = info[str];
				});
			}
		});
	}

	for (const key in maxList) {
		const max = maxList[key];
		for (const str in info) {
			if (str.length === Number(key)) {
				info[str] > 1 && max === info[str] && answer.push(str);
			}
		}
	}

	return answer.sort();
}

const getCombination = (menu, course) => {
	const results = [];
	if (course === 1) return menu.map((el) => [el]);

	menu.forEach((fixed, index, origin) => {
		const rest = origin.slice(index + 1);
		const combinations = getCombination(rest, course - 1);
		const attached = combinations.map((el) => [fixed, ...el]);
		results.push(...attached);
	});

	return results;
};
