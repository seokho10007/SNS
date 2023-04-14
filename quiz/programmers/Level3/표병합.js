function solution(commands) {
	let answer = [];
	const max = commands.reduce((acc, command) => {
		const idxs = getIndex(command.split(' ')).map((el) => Number(el));

		return Math.max(acc, ...idxs);
	}, 0);

	const cell = Array(51)
		.fill()
		.map((_) => Array(51).fill(''));
	const parent = Array(51)
		.fill()
		.map((_, i) =>
			Array(51)
				.fill()
				.map((_, j) => [i, j]),
		);

	for (const commandStr of commands) {
		const [command, ...rest] = commandStr.split(' ');

		switch (command) {
			case 'UPDATE':
				if (rest.length === 3) update(rest);
				else replace(rest);
				break;
			case 'MERGE':
				merge(rest);
				break;
			case 'UNMERGE':
				unmerge(rest);
				break;
			case 'PRINT':
				answer = [...answer, print(rest)];
				break;
		}
	}

	return answer;

	function update(param) {
		const [r, c, value] = param;
		const target = find([r, c]);

		iterateAll((i, j) => {
			if (isSameCoords(parent[i][j], target)) cell[i][j] = value;
		});
	}

	function replace(param) {
		const [value1, value2] = param;

		iterateAll((i, j) => {
			if (cell[i][j] === value1) cell[i][j] = value2;
		});
	}

	function merge(param) {
		const [r1, c1, r2, c2] = param;
		if (r1 === r2 && c1 === c2) return;

		const value = cell[r1][c1] !== '' ? cell[r1][c1] : cell[r2][c2];
		const parent1 = find([r1, c1]);
		const parent2 = find([r2, c2]);

		if (!isSameCoords(parent1, parent2)) {
			parent[r2][c2] = parent1;
		}

		iterateAll((i, j) => {
			if (isSameCoords(parent[i][j], parent2)) {
				parent[i][j] = parent1;
			}
			if (isSameCoords(parent[i][j], parent1)) {
				cell[i][j] = value;
			}
		});
	}

	function unmerge(param) {
		const [r, c] = param;
		const value = cell[r][c];
		const target = find([r, c]);

		iterateAll((i, j) => {
			if (isSameCoords(parent[i][j], target)) {
				cell[i][j] = '';
				parent[i][j] = [i, j];
			}
		});

		cell[r][c] = value;
	}

	function print(param) {
		const [r, c] = param;

		return cell[r][c] === '' ? 'EMPTY' : cell[r][c];
	}

	function find(coord) {
		const [r, c] = coord;

		if (isSameCoords([r, c], parent[r][c])) {
			return [Number(r), Number(c)];
		}

		parent[r][c] = find(parent[r][c]);

		return parent[r][c];
	}

	function isSameCoords(coord1, coord2) {
		return coord1.toString() === coord2.toString();
	}

	function iterateAll(callbackFn) {
		for (let i = 0; i < 51; i++) {
			for (let j = 0; j < 51; j++) {
				callbackFn(i, j);
			}
		}
	}
}
// function solution(commands) {
// 	var answer = [];
//     const max = commands.reduce((acc, command) => {
//         const idxs = getIndex(command.split(' ')).map((el) => Number(el));

//         return Math.max(acc, ...idxs);
//     }, 0);

// 	const board = Array.from({ length: max }, () => Array(max).fill('EMPTY'));
// 	const coordinate = Array.from({ length: max }, (_, i) =>
// 		Array.from({ length: max }, (__, j) => ({ idx: [i, j], parent: [i, j], child: [] })),
// 	);

// 	commands.forEach((c) => {
// 		const command = c.split(' ').map((el) => (isNaN(Number(el)) ? el : Number(el) - 1));

// 		switch (command[0]) {
// 			case 'UPDATE': {
// 				command.length === 4 ? updateByCoordinate(command, board, coordinate) : updateAtoB(command, board);
// 				break;
// 			}
// 			case 'MERGE': {
// 				merge(command, board, coordinate);
// 				break;
// 			}
// 			case 'UNMERGE': {
// 				unMerge(command, board, coordinate);
// 				break;
// 			}
// 			case 'PRINT': {
// 				const value = print(command, board, coordinate);
// 				answer.push(value);
// 				break;
// 			}
// 			default: {
// 				break;
// 			}
// 		}
// 	});

