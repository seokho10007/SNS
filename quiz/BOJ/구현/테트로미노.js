// const path = require('path');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : path.join(__dirname, '../input.txt');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map((row) => row.split(' ').map(Number));

// const TETROMINO = [
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[2, 0],
// 		[3, 0],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[0, 2],
// 		[0, 3],
// 	],
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[2, 0],
// 		[3, 0],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[0, 2],
// 		[0, 3],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[1, 1],
// 		[2, 1],
// 	],
// 	[
// 		[0, 2],
// 		[1, 0],
// 		[1, 1],
// 		[1, 2],
// 	],
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[2, 0],
// 		[2, 1],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[0, 2],
// 		[1, 0],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 1],
// 		[0, 2],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[1, 1],
// 		[2, 1],
// 	],
// 	[
// 		[0, 1],
// 		[0, 2],
// 		[1, 0],
// 		[1, 1],
// 	],
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[1, 1],
// 		[2, 1],
// 	],
// 	[
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 		[2, 1],
// 	],
// 	[
// 		[0, 1],
// 		[1, 0],
// 		[1, 1],
// 		[1, 2],
// 	],
// 	[
// 		[0, 0],
// 		[1, 0],
// 		[1, 1],
// 		[2, 0],
// 	],
// 	[
// 		[0, 0],
// 		[0, 1],
// 		[0, 2],
// 		[1, 1],
// 	],
// ];

// function solution(n, m, board) {
// 	let answer = 0;

// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < M; j++) {
// 			for (let k = 0; k < TETROMINO.length; k++) {
// 				const block = TETROMINO[k];

// 				let sum = 0;

// 				for (let t = 0; t < block.length; t++) {
// 					const [x, y] = block[t];

// 					if (x + i >= n || y + j >= m) break;

// 					sum += board[x + i][y + j];
// 				}

// 				answer = Math.max(sum, answer);
// 			}
// 		}
// 	}

// 	return answer;
// }

// console.log(solution(N, M, board));

// const solution2 = (N, M, board) => {
// 	const tetromino = {
// 		// ****
// 		1: [
// 			[0, 0],
// 			[0, 1],
// 			[0, 2],
// 			[0, 3],
// 		],
// 		// *
// 		// *
// 		// *
// 		// *
// 		2: [
// 			[0, 0],
// 			[1, 0],
// 			[2, 0],
// 			[3, 0],
// 		],
// 		// **
// 		// **
// 		3: [
// 			[0, 0],
// 			[0, 1],
// 			[1, 0],
// 			[1, 1],
// 		],
// 		// *
// 		// *
// 		// **
// 		4: [
// 			[0, 0],
// 			[1, 0],
// 			[2, 0],
// 			[2, 1],
// 		],
// 		//   *
// 		// ***
// 		5: [
// 			[0, 2],
// 			[1, 0],
// 			[1, 1],
// 			[1, 2],
// 		],
// 		// **
// 		//  *
// 		//  *
// 		6: [
// 			[0, 0],
// 			[0, 1],
// 			[1, 1],
// 			[2, 1],
// 		],
// 		// ***
// 		// *
// 		7: [
// 			[0, 0],
// 			[0, 1],
// 			[0, 2],
// 			[1, 0],
// 		],
// 		// *
// 		// **
// 		//  *
// 		8: [
// 			[0, 0],
// 			[1, 0],
// 			[1, 1],
// 			[2, 1],
// 		],
// 		//  **
// 		// **
// 		9: [
// 			[0, 1],
// 			[0, 2],
// 			[1, 0],
// 			[1, 1],
// 		],
// 		// ***
// 		//  *
// 		10: [
// 			[0, 0],
// 			[0, 1],
// 			[0, 2],
// 			[1, 1],
// 		],
// 		// *
// 		// **
// 		// *
// 		11: [
// 			[0, 0],
// 			[1, 0],
// 			[1, 1],
// 			[2, 0],
// 		],
// 		//  *
// 		// ***
// 		12: [
// 			[0, 1],
// 			[1, 0],
// 			[1, 1],
// 			[1, 2],
// 		],
// 		//  *
// 		// **
// 		//  *
// 		13: [
// 			[0, 1],
// 			[1, 0],
// 			[1, 1],
// 			[2, 1],
// 		],
// 		//  *
// 		//  *
// 		// **
// 		14: [
// 			[0, 1],
// 			[1, 1],
// 			[2, 0],
// 			[2, 1],
// 		],
// 		// *
// 		// ***
// 		15: [
// 			[0, 0],
// 			[1, 0],
// 			[1, 1],
// 			[1, 2],
// 		],
// 		// **
// 		// *
// 		// *
// 		16: [
// 			[0, 0],
// 			[0, 1],
// 			[1, 0],
// 			[2, 0],
// 		],
// 		// ***
// 		//   *
// 		17: [
// 			[0, 0],
// 			[0, 1],
// 			[0, 2],
// 			[1, 2],
// 		],
// 		//  *
// 		// **
// 		// *
// 		18: [
// 			[0, 1],
// 			[1, 0],
// 			[1, 1],
// 			[2, 0],
// 		],
// 		// **
// 		//  **
// 		19: [
// 			[0, 0],
// 			[0, 1],
// 			[1, 1],
// 			[1, 2],
// 		],
// 	};
// 	let max = 0;
// 	let sum, x, y, flag;
// 	for (let i = 0; i < N; i++) {
// 		for (let j = 0; j < M; j++) {
// 			for (const blocks of Object.values(tetromino)) {
// 				sum = 0;
// 				flag = true;
// 				for (let k = 0; k < 4; k++) {
// 					[y, x] = blocks[k];
// 					if (y + i >= N || x + j >= M) {
// 						flag = false;
// 						break;
// 					}
// 					if (flag) sum += board[y + i][x + j];
// 				}
// 				max = Math.max(max, sum);
// 			}
// 		}
// 	}
// 	return max;
// };

