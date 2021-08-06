const solution = ($$, $) =>
	$.map((_) => $$.slice(_[0] - 1, _[1]).sort((__, ___) => __ - ___)[_[2] - 1]);

const a1 = [1, 5, 2, 6, 3, 7, 4];
const c1 = [
	[2, 5, 3],
	[4, 4, 1],
	[1, 7, 3],
];
console.log(solution(a1, c1));
