function solution(participant, completion) {
	const info = {};
	participant.forEach((v) => {
		if (info.hasOwnProperty(v)) info[v] += 1;
		else info[v] = 1;
	});

	completion.forEach((v) => (info[v] -= 1));

	for (const key in info) if (info[key] > 0) return key;
}
