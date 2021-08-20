const solution = (distance, rocks, n) => {
	let answer = 0;
	let [left, right, mid] = [1, distance, 0];
	rocks.sort((a, b) => a - b);

	while (left <= right) {
		let now = 0;
		let cnt = 0;
		mid = Math.floor((left + right) / 2);

		for (const index in rocks) {
			if (mid > rocks[index] - now) cnt++;
			else now = rocks[index];
			console.log(rocks[index], now);
		}

		if (distance - now < mid) cnt++;

		if (cnt <= n) {
			left = mid + 1;
			answer = Math.max(answer, mid);
		} else {
			right = mid - 1;
		}
	}

	return answer;
};

const d1 = 25;
const r1 = [2, 14, 11, 21, 17];
const n1 = 2;
console.log(solution(d1, r1, n1));
