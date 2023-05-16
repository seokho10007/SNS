const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString();
const n = Number(input);

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length++;
		return newNode;
	}

	getHead() {
		return this.head.value;
	}

	removeHead() {
		this.head = this.head.next;
		this.head.prev = null;
		this.length--;
	}

	get size() {
		return this.length;
	}
}

function solution(n) {
	const list = new LinkedList();

	for (let i = 1; i <= n; i++) {
		list.push(i);
	}

	while (list.size > 1) {
		list.removeHead();
		list.push(list.getHead());
		list.removeHead();
	}

	return list.getHead();
}

console.log(solution(n));
