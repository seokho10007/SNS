const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, ...nums] = input.map(Number);

function bubble(n, nums) {
	const arr = nums.slice();

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}

	return arr.join('\n');
}

function selection(n, nums) {
	const arr = nums.slice();

	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[minIndex] > arr[j]) {
				minIndex = j;
			}
		}

		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}

	return arr.join('\n');
}

function insertion(n, nums) {
	const arr = nums.slice();

	for (let i = 1; i < n; i++) {
		let l = i;

		while (l > 0 && arr[l] < arr[l - 1]) {
			[arr[l], arr[l - 1]] = [arr[l - 1], arr[l]];
			l--;
		}
	}

	return arr.join('\n');
}

// console.log(bubble(n, nums));
// console.log(selection(n, nums));
console.log(insertion(n, nums));
