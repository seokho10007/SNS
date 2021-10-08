const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const example = input.map((v) => v.split(' '));

const [n, m, start] = example.shift();

const info = {};

example.forEach(([u, v]) => {
	if (!info[u]) info[u] = [];
	if (!info[v]) info[v] = [];
	info[u].push(v);
	info[v].push(u);
});

const visit1 = Array(n + 1).fill(false);
const result1 = [];

const dfs = (now) => {
	if (visit1[now]) return;

	visit1[now] = true;
	result1.push(now);

	if (!info[now]) return;

	const connect = info[now].sort((a, b) => a - b);
	connect.forEach((v) => {
		if (!visit1[v]) dfs(v);
	});

	return;
};

dfs(start);

const q = [start];
const visit2 = Array(n + 1).fill(false);
const result2 = [];

while (q.length) {
	const node = q.shift();

	if (visit2[node]) continue;

	visit2[node] = true;
	result2.push(node);

	const connect = info[node];

	if (!connect) continue;

	connect.forEach((v) => {
		if (!visit2[v]) q.push(v);
	});
}

console.log(result1.join(' '));
console.log(result2.join(' '));
