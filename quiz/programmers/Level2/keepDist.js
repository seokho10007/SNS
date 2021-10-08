// // const solution = (places) => {
// // 	let answer = [];

// // 	answer = places.map((el) => checkDist(el));

// // 	return answer;
// // };

// // const checkDist = (place) => {
// // 	let result = 1;

// // 	console.log(place);

// // 	const loc = [
// // 		[1, 0],
// // 		[-1, 0],
// // 		[0, 1],
// // 		[0, -1],
// // 	];

// // 	const queue = [];
// // 	for (let i = 0; i < 5; i++) {
// // 		if (!place[i].includes('P')) continue;
// // 		for (let j = 0; j < 5; j++) {
// // 			const visited = Array.from(Array(5), () => Array(5).fill(false));

// // 			if (place[i][j] === 'P') {
// // 				queue.push([i, j]);
// // 				while (queue.length !== 0) {
// // 					if (result === 0) break;

// // 					const [x, y] = queue.shift();
// // 					visited[x][y] = true;

// // 					if (place[x][y] === 'X') continue;
// // 					else {
// // 						if (place[x][y] === 'P')
// // 							if (i !== x && j !== y) if (checkMht(i, x, j, y)) result = 0;

// // 						for (let k = 0; k < loc.length; k++) {
// // 							const [nextX, nextY] = [loc[k][0] + x, loc[k][1] + y];
// // 							if (isValidPos(nextX, nextY))
// // 								place[nextX][nextY] !== 'X' &&
// // 									!visited[nextX][nextY] &&
// // 									queue.push([nextX, nextY]);
// // 						}
// // 					}
// // 				}
// // 			}
// // 			console.log(visited);
// // 			if (result === 0) return result;
// // 		}
// // 	}

// // 	return result;
// // };

// // const checkMht = (x1, x2, y1, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 2;
// // const isValidPos = (x, y) => 0 <= x && x < 5 && 0 <= y && y < 5;

// // const loc = [
// // 	[1, 0],
// // 	[-1, 0],
// // 	[0, 1],
// // 	[0, -1],
// // ];

// // const solution = (places) => {
// // 	let answer = [];

// // 	answer = places.map((el) => checkDist(el));

// // 	return answer;
// // };

// // const checkDist = (place) => {
// // 	const visited = Array.from(Array(5), () => Array(5).fill(false));
// // 	let result = 1;
// // 	console.log(place);

// // 	for (let i = 0; i < place.length; i++) {
// // 		if (!place[i].includes('P')) continue;
// // 		for (let j = 0; j < place[i].length; j++) {
// // 			if (place[i][j] === 'P') result = dfs([i, j], [i, j], place, visited, 1);
// // 			if (result === 0) break;
// // 		}
// // 		if (result === 0) break;
// // 	}
// // 	return result;
// // };

// // // 매개변수: P인 좌표, 현재 좌표, 맵, 방문여부, 검사여부
// // const dfs = (check, now, place, visited, result) => {
// // 	if (result === 0) return result;

// // 	const [x, y] = [check[0], check[1]];
// // 	const [nowX, nowY] = [now[0], now[1]];

// // 	// if (!checkMht(x, nowX, y, nowY)) return result;

// // 	visited[nowX][nowY] = true;

// // 	if (place[nowX][nowY] !== 'X') {
// // 		if (place[nowX][nowY] === 'P') {
// // 			if (x !== nowX && y !== nowY) {
// // 				if (checkMht(x, nowX, y, nowY)) {
// // 					console.log(Math.abs(x - nowX) + Math.abs(y - nowY));
// // 					result = 0;
// // 				}
// // 			}
// // 		}

// // 		if (result === 0) return result;

// // 		for (let i = 0; i < loc.length; i++) {
// // 			const [nextX, nextY] = [loc[i][0] + nowX, loc[i][1] + nowY];

// // 			if (nextX >= 0 && nextX < 5 && nextY >= 0 && nextY < 5) {
// // 				if (place[nextX][nextY] !== 'X') {
// // 					if (!visited[nextX][nextY]) {
// // 						result = dfs(check, [nextX, nextY], place, visited, result);
// // 					}
// // 				}
// // 			}
// // 			if (result === true) break;
// // 		}
// // 	}

// // 	return result;
// // };

// // const checkMht = (x1, x2, y1, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 2;

