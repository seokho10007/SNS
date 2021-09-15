const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, arr, m, list] = input.map((v) => v.split(' ').map((el) => el * 1));

const solution = (n, arr, m, list) => {
	let str = '';

	let left = 0;
	let right = n - 1;
	arr.sort((a, b) => a - b);

	for (let i = 0; i < m; i++) str += find_list(left, right, arr, list[i]);

	return str;
};

const find_list = (left, right, arr, key) => {
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		console.log(left, right, arr[mid], key, arr[mid] === key);

		if (arr[mid] === key) return '1\n';

		if (arr[mid] > key) right = mid - 1;
		else if (arr[mid] < key) left = mid + 1;
	}

	return '0\n';
};

console.log(solution(n, arr, m, list));
