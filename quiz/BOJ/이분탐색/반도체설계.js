// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `6\n4 2 6 3 1 5`;

const [n, ports] = input.split('\n').map((v) => v.split(' ').map((el) => Number(el)));

let LIS = [ports[0]];

function BinarySearch(num) {
	let lt = 0;
	let rt = LIS.length - 1;

	while (lt <= rt) {
		let mid = parseInt((lt + rt) / 2);

		if (LIS[mid] === num) return mid;
		else if (LIS[mid] > num) rt = mid - 1;
		else lt = mid + 1;
	}
	return lt;
}

for (let port of ports) {
	if (port > LIS[LIS.length - 1]) {
		LIS.push(port);
	} else {
		let idx = BinarySearch(port);
		LIS[idx] = port;
	}
}

console.log(String(LIS.length));
