function solution(n, s, a, b, fares) {
	const dist = checkConnectInfo(fares, n);

	let min = Infinity;

	// dist[s - 1][k]: s 지점(출발지점)에서 k지점까지 같이 탑승
	// dist[k][a - 1], dist[k][b - 1]: k지점에서 a와 b지점까지의 거리
	for (let k = 0; k < n; k++) {
		console.log(`${s}지점부터 ${k + 1}까지 합승하고: ${dist[s - 1][k]}`);
		console.log(`${k + 1}지점에서 ${a}까지: ${dist[k][a - 1]} | ${k + 1}지점에서 ${b}까지: ${dist[k][b - 1]}`);
		console.log(`합: ${dist[s - 1][k] + dist[k][a - 1] + dist[k][b - 1]}`);
		console.log('--------------');
		min = Math.min(min, dist[s - 1][k] + dist[k][a - 1] + dist[k][b - 1]);
	}

	return min;
}

const checkConnectInfo = (fares, n) => {
	const dist = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity)));

	for (let i = 0; i < fares.length; i++) {
		const [node1, node2, price] = fares[i];

		dist[node1 - 1][node2 - 1] = price;
		dist[node2 - 1][node1 - 1] = price;
	}

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
			}
		}
	}
	return dist;
};

// const checkConnectInfo = (fares) => {
// 	const info = {};
// 	for (let i = 0; i < fares.length; i++) {
// 		const [node1, node2, price] = fares[i];

// 		if (!info.hasOwnProperty(node1)) info[node1] = [[node2, price]];
// 		else info[node1].push([node2, price]);

// 		if (!info.hasOwnProperty(node2)) info[node2] = [[node1, price]];
// 		else info[node2].push([node1, price]);
// 	}
// 	console.log(info);
// };

const n1 = 6,
	s1 = 4,
	a1 = 6,
	b1 = 2;
const f1 = [
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

const n2 = 7,
	s2 = 3,
	a2 = 4,
	b2 = 1;
const f2 = [
	[5, 7, 9],
	[4, 6, 4],
	[3, 6, 1],
	[3, 2, 3],
	[2, 1, 6],
];

console.log(solution(n2, s2, a2, b2, f2));
