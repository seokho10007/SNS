const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

// n=학생수, m=키를 비교한 횟수, list=비교목록
const [n, m] = input[0].split(' ').map(Number);
const list = input.slice(1).map((v) => v.split(' ').map(Number));

function solution(n, m, list) {
	const result = [];

	// 인접리스트
	// i번쨰 학생보다 키가 큰 학생 정보
	const adList = Array.from({ length: n + 1 }, () => []);

	// 진입차수 정보
	// i반쩨 힉셍보다 키가 작은 학생이 몇명이 있는지 확인하는 정보
	// 앞에 어떤 학생이 있는지는 관심없음
	const indegree = Array.from({ length: n + 1 }, () => 0);

	for (let i = 0; i < m; i++) {
		// 학생의 순서는 키 순이라고 생각
		const [u, v] = list[i];

		// 단뱡향 인접리스트 생성
		// u 학생 뒤에 v학생이 있다고 생각
		adList[u].push(v);

		// u -> v이므로 v의 진입차수 증가
		// v학생 앞에 있는 학생수를 증가시킴
		indegree[v]++;
	}

	const q = [];

	// 진입 차수가 0인 노드 push
	// 자신의 앞에 학생이 없는 학생들을 추가 (제일 앞 순서 학생들)
	for (let i = 1; i <= n; i++) {
		if (indegree[i] === 0) q.push(i);
	}

	while (q.length) {
		const node = q.shift();

		result.push(node);

		const nodes = adList[node];

		for (let i = 0; i < nodes.length; i++) {
			const next = nodes[i];

			// 연결된 노드의 진입 차수 감소시킴
			// 기존 앞에 있는 학생의 순서가 정해졌으므로 앞에 있는 학생수를 감소시킴
			indegree[next]--;

			// 진입차수가 0이라면 다음 순서이므로 push
			// 앞에 있는 학생수가 0이라면 다음 순서이므로 push
			if (indegree[next] === 0) q.push(next);
		}
	}

	return result.join(' ');
}

console.log(solution(n, m, list));
