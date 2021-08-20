const solution = (n) => {
	let answer = 0;

	const dp = [1, 2];

	for (let i = 0; i < n - 1; i++) {
		dp[dp.length] = (dp[i] + dp[i + 1]) % 1000000007;
	}

	answer = dp[n - 1];

	return answer;
};

const n1 = 4;
console.log(solution(n1));
