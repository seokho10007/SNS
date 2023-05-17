const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);
const rooms = input[1].split(' ').map(Number);
const [a, b] = input[2].split(' ').map(Number);

function solution(n, rooms, a, b) {
	let answer = 0;

	// 총 시험 감독관의 수를 먼저 구하고
	for (let i = 0; i < n; i++) {
		const room = rooms[i];

		rooms[i] = room < a ? 0 : room - a;
		answer += Math.ceil(rooms[i] / b);
		answer++;
	}

	return answer;
}

console.log(solution(n, rooms, a, b));
