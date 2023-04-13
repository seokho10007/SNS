// 시간 초과
// function solution(players, callings) {
// 	const linked = new Linked();

// 	players.forEach((p) => {
// 		linked.insert(p);
// 	});

// 	for (let i = 0; i < callings.length; i++) {
// 		linked.call(callings[i]);
// 	}

// 	return linked.all;
// }

// class Node {
// 	constructor(name) {
// 		this.name = name;
// 		this.next = null;
// 		this.prev = null;
// 	}
// }

// class Linked {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	getFirst() {
// 		return this.head;
// 	}

// 	insert(name) {
// 		const node = new Node(name);
// 		let current = this.head;

// 		if (this.size === 0) {
// 			this.head = node;
// 		} else {
// 			while (true) {
// 				if (current.prev === null) {
// 					current.prev = node;
// 					node.next = current;
// 					break;
// 				}

// 				current = current.prev;
// 			}
// 		}
// 		this.size += 1;
// 	}

// 	get all() {
// 		let count = 0;
// 		let current = this.head;
// 		const arr = [];

// 		while (count < this.size) {
// 			arr.push(current.name);

// 			current = current.prev;
// 			count++;
// 		}

// 		return arr;
// 	}

// 	call(name) {
// 		let count = 0;
// 		let current = this.head;

// 		while (current.name !== name) {
// 			current = current.prev;
// 			count++;
// 		}

// 		const next = current.next;
// 		const prev = current.prev;

// 		if (!next.next) this.head = current;

// 		if (next.next) next.next.prev = current;
// 		current.next = next.next ?? null;

// 		current.prev = next;
// 		next.next = current;

// 		next.prev = prev ?? null;
// 		if (prev) prev.next = next;
// 	}
// }
