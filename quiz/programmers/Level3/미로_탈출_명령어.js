// 사전순으로: D L R U
const xpos = [1, 0, 0, 1];
const ypos = [0, -1, 1, 0];
const DIRECTION = ['d', 'l', 'r', 'u'];

// 탈출 할 수 있는 모든 조건을 찾아야함
// 갔던 곳을 또 갈 수 있음
// bfs? 사전순으로 순서를 돌려서 조건을 충족했을 경우 멈춤
// 그래도 시간초과 날 것 같은데..
function solution(n, m, x, y, r, c, k) {
	const endDist = k - Math.abs(x - r) + Math.abs(y - c);

	if (endDist < 0 || endDist % 2 !== 0) return 'impossible';

	let answer = 'z'.repeat(k);

	function dfs(px, py, dist) {
		const mahattan = Math.abs(x - r) + Math.abs(y - c) + dist.length + 1;

		if (dist.length > k) return;
		if (mahattan > k) return;
		if (dist.length === k && px === r - 1 && py === c - 1) {
			if (answer > dist) {
				answer = dist;
				return;
			}
		}

		if (answer !== 'z'.repeat(k)) return;

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [xpos[i] + px, ypos[i] + py];
			const d = DIRECTION[i];

			if (!checkMapRange(nx, ny, n, m)) continue;

			dfs(nx, ny, dist + d);
		}
	}

	dfs(x - 1, y - 1, '');

	return answer;
}

function checkMapRange(x, y, n, m) {
	return x >= 0 && x < n && y >= 0 && y < m;
}

const props = [4, 4, 1, 1, 4, 4, 16];

console.log(solution(...props));
