// function solution(s) {
// 	var answer = 1;

// 	const len = s.length;

// 	for (let i = 1; i <= len - 1; i++) {
// 		const num = Math.floor(len / 2) > i ? i : len - i - 1;

// 		let left = '';
// 		let right = '';

// 		for (let j = num; j >= 1; j--) {
// 			if (j === num) {
// 				left = s
// 					.substr(i - j, j)
// 					.split('')
// 					.reverse()
// 					.join('');

// 				right = s.substr(i + 1, j);
// 			} else {
// 				left = left.substring(0, left.length - 1);
// 				right = right.substring(0, right.length - 1);
// 			}

// 			if (left === right) {
// 				answer < left.length * 2 + 1 && (answer = left.length * 2 + 1);
// 				break;
// 			}
// 		}
// 	}

// 	return answer;
// }

const solution = (s) => {
	for (let i = s.length; i >= 1; i--) {
		for (let j = 0; j <= s.length - i; j++) {
			const check = checkPalin(s.slice(j, i + j));
			if (check) return i;
		}
	}
};
const checkPalin = (s) => {
	const half = Math.floor(s.length / 2);
	for (let i = 0; i < half; i++) if (s[i] !== s[s.length - 1 - i]) return false;
	return true;
};

// function solution(s) {
// 	var answer = 0;

// 	const len = s.length;

// 	for (let i = 1; i <= len; i++) {
// 		const num = Math.floor(len / 2) > i ? i : len - i - 1;

// 		for (let j = num; j >= 1; j--) {
// 			const left = s.substr(i - j, j);
// 			const right = s
// 				.substr(i + 1, j)
// 				.split('')
// 				.reverse()
// 				.join('');

// 			if (left === right) {
// 				answer < left.length * 2 + 1 && (answer = left.length * 2 + 1);
// 				break;
// 			}
// 		}

// 		// for (let j = 1; j <= num; j++) {
// 		// 	console.log(i, j, s.substr(i - j, j), s[i], s.substr(i + 1, j));
// 		// }
// 	}

// 	return answer;
// }

const s1 = 'abcde';
const s2 = 'absqwew';

console.log(solution(s1));
