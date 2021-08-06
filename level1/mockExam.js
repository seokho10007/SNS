// const solution = (answers) => {
// 	// 찍은 답, 현재 점수, 현재 인덱스, 번호
// 	const studentInfo = [
// 		[1, [1, 2, 3, 4, 5], 0, 0],
// 		[2, [2, 1, 2, 3, 2, 4, 2, 5], 0, 0],
// 		[3, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 0, 0],
// 	];

// 	answers.forEach((v) => {
// 		for (const info of studentInfo) {
// 			info[1][info[3]] === v && info[2]++;
// 			info[3] === info[1].length - 1 ? (info[3] = 0) : info[3]++;
// 		}
// 	});

// 	const result = studentInfo
// 		.sort((a, b) => b[2] - a[2])
// 		.filter((v) => v[2] !== 0)
// 		.map((v) => v[0]);

// 	return result;
// };

const solution = (answers) => {
	const result = [];

	const studentInfo = [
		[1, 2, 3, 4, 5],
		[2, 1, 2, 3, 2, 4, 2, 5],
		[3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
	];

	const scoreList = [0, 0, 0];

	answers.forEach((v, i) => {
		v == studentInfo[0][i % studentInfo[0].length] && scoreList[0]++;
		v == studentInfo[1][i % studentInfo[1].length] && scoreList[1]++;
		v == studentInfo[2][i % studentInfo[2].length] && scoreList[2]++;
	});

	const max = Math.max(...scoreList);

	for (const index in scoreList)
		scoreList[index] !== 0 && max === scoreList[index] && result.push(Number(index) + 1);

	return result;
};

const a1 = [1, 2, 3, 4, 5];
const a2 = [1, 3, 2, 4, 2, 1, 3, 1, 3, 2, 4, 2, 1, 3];
const a3 = [9999, 999];
console.log(solution(a1));
