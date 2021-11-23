let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...list] = input.map((el) => el.split(' '));

const stack = {
	arr: [],
	index: -1,
	push: function (value) {
		this.arr[++this.index] = value;
	},
	pop: function () {
		if (this.index < 0) return -1;
		const v = this.arr[this.index];
		delete this.arr[this.index--];
		return v;
	},
	size: function () {
		return this.index + 1;
	},
	empty: function () {
		return this.index < 0 ? 1 : 0;
	},
	top: function () {
		if (this.index < 0) return -1;
		return this.arr[this.index];
	},
};

const result = [];

for (let i = 0; i < list.length; i++) {
	const [cmd, value] = list[i];
	let a = 0;

	if (value !== undefined) a = stack[cmd](value);
	else a = stack[cmd]();

	a !== undefined && result.push(a);
}

console.log(result.join('\n'));
