const checkWord = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};
const solution = (s) => {
	let result = '';
	let word = '';

	for (let i = 0; i < s.length; i++) {
		if (!isNaN(Number(s[i]))) result += s[i];
		else {
			word += s[i];
			if (checkWord[word] !== undefined) {
				result += checkWord[word];
				word = '';
			}
		}
	}
	return Number(result);
};

const s1 = 'one4seveneight';
const s2 = '123one';
const s3 = 'onetwothree';
const s4 = 'onezerozerozerozero';

console.log(solution(s4));
