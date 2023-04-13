function solution(storey) {
	var answer = 0;

	const numbers = [];

	let count = 0;

	while (true) {
		const num = storey % 10 ** count;

		if (num === storey) break;

		numbers.push(10 ** count);
		count += 1;
	}

	const q = [[storey, 0]];

	while (q.length) {
		const [num, count] = q.shift();

		if (num === 0) {
			answer = count;
			break;
		}

		for (let i = 0; i < numbers.length; i++) {
			const n = numbers[i];
			if (num < 0) {
				const nn = Math.abs(num);

				if (n > nn) continue;

				q.push([num + n, count + 1]);
			} else {
				const nn = num - n;
				q.push([nn, count + 1]);
			}
		}
	}

	return answer;
}

console.log(solution(2554));
