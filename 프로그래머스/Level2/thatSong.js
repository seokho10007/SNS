function solution(m, musicinfos) {
	const result = [];

	// #이 붙은 음계는 소문자로 변경
	const listen = m.replace(/\w\#/g, (v) => v[0].toLowerCase());

	musicinfos.forEach((v) => {
		// , 단위로 문자열 분리
		const info = v.split(',');
		// 음악이 재생된 총 시간 계산
		const playtime = getMin(info[1]) - getMin(info[0]);
		// 음악의 멜로디 중 #음계 소문자로 변경
		const melody = info[3].replace(/\w\#/g, (v) => v[0].toLowerCase());
		// 1분에 한 음씩 재생되므로
		// 진행시간 / 멜로디의 길이 + 재생시간 % 멜로디의 길이
		const output =
			melody.repeat(Math.floor(playtime / melody.length)) +
			melody.substr(0, Math.floor(playtime % melody.length));

		// 출력된 멜로디에 사용자가 들은 멜로디가 있을 경우 push
		if (output.indexOf(listen) !== -1) result.push([playtime, info[2]]);
	});

	// result의 길이가 1이상일 때 (내가 들은 멜로디가 있을 때)
	// 재생시간이 긴 순으로 정렬 (재생 시간이 같을경우 순서를 바꾸지 않음)
	return result.length ? result.sort((a, b) => b[0] - a[0])[0][1] : '(None)';
}

// hh:mm 형태의 시간을 분단위로 계산하는 함수
const getMin = (time) => {
	const [hh, mm] = time.split(':');
	return hh * 60 + mm * 1;
};



// .....2레벨 맞나?
