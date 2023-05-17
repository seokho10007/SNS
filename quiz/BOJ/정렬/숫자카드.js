const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, nums1] = [Number(input[0]), input[1].split(' ').map(Number)];
const [m, nums2] = [Number(input[2]), input[3].split(' ').map(Number)];

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

function binarySearch(st, en, arr, target) {
	if (st > en) return false;

	const mid = Math.ceil((st + en) / 2);

	const current = arr[mid];
	if (current === target) return true;
	if (current > target) return binarySearch(st, mid - 1, arr, target);
	else return binarySearch(mid + 1, en, arr, target);
}

function solution(n, nums1, m, nums2) {
	const answer = [];

	const sortedNums = mergeSort(nums1);

	for (let i = 0; i < m; i++) {
		const result = binarySearch(0, n - 1, sortedNums, nums2[i]);

		answer.push(result ? 1 : 0);
	}

	return answer.join(' ');
}

// function solution(n, nums1, m, nums2) {
// 	const answer = [];

// 	const info = {};

// 	for (let i = 0; i < n; i++) {
// 		info[nums1[i]] = true;
// 	}

// 	for (let i = 0; i < m; i++) {
// 		if (info[nums2[i]]) answer.push(1);
// 		else answer.push(0);
// 	}

// 	return answer.join(' ');
// }

console.log(solution(n, nums1, m, nums2));
