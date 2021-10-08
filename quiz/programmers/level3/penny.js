function solution(n, money) {
	let dp = [1, ...new Array(n).fill(0)];
	for (let i = 0; i < money.length; i++)
		for (let j = 0; j < n + 1; j++) j >= money[i] && (dp[j] += dp[j - money[i]]);

	return dp[n];
}

const n1 = 5;
const m1 = [1, 2, 5];
console.log(solution(n1, m1));
