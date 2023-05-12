const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [s, p] = input[0].split(' ').map(Number);
const str = input[1];
const dna = input[2].split(' ').map(Number);

function solution(s, p, str, dna) {
	let answer = 0;

	const dnasInfo = { A: 0, C: 1, G: 2, T: 3 };
	const dnaSum = [0, 0, 0, 0];

	for (let i = 0; i < p; i++) {
		const index = dnasInfo[str[i]];

		dnaSum[index] += 1;
	}

	let start = 0;
	let end = p - 1;

	while (end < s) {
		// 조건: 입력받은 dna 갯수 이상일 것
		// 조건을 잘 읽자..
		// 귀찮다고 수도코드 넘어가지 말기
		// 여기서 5분..
		const isSame = dna.every((s, i) => s <= dnaSum[i]);

		if (isSame) {
			answer++;
		}

		const startIndex = dnasInfo[str[start++]];
		const endIndex = dnasInfo[str[++end]];

		dnaSum[startIndex] -= 1;
		dnaSum[endIndex] += 1;
	}

	return answer;
}

console.log(solution(s, p, str, dna));
