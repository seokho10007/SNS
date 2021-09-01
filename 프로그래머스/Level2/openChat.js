function solution(record) {
	const answer = [];
	const userInfo = {};

	for (let i = 0; i < record.length; i++) {
		const arr = record[i].split(' ');
		if (arr[0] === 'Enter' || arr[0] === 'Change') userInfo[arr[1]] = arr[2];
	}

	record.forEach((v) => {
		const arr = v.split(' ');
		if (arr[0] === 'Enter') answer.push(`${userInfo[arr[1]]}님이 들어왔습니다.`);
		else if (arr[0] === 'Leave') answer.push(`${userInfo[arr[1]]}님이 나갔습니다.`);
	});

	return answer;
}
