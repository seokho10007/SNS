// 이분 탐색으로 풀었지만 3중 for문으로 인해 테케 2번 시간초과

function solution(a, b, g, s, w, t) {
	var answer = 0;
	const info = getInfo(g, s, w, t);

	let left = 1;
	let right = 100000;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		const check = getBool(info, mid, a, b);

		if (check) {
			answer = mid;
			right = mid - 1;
		} else left = mid + 1;
	}

	return answer;
}

const getBool = (info, mid, gold, silver) => {
	let result = gold + silver;
	let time = 0;

	for (let i = 0; i < info.length; i++) {
		let [g, s, w, t] = [info[i][0], info[i][1], info[i][2], info[i][3]];
		let tt = 0;

		while (result > 0 && g + s > 0) {
			// 트럭 출발

			// 트럭에 싣을 광물
			let sum = 0;

			// 금부터
			// 남은 금이 있고 금이 더 필요할 때
			if (g > 0 && gold > 0) {
				if (g > w) {
					sum = w;
					// 필요한 금이 싣은 금보다 적을 경우
					if (gold < sum) {
						sum = gold;
						g = 0;
					} else g -= sum;
				} else {
					sum = g;

					if (gold < sum) {
						sum = gold;
						g = 0;
					} else g -= sum;
				}
				gold -= sum;
			}

			// 남은 은이 있고 상대가 은이 필요하며 트럭에 싣은 광물이 최대값보다 작을 때
			if (s > 0 && silver > 0 && sum < w) {
				// 트럭에 싣은 은
				let ss = 0;
				// 가지고 있는 은이 트럭에 싣을 수 있는 양보다 클 때
				if (s > w - sum) {
					ss = w - sum;

					// 필요한 은이 싣은 은보다 작을 때
					if (ss > silver) {
						ss = silver;
						s = 0;
					} else s -= ss;
				} else {
					ss = s;
					// 필요한 은이 싣은 은보다 작을 때
					if (ss > silver) {
						ss = silver;
						s = 0;
					} else s -= ss;
				}
				silver -= ss;
				sum += ss;
			}

			result -= sum;

			tt += t;
			if (result <= 0 || g + s <= 0) break;
			else tt += t;
		}
		if (time < tt) time = tt;
	}

	if (result <= 0 && mid >= time) return true;
	else return false;
};

const getInfo = (g, s, w, t) => {
	const arr = [];

	for (let i = 0; i < g.length; i++) arr.push([g[i], s[i], w[i], t[i]]);

	return arr;
};
