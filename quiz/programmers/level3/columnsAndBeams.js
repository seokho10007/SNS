function solution(n, build_frame) {
	var answer = [];
	const board = Array(n + 1)
		.fill()
		.map((_) => Array(n + 1).fill(0));

	build_frame.forEach(([y, x, a, b]) => {
		if (a === 0) {
			// console.log(`x: ${x} y: ${y} 구조물: ${a === 0 ? '기둥' : '보'} 건설여부: ${b === 0 ? '삭제' : '건설'}`);
			if (b === 1) {
				if (x === 0 || board[x][y] > 0) {
					board[x][y] += 1;
					board[x + 1][y] += 1;
				}
			} else {
				if (board[x][y] > 0) {
					board[x][y] -= 1;
					board[x + 1][y] -= 1;
				}
			}
		} else {
			// console.log(`x: ${x} y: ${y} 구조물: ${a === 0 ? '기둥' : '보'} 건설여부: ${b === 0 ? '삭제' : '건설'}`);
			if (b === 1) {
				board[x][y] += 3;
				board[x][y + 1] += 3;
			} else {
				if (board[x][y + 1] % 3 !== 0 && board[x][y - 1] % 3 !== 0) {
					// || (board[x][y] >= 1 && board[x][y + 1] >= 1)
					board[x][y] -= 3;
					board[x][y + 1] -= 3;
				}
			}
		}
	});
	console.log(board);

	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= n; j++) {
			// console.log(j, i, board[j][i], i + 1 <= n, board[j][i] > 0 && board[j][i + 1] > 0);
			if (board[j][i] === 0) continue;
			if (j + 1 <= n && board[j][i] % 3 !== 0) {
				if (i === 0 || board[j][i] > 0) {
					board[j][i] -= 1;
					board[j + 1][i] -= 1;
					answer.push([i, j, 0]);
					console.log(j, i, board, answer);
				}
			}
			if (i + 1 <= n && board[j][i] !== 0 && board[j][i] % 3 === 0) {
				if (board[j][i] > 0 && board[j][i + 1] > 0) {
					board[j][i] -= 3;
					board[j][i + 1] -= 3;
					if (!(board[i][j + 1] === 3 && board[i][j] === 3)) answer.push([i, j, 1]);
					console.log(j, i, board, answer);
				}
			}
		}
	}

	return answer.sort((a, b) => {
		if (a[0] === b[0]) {
			// if(a[1] === b[1]){}
			return a[1] - b[1];
		} else {
			return a[0] - b[0];
		}
	});
}

// function solution(n, build_frame) {
// 	var answer = [];
// 	const board = Array(n + 1)
// 		.fill()
// 		.map((_) => Array(n + 1).fill(0));

// 	console.log(build_frame);

// 	build_frame.forEach(([y, x, a, b]) => {
// 		if (a === 0) {
// 			// console.log(`x: ${x} y: ${y} 구조물: ${a === 0 ? '기둥' : '보'} 건설여부: ${b === 0 ? '삭제' : '건설'}`);
// 			if (b === 1) {
// 				if (x === 0 || board[x][y] > 0) {
// 					board[x][y] += 1;
// 					board[x + 1][y] += 1;
// 				}
// 			} else {
// 				if (board[x][y] > 0) {
// 					board[x][y] -= 1;
// 					board[x + 1][y] -= 1;
// 				}
// 			}
// 		} else {
// 			// console.log(`x: ${x} y: ${y} 구조물: ${a === 0 ? '기둥' : '보'} 건설여부: ${b === 0 ? '삭제' : '건설'}`);
// 			if (b === 1) {
// 				if (board[x][y] >= 1 || board[x][y + 1] >= 1) {
// 					board[x][y] += 3;
// 					board[x][y + 1] += 3;
// 				}
// 			} else {
// 				if (board[x][y + 1] % 3 !== 0 && board[x][y - 1] % 3 !== 0) {
// 					// || (board[x][y] >= 1 && board[x][y + 1] >= 1)
// 					board[x][y] -= 3;
// 					board[x][y + 1] -= 3;
// 				}
// 			}
// 		}
// 	});
// 	console.log(board);

// 	for (let i = 0; i < n + 1; i++) {
// 		for (let j = 0; j < n + 1; j++) {
// 			if (board[i][j] === 0) continue;
// 			if (board[i][j] % 3 !== 0) {
// 				board[i][j] -= 1;
// 				board[i + 1][j] -= 1;
// 				answer.push([j, i, 0]);
// 			} else {
// 				board[i][j] -= 3;
// 				board[i][j + 1] -= 3;
// 				answer.push([j, i, 1]);
// 			}
// 		}
// 	}

// 	return answer.sort((a, b) => {
// 		if (a[0] === b[0]) {
// 			// if(a[1] === b[1]){}
// 			return a[1] - b[1];
// 		} else {
// 			return a[0] - b[0];
// 		}
// 	});
// }

const n1 = 5;

// 0: x좌표, 1: y좌표, 2: 구조물 종료(0: 기둥, 1: 보), 3: 삭제 or 설치 (0: 삭제, 1: 설치)
const b1 = [
	[1, 0, 0, 1],
	[1, 1, 1, 1],
	[2, 1, 0, 1],
	[2, 2, 1, 1],
	[5, 0, 0, 1],
	[5, 1, 0, 1],
	[4, 2, 1, 1],
	[3, 2, 1, 1],
];

const b2 = [
	[0, 0, 0, 1],
	[2, 0, 0, 1],
	[4, 0, 0, 1],
	[0, 1, 1, 1],
	[1, 1, 1, 1],
	[2, 1, 1, 1],
	[3, 1, 1, 1],
	[2, 0, 0, 0],
	[1, 1, 1, 0],
	[2, 2, 0, 1],
];

const b3 = [
	[0, 0, 0, 1],
	[0, 1, 1, 1],
	[1, 1, 1, 1],
	[2, 1, 1, 1],
	[3, 1, 1, 1],
	[1, 1, 0, 1],
	[1, 2, 1, 1],
	[2, 2, 1, 1],
	[3, 2, 1, 1],
	[4, 0, 0, 1],
	[4, 1, 0, 1],
];

console.log(solution(n1, b3));
