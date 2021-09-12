function solution(user_id, banned_id) {
	const list = banned_id.map((el) =>
		user_id.filter((v) => v.length === el.length && v.split('').every((s, i) => s === el[i] || el[i] === '*')),
	);

	const set = new Set();

	const dfs = (idx, result) => {
		if (result.length === banned_id.length) return set.add(result.sort().join(''));

		list[idx].forEach((v) => {
			if (!result.includes(v)) dfs(idx + 1, [...result, v]);
		});
	};

	dfs(0, []);

	return set.size;
}
