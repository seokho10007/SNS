// const solution = (a, edges) => {
// 	edges.sort((a, b) => {
// 		if (a[1] < a[0]) [a[0], a[1]] = [a[1], a[0]];
// 		if (b[1] < b[0]) [b[0], b[1]] = [b[1], b[0]];
// 		return a[0] - b[0];
// 	});

// 	const result = makeConnect(0, edges, a, []);

// 	let sum = result.reduce((acc, c) => (acc += c), 0);
// 	const check = a.every((v) => v === 0);

// 	return check ? sum : -1;
// };

// const makeConnect = (node, edges, info, result) => {
// 	const list = [];

// 	edges = edges.filter((v) => {
// 		if (v[0] === node || v[1] === node) list.push(v);
// 		return v[0] !== node && v[1] !== node;
// 	});

// 	if (list.length === 0) {
// 		return;
// 	}

// 	list.forEach((v, i) => {
// 		const nextNode = v[0] === node ? v[1] : v[0];
// 		makeConnect(nextNode, edges, info, result);

// 		result.push(info[nextNode]);

// 		info[node] += info[nextNode];
// 		info[nextNode] = 0;
// 	});

// 	return result;
// };

function solution(a, edges) {
	const tree = new Array(a.length).fill().map((_) => []);

	for (const [u, v] of edges) {
		tree[u].push(v);
		tree[v].push(u);
	}

	const stack = [[0, -1]];
	const visit = new Array(a.length).fill(false);

	let answer = 0n;
	while (stack.length) {
		const [start, parent] = stack.pop();

		if (visit[start]) {
			if (parent !== -1) a[parent] += a[start];
			answer += BigInt(Math.abs(a[start]));
			continue;
		}

		stack.push([start, parent]);
		visit[start] = true;

		for (const next of tree[start]) {
			if (!visit[next]) {
				stack.push([next, start]);
			}
		}
	}

	return a[0] ? -1 : answer;
}

// const a = [-5, 0, 2, 1, 2, 1, -2];
// const e = [
// 	[0, 1],
// 	[3, 4],
// 	[2, 3],
// 	[0, 3],
// 	[4, 5],
// 	[5, 6],
// ];

const a = [-5, 0, 2, 1, 2];
const e = [
	[0, 1],
	[3, 4],
	[2, 3],
	[0, 3],
];

console.log(solution(a, e));
