// 예제 입력이 여러줄로 되어 있을 떼
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	const [n, m] = input.shift().split(' ').map(Number);
	const list = input.map((v) => v.split(' ').map(Number));

	console.log(solution(n, m, list));

	process.exit();
});

// 0: 유니온 연산
// 1: find 연산
function solution(n, m, list) {
	const answer = [];
	const unionIndex = Array.from({ length: n + 1 }, (_, i) => i);

	function find(node) {
		const target = unionIndex[node];

		if (target === node) return node;

		unionIndex[node] = find(target);

		return unionIndex[node];
	}

	function union(a, b) {
		const r1 = find(a);
		const r2 = find(b);

		if (r1 === r2) return;

		if (r1 > r2) unionIndex[r1] = r2;
		else unionIndex[r2] = r1;
	}

	function equalNode(a, b) {
		return find(a) === find(b) ? 'YES' : 'NO';
	}

	for (let i = 0; i < m; i++) {
		const [command, a, b] = list[i];

		if (command) answer.push(equalNode(a, b));
		else union(a, b);
	}

	return answer.join('\n');
}
