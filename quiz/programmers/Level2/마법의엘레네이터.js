function solution(storey) {
	var answer = Number.MAX_VALUE;

	const q = [];

	// [층수, 사용한 마법의 돌 개수]
	q.push([storey, 0]);

	while (q.length) {
		let [s, c] = q.shift();

		let r = s % 10;

		if (s < 10) {
			answer = Math.min(answer, s + c);
			answer = Math.min(answer, c + 10 - s + 1);
			continue;
		}

		if (r === 0) {
			q.push([s / 10, c]);
			continue;
		}

		q.push([s - r, c + r]);
		q.push([s + 10 - r, c + 10 - r]);
	}

	return answer;
}

const testCase = [16, 2554, 9000, 500];
const success = [6, 16, 2, 5];

testCase.forEach((c, i) => {
	// if (i !== 2) return;

	const result = solution(c);

	console.log(`${i + 1}-case:`);

	console.log(result, success[i], result === success[i]);
});
