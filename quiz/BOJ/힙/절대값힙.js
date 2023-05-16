const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [n, ...nums] = input.map(Number);

class Heap {
	constructor() {
		this.data = [0];
	}

	get size() {
		return this.data.length;
	}

	swap(x, y) {
		[this.data[x], this.data[y]] = [this.data[y], this.data[x]];
	}

	// 절대 값이 작은 값 순으로
	// 절대값이 같다면 값이 작은 순으로
	insert(value) {
		let index = this.size;

		// 부모노드의 절대값이 추가 된 노드의 절대값보다 크거나 같을때 로직을 실행한다.
		while (index > 1 && Math.abs(this.data[Math.floor(index / 2)]) >= Math.abs(value)) {
			let p = this.data[Math.floor(index / 2)];

			// 절대값이 같다면 실제 값이 더 작은 값을 상위노드로 변경한다.
			// 부모의 값이 자식노드보다 작거나 같다면 바꿀 필요가 없으므로 중지한다.
			if (Math.abs(p) === Math.abs(value) && p <= value) {
				break;
			}

			this.data[index] = this.data[Math.floor(index / 2)];
			index = Math.floor(index / 2);
		}

		this.data[index] = value;
	}

	delete() {
		if (this.size === 1) {
			return 0;
		}

		const root = this.data[1];
		const temp = this.data.pop();

		if (this.size === 1) {
			return root;
		}

		let p = 1;

		// 좌우 노드중 절대값이 작고 실제값이 작은 노드를 선택
		let c = 2;

		// 실제 데이터가 있는지 확인해야함
		while (c <= this.size) {
			const left = this.data[c];
			const right = this.data[c + 1];

			if (!left && !right) {
				break;
			}

			// 왼쪽 노드보다 오른쪽 노드가 절대값이 더 작다면
			// 절대값이 같을때 오른쪽 노드가 왼쪽 노드보다 더 작다면
			if (Math.abs(left) > Math.abs(right) || (Math.abs(left) === Math.abs(right) && left > right)) {
				c++;
			}

			// temp의 절대값이 더 크거나 절대값이 같은데 실제 값이 더 크거나 같다면 break
			if (
				Math.abs(temp) < Math.abs(this.data[c]) ||
				(Math.abs(temp) === Math.abs(this.data[c]) && temp <= this.data[c])
			) {
				break;
			}

			this.data[p] = this.data[c];
			p = c;
			c *= 2;
		}

		this.data[p] = temp;

		return root;
	}
}

function solution(n, nums) {
	const answer = [];

	const heap = new Heap();

	for (let i = 0; i < n; i++) {
		if (nums[i] === 0) {
			const root = heap.delete();
			answer.push(root);
		} else {
			heap.insert(nums[i]);
		}
	}

	return answer.join('\n');
}

console.log(solution(n, nums));
