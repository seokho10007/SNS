const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const list = input.slice(1).map((v) => v.split(' ').map(Number));

function dfs(u, list, visit) {
	if (visit[u]) return;

	visit[u] = true;

	for (let i = 0; i < list[u].length; i++) {
		const v = list[u][i];

		if (visit[v]) continue;

		dfs(v, list, visit);
	}
}

function solution(n, m, list) {
	let answer = 0;
	const visit = Array(n + 1).fill(false);
	const info = Array.from({ length: n + 1 }, () => []);

	for (let i = 0; i < m; i++) {
		const [u, v] = list[i];

		info[u].push(v);
		info[v].push(u);
	}

	for (let i = 1; i <= n; i++) {
		if (visit[i]) continue;

		dfs(i, info, visit);
		answer++;
	}

	return answer;
}

console.log(solution(n, m, list));
