function solution(lines) {
	var answer = 0;

	const list = [];

	const arr = lines.map((el) => {
		const [_, time, sec] = el.split(' ');

		const end = getSec(time.split(':')) * 1000;
		const start = end - sec.substring(0, sec.length - 1) * 1000 + 1;

		list.push(start, end);

		return [start, end];
	});

	list.sort((a, b) => a - b);

	for (let i = 0; i < list.length; i++) {
		const [start, end] = [list[i], list[i] + 1000];
		let count = 0;

		arr.forEach((el) => {
			const [st, ed] = el;

			if ((st >= start && st < end) || (ed >= start && ed < end) || (st <= start && ed >= end)) count++;
		});
		answer = Math.max(count, answer);
	}

	return answer;
}

const getSec = (time) => time[0] * 3600 + time[1] * 60 + time[2] * 1;
