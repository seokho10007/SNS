// const solution = (s) => {
// 	let answer = [];

// 	const defaultStr = '110';

// 	for (let i = 0; i < s.length; i++) {
// 		let str = s[i];
// 		let count = 0;

// 		while (str.lastIndexOf(defaultStr) !== -1) {
// 			str = str.replace(defaultStr, '');
// 			count++;
// 		}

// 		// 110을 제거한 문자열이 빈 문자열일 경우 해당 문자열은 110으로만 이루어져 있다
// 		// 따라서 연산을 진행하는 것이 의미가 없기 때문에 기존 문자열을 반환한다
// 		if (str === '') {
// 			answer[answer.length] = s[i];
// 			continue;
// 		}

// 		const joinArr = defaultStr.repeat(count);

// 		const index =
// 			str.search('11') >= 0
// 				? str.search('11')
// 				: str.lastIndexOf('0') >= 0
// 				? str.lastIndexOf('0') + 1
// 				: -1;

// 		str = `${str.slice(0, index)}${joinArr}${str.slice(index)}`;

// 		answer[answer.length] = str;
// 	}

// 	return answer;
// };

function findIdx(str) {
	return str.search('11') >= 0
		? str.search('11')
		: str.lastIndexOf('0') >= 0
		? str.lastIndexOf('0') + 1
		: -1;
}

function make110(cnt) {
	return '110'.repeat(cnt);
}
function is110(arr) {
	return (
		arr[arr.length - 1] === '1' && arr[arr.length - 2] === '1' && arr[arr.length - 3] === '0'
	);
}

function solution(s) {
	var answer = [];

	answer = s.map((str) => {
		const arr = str.split('');
		let stack = [];
		let cnt = 0;

		while (arr.length) {
			stack.push(arr.pop());

			if (is110(stack)) {
				const a = [...stack].join();
				for (let i = 0; i < 3; i++) {
					stack.pop();
				}
				console.log(stack);
				cnt++;
			}
		}

		str = stack.reverse().join('');

		const index = findIdx(str);

		const tail = str.slice(index, str.length);
		str = str.slice(0, index) + make110(cnt) + tail;

		return str;
	});
	return answer;
}

const s1 = ['1110', '100111100', '0111111010', '1100111011101001'];
const s2 = ['01110'];
11011;
console.log(solution(s1));
