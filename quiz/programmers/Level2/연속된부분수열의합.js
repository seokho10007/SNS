// 시간초과
//
// function solution(sequence, k) {
// 	let answer = [Infinity, Infinity];

// 	let lt = 0,
// 		rt = 0;

// 	while (lt <= rt && lt < sequence.length && rt < sequence.length) {
// 		let sum = 0;

// 		for (let i = lt; i <= rt; i++) {
// 			sum += sequence[i];
// 		}

// 		if (sum === k) {
// 			// 길이가 짧다면
// 			if (answer[1] - answer[0] > rt - lt) {
// 				answer = [lt, rt];
// 			}
// 			// 시작 인덱스가 작다면
// 			else if (answer[0] > lt) {
// 				answer = [lt, rt];
// 			}
// 		}

// 		if (sum > k) lt += 1;
// 		else rt += 1;
// 	}

// 	return answer;
// }
