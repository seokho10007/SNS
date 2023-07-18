function solution(arrayA, arrayB) {
	const n = arrayA.length;

	let aGcd = arrayA[0];
	let bGcd = arrayB[0];

	const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

	for (let i = 1; i < n; i++) {
		const r = arrayA[i];
		const c = arrayB[i];

		aGcd = gcd(aGcd, r);
		bGcd = gcd(bGcd, c);
	}

	const result = [];

	const a = checkArray(aGcd, arrayB);
	const b = checkArray(bGcd, arrayA);

	if (a) result.push(aGcd);
	if (b) result.push(bGcd);

	return result.length ? Math.max(...result) : 0;
}

function checkArray(num, arr) {
	return arr.every((n) => n % num !== 0);
}
