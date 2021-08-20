function solution(n, s, a, b, fares) {
	const path = Array.from({ length: n }, (_, i) =>
		Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity)),
	);

	fares.forEach(([from, to, fee]) => {
		path[from - 1][to - 1] = fee;
		path[to - 1][from - 1] = fee;
	});
	console.log(path);

	for (let mid = 0; mid < n; mid++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				console.log(
					mid,
					i,
					j,
					path[i][j],
					path[i][mid] + path[j][mid],
					Math.min(path[i][j], path[i][mid] + path[j][mid]),
				);
				path[i][j] = Math.min(path[i][j], path[i][mid] + path[j][mid]);
			}
			console.log(path);
		}
	}

	let min = Infinity;

	for (let k = 0; k < n; k++) {
		min = Math.min(min, path[s - 1][k] + path[k][a - 1] + path[k][b - 1]);
	}

	return min;
}

const n1 = 6,
	s1 = 4,
	a1 = 6,
	b1 = 2,
	f1 = [
		[4, 1, 10],
		[3, 5, 24],
		[5, 6, 2],
		[3, 1, 41],
		[5, 1, 24],
		[4, 6, 50],
		[2, 4, 66],
		[2, 3, 22],
		[1, 6, 25],
	];

console.log(solution(n1, s1, a1, b1, f1));
