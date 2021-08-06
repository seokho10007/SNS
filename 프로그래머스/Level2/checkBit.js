const solution = (numbers) => {
	let answer = [];

	numbers.forEach((n) => {
		if (n % 2 === 0) answer.push(n + 1);
		else {
			const bit = n.toString(2).split('');
			let pos = 0;
			for (pos = bit.length; pos > 0; pos -= 1) {
				if (bit[pos] === '0') {
					break;
				}
			}
			console.log(bit, pos);
			pos ? (bit[pos] = '1') : bit.unshift('1');
			console.log(bit, pos);

			bit[pos + 1] = '0';
			console.log(bit, pos);

			answer.push(parseInt(bit.join(''), 2));
		}
	});

	return answer;
};

const n = [2, 7];

console.log(solution(n));

// 3 = 011 (마지막 1의 개수 2개)
// 4 = 100
// 5 = 101 (3 + (2 ** (1의 개수-1) )) = (3 + (2** (2-1) )) = 5