// 	return answer;
// }

// function updateAtoB(command, board) {
// 	const [_, v1, v2] = command;
// 	const len = board.length;

// 	for (let i = 0; i < len; i++) {
// 		for (let j = 0; j < len; j++) {
// 			if (board[i][j] === v1) {
// 				board[i][j] = v2;
// 			}
// 		}
// 	}
// }

// function updateByCoordinate(command, board, coordinate) {
// 	const [_, r, c, value] = command;

// 	changeValueByRecersive(value, coordinate[r][c], board, coordinate);
// }

// function merge(command, board, coordinate) {
// 	const [_, r1, c1, r2, c2] = command;

// 	if (r1 === r2 && c1 === c2) return;

// 	// 기존 부모에서 제거해야함
// 	const prevParent = coordinate[coordinate[r2][c2].parent[0]][coordinate[r2][c2].parent[1]];

//     // 최상위 부모까지 가서 값을 가져와야함
//     const prevValue = getValueByRecersive(coordinate[r2][c2], board, coordinate);
//     const currentValue = getValueByRecersive(coordinate[r1][c1], board, coordinate);

// 	prevParent.child = prevParent.child.filter(([x, y]) => x !== r2 && y !== c2);
// 	coordinate[r1][c1].child.push([r2, c2]);
// 	coordinate[r2][c2].parent = [r1, c1];

// 	const value = currentValue !== 'EMPTY' ? currentValue : prevValue;

//     changeValueByRecersive(value, coordinate[r1][c1], board, coordinate);

// 	board[r2][c2] = 'EMPTY';
// }

// function unMerge(command, board, coordinate) {
// 	const [_, r, c] = command;

// 	let root = null;
// 	let value = null;
// 	let nr = r,
// 		nc = c;

// 	while (value === null) {
// 		const { parent, child } = coordinate[nr][nc];

// 		if (parent[0] === nr && parent[1] === nc) {
// 			value = board[parent[0]][parent[1]];
// 			board[parent[0]][parent[1]] = 'EMPTY';
// 			root = coordinate[nr][nc];
// 		} else {
// 			board[nr][nc] = 'EMPTY';
// 			nr = parent[0];
// 			nc = parent[1];
// 		}
// 	}

// 	initInfoByRecersive(root, coordinate);
// 	board[r][c] = value;
// }

// function print(command, board, coordinate) {
// 	const [_, r, c] = command;

// 	let value = null;
// 	let info = coordinate[r][c];

// 	while (value === null) {
// 		const { parent, idx } = info;

// 		if (parent.every((dir, i) => dir === idx[i])) {
// 			value = board[parent[0]][parent[1]];
// 		} else {
// 			info = coordinate[parent[0]][parent[1]];
// 		}
// 	}

// 	return String(value);
// }

// function initInfoByRecersive(info, coordinate) {
// 	for (let i = 0; i < info.child.length; i++) {
// 		const [r, c] = info.child[i];

// 		initInfoByRecersive(coordinate[r][c], coordinate);
// 	}

// 	info.parent = [...info.idx];
// 	info.child = [];
// }

// function changeValueByRecersive(value, info, board, coordinate) {
// 	const p = info.parent;
// 	const idx = info.idx;

// 	if (p[0] === idx[0] && p[1] === idx[1]) board[idx[0]][idx[1]] = value;
// 	else changeValueByRecersive(value, coordinate[p[0]][p[1]], board, coordinate);
// }

// function getValueByRecersive(info, board, coordinate) {
//     const p = info.parent;
// 	const idx = info.idx;

// 	if (p[0] === idx[0] && p[1] === idx[1]) return board[idx[0]][idx[1]];

//     return getValueByRecersive(coordinate[p[0]][p[1]], board, coordinate);
// }

// function getIndex (command) {
//     switch (command[0]) {
//         case "UPDATE": {
//             return command.length === 4 ? [command[1], command[2]] : []
//         }
//         case "MERGE":
//         case "PRINT":
//         case "UNMERGE": {
//             const [_, ...nums] = command;
//             return nums;
//         }
//         default: {
//             return []
//         }
//     }
// }
