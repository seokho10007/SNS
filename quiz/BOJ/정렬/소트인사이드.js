const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');

const nums = input.map(Number);

function merge(left, right) {
	let l = 0;
	let r = 0;

	const sortedArr = [];
	while (left.length > l && right.length > r) {
		if (left[l] <= right[r]) {
			sortedArr.push(left[l++]);
		} else {
			sortedArr.push(right[r++]);
		}
	}

	let index = l < left.length ? l : r;
	const remain = l < left.length ? left : right;

	for (let i = index; i < remain.length; i++) {
		sortedArr.push(remain[i]);
	}
	return sortedArr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	const boundary = Math.ceil(arr.length / 2);
	const left = arr.slice(0, boundary);
	const right = arr.slice(boundary);

	return merge(mergeSort(left), mergeSort(right));
}

function solution(nums) {
	return mergeSort(nums);
}

console.log(solution(nums));
