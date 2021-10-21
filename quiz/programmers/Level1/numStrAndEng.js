const dic = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

function solution(s) {
	if (isNum(s)) return Number(s);
	let str = '';
	let result = '';

	s.split('').forEach((v) => {
		if (isNum(v)) result += v;
		else {
			str += v;
			const num = dic[str];

			if (num >= 0) {
				result += num;
				str = '';
			}
		}
	});
	return Number(result);
}

// 다른사람 풀이
// function solution(s) {
// 	let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// 	var answer = s;

// 	for (let i = 0; i < numbers.length; i++) {
// 		let arr = answer.split(numbers[i]);
// 		answer = arr.join(i);
// 		console.log(arr, answer, numbers[i]);
// 	}

// 	return Number(answer);
// }
