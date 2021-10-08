const solution = (arr) => {
	const countQuad = [0, 0];
	const len = arr.length;

	quad(len, arr, countQuad, [0, 0]);

	return countQuad;
};

const quad = (size, arr, countQuad, start) => {
	const first = arr[start[0]][start[1]];
	if (size === 1) return first === 0 ? (countQuad[0] += 1) : (countQuad[1] += 1);

	let keep = true;
	for (let i = start[0]; i < start[0] + size; i++) {
		for (let j = start[1]; j < start[1] + size; j++) {
			if (first !== arr[i][j]) {
				keep = false;
				break;
			}
		}
		if (!keep) break;
	}

	if (keep) return first === 0 ? (countQuad[0] += 1) : (countQuad[1] += 1);

	const half = size / 2;

	quad(half, arr, countQuad, start);
	quad(half, arr, countQuad, [start[0], start[1] + half]);
	quad(half, arr, countQuad, [start[0] + half, start[1]]);
	quad(half, arr, countQuad, [start[0] + half, start[1] + half]);

	return;
};

const a = [
	[1, 1, 0, 0],
	[1, 0, 0, 0],
	[1, 0, 0, 1],
	[1, 1, 1, 1],
];

const a2 = [
	[1, 1, 1, 1],
	[1, 1, 1, 1, 1],
];

console.log(solution(a));
