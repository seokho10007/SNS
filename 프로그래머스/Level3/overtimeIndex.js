// function solution(works, n) {
// 	var answer = 0;

// 	works.sort((a, b) => b - a);

// 	while (n > 0) {
// 		let check = false;
// 		const average = Math.floor(works.reduce((acc, c) => (acc += c), 0) / works.length);

// 		for (let i = 0; i < works.length; i++) {
// 			if (n === 0) break;

// 			if (works[i] === 0) {
// 				check = true;
// 				continue;
// 			} else check = false;

// 			if (works[i] < average) break;
// 			else if (works[i] === average) {
// 				works[i] -= 1;
// 				n -= 1;
// 			} else {
// 				const m = works[i] - average;
// 				if (n - m > 0) {
// 					works[i] = average;
// 					n -= m;
// 				} else {
// 					works[i] -= 1;
// 					n -= 1;
// 				}
// 			}
// 		}
// 		if (check) break;
// 	}

// 	return works.reduce((acc, c) => (acc += c ** 2), 0);
// }
const solution = (works, n) => {
	const sortedWorks = [...works].sort((a, b) => b - a);

	let index = 0;

	const sum = works.reduce((acc, item) => acc + item, 0);
	if (sum - n <= 0) return 0;

	while (n > 0) {
		if (sortedWorks[index] < sortedWorks[index + 1]) {
			index += 1;
			continue;
		}

		if (sortedWorks[index - 1] === sortedWorks[index]) {
			index = 0;
			continue;
		}

		sortedWorks[index] -= 1;
		n -= 1;
	}

	return sortedWorks.reduce((acc, cur) => (acc += cur ** 2), 0);
};

const list = [
	[[4, 3, 3], 4],
	[[2, 1, 2], 1],
	[[1, 1], 3],
	[[5, 4, 3, 2, 1], 3],
];

list.forEach((v, i) => {
	console.log('-----------------');
	console.log(solution(v[0], v[1]));
});
