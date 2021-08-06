const solution = (lottos, win_nums) => {
	const rank = [6, 6, 5, 4, 3, 2, 1];
	let zeroCount = 0;

	let matchNum = lottos.reduce((a, c) => {
		c === 0 && zeroCount++;
		return win_nums.includes(c) ? (a += 1) : a;
	}, 0);

	return [rank[matchNum + zeroCount], rank[matchNum]];
};

const l1 = [44, 1, 0, 0, 31, 25];
const w1 = [31, 10, 45, 1, 6, 19];

console.log(solution(l1, w1));