// console.log(solution2(N, M, board));

// const offset = [
// 	[0, 1],
// 	[0, -1],
// 	[1, 0],
// 	[-1, 0],
// ];

// const visited = Array.from(Array(N), () => Array(M).fill(false));
// let maxSum = 0;

// const dfs = (x, y, count, sum) => {
// 	if (count === 4) {
// 		maxSum = Math.max(maxSum, sum);
// 		return;
// 	}

// 	for (const [dx, dy] of offset) {
// 		const nx = x + dx;
// 		const ny = y + dy;
// 		if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny]) {
// 			if (count === 2) {
// 				visited[nx][ny] = true;
// 				dfs(x, y, count + 1, sum + board[nx][ny]);
// 				visited[nx][ny] = false;
// 			}

// 			visited[nx][ny] = true;
// 			dfs(nx, ny, count + 1, sum + board[nx][ny]);
// 			visited[nx][ny] = false;
// 		}
// 	}
// };

// for (let i = 0; i < N; i++) {
// 	for (let j = 0; j < M; j++) {
// 		visited[i][j] = true;
// 		dfs(i, j, 1, board[i][j]);
// 		visited[i][j] = false;
// 	}
// }

// console.log(maxSum);

const TETROMINO = [
	[
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[1, 1, 1],
		[1, 0, 0],
		[0, 0, 0],
	],
	[
		[1, 1, 1],
		[0, 0, 1],
		[0, 0, 0],
	],
	[
		[1, 1],
		[1, 1],
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0],
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0],
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0],
	],
];

// 1. 도형을 회전
// 2. 회전시킨 도형의 좌표를 가져옴
// 3. 해당 좌표를 가장 작은 x, 가장 작은 y을 기준으로 변경
// 3.1 x or y의 가장 작은값이 0이 아니라면 빼줌
function solution(n, m, board) {
	let answer = 0;
	const matrixes = getRotateMatrix();

	const maxs = [];

	for (let i = 0; i < matrixes.length; i++) {
		const matrix = matrixes[i];
		const arr = [];

		for (let j = 0; j < matrix.length; j++) {
			let [mx, my] = [0, 0];

			for (let k = 0; k < matrix[j].length; k++) {
				const [x, y] = matrix[j][k];

				mx = Math.max(x, mx);
				my = Math.max(y, my);
			}

			arr.push([mx, my]);
		}

		maxs.push(arr);
	}

	for (let i = 0; i < matrixes.length; i++) {
		for (let j = 0; j < matrixes[i].length; j++) {
			const matrix = matrixes[i][j];
			const [mx, my] = maxs[i][j];

			for (let i = 0; i < n - mx; i++) {
				for (let j = 0; j < m - my; j++) {
					const sum = matrix.reduce((acc, [x, y]) => (acc += board[i + x][j + y]), 0);

					answer = Math.max(sum, answer);
				}
			}
		}
	}

	return answer;
}

const getRotateMatrix = () => {
	const result = Array.from(Array(TETROMINO.length), () => []);

	for (let i = 0; i < TETROMINO.length; i++) {
		let matrix = TETROMINO[i];

		for (let j = 0; j < 4; j++) {
			matrix = rotateMatrix(matrix);

			result[i].push(matrix);
		}
	}

	return result.map((matrix) => {
		const pos = [];

		for (let i = 0; i < 4; i++) {
			const m = matrix[i];
			let arr = [];

			let [x, y] = [m.length, m[0].length];

			for (let j = 0; j < m.length; j++) {
				for (let k = 0; k < m[j].length; k++) {
					if (!m[j][k]) continue;

					arr.push([j, k]);

					[x, y] = [Math.min(x, j), Math.min(y, k)];
				}
			}
			for (let j = 0; j < arr.length; j++) {
				arr[j][0] -= x;
				arr[j][1] -= y;
			}

			pos.push(arr);
		}

		return pos;
	});
};

const rotateMatrix = (matrix) => {
	if (matrix.length === 0) return [];

	let result = [];

	for (let i = 0; i < matrix[0].length; i++) {
		result.push([]);
	}
	for (let j = 0; j < matrix[0].length; j++) {
		for (let i = 0; i < matrix.length; i++) {
			result[j].push(matrix[i][j]);
		}
		result[j].reverse();
	}

	return result;
};

console.log(solution(N, M, board));
