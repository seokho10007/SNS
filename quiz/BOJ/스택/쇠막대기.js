const str = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 0,
	depth = 0;
for (let i = 0; i < str.length; i++) {
	if (str[i] === '(') depth++;
	else {
		depth--;
		str[i - 1] !== '(' ? answer++ : (answer += depth);
	}
}
console.log(answer);
