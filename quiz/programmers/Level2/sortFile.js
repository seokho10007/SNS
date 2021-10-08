function solution(files) {
	return files.sort((a, b) => {
		const [head1, num1] = matchValue(a);
		const [head2, num2] = matchValue(b);

		if (head1 > head2) return 1;
		else if (head1 < head2) return -1;
		else {
			if (num1 > num2) return 1;
			else if (num1 < num2) return -1;
		}
	});
}

const matchValue = (value) => {
	const el = value.match(/[a-zA-Z .-]+|\d{1,5}/g);
	return [el[0].toLowerCase(), Number(el[1])];
};
