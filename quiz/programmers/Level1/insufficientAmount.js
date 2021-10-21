const solution = (price, money, count) => {
	const result =
		money -
		Array(count)
			.fill(0)
			.reduce((a, c, i) => (a += price * (i + 1)), 0);

	return result < 0 ? Math.abs(result) : 0;
};

const p = 3;
const m = 20;
const c = 4;
console.log(solution(p, m, c));