// const n = 5;
// const d = [
// 	[0, 1],
// 	[1, 0],
// 	[0, -1],
// 	[-1, 0],
// ];
// const isValidPos = (x, y) => 0 <= x && x < n && 0 <= y && y < n;
// const isCorona = (place, x, y) => {
// 	const chk = Array.from(Array(5), (_) => new Array(5).fill(false));
// 	const q = [];
// 	chk[x][y] = true;
// 	q.push([x, y]);
// 	let depth = 2;
// 	while (q.length && depth--) {
// 		let len = q.length;
// 		while (len--) {
// 			[x, y] = q[0];
// 			q.shift();
// 			d.forEach((v) => {
// 				const [nx, ny] = [x + v[0], y + v[1]];
// 				if (!isValidPos(nx, ny) || chk[nx][ny] || place[nx][ny] === 'X') return;
// 				q.push([nx, ny]);
// 				chk[nx][ny] = true;
// 			});
// 		}
// 		const ret = q.reduce((ret, [x, y]) => place[x][y] === 'P' || ret, false);
// 		if (ret) return ret;
// 	}

// 	return false;
// };

// const go = (ans, place) => {
// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < n; j++) {
// 			if (place[i][j] === 'P' && isCorona(place, i, j)) {
// 				ans.push(0);
// 				return ans;
// 			}
// 		}
// 	}

// 	ans.push(1);
// 	return ans;
// };

// function solution(places) {
// 	return places.reduce(go, []);
// }

const loc = [
	[0, 1],
	[1, 0],
	[-1, 0],
	[0, -1],
];

const solution = (places) => {
	let answer = [];

	answer = places.map((el) => checkDist(el));

	return answer;
};

const checkDist = (place) => {
	let result = 1;

	for (let i = 0; i < 5; i++) {
		if (!place[i].includes('P')) continue;
		for (let j = 0; j < 5; j++) {
			if (place[i][j] === 'P') {
				const visited = Array.from(Array(5), () => Array(5).fill(false));
				result = dfs([i, j], [i, j], visited, place, 0);
				if (result === 0) return result;
			}
		}
	}

	return result;
};

// 확인좌표
const dfs = (check, now, visited, place, count) => {
	if (count > 2) return 1;

	const [checkX, checkY] = [check[0], check[1]];
	const [x, y] = [now[0], now[1]];

	if (place[x][y] === 'P') if (!(checkX === x && checkY === y)) return 0;

	visited[x][y] = true;

	for (let i = 0; i < loc.length; i++) {
		const [nextX, nextY] = [loc[i][0] + x, loc[i][1] + y];

		if (isValidPos(nextX, nextY) && place[nextX][nextY] !== 'X') {
			if (!visited[nextX][nextY]) {
				const r = dfs(check, [nextX, nextY], visited, place, count + 1);
				if (r === 0) return 0;
			}
		}
	}

	return 1;
};

const isValidPos = (x, y) => 0 <= x && x < 5 && 0 <= y && y < 5;
const checkMht = (x1, x2, y1, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 2;

const p = [
	['PPOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
	['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
	['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
	['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
	['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
];

const p2 = [
	['OOOOO', 'OOOOO', 'OOOOO', 'OOOOO', 'OOOOO'],
	['OOOOO', 'OOOOO', 'OOOOO', 'OOOOO', 'OOOOO'],
	['OOOOO', 'OOOOO', 'OOOOO', 'OOOOO', 'OOOOO'],
	['OOOOO', 'OOOOO', 'OOOOO', 'OOOOO', 'OOOOO'],
	['OOOOO', 'OOOOO', 'OOOOO', 'OOOOO', 'OOOOO'],
];

const p3 = [
	['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
	['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
	['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
	['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
	['XXXXX', 'XXXXX', 'XXXXX', 'XXXXX', 'XXXXX'],
];

console.log(solution(p));

// 앉은 사람이 있는가
// 같은 줄에 앉은 사람이 있는가 -> 파티션이 있는가 -> 파티션이 없으면 맨허튼 거리가 2 이상인가
// 아래나 윗줄에 앉은 사람이 있는가 -> 있다면 파티션이 있는가 -> 없다면 맨허튼 거리가 2 이상인가
0, 0, 1, 2;

1 + 2;

0, 0, 0, 3;
0 - 0 + 0 - 3;
