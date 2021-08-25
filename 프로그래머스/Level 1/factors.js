function solution(left, right) {
	var answer = 0;

	for (let i = left; i <= right; i++) {
		// 제곱근이 정수일 경우 약수의 개수는 홀수이다.
		!Number.isInteger(Math.sqrt(i)) ? (answer += i) : (answer -= i);
	}

	return answer;
}
