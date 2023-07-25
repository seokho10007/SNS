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

		if (!this.head) this.tail = null;

		this.size--;
		return data;
	}

	isEmpty() {
		return this.size === 0;
	}
}
