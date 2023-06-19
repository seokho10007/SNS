const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const t = Number(input[0]);

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	enqueue(data) {
		const node = new Node(data);
		if (!this.head) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
	}

	dequeue() {
		if (!this.head) {
			return null;
		}
		const data = this.head.data;
		this.head = this.head.next;
		this.size--;
		return data;
	}

	isEmpty() {
		return this.size === 0;
	}
}

let line = 0;

for (let i = 0; i < t; i++) {
	const [n, k] = input[1 + line].split(' ').map(Number);
	const times = [0, ...input[2 + line].split(' ').map(Number)];
	const list = input.slice(3 + line, k + 3 + line).map((v) => v.split(' ').map(Number));
	const w = Number(input[k + 3 + line]);

	line = k + 3 + line;

	console.log(solution(n, k, times, list, w));
}

function solution(n, k, times, list, w) {
	let answer = 0;

	// 모든 그래프들을 연결해주긴 해야함
	const graph = Array.from({ length: n + 1 }, () => []);

	for (let i = 0; i < k; i++) {
		// 역순으로 타고 올라가야됨
		const [u, v] = list[i];

		graph[v].push(u);
	}

	// 단 시작노드는 무조건 w
	const visit = Array.from({ length: n + 1 }, () => 0);
	const q = new Queue();

	q.enqueue([w, times[w]]);

	visit[w] = times[w];

	while (q.size) {
		const [now, score] = q.dequeue();

		const nodes = graph[now];

		// 진입노드가 0이라면 (끝노드)
		if (nodes.length === 0) {
			answer = Math.max(answer, score);
			continue;
		}

		for (let i = 0; i < nodes.length; i++) {
			const next = nodes[i];

			if (score + times[next] <= visit[next]) continue;

			visit[next] = score + times[next];

			q.enqueue([next, score + times[next]]);
		}
	}

	return answer;
}
