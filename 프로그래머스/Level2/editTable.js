// const solution = (n, k, cmd) => {
// 	let answer = '';

// 	const arr = Array.from({ length: n }, (_, i) => i);
// 	const execution = new Command(arr, k);

// 	const selectCmd = (cmd) => {
// 		const c = cmd.replace(/(\s*)/g, '');

// 		switch (c[0]) {
// 			case 'U':
// 				execution.up(Number(c[1]));
// 				break;
// 			case 'D':
// 				execution.down(Number(c[1]));
// 				break;

// 			case 'C':
// 				execution.delete();
// 				break;

// 			case 'Z':
// 				execution.restore();
// 				break;

// 			default:
// 				break;
// 		}
// 	};

// 	for (let i = 0; i < cmd.length; i++) selectCmd(cmd[i]);

// 	answer = execution.get(arr);

// 	return answer;
// };

// class Command {
// 	constructor(arr, k) {
// 		this.nowInfo = [...arr];
// 		this.defaultInfo = [...arr];

// 		this.nowSelect = k; // index
// 		this.deleteData = []; //[data, index]
// 		this.defaultData = [];
// 	}
// 	up(cmd) {
// 		this.nowSelect -= cmd;
// 	}
// 	down(cmd) {
// 		this.nowSelect += cmd;
// 	}
// 	delete() {
// 		const data = this.nowInfo.splice(this.nowSelect, 1);
// 		const defaultData = this.defaultInfo[this.nowSelect];

// 		this.defaultInfo[this.nowSelect] = null;
// 		this.deleteData.unshift([data[0], this.nowSelect]);
// 		this.defaultData.unshift([defaultData, this.nowSelect]);
// 		if (this.nowInfo[this.nowSelect] === undefined) this.nowSelect = this.nowInfo.length - 1;
// 	}
// 	restore() {
// 		const [data, index] = this.deleteData.shift();
// 		const [dData, DIndex] = this.defaultData.shift();

// 		if (this.nowInfo[index] === undefined) this.nowInfo.push(data);
// 		else {
// 			this.nowInfo = [...this.nowInfo.slice(0, index), data, ...this.nowInfo.slice(index)];
// 			if (index < this.nowSelect) this.nowSelect += 1;
// 		}
// 		this.defaultInfo[DIndex] = dData;
// 	}
// 	get(arr) {
// 		const str = this.defaultInfo.reduce((a, c, i) => (a += c === arr[i] ? 'O' : 'X'), '');
// 		return str;
// 	}
// }

let list;
let stack = [];
let answer;

const deleted = (k) => {
	let [pre, next] = [list[k][0], list[k][1]];
	stack.push([k, pre, next]);

	answer[k] = false;

	if (next === -1) {
		if (pre !== -1) list[pre][1] = next;
		k = pre;
	} else {
		if (next !== -1) list[next][0] = pre;
		if (pre !== -1) list[pre][1] = next;
		k = next;
	}

	return k;
};

const down = (k, m) => {
	for (let i = 0; i < m; i++) k = list[k][1];
	return k;
};

const up = (k, m) => {
	for (let i = 0; i < m; i++) k = list[k][0];
	return k;
};

const restore = () => {
	const s = stack.pop();
	const [k, pre, next] = [s[0], s[1], s[2]];

	if (pre !== -1) list[pre][1] = k;
	if (next !== -1) list[next][0] = k;

	answer[k] = true;
};

const solution = (n, k, cmd) => {
	list = Array.from({ length: n }, (_, index) => [index - 1, index + 1]);
	answer = Array(n).fill(true);
	list[n - 1][1] = -1;
	for (let c of cmd) {
		let order = c.split(' ');

		switch (order[0]) {
			case 'D':
				k = down(k, order[1]);
				break;
			case 'C':
				k = deleted(k);
				break;
			case 'U':
				k = up(k, order[1]);
				break;
			case 'Z':
				restore();
				break;
		}
	}

	return answer.reduce((a, c, i) => (a += c ? 'O' : 'X'), '');
};

const n1 = 8;
const k1 = 2;
const c1 = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C'];
const c2 = ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z'];

console.log(solution(n1, k1, c2));
