function solution(d, budget) {
	var answer = 0;

	d.sort((a, b) => b - a);

	let sum = 0;

	while (d.length) {
		const price = d.pop();

		if (sum + price <= budget) {
			sum += price;
			answer++;
		} else break;
	}

	return answer;
}
