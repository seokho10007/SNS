const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//bfs
const n = Number(input.shift());
const arr = input.map((row) => row.split(' ').map(Number));

const xpos = [-1, 1, 0, 0];
const ypos = [0, 0, -1, 1];

const pos = [
	[0, 0],
	[n - 1, 0],
	[0, 0],
	[0, n - 1],
];

function solution(n, board) {
	let answer = Math.max(...board.flat());

	const q = [[board.map((b) => b.slice()), 0]];

	while (q.length) {
		const [b, count] = q.shift();

		if (count === 10) continue;

		// 네 방향 확인
		for (let i = 0; i < 4; i++) {
			const p = [xpos[i], ypos[i]];
			const map = b.map((el) => el.slice());

			// 다음 줄
			for (let j = 0; j < n; j++) {
				// 줄이 바뀔 경우 어떻게 판단 할 것인가?
				// 상하 이동: y + 1
				// 좌우 이동: x + 1
				const set = new Set();
				const ns = i < 2 ? [0, j] : [j, 0];

				// 해당 줄의 모든 요소
				for (let k = 0; k < n; k++) {
					const nc = i < 2 ? [k * p[0] * -1, 0] : [0, k * p[1] * -1];

					const xy = pos[i];

					let [x, y] = [xy[0] + ns[0] + nc[0], xy[1] + ns[1] + nc[1]];

					// 0이면 위치바꿈
					// 같으면 합치고 멈춤
					// 다르면 멈춤
					while (map[x][y] !== 0) {
						const [nx, ny] = [x + p[0], y + p[1]];

						// 끝까지 갔다면
						if (!checkBoard(nx, ny, n)) break;

						const current = map[x][y];
						const target = map[nx][ny];

						if (current === target) {
							// 이미 합쳐진 요소라면 합치지 않음
							if (set.has(`${nx},${ny}`)) break;

							set.add(`${nx},${ny}`);
							answer = Math.max(answer, current * 2);
							map[nx][ny] = current * 2;
							map[x][y] = 0;
							break;
						}

						if (target === 0) {
							// target이 0이라면
							// 위치 바꾸고 기존 위치값 0으로 변경
							map[nx][ny] = current;
							map[x][y] = 0;
							[x, y] = [nx, ny];
							continue;
						}

						break;
					}
				}
			}

			q.push([map, count + 1]);
		}
	}

	return answer;
}

function checkBoard(x, y, n) {
	return x >= 0 && x < n && y >= 0 && y < n;
}

console.log(solution(n, arr));
