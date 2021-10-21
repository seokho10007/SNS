function solution(tickets) {
	const result = dfs('ICN', tickets, [], []);

	return result.sort()[0];
}

const dfs = (port, tickets, visit, result) => {
	visit.push(port);

	if (!tickets.length) {
		result.push(visit);
		return result;
	}

	tickets.forEach(([now, next], i) => {
		if (now === port) {
			const arr = [...tickets];
			arr.splice(i, 1);
			dfs(next, arr, [...visit], result);
		}
	});

	return result;
};
