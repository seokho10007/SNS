let input = require('fs').readFileSync('/dev/stdin').toString().trim() * 1;
let n = 64;
let cnt = 0;

while (input > 0) {
	if (n > input) n /= 2;
	else {
		cnt++;
		input -= n;
	}
}
console.log(cnt);
