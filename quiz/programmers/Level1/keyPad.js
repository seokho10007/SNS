const pad = {
	1: [0, 0],
	2: [0, 1],
	3: [0, 2],
	4: [1, 0],
	5: [1, 1],
	6: [1, 2],
	7: [2, 0],
	8: [2, 1],
	9: [2, 2],
	0: [3, 1],
};

function solution(numbers, hand) {
	var answer = '';

	let left = [3, 0];
	let right = [3, 2];

	for (let i = 0; i < numbers.length; i++) {
		const num = numbers[i];
		if (num === 1 || num === 4 || num === 7) {
			answer += 'L';
			left = pad[num];
		} else if (num === 3 || num === 6 || num === 9) {
			answer += 'R';
			right = pad[num];
		} else {
			const leftDist = checkDistance(left, pad[num]);
			const rightDist = checkDistance(right, pad[num]);

			if (leftDist < rightDist) {
				answer += 'L';
				left = pad[num];
			} else if (leftDist > rightDist) {
				answer += 'R';
				right = pad[num];
			} else {
				if (hand === 'right') {
					answer += 'R';
					right = pad[num];
				} else {
					answer += 'L';
					left = pad[num];
				}
			}
		}
	}

	return answer;
}

const checkDistance = (now, next) => Math.abs(now[0] - next[0]) + Math.abs(now[1] - next[1]);
