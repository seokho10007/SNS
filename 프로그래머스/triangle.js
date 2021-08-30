function solution(n) {
	let row = -1;
	let col = 0;
	const arr = [];

	for (let i = 1; i <= n; i++) arr.push(Array(i).fill(0));

	let cnt = 1;

	for (let i = n; i > 0; i -= 3) {
		for (let j = 0; j < i; j++) arr[++row][col] = cnt++;
		for (let j = 0; j < i - 1; j++) arr[row][++col] = cnt++;
		for (let j = 0; j < i - 2; j++) arr[--row][--col] = cnt++;
	}

	return arr.flat();
}
