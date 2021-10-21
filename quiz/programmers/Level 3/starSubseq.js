const solution = (a) => {
	if (a.length <= 2) return 0;
	let answer = 0;

	const arr = checkArr(a);
	const info = checkIntersection(arr);

	for (const key in info) {
		if (info[key] * 2 <= answer) continue;

		const num = Number(key);
		let star = 0;

		for (let i = 0; i < arr.length - 1; i++) {
			if ((arr[i] === num || arr[i + 1] === num) && arr[i] != arr[i + 1]) {
				star += 2;
				i++;
			}
		}
		answer = Math.max(answer, star);
	}

	return answer;
};

const checkIntersection = (a) => {
	const info = {};

	for (let i = 0; i < a.length; i++) {
		if (info.hasOwnProperty(a[i])) info[a[i]] += 1;
		else info[a[i]] = 1;
	}

	return info;
};

const checkArr = (arr) => {
	let stack = [];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		if (stack.length >= 2 && arr[i] === stack[0]) continue;

		if (result[0] === undefined) {
			stack.push(arr[i]);
		} else if (stack[0] !== arr[i]) {
			stack = [arr[i]];
		} else {
			stack.push(arr[i]);
		}

		result.push(arr[i]);
	}

	return result;
};

// const solution = (a) => {
// 	if (a.length <= 2) return 0;
// 	let answer = 0;

// 	const arr = checkArr(a);
// 	console.log(arr);

// 	const cnt = Array(arr.length + 1).fill(0);
// 	for (let i = 0; i < arr.length; i++) cnt[arr[i]]++;

// 	for (let i = 0; i < cnt.length; i++) {
// 		if (cnt[i] * 2 <= answer) continue;
// 		let star = 0;

// 		for (let j = 0; j < arr.length - 1; j++) {
// 			if ((arr[j] == i || arr[j + 1] == i) && arr[j] != arr[j + 1]) {
// 				console.log(arr[j], arr[j + 1]);
// 				star += 2;
// 				j++;
// 			}
// 		}
// 		answer = Math.max(answer, star);
// 	}

// 	return answer;
// };

// const checkArr = (arr) => {
// 	let stack = [];
// 	const result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (stack.length >= 2 && arr[i] === stack[0]) continue;

// 		if (result[0] === undefined) {
// 			stack.push(arr[i]);
// 		} else if (stack[0] !== arr[i]) {
// 			stack = [arr[i]];
// 		} else {
// 			stack.push(arr[i]);
// 		}

// 		result.push(arr[i]);
// 	}

// 	return result;
// };

// const solution = (a) => {
// 	if (a.length <= 1) return 0;
// 	let answer = 0;

// 	// 연속되는 문자일 경우 삭제
// 	const arr = checkArr(a);

// 	const info = checkIntersection(arr);

// 	// for (let i = arr.length % 2; i < arr.length; i += 2) {
// 	// 	console.log(i);
// 	// }

// 	console.log(arr);

// 	return info[0] * 2;
// };
// const checkIntersection = (a) => {
// 	const info = {};

// 	for (let i = 0; i < a.length; i++) {
// 		if (i % 2 === 0 && a[i] === a[i + 1]) continue;
// 		if (info.hasOwnProperty(a[i])) info[a[i]] += 1;
// 		else info[a[i]] = 1;
// 	}

// 	let intersection = 0;
// 	let max = 0;

// 	for (const key in info) {
// 		if (info[key] > max) {
// 			max = Number(info[key]);
// 			intersection = key;
// 		}
// 	}

// 	return [max, intersection];
// };

// const checkArr = (arr) => {
// 	let stack = [];
// 	const result = [];

// 	for (let i = 0; i < arr.length; i++) {
// 		if (stack.length >= 2 && arr[i] === stack[0]) continue;

// 		if (result[0] === undefined) {
// 			stack.push(arr[i]);
// 		} else if (stack[0] !== arr[i]) {
// 			stack = [arr[i]];
// 		} else {
// 			stack.push(arr[i]);
// 		}

// 		result.push(arr[i]);
// 	}

// 	return result;
// };

const a1 = [0, 3, 3, 0, 7, 2, 0, 2, 2, 0];

const a2 = [1, 2, 3, 3, 4, 5, 6];
const a3 = [4, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 3];

console.log(solution(a3));
