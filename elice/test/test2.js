// const readline = require('readline');

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// const getInfo = (connect) => {
// 	const info = {};

// 	connect.forEach((el) => {
// 		const nodes = el.split(' ');
// 		const [u, v] = [Number(nodes[0]), Number(nodes[1])];
// 		if (!info[u]) info[u] = [];
// 		if (!info[v]) info[v] = [];
// 		info[u].push(v);
// 		info[v].push(u);
// 	});

// 	return info;
// };

// const input = [];

// rl.on('line', function (x) {
// 	input.push(x);
// }).on('close', function () {
// 	const t = Number(input.shift());
// 	const answer = [];

// 	for (let i = 0; i < t; i++) {
// 		const [n, m] = input
// 			.shift()
// 			.split(' ')
// 			.map((v) => Number(v));
// 		const connect = input.splice(0, m);

// 		const connectInfo = getInfo(connect);

// 		let check = false;

// 		for (let j = 0; j < n; j++) {
// 			const visit = Array(n).fill(false);

// 			const q = [];
// 			// 현재 노드, 연결 관계 수
// 			q.push([j, 1]);

// 			while (q.length) {
// 				const [node, price] = q.shift();

// 				visit[node] = true;

// 				if (price === n) {
// 					check = true;
// 					break;
// 				}

// 				const info = connectInfo[node] || [];

// 				info.forEach((next) => {
// 					if (!visit[next]) {
// 						q.push([next, price + 1]);
// 					}
// 				});
// 			}
// 			console.log(check);

// 			if (check) break;
// 		}

// 		if (check) answer.push('1');
// 		else answer.push('0');
// 	}
// 	console.log(answer.join('\n'));

// 	process.exit();
// });

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', function (x) {
	input.push(x);
}).on('close', function () {
	const t = Number(input.shift());
	const answer = [];

	for (let i = 0; i < t; i++) {
		const nm = input.shift().split(' ');
		const [n, m] = nm.map((v) => Number(v));

		const connect = input.splice(0, m);

		const connectInfo = getInfo(connect);
		const visit = Array(n).fill(false);

		let check = false;

		for (let j = 0; j < n; j++) {
			const result = dfs(j, 1, [], connectInfo, [...visit]);

			if (result.length) check = true;
		}
		if (check) answer.push(1);
		else answer.push(0);
	}
	console.log(answer.join('\n'));

	process.exit();
});

const getInfo = (connect) => {
	const info = {};

	connect.forEach((el) => {
		const nodes = el.split(' ');
		const [u, v] = [Number(nodes[0]), Number(nodes[1])];
		if (!info[u]) info[u] = [];
		if (!info[v]) info[v] = [];
		info[u].push(v);
		info[v].push(u);
	});

	return info;
};

const dfs = (now, cnt, result, connect, visit) => {
	visit[now] = true;

	if (cnt === visit.length) return result.push(1);

	const info = connect[now] || [];

	info.forEach((el) => {
		if (!visit[el]) {
			dfs(el, cnt + 1, result, connect, [...visit]);
		}
	});

	return result;
};
