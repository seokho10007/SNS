const solution = (n) => {
	const dp = [1, 2];

	for (let i = 0; i < n - 1; i++) 
		dp[dp.length] = (dp[i] + dp[i + 1]) % 1000000007;
	
	return  dp[n - 1];
};

