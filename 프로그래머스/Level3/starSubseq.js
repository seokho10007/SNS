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
