
function solution(n, wires) {
	let answer = Infinity;

	const info = getConnectInfo(wires);

	wires.forEach((el) => {
		const [node1, node2] = el;

		const visit = Array(n + 1).fill(false);

		const count = dfs(node1, info, visit, [], node2).length;
		const abs = Math.abs(count * 2 - n);

		if (answer > abs) answer = abs;
	});

	return answer;
}

const dfs = (node, info, visit, result, target) => {
	visit[node] = true;
	result.push(node);

	const connect = info[node];

	connect.forEach((el) => {
		if (!visit[el] && el !== target) {
			dfs(el, info, visit, result, target);
		}
	});

	return result;
};

const getConnectInfo = (arr) => {
	const info = {};

	arr.forEach(([u, v]) => {
		if (!info[u]) info[u] = [];
		if (!info[v]) info[v] = [];
		info[u].push(v);
		info[v].push(u);
	});

	return info;
};
