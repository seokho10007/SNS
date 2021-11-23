let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...list] = input.map((el) => el.split(' '));

class Queue {
	constructor() {
		this.arr = [];
		this.len = 0;
	}
	push_front(value) {
		this.arr.unshift(value);
		this.len++;
	}
	push_back(value) {
		this.arr.push(value);
		this.len++;
	}
	pop_front() {
		if (!this.len) return -1;
		const n = this.arr.shift();
		this.len--;
		return n;
	}
	pop_back() {
		if (!this.len) return -1;
		const n = this.arr.pop();
		this.len--;
		return n;
	}
	size() {
		return this.len;
	}
	empty() {
		return this.len === 0 ? 1 : 0;
	}
	front() {
		if (this.len === 0) return -1;
		return this.arr[0];
	}
	back() {
		if (this.len === 0) return -1;
		return this.arr[this.len - 1];
	}
}

const solution = (n, list) => {
	n = parseInt(n);

	const queue = new Queue();

	const result = list.reduce((a, c) => {
		const [cmd, value] = c;

		const re = queue[cmd](value && value);

		re !== undefined && a.push(re);
		return a;
	}, []);

	return result.join('\n');
};

console.log(solution(n, list));
