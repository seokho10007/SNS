const solution = (n, k) => {
	let answer = [];

	let list = Array(n)
		.fill(0)
		.map((_, i) => i + 1);
	let fac = list.reduce((acc, c) => (acc *= c), 1);
	k -= 1;

	while (answer.length !== n) {
		fac = fac / list.length;
		const index = Math.floor(k / fac);
		let temp = list[index];
		answer.push(temp);
		k = k % fac;
		list.splice(index, 1);
	}

	return answer;
};

const n1 = 3;
const k1 = 5;

console.log(solution(n1, k1));
