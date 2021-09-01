function solution(n, t, m, p) {
	var answer = '';
	let result = '';
	let count = 0;

	while (result.length < t * m) result += (count++).toString(n);
	for (let i = p - 1; i < result.length; i += m) {
        answer += result[i];
        if (answer.length === t) break;
    }

	return answer.toUpperCase();
}
