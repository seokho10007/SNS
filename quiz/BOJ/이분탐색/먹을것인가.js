// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((v) => v.split(' ').map((el) => Number(el)));

const input = `2
5 3
8 1 7 3 1
3 6 1
3 4
2 13 7
103 11 290 215`
	.trim()
	.split('\n')
	.map((v) => v.split(' ').map((el) => Number(el)));

const [t, ...arr] = input;
const arr2 = [];
const answer = [];

for (let i = 0; i < t; i++) {
	const nm = arr.shift();
	const list1 = arr.shift().sort((a, b) => a - b);
	const list2 = arr.shift().sort((a, b) => a - b);

	arr2.push([nm, list1, list2]);
}

// 순회할 배열, 값
const func1 = (list, num) => {
	let lt = 0;
	let rt = list.length - 1;

	let result = -1;

	while (lt <= rt) {
		const mid = parseInt((lt + rt) / 2);

		if (list[mid] < num) {
			lt = mid + 1;
			result = mid;
		} else {
			rt = mid - 1;
		}
	}

	return result;
};

for (let i = 0; i < t; i++) {
	const [[n, m], list1, list2] = arr2[i];
	let sum = 0;

	for (let j = 0; j < n; j++) {
		const result = func1(list2, list1[j]);

		sum += result + 1;
	}
	answer.push(sum);
}

console.log(answer.join('\n'));
