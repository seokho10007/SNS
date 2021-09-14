const [num, ...ex] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const list = [' ', '-', '+'];

const dfs = (arr, now, idx, len, result) => {
	if (idx === len) return result.push(now);

	for (let i = 0; i < list.length; i++) dfs(arr, now + list[i] + arr[idx], idx + 1, len, result);

	return result;
};

for (let i = 0; i < num; i++) {
	const arr = Array.from({ length: ex[i] }, (_, i) => i + 1);
	const result = dfs(arr, '1', 1, arr.length, []).sort();
	let str = '';

	result.forEach((v) => {
		const price = eval(v.replace(/\s/gi, ''));

		if (price === 0) str += `${v}\n`;
	});
	console.log(str);
}
