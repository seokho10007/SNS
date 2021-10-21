const solution = (n, t, m, timetable) => {
	let answer = -1;

	const last = 540 + (n - 1) * t;
	const crews = timetable
		.map((v) => getMin(v))
		.filter((time) => time <= last)
		.sort((a, b) => b - a);

	let bus = 540;
	let con = 0;

	while (bus <= last) {
		for (let i = 1; i <= m; i++) {
			if (crews.length === 0) {
				return getTime(last);
			}
			const crew = crews.pop();

			if (bus < crew) {
				con = bus;
				crews.push(crew);
				break;
			}
			con = i === m ? crew - 1 : crew;
		}
		bus += t;
	}

	return answer;
};

const getMin = (time) => {
	const arr = time.split(':');
	const [h, m] = [Number(arr[0]) * 60, Number(arr[1])];
	return h + m;
};

const getTime = (min) => {
	const [h, m] = [String(Math.floor(min / 60)), String(min % 60)];
	return `${h.length === 1 ? '0' + h : h}:${m.length === 1 ? '0' + m : m}`;
};

const n1 = 1;
const t1 = 1;
const m1 = 5;
const time1 = ['08:00', '08:01', '08:02', '08:03'];

console.log(solution(n1, t1, m1, time1));
