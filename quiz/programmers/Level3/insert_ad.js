function solution(play_time, adv_time, logs) {
	const pt = getTime(play_time);
	const at = getTime(adv_time);

	const dp = Array(pt).fill(0);

	const list = logs.map((el) => {
		const [a, b] = el.split('-');
		return [getTime(a), getTime(b)];
	});

	for (let i = 0; i < list.length; i++) {
		const [start, end] = list[i];

		dp[start] += 1;
		dp[end] -= 1;
	}

	for (let i = 1; i < pt; i++) dp[i] += dp[i - 1];
	for (let i = 1; i < pt; i++) dp[i] += dp[i - 1];

	let sum = dp[at - 1];
	let answer = 0;

	for (let i = at - 1; i < pt; i++) {
		if (sum < dp[i] - dp[i - at]) {
			sum = dp[i] - dp[i - at];
			answer = i - at + 1;
		}
	}

	return getStr(answer);
}

const getTime = (time) => {
	const [h, m, s] = time.split(':');

	return h * 3600 + m * 60 + s * 1;
};

const getStr = (time) => {
	const h = Math.floor(time / 3600);
	const m = Math.floor((time % 3600) / 60);
	const s = Math.floor(time % 60);

	return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
};
