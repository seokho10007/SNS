let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

class Node {
	constructor(value) {
		this.next = null;
		this.value = value;
	}
}
class Queue {
	constructor() {
		this.length = 0;
		this.head = null;
		this.rear = null;
	}
	push(value) {
		let node = new Node(value);
		this.length ? (this.rear.next = node) : (this.head = node);
		this.rear = node;
		this.length++;
	}

	pop() {
		if (this.length === 0) return -1;
		const head = this.head.value;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) this.rear = null;

		return head;
	}
	size() {
		return this.length;
	}
	front() {
		return this.head ? this.head.value : -1;
	}
}

const getResult = (n) => {
	const queue = new Queue();
	for (let i = 1; i <= n; i++) queue.push(i);

	let cnt = 0;
	while (queue.size() > 1) {
		const n = queue.pop();

		if (cnt) queue.push(n);

		cnt = (cnt + 1) % 2;
	}

	return queue.front();
};

console.log(getResult(n));
