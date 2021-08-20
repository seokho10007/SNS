const solution = (play_time, ady_time, logs) => {
	const play_time_second = makeSecond(play_time);
	const ady_time_second = makeSecond(ady_time);

	const time = Array(play_time_second).fill(0);

	if (ady_time_second === play_time_second) return '00:00:00';

	logs.forEach((v) => {
		const [start, end] = v.split('-');
		time[makeSecond(start)]++;
		time[makeSecond(end)]--;
	});

	// 시청자 수 누적합으로 구하기
	for (let i = 1; i <= play_time_second; i++) time[i] += time[i - 1];

	// 누적 재생횟수 누적합으로 구하기
	for (let i = 1; i <= play_time_second; i++) time[i] += time[i - 1];

	let sum = time[ady_time_second - 1];
	let idx = 0;

	for (let i = ady_time_second - 1; i < play_time_second; i++) {
		if (sum < time[i] - time[i - ady_time_second]) {
			sum = time[i] - time[i - ady_time_second];
			idx = i - ady_time_second + 1;
		}
	}

	return formatterTime(idx);
};

const makeSecond = (hhmmss) => {
	const [hh, mm, ss] = hhmmss.split(':');
	return hh * 3600 + mm * 60 + ss * 1;
};

const formatterTime = (time) => {
	let HH = (time / 3600) >> 0;
	let MM = ((time / 60) >> 0) % 60;
	let SS = time % 60;

	HH = HH > 9 ? HH : '0' + HH;
	MM = MM > 9 ? MM : '0' + MM;
	SS = SS > 9 ? SS : '0' + SS;

	return `${HH}:${MM}:${SS}`;
};
// 10 25

const p1 = '02:03:55';
const a1 = '00:14:15';
const l1 = [
	'01:20:15-01:45:14',
	'00:40:31-01:00:00',
	'00:25:50-00:48:29',
	'01:30:59-01:53:29',
	'01:37:44-02:02:30',
	// '00:00:00-00:14:15',
];

console.log(solution(p1, a1, l1));
