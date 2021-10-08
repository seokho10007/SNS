const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const checkInput = (num) => {
	let cnt = 0;

	for (let i = 1; i <= num; i++) {
		if (i < 100) cnt++;
		else {
			const num = i.toString().split('');
			if (num[1] - num[0] === num[2] - num[1]) cnt++;
		}
	}

	return cnt;
};

console.log(checkInput(Number(input)));
