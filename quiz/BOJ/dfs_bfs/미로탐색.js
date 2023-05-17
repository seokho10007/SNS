const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const b = input.map((v) => v.split('').map(Number));

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

function checkPos(n, m) {
	return (x, y) => {
		return x >= 0 && x < n && y >= 0 && y < m;
	};
}

function solution(n, m, board) {
	let answer = 0;

	const xpos = [1, -1, 0, 0];
	const ypos = [0, 0, 1, -1];

	const visit = Array.from({ length: n }, () => Array(m).fill(false));
	const queue = new Queue();

	const cb = checkPos(n, m);

	// [x, y, count]
	queue.enqueue([0, 0, 1]);

	while (queue.size) {
		const [x, y, count] = queue.dequeue();

		if (visit[x][y]) continue;

		visit[x][y] = true;

		if (x === n - 1 && y === m - 1) {
			answer = count;
			break;
		}

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + xpos[i], y + ypos[i]];

			if (!cb(nx, ny) || visit[nx][ny] || board[nx][ny] === 0) continue;

			queue.enqueue([nx, ny, count + 1]);
		}
	}

	return answer;
}

console.log(solution(n, m, b));
