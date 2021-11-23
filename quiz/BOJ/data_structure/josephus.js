let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m] = input.map((el) => Number(el));

const arr = Array.from({ length: n }, (_, i) => i + 1);

const result = [];

for (let i = 0; i < n; i++) {
	for (let j = 1; j <= m; j++) {
		if (j === m) result.push(arr.shift());
		else arr.push(arr.shift());
	}
}

console.log(`<${result.join(', ')}>`);
