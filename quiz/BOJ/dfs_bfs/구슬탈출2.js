// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = `10 10
##########
#R#...##B#
#...#.##.#
#####.##.#
#......#.#
#.######.#
#.#....#.#
#.#.##...#
#O..#....#
##########
`
	.trim()
	.split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((row) => row.split(''));

const xpos = [-1, 1, 0, 0];
const ypos = [0, 0, -1, 1];

// 생각
// 쭉 미끄러지다 분기점 나왔을때 count++
// 이동 방향에 구슬이 있을 경우: 스택에 쌓음 -> 카운트 기록 -> 해당 카운트 만큼 이동
function solution(n, m, board) {
	let answer = -1;

	const [red, blue] = findBead(board);

	const q = [[red, blue, 0, board.map((b) => [...b])]];

	while (q.length && answer < 0) {
		let [red, blue, count, newBoard] = q.shift();

		if (red[0] === 4 && red[1] === 5) {
			console.log({ red, blue, count });
		}

		if (count > 10) {
			answer = -1;
			break;
		}

		// 이동 방향에 더 가까운 구슬어 더 먼저 움직여야함
		for (let i = 0; i < 4; i++) {
			const data = { R: null, B: null };
			const str = sortArrByPos(red, blue, i);
			const list = str === 'R' ? [red, blue] : [blue, red];

			let isInRed = false;
			let isInBlue = false;

			for (let j = 0; j < 2; j++) {
				const [x, y] = list[j];
				let [nx, ny] = [x, y];

				while (true) {
					nx += xpos[i];
					ny += ypos[i];

					// 현재 좌표
					const current = newBoard[nx][ny];

					if (list[j] === red && current === 'O') {
						console.log({ count, nx, ny });
						isInRed = true;
						break;
					}
					if (list[j] === blue && current === 'O') {
						isInBlue = true;
						break;
					}

					// 이동시 벽이거나 먼저 움직인 구슬이 있을때 멈춘다.
					if (current === '#' || current === 'R' || current === 'B') {
						const bead = j === 0 ? 'R' : 'B';
						data[bead] = [nx - xpos[i], ny - ypos[i]];
						break;
					}
				}
			}

			// 파란 구슬이 구멍에 빠질 경우 다른 경우의 수를 찾아봄
			if (isInBlue) {
				continue;
			}

			// 빨간 구슬이 구멍에 빠질경우 최소 경로기 때문에 카운트 반환
			if (isInRed) {
				answer = count + 1;
				break;
			}

			const isEqual = Object.keys(data).every((key) => {
				const bead = data[key];
				const prev = key === 'R' ? red : blue;

				if (!bead) true;

				return bead[0] === prev[0] && bead[1] === prev[1];
			});

			if (isEqual) continue;

			q.push([data.R, data.B, count + 1, newBoard.map((b) => [...b])]);
		}
	}

	return answer > 10 ? -1 : answer;
}

function findBead(board) {
	const result = [null, null, null];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 'R') result[0] = [i, j];
			if (board[i][j] === 'B') result[1] = [i, j];
		}
	}

	return result;
}
function sortArrByPos(red, blue, pos) {
	switch (pos) {
		// 상: x가 더 작으면 먼저 움직임
		case 0: {
			return red[0] < blue[0] ? 'R' : 'B';
		}
		// 하: x가 더 크면 먼저 움직임
		case 1: {
			return red[0] > blue[0] ? 'R' : 'B';
		}
		//좌: y가 더 작으면 먼저 움직임
		case 2: {
			return red[1] < blue[1] ? 'R' : 'B';
		}
		//우: y가 더 크면 먼저 움직임
		case 3: {
			return red[1] > blue[1] ? 'R' : 'B';
		}
		default:
			break;
	}
}

console.log(solution(N, M, map));
