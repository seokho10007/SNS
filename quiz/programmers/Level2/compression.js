function solution(msg) {
	var answer = [];
	const dic = {};

	for (let i = 0; i < 26; i++) dic[String.fromCharCode(i + 65)] = i + 1;

	let cnt = 26;

	let str = '';
	const arr = msg.split('');

	while (arr.length) {
		str += arr.shift('');

		if (dic[str]) {
			// 첫번째 요소 제거
			while (arr.length) {
				let s = str;
				str += arr[0];

				if (!dic[str]) {
					dic[str] = ++cnt;
					answer.push(dic[s]);
					str = '';
					break;
				}
				arr.shift('');
			}
		}

		if (str.length !== 0) answer.push(dic[str]);
	}

	return answer;
}
