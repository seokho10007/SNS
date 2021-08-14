const solution = (arr) => {
	if (arr.length === 0) return 0;
	let profit = 0;

	let buy = Array(arr.length).fill(0);

	for (let i = 0; i < arr.length - 1; i++) {
		if (i === 0) buy[i] = arr[i];
		else buy[i] = Math.min(buy[i - 1], arr[i]);

		arr[i + 1] - buy[i] > profit && (profit = arr[i + 1] - buy[i]);
	}

	return profit < 0 ? 0 : profit;
};
