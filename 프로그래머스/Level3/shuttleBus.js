// 새삼.. 실력 많이 늘었다..

function solution(n, t, m, timetable) {
	// 줄선 사람들을 시간대별로 정렬
	const arr = timetable.map((v) => getMin(v)).sort((a, b) => a - b);
	// 앞으로 올 버스를 시간 대 별로 정렬
	const operating = getOperatingTime(540, n, t);

	let result = 0;

	// 올 버스가 남아있고 탈 사람이 있을 경우
	while (arr.length && operating.length) {
		// 버스 도착
		const bus = operating.shift();
		// 도착하는 시간을 버스가 온시간으로 변경
		result = bus;

		let count = 0;

		// 버스가 가득차지 않았고 탈 사람이 남아있을 경우 실행
		while (count !== m && arr.length) {
			// 줄선 사람이 버스가 도착한 시간보다 일찍 도착했을 경우
			if (arr[0] <= bus) {
				// 해당 문제는 "가장 늦게 도작하는 시간"이다.
				// 따라서 버스를 탈 수 있는 사람보다 1분 더 일찍 도착하면 된다.
				result = arr.shift() - 1;
				// 버스에 탄사람 증가
				count++;
			} else break;
		}

		// 탑승 인원이 남았지만 더이상 탑승할 인원이 없을 경우
		// 버스에 자리가 남아있기 때문에 이미 탑승한 사람보다 1분 일찍 도착하는 것보다
		// 버스가 도착하는 시간에 맞춰 도착할 경우 가장 늦은 시간에 버스에 탑승할 수 있다.
		if (count < m && !arr.length) result = bus;
	}

	return parsingTime(result);
}

// 분단위로 저장된 시간을 문자열로 파싱
const parsingTime = (time) => {
	const h = Math.floor(time / 60);
	const m = time % 60;
	return `${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}`;
};

// 문자열로 저장된 시간을 계산하여 분단위로 저장
const getMin = (time) => {
	const [h, m] = time.split(':');
	return h * 60 + m * 1;
};

// 버스가 도착하는 시간 계산
const getOperatingTime = (time, n, t) => {
	const arr = [];
	for (let i = 0; i < n; i++) arr.push(time + t * i);
	return arr;
};
