let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...list] = input.map((el) => el.split(' '));

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
	size() {
		return this.length;
	}
	pop() {
		if (this.length === 0) return -1;
		const head = this.head.value;
		this.head = this.head.next;
		this.length--;

		if (this.length === 0) this.rear = null;

		return head;
	}
	empty() {
		return this.length === 0 ? 1 : 0;
	}
	front() {
		return this.head ? this.head.value : -1;
	}
	back() {
		return this.rear ? this.rear.value : -1;
	}
}

const solution = (n, list) => {
	const result = [];

	const queue = new Queue();

	for (let i = 0; i < list.length; i++) {
		const [cmd, value] = list[i];

		let a = 0;

		if (value !== undefined) a = queue[cmd](value);
		else a = queue[cmd]();

		a !== undefined && result.push(a);
	}
	return result.join('\n');
};

console.log(solution(n, list));
