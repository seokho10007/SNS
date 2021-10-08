function solution(n) {
	const dp = [1, 2];

	for (let i = 2; i < n; i++) dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;

	return dp[n - 1];
}

const n1 = 4;

console.log(solution(n1));
1 / 1;
2 / 2;
3 / 3;
4 / 5;
5 / 8;
6 / 13;

111111;
1;
21111;
12111;
11211;
11121;
11112;
5;
2211;
2121;
2112;
1212;
1221;
1122;
6;
222;
1;
