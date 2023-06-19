const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const k = Number(input.shift());

for (let i = 0; i < k; i++) {
	const [v, e] = input.shift().split(' ').map(Number);
	const list = input.splice(0, e).map((v) => v.split(' ').map(Number));

	console.log(solution(v, e, list));
}

function solution(n, m, list) {
	// 방문하지 않은 정점: 0
	// 방문한 정점: 1 or -1
	// 시작: 1
	// 인접한 정점이 현재 정점 * -1 이 아니라면 이분 그래프가 될 수 없다.

	// 인접리스트 생성 (양방향 연결)
	const adList = Array.from({ length: n + 1 }, () => []);

	for (let i = 0; i < m; i++) {
		const [v1, v2] = list[i];

		adList[v1].push(v2);
		adList[v2].push(v1);
	}

	const visit = Array(n + 1).fill(0);

	// 모든 노드가 연결되있다고 한 적 없음
	for (let i = 1; i <= n; i++) {
		if (visit[i] !== 0) continue;

		const q = [i];
		visit[i] = 1;

		while (q.length) {
			const v = q.shift();

			const nodes = adList[v];

			for (let i = 0; i < nodes.length; i++) {
				const next = nodes[i];

				if (visit[next] === 0) {
					// 방문하지 않은 정점이라면 큐애 추가
					visit[next] = visit[v] * -1;
					q.push(next);
				} else if (visit[next] !== visit[v] * -1) {
					// 방문한 정점인데 인접한 정점이 같은 값을 가지고 있다면
					return 'NO';
				}
			}
		}
	}

	return 'YES';
}
