const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [queue1, queue2] = input.map((v) => v.split(' ').map(Number));

function solution(queue1, queue2) {
	var answer = -1;

	const dp1 = [0];
	const dp2 = [0];

	for (let i = 1; i <= queue1.length; i++) {
		dp1.push(queue1[i - 1] + dp1[i - 1]);
		dp2.push(queue2[i - 1] + dp2[i - 1]);
	}

	let count = 0;

	let start1 = 1;
	let start2 = 1;

	let end1 = queue1.length;
	let end2 = queue1.length;

	while (start1 <= end1 && start2 <= end2 && count <= queue1.length * 2) {
		const sum1 = dp1[end1] - dp1[start1 - 1];
		const sum2 = dp2[end2] - dp2[start2 - 1];

		if (sum1 === sum2) {
			answer = count;
			break;
		}

		if (sum1 > sum2) {
			dp2.push(dp1[start1] - dp1[start1 - 1] + dp2[dp2.length - 1]);
			start1 += 1;
			end2 += 1;
		} else {
			dp1.push(dp2[start2] - dp2[start2 - 1] + dp1[dp1.length - 1]);
			start2 += 1;
			end1 += 1;
		}
		count++;
	}

	return answer;
}

console.log(solution(queue1, queue2));
