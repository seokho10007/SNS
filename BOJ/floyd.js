const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const bus = Number(input.shift());
const info = input.map((v) => v.split(' '));

const solution = (n, info) => {
	const dist = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity)));

	info.forEach(([node1, node2, price]) => {
		dist[node1 - 1][node2 - 1] = Math.min(dist[node1 - 1][node2 - 1], Number(price));
	});

	// 거쳐가는 노드
	for (let k = 0; k < n; k++) {
		// 출발 노드
		for (let i = 0; i < n; i++) {
			// 도착 노드
			for (let j = 0; j < n; j++) {
				// 저장된 값과 특정 노드를 거쳐 도착한 값 중 작은 값
				dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
			}
		}
	}

	return dist.reduce((a, c) => a + c.join(' ') + '\n', '').replace(/Infinity/gi, '0');
};

console.log(solution(n, info));
