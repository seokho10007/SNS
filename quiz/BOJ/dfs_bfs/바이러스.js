const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m, ...list] = input.map((v, i) => {
	if (i <= 1) return Number(v);
	return v.split(' ').map(Number);
});

function solution(n, m, list) {
	let answer = 0;

	const adList = Array.from({ length: n + 1 }, () => []);

	for (let i = 0; i < m; i++) {
		const [v1, v2] = list[i];
		adList[v1].push(v2);
		adList[v2].push(v1);
	}

	const visit = Array.from({ length: n + 1 }, () => 0);
	const q = [1];

	visit[1] = 1;

	while (q.length) {
		const v = q.shift();

		const nodes = adList[v];

		for (let i = 0; i < nodes.length; i++) {
			const next = nodes[i];

			if (visit[next]) continue;

			visit[next] = 1;

			answer++;
			q.push(next);
		}
	}

	return answer;
}

console.log(solution(n, m, list));
