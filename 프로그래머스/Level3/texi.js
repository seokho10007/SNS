function solution(n, s, a, b, fares) {
	let answer = 100000 * 200;

	const dist = checkConnectInfo(fares, n);

	for (let k = 0; k < n; k++) answer = Math.min(answer, dist[s - 1][k] + dist[k][a - 1] + dist[k][b - 1]);

	return answer;
}

const checkConnectInfo = (fares, n) => {
	const dist = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity)));

	fares.forEach(([node1, node2, price]) => {
		dist[node1 - 1][node2 - 1] = price;
		dist[node2 - 1][node1 - 1] = price;
	});

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < n; k++) {
				if (dist[j][k] > dist[j][i] + dist[i][k]) dist[j][k] = dist[j][i] + dist[i][k];
			}
		}
	}

	return dist;
};
